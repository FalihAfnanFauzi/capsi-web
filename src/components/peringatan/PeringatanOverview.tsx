"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  AlertTriangle,
  Compass,
  Droplet,
} from "lucide-react";

export default function PeringatanOverview() {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id="349:936"
      data-name="Peringatan — CAPSI Web Desktop"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="peringatan" />

      {/* 2. Main Body (Exact Figma dimensions: 1152px width, paddingTop 36px, gap 24px) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] py-[36px] flex-1 flex flex-col gap-[24px]"
        data-node-id="349:969"
      >
        {/* Header Title Bar */}
        <div
          className="w-full flex items-center justify-between"
          data-node-id="349:970"
        >
          <div data-node-id="349:971">
            <h1
              className="text-[20px] font-bold text-[#003622] leading-tight"
              data-node-id="349:972"
            >
              Peringatan Kejadian Hari Ini
            </h1>
            <p
              className="text-[13px] text-[#64748b] mt-1"
              data-node-id="349:973"
            >
              Daftar kejadian lapangan yang membutuhkan verifikasi petani
            </p>
          </div>
        </div>

        {/* Urgent Summary Alert Banner */}
        <div
          className="w-full bg-[#ffdad6] rounded-[12px] px-[20px] py-[14px] flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          data-node-id="349:979"
        >
          <div className="flex items-center gap-[14px]" data-node-id="349:980">
            {/* Icon Box */}
            <div
              className="size-[40px] rounded-full bg-[#ba1a1a] flex items-center justify-center shrink-0 shadow-xs"
              data-node-id="349:981"
            >
              <AlertTriangle className="size-5 text-white" />
            </div>

            {/* Alert Text Group */}
            <div className="flex flex-col gap-0.5" data-node-id="349:986">
              <h4
                className="text-[14.5px] font-bold text-[#410002] leading-tight"
                data-node-id="349:987"
              >
                1 Peringatan Aktif Memerlukan Tindakan
              </h4>
              <p
                className="text-[13px] text-[#93000a] leading-tight"
                data-node-id="349:988"
              >
                Segera tinjau kondisi fisik cabai di petak pemantauan
              </p>
            </div>
          </div>
        </div>

        {/* Dual Incident Cards Row (566px each on 1280px) */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
          data-node-id="349:991"
        >
          {/* Card ALT-001 (Node A) */}
          <div
            className="bg-white border border-[#e2e8f0] rounded-[16px] p-[26px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-[18px]"
            data-node-id="349:992"
          >
            {/* Badges Row */}
            <div className="flex items-center" data-node-id="349:993">
              <div
                className="inline-flex items-center gap-1.5 px-[10px] py-[4px] rounded-full bg-[#fee2e2] text-[#991b1b] text-[12px] font-semibold"
                data-node-id="349:995"
              >
                <span>● Segera Periksa</span>
              </div>
            </div>

            {/* Meta Row */}
            <div
              className="flex items-center gap-[6px] text-[13px]"
              data-node-id="349:1000"
            >
              <Compass className="size-3.5 text-[#059669]" />
              <span className="font-semibold text-[#0f172a]" data-node-id="349:1005">
                Node A (Utara)
              </span>
              <span className="text-[#94a3b8]" data-node-id="349:1006">
                •
              </span>
              <span className="text-[12.5px] text-[#64748b]" data-node-id="349:1011">
                Hari ini, 09:30 WIB
              </span>
            </div>

            {/* Body Row: Text + Thumbnail */}
            <div
              className="flex items-center justify-between gap-[16px]"
              data-node-id="349:1014"
            >
              <div className="flex-1" data-node-id="349:1015">
                <h3
                  className="text-[16px] font-bold text-[#0f172a] leading-snug"
                  data-node-id="349:1016"
                >
                  Indikasi gangguan visual pada buah cabai
                </h3>
                <p
                  className="text-[12.5px] text-[#475569] mt-1 leading-relaxed"
                  data-node-id="508:3924"
                >
                  Kamera mendeteksi bercak anomali visual pada buah cabai. Diperlukan pengecekan fisik lesi buah
                </p>
              </div>

              {/* Diagnostic Thumbnail */}
              <div
                className="size-[80px] rounded-[12px] overflow-hidden border border-[#e2e8f0] relative shrink-0 bg-[#dcece5]"
                data-node-id="508:3925"
              >
                <Image
                  src="/diagnostic-thumbnail.png"
                  alt="Deteksi Lesi Cabai Node A"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Footer Row: Action Button */}
            <div className="w-full pt-1" data-node-id="349:1023">
              <Link
                href="/peringatan/node-a"
                className="w-full h-[48px] rounded-[10px] bg-[#064e3b] hover:bg-[#04382a] text-white font-bold text-[13px] flex items-center justify-center transition-colors shadow-xs"
                data-node-id="349:1024"
              >
                Lihat Detail & Tindakan →
              </Link>
            </div>
          </div>

          {/* Card ALT-002 (Node B) */}
          <div
            className="bg-white border border-[#e2e8f0] rounded-[16px] p-[26px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-[18px]"
            data-node-id="349:1027"
          >
            {/* Badges Row */}
            <div className="flex items-center" data-node-id="349:1028">
              <div
                className="inline-flex items-center gap-1.5 px-[10px] py-[4px] rounded-full bg-[#fef3c7] text-[#92400e] text-[12px] font-semibold"
                data-node-id="349:1030"
              >
                <span>● Perlu Perhatian</span>
              </div>
            </div>

            {/* Meta Row */}
            <div
              className="flex items-center gap-[6px] text-[13px]"
              data-node-id="349:1035"
            >
              <Compass className="size-3.5 text-[#059669]" />
              <span className="font-semibold text-[#0f172a]" data-node-id="349:1040">
                Node B (Selatan)
              </span>
              <span className="text-[#94a3b8]" data-node-id="349:1041">
                •
              </span>
              <span className="text-[12.5px] text-[#64748b]" data-node-id="349:1046">
                Hari ini, 22:15 WIB
              </span>
            </div>

            {/* Body Row: Text + Metric Box */}
            <div
              className="flex items-center justify-between gap-[16px]"
              data-node-id="349:1049"
            >
              <div className="flex-1" data-node-id="349:1050">
                <h3
                  className="text-[16px] font-bold text-[#0f172a] leading-snug"
                  data-node-id="349:1051"
                >
                  Penurunan kelembapan tanah zona perakaran
                </h3>
                <p
                  className="text-[13px] text-[#475569] mt-1 leading-relaxed"
                  data-node-id="349:1052"
                >
                  Sensor mendeteksi kelembapan tanah turun ke 48% lebih cepat dari siklus biasanya. Cek integritas selang
                </p>
              </div>

              {/* Metric Box */}
              <div
                className="size-[80px] rounded-[12px] bg-[#fffbeb] border border-[#fde68a] flex flex-col items-center justify-center gap-1 shrink-0"
                data-node-id="349:1053"
              >
                <Droplet className="size-6 text-[#d97706]" />
                <span
                  className="text-[13px] font-bold text-[#92400e]"
                  data-node-id="349:1056"
                >
                  48% RH
                </span>
              </div>
            </div>

            {/* Footer Row: Action Button */}
            <div className="w-full pt-1" data-node-id="349:1057">
              <Link
                href="/peringatan/node-b"
                className="w-full h-[48px] rounded-[10px] bg-[#064e3b] hover:bg-[#04382a] text-white font-bold text-[13px] flex items-center justify-center transition-colors shadow-xs"
                data-node-id="349:1058"
              >
                Lihat Detail & Tindakan →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="349:1070"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="349:1071">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Chat Bot Launcher */}
      <ChatBotPopup />
    </div>
  );
}
