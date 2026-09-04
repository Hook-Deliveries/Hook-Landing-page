import Image from "next/image";

export default function Gallery() {
  return (
    <section className="pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/gallery.png"
          alt="Hook gallery"
          width={1440}
          height={947}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
