"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  Activity,
  AlertTriangle,
  AlertCircle,
  Clock,
  BatteryCharging,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Layers,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

function MonitoringContent() {
  const searchParams = useSearchParams();
  const initialNode = searchParams.get("node")?.toUpperCase() === "B" ? "B" : "A";
  const [activeNode, setActiveNode] = useState<"A" | "B">(initialNode);
  const [activeMetricTab, setActiveMetricTab] = useState<"Tanah" | "Suhu" | "VPD">("Tanah");
  const [activeHorizonTab, setActiveHorizonTab] = useState<"24J" | "48J" | "72J">("24J");

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id={activeNode === "A" ? "349:489" : "349:714"}
      data-name={`Monitoring Node ${activeNode} — CAPSI Web Desktop`}
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="monitoring" />

      {/* 2. Main Body Container (Exact Figma dimensions: 1152px width, 64px padding) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] py-[16px] flex-1 flex flex-col justify-between gap-[16px]"
        data-node-id="349:522"
      >
        {/* Row 1: Header Title & Switcher Row */}
        <div
          className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          data-node-id="349:523"
        >
          <div data-node-id="349:524">
            <h1 className="text-[20px] font-bold text-[#0f172a] leading-tight" data-node-id="349:525">
              Monitoring Titik Lahan
            </h1>
            <p className="text-[13px] text-[#64748b] mt-0.5" data-node-id="349:526">
              Blok Budidaya Terpadu • Telemetri Mikroklimat & Agronomi Presisi
            </p>
          </div>

          {/* Segmented Node Switcher (Exact Figma 512:4211: #dce9ff, rounded-12px) */}
          <div
            className="flex items-center bg-[#dce9ff] p-[4px] rounded-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
            data-node-id="512:4211"
          >
            <button
              onClick={() => setActiveNode("A")}
              className={`flex items-center gap-[6px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer ${
                activeNode === "A"
                  ? "bg-[#134e35] text-white shadow-sm"
                  : "text-[#334155] hover:text-[#0f172a] hover:bg-white/40"
              }`}
              data-node-id="512:4212"
            >
              <Activity className="size-[14px]" />
              <span>Node A (Utara)</span>
            </button>

            <button
              onClick={() => setActiveNode("B")}
              className={`flex items-center gap-[6px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer ${
                activeNode === "B"
                  ? "bg-[#134e35] text-white shadow-sm"
                  : "text-[#334155] hover:text-[#0f172a] hover:bg-white/40"
              }`}
              data-node-id="512:4218"
            >
              <Activity className="size-[14px]" />
              <span>Node B (Selatan)</span>
            </button>
          </div>
        </div>

        {/* Row 2: Node Identity & Alert Banner */}
        <div
          className="w-full bg-white border border-[#e2e8f0] rounded-[14px] px-[20px] lg:px-[24px] py-[16px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          data-node-id="349:532"
        >
          {/* Node Info Left */}
          <div className="flex flex-col gap-[8px]" data-node-id="349:533">
            <div className="flex items-center gap-[10px]" data-node-id="349:534">
              <h2 className="text-[18px] font-bold text-[#0f172a] leading-none" data-node-id="349:535">
                {activeNode === "A" ? "Node A (Blok Utara)" : "Node B (Blok Selatan)"}
              </h2>
              <span
                className="bg-[#ecfdf5] border border-[#d1fae5] text-[#065f46] text-[12px] font-bold px-[8px] py-[2px] rounded-full flex items-center gap-1.5"
                data-node-id="349:536"
              >
                <span className="size-1.5 rounded-full bg-[#10b981]" />
                Online
              </span>
            </div>

            <div className="flex items-center gap-[8px] text-[12px] text-[#64748b]" data-node-id="349:539">
              <span
                className="bg-[#f8fafc] border border-[#e2e8f0] px-[8px] py-[3px] rounded-[6px] flex items-center gap-[6px]"
                data-node-id="349:540"
              >
                <BatteryCharging className="size-[13px] text-[#16a34a]" />
                <span>{activeNode === "A" ? "89% • Tenaga Surya" : "94% • Tenaga Surya"}</span>
              </span>

              <span
                className="bg-[#f8fafc] border border-[#e2e8f0] px-[8px] py-[3px] rounded-[6px] flex items-center gap-[6px]"
                data-node-id="349:542"
              >
                <Clock className="size-[13px] text-[#64748b]" />
                <span>3 mnt lalu</span>
              </span>
            </div>
          </div>

          {/* Alert Strip Right (Dynamic per Node) */}
          {activeNode === "A" ? (
            <div
              className="w-full lg:w-auto bg-[#fef2f2] border border-[#fecaca] rounded-[10px] px-[16px] py-[10px] flex items-center justify-between gap-[14px]"
              data-node-id="349:546"
            >
              <div className="flex items-center gap-[12px]">
                <div
                  className="size-[38px] rounded-[8px] bg-[#dc2626] text-white flex items-center justify-center shrink-0"
                  data-node-id="512:4207"
                >
                  <AlertCircle className="size-[20px]" />
                </div>
                <div data-node-id="349:552">
                  <h4 className="text-[13px] font-bold text-[#991b1b] leading-tight" data-node-id="349:553">
                    Indikasi Gangguan pada Buah Cabai
                  </h4>
                  <p className="text-[12px] text-[#b91c1c] mt-0.5" data-node-id="349:554">
                    Deteksi dini anomali visual bercak patogen
                  </p>
                </div>
              </div>

              <Link
                href="/peringatan"
                className="px-[12px] py-[7px] bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[12px] font-semibold rounded-[6px] whitespace-nowrap transition-all"
                data-node-id="349:555"
              >
                Detail Tindakan →
              </Link>
            </div>
          ) : (
            <div
              className="w-full lg:w-auto bg-[#fffbeb] border border-[#fde68a] rounded-[10px] px-[16px] py-[10px] flex items-center justify-between gap-[14px]"
              data-node-id="349:771"
            >
              <div className="flex items-center gap-[12px]">
                <div
                  className="size-[38px] rounded-[8px] bg-[#d97706] text-white flex items-center justify-center shrink-0"
                  data-node-id="512:4209"
                >
                  <AlertTriangle className="size-[20px]" />
                </div>
                <div data-node-id="349:775">
                  <h4 className="text-[13px] font-bold text-[#92400e] leading-tight" data-node-id="349:776">
                    Perubahan tren kelembapan tanah terdeteksi
                  </h4>
                  <p className="text-[12px] text-[#b45309] mt-0.5" data-node-id="349:777">
                    Pola penurunan bertahap teridentifikasi sensor
                  </p>
                </div>
              </div>

              <Link
                href="/peringatan"
                className="px-[12px] py-[7px] bg-[#d97706] hover:bg-[#b45309] text-white text-[12px] font-semibold rounded-[6px] whitespace-nowrap transition-all"
                data-node-id="349:778"
              >
                Detail Tindakan →
              </Link>
            </div>
          )}
        </div>

        {/* Row 3: Section Telemetri Mikroklimat */}
        <div className="w-full flex flex-col gap-[10px]" data-node-id="349:557">
          <div className="flex items-center justify-between" data-node-id="349:558">
            <div className="flex items-center gap-[8px]" data-node-id="349:559">
              <Thermometer className="size-[16px] text-[#064e3b]" />
              <h3 className="text-[15px] font-bold text-[#0f172a]" data-node-id="349:562">
                Telemetri Lingkungan Mikroklimat
              </h3>
            </div>
            <span className="text-[12px] text-[#64748b]" data-node-id="349:563">
              Frekuensi Pembaruan: per 15 Menit • Sensor Calibrated
            </span>
          </div>

          {/* 6 Cards Grid (Exact 182px col width in 1152px container) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[12px]" data-node-id="349:564">
            {/* Card 1: Suhu Udara */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:565"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#64748b]">Suhu Udara</span>
                <span className="bg-[#ecfdf5] text-[#065f46] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                  Normal
                </span>
              </div>
              <div className="flex items-baseline gap-[2px]">
                <span className="text-[24px] font-bold text-[#0f172a] leading-none">27</span>
                <span className="text-[14px] text-[#64748b]"> °C</span>
              </div>
              <span className="text-[12px] font-medium text-[#10b981]">
                {activeNode === "A" ? "↗ +2°C" : "↗ +2°C vs kemarin"}
              </span>
            </div>

            {/* Card 2: RH Udara */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:577"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#64748b]">RH Udara</span>
                <span className="bg-[#ecfdf5] text-[#065f46] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                  Ideal
                </span>
              </div>
              <div className="flex items-baseline gap-[2px]">
                <span className="text-[24px] font-bold text-[#0f172a] leading-none">72</span>
                <span className="text-[14px] text-[#64748b]"> %</span>
              </div>
              <span className="text-[12px] font-normal text-[#64748b]">
                {activeNode === "A" ? "↘ -5%" : "↘ -5% stabil"}
              </span>
            </div>

            {/* Card 3: Suhu Tanah */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:591"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#64748b]">Suhu Tanah</span>
                <span className="bg-[#ecfdf5] text-[#065f46] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                  Stabil
                </span>
              </div>
              <div className="flex items-baseline gap-[2px]">
                <span className="text-[24px] font-bold text-[#0f172a] leading-none">
                  {activeNode === "A" ? "24" : "27"}
                </span>
                <span className="text-[14px] text-[#64748b]"> °C</span>
              </div>
              <span className="text-[12px] font-normal text-[#64748b]">
                {activeNode === "A" ? "↘ -2°C" : "↗ +2°C perakaran"}
              </span>
            </div>

            {/* Card 4: Kelembapan Tanah (Alert on Node A, Normal on Node B) */}
            {activeNode === "A" ? (
              <div
                className="bg-[#fffbeb] border-[1.5px] border-[#fde68a] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_4px_rgba(245,158,11,0.08)]"
                data-node-id="349:603"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#92400e]">Kel. Tanah</span>
                  <span className="bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                    Kering
                  </span>
                </div>
                <div className="flex items-baseline gap-[2px]">
                  <span className="text-[24px] font-bold text-[#b45309] leading-none">32</span>
                  <span className="text-[14px] font-semibold text-[#92400e]"> %</span>
                </div>
                <span className="text-[12px] font-bold text-[#dc2626]">↘ -10%</span>
              </div>
            ) : (
              <div
                className="bg-white border border-[#e2e8f0] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                data-node-id="349:826"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#0f172a]">Kel. Tanah</span>
                  <span className="bg-[#ecfdf5] text-[#065f46] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                    Normal
                  </span>
                </div>
                <div className="flex items-baseline gap-[2px]">
                  <span className="text-[24px] font-bold text-[#0f172a] leading-none">65</span>
                  <span className="text-[14px] font-semibold text-[#64748b]"> %</span>
                </div>
                <span className="text-[12px] font-medium text-[#10b981]">↘ -5% Zona Aman</span>
              </div>
            )}

            {/* Card 5: VPD Transpirasi */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:615"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#64748b]">VPD Transpirasi</span>
                <span className="bg-[#ecfdf5] text-[#065f46] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                  Optimal
                </span>
              </div>
              <div className="flex items-baseline gap-[2px]">
                <span className="text-[24px] font-bold text-[#0f172a] leading-none">1.2</span>
                <span className="text-[14px] text-[#64748b]"> kPa</span>
              </div>
              <span className="text-[12px] font-medium text-[#10b981]">Transpirasi Terjaga</span>
            </div>

            {/* Card 6: Cahaya */}
            <div
              className="bg-white border border-[#e2e8f0] rounded-[12px] p-[14px] flex flex-col justify-between h-[110px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:627"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-[#64748b]">Cahaya</span>
                <span className="bg-[#eff6ff] text-[#1e40af] text-[11px] font-bold px-[6px] py-[1px] rounded-full">
                  Cerah
                </span>
              </div>
              <div className="flex items-baseline gap-[2px]">
                <span className="text-[24px] font-bold text-[#0f172a] leading-none">425</span>
                <span className="text-[14px] text-[#64748b]"> Lux</span>
              </div>
              <span className="text-[12px] font-medium text-[#3b82f6]">Fotosintesis Aktif</span>
            </div>
          </div>
        </div>

        {/* Row 4: Dual Analytical Grid Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px]" data-node-id="349:641">
          {/* Col Left: Tren Kondisi Lahan (Exact 566px width) */}
          <div
            className="bg-white border border-[#e2e8f0] rounded-[14px] p-[20px] flex flex-col justify-between gap-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.02)]"
            data-node-id="349:642"
          >
            {/* Header + Filter Tabs */}
            <div className="flex items-center justify-between" data-node-id="349:643">
              <h4 className="text-[15px] font-bold text-[#0f172a]" data-node-id="349:644">
                Tren Kondisi Lahan
              </h4>

              <div
                className="flex items-center bg-[#f1f5f9] p-[2px] rounded-[8px]"
                data-node-id="349:645"
              >
                {(["Tanah", "Suhu", "VPD"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveMetricTab(tab)}
                    className={`px-[12px] py-[4px] rounded-[6px] text-[12px] font-medium transition-all ${
                      activeMetricTab === tab
                        ? "bg-[#134e35] text-white shadow-xs"
                        : "text-[#64748b] hover:text-[#0f172a]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Chart Area */}
            <div
              className="relative w-full h-[150px] bg-[#f8fafc] rounded-[10px] p-2 overflow-hidden flex flex-col justify-end"
              data-node-id="349:652"
            >
              <svg className="w-full h-full" viewBox="0 0 526 140" fill="none">
                <defs>
                  <linearGradient id="soilGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="warningSoilGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Threshold Line: Ambang 40% */}
                <line x1="20" y1="75" x2="435" y2="75" stroke="#dc2626" strokeDasharray="4 4" strokeWidth="1.2" />
                <text x="442" y="79" fill="#dc2626" fontSize="11" fontFamily="Plus Jakarta Sans" fontWeight="600">
                  Ambang 40%
                </text>

                {activeNode === "A" ? (
                  <>
                    {/* Node A: Drops from 68% to 32% (below threshold) */}
                    <path
                      d="M 20 25 C 100 28, 180 32, 260 55 C 320 72, 380 95, 470 115 L 470 135 L 20 135 Z"
                      fill="url(#warningSoilGradient)"
                    />
                    <path
                      d="M 20 25 C 100 28, 180 32, 260 55 C 320 72, 380 95, 470 115"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Red dot at the current reading */}
                    <circle cx="470" cy="115" r="5" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
                  </>
                ) : (
                  <>
                    {/* Node B: Stays in comfortable zone around 65% */}
                    <path
                      d="M 20 35 C 120 33, 220 38, 320 42 C 380 44, 420 45, 470 48 L 470 135 L 20 135 Z"
                      fill="url(#soilGradient)"
                    />
                    <path
                      d="M 20 35 C 120 33, 220 38, 320 42 C 380 44, 420 45, 470 48"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="470" cy="48" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  </>
                )}
              </svg>
            </div>

            {/* Time Axis Row */}
            <div className="flex items-center justify-between text-[11px] text-[#64748b] px-1" data-node-id="349:660">
              <span>00.00</span>
              <span>06.00</span>
              <span>12.00</span>
              <span className="font-semibold text-[#0f172a]">
                {activeNode === "A" ? "Sekarang (32%)" : "Sekarang (65%)"}
              </span>
            </div>

            {/* Insight Banner */}
            <div
              className={`rounded-[8px] px-[12px] py-[8px] text-[12px] flex items-center gap-[8px] ${
                activeNode === "A"
                  ? "bg-[#fef3c7] border border-[#fde68a] text-[#92400e]"
                  : "bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46]"
              }`}
              data-node-id="349:665"
            >
              <span>
                {activeNode === "A"
                  ? "⚠️ Kelembapan tanah turun di bawah ambang batas optimal (40%) sejak pukul 12.30 WIB."
                  : "✓ Kelembapan tanah berada dalam zona aman (65%), tren penurunan bertahap dipantau."}
              </span>
            </div>
          </div>

          {/* Col Right: Prediksi Tanaman (LSTM) (Exact 566px width) */}
          <div
            className="bg-white border border-[#e2e8f0] rounded-[14px] p-[20px] flex flex-col justify-between gap-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.02)]"
            data-node-id="349:667"
          >
            {/* Header + Stress Pill + Horizon Tabs */}
            <div className="flex items-center justify-between" data-node-id="349:668">
              <h4 className="text-[15px] font-bold text-[#0f172a]" data-node-id="349:670">
                Prediksi & Proyeksi Tanaman
              </h4>

              <div className="flex items-center gap-[8px]">
                {activeNode === "A" ? (
                  <span
                    className="bg-[#fef3c7] text-[#92400e] text-[11px] font-bold px-[8px] py-[2px] rounded-full"
                    data-node-id="349:672"
                  >
                    ● Stres Sedang
                  </span>
                ) : (
                  <span
                    className="bg-[#ecfdf5] text-[#065f46] text-[11px] font-bold px-[8px] py-[2px] rounded-full"
                    data-node-id="349:894"
                  >
                    ● Normal
                  </span>
                )}

                <div
                  className="flex items-center bg-[#f1f5f9] p-[2px] rounded-[8px]"
                  data-node-id="349:674"
                >
                  {(["24J", "48J", "72J"] as const).map((hz) => (
                    <button
                      key={hz}
                      onClick={() => setActiveHorizonTab(hz)}
                      className={`px-[8px] py-[3px] rounded-[6px] text-[11px] font-medium transition-all ${
                        activeHorizonTab === hz
                          ? "bg-[#134e35] text-white shadow-xs"
                          : "text-[#64748b] hover:text-[#0f172a]"
                      }`}
                    >
                      {hz === "24J" ? "24 Jam" : hz === "48J" ? "48 Jam" : "72 Jam"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LSTM Forecast SVG */}
            <div
              className="relative w-full h-[135px] bg-[#f8fafc] rounded-[10px] p-2 overflow-hidden flex flex-col justify-end"
              data-node-id="349:681"
            >
              <svg className="w-full h-full" viewBox="0 0 526 125" fill="none">
                {/* Vertical boundary: Batas Aktual */}
                <line x1="230" y1="10" x2="230" y2="105" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1" />
                <text x="235" y="20" fill="#64748b" fontSize="10" fontFamily="Plus Jakarta Sans">
                  Batas Aktual
                </text>

                {/* Horizontal threshold: Ambang Kritis 40% */}
                <line x1="20" y1="65" x2="400" y2="65" stroke="#ef4444" strokeDasharray="3 3" strokeWidth="1" />
                <text x="405" y="69" fill="#ef4444" fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="600">
                  Ambang Kritis 40%
                </text>

                {/* Historical Curve */}
                <path
                  d="M 30 45 C 90 48, 160 55, 230 75"
                  stroke="#475569"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="230" cy="75" r="4" fill="#0f172a" />

                {/* Forecast Projections */}
                {/* Trajectory 1: Pasif (Red drop) */}
                <path
                  d="M 230 75 C 310 88, 390 100, 480 105"
                  stroke="#dc2626"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="480" cy="105" r="3.5" fill="#dc2626" />

                {/* Trajectory 2: Dengan Rekomendasi (Green rebound) */}
                <path
                  d="M 230 75 C 310 55, 390 35, 480 32"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />
                <circle cx="480" cy="32" r="4" fill="#10b981" />

                {/* X-Axis labels */}
                <text x="30" y="118" fill="#94a3b8" fontSize="10" fontFamily="Plus Jakarta Sans">-12 Jam</text>
                <text x="195" y="118" fill="#0f172a" fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="600">
                  {activeNode === "A" ? "Sekarang (32%)" : "Sekarang (65%)"}
                </text>
                <text x="445" y="118" fill="#10b981" fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="600">+24 Jam</text>
              </svg>
            </div>

            {/* 3 Projection Cards */}
            <div className="grid grid-cols-3 gap-[10px]" data-node-id="349:698">
              {activeNode === "A" ? (
                <>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] p-[10px] flex flex-col justify-between"
                    data-node-id="349:699"
                  >
                    <span className="text-[11px] font-bold text-[#64748b]">{"\u002b"}12 JAM</span>
                    <span className="text-[18px] font-bold text-[#d97706] leading-none my-1">30%</span>
                    <span className="text-[11px] text-[#64748b] leading-tight">Waspada transpirasi siang</span>
                  </div>

                  <div
                    className="bg-[#fef2f2] border border-[#fecaca] rounded-[8px] p-[10px] flex flex-col justify-between"
                    data-node-id="349:703"
                  >
                    <span className="text-[11px] font-bold text-[#991b1b]">{"\u002b"}24J PASIF</span>
                    <span className="text-[18px] font-bold text-[#dc2626] leading-none my-1">24%</span>
                    <span className="text-[11px] font-medium text-[#b91c1c] leading-tight">Risiko gugur bunga tinggi</span>
                  </div>

                  <div
                    className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-[8px] p-[10px] flex flex-col justify-between"
                    data-node-id="349:707"
                  >
                    <span className="text-[11px] font-bold text-[#065f46]">{"\u002b"}24J REKOMENDASI</span>
                    <span className="text-[18px] font-bold text-[#10b981] leading-none my-1">58%</span>
                    <span className="text-[11px] font-medium text-[#047857] leading-tight">Rebound zona optimal</span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] p-[10px] flex flex-col justify-between"
                    data-node-id="349:921"
                  >
                    <span className="text-[11px] font-bold text-[#64748b]">{"\u002b"}12 JAM</span>
                    <span className="text-[18px] font-bold text-[#0f172a] leading-none my-1">58%</span>
                    <span className="text-[11px] text-[#64748b] leading-tight">Kondisi kelembapan terjaga</span>
                  </div>

                  <div
                    className="bg-[#fffbeb] border border-[#fde68a] rounded-[8px] p-[10px] flex flex-col justify-between"
                    data-node-id="349:925"
                  >
                    <span className="text-[11px] font-bold text-[#92400e]">{"\u002b"}24J PASIF</span>
                    <span className="text-[18px] font-bold text-[#d97706] leading-none my-1">42%</span>
                    <span className="text-[11px] text-[#92400e] leading-tight">Mendekati ambang kritis</span>
                  </div>

                  <div
                    className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-[8px] p-[10px] flex flex-col justify-between"
                    data-node-id="349:929"
                  >
                    <span className="text-[11px] font-bold text-[#065f46]">{"\u002b"}24J REKOMENDASI</span>
                    <span className="text-[18px] font-bold text-[#10b981] leading-none my-1">64%</span>
                    <span className="text-[11px] font-medium text-[#047857] leading-tight">Zona optimal produktif</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar (Exact Figma dimensions: w=1280, h=52, border-t) */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="349:711"
        data-name="Footer Bar"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="349:712">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Interactive Chat Bot Pop-Up & FAB */}
      <ChatBotPopup />
    </div>
  );
}

export default function MonitoringPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#64748b]">Memuat Monitoring Lahan...</div>}>
      <MonitoringContent />
    </Suspense>
  );
}
