"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("tentang");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] transition-all duration-200 ${
        isScrolled
          ? "bg-[rgba(237,253,246,0.95)] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.06)] border-b border-[#d6e6e0]"
          : "bg-[rgba(237,253,246,0.9)] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px] h-[80px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-[12px] group">
          <div className="size-[42px] relative shrink-0">
            <Image
              src="/capsi-logo-transparent.png"
              alt="CAPSI Logo"
              width={42}
              height={42}
              className="size-full object-contain"
              priority
            />
          </div>
          <span className="font-bold text-[#003527] text-[24px] tracking-[-0.6px] leading-[24px]">
            CAPSI
          </span>
        </Link>

        {/* Center Nav Links - exact Figma 1:1 */}
        <nav className="hidden md:flex items-center gap-[4px]">
          <a
            href="#hero"
            onClick={() => setActiveNav("tentang")}
            className={`px-[14px] py-[8px] rounded-[8px] transition-colors leading-[24px] ${
              activeNav === "tentang"
                ? "bg-[#d6e6e0] text-[#003527] text-[16px] font-normal"
                : "text-[#404944] text-[14px] font-normal hover:text-[#003527]"
            }`}
          >
            Tentang CAPSI
          </a>
          <a
            href="#solusi"
            onClick={() => setActiveNav("solusi")}
            className={`px-[14px] py-[8px] rounded-[8px] transition-colors leading-[20px] ${
              activeNav === "solusi"
                ? "bg-[#d6e6e0] text-[#003527] text-[16px] font-normal"
                : "text-[#404944] text-[14px] font-normal hover:text-[#003527]"
            }`}
          >
            Solusi AIoT
          </a>
          <a
            href="#pilot"
            onClick={() => setActiveNav("pilot")}
            className={`px-[14px] py-[8px] rounded-[8px] transition-colors leading-[20px] ${
              activeNav === "pilot"
                ? "bg-[#d6e6e0] text-[#003527] text-[16px] font-normal"
                : "text-[#404944] text-[14px] font-normal hover:text-[#003527]"
            }`}
          >
            Pilot Project
          </a>
          <a
            href="#alur"
            onClick={() => setActiveNav("alur")}
            className={`px-[14px] py-[8px] rounded-[8px] transition-colors leading-[20px] ${
              activeNav === "alur"
                ? "bg-[#d6e6e0] text-[#003527] text-[16px] font-normal"
                : "text-[#404944] text-[14px] font-normal hover:text-[#003527]"
            }`}
          >
            Cara Kerja
          </a>
          <a
            href="#kontak"
            onClick={() => setActiveNav("kontak")}
            className={`px-[14px] py-[8px] rounded-[8px] transition-colors leading-[20px] ${
              activeNav === "kontak"
                ? "bg-[#d6e6e0] text-[#003527] text-[16px] font-normal"
                : "text-[#404944] text-[14px] font-normal hover:text-[#003527]"
            }`}
          >
            Kontak
          </a>
        </nav>

        {/* Right Auth Links - exact Figma 1:1 */}
        <div className="hidden md:flex items-center gap-[12px]">
          <Link
            href="/masuk"
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center min-h-[44px] px-[16px] py-[12px] rounded-[8px] text-[#003527] text-[14px] font-semibold hover:bg-slate-50 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/daftar"
            className="bg-[#003527] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center min-h-[44px] px-[20px] py-[12px] rounded-[8px] text-white text-[14px] font-semibold hover:bg-[#064e3b] transition-colors"
          >
            Registrasi
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#003527] hover:bg-[#d6e6e0] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#edfdf6] border-b border-[#d6e6e0] px-6 pt-2 pb-6 space-y-2">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#003527]"
          >
            Tentang CAPSI
          </a>
          <a
            href="#solusi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#404944] hover:text-[#003527]"
          >
            Solusi AIoT
          </a>
          <a
            href="#pilot"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#404944] hover:text-[#003527]"
          >
            Pilot Project
          </a>
          <a
            href="#alur"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#404944] hover:text-[#003527]"
          >
            Cara Kerja
          </a>
          <a
            href="#kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#404944] hover:text-[#003527]"
          >
            Kontak
          </a>
          <div className="pt-3 border-t border-[#d6e6e0] flex items-center gap-3">
            <Link
              href="/masuk"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-sm font-semibold text-[#003527] bg-white rounded-lg border border-[#d6e6e0]"
            >
              Login
            </Link>
            <Link
              href="/daftar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-sm font-semibold text-white bg-[#003527] rounded-lg"
            >
              Registrasi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
