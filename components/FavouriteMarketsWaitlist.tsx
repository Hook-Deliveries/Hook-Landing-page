import Image from "next/image";
import Link from "next/link";
import WaitlistButton from "@/components/WaitlistButton";

export default function FavouriteMarketsWaitlist() {
  return (
    <section className="w-full bg-white min-h-[80vh] flex items-center pt-6 pb-20 px-6 font-sans overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-8">
        {/* Left Column: Image & Waitlist Form */}
        <div className="flex-1 w-full max-w-2xl z-10 flex flex-col justify-center">
          {/* Text Image exported from Figma */}
          <div className="relative w-full max-w-[550px] aspect-[4/3] mb-2">
            <Image
              src="/images/hero-text-v2.png"
              alt="Your Favourite Markets. Now Just a Tap Away."
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          <WaitlistButton className="self-start" />

          <p className="text-ink-muted text-[15px] mt-4">
            Get notified when Hook goes live.{" "}
            <Link href="#" className="text-ember hover:underline transition-colors">
              Join community.
            </Link>
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative z-0 mt-12 md:mt-0">
          <div className="relative w-full max-w-[400px] aspect-[478/543] flex items-center justify-center">
            <Image
              src="/images/hero-right.png"
              alt="Hook app"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
