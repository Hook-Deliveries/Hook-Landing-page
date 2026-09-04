import Image from "next/image";

export default function Logistics() {
  return (
    <section className="pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/logistics.png"
          alt="From their shop to your door"
          width={1440}
          height={617}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
