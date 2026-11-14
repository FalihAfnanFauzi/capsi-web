"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  Activity,
  AlertTriangle,
  Bell,
  Thermometer,
  Droplets,
  Sun,
  Gauge,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function BerandaPage() {
  const [activeNodeModal, setActiveNodeModal] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0d1c2e]"
      data-node-id="428:223"
      data-name="Beranda Terpadu — CAPSI Web Desktop (Rapi Tanpa Gap)"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="beranda" />

      {/* 2. Main Body Container (Exact Figma Spacing, No Gap) */}
      <main className="max-w-[1280px] w-full mx-auto px-4 lg:px-[64px] py-6 flex-1 flex flex-col gap-6">
        {/* Top Dual Section Row: Status Titik Pantau (Left) & Peringatan Utama (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" data-node-id="428:240">
          {/* Left Column: Status Titik Pantau (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3" data-node-id="428:241">
            <div className="flex items-center justify-between" data-node-id="428:242">
              <div className="flex items-center gap-2" data-node-id="428:243">
                <Activity className="size-4 text-[#003622]" />
                <h2 className="text-[16px] font-bold text-[#0d1c2e]" data-node-id="428:249">
                  Status Titik Pantau
                </h2>
              </div>
              <span
                className="text-[13px] font-semibold text-[#16a34a]"
                data-node-id="428:250"
              >
                2 Node Aktif
              </span>
            </div>

            {/* 2 Nodes Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-node-id="428:251">
              {/* Card Node A */}
              <div
                className="bg-white border border-[#e2e8f0] rounded-[16px] p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] flex flex-col justify-between h-[222px]"
                data-node-id="428:252"
              >
                <div>
                  <div className="flex items-center justify-between" data-node-id="428:253">
                    <div>
                      <h3 className="font-bold text-[18px] text-[#0d1c2e] leading-tight" data-node-id="428:255">
                        Node A
                      </h3>
                      <p className="text-[13px] text-[#64748b] mt-0.5" data-node-id="428:256">
                        Blok Utara
                      </p>
                    </div>
                    <span
                      className="text-[12px] font-medium text-[#16a34a] flex items-center gap-1"
                      data-node-id="428:258"
                    >
                      <span className="size-1.5 rounded-full bg-[#16a34a]" /> Online
                    </span>
                  </div>

                  {/* Alert Pill */}
                  <div
                    className="mt-3.5 bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] text-[12px] font-semibold px-2.5 py-1 rounded-[6px] flex items-center gap-1.5 w-fit"
                    data-node-id="428:259"
                  >
                    <AlertTriangle className="size-3.5 shrink-0" />
                    <span data-node-id="428:260">Segera Periksa</span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 mt-4" data-node-id="428:261">
                    <div>
                      <p className="text-[12px] text-[#64748b]">Suhu Udara</p>
                      <p className="text-[22px] font-bold text-[#0d1c2e] leading-tight mt-0.5">29°C</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-[#64748b]">Kelembapan</p>
                      <p className="text-[22px] font-bold text-[#dc2626] leading-tight mt-0.5">32%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px] pt-1" data-node-id="428:268">
                  <span className="text-[#94a3b8]" data-node-id="428:269">3 mnt lalu</span>
                  <button
                    onClick={() => setActiveNodeModal("Node A (Blok Utara)")}
                    className="text-[#003622] font-semibold hover:underline flex items-center gap-1"
                    data-node-id="428:270"
                  >
                    <span>Detail</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Node B */}
              <div
                className="bg-white border border-[#e2e8f0] rounded-[16px] p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] flex flex-col justify-between h-[222px]"
                data-node-id="428:271"
              >
                <div>
                  <div className="flex items-center justify-between" data-node-id="428:272">
                    <div>
                      <h3 className="font-bold text-[18px] text-[#0d1c2e] leading-tight" data-node-id="428:274">
                        Node B
                      </h3>
                      <p className="text-[13px] text-[#64748b] mt-0.5" data-node-id="428:275">
                        Blok Selatan
                      </p>
                    </div>
                    <span
                      className="text-[12px] font-medium text-[#16a34a] flex items-center gap-1"
                      data-node-id="428:277"
                    >
                      <span className="size-1.5 rounded-full bg-[#16a34a]" /> Online
                    </span>
                  </div>

                  {/* Warning Pill */}
                  <div
                    className="mt-3.5 bg-[#fffbeb] border border-[#fde68a] text-[#d97706] text-[12px] font-semibold px-2.5 py-1 rounded-[6px] flex items-center gap-1.5 w-fit"
                    data-node-id="428:278"
                  >
                    <AlertTriangle className="size-3.5 shrink-0" />
                    <span data-node-id="428:283">Perlu Dipantau</span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 mt-4" data-node-id="428:284">
                    <div>
                      <p className="text-[12px] text-[#64748b]">Suhu Udara</p>
                      <p className="text-[22px] font-bold text-[#0d1c2e] leading-tight mt-0.5">27°C</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-[#64748b]">Kelembapan</p>
                      <p className="text-[22px] font-bold text-[#d97706] leading-tight mt-0.5">65%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px] pt-1" data-node-id="428:291">
                  <span className="text-[#94a3b8]" data-node-id="428:292">3 mnt lalu</span>
                  <button
                    onClick={() => setActiveNodeModal("Node B (Blok Selatan)")}
                    className="text-[#003622] font-semibold hover:underline flex items-center gap-1"
                    data-node-id="428:293"
                  >
                    <span>Detail</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Peringatan Utama (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3" data-node-id="428:294">
            <div className="flex items-center gap-2" data-node-id="428:295">
              <Bell className="size-4 text-[#dc2626]" />
              <h2 className="text-[16px] font-bold text-[#0d1c2e]" data-node-id="428:298">
                Peringatan Utama
              </h2>
            </div>

            {/* Alert Card */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[16px] p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] flex flex-col justify-between h-[222px]"
              data-node-id="428:299"
            >
              <div>
                <div className="flex items-center justify-between" data-node-id="428:300">
                  <span
                    className="bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1"
                    data-node-id="428:301"
                  >
                    <AlertTriangle className="size-3" />
                    <span>Segera Periksa</span>
                  </span>
                  <span className="text-[12px] text-[#94a3b8]" data-node-id="428:303">
                    04 Nov 2026, 09:30 WIB
                  </span>
                </div>

                <p className="text-[13px] font-medium text-[#64748b] mt-1.5" data-node-id="428:304">
                  Node A (Utara)
                </p>

                {/* Split Content: Text + Exact 3D Hardware Thumbnail */}
                <div className="flex items-start gap-3 mt-2" data-node-id="428:305">
                  <div className="flex-1" data-node-id="428:306">
                    <h4 className="text-[14px] font-bold text-[#0d1c2e] leading-snug" data-node-id="428:307">
                      Indikasi Gangguan pada Buah Cabai
                    </h4>
                    <p className="text-[12px] text-[#475569] mt-1 leading-relaxed line-clamp-2" data-node-id="428:308">
                      Kamera mengamati indikasi bercak anomali visual pada buah cabai di area Blok Utara.
                    </p>
                  </div>

                  <div
                    className="size-[64px] rounded-lg overflow-hidden shrink-0 border border-[#e2e8f0] bg-slate-50 relative p-1"
                    data-node-id="428:309"
                  >
                    <Image
                      src="/capsi_3d_product_render.png"
                      alt="Thumbnail Visual Anomali Buah Cabai"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setActiveNodeModal("Node A (Blok Utara)")}
                className="w-full h-[40px] bg-[#003622] hover:bg-[#004d31] text-white text-[13px] font-semibold rounded-[8px] flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-[0.99]"
                data-node-id="428:315"
              >
                <span>Lihat Detail & Tindakan</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Section Lingkungan: Ringkasan Kondisi Lingkungan */}
        <div className="flex flex-col gap-3" data-node-id="428:317">
          <div className="flex items-center justify-between" data-node-id="428:318">
            <div className="flex items-center gap-2" data-node-id="428:319">
              <Thermometer className="size-4 text-[#003622]" />
              <h2 className="text-[16px] font-bold text-[#0d1c2e]" data-node-id="428:322">
                Ringkasan Kondisi Lingkungan
              </h2>
            </div>
            <a
              href="#monitoring"
              className="text-[13px] text-[#003622] font-semibold hover:underline flex items-center gap-1"
              data-node-id="428:328"
            >
              <span>Buka Monitoring Selengkapnya</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          {/* 4 Cards Environment Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-node-id="428:329">
            {/* Card Suhu */}
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] h-[84px] flex flex-col justify-between" data-node-id="428:330">
              <div className="flex items-center justify-between text-[#64748b]">
                <span className="text-[12px]">Suhu Udara</span>
                <Thermometer className="size-4 text-[#003622]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-bold text-[#0d1c2e] leading-none">28 °C</span>
                <span className="text-[11px] font-semibold text-[#16a34a] bg-[#ecfdf5] px-2 py-0.5 rounded-full">
                  ● Optimal
                </span>
              </div>
            </div>

            {/* Card Kelembapan */}
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] h-[84px] flex flex-col justify-between" data-node-id="428:340">
              <div className="flex items-center justify-between text-[#64748b]">
                <span className="text-[12px]">Kelembapan Udara (RH)</span>
                <Droplets className="size-4 text-[#0284c7]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-bold text-[#0d1c2e] leading-none">75 %</span>
                <span className="text-[11px] font-semibold text-[#16a34a] bg-[#ecfdf5] px-2 py-0.5 rounded-full">
                  ● Normal
                </span>
              </div>
            </div>

            {/* Card Cahaya */}
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] h-[84px] flex flex-col justify-between" data-node-id="428:352">
              <div className="flex items-center justify-between text-[#64748b]">
                <span className="text-[12px]">Intensitas Cahaya</span>
                <Sun className="size-4 text-[#f59e0b]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-bold text-[#0d1c2e] leading-none">38.2 k Lux</span>
                <span className="text-[11px] font-semibold text-[#16a34a] bg-[#ecfdf5] px-2 py-0.5 rounded-full">
                  ● Optimal
                </span>
              </div>
            </div>

            {/* Card VPD */}
            <div className="bg-white border border-[#e2e8f0] rounded-[14px] p-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] h-[84px] flex flex-col justify-between" data-node-id="428:364">
              <div className="flex items-center justify-between text-[#64748b]">
                <span className="text-[12px]">Defisit Tekanan (VPD)</span>
                <Gauge className="size-4 text-[#8b5cf6]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[22px] font-bold text-[#0d1c2e] leading-none">1.0 kPa</span>
                <span className="text-[11px] font-semibold text-[#16a34a] bg-[#ecfdf5] px-2 py-0.5 rounded-full">
                  ● Ideal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Rekomendasi & Status Sistem */}
        <div className="w-full" data-node-id="428:396">
          <div
            className="bg-white border border-[#e2e8f0] rounded-[16px] p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] flex flex-col gap-3"
            data-node-id="428:397"
          >
            <div className="flex items-center justify-between" data-node-id="428:398">
              <div className="flex items-center gap-2" data-node-id="428:399">
                <Sparkles className="size-4 text-[#d97706]" />
                <h3 className="text-[15px] font-bold text-[#0d1c2e]" data-node-id="428:404">
                  Rekomendasi Agronomi AI
                </h3>
              </div>
              <span
                className="text-[11px] font-semibold text-[#d97706] bg-[#fffbeb] border border-[#fef3c7] px-2.5 py-0.5 rounded-full"
                data-node-id="428:406"
              >
                Prioritas Hari Ini
              </span>
            </div>

            {/* List Items */}
            <div className="space-y-2 pt-1" data-node-id="428:407">
              <div className="flex items-start gap-2.5 text-[13px] text-[#334155]" data-node-id="428:408">
                <span className="size-2 rounded-full bg-[#dc2626] mt-1.5 shrink-0" />
                <p data-node-id="428:410">
                  <strong className="text-[#0d1c2e]">Periksa area percabangan Node A:</strong> Indikasi awal bercak antraknosa pada 2 buah cabai. Lakukan pemangkasan selektif dan sanitasi buah busuk agar spora tidak menyebar saat angin kencang.
                </p>
              </div>

              <div className="flex items-start gap-2.5 text-[13px] text-[#334155]" data-node-id="428:411">
                <span className="size-2 rounded-full bg-[#d97706] mt-1.5 shrink-0" />
                <p data-node-id="428:413">
                  <strong className="text-[#0d1c2e]">Node B:</strong> Kelembapan tanah lapisan perakaran menurun cepat (32%). Disarankan verifikasi fisik emitter irigasi tetes bedengan 5–8 dari potensi penyumbatan sedimen.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] text-[#94a3b8]" data-node-id="428:414">
              <span data-node-id="428:415">
                Sumber: Asisten Agronomi AI CAPSI (Evaluasi RAG & Telemetri Lapangan) • Rujukan SOP Kementan
              </span>
              <a href="#monitoring" className="text-[#003622] font-semibold hover:underline hidden sm:inline-block">
                Buka Log Riwayat Lengkap →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-6"
        data-node-id="428:374"
        data-name="Footer Bar"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="428:375">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Interactive Chat Bot Pop-Up & FAB */}
      <ChatBotPopup />

      {/* Modal Detail Node Preview */}
      {activeNodeModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#e2e8f0] animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#16a34a]" />
                <h3 className="font-bold text-[18px] text-[#0d1c2e]">
                  Detail Telemetri Lapangan — {activeNodeModal}
                </h3>
              </div>
              <button
                onClick={() => setActiveNodeModal(null)}
                className="text-[#94a3b8] hover:text-[#0f172a] p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-[13px]">
              <div className="bg-[#f8fafc] p-3 rounded-xl border border-[#e2e8f0]">
                <p className="font-semibold text-[#0d1c2e]">Status Sensor Saat Ini</p>
                <div className="grid grid-cols-2 gap-2 mt-2 text-[12px]">
                  <div>ESP32 Gateway: <span className="text-[#16a34a] font-semibold">Terkoneksi (RSSI -62 dBm)</span></div>
                  <div>Interval Telemetri: <span className="font-semibold">Tiap 15 Menit</span></div>
                  <div>Catu Daya Solar: <span className="font-semibold">Baterai 94% (Charging)</span></div>
                  <div>Kamera Kanopi Edge: <span className="font-semibold">Sinkronisasi Aktif</span></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#fef2f2] border border-[#fecaca] text-[#dc2626]">
                <p className="font-semibold">Catatan Diagnostik AI:</p>
                <p className="mt-1 text-[12px] text-[#991b1b]">
                  {activeNodeModal.includes("Node A")
                    ? "Model EfficientNet-B0 mendeteksi anomali nekrotik pada kanopi atas. Validasi lapangan disarankan sebelum pukul 16:00 WIB."
                    : "Sensor kelembapan tanah resistif mendeteksi laju transpirasi tinggi dengan pengisian lambat. Periksa katup pipa irigasi."}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#f1f5f9]">
              <button
                onClick={() => setActiveNodeModal(null)}
                className="px-4 py-2 text-[13px] font-semibold text-[#475569] hover:bg-[#f1f5f9] rounded-lg"
              >
                Tutup
              </button>
              <button
                onClick={() => setActiveNodeModal(null)}
                className="px-4 py-2 text-[13px] font-semibold text-white bg-[#003622] hover:bg-[#004d31] rounded-lg"
              >
                Tanya Asisten AI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
