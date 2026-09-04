import Image from "next/image";
import RealMarketPricesCard from "@/components/RealMarketPricesCard";
import MoreChoicesCard from "@/components/MoreChoicesCard";
import ShopWithConfidenceCard from "@/components/ShopWithConfidenceCard";

export default function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
      {/* Text above */}
      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/images/valueprops-text.png"
          alt="More ways to shop better"
          width={596}
          height={125}
          className="h-auto w-full"
        />
      </div>

      {/* Cards below in a row */}
      <div className="mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-4 md:gap-y-0">
        <div className="flex w-full justify-center">
          <RealMarketPricesCard />
        </div>
        <div className="flex w-full justify-center">
          <MoreChoicesCard />
        </div>
        <div className="flex w-full justify-center">
          <ShopWithConfidenceCard />
        </div>
      </div>
    </section>
  );
}
