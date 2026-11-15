"use client";

import React, { useState, useMemo } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Download,
  ChevronDown,
  RefreshCw,
  Search,
  Calendar,
  X,
  FileText,
  FileSpreadsheet,
  Check,
} from "lucide-react";

interface ActivityItem {
  id: string;
  nodeTag: string;
  nodeKey: "node-a" | "node-b" | "all";
  timestamp: string;
  title: string;
  description: string;
  category: "normal" | "warning" | "danger";
}

const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: "ACT-001",
    nodeTag: "Node A (Utara)",
    nodeKey: "node-a",
    timestamp: "Hari ini, 10:15 WIB",
    title: "Pemeriksaan Lapangan: Ada gejala serupa, dilakukan penanganan fisik",
    description:
      "Penyortiran 3 daun terindikasi bercak pada lajur A-04. Aplikasi biofungisida lokal telah disemprotkan secara mandiri untuk pencegahan spora.",
    category: "normal",
  },
  {
    id: "ACT-002",
    nodeTag: "Node B (Selatan)",
    nodeKey: "node-b",
    timestamp: "Kemarin, 14:00 WIB",
    title: "Penyesuaian irigasi tetes setelah penurunan kelembapan",
    description:
      "Solenoid valve diaktifkan selama 18 menit hingga kelembapan tanah perakaran kembali stabil pada rentang target 65% RH.",
    category: "normal",
  },
  {
    id: "ACT-003",
    nodeTag: "Semua Node (A & B)",
    nodeKey: "all",
    timestamp: "02 Nov 2026, 08:30 WIB",
    title: "Kalibrasi rutin sensor pH & kelembapan tanah telemetry",
    description:
      "Pembersihan probe sensor tanah dan pengujian transmisi data telemetry via ESP-NOW. Tingkat packet loss 0.02% (Kondisi Sangat Baik).",
    category: "normal",
  },
  {
    id: "ACT-004",
    nodeTag: "Node A (Utara)",
    nodeKey: "node-a",
    timestamp: "28 Okt 2026, 09:15 WIB",
    title: "Pemasangan tiang telemetry & kalibrasi awal sensor mikroklimat",
    description:
      "Instalasi tiang telemetry mikroklimat pada petak blok budidaya terpadu dengan integrasi gateway ESP32 dan modul transmisi panel surya.",
    category: "normal",
  },
];

export default function RiwayatPage() {
  const [timeFilter, setTimeFilter] = useState<"7d" | "30d" | "90d" | "custom">("30d");
  const [nodeFilter, setNodeFilter] = useState<"all" | "node-a" | "node-b">("all");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "normal" | "warning" | "danger">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState<"pdf" | "xlsx">("pdf");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  // Filter activities dynamically based on node, category, and search query
  const filteredActivities = useMemo(() => {
    return INITIAL_ACTIVITIES.filter((act) => {
      // Node filter
      if (nodeFilter !== "all" && act.nodeKey !== nodeFilter && act.nodeKey !== "all") {
        return false;
      }
      // Category filter
      if (categoryFilter !== "all" && act.category !== categoryFilter) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = act.title.toLowerCase().includes(query);
        const matchesDesc = act.description.toLowerCase().includes(query);
        const matchesNode = act.nodeTag.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesNode) {
          return false;
        }
      }
      return true;
    });
  }, [nodeFilter, categoryFilter, searchQuery]);

  const handleExportDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsExportModalOpen(false);
      const filename =
        exportFormat === "pdf"
          ? `CAPSI_Rekap_Aktivitas_${timeFilter.toUpperCase()}.pdf`
          : `CAPSI_Log_Aktivitas_${timeFilter.toUpperCase()}.xlsx`;
      setDownloadSuccessToast(`Berkas ${filename} berhasil diunduh!`);
      setTimeout(() => {
        setDownloadSuccessToast(null);
      }, 3500);
    }, 700);
  };

  const getTimeFilterLabel = () => {
    switch (timeFilter) {
      case "7d":
        return "7 Hari Terakhir";
      case "30d":
        return "30 Hari Terakhir";
      case "90d":
        return "90 Hari Terakhir";
      case "custom":
        return "Periode Kustom";
    }
  };

  const getNodeFilterLabel = () => {
    switch (nodeFilter) {
      case "all":
        return "Semua Node";
      case "node-a":
        return "Node A (Utara)";
      case "node-b":
        return "Node B (Selatan)";
    }
  };

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id="349:1255"
      data-name="Riwayat Aktivitas — CAPSI Web Desktop"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="riwayat" />

      {/* 2. Main Body Container (Exact Figma Dimensions: 1152px width inside 1280px screen) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] py-[20px] flex-1 flex flex-col justify-start gap-[16px]"
        data-node-id="349:1288"
        data-name="Main Body"
      >
        {/* Header Title & Filter Controls Bar (45px height) */}
        <div
          className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          data-node-id="349:1289"
          data-name="Header Title & Filter Controls Bar"
        >
          {/* Title Group */}
          <div data-node-id="349:1290" data-name="Title Group">
            <h1
              className="text-[20px] font-bold text-[#0f172a] leading-tight"
              data-node-id="349:1291"
            >
              Riwayat Aktivitas
            </h1>
            <p
              className="text-[13px] text-[#64748b] mt-0.5"
              data-node-id="349:1292"
            >
              Kronologi pemantauan, pemeriksaan lapangan, dan arsip kebun terpadu
            </p>
          </div>

          {/* Filters Wrapper */}
          <div
            className="flex items-center gap-[12px] flex-wrap sm:flex-nowrap"
            data-node-id="349:1293"
            data-name="Filters Wrapper"
          >
            {/* Time Filter Tabs */}
            <div
              className="bg-[#eff4ff] p-[3px] rounded-full flex items-center gap-[2px]"
              data-node-id="349:1294"
              data-name="Time Filter Tabs"
            >
              <button
                type="button"
                onClick={() => setTimeFilter("7d")}
                className={`text-[12.5px] px-[12px] py-[5px] rounded-full transition-all cursor-pointer ${
                  timeFilter === "7d"
                    ? "bg-[#134e35] text-white font-semibold shadow-xs"
                    : "text-[#475569] hover:text-[#0f172a] font-medium"
                }`}
                data-node-id="349:1295"
              >
                7 Hari
              </button>

              <button
                type="button"
                onClick={() => setTimeFilter("30d")}
                className={`text-[12.5px] px-[14px] py-[5px] rounded-full transition-all cursor-pointer ${
                  timeFilter === "30d"
                    ? "bg-[#134e35] text-white font-semibold shadow-xs"
                    : "text-[#475569] hover:text-[#0f172a] font-medium"
                }`}
                data-node-id="349:1297"
              >
                30 Hari
              </button>

              <button
                type="button"
                onClick={() => setTimeFilter("90d")}
                className={`text-[12.5px] px-[12px] py-[5px] rounded-full transition-all cursor-pointer ${
                  timeFilter === "90d"
                    ? "bg-[#134e35] text-white font-semibold shadow-xs"
                    : "text-[#475569] hover:text-[#0f172a] font-medium"
                }`}
                data-node-id="349:1299"
              >
                90 Hari
              </button>

              <button
                type="button"
                onClick={() => setTimeFilter("custom")}
                className={`text-[12.5px] px-[12px] py-[5px] rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  timeFilter === "custom"
                    ? "bg-[#134e35] text-white font-semibold shadow-xs"
                    : "text-[#475569] hover:text-[#0f172a] font-medium"
                }`}
                data-node-id="349:1301"
              >
                <span>Kustom</span>
                <Calendar className={`size-3.5 ${timeFilter === "custom" ? "text-white" : "text-[#404943]"}`} />
              </button>
            </div>

            {/* Node Filter Tabs */}
            <div
              className="bg-[#e6eeff] p-[3px] rounded-[12px] flex items-center gap-[2px]"
              data-node-id="349:1308"
              data-name="Node Filter Tabs"
            >
              <button
                type="button"
                onClick={() => setNodeFilter("all")}
                className={`text-[12.5px] px-[14px] py-[5px] rounded-[8px] transition-all cursor-pointer ${
                  nodeFilter === "all"
                    ? "bg-white text-[#003622] font-semibold shadow-xs"
                    : "text-[#404943] hover:text-[#003622] font-medium"
                }`}
                data-node-id="349:1309"
              >
                Semua Node
              </button>

              <button
                type="button"
                onClick={() => setNodeFilter("node-a")}
                className={`text-[12.5px] px-[12px] py-[5px] rounded-[8px] transition-all cursor-pointer ${
                  nodeFilter === "node-a"
                    ? "bg-white text-[#003622] font-semibold shadow-xs"
                    : "text-[#404943] hover:text-[#003622] font-medium"
                }`}
                data-node-id="349:1311"
              >
                Node A
              </button>

              <button
                type="button"
                onClick={() => setNodeFilter("node-b")}
                className={`text-[12.5px] px-[12px] py-[5px] rounded-[8px] transition-all cursor-pointer ${
                  nodeFilter === "node-b"
                    ? "bg-white text-[#003622] font-semibold shadow-xs"
                    : "text-[#404943] hover:text-[#003622] font-medium"
                }`}
                data-node-id="349:1313"
              >
                Node B
              </button>
            </div>
          </div>
        </div>

        {/* KPI & Export Row (93px height) */}
        <div
          className="w-full flex flex-col md:flex-row items-center gap-[12px]"
          data-node-id="349:1315"
          data-name="KPI & Export Row"
        >
          {/* KPI Card 1: Total (170px) */}
          <div
            className="w-full md:w-[170px] h-[93px] bg-white border border-[#e2e8f0] rounded-[12px] p-[16px] flex flex-col justify-between shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            data-node-id="349:1316"
            data-name="KPI Card 1"
          >
            <div className="flex items-center justify-between text-[#64748b]" data-node-id="349:1317">
              <span className="text-[12.5px] font-medium" data-node-id="349:1318">Total</span>
              <Clock className="size-3.5 text-[#707972]" />
            </div>
            <div className="flex items-baseline gap-[6px]" data-node-id="349:1323">
              <span className="text-[28px] font-bold text-[#0f172a] leading-none" data-node-id="349:1324">4</span>
              <span className="text-[12.5px] text-[#64748b]" data-node-id="349:1325">aktivitas</span>
            </div>
          </div>

          {/* KPI Card 2: Normal (170px) */}
          <div
            className="w-full md:w-[170px] h-[93px] bg-white border border-[#bbf7d0] rounded-[12px] p-[16px] flex flex-col justify-between shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            data-node-id="349:1326"
            data-name="KPI Card 2"
          >
            <div className="flex items-center justify-between text-[#003622]" data-node-id="349:1327">
              <span className="text-[12.5px] font-semibold" data-node-id="349:1328">Normal</span>
              <CheckCircle2 className="size-3.5 text-[#406900]" />
            </div>
            <div className="flex items-baseline gap-[6px]" data-node-id="349:1333">
              <span className="text-[28px] font-bold text-[#003622] leading-none" data-node-id="349:1334">4</span>
              <span className="text-[12.5px] text-[#003622]" data-node-id="349:1335">kondisi baik</span>
            </div>
          </div>

          {/* KPI Card 3: Perlu Dipantau (185px) */}
          <div
            className="w-full md:w-[185px] h-[93px] bg-white border border-[#fde68a] rounded-[12px] p-[16px] flex flex-col justify-between shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            data-node-id="349:1336"
            data-name="KPI Card 3"
          >
            <div className="flex items-center justify-between text-[#b54708]" data-node-id="349:1337">
              <span className="text-[12.5px] font-semibold" data-node-id="349:1338">Perlu Dipantau</span>
              <AlertTriangle className="size-3.5 text-[#ff8d28]" />
            </div>
            <div className="flex items-baseline gap-[6px]" data-node-id="349:1343">
              <span className="text-[28px] font-bold text-[#b54708] leading-none" data-node-id="349:1344">0</span>
              <span className="text-[12.5px] text-[#b54708]" data-node-id="349:1345">butuh perhatian</span>
            </div>
          </div>

          {/* KPI Card 4: Segera Periksa (185px) */}
          <div
            className="w-full md:w-[185px] h-[93px] bg-white border border-[#fecaca] rounded-[12px] p-[16px] flex flex-col justify-between shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            data-node-id="516:4432"
            data-name="KPI Card 4"
          >
            <div className="flex items-center justify-between text-[#ba1a1a]" data-node-id="516:4433">
              <span className="text-[12.5px] font-semibold" data-node-id="516:4434">Segera Periksa</span>
              <AlertCircle className="size-3.5 text-[#ba1a1a]" />
            </div>
            <div className="flex items-baseline gap-[6px]" data-node-id="516:4437">
              <span className="text-[28px] font-bold text-[#ba1a1a] leading-none" data-node-id="516:4438">0</span>
              <span className="text-[12.5px] text-[#ba1a1a]" data-node-id="516:4439">tindakan segera</span>
            </div>
          </div>

          {/* Export Card (394px) */}
          <div
            className="w-full md:flex-1 md:max-w-[394px] h-[93px] bg-[#ecfdf5] border border-[#a7f3d0] rounded-[12px] px-[18px] py-[16px] flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            data-node-id="349:1346"
            data-name="Export Card"
          >
            <div className="flex items-center gap-[12px]" data-node-id="349:1347">
              <div
                className="size-[36px] rounded-[8px] bg-[#b4f0cd] flex items-center justify-center shrink-0"
                data-node-id="516:4442"
              >
                <Download className="size-4 text-[#003622]" />
              </div>
              <div className="flex flex-col gap-0.5" data-node-id="349:1353">
                <h4
                  className="text-[13.5px] font-bold text-[#065f46] leading-tight"
                  data-node-id="349:1354"
                >
                  Unduh Laporan (PDF / Excel)
                </h4>
                <p
                  className="text-[12px] text-[#047857] leading-tight"
                  data-node-id="349:1355"
                >
                  Format PDF & Excel (.xlsx) berkala
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsExportModalOpen(true)}
              className="bg-[#134e35] hover:bg-[#0e3b28] text-white px-[16px] py-[9px] rounded-[8px] text-[12.5px] font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer shrink-0"
              data-node-id="349:1356"
            >
              <span data-node-id="349:1361">Buka</span>
              <ChevronDown className="size-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Workspace Grid Row (374px height) */}
        <div
          className="w-full flex flex-col lg:flex-row items-start gap-[20px]"
          data-node-id="349:1362"
          data-name="Workspace Grid Row"
        >
          {/* Left Column: Activity Feed Column (732px on desktop) */}
          <div
            className="w-full lg:w-[732px] flex flex-col gap-[10px]"
            data-node-id="349:1363"
            data-name="Activity Feed Column"
          >
            {/* Section Header Row */}
            <div
              className="w-full flex items-center justify-between"
              data-node-id="349:1364"
            >
              <h2
                className="text-[16px] font-bold text-[#0f172a]"
                data-node-id="349:1365"
              >
                Aktivitas Terbaru
              </h2>
              <div
                className="flex items-center gap-[5px] text-[#10b981]"
                data-node-id="349:1366"
              >
                <RefreshCw className="size-3.5 animate-spin-slow" />
                <span className="text-[12px] font-medium" data-node-id="349:1372">
                  Tersinkron Otomatis (2 mnt lalu)
                </span>
              </div>
            </div>

            {/* Activity Cards List */}
            {filteredActivities.length === 0 ? (
              <div className="w-full h-[220px] bg-white border border-[#e2e8f0] rounded-[12px] flex flex-col items-center justify-center p-6 text-center text-[#64748b]">
                <Search className="size-8 text-[#94a3b8] mb-2" />
                <p className="text-[14px] font-medium text-[#0f172a]">
                  Tidak ada aktivitas yang sesuai
                </p>
                <p className="text-[12px] mt-1 text-[#64748b]">
                  Coba ubah kata kunci pencarian atau sesuaikan filter node dan kategori.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setNodeFilter("all");
                    setCategoryFilter("all");
                  }}
                  className="mt-3 text-[12px] font-semibold text-[#134e35] hover:underline"
                >
                  Reset Semua Filter
                </button>
              </div>
            ) : (
              filteredActivities.slice(0, 3).map((act, idx) => (
                <div
                  key={act.id}
                  className="w-full h-[108px] bg-white border border-[#e2e8f0] rounded-[12px] px-[16px] py-[12px] flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#cbd5e1] transition-all"
                  data-node-id={
                    idx === 0
                      ? "349:1373"
                      : idx === 1
                      ? "349:1393"
                      : "349:1413"
                  }
                  data-name={`Activity Card ${idx + 1}`}
                >
                  {/* Meta Header */}
                  <div className="flex items-center gap-[6px]">
                    <div className="size-2 rounded-full bg-[#10b981] shrink-0" />
                    <span className="text-[13px] font-semibold text-[#065f46]">
                      {act.nodeTag}
                    </span>
                    <span className="text-[12px] text-[#cbd5e1]">•</span>
                    <span className="text-[12px] text-[#64748b]">
                      {act.timestamp}
                    </span>
                    <span className="text-[12px] text-[#cbd5e1]">•</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[14.5px] font-bold text-[#0f172a] leading-snug line-clamp-1">
                    {act.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#475569] leading-relaxed line-clamp-2">
                    {act.description}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Insights & Audit Column (400px on desktop) */}
          <div
            className="w-full lg:w-[400px] flex flex-col gap-[14px]"
            data-node-id="349:1431"
            data-name="Insights & Audit Column"
          >
            {/* Card Filter & Pencarian (188px height) */}
            <div
              className="w-full bg-white border border-[#e2e8f0] rounded-[12px] p-[18px] flex flex-col gap-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:1456"
              data-name="Card Filter & Pencarian"
            >
              {/* Header Title */}
              <h3
                className="text-[14.5px] font-bold text-[#0f172a]"
                data-node-id="349:1457"
              >
                Pencarian Cepat Arsip
              </h3>

              {/* Search Input */}
              <div
                className="w-full h-[33px] bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] px-[12px] py-[8px] flex items-center gap-[8px]"
                data-node-id="349:1458"
              >
                <Search className="size-3.5 text-[#94a3b8] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nomor kejadian, kata kunci..."
                  className="w-full text-[12px] text-[#0f172a] placeholder-[#94a3b8] bg-transparent focus:outline-none"
                  data-node-id="349:1463"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-[#94a3b8] hover:text-[#475569]"
                  >
                    <X className="size-3" />
                  </button>
                )}
              </div>

              {/* Category Filter Title */}
              <p
                className="text-[12px] font-semibold text-[#475569] mt-0.5"
                data-node-id="349:1464"
              >
                Kategori Kejadian
              </p>

              {/* Category Pills Row */}
              <div
                className="flex items-center flex-wrap gap-[6px]"
                data-node-id="349:1465"
              >
                <button
                  type="button"
                  onClick={() => setCategoryFilter("all")}
                  className={`text-[12px] px-[10px] py-[4px] rounded-full transition-all cursor-pointer ${
                    categoryFilter === "all"
                      ? "bg-[#134e35] text-white font-semibold shadow-xs"
                      : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] font-medium"
                  }`}
                  data-node-id="349:1466"
                >
                  Semua (4)
                </button>

                <button
                  type="button"
                  onClick={() => setCategoryFilter("normal")}
                  className={`text-[12px] px-[10px] py-[4px] rounded-full transition-all cursor-pointer ${
                    categoryFilter === "normal"
                      ? "bg-[#134e35] text-white font-semibold shadow-xs"
                      : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] font-medium"
                  }`}
                  data-node-id="349:1468"
                >
                  Normal
                </button>

                <button
                  type="button"
                  onClick={() => setCategoryFilter("warning")}
                  className={`text-[12px] px-[10px] py-[4px] rounded-full transition-all cursor-pointer ${
                    categoryFilter === "warning"
                      ? "bg-[#134e35] text-white font-semibold shadow-xs"
                      : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] font-medium"
                  }`}
                  data-node-id="349:1470"
                >
                  Perlu Dipantau
                </button>

                <button
                  type="button"
                  onClick={() => setCategoryFilter("danger")}
                  className={`text-[12px] px-[10px] py-[4px] rounded-full transition-all cursor-pointer ${
                    categoryFilter === "danger"
                      ? "bg-[#134e35] text-white font-semibold shadow-xs"
                      : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] font-medium"
                  }`}
                  data-node-id="349:1472"
                >
                  Segera Periksa
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar (Exact Figma dimensions: w=1280, h=52, border-t) */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="349:1480"
        data-name="Footer Bar"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="349:1481">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Desktop Modal Dialog — Ekspor Rekap Pemantauan (Node 516:4820) */}
      {isExportModalOpen && (
        <div
          className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all"
          data-node-id="516:4819"
          data-name="Backdrop Scrim Overlay"
          onClick={() => setIsExportModalOpen(false)}
        >
          <div
            className="bg-white rounded-[24px] shadow-[0_16px_36px_rgba(15,23,42,0.25)] w-full max-w-[402px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            data-node-id="516:4820"
            data-name="Desktop Modal Dialog — Ekspor Rekap Pemantauan"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Indicator Drag Bar */}
            <div className="w-full pt-[12px] pb-[6px] flex justify-center">
              <div className="w-[48px] h-[5px] bg-[#c0c9c1] rounded-full" />
            </div>

            {/* Header */}
            <div className="px-[16px] pb-[12px] flex items-center justify-between">
              <div>
                <h3 className="text-[20px] font-bold text-[#0d1c2e] leading-tight">
                  Ekspor Rekap Pemantauan
                </h3>
                <p className="text-[12px] font-semibold text-[#404943] mt-1">
                  {getTimeFilterLabel()} • {getNodeFilterLabel()}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsExportModalOpen(false)}
                className="size-[36px] rounded-full bg-[#e6eeff] hover:bg-[#dbeafe] flex items-center justify-center text-[#404943] transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Content: Format Options */}
            <div className="px-[16px] py-[8px] flex flex-col gap-[10px]">
              <span className="text-[12px] font-bold text-[#0d1c2e] tracking-[0.6px] uppercase">
                PILIH FORMAT BERKAS
              </span>

              {/* Option 1: PDF */}
              <div
                onClick={() => setExportFormat("pdf")}
                className={`p-[14px] rounded-[16px] flex items-start gap-[14px] cursor-pointer border transition-all ${
                  exportFormat === "pdf"
                    ? "bg-[#eff4ff] border-[#0075ff]"
                    : "bg-[#eff4ff]/60 border-transparent hover:bg-[#eff4ff]"
                }`}
              >
                {/* Radio Circle */}
                <div className="pt-0.5">
                  <div
                    className={`size-[16px] rounded-full border flex items-center justify-center ${
                      exportFormat === "pdf"
                        ? "border-[#0075ff] bg-white"
                        : "border-[#767676] bg-white"
                    }`}
                  >
                    {exportFormat === "pdf" && (
                      <div className="size-[8px] rounded-full bg-[#0075ff]" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-[8px]">
                    <FileText className="size-4 text-[#ba1a1a] shrink-0" />
                    <h4 className="text-[14px] font-bold text-[#0d1c2e] leading-tight">
                      PDF — Ringkasan Laporan Siap Baca/Bagikan
                    </h4>
                  </div>
                  <p className="text-[12.5px] text-[#404943] leading-[18px] mt-1.5">
                    Memuat identitas kebun, ringkasan kejadian, catatan temuan, serta tanda tangan digital penanggung jawab lapangan.
                  </p>
                </div>
              </div>

              {/* Option 2: Excel (.xlsx) */}
              <div
                onClick={() => setExportFormat("xlsx")}
                className={`p-[14px] rounded-[16px] flex items-start gap-[14px] cursor-pointer border transition-all ${
                  exportFormat === "xlsx"
                    ? "bg-[#eff4ff] border-[#0075ff]"
                    : "bg-[#eff4ff]/60 border-transparent hover:bg-[#eff4ff]"
                }`}
              >
                {/* Radio Circle */}
                <div className="pt-0.5">
                  <div
                    className={`size-[16px] rounded-full border flex items-center justify-center ${
                      exportFormat === "xlsx"
                        ? "border-[#0075ff] bg-white"
                        : "border-[#767676] bg-white"
                    }`}
                  >
                    {exportFormat === "xlsx" && (
                      <div className="size-[8px] rounded-full bg-[#0075ff]" />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-[8px]">
                    <FileSpreadsheet className="size-4 text-[#406900] shrink-0" />
                    <h4 className="text-[14px] font-bold text-[#0d1c2e] leading-tight">
                      Excel (.xlsx) — Data Tabel Aktivitas Lengkap
                    </h4>
                  </div>
                  <p className="text-[12.5px] text-[#404943] leading-[18px] mt-1.5">
                    Data tabular mentah mencakup Tanggal, Node, Masalah, Nilai Sensor, Status, dan Tindak Lanjut untuk analisis statistik lanjutan.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Action: Download Button */}
            <div className="p-[16px] pt-[8px]">
              <button
                type="button"
                onClick={handleExportDownload}
                disabled={isDownloading}
                className="w-full h-[52px] bg-[#003622] hover:bg-[#0a4831] text-white rounded-[12px] font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all cursor-pointer disabled:opacity-75"
              >
                {isDownloading ? (
                  <>
                    <RefreshCw className="size-4 animate-spin text-white" />
                    <span>Menyiapkan Berkas...</span>
                  </>
                ) : (
                  <>
                    <Download className="size-4 text-white" />
                    <span>Unduh</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#003622] text-white px-5 py-3 rounded-full text-[13px] font-medium shadow-lg z-50 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="size-4 text-[#10b981]" />
          <span>{downloadSuccessToast}</span>
        </div>
      )}

      {/* 5. Interactive Chat Bot Pop-Up & FAB */}
      <ChatBotPopup />
    </div>
  );
}
