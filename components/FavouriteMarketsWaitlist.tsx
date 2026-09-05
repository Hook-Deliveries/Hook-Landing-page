"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function FavouriteMarketsWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_WAITLIST_TEMPLATE_ID!,
        {
          email,
          waitlist_email: email,
          from_email: email,
          reply_to: email,
          from_name: "Hook Waitlist",
        },
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
    <section className="w-full bg-white min-h-[80vh] flex items-center pt-6 pb-20 px-6 font-sans overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-8">
        {/* Left Column: Image & Waitlist Form */}
        <div className="flex-1 w-full max-w-2xl z-10 flex flex-col justify-center">
          {/* Text Image exported from Figma */}
          <div className="relative w-full max-w-[550px] aspect-[4/3] mb-2">
            <Image
              src="/images/hero-text-v2.png"
              alt="Your Favourite Markets. Now Just a Tap Away."
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Functional Waitlist Form */}
          <div className="w-full max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row sm:items-center bg-white border border-gray-300 rounded-[24px] sm:rounded-full p-1.5 mb-4 gap-2 sm:gap-0 shadow-sm focus-within:border-[#FFC107] focus-within:ring-1 focus-within:ring-[#FFC107] transition-all"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email e.g hook@gmail.com"
                required
                className="w-full sm:flex-1 sm:min-w-0 px-5 py-3 bg-transparent text-black outline-none placeholder-gray-400 text-[15px]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto bg-[#FFC107] hover:bg-[#F0B400] text-white font-bold py-3.5 px-8 rounded-full transition-colors whitespace-nowrap disabled:opacity-70"
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-600 font-medium mb-2">
                You&rsquo;ve been added to the waitlist!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-medium mb-2">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="text-gray-500 text-[15px]">
              Get notified when Hook goes live.{" "}
              <Link href="#" className="text-[#FF5511] hover:underline transition-colors">
                Join community.
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative z-0 mt-12 md:mt-0">
          <div className="relative w-full max-w-[400px] aspect-[478/543] flex items-center justify-center">
            <Image
              src="/images/hero-right.png"
              alt="Hook app"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
