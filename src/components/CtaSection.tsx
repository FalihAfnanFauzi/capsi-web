"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden px-6 lg:px-[128px] py-[96px] text-white"
      style={{
        backgroundImage:
          "linear-gradient(154.55deg, rgb(0, 53, 39) 0%, rgb(6, 78, 59) 50%, rgb(0, 53, 39) 100%)",
      }}
    >
      {/* Visual Botanical Ambient Accents */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 w-[384px] h-[384px] rounded-full blur-[64px]"
        style={{ backgroundColor: "rgba(0, 109, 61, 0.25)" }}
      />
      <div
        className="pointer-events-none absolute top-10 left-10 w-[288px] h-[288px] rounded-full blur-[40px]"
        style={{ backgroundColor: "rgba(149, 211, 186, 0.12)" }}
      />

      <div className="relative z-10 max-w-[1024px] mx-auto flex flex-col gap-[32px] items-center text-center">
        {/* Paragraph+Overlay / Status Badge */}
        <div className="bg-white/10 backdrop-blur-xs flex items-center gap-[8px] px-[12px] py-[6px] rounded-full">
          <Sparkles className="w-[12px] h-[12px] text-[#b0f0d6]" />
          <span className="font-semibold text-[#b0f0d6] text-[12px] tracking-[0.12px]">
            Mitra Budidaya Modern Cabai Tropis
          </span>
        </div>

        {/* Heading 2 */}
        <div className="max-w-[768px]">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[40px] leading-[40px] sm:leading-[46px] lg:leading-[48px] font-bold text-white tracking-[-1px]">
            Tingkatkan Produktivitas Panen Cabai
            <br />
            Anda dengan Presisi Berbasis Data
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-[672px]">
          <p className="text-[#80bea6] text-[15px] sm:text-[16px] leading-[26px] font-normal">
            Gabung bersama pilot project CAPSI. Kelola risiko anomali cuaca, minimalkan kerugian
            gagal panen, dan pantau kesehatan kanopi dari ponsel Anda.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-[16px] items-center justify-center pt-[16px] w-full">
          <Link
            href="/beranda"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#003527] text-[14px] font-semibold min-h-[48px] px-[32px] py-[14px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-emerald-50 active:scale-95 transition-all"
          >
            <span>Buka Mode Evaluasi Demo</span>
            <ArrowRight className="w-4 h-4 text-[#003527]" />
          </Link>
          <Link
            href="/daftar"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[14px] font-semibold min-h-[48px] px-[32px] py-[14px] rounded-[8px] border border-white/20 active:scale-95 transition-all"
          >
            <ShieldCheck className="w-[18px] h-[18px] text-[#b0f0d6]" />
            <span>Daftar Sebagai Mitra Lahan</span>
          </Link>
        </div>

        {/* Institutional Endorsement / Research Collaborators Note */}
        <div className="border-t border-white/15 pt-[33px] flex items-center justify-center gap-[8px] w-full">
          <ShieldCheck className="w-[14px] h-[14px] text-[#95d3ba]" />
          <span className="text-[#95d3ba] text-[12px] font-normal">
            Inisiatif Riset AIoT Agronomi Nusantara
          </span>
        </div>
      </div>
    </section>
  );
}
