import Image from "next/image";
import NoTrafficCard from "@/components/NoTrafficCard";
import NoCrowdsCard from "@/components/NoCrowdsCard";
import ClearPricesCard from "@/components/ClearPricesCard";

export default function Spotlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24">
      {/* Text above */}
      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/images/spotlight-text.png"
          alt="Spotlight heading"
          width={581}
          height={256}
          className="h-auto w-full"
        />
      </div>

      {/* Cards below in a row */}
      <div className="mt-10 grid grid-cols-1 items-end gap-y-8 sm:grid-cols-3 sm:gap-y-0">
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
    </section>
  );
}
