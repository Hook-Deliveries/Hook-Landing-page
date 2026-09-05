"use client";

import { useEffect, useRef } from "react";
import type { VideoHTMLAttributes } from "react";

type AutoPlayVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  className?: string;
};

/**
 * <video> that reliably autoplays and loops forever.
 *
 * Native `autoplay` is flaky — browsers pause muted videos when they're scrolled
 * off-screen, when a section is revealed, or when the tab regains focus, and the
 * clip can end up stuck on its last frame needing a manual tap to restart. This
 * pauses off-screen clips, then re-triggers playback from JS (on pause, on end,
 * on scroll-into-view, and when the tab becomes visible again) so the animation
 * keeps running automatically whenever it's on screen.
 */
export default function AutoPlayVideo({
  className,
  ...props
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    // Starts false: a clip is only played once it nears the viewport, so we
    // never buffer/decode every video on the page at once.
    let nearViewport = false;

    const tryPlay = () => {
      if (cancelled || !nearViewport || !video.paused) return;
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          /* Autoplay can be rejected; the next trigger will retry. */
        });
      }
    };

    // Defer the actual download until we're about to need it.
    const activate = () => {
      if (video.getAttribute("preload") !== "auto") {
        video.setAttribute("preload", "auto");
        video.load();
      }
      tryPlay();
    };

    const restart = () => {
      video.currentTime = 0;
      tryPlay();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    // A pause we didn't ask for (browser throttling, decode hiccup, etc.)
    // shouldn't leave the clip frozen — resume it while it's near the viewport.
    const onPause = () => {
      if (nearViewport) tryPlay();
    };

    video.addEventListener("pause", onPause);
    video.addEventListener("ended", restart);
    document.addEventListener("visibilitychange", onVisibility);

    if (typeof IntersectionObserver === "undefined") {
      // No observer support: fall back to plain autoplay.
      nearViewport = true;
      activate();
      return () => {
        cancelled = true;
        video.removeEventListener("pause", onPause);
        video.removeEventListener("ended", restart);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }

    // Start loading/playing ~300px before the clip enters the viewport and
    // pause it once it has scrolled well out of sight. Keeps at most the few
    // on-screen videos decoding at once instead of every video on the page.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          nearViewport = entry.isIntersecting;
          if (nearViewport) {
            activate();
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "300px 0px", threshold: 0 }
    );
    observer.observe(video);

    return () => {
      cancelled = true;
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", restart);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      {...props}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
