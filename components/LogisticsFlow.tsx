import MarketTag from "@/components/MarketTag";
import HookTag from "@/components/HookTag";
import YouTag from "@/components/YouTag";

export default function LogisticsFlow() {
  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center justify-center font-sans">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-[52px] leading-tight font-extrabold text-black mb-6 tracking-tight">
          From Their Shop <br className="hidden md:block" /> to Your Door.
        </h2>
        <p className="text-[19px] text-[#808080] font-medium">
          We handle the movement, so you don&rsquo;t have to.
        </p>
      </div>

      {/* Tag Row Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-5xl">
        <div className="flex justify-center">
          <MarketTag />
        </div>
        <div className="flex justify-center">
          <HookTag />
        </div>
        <div className="flex justify-center">
          <YouTag />
        </div>
      </div>
    </section>
  );
}
