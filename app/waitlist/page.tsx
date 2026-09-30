import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaitlistComponent from "@/components/WaitlistComponent";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Be first to shop from your favourite open-air markets when Hook launches.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      {/* Minimal header — the main Navbar's links are home-page anchors,
          so it isn't reused here. */}
      <header className="w-full max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="relative flex items-center hover:scale-105 transition-transform"
        >
          <Image
            src="/images/hook-logo-v2.png"
            alt="Hook Logo"
            width={110}
            height={32}
            className="object-contain"
            priority
          />
        </Link>

        <Link
          href="/"
          className="text-ink-muted hover:text-ink text-[15px] font-medium transition-colors"
        >
          ← Back to home
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-xl flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight mb-4">
            Join the Hook waitlist
          </h1>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed mb-10">
            Be first to shop from your favourite open-air markets when we launch.
          </p>

          {/* Heading is supplied above, so the card renders the fields only. */}
          <WaitlistComponent showHeading={false} />
        </div>
      </div>
    </main>
  );
}
