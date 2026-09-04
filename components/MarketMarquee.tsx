export default function MarketMarquee() {
  const markets = ["BALOGUN", "TEJUOSHO", "MANDILAS", "Tradefair", "YABA"];

  // Duplicate the array multiple times to ensure seamless looping
  const repeatedMarkets = [...markets, ...markets, ...markets, ...markets, ...markets];

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] -mt-16 overflow-hidden bg-white font-sans">
      {/* Yellow Banner (Bottom layer) — locked to center, rotated up */}
      <div className="absolute top-1/2 left-[-10%] w-[120%] -translate-y-1/2 bg-[#FFC107] py-3 sm:py-4 -rotate-[6deg] z-10 shadow-md">
        <div className="animate-marquee-left flex gap-12 sm:gap-24">
          {repeatedMarkets.map((market, idx) => (
            <span
              key={`yellow-${idx}`}
              className="text-black font-bold text-3xl sm:text-[42px] uppercase tracking-wider whitespace-nowrap"
            >
              {market}
            </span>
          ))}
        </div>
      </div>

      {/* Black Banner (Top layer) — locked to center, rotated down */}
      <div className="absolute top-1/2 left-[-10%] w-[120%] -translate-y-1/2 bg-black py-3 sm:py-4 rotate-[6deg] z-20 shadow-2xl">
        <div className="animate-marquee-right flex gap-12 sm:gap-24">
          {repeatedMarkets.map((market, idx) => (
            <span
              key={`black-${idx}`}
              className="text-[#FFC107] font-bold text-3xl sm:text-[42px] uppercase tracking-wider whitespace-nowrap"
            >
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
