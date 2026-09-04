import Image from "next/image";

export default function Features() {
  return (
    <section className="overflow-hidden py-12">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="shrink-0">
            <Image
              src="/images/features.png"
              alt="Market shopping, minus the wahala"
              width={1440}
              height={307}
              className="h-36 w-auto sm:h-44"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
