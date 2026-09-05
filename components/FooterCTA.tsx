"use client";
import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_WAITLIST_TEMPLATE_ID!,
        { waitlist_email: email },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-black py-16 md:py-24 px-4 sm:px-6 font-sans flex flex-col items-center">
      {/* Waitlist Call-To-Action */}
      <div className="text-center mb-16 w-full max-w-2xl flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white mb-6 tracking-tight">
          Ready to get Hooked?
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Your next favourite fit is just a tap away.
        </p>

        {/* Stacked on Mobile, Inline on Desktop */}
        <form
          onSubmit={handleWaitlistSubmit}
          className="w-full max-w-lg flex flex-col sm:flex-row items-stretch sm:items-center bg-transparent sm:bg-white rounded-[24px] sm:rounded-full p-0 sm:p-1.5 gap-4 sm:gap-0 mb-6 shadow-none sm:shadow-lg"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email e.g hook@gmail.com"
            required
            className="flex-1 px-6 py-4 sm:py-3 bg-white sm:bg-transparent rounded-full sm:rounded-none text-black outline-none placeholder-gray-400 text-[15px]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto bg-[#FFC107] hover:bg-[#F0B400] text-white font-bold py-4 sm:py-3.5 px-8 rounded-full transition-colors whitespace-nowrap disabled:opacity-70 flex justify-center items-center"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {status === "success" && <p className="text-green-400 font-medium mb-4">You&rsquo;ve been added to the waitlist!</p>}
        {status === "error" && <p className="text-red-400 font-medium mb-4">Something went wrong. Try again.</p>}

        <p className="text-gray-400 text-[15px]">
          Get notified when Hook goes live.{" "}
          <Link href="#" className="text-[#FF4500] hover:underline">Join community.</Link>
        </p>
      </div>

      {/* Footer Card */}
      <div className="w-full max-w-[1120px] bg-white rounded-[32px] p-8 sm:p-10 md:p-14 flex flex-col md:flex-row justify-between gap-12 shadow-2xl">
        {/* Left Column: Brand & Socials */}
        <div className="flex flex-col justify-between gap-12">
          <div>
            <h1 className="text-[40px] font-bold text-[#FFC107] leading-none mb-1">Hook</h1>
            <p className="text-gray-500 font-medium text-[15px]">Market Hook you</p>
          </div>

          <div>
            <p className="text-gray-500 font-medium text-[15px] mb-4">Stay connected</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="x" />
              <SocialIcon type="tiktok" />
            </div>
          </div>
        </div>

        {/* Right Column: Links & Legal */}
        <div className="flex flex-col justify-between md:items-end gap-12">
          {/* Nav Links (Stacked on Mobile) */}
          <nav className="flex flex-col space-y-3 sm:space-y-4 text-left md:text-right">
            {["Home", "How it works", "Market Associate", "Faq"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-gray-500 hover:text-black font-medium text-[15px] transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          {/* Legal Links (Stacked on Mobile, Row on Desktop) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-gray-500 text-[13px] font-medium">
            <Link href="/terms" className="hover:text-black transition-colors">Terms and condition</Link>
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy and policy</Link>
            <span>© 2026 Velaris Technologies Limited (Hook)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Reusable Social Icon Component --- */
function SocialIcon({ type }: { type: "instagram" | "facebook" | "x" | "tiktok" }) {
  const icons = {
    instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
    facebook: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
    tiktok: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  };

  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        {icons[type]}
      </svg>
    </div>
  );
}
