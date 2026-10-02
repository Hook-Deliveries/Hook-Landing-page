"use client";

import { Dialog } from "@base-ui/react/dialog";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import WaitlistComponent from "@/components/WaitlistComponent";

/**
 * Opens the waitlist form as a modal, in place, from anywhere on the site.
 *
 * The provider owns the single Dialog instance and publishes `openWaitlist`
 * to its subtree, so a trigger only needs the hook — the landing page never
 * navigates away. The form's own markup stays in `WaitlistComponent`, which
 * is also what the standalone `/waitlist` route renders.
 */

type WaitlistModalContextValue = { openWaitlist: () => void };

const WaitlistModalContext = createContext<WaitlistModalContextValue | null>(
  null
);

export function useWaitlistModal() {
  const value = useContext(WaitlistModalContext);
  if (!value) {
    throw new Error(
      "useWaitlistModal must be used inside <WaitlistModalProvider>"
    );
  }
  return value;
}

export default function WaitlistModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openWaitlist = useCallback(() => setIsOpen(true), []);
  const closeWaitlist = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ openWaitlist }), [openWaitlist]);

  return (
    <WaitlistModalContext.Provider value={value}>
      {children}

      {/* Uncontrolled by default, but driven here so any button can open it.
          Children unmount on close, which resets the form for the next open. */}
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="waitlist-backdrop fixed inset-0 z-[60] bg-obsidian/60 backdrop-blur-sm transition-opacity duration-150" />

          {/* Centred with `inset-0 m-auto` rather than a translate: a transform
              here would make the popup the containing block for the form's own
              fixed-position success overlay and clip it. */}
          <Dialog.Popup className="waitlist-popup no-scrollbar fixed inset-0 z-[61] m-auto flex h-fit max-h-[90dvh] w-[calc(100vw-2rem)] max-w-xl flex-col overflow-y-auto rounded-[32px] bg-cream p-6 font-sans shadow-2xl outline-none transition-opacity duration-150 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <Dialog.Title className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Join the Hook waitlist
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-[15px] leading-snug text-ink-muted">
                  Be first to shop from your favourite open-air markets.
                </Dialog.Description>
              </div>

              <Dialog.Close
                aria-label="Close waitlist form"
                className="-mr-2 -mt-2 shrink-0 rounded-full p-2 text-ink-muted transition-colors hover:bg-cream-deep hover:text-ink"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </Dialog.Close>
            </div>

            {/* Heading lives above, so the card renders the fields only. */}
            <WaitlistComponent showHeading={false} onDone={closeWaitlist} />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </WaitlistModalContext.Provider>
  );
}
