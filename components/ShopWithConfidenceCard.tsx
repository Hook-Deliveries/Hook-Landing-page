export default function ShopWithConfidenceCard() {
  return (
    <div className="w-full max-w-[320px] bg-[#FCC6EA] rounded-[32px] flex flex-col shadow-sm font-sans pt-2 px-2 pb-0">
      {/* Top Section (Black Background & Video) */}
      <div className="bg-black w-full h-[240px] rounded-[26px] relative flex items-center justify-center p-6 shadow-sm">
        <div className="relative w-[140px] h-[140px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/videos/valueprops-side.mp4"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Bottom Section (Text Content) */}
      <div className="px-4 py-8 text-center flex flex-col gap-2">
        <h3 className="text-[22px] font-bold text-black tracking-tight">
          Shop with confidence
        </h3>
        <p className="text-[17px] text-black/50 font-medium leading-snug">
          Know who you&rsquo;re buying <br /> from and track your order
        </p>
      </div>
    </div>
  );
}
