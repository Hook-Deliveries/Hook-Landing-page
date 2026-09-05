"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMPTY_FORM = {
  fullName: "",
  whatsapp: "",
  email: "",
  location: "",
  market: "",
};

type Toast = { type: "success" | "error"; message: string } | null;

export default function MarketAssociateCards() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setToast(null), 4000);
  };

  // Clear the auto-hide timer if the component unmounts mid-show.
  useEffect(
    () => () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    },
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.fullName,
          reply_to: formData.email,
          whatsapp: formData.whatsapp,
          location: formData.location,
          market: formData.market,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      // Success: notify with a green toast, then reset the form so it's empty.
      setFormData(EMPTY_FORM);
      showToast("success", "Application successful!");
    } catch (error) {
      console.error("EmailJS error:", error);
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="market-associate" className="w-full min-h-screen bg-[#FAF8F5] p-4 md:p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Left Card - Dark */}
        <div className="flex-1 bg-[#333333] rounded-[32px] p-8 md:p-12 text-white shadow-lg">
          <p className="text-[#FFD700] text-sm font-medium mb-4">
            Work With Hook in the Market
          </p>
          <h2 className="text-[28px] md:text-[32px] font-semibold leading-tight mb-10 text-gray-50">
            Join Hook as a Market Associate and help bring real products from
            physical markets to customers online.
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 mt-1">
                <NumberBadge number="1" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Apply</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  Fill out a short application to join our <br className="hidden sm:block" /> market team.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 mt-1">
                <NumberBadge number="2" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Get Selected</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  Our team reviews your application and contacts <br className="hidden sm:block" /> successful applicants
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 mt-1">
                <NumberBadge number="3" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Get Onboarded</h3>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  We train you and get you ready to start working with <br className="hidden sm:block" /> Hook.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Yellow (Functional Form) */}
        <div className="flex-1 bg-[#FDEE94] rounded-[32px] p-8 md:p-12 text-black shadow-lg relative overflow-hidden">
          {/* Abstract background line */}
          <svg className="absolute top-0 right-0 w-64 h-64 text-yellow-300 opacity-50 pointer-events-none" viewBox="0 0 200 200" fill="none">
            <path d="M150,-20 C180,50 100,100 200,150" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M120,-30 C160,80 50,120 220,180" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <div className="relative z-10">
            <p className="text-gray-600 text-[15px] font-medium mb-2">
              What you will do
            </p>
            <h2 className="text-[26px] font-bold mb-6">
              Now this is where it get interesting
            </h2>

            <ul className="space-y-3 mb-10">
              <BulletItem text="Capture and upload products" />
              <BulletItem text="Verify orders before pickup" />
              <BulletItem text="Collect items from vendors" />
              <BulletItem text="Hand orders over to Hook hub manager" />
              <BulletItem text="Get paid for every successful task" />
            </ul>

            <h3 className="text-lg font-bold mb-4">Apply Now</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-white outline-none text-[15px] text-gray-800 focus:ring-2 focus:ring-yellow-400 shadow-sm"
                />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-white outline-none text-[15px] text-gray-800 focus:ring-2 focus:ring-yellow-400 shadow-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-white outline-none text-[15px] text-gray-800 focus:ring-2 focus:ring-yellow-400 shadow-sm"
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City / Location"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-white outline-none text-[15px] text-gray-800 focus:ring-2 focus:ring-yellow-400 shadow-sm"
                />
              </div>
              <input
                type="text"
                name="market"
                value={formData.market}
                onChange={handleChange}
                placeholder="Which market do you operate in or know well?"
                required
                className="w-full px-5 py-3.5 rounded-full bg-white outline-none text-[15px] text-gray-800 focus:ring-2 focus:ring-yellow-400 shadow-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#FACC15] hover:bg-[#EAB308] text-white font-bold text-[16px] py-4 rounded-full transition-colors shadow-md disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success / error toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 rounded-full py-3 px-6 font-bold text-[15px] shadow-2xl ${
            toast.type === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full ${
              toast.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {toast.type === "success" ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </span>
          {toast.message}
        </div>
      )}
    </section>
  );
}

/* --- Reusable Sub-components --- */

function NumberBadge({ number }: { number: string }) {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Orange Scalloped Outer SVG */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md">
        <path
          fill="#FF5722"
          d="M50 0 l5 10 10 -5 5 10 10 -2 3 10 10 2 0 10 10 5 -2 10 8 8 -8 8 2 10 -10 5 0 10 -10 2 -3 10 -10 -2 -5 10 -10 -5 -5 10 -5 -10 -10 5 -5 -10 -10 2 -3 -10 -10 -2 0 -10 -10 -5 2 -10 -8 -8 8 -8 -2 -10 10 -5 0 -10 10 -2 3 -10 10 2 5 -10 10 5Z"
        />
      </svg>
      {/* Yellow Inner Circle */}
      <div className="relative bg-[#FFC107] w-7 h-7 rounded-full flex items-center justify-center border-[2px] border-[#FF5722]">
        <span className="text-black font-bold text-sm">{number}</span>
      </div>
    </div>
  );
}

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-[15px] text-gray-800">
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {/* Custom Purple Cube Icon SVG */}
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#9333EA" />
          <path d="M2 17l10 5V12L2 7v10z" fill="#7E22CE" />
          <path d="M22 17l-10 5V12l10-5v10z" fill="#A855F7" />
          <circle cx="12" cy="7" r="2" fill="#FBBF24" />
        </svg>
      </div>
      {text}
    </li>
  );
}
