"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay before the reveal starts (ms). */
  delay?: number;
  /** Transition duration (ms). */
  duration?: number;
};

/**
 * Wraps a section/block and reveals it (fade + gentle rise) the first time it
 * scrolls into view. Content is shown immediately for users who prefer reduced
 * motion or when IntersectionObserver isn't available.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) node.style.transition = "none";

    // Reduced motion or no IntersectionObserver: reveal on the next frame.
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        // The transform is removed once revealed so it doesn't create a
        // containing block for fixed-position children (e.g. the toast).
        transform: visible ? "none" : "translateY(24px)",
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
