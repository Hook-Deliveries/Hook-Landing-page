import Image from "next/image";

export default function NoCrowdsCard() {
  return (
    <div className="w-full max-w-[320px] h-[480px] bg-black rounded-[32px] flex flex-col overflow-hidden shadow-xl font-sans border border-white/5">
      {/* Top Section (Text Content) */}
      <div className="p-8 pb-2 relative z-10">
        <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight">
          No Crowd
        </h3>
        <p className="text-[17px] text-gray-300 font-medium leading-snug pr-4">
          Browse the best stalls without the pushing and shoving.
        </p>
      </div>

      {/* Bottom Section (Animated Image) */}
      <div className="relative w-full flex-1 mt-auto flex items-end justify-center pb-2 bg-black">
        {/* 'animate-jump-wave' applies the continuous jump/tilt animation,
            'origin-bottom' pivots from the floor rather than the center. */}
        <div className="relative w-full h-[110%]">
          <Image
            src="/images/crowd.png"
            alt="3D people cheering and jumping"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
