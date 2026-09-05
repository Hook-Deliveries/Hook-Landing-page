import React from "react";

export default function MarketShoppingHero() {
  return (
    <section className="w-full bg-white py-24 px-6 flex flex-col items-center justify-center text-center font-sans">

      {/* Main Headline */}
      <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-extrabold leading-[1.05] tracking-tight mb-8">
        <span className="text-black block">Market Shopping,</span>
        <span className="text-[#D9D9D9] block mt-1">Minus the Wahala.</span>
      </h1>

      {/* Subtext */}
      <p className="text-[#7A7A7A] text-[18px] sm:text-[22px] md:text-[26px] font-medium leading-[1.5] max-w-3xl">
        Traffic. Crowd. Endless walking. &quot;How much last?&quot;
        <br className="hidden sm:block" />
        Hook makes it easier.
      </p>

    </section>
  );
}
