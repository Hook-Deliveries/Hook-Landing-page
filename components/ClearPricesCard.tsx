import Image from "next/image";

export default function ClearPricesCard() {
  return (
    <div className="w-full max-w-[320px] h-[480px] bg-black rounded-[32px] flex flex-col overflow-hidden shadow-xl font-sans border border-white/5">
      {/* Top Section (Text Content) */}
      <div className="p-8 pb-2 relative z-10">
        <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight">
          Clear Prices
        </h3>
        <p className="text-[17px] text-gray-300 font-medium leading-snug pr-4">
          Skip the endless haggling. Get fair prices instantly.
        </p>
      </div>

      {/* Bottom Section (Animated Image) */}
      <div className="relative w-full flex-1 mt-auto bg-black flex items-end justify-center">
        {/* Subtle gradient overlay to blend the image into the black background */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        {/* 'animate-float-sway' applies the custom floating movement */}
        <div className="relative w-[110%] h-[110%] animate-float-sway">
          <Image
            src="/images/discount-cards.png"
            alt="Pink 3D discount coupons floating in smoke"
            fill
            className="object-cover object-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
