import Image from "next/image";

export default function Steps() {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0">
          <div className="w-full">
            <Image
              src="/images/steps-1.png"
              alt="Steps"
              width={659}
              height={760}
              className="h-auto w-full"
            />
          </div>
          <div className="w-full">
            <Image
              src="/images/steps-2.png"
              alt="Steps"
              width={488}
              height={690}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
