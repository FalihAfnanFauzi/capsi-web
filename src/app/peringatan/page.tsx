"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  ArrowLeft,
  AlertTriangle,
  AlertCircle,
  Camera,
  Clock,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  FileText,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";

function PeringatanContent() {
  const searchParams = useSearchParams();
  const initialNode = searchParams.get("node")?.toUpperCase() === "B" ? "B" : "A";
  const [selectedNode, setSelectedNode] = useState<"A" | "B">(initialNode);

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id="507:3702"
      data-name="Detail Peringatan & Tindakan (Node A) — CAPSI Web Desktop"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="peringatan" />

      {/* 2. Main Body Container (Exact Figma dimensions: 1152px width inside 1280px) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] py-[16px] flex-1 flex flex-col justify-between gap-[16px]"
        data-node-id="507:3724"
      >
        {/* Row 1: Detail Context Header Bar */}
        <div
          className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-1 border-b border-[#e2e8f0]/60"
          data-node-id="507:3835"
        >
          <div className="flex items-center gap-[16px]" data-node-id="507:3836">
            <Link
              href="/monitoring"
              className="flex items-center gap-2 bg-white border border-[#e2e8f0] px-[14px] py-[9px] rounded-[8px] text-[13px] text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-all shrink-0 shadow-xs"
              data-node-id="507:3837"
            >
              <ArrowLeft className="size-4" />
              <span>Kembali ke Monitoring</span>
            </Link>

            <div data-node-id="507:3839">
              <h1 className="text-[20px] font-bold text-[#0f172a] leading-tight" data-node-id="507:3840">
                {selectedNode === "A"
                  ? "Indikasi Gangguan pada Buah Cabai"
                  : "Perubahan Tren Kelembapan Tanah Terdeteksi"}
              </h1>
              <p className="text-[12.5px] text-[#64748b] mt-0.5 max-w-[620px]" data-node-id="507:3841">
                {selectedNode === "A"
                  ? "Kamera menunjukkan indikasi gejala pada buah yang diamati. Penyebabnya belum dapat dipastikan tanpa pemeriksaan lapangan langsung."
                  : "Sensor kelembapan tanah mendeteksi tren penurunan bertahap menuju ambang batas kritis di Blok Selatan."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[10px]" data-node-id="507:3842">
            {/* Node Pill */}
            <div
              className="bg-[#eff6ff] border border-[#dbeafe] text-[#1d4ed8] text-[12px] font-semibold px-[10px] py-[5px] rounded-full"
              data-node-id="512:4008"
            >
              Node {selectedNode} ({selectedNode === "A" ? "Utara" : "Selatan"})
            </div>

            {/* Badge Status */}
            {selectedNode === "A" ? (
              <div
                className="bg-[#fee2e2] border border-[#fecaca] text-[#dc2626] text-[12.5px] font-semibold px-[12px] py-[5px] rounded-full flex items-center gap-1.5"
                data-node-id="507:3843"
              >
                <AlertCircle className="size-3.5" />
                <span>Segera Periksa</span>
              </div>
            ) : (
              <div
                className="bg-[#fffbeb] border border-[#fde68a] text-[#d97706] text-[12.5px] font-semibold px-[12px] py-[5px] rounded-full flex items-center gap-1.5"
                data-node-id="507:3843"
              >
                <AlertTriangle className="size-3.5" />
                <span>Perlu Dipantau</span>
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Detail Content Grid Row (2 Columns: 566px Left, 566px Right) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px]" data-node-id="507:3847">
          {/* Left Column: Bukti Visual & Analisis AI (Exact 566px) */}
          <div className="flex flex-col gap-[14px]" data-node-id="507:3848">
            {/* Card 1: Bukti Visual & Telemetri */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-[12px]"
              data-node-id="507:3849"
            >
              <div className="flex items-center justify-between" data-node-id="507:3850">
                <div className="flex items-center gap-2">
                  <Camera className="size-4 text-[#064e3b]" />
                  <h3 className="text-[13.5px] font-bold text-[#0f172a]">
                    Bukti Pendukung Lapangan
                  </h3>
                </div>
                <span className="text-[12px] text-[#64748b]">09:30 WIB • Resolusi HD</span>
              </div>

              {/* Foto Tangkapan Kamera Lapangan */}
              <div
                className="w-full h-[180px] rounded-[8px] overflow-hidden relative border border-[#e2e8f0] bg-[#0f172a]"
                data-node-id="507:3883"
              >
                <Image
                  src="/diagnostic-thumbnail.png"
                  alt="Foto Tangkapan Kamera Kanopi"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded-sm">
                  CAM-01 • Kanopi Atas
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-[#a7f3d0] text-[11px] px-2 py-0.5 rounded-sm">
                  Confidence: 84%
                </div>
              </div>

              {/* Telemetry Snapshot Row */}
              <div className="grid grid-cols-3 gap-[10px]" data-node-id="507:3854">
                <div
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] p-[10px] flex flex-col justify-between"
                  data-node-id="507:3855"
                >
                  <span className="text-[12px] text-[#64748b]">Suhu Udara</span>
                  <span className="text-[18px] font-bold text-[#0f172a] my-0.5">29°C</span>
                  <span className="text-[11.5px] text-[#166534] font-medium">Optimal</span>
                </div>

                <div
                  className="bg-[#fffbeb] border border-[#fde68a] rounded-[8px] p-[10px] flex flex-col justify-between"
                  data-node-id="507:3859"
                >
                  <span className="text-[12px] text-[#64748b]">RH Udara</span>
                  <span className="text-[18px] font-bold text-[#b45309] my-0.5">72%</span>
                  <span className="text-[11.5px] text-[#b45309] font-medium">Tinggi Lembap ⚠</span>
                </div>

                <div
                  className="bg-[#f7fafa] border border-[#e0e5e5] rounded-[8px] p-[10px] flex flex-col justify-between"
                  data-node-id="507:3863"
                >
                  <span className="text-[12px] text-[#64748b]">Kel. Tanah</span>
                  <span className="text-[18px] font-bold text-[#dc2626] my-0.5">32%</span>
                  <span className="text-[11.5px] text-[#dc2626] font-medium">Kering / Kritis ⚠</span>
                </div>
              </div>
            </div>

            {/* Card 2: Detail Analisis Model AI */}
            <div
              className="bg-white border border-[#e3e8f0] rounded-[12px] p-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-[10px]"
              data-node-id="507:3867"
            >
              <h3 className="text-[14px] font-bold text-[#0f172a]" data-node-id="507:3868">
                Detail Analisis Model AI
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]" data-node-id="507:3870">
                {/* CNN Card */}
                <div
                  className="bg-white border border-[#bfdbfe] rounded-[8px] p-[10px] flex flex-col justify-between gap-1"
                  data-node-id="507:3871"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12.5px] font-semibold text-[#0f172a]">
                      Vision Model (CNN)
                    </span>
                    <span className="bg-[#dcfce7] text-[#166534] text-[11px] font-bold px-[6px] py-[1px] rounded-xs">
                      84% Indikatif
                    </span>
                  </div>
                  <p className="text-[12px] text-[#475569] leading-tight">
                    Indikasi gejala visual: deteksi bercak konsentris gelap mikro pada epidermis buah cabai matang.
                  </p>
                </div>

                {/* LSTM Card */}
                <div
                  className="bg-white border border-[#bfdbfe] rounded-[8px] p-[10px] flex flex-col justify-between gap-1"
                  data-node-id="507:3877"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12.5px] font-semibold text-[#0f172a]">
                      Time-Series (LSTM)
                    </span>
                    <span className="bg-[#ffedd5] text-[#c2410c] text-[11px] font-bold px-[6px] py-[1px] rounded-xs">
                      Stres Sedang
                    </span>
                  </div>
                  <p className="text-[12px] text-[#475569] leading-tight">
                    Prediksi 24 Jam ke depan: akumulasi kelembapan kanopi mikro berpotensi memicu lonjakan kelembapan berlebih.
                  </p>
                </div>
              </div>

              {/* Disclaimer Callout Box */}
              <div
                className="bg-[#eff6ff] border border-[#dbeafe] rounded-[8px] p-[10px] flex items-start gap-2"
                data-node-id="512:4002"
              >
                <Info className="size-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                <p className="text-[11.5px] text-[#1e40af] leading-normal" data-node-id="512:4003">
                  <strong>Peringatan Diagnosis:</strong> Tingkat keyakinan model bukan persentase tanaman terinfeksi atau kepastian diagnosis, melainkan indeks probabilitas visual.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mengapa CAPSI & Protokol Lapangan (Exact 566px) */}
          <div className="flex flex-col gap-[14px]" data-node-id="507:3884">
            {/* Card: Mengapa CAPSI Memberi Peringatan? */}
            <div
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-[8px]"
              data-node-id="512:4004"
            >
              <h3 className="text-[13.5px] font-bold text-[#0f172a] flex items-center gap-1.5" data-node-id="512:4006">
                <span>🧭</span>
                <span>Mengapa CAPSI Memberi Peringatan?</span>
              </h3>
              <p className="text-[12px] text-[#334155] leading-relaxed" data-node-id="512:4007">
                Algoritma mendeteksi anomali visual buah pada tangkapan kamera berkala jam 09:30 WIB, didukung kelembapan udara 72% yang mendukung perkembangan jamur bila cuaca lembap.
              </p>
            </div>

            {/* Card: Protokol Lapangan (Hijau Gelap #064e3b) */}
            <div
              className="bg-[#064e3b] text-white rounded-[12px] p-[16px] shadow-[0_4px_16px_rgba(6,78,59,0.18)] flex flex-col justify-between gap-[12px]"
              data-node-id="507:3885"
            >
              <div className="flex items-start gap-2.5" data-node-id="507:3886">
                <span className="text-[18px]">📋</span>
                <div data-node-id="507:3889">
                  <h3 className="text-[14px] font-bold leading-tight">
                    Apa yang Perlu Dilakukan?
                  </h3>
                  <p className="text-[12px] text-[#a7f3d0] mt-0.5">
                    Panduan Lapangan Operasional
                  </p>
                </div>
              </div>

              {/* 4 Action Steps */}
              <div className="space-y-[8px]" data-node-id="507:3890">
                {/* Step 1 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[10px] py-[8px] flex items-center gap-[10px]"
                  data-node-id="507:3891"
                >
                  <div
                    className="size-[18px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="507:3892"
                  >
                    1
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Periksa area tiang sensor Node A
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Periksa tanaman cabai di radius 5 meter sekitar tiang sensor Node A.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[10px] py-[8px] flex items-center gap-[10px]"
                  data-node-id="507:3895"
                >
                  <div
                    className="size-[18px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="507:3896"
                  >
                    2
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Amati cabai
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Amati buah cabai yang matang maupun muda apakah terdapat bercak melekuk atau kehitaman.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[10px] py-[8px] flex items-center gap-[10px]"
                  data-node-id="507:3899"
                >
                  <div
                    className="size-[18px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="507:3900"
                  >
                    3
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Pisahkan buah yang rusak
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Pisahkan buah yang rusak agar spora tidak menyebar jika basah.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[10px] py-[8px] flex items-center gap-[10px]"
                  data-node-id="507:3903"
                >
                  <div
                    className="size-[18px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="507:3904"
                  >
                    4
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Catat hasil temuan ke aplikasi
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Validasi kesesuaian diagnosis guna melatih model & mendokumentasikan riwayat kebun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rujukan Note */}
              <div className="pt-1 border-t border-[#047857]/40 text-[11.5px] text-[#a7f3d0]" data-node-id="507:3907">
                🛡 Rujukan: Panduan Teknis Pengendalian OPT Cabai Kementan RI
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar (Exact Figma dimensions: w=1280, h=52, border-t) */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="507:3822"
        data-name="Footer Bar"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="507:3823">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Interactive Chat Bot Pop-Up & FAB */}
      <ChatBotPopup />
    </div>
  );
}

export default function PeringatanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#64748b]">Memuat Detail Peringatan...</div>}>
      <PeringatanContent />
    </Suspense>
  );
}
