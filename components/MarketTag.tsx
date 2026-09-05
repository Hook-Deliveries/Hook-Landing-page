import AutoPlayVideo from "@/components/AutoPlayVideo";

export default function MarketTag() {
  return (
    <div className="relative flex items-center w-max font-sans drop-shadow-sm">
      {/* Left Slanted Handle (Sharper Edges) */}
      <div className="relative flex items-center h-[76px] pl-8 pr-12 -mr-8 z-0">
        <svg
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full text-[#FF5511]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path updated for sharper corners:
              L 8 92 Q 0 91 0 82 (tight bottom-left curve)
              L 0 18 Q 0 9 8 8   (tight top-left curve) */}
          <path d="M 200 0 L 200 100 L 8 92 Q 0 91 0 82 L 0 18 Q 0 9 8 8 Z" />
        </svg>

        <span className="relative z-10 text-white text-[32px] font-black tracking-wide">
          MARKET
        </span>
      </div>

      {/* Right Scalloped Badge Wrapper */}
      <div className="relative w-[116px] h-[116px] z-10 flex items-center justify-center">
        {/* Scalloped SVG Background */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full text-[#FF9E66]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 2.5 C 55 2.5, 59 0, 64 3 C 69 6, 68 11, 73 14 C 78 17, 84 15, 87 20 C 90 25, 87 30, 89 35 C 91 40, 97 43, 97 48 C 97 53, 91 56, 89 61 C 87 66, 90 71, 87 76 C 84 81, 78 79, 73 82 C 68 85, 69 90, 64 93 C 59 96, 55 93.5, 50 93.5 C 45 93.5, 41 96, 36 93 C 31 90, 32 85, 27 82 C 22 79, 16 81, 13 76 C 10 71, 13 66, 11 61 C 9 56, 3 53, 3 48 C 3 43, 9 40, 11 35 C 13 30, 10 25, 13 20 C 16 15, 22 17, 27 14 C 32 11, 31 6, 36 3 C 41 0, 45 2.5, 50 2.5 Z" />
        </svg>

        {/* Inner GIF Image Container */}
        <div className="relative w-[78px] h-[78px] rounded-full overflow-hidden bg-[#F5F5F5] z-20 shadow-inner">
          <AutoPlayVideo
            src="/videos/box.mp4"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
