import MarketShoppingHero from "@/components/MarketShoppingHero";
import NoTrafficCard from "@/components/NoTrafficCard";
import NoCrowdsCard from "@/components/NoCrowdsCard";
import ClearPricesCard from "@/components/ClearPricesCard";

export default function Spotlight() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Text heading (replaces the spotlight-text.png image) */}
      <MarketShoppingHero />

      {/* Cards below in a row */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="grid grid-cols-1 items-end gap-y-8 sm:grid-cols-3 sm:gap-y-0">
          <div className="flex justify-center">
            <NoTrafficCard />
          </div>
          <div className="flex justify-center">
            <NoCrowdsCard />
          </div>
          <div className="flex justify-center">
            <ClearPricesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
