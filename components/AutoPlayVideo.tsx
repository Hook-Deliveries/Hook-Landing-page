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
    // Optimistically treat the clip as visible so it starts immediately; the
    // observer below flips this to false when it's actually off-screen.
    let inView = true;

    const tryPlay = () => {
      if (cancelled || !inView || !video.paused) return;
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
          /* Autoplay can be rejected; the next trigger will retry. */
        });
      }
    };

    const restart = () => {
      video.currentTime = 0;
      tryPlay();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    // A pause we didn't ask for (browser throttling, decode hiccup, etc.)
    // shouldn't leave the clip frozen — resume it.
    const onPause = () => {
      if (inView) tryPlay();
    };

    video.addEventListener("pause", onPause);
    video.addEventListener("ended", restart);
    document.addEventListener("visibilitychange", onVisibility);

    // Play while on screen, pause (and remember) when scrolled away.
    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            inView = entry.isIntersecting;
            if (inView) {
              tryPlay();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(video);
    }

    tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener("pause", onPause);
      video.removeEventListener("ended", restart);
      document.removeEventListener("visibilitychange", onVisibility);
      observer?.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      {...props}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
