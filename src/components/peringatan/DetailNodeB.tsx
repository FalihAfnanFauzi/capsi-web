"use client";

import React from "react";
import Link from "next/link";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import { Activity, Info } from "lucide-react";

export default function DetailNodeB() {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id="512:4010"
      data-name="Detail Peringatan & Tindakan (Node B) — CAPSI Web Desktop"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="peringatan" />

      {/* 2. Main Body Container (Exact Figma dimensions: 1152px width inside 1280px) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] py-[24px] flex-1 flex flex-col justify-start gap-[20px]"
        data-node-id="512:4032"
      >
        {/* Row 1: Detail Context Header Bar */}
        <div
          className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]/60"
          data-node-id="512:4033"
        >
          <div className="flex items-center gap-[16px]" data-node-id="512:4034">
            <Link
              href="/peringatan"
              className="flex items-center gap-2 bg-white border border-[#e2e8f0] px-[14px] py-[9px] rounded-[8px] text-[13px] text-[#475569] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-all shrink-0 shadow-xs"
              data-node-id="512:4035"
            >
              <span>← Kembali ke Peringatan</span>
            </Link>

            <div data-node-id="512:4037">
              <h1
                className="text-[20px] font-bold text-[#0f172a] leading-tight"
                data-node-id="512:4038"
              >
                Perubahan Tren Kelembapan Tanah
              </h1>
              <p
                className="text-[12.5px] text-[#64748b] mt-0.5 max-w-[620px]"
                data-node-id="512:4039"
              >
                Sensor mendeteksi penurunan kelembapan tanah lapisan perakaran lebih cepat dari siklus biasanya. Disarankan verifikasi fisik sistem irigasi dan mulsa bedengan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[10px]" data-node-id="512:4040">
            {/* Node Pill */}
            <div
              className="bg-[#eff6ff] border border-[#dbeafe] text-[#1d4ed8] text-[12px] font-semibold px-[10px] py-[5px] rounded-full"
              data-node-id="512:4041"
            >
              Node B (Selatan)
            </div>

            {/* Badge Status */}
            <div
              className="bg-[#fcf2c7] text-[#d97706] text-[12.5px] font-semibold px-[12px] py-[5px] rounded-full flex items-center gap-1.5"
              data-node-id="512:4043"
            >
              <span>⚠ Perlu Dipantau</span>
            </div>
          </div>
        </div>

        {/* Row 2: Detail Content Grid Row (2 Columns: 566px Left, 566px Right) */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px] items-stretch"
          data-node-id="512:4047"
        >
          {/* Left Column: Bukti Telemetri & Tren Kelembapan (566px) */}
          <div className="flex flex-col gap-[14px]" data-node-id="512:4048">
            {/* Card 1: Bukti Visual & Telemetri */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-[12px]"
              data-node-id="512:4049"
            >
              <div className="flex items-center justify-between" data-node-id="512:4050">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-[#064e3b]" />
                  <h3 className="text-[13.5px] font-bold text-[#0f172a]">
                    Bukti Telemetri & Sensor Lapangan
                  </h3>
                </div>
                <span className="text-[12px] text-[#64748b]">22:15 WIB</span>
              </div>

              {/* Telemetry Snapshot Row */}
              <div className="grid grid-cols-3 gap-[10px]" data-node-id="512:4054">
                <div
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] p-[10px] flex flex-col justify-between"
                  data-node-id="512:4055"
                >
                  <span className="text-[12px] text-[#64748b]">Suhu Udara</span>
                  <span className="text-[18px] font-bold text-[#0f172a] my-0.5">27°C</span>
                  <span className="text-[11.5px] text-[#166534] font-medium">Optimal</span>
                </div>

                <div
                  className="bg-[#f0f5ff] border border-[#dbe8fc] rounded-[8px] p-[10px] flex flex-col justify-between"
                  data-node-id="512:4059"
                >
                  <span className="text-[12px] text-[#64748b]">RH Udara</span>
                  <span className="text-[18px] font-bold text-[#b45309] my-0.5">78%</span>
                  <span className="text-[11.5px] text-[#b45309] font-medium">Lembap</span>
                </div>

                <div
                  className="bg-[#fffaeb] border border-[#fce5a6] rounded-[8px] p-[10px] flex flex-col justify-between"
                  data-node-id="512:4063"
                >
                  <span className="text-[12px] text-[#64748b]">Tanah 15cm</span>
                  <span className="text-[18px] font-bold text-[#dc2626] my-0.5">48%</span>
                  <span className="text-[11.5px] text-[#b2520a] font-medium">Menurun Cepat</span>
                </div>
              </div>

              {/* Inline SVG Telemetry Visual: 24h Trend Chart (Seamless within card) */}
              <div
                className="pt-3 border-t border-[#f1f5f9] flex flex-col gap-[10px]"
                data-node-id="512:4125"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between" data-node-id="512:4126">
                  <div>
                    <h4 className="text-[13.5px] font-bold text-[#0f172a]">
                      Tren Kelembapan Tanah Node B
                    </h4>
                    <p className="text-[11.5px] text-[#64748b]">
                      Interval 24 Jam Terakhir • Ambang Batas 50%
                    </p>
                  </div>
                  <span className="text-[24px] font-extrabold text-[#b45309]">
                    48%
                  </span>
                </div>

                {/* SVG Chart Graphic */}
                <div className="w-full h-[140px] relative" data-node-id="512:4134">
                  <svg
                    viewBox="0 0 338 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="gradientSoilMoisture" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Reference Grid Lines */}
                    <line x1="0" y1="20" x2="338" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="58" x2="338" y2="58" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="105" x2="338" y2="105" stroke="#f1f5f9" strokeWidth="1" />

                    {/* Ambang Kritis 50% Line */}
                    <line
                      x1="0"
                      y1="78"
                      x2="338"
                      y2="78"
                      stroke="#ef4444"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <rect x="5" y="64" width="108" height="15" rx="3" fill="#fee2e2" />
                    <text
                      x="9"
                      y="75"
                      fill="#b91c1c"
                      fontSize="9.5"
                      fontFamily="Plus Jakarta Sans"
                      fontWeight="600"
                    >
                      Ambang Kritis (50%)
                    </text>

                    {/* Area under curve */}
                    <path
                      d="M 10 36 C 110 40, 210 65, 320 108 L 320 138 L 10 138 Z"
                      fill="url(#gradientSoilMoisture)"
                    />

                    {/* Moisture Trend Curve */}
                    <path
                      d="M 10 36 C 110 40, 210 65, 320 108"
                      stroke="#ea580c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Point 1: Kemarin 07:00 (65%) */}
                    <circle cx="10" cy="36" r="4" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
                    <text
                      x="16"
                      y="30"
                      fill="#0f172a"
                      fontSize="10"
                      fontFamily="Plus Jakarta Sans"
                      fontWeight="700"
                    >
                      65%
                    </text>

                    {/* Point 2: Kemarin 19:00 (~58%) */}
                    <circle cx="156" cy="58" r="3.5" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />

                    {/* Point 3: Hari Ini 22:15 (48%) */}
                    <circle cx="320" cy="108" r="4.5" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
                    <text
                      x="292"
                      y="126"
                      fill="#dc2626"
                      fontSize="10.5"
                      fontFamily="Plus Jakarta Sans"
                      fontWeight="700"
                    >
                      48%
                    </text>
                  </svg>
                </div>

                {/* X-axis Timestamps */}
                <div
                  className="flex items-center justify-between text-[11px] text-[#64748b] pt-1 border-t border-[#f1f5f9]"
                  data-node-id="512:4151"
                >
                  <span data-node-id="512:4153">Kemarin, 07:00</span>
                  <span data-node-id="512:4155">Kemarin, 19:00</span>
                  <span data-node-id="512:4157" className="font-semibold text-[#0f172a]">
                    Hari ini, 22:15 (Terkini)
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Mengapa CAPSI Memberi Peringatan? */}
            <div
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-[14px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-[8px]"
              data-node-id="512:4085"
            >
              <h3 className="text-[13.5px] font-bold text-[#0f172a] flex items-center gap-1.5" data-node-id="512:4086">
                <span>🧭</span>
                <span>Mengapa CAPSI Memberi Peringatan?</span>
              </h3>
              <p className="text-[12px] text-[#334155] leading-relaxed" data-node-id="512:4088">
                Penurunan kelembapan terdeteksi dari 65% menuju 48% dalam 18 jam terakhir pada fase pembungaan tanaman cabai varietas ORI 212. Laju penurunan melebihi laju transpirasi rata-rata normal.
              </p>
            </div>
          </div>

          {/* Right Column: Detail Analisis AI & Protokol Operasional (566px) */}
          <div className="flex flex-col gap-[14px] h-full" data-node-id="512:4084">
            {/* Card 1: Detail Analisis Model AI */}
            <div
              className="bg-white border border-[#e3e8f0] rounded-[12px] p-[16px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-[10px]"
              data-node-id="512:4067"
            >
              <h3 className="text-[14px] font-medium text-[#0f172a]" data-node-id="512:4068">
                🤖 Detail Analisis Model AI • Proyeksi LSTM & Confidence Level
              </h3>

              {/* LSTM Full Width Card */}
              <div
                className="bg-white border border-[#bfdbfe] rounded-[8px] p-[10px] flex flex-col justify-between gap-1.5"
                data-node-id="512:4076"
              >
                <div className="flex items-center justify-between" data-node-id="512:4077">
                  <span className="text-[12.5px] font-semibold text-[#0f172a]">
                    Time-Series (LSTM)
                  </span>
                  <span className="bg-[#ffedd5] text-[#c2410c] text-[11px] font-bold px-[6px] py-[1.5px] rounded-xs">
                    Stres Sedang
                  </span>
                </div>
                <p className="text-[12px] text-[#475569] leading-relaxed" data-node-id="512:4081">
                  Horizon 24–72 Jam: Model memproyeksikan potensi defisit air perakaran kritis jika tidak dilakukan intervensi pada sistem distribusi irigasi tetes.
                </p>
              </div>

              {/* Honest Uncertainty Callout Box */}
              <div
                className="bg-[#eff6ff] border border-[#dbeafe] rounded-[8px] p-[10px] flex items-start gap-2"
                data-node-id="512:4082"
              >
                <Info className="size-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                <p className="text-[11.5px] text-[#1e40af] leading-normal" data-node-id="512:4166">
                  <strong>ℹ Label Honest Uncertainty:</strong> Peringatan AI adalah indikasi awal anomali mikroklimat tanah, bukan klaim mutlak kegagalan tanaman. Verifikasi fisik tetap menjadi prioritas keputusan agronomi.
                </p>
              </div>
            </div>

            {/* Card 2: Protokol Lapangan (Hijau Gelap #064e3b) - Stretches to fill column height */}
            <div
              className="bg-[#064e3b] text-white rounded-[12px] p-[16px] shadow-[0_4px_16px_rgba(6,78,59,0.18)] flex-1 flex flex-col justify-between gap-[12px]"
              data-node-id="512:4089"
            >
              <div className="flex items-start gap-2.5" data-node-id="512:4090">
                <span className="text-[18px]">📋</span>
                <div>
                  <h3 className="text-[14px] font-bold leading-tight">
                    Apa yang Perlu Dilakukan?
                  </h3>
                  <p className="text-[12px] text-[#a7f3d0] mt-0.5">
                    Panduan Lapangan Operasional
                  </p>
                </div>
              </div>

              {/* 4 Action Steps for Node B */}
              <div className="flex-1 flex flex-col justify-between gap-[8px] my-1" data-node-id="512:4094">
                {/* Step 1 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[12px] py-[10px] flex items-center gap-[10px]"
                  data-node-id="512:4095"
                >
                  <div
                    className="size-[20px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="512:4096"
                  >
                    1
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Periksa area tiang sensor Node B
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Periksa fisik kelembapan tanah di sekitar tiang sensor Node B (Bedengan 5–8).
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[12px] py-[10px] flex items-center gap-[10px]"
                  data-node-id="512:4099"
                >
                  <div
                    className="size-[20px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="512:4100"
                  >
                    2
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Cek irigasi
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Cek jalur irigasi tetes (drip emitter) apakah ada sumbatan pasir atau lumut.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[12px] py-[10px] flex items-center gap-[10px]"
                  data-node-id="512:4103"
                >
                  <div
                    className="size-[20px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="512:4104"
                  >
                    3
                  </div>
                  <div>
                    <h5 className="text-[12px] font-semibold text-white leading-tight">
                      Periksa mulsa plastik
                    </h5>
                    <p className="text-[11px] text-[#d1fae5] mt-0.5">
                      Periksa kerapatan mulsa plastik perak-hitam dari kebocoran penguapan berlebih.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div
                  className="bg-[#094030]/80 rounded-[8px] px-[12px] py-[10px] flex items-center gap-[10px]"
                  data-node-id="512:4107"
                >
                  <div
                    className="size-[20px] rounded-full bg-[#a6f2d1] text-[#054f3b] text-[11px] font-bold flex items-center justify-center shrink-0"
                    data-node-id="512:4108"
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
              <div className="pt-2 border-t border-[#047857]/40 text-[11.5px] text-[#a7f3d0]" data-node-id="512:4111">
                🛡 Rujukan: Panduan Teknis Pengendalian HPT Cabai Kementan
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="512:4112"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="512:4113">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Chat Bot Launcher */}
      <ChatBotPopup />
    </div>
  );
}
