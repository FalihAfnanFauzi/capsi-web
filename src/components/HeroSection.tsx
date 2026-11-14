"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  MessageSquare,
  Thermometer,
  Droplets,
  Camera,
  AlertTriangle,
  Wifi,
  Activity,
  Info,
} from "lucide-react";

export default function HeroSection() {
  const [activeNode, setActiveNode] = useState<"nodeA" | "nodeB">("nodeA");

  return (
    <section
      id="hero"
      className="relative pt-[120px] pb-[80px] bg-gradient-to-b from-[#edfdf6] via-[rgba(231,247,241,0.4)] to-[#edfdf6] overflow-hidden px-6 lg:px-[48px]"
    >
      {/* Subtle Agronomic Backdrop Ambience */}
      <div
        className="pointer-events-none absolute -top-[96px] -right-[96px] size-[384px] rounded-full blur-[64px]"
        style={{ backgroundColor: "rgba(146, 244, 179, 0.2)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 h-[320px] w-[380px] rounded-full blur-[64px]"
        style={{ backgroundColor: "rgba(176, 240, 214, 0.3)" }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[56px] items-center">
          {/* Left Column: Value Prop & Brand Anchor */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pilot Status Pill */}
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[10px] px-[14px] py-[6px] rounded-full">
              <span className="size-[10px] rounded-full bg-[#17834d] shrink-0"></span>
              <span className="font-semibold text-[#003527] text-[12px] tracking-[0.12px]">
                Pilot Lapangan: Kawan Agro Bersama, Sumedang
              </span>
              <span className="font-semibold text-[#5c6b66] text-[12px] tracking-[0.12px]">·</span>
              <span className="font-semibold text-[#006d3d] text-[12px] tracking-[0.12px]">
                Varietas Cabai ORI 212
              </span>
            </div>

            {/* Tag */}
            <div className="pt-[24px]">
              <span className="font-semibold text-[#006d3d] text-[12px] tracking-[0.6px] uppercase">
                AGRONOMI PRESISI &amp; KOMPUTASI TEPI
              </span>
            </div>

            {/* Big Headline */}
            <div className="pt-[8px]">
              <h1 className="font-bold text-[#102a23] text-[34px] sm:text-[40px] leading-[42px] sm:leading-[48px] tracking-[-1px]">
                Inovasi AIoT untuk Ketahanan
                <br />
                Budidaya Cabai Presisi
              </h1>
            </div>

            {/* Subheading / Description */}
            <div className="pt-[24px] max-w-[672px]">
              <p className="font-normal text-[#5c6b66] text-[16px] leading-[26px]">
                Platform cerdas terintegrasi sensor mikroklimat tanah ESP32, kamera kanopi berbasis AI EfficientNet-B0, model proyeksi LSTM, dan Asisten Agronomi AI kontekstual untuk mitra petani Nusantara.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-[24px] flex flex-wrap gap-[16px] items-center w-full">
              <a
                href="#pilot"
                className="bg-[#064e3b] hover:bg-[#003527] text-white text-[14px] font-semibold px-[24px] py-[12px] min-h-[48px] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] inline-flex items-center gap-[8px] active:scale-95 transition-all"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#95d3ba]" />
                <span>Eksplorasi Demo Monitoring Lapangan</span>
              </a>
              <a
                href="#asisten"
                className="bg-white hover:bg-slate-50 text-[#003527] text-[14px] font-semibold px-[24px] py-[12px] min-h-[48px] rounded-[8px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-slate-200/50 inline-flex items-center gap-[8px] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#006d3d]" />
                <span>Konsultasi Asisten Agronomi AI</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="pt-[24px] grid grid-cols-3 gap-[16px] max-w-[576px] w-full">
              <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] p-[12px] flex flex-col">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Interval Telemetri
                </span>
                <span className="font-semibold text-[#102a23] text-[22px] tracking-[-0.22px] leading-[28px] mt-[2px]">
                  15 Menit
                </span>
                <span className="font-medium text-[#17834d] text-[11px] tracking-[0.22px] leading-[14px]">
                  IoT Base
                </span>
              </div>

              <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] p-[12px] flex flex-col">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Inferensi Visual
                </span>
                <span className="font-semibold text-[#102a23] text-[22px] tracking-[-0.22px] leading-[28px] mt-[2px]">
                  EfficientNet
                </span>
                <span className="font-medium text-[#17834d] text-[11px] tracking-[0.22px] leading-[14px]">
                  B0 Edge Model
                </span>
              </div>

              <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] p-[12px] flex flex-col">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Prediksi Resiko
                </span>
                <span className="font-semibold text-[#102a23] text-[22px] tracking-[-0.22px] leading-[28px] mt-[2px]">
                  Forecasting
                </span>
                <span className="font-medium text-[#17834d] text-[11px] tracking-[0.22px] leading-[14px]">
                  LSTM Multi-Horizon
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[16px] p-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col gap-[20px] max-w-[480px] mx-auto border border-slate-100/60">
              {/* Header Bar of Node Preview */}
              <div className="border-b border-solid border-[#e2e8f0]/50 pb-[13px] flex items-center justify-between">
                <div className="flex gap-[8px] items-center">
                  <Activity className="size-[19px] text-[#006d3d]" />
                  <span className="font-semibold text-[#102a23] text-[16px] tracking-[-0.08px] leading-[24px]">
                    Telemetri Aktif Kebun
                  </span>
                </div>
                <div className="bg-[#dcece5] rounded-full px-[10px] py-[2px] flex items-center gap-[6px]">
                  <span className="size-[6px] rounded-full bg-[#17834d]"></span>
                  <span className="font-normal text-[#17834d] text-[12px] leading-[16px]">
                    Live Gateway
                  </span>
                </div>
              </div>

              {/* Node Switcher Tabs (Segmented Control) */}
              <div className="bg-[#e7f7f1] p-[4px] rounded-[8px] flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveNode("nodeA")}
                  className={`flex-1 py-[8px] px-[12px] rounded-[6px] flex items-center justify-center gap-[6px] transition-all ${
                    activeNode === "nodeA"
                      ? "bg-white shadow-xs font-semibold text-[#003527]"
                      : "font-semibold text-[#5c6b66] hover:text-[#003527]"
                  }`}
                >
                  <span className="size-[8px] rounded-full bg-[#b42318] shrink-0"></span>
                  <span className="text-[12px] tracking-[0.12px]">Node A (Blok Utara)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveNode("nodeB")}
                  className={`flex-1 py-[8px] px-[12px] rounded-[6px] flex items-center justify-center gap-[6px] transition-all ${
                    activeNode === "nodeB"
                      ? "bg-white shadow-xs font-semibold text-[#003527]"
                      : "font-semibold text-[#5c6b66] hover:text-[#003527]"
                  }`}
                >
                  <span className="size-[8px] rounded-full bg-[#b66a12] shrink-0"></span>
                  <span className="text-[12px] tracking-[0.12px]">Node B (Blok Selatan)</span>
                </button>
              </div>

              {/* Dynamic Panel */}
              {activeNode === "nodeA" ? (
                <div className="flex flex-col gap-[16px]">
                  {/* Alert Banner Priority */}
                  <div className="bg-[rgba(255,218,214,0.3)] rounded-[12px] p-[14px] flex gap-[12px] items-start border border-[#fecaca]/50">
                    <AlertTriangle className="w-[18px] h-[18px] text-[#b42318] shrink-0 mt-0.5" />
                    <div className="flex-1 flex flex-col gap-[2px]">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold text-[#b42318] text-[12px] tracking-[0.12px]">
                          Segera Periksa
                        </span>
                        <span className="font-normal text-[rgba(180,35,24,0.8)] text-[12px]">
                          14m lalu
                        </span>
                      </div>
                      <p className="font-normal text-[#102a23] text-[13px] leading-[18px]">
                        Kamera 01 mendeteksi pola anomali bercak melingkar kanopi atas (Indikasi Antraknosa 84%). Sanitasi manual…
                      </p>
                    </div>
                  </div>

                  {/* Telemetry Metrics Grid 2x2 */}
                  <div className="grid grid-cols-2 gap-[12px]">
                    {/* Suhu Udara */}
                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <div className="flex items-center justify-between">
                        <span className="font-normal text-[#5c6b66] text-[12px]">Suhu Udara</span>
                        <Thermometer className="w-3.5 h-3.5 text-[#b66a12]" />
                      </div>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px]">
                          29.4
                        </span>
                        <span className="font-medium text-[#5c6b66] text-[11px]">°C</span>
                      </div>
                      <span className="font-normal text-[#b66a12] text-[12px]">
                        +1.8°C siang ini
                      </span>
                    </div>

                    {/* RH Kanopi */}
                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <div className="flex items-center justify-between">
                        <span className="font-normal text-[#5c6b66] text-[12px]">RH Kanopi</span>
                        <Droplets className="w-3.5 h-3.5 text-[#006d3d]" />
                      </div>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px]">
                          72
                        </span>
                        <span className="font-medium text-[#5c6b66] text-[11px]">%</span>
                      </div>
                      <span className="font-normal text-[#5c6b66] text-[12px]">
                        Lembap sedang
                      </span>
                    </div>

                    {/* Kelembapan Tanah */}
                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <div className="flex items-center justify-between">
                        <span className="font-normal text-[#5c6b66] text-[12px]">Kelembapan Tanah</span>
                        <Droplets className="w-3.5 h-3.5 text-[#b42318]" />
                      </div>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px]">
                          32
                        </span>
                        <span className="font-medium text-[#5c6b66] text-[11px]">%</span>
                      </div>
                      <span className="font-normal text-[#b42318] text-[12px]">
                        Ambang kering (&lt;35%)
                      </span>
                    </div>

                    {/* Status Kamera */}
                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <div className="flex items-center justify-between">
                        <span className="font-normal text-[#5c6b66] text-[12px]">Status Kamera</span>
                        <Camera className="w-3.5 h-3.5 text-[#17834d]" />
                      </div>
                      <div className="py-1">
                        <span className="font-semibold text-[#102a23] text-[16px] tracking-[-0.08px] leading-[24px]">
                          CAM-01
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <span className="size-[6px] rounded-full bg-[#17834d]"></span>
                        <span className="font-normal text-[#17834d] text-[12px]">Frame sinkron</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Visual Diagnostic Thumbnail */}
                  <div className="bg-[#e7f7f1] rounded-[12px] p-[12px] flex gap-[12px] items-center">
                    <div className="size-[56px] rounded-[8px] overflow-hidden relative shrink-0 bg-[#d6e6e0]">
                      <Image
                        src="/lahan.jpeg"
                        alt="Diagnostik Visual"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 right-0 bg-[#003527] px-[4px] py-[2px] rounded-tl-[4px]">
                        <span className="font-bold text-[9px] text-white">AI</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col min-w-0">
                      <span className="font-semibold text-[#003527] text-[12px] tracking-[0.12px] leading-[16px] truncate">
                        Diagnostik Visual Terkini
                      </span>
                      <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px] truncate">
                        Kombinasi gejala klorosis &amp; keriting daun tunas
                      </span>
                      <span className="font-medium text-[#006d3d] text-[11px] tracking-[0.22px] leading-[14px] mt-[2px] truncate">
                        Validasi lapang disarankan pukul 16:00
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-[16px]">
                  {/* Node B Telemetry Status */}
                  <div className="bg-[#fffbeb] rounded-[12px] p-[14px] flex gap-[12px] items-start border border-amber-200/50">
                    <Info className="w-[18px] h-[18px] text-[#b66a12] shrink-0 mt-0.5" />
                    <div className="flex-1 flex flex-col gap-[2px]">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold text-[#b66a12] text-[12px] tracking-[0.12px]">
                          Perlu Perhatian Aerasi
                        </span>
                        <span className="font-normal text-[#b66a12]/80 text-[12px]">
                          1m lalu
                        </span>
                      </div>
                      <p className="font-normal text-[#102a23] text-[13px] leading-[18px]">
                        Kelembapan udara kanopi mendekati jenuh (78%). Risiko embun bulu LSTM terprediksi 61%.
                      </p>
                    </div>
                  </div>

                  {/* Node B 2x2 Focus Grid */}
                  <div className="grid grid-cols-2 gap-[12px]">
                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <span className="font-normal text-[#5c6b66] text-[12px]">Suhu Kanopi</span>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px]">
                          27.1
                        </span>
                        <span className="font-medium text-[#5c6b66] text-[11px]">°C</span>
                      </div>
                      <span className="font-normal text-[#17834d] text-[12px]">Stabil ideal</span>
                    </div>

                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <span className="font-normal text-[#5c6b66] text-[12px]">RH Kanopi</span>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-bold text-[#b66a12] text-[28px] tracking-[-0.56px] leading-[34px]">
                          78
                        </span>
                        <span className="font-medium text-[#5c6b66] text-[11px]">%</span>
                      </div>
                      <span className="font-normal text-[#b66a12] text-[12px]">Mendekati saturasi</span>
                    </div>

                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <span className="font-normal text-[#5c6b66] text-[12px]">Kelembapan Tanah</span>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px]">
                          48
                        </span>
                        <span className="font-medium text-[#5c6b66] text-[11px]">%</span>
                      </div>
                      <span className="font-normal text-[#17834d] text-[12px]">Zona optimal</span>
                    </div>

                    <div className="bg-[#f6f8fc] rounded-[12px] p-[12px] flex flex-col gap-[1.5px]">
                      <span className="font-normal text-[#5c6b66] text-[12px]">Prediksi LSTM 48 Jam</span>
                      <div className="flex items-baseline gap-1 py-1">
                        <span className="font-semibold text-[#b66a12] text-[22px] tracking-[-0.22px] leading-[28px]">
                          Risiko 61%
                        </span>
                      </div>
                      <span className="font-normal text-[#5c6b66] text-[12px]">Potensi embun bulu</span>
                    </div>
                  </div>

                  {/* Node B Honest Note */}
                  <div className="bg-[rgba(220,236,229,0.4)] rounded-[12px] p-[12px] flex gap-[10px] items-center">
                    <Info className="w-4 h-4 text-[#006d3d] shrink-0" />
                    <span className="text-[12px] text-[#5c6b66] leading-[16px]">
                      Status Cakupan: Nir-Kamera Khusus. Sensor aktif untuk tanah dan cuaca.
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Footer Action of Card */}
              <div className="border-t border-[#e2e8f0]/50 pt-[12px] flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <Wifi className="w-[14px] h-[14px] text-[#5c6b66]" />
                  <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                    Terhubung ke Gateway ESP32
                  </span>
                </div>
                <Link
                  href="/beranda"
                  className="font-semibold text-[#003527] text-[12px] tracking-[0.12px] leading-[16px] hover:underline inline-flex items-center gap-1"
                >
                  <span>Detail Titik →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
