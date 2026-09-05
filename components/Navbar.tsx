"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1400px] mx-auto font-sans bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5">
        {/* Logo Section */}
        <Link href="/" className="relative flex items-center hover:scale-105 transition-transform">
          <Image
            src="/images/hook-logo.png"
            alt="Hook Logo"
            width={110}
            height={51}
            className="object-contain"
            priority
          />
        </Link>

        {/* Center Navigation Links (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#market-associate"
            className="text-[17px] text-[#222222] font-medium hover:text-black hover:opacity-80 transition-opacity"
          >
            Market associate
          </Link>
          <Link
            href="#users"
            className="text-[17px] text-[#222222] font-medium hover:text-black hover:opacity-80 transition-opacity"
          >
            Users
          </Link>
        </div>

        {/* Right Action Buttons (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="bg-black text-white px-7 py-3 rounded-[32px] text-[16px] font-medium hover:bg-gray-800 transition-colors"
          >
            Appstore
          </Link>
          <Link
            href="#"
            className="bg-[#FFC107] text-white px-7 py-3 rounded-[32px] text-[16px] font-medium hover:brightness-95 transition-all shadow-sm"
          >
            Playstore
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="md-hide flex items-center justify-center text-black"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md-hide px-6 pb-6 flex flex-col gap-5 border-t border-gray-100">
          <Link
            href="#market-associate"
            onClick={() => setOpen(false)}
            className="text-[17px] text-[#222222] font-medium"
          >
            Market associate
          </Link>
          <Link
            href="#users"
            onClick={() => setOpen(false)}
            className="text-[17px] text-[#222222] font-medium"
          >
            Users
          </Link>
          <div className="flex items-center gap-3 pt-1">
            <Link
              href="#"
              className="bg-black text-white px-7 py-3 rounded-[32px] text-[16px] font-medium"
            >
              Appstore
            </Link>
            <Link
              href="#"
              className="bg-[#FFC107] text-white px-7 py-3 rounded-[32px] text-[16px] font-medium"
            >
              Playstore
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
