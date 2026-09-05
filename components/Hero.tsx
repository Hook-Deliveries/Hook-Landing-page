import Image from "next/image";
import AutoPlayVideo from "@/components/AutoPlayVideo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-6">
      {/* Hero: text left, image right */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
        {/* Left: text */}
        <div className="mx-auto w-full max-w-xl">
          <Image
            src="/images/hero-text.png"
            alt="Hook — your favourite markets, now just a tap away"
            width={567}
            height={402}
            className="h-auto w-full"
          />
        </div>

        {/* Right: video */}
        <div className="mx-auto w-full max-w-sm">
          <AutoPlayVideo
            src="/videos/market-cards.mp4"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
