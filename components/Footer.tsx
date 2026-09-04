import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pb-12 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/footer.png"
          alt="Footer"
          width={1440}
          height={909}
          className="h-auto w-full"
        />
      </div>
    </footer>
  );
}
