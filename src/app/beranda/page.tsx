"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  Tractor,
  Activity,
  AlertCircle,
  AlertTriangle,
  Bell,
  Thermometer,
  Droplets,
  Sun,
  Wind,
  Radio,
  Sparkles,
} from "lucide-react";

export default function BerandaPage() {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id="428:223"
      data-name="Beranda Terpadu — CAPSI Web Desktop (Rapi Tanpa Gap)"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="beranda" />

      {/* 2. Main Body Container (Exact Figma Dimensions: 1152px width inside 1280px screen) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] py-[12px] flex-1 flex flex-col justify-between gap-[12px]"
        data-node-id="428:224"
        data-name="Main Body"
      >
        {/* Identity Banner */}
        <div
          className="w-full bg-white border border-[#e2e8f0] rounded-[14px] px-[20px] py-[14px] flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          data-node-id="428:226"
          data-name="Identity Banner"
        >
          <div className="flex items-center gap-[12px]" data-node-id="428:227">
            <div
              className="size-[44px] rounded-[10px] bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center shrink-0"
              data-node-id="428:228"
            >
              <Tractor className="size-[20px] text-[#003622]" />
            </div>
            <div data-node-id="428:235">
              <h1 className="text-[22px] font-bold text-[#0f172a] leading-tight" data-node-id="428:236">
                Kawan AgroBersama
              </h1>
              <p className="text-[13px] text-[#64748b] mt-0.5" data-node-id="428:237">
                Blok Budidaya Terpadu • 2 Titik Pengamatan
              </p>
            </div>
          </div>

          <div data-node-id="428:238">
            <span className="text-[12px] text-[#64748b]" data-node-id="428:239">
              Terakhir diperbarui: 04 Nov 2026, 09:30 WIB
            </span>
          </div>
        </div>

        {/* Dual Section Row: Status Titik Pantau (Left) & Peringatan Utama (Right) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[24px]" data-node-id="428:240">
          {/* Left Column: Status Titik Pantau (672px / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-[12px]" data-node-id="428:241">
            <div className="flex items-center justify-between" data-node-id="428:242">
              <div className="flex items-center gap-[8px]" data-node-id="428:243">
                {/* Molecule / Network Sensor Icon */}
                <div className="size-[18px] flex items-center justify-center text-[#064e3b]">
                  <Activity className="size-[17px]" />
                </div>
                <h2 className="text-[17px] font-bold text-[#0f172a]" data-node-id="428:249">
                  Status Titik Pantau
                </h2>
              </div>
              <span className="text-[12px] font-medium text-[#10b981]" data-node-id="428:250">
                2 Node Aktif
              </span>
            </div>

            {/* 2 Nodes Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]" data-node-id="428:251">
              {/* Card Node A */}
              <div
                className="bg-white border border-[#e2e8f0] rounded-[14px] p-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[222px]"
                data-node-id="428:252"
              >
                <div>
                  <div className="flex items-center justify-between" data-node-id="428:253">
                    <div data-node-id="428:254">
                      <h3 className="font-bold text-[16px] text-[#0f172a] leading-tight" data-node-id="428:255">
                        Node A
                      </h3>
                      <p className="text-[12px] text-[#64748b] mt-0.5" data-node-id="428:256">
                        Blok Utara
                      </p>
                    </div>
                    <span className="text-[12px] font-normal text-[#10b981]" data-node-id="428:258">
                      ● Online
                    </span>
                  </div>

                  {/* Alert Pill (Exact Figma 428:259: layoutAlign stretch, fills #ffdad6) */}
                  <div
                    className="mt-[14px] bg-[#ffdad6] border border-[#ffc2bc] text-[#b42318] text-[12px] font-semibold px-[8px] py-[4px] rounded-[6px] flex items-center gap-[6px] w-full"
                    data-node-id="428:259"
                  >
                    <AlertCircle className="size-[12px] shrink-0 text-[#b42318]" />
                    <span data-node-id="428:260">Segera Periksa</span>
                  </div>

                  {/* Metrics Row */}
                  <div
                    className="grid grid-cols-2 gap-[14px] mt-[14px] bg-[#f8fafc] rounded-[8px] px-[14px] py-[10px]"
                    data-node-id="428:261"
                  >
                    <div data-node-id="428:262">
                      <p className="text-[12px] text-[#64748b]" data-node-id="428:263">Suhu</p>
                      <p className="text-[18px] font-bold text-[#0f172a] leading-tight mt-0.5" data-node-id="428:264">29°C</p>
                    </div>
                    <div data-node-id="428:265">
                      <p className="text-[12px] text-[#64748b]" data-node-id="428:266">Kelembapan</p>
                      <p className="text-[18px] font-bold text-[#0f172a] leading-tight mt-0.5" data-node-id="428:267">32%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px] pt-[8px]" data-node-id="428:268">
                  <span className="text-[#94a3b8]" data-node-id="428:269">3 mnt lalu</span>
                  <Link
                    href="/monitoring?node=A"
                    className="text-[#0a3d24] font-medium hover:underline text-[13px]"
                    data-node-id="428:270"
                  >
                    Detail →
                  </Link>
                </div>
              </div>

              {/* Card Node B */}
              <div
                className="bg-white border border-[#e2e8f0] rounded-[14px] p-[18px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[222px]"
                data-node-id="428:271"
              >
                <div>
                  <div className="flex items-center justify-between" data-node-id="428:272">
                    <div data-node-id="428:273">
                      <h3 className="font-bold text-[16px] text-[#0f172a] leading-tight" data-node-id="428:274">
                        Node B
                      </h3>
                      <p className="text-[12px] text-[#64748b] mt-0.5" data-node-id="428:275">
                        Blok Selatan
                      </p>
                    </div>
                    <span className="text-[12px] font-normal text-[#10b981]" data-node-id="428:277">
                      ● Online
                    </span>
                  </div>

                  {/* Warning Pill (Exact Figma 428:278: layoutAlign stretch, fills #ffdcc0) */}
                  <div
                    className="mt-[14px] bg-[#ffdcc0] border border-[#ffc299] text-[#b54708] text-[12px] font-semibold px-[8px] py-[4px] rounded-[6px] flex items-center gap-[6px] w-full"
                    data-node-id="428:278"
                  >
                    <AlertTriangle className="size-[12px] shrink-0 text-[#b66a12]" />
                    <span data-node-id="428:283">Perlu Dipantau</span>
                  </div>

                  {/* Metrics Row */}
                  <div
                    className="grid grid-cols-2 gap-[14px] mt-[14px] bg-[#f8fafc] rounded-[8px] px-[14px] py-[10px]"
                    data-node-id="428:284"
                  >
                    <div data-node-id="428:285">
                      <p className="text-[12px] text-[#64748b]" data-node-id="428:286">Suhu</p>
                      <p className="text-[18px] font-bold text-[#0f172a] leading-tight mt-0.5" data-node-id="428:287">27°C</p>
                    </div>
                    <div data-node-id="428:288">
                      <p className="text-[12px] text-[#64748b]" data-node-id="428:289">Kelembapan</p>
                      <p className="text-[18px] font-bold text-[#0f172a] leading-tight mt-0.5" data-node-id="428:290">65%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[12px] pt-[8px]" data-node-id="428:291">
                  <span className="text-[#94a3b8]" data-node-id="428:292">3 mnt lalu</span>
                  <Link
                    href="/monitoring?node=B"
                    className="text-[#0a3d24] font-medium hover:underline text-[13px]"
                    data-node-id="428:293"
                  >
                    Detail →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Peringatan Utama (456px / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-[12px]" data-node-id="428:294">
            <div className="flex items-center gap-[8px]" data-node-id="428:295">
              <Bell className="size-[15px] text-[#b42318]" />
              <h2 className="text-[17px] font-bold text-[#0f172a]" data-node-id="428:298">
                Peringatan Utama
              </h2>
            </div>

            {/* Alert Card */}
            <div
              className="bg-white border border-[#fecaca] rounded-[14px] p-[18px] shadow-[0_4px_14px_rgba(220,38,38,0.06)] flex flex-col justify-between h-[222px]"
              data-node-id="428:299"
            >
              <div>
                <div className="flex items-center justify-between" data-node-id="428:300">
                  <span
                    className="bg-[#ffdad6] border border-[#ffc2bc] text-[#b42318] text-[12px] font-semibold px-[8px] py-[4px] rounded-[6px] flex items-center gap-[6px]"
                    data-node-id="428:301"
                  >
                    <AlertCircle className="size-[12px] text-[#b42318]" />
                    <span>Segera Periksa</span>
                  </span>
                  <span className="text-[12px] text-[#64748b]" data-node-id="428:303">
                    04 Nov 2026, 09:30 WIB
                  </span>
                </div>

                <p className="text-[12px] font-normal text-[#475569] mt-[6px]" data-node-id="428:304">
                  Node A (Utara)
                </p>

                {/* Split Content: Text + Exact Figma 72x72 Diagnostic Thumbnail */}
                <div className="flex items-start gap-[12px] mt-[8px]" data-node-id="428:305">
                  <div className="flex-1" data-node-id="428:306">
                    <h4 className="text-[15px] font-bold text-[#0f172a] leading-snug" data-node-id="428:307">
                      Indikasi Gangguan pada Buah Cabai
                    </h4>
                    <p className="text-[12px] text-[#64748b] mt-[4px] leading-[18px]" data-node-id="428:308">
                      Kamera mengamati indikasi bercak anomali visual pada buah cabai di area Blok Utara.
                    </p>
                  </div>

                  <div
                    className="size-[72px] rounded-[8px] overflow-hidden shrink-0 border border-[#e2e8f0] bg-[#f1f5f9] relative"
                    data-node-id="428:309"
                  >
                    <Image
                      src="/diagnostic-thumbnail.png"
                      alt="Diagnostic Thumbnail"
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/peringatan/node-a"
                className="w-full h-[40px] bg-[#0a3d24] hover:bg-[#002817] text-white text-[13px] font-normal rounded-[8px] flex items-center justify-center transition-all cursor-pointer"
                data-node-id="428:315"
              >
                <span>Lihat Detail & Tindakan →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section Lingkungan: Ringkasan Kondisi Lingkungan */}
        <div className="w-full flex flex-col gap-[12px]" data-node-id="428:317">
          <div className="flex items-center justify-between" data-node-id="428:318">
            <div className="flex items-center gap-[8px]" data-node-id="428:319">
              <Thermometer className="size-[14px] text-[#064e3b]" />
              <h2 className="text-[17px] font-bold text-[#0f172a]" data-node-id="428:322">
                Ringkasan Kondisi Lingkungan
              </h2>
            </div>
            <a
              href="#monitoring"
              className="text-[13px] text-[#0a3d24] font-medium hover:underline flex items-center gap-[6px]"
              data-node-id="428:328"
            >
              <Radio className="size-[14px] text-[#064e3b]" />
              <span>Buka Monitoring Selengkapnya →</span>
            </a>
          </div>

          {/* 4 Cards Environment Grid (Exact 84px height) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px]" data-node-id="428:329">
            {/* Card Suhu */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] h-[84px] flex flex-col justify-between"
              data-node-id="428:330"
            >
              <div className="flex items-center justify-between" data-node-id="428:331">
                <span className="text-[13px] text-[#64748b]" data-node-id="428:332">Suhu Udara</span>
                <Thermometer className="size-[13px] text-[#003527]" />
              </div>
              <div className="flex items-center gap-[8px]" data-node-id="428:335">
                <span className="text-[24px] font-normal text-[#0f172a] leading-none" data-node-id="428:336">28 °C</span>
                <span className="text-[12px] font-normal text-[#10b981]" data-node-id="428:338">● Optimal</span>
              </div>
            </div>

            {/* Card Kelembapan */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] h-[84px] flex flex-col justify-between"
              data-node-id="428:340"
            >
              <div className="flex items-center justify-between" data-node-id="428:341">
                <span className="text-[13px] text-[#64748b]" data-node-id="428:342">Kelembapan Udara (RH)</span>
                <Droplets className="size-[13px] text-[#003527]" />
              </div>
              <div className="flex items-center gap-[8px]" data-node-id="428:347">
                <span className="text-[24px] font-normal text-[#0f172a] leading-none" data-node-id="428:348">75 %</span>
                <span className="text-[12px] font-normal text-[#10b981]" data-node-id="428:350">● Normal</span>
              </div>
            </div>

            {/* Card Cahaya */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] h-[84px] flex flex-col justify-between"
              data-node-id="428:352"
            >
              <div className="flex items-center justify-between" data-node-id="428:353">
                <span className="text-[13px] text-[#64748b]" data-node-id="428:354">Intensitas Cahaya</span>
                <Sun className="size-[14px] text-[#b66a12]" />
              </div>
              <div className="flex items-center gap-[8px]" data-node-id="428:359">
                <span className="text-[24px] font-normal text-[#0f172a] leading-none" data-node-id="428:360">38.2 Lux</span>
                <span className="text-[12px] font-normal text-[#10b981]" data-node-id="428:362">● Optimal</span>
              </div>
            </div>

            {/* Card VPD */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] h-[84px] flex flex-col justify-between"
              data-node-id="428:364"
            >
              <div className="flex items-center justify-between" data-node-id="428:365">
                <span className="text-[13px] text-[#64748b]" data-node-id="428:366">Defisit Tekanan (VPD)</span>
                <Wind className="size-[13px] text-[#17834d]" />
              </div>
              <div className="flex items-center gap-[8px]" data-node-id="428:369">
                <span className="text-[24px] font-normal text-[#0f172a] leading-none" data-node-id="428:370">1.0 kPa</span>
                <span className="text-[12px] font-normal text-[#10b981]" data-node-id="428:372">● Ideal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Rekomendasi & Status Sistem */}
        <div className="w-full" data-node-id="428:396">
          <div
            className="w-full lg:w-[672px] bg-white border border-[#e2e8f0] rounded-[14px] p-[18px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col gap-[10px]"
            data-node-id="428:397"
          >
            <div className="flex items-center justify-between" data-node-id="428:398">
              <div className="flex items-center gap-[8px]" data-node-id="428:399">
                <Sparkles className="size-[16px] text-[#0a3d24]" />
                <h3 className="text-[13px] font-normal text-[#0f172a]" data-node-id="428:404">
                  Rekomendasi Tindakan Agronomi AI
                </h3>
              </div>
              <span
                className="bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] text-[12px] font-normal px-[8px] py-[3px] rounded-full"
                data-node-id="428:405"
              >
                2 Prioritas Hari Ini
              </span>
            </div>

            {/* List Items */}
            <div className="space-y-[6px]" data-node-id="428:407">
              <div className="flex items-center gap-[8px]" data-node-id="428:408">
                <span className="size-[6px] rounded-full bg-[#dc2626] shrink-0" />
                <p className="text-[12px] text-[#334155] leading-normal" data-node-id="428:410">
                  Isolasi & Fungisida (Node A): Semprot ekstrak nabati / tembaga hidroksida pada area bercak buah cabai sebelum 10:00 WIB.
                </p>
              </div>

              <div className="flex items-center gap-[8px]" data-node-id="428:411">
                <span className="size-[6px] rounded-full bg-[#f59e0b] shrink-0" />
                <p className="text-[12px] text-[#334155] leading-normal" data-node-id="428:413">
                  Stabilisasi Kelembapan (Node A): Kelembapan Blok Utara (32%) rendah. Jadwalkan pengabutan mikro selama 15 menit.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-[4px] text-[12px]" data-node-id="428:414">
              <span className="text-[#64748b]" data-node-id="428:415">
                SOP Budidaya Cabai Kementan RI
              </span>
              <a
                href="#monitoring"
                className="text-[#0a3d24] font-normal hover:underline"
                data-node-id="428:416"
              >
                Buka Panduan Penanganan →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar (Exact Figma dimensions: w=1280, h=52, border-t) */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] rounded-t-[8px] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="428:374"
        data-name="Footer Bar"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="428:375">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Interactive Chat Bot Pop-Up & FAB */}
      <ChatBotPopup />
    </div>
  );
}
