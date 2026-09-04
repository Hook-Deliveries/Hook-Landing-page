import Image from "next/image";

const PHONES = [
  { src: "/images/showcase-1.png", alt: "Hook app screen 1" },
  { src: "/images/showcase-2.png", alt: "Hook app screen 2" },
  { src: "/images/showcase-3.png", alt: "Hook app screen 3" },
];

export default function Showcase() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <div className="relative">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-3 sm:gap-y-0">
            {PHONES.map((phone) => (
              <div key={phone.src} className="w-full">
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={408}
                  height={444}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>

          {/* Fade overlay at the bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0">
            <Image
              src="/images/fade.png"
              alt=""
              width={1440}
              height={186}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
