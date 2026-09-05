import AutoPlayVideo from "@/components/AutoPlayVideo";

export default function NoTrafficCard() {
  return (
    <div className="w-full max-w-[320px] h-[480px] bg-black rounded-[32px] flex flex-col overflow-hidden shadow-xl font-sans border border-white/5">
      {/* Top Section (Text Content) */}
      <div className="p-8 pb-2 relative z-10 bg-black">
        <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight">
          No Traffic
        </h3>
        <p className="text-[17px] text-gray-300 font-medium leading-snug pr-4">
          Skip the gridlock and shop directly from your phone.
        </p>
      </div>

      {/* Bottom Section (Video) */}
      <div className="relative w-full flex-1 mt-auto bg-black">
        {/* Subtle gradient overlay at the top for a seamless blend */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent z-10" />
        <AutoPlayVideo
          src="/videos/traffic-light.mp4"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
      </div>
    </div>
  );
}
