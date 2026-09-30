"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * The single "Join Waitlist" call-to-action.
 *
 * The form itself lives on /waitlist — this only navigates there, so the
 * landing page never renders the input fields inline. The route change is
 * deliberately held back by a short delay.
 */
const NAVIGATION_DELAY_MS = 1000;

export default function WaitlistButton({
  className = "",
  label = "Join Waitlist",
}: {
  className?: string;
  label?: string;
}) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <Link
      href="/waitlist"
      aria-busy={isNavigating}
      onClick={(e) => {
        // Let modified clicks (new tab, download, etc.) behave normally.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
          return;
        }
        // Keep the real href on the anchor, but hold the route change so a
        // double-click can't queue two navigations.
        e.preventDefault();
        if (isNavigating) return;
        setIsNavigating(true);
        setTimeout(() => router.push("/waitlist"), NAVIGATION_DELAY_MS);
      }}
      className={`inline-flex items-center justify-center bg-brand hover:bg-brand-strong text-ink font-bold text-[16px] px-8 py-4 rounded-full transition-colors ${className}`}
    >
      {label}
    </Link>
  );
}
