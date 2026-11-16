"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ChevronDown, LogOut, ArrowLeft } from "lucide-react";

interface DashboardNavbarProps {
  activeTab?: "beranda" | "monitoring" | "peringatan" | "riwayat" | "profil";
}

export default function DashboardNavbar({ activeTab = "beranda" }: DashboardNavbarProps) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#e2e8f0] sticky top-0 z-40 h-[76px] px-4 lg:px-[64px] flex items-center justify-between shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        {/* Left: CAPSI Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-[12px] group" title="Kembali ke Landing Page">
            <div className="size-[38px] relative shrink-0">
              <Image
                src="/capsi-logo-transparent.png"
                alt="CAPSI Logo"
                width={38}
                height={38}
                className="size-full object-contain"
                priority
              />
            </div>
            <span className="font-bold text-[#003527] text-[22px] tracking-[-0.5px]">
              CAPSI
            </span>
          </Link>
        </div>

        {/* Center: Main Navigation Segmented Control */}
        <nav className="hidden md:flex items-center bg-[#f1f5f9] p-[4px] rounded-[12px] gap-[4px] text-[14px]">
          <Link
            href="/beranda"
            className={`px-[16px] py-[8px] rounded-[8px] font-medium transition-all ${
              activeTab === "beranda"
                ? "bg-[#003622] text-white shadow-sm"
                : "text-[#475569] hover:text-[#0f172a] hover:bg-white/60"
            }`}
          >
            Beranda
          </Link>

          <Link
            href="/monitoring"
            className={`px-[16px] py-[8px] rounded-[8px] font-medium transition-all ${
              activeTab === "monitoring"
                ? "bg-[#003622] text-white shadow-sm"
                : "text-[#475569] hover:text-[#0f172a] hover:bg-white/60"
            }`}
          >
            Monitoring
          </Link>

          <Link
            href="/peringatan"
            className={`px-[16px] py-[8px] rounded-[8px] font-medium transition-all flex items-center gap-[6px] ${
              activeTab === "peringatan"
                ? "bg-[#003622] text-white shadow-sm"
                : "text-[#475569] hover:text-[#0f172a] hover:bg-white/60"
            }`}
          >
            <span>Peringatan</span>
            <span className="bg-[#dc2626] text-white text-[11px] font-bold px-[6px] py-[1px] rounded-full">
              1
            </span>
          </Link>

          <Link
            href="/riwayat"
            className={`px-[16px] py-[8px] rounded-[8px] font-medium transition-all ${
              activeTab === "riwayat"
                ? "bg-[#003622] text-white shadow-sm"
                : "text-[#475569] hover:text-[#0f172a] hover:bg-white/60"
            }`}
          >
            Riwayat
          </Link>
        </nav>

        {/* Right: User Profile Pill */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-[10px] bg-[#f8fafc] hover:bg-[#f1f5f9] border border-[#e2e8f0] px-[12px] py-[7px] rounded-full transition-all text-[#0d1c2e]"
          >
            <div className="size-[28px] rounded-full bg-[#003622] text-white flex items-center justify-center shrink-0">
              <User className="size-[15px]" />
            </div>
            <span className="text-[13px] font-semibold hidden sm:inline-block">
              Kawan AgroBersama
            </span>
            <ChevronDown className="size-3.5 text-[#64748b]" />
          </button>

          {/* Dropdown Menu */}
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-[#e2e8f0] rounded-xl shadow-lg py-2 z-50">
              <div className="px-4 py-2 border-b border-[#f1f5f9]">
                <p className="text-[12px] text-[#64748b]">Masuk sebagai</p>
                <p className="text-[14px] font-semibold text-[#0d1c2e] truncate">Kawan AgroBersama</p>
                <p className="text-[11px] text-[#16a34a]">Mitra Budidaya Sumedang</p>
              </div>

              <Link
                href="/profil"
                className={`flex items-center gap-2 px-4 py-2 text-[13px] transition-colors ${
                  activeTab === "profil"
                    ? "bg-[#ecfdf5] text-[#003622] font-semibold"
                    : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#003622]"
                }`}
                onClick={() => setProfileDropdownOpen(false)}
              >
                <User className="size-4" />
                <span>Pengaturan Profil</span>
              </Link>

              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-[13px] text-[#475569] hover:bg-[#f8fafc] hover:text-[#003622]"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <ArrowLeft className="size-4" />
                <span>Lihat Landing Page</span>
              </Link>

              <Link
                href="/masuk"
                className="flex items-center gap-2 px-4 py-2 text-[13px] text-[#dc2626] hover:bg-[#fef2f2]"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <LogOut className="size-4" />
                <span>Keluar Akun</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
