import Image from "next/image";

export default function ThreeSteps() {
  const steps = [
    {
      num: "1",
      title: "Get into the market",
      desc: "Get into the market and discover new styles.",
    },
    {
      num: "2",
      title: "Negotiate",
      desc: "Buy at the listed price or make an offer.",
    },
    {
      num: "3",
      title: "Receive It",
      desc: "We take care of getting your order to you.",
    },
  ];

  return (
    <section className="w-full bg-black pt-44 pb-20 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full text-white">
          <h2 className="text-5xl sm:text-[56px] font-extrabold leading-[1.1] mb-12 tracking-tight">
            Three Steps. <br />
            <span className="text-[#FFC107]">That&apos;s It.</span>
          </h2>

          <div className="space-y-10 lg:mb-14">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0">
                  <NumberBadge number={step.num} />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold mb-2">{step.title}</h3>
                  <p className="text-[17px] text-gray-300 font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join the Waitlist Button (desktop) */}
          <button className="hidden lg:inline-block bg-[#FFC107] hover:bg-[#F0B400] transition-colors text-black px-6 py-3.5 rounded-full font-bold text-[15px] shadow-lg">
            Join the Waitlist
          </button>
        </div>

        {/* Right Column: Composite Images */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[420px]">
            {/* Main Phone Background Image */}
            <div className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/videos/phone-mockup-bg.mp4"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Second phone video overlaid in the middle */}
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/videos/phone-bg-2.mp4"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56%] rounded-[24px]"
              />
            </div>

            {/* Floating Basket GIF (Middle Left) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-20 w-[180px] h-[180px] drop-shadow-2xl z-20">
              <Image
                src="/images/basket.png"
                alt="Shopping Basket"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating Box GIF (Top Right) */}
            <div className="absolute -top-12 -right-8 sm:-right-12 w-[160px] h-[160px] drop-shadow-2xl z-20">
              <Image
                src="/images/hook-box.png"
                alt="Hook Delivery Box"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Join the Waitlist Button (mobile — below the video) */}
      <div className="lg:hidden flex justify-center mt-10">
        <button className="bg-[#FFC107] hover:bg-[#F0B400] transition-colors text-black px-6 py-3.5 rounded-full font-bold text-[15px] shadow-lg">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}

/* --- Reusable Number Badge Sub-component --- */
function NumberBadge({ number }: { number: string }) {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      {/* Orange Scalloped Outer SVG */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md">
        <path
          fill="#FF5511"
          d="M50 0 l5 10 10 -5 5 10 10 -2 3 10 10 2 0 10 10 5 -2 10 8 8 -8 8 2 10 -10 5 0 10 -10 2 -3 10 -10 -2 -5 10 -10 -5 -5 10 -5 -10 -10 5 -5 -10 -10 2 -3 -10 -10 -2 0 -10 -10 -5 2 -10 -8 -8 8 -8 -2 -10 10 -5 0 -10 10 -2 3 -10 10 2 5 -10 10 5Z"
        />
      </svg>
      {/* Yellow Inner Circle */}
      <div className="relative bg-[#FFC107] w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-inner">
        <span className="text-black font-extrabold text-[13px]">{number}</span>
      </div>
    </div>
  );
}
