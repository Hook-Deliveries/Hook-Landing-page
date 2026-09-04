import Image from "next/image";

export default function FAQ() {
  return (
    <section className="pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/faq.png"
          alt="Frequently asked questions"
          width={1440}
          height={1183}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
