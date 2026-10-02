"use client";

import { useWaitlistModal } from "@/components/WaitlistModal";

/**
 * The single "Join Waitlist" call-to-action.
 *
 * Opens the waitlist form in a modal on the current page — it deliberately
 * does not navigate, so the visitor never leaves the landing page. The form
 * itself lives in `WaitlistComponent`, rendered by `WaitlistModalProvider`.
 */
export default function WaitlistButton({
  className = "",
  label = "Join Waitlist",
}: {
  className?: string;
  label?: string;
}) {
  const { openWaitlist } = useWaitlistModal();

  return (
    <button
      type="button"
      onClick={openWaitlist}
      className={`inline-flex items-center justify-center bg-brand hover:bg-brand-strong text-ink font-bold text-[16px] px-8 py-4 rounded-full transition-colors ${className}`}
    >
      {label}
    </button>
  );
}
