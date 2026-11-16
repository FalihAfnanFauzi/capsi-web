"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DashboardNavbar from "@/components/DashboardNavbar";
import ChatBotPopup from "@/components/ChatBotPopup";
import {
  ArrowLeft,
  Check,
  User,
  Users,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  Camera,
  MapPin,
  X,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

export default function ProfilPage() {
  const router = useRouter();

  // Initial form values
  const INITIAL_NAME = "Kawan Agro Bersama";
  const INITIAL_EMAIL = "agro@gmail.com";

  const [name, setName] = useState(INITIAL_NAME);
  const [email, setEmail] = useState(INITIAL_EMAIL);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Password Modal states
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Logout Confirmation Modal
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Check if form is modified
  const isDirty = name !== INITIAL_NAME || email !== INITIAL_EMAIL;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleReset = () => {
    setName(INITIAL_NAME);
    setEmail(INITIAL_EMAIL);
    showToast("Perubahan formulir dibatalkan");
  };

  const handleSave = () => {
    if (!name.trim()) {
      showToast("Nama kelompok tani tidak boleh kosong");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      showToast("Format alamat email tidak valid");
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast("Profil petani berhasil diperbarui!");
    }, 600);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    if (!currentPassword) {
      setPasswordError("Masukkan kata sandi saat ini");
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError("Kata sandi baru minimal 6 karakter");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Konfirmasi kata sandi baru tidak cocok");
      return;
    }

    setIsUpdatingPassword(true);
    setTimeout(() => {
      setIsUpdatingPassword(false);
      setShowPasswordModal(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      showToast("Kata sandi berhasil diperbarui!");
    }, 700);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    router.push("/masuk");
  };

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans antialiased text-[#0f172a]"
      data-node-id="349:1483"
      data-name="Profil Petani — CAPSI Web Desktop"
    >
      {/* 1. Navbar Header */}
      <DashboardNavbar activeTab="profil" />

      {/* 2. Main Body Container (Exact Figma dimensions: 1152px width inside 1280px screen) */}
      <main
        className="w-full max-w-[1280px] mx-auto px-4 lg:px-[64px] pt-[24px] pb-[28px] flex-1 flex flex-col justify-start gap-[20px]"
        data-node-id="349:1516"
        data-name="Main Body"
      >
        {/* Header Bar & Actions (Height 65px) */}
        <div
          className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          data-node-id="349:1517"
          data-name="Header Bar & Actions"
        >
          {/* Title Group */}
          <div
            className="flex flex-col gap-[4px]"
            data-node-id="349:1518"
            data-name="Title Group"
          >
            {/* Breadcrumb Row */}
            <div
              className="flex items-center gap-[6px] text-[12.5px]"
              data-node-id="349:1519"
              data-name="Breadcrumb Row"
            >
              <Link
                href="/beranda"
                className="flex items-center gap-[6px] text-[#134e35] font-semibold hover:underline transition-colors"
                data-node-id="349:1522"
              >
                <ArrowLeft className="size-3.5" />
                <span>Kembali ke Beranda</span>
              </Link>
              <span className="text-[#cbd5e1]" data-node-id="349:1523">
                •
              </span>
              <span className="text-[12px] text-[#64748b]" data-node-id="349:1524">
                Pengaturan Akun Petani
              </span>
            </div>

            {/* Page Title */}
            <h1
              className="text-[20px] font-bold text-[#0f172a] leading-tight"
              data-node-id="349:1525"
            >
              Profil Petani & Kelompok Tani
            </h1>

            {/* Subtitle */}
            <p
              className="text-[13px] text-[#64748b] leading-tight"
              data-node-id="349:1526"
            >
              Kelola data identitas kelompok tani, keamanan akses, dan dokumentasi visual petak kebun
            </p>
          </div>

          {/* Actions Group (Cancel + Save) */}
          <div
            className="flex items-center gap-[10px] shrink-0"
            data-node-id="349:1527"
            data-name="Actions Group"
          >
            {/* Cancel Button */}
            <button
              type="button"
              onClick={handleReset}
              disabled={!isDirty || isSaving}
              className={`h-[48px] px-[16px] py-[9px] rounded-[8px] text-[12.5px] font-semibold border transition-all cursor-pointer ${
                isDirty && !isSaving
                  ? "bg-white border-[#cbd5e1] text-[#475569] hover:bg-[#f8fafc] shadow-2xs"
                  : "bg-white/60 border-[#e2e8f0] text-[#94a3b8] cursor-not-allowed opacity-70"
              }`}
              data-node-id="349:1528"
            >
              <span data-node-id="349:1529">Batal</span>
            </button>

            {/* Save Button */}
            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="h-[48px] px-[18px] py-[9px] rounded-[8px] bg-[#134e35] hover:bg-[#0e3b28] text-white text-[12.5px] font-semibold flex items-center gap-[6px] shadow-xs transition-all cursor-pointer disabled:opacity-75"
              data-node-id="349:1530"
            >
              {isSaving ? (
                <>
                  <RefreshCw className="size-3.5 animate-spin text-white" />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <Check className="size-3.5 text-white" strokeWidth={2.5} />
                  <span data-node-id="349:1535">Simpan Perubahan</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Profile Grid Row (Height 526px in Figma: Left 712px, Right 420px, Gap 20px) */}
        <div
          className="w-full flex flex-col lg:flex-row items-start gap-[20px]"
          data-node-id="349:1536"
          data-name="Profile Grid Row"
        >
          {/* Left Column: Form & Security Column (712px on desktop) */}
          <div
            className="w-full lg:w-[712px] flex flex-col gap-[16px]"
            data-node-id="349:1537"
            data-name="Form & Security Column"
          >
            {/* Card 1: Card Profil & Identitas (Height 428px in Figma) */}
            <div
              className="w-full bg-white border border-[#e2e8f0] rounded-[12px] p-[20px] flex flex-col gap-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:1538"
              data-name="Card Profil & Identitas"
            >
              {/* Card Header */}
              <div
                className="w-full flex items-center justify-between"
                data-node-id="349:1539"
                data-name="Card Header"
              >
                <h2
                  className="text-[15px] font-bold text-[#0f172a]"
                  data-node-id="349:1540"
                >
                  Informasi Akun Petani
                </h2>
                <div
                  className="bg-[#ecfdf5] text-[#065f46] text-[12px] font-semibold px-[10px] py-[2px] rounded-full"
                  data-node-id="349:1541"
                  data-name="Badge Verified"
                >
                  <span data-node-id="349:1542">Akun Terverifikasi</span>
                </div>
              </div>

              {/* Profile Hero Banner */}
              <div
                className="w-full h-[82px] bg-[#f0fdf4] border border-[#dcfce7] rounded-[10px] px-[16px] py-[14px] flex items-center gap-[14px]"
                data-node-id="349:1543"
                data-name="Profile Hero Banner"
              >
                {/* Avatar Circle (52px) */}
                <div
                  className="size-[52px] rounded-full bg-[#0a3d24] flex items-center justify-center text-white shrink-0 shadow-2xs"
                  data-node-id="349:1544"
                >
                  <User className="size-[24px]" />
                </div>

                {/* User Text Info */}
                <div
                  className="flex flex-col gap-[4px]"
                  data-node-id="349:1549"
                  data-name="User Text Info"
                >
                  <h3
                    className="text-[17px] font-bold text-[#0f172a] leading-tight"
                    data-node-id="349:1550"
                  >
                    {name || "Kawan Agro Bersama"}
                  </h3>
                  <div
                    className="flex items-center gap-[6px] flex-wrap"
                    data-node-id="349:1551"
                    data-name="Pills Row"
                  >
                    <div
                      className="bg-[#dcfce7] text-[#15803d] text-[12px] font-medium px-[8px] py-[2px] rounded-full flex items-center gap-1"
                      data-node-id="349:1552"
                    >
                      <span data-node-id="349:1553">📍 Nama Petani</span>
                    </div>
                    <div
                      className="bg-[#f1f5f9] text-[#475569] text-[12px] font-medium px-[8px] py-[2px] rounded-full flex items-center gap-1"
                      data-node-id="349:1554"
                    >
                      <span data-node-id="349:1555">🌾 Petak Budidaya: Blok Utara & Selatan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div
                className="w-full flex flex-col gap-[14px]"
                data-node-id="349:1556"
                data-name="Form Section"
              >
                {/* Field 1: Email Akun */}
                <div
                  className="w-full flex flex-col gap-[6px]"
                  data-node-id="349:1557"
                  data-name="Contact Detail"
                >
                  <div
                    className="flex items-center gap-[6px] text-[#334155] text-[12.5px] font-semibold"
                    data-node-id="349:1558"
                  >
                    <Mail className="size-3.5 text-[#475569]" />
                    <label htmlFor="email" data-node-id="349:1563">
                      Email Akun
                    </label>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[38px] bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] px-[14px] py-[10px] text-[13px] text-[#1e293b] focus:outline-none focus:border-[#134e35] focus:bg-white transition-all"
                    data-node-id="349:1564"
                  />
                  <p
                    className="text-[12px] text-[#64748b] leading-tight"
                    data-node-id="349:1566"
                  >
                    Email digunakan untuk notifikasi darurat telemetri ESP-NOW dan pemulihan akun.
                  </p>
                </div>

                {/* Field 2: Nama Petani / Kelompok Tani */}
                <div
                  className="w-full flex flex-col gap-[6px]"
                  data-node-id="349:1567"
                  data-name="Name Section"
                >
                  <div
                    className="flex items-center gap-[6px] text-[#334155] text-[12.5px] font-semibold"
                    data-node-id="349:1568"
                  >
                    <Users className="size-3.5 text-[#475569]" />
                    <label htmlFor="name" data-node-id="349:1573">
                      Nama Petani / Kelompok Tani
                    </label>
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-[38px] bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] px-[14px] py-[10px] text-[13px] text-[#1e293b] focus:outline-none focus:border-[#134e35] focus:bg-white transition-all"
                    data-node-id="349:1574"
                  />
                </div>

                {/* Field 3: Kata Sandi */}
                <div
                  className="w-full flex flex-col gap-[6px]"
                  data-node-id="349:1576"
                  data-name="Password Section"
                >
                  <div
                    className="w-full flex items-center justify-between"
                    data-node-id="349:1577"
                  >
                    <div
                      className="flex items-center gap-[6px] text-[#334155] text-[12.5px] font-semibold"
                      data-node-id="349:1578"
                    >
                      <Lock className="size-3.5 text-[#475569]" />
                      <span data-node-id="349:1583">Kata Sandi</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPasswordModal(true)}
                      className="text-[12px] font-bold text-[#134e35] hover:underline cursor-pointer"
                      data-node-id="349:1584"
                    >
                      Lupa Kata Sandi?
                    </button>
                  </div>

                  {/* Password Input Box */}
                  <div
                    className="w-full h-[44px] bg-[#f8fafc] border border-[#cbd5e1] rounded-[8px] px-[14px] py-[8px] flex items-center justify-between"
                    data-node-id="349:1585"
                  >
                    <div
                      className="flex items-center gap-[8px]"
                      data-node-id="349:1586"
                    >
                      <Eye className="size-3.5 text-[#94a3b8]" />
                      <span
                        className="text-[13px] text-[#1e293b] tracking-[2px] select-none"
                        data-node-id="349:1591"
                      >
                        ••••••••••••
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowPasswordModal(true)}
                      className="text-[#134e35] hover:text-[#0e3b28] hover:bg-[#ecfdf5] text-[12px] font-semibold px-[8px] py-[4px] rounded-[6px] transition-colors cursor-pointer"
                      data-node-id="349:1592"
                    >
                      <span data-node-id="349:1593">Ubah Sandi</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Card Sesi & Keluar Akun (Height 82px in Figma) */}
            <div
              className="w-full h-[82px] bg-[#fef2f2] border border-[#fecaca] rounded-[12px] px-[18px] py-[16px] flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:1594"
              data-name="Card Sesi & Keluar Akun"
            >
              {/* Left Text */}
              <div
                className="flex flex-col gap-[2px]"
                data-node-id="349:1595"
              >
                <h4
                  className="text-[13.5px] font-bold text-[#991b1b] leading-tight"
                  data-node-id="349:1596"
                >
                  Keluar dari Sesi Aplikasi
                </h4>
                <p
                  className="text-[12px] text-[#b91c1c] leading-tight"
                  data-node-id="349:1597"
                >
                  Akhiri sesi aktif Anda di perangkat web desktop ini dengan aman.
                </p>
              </div>

              {/* Logout Button */}
              <button
                type="button"
                onClick={() => setShowLogoutModal(true)}
                className="h-[48px] px-[18px] py-[10px] rounded-[8px] bg-[#fee2e2] hover:bg-[#fecaca] border border-[#fca5a5] text-[#dc2626] text-[12.5px] font-semibold flex items-center gap-[6px] transition-colors cursor-pointer shrink-0"
                data-node-id="349:1598"
              >
                <LogOut className="size-3.5 text-[#dc2626]" />
                <span data-node-id="349:1601">Keluar dari Akun</span>
              </button>
            </div>
          </div>

          {/* Right Column: Documentation & Field Status Column (420px on desktop) */}
          <div
            className="w-full lg:w-[420px] flex flex-col gap-[16px]"
            data-node-id="349:1602"
            data-name="Documentation & Field Status Column"
          >
            {/* Card Dokumentasi Petak Terakhir (Height 275px in Figma) */}
            <div
              className="w-full bg-white border border-[#e2e8f0] rounded-[12px] p-[18px] flex flex-col gap-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              data-node-id="349:1603"
              data-name="Card Dokumentasi Petak Terakhir"
            >
              {/* Header Row */}
              <div
                className="w-full flex items-center justify-between"
                data-node-id="349:1604"
                data-name="Doc Header Row"
              >
                <div
                  className="flex items-center gap-[6px]"
                  data-node-id="349:1605"
                >
                  <Camera className="size-[15px] text-[#065f46]" />
                  <h3
                    className="text-[14.5px] font-bold text-[#0f172a]"
                    data-node-id="349:1610"
                  >
                    Dokumentasi Petak Terakhir
                  </h3>
                </div>
                <span
                  className="text-[12px] text-[#64748b]"
                  data-node-id="349:1611"
                >
                  Tadi pagi, 06:45 WIB
                </span>
              </div>

              {/* Photo Frame Container (384x180) */}
              <div
                className="w-full h-[180px] rounded-[8px] overflow-hidden relative border border-[#e2e8f0] bg-[#e6eeff]"
                data-node-id="349:1612"
              >
                <Image
                  src="/dokumentasi-petak-terakhir.jpg"
                  alt="Dokumentasi Petak Terakhir Node A"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Caption Row */}
              <div
                className="w-full flex items-center justify-between"
                data-node-id="349:1616"
                data-name="Caption Row"
              >
                <div
                  className="flex items-center gap-[5px] text-[#065f46] text-[12px] font-medium"
                  data-node-id="349:1617"
                >
                  <MapPin className="size-3.5 text-[#065f46]" />
                  <span data-node-id="349:1622">
                    Kamera Titik Pantau Node A (Utara)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Bar (Exact Figma dimensions: w=1280, h=52, border-t) */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-4 lg:px-[64px]"
        data-node-id="349:1656"
        data-name="Footer Bar"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="349:1657">
          © 2026 CAPSI • Smart Agronomy System • Sistem Monitoring Terpadu Cabai
        </p>
      </footer>

      {/* 4. Password Change Modal */}
      {showPasswordModal && (
        <div
          className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all"
          onClick={() => setShowPasswordModal(false)}
        >
          <div
            className="bg-white rounded-[20px] shadow-[0_16px_36px_rgba(15,23,42,0.25)] w-full max-w-[420px] p-[24px] flex flex-col gap-[16px] animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="size-[32px] rounded-full bg-[#ecfdf5] flex items-center justify-center text-[#134e35]">
                  <Lock className="size-4" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0f172a]">
                  Ubah Kata Sandi
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                className="size-[32px] rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-[12px]">
              {passwordError && (
                <div className="bg-[#fee2e2] border border-[#fecaca] text-[#b91c1c] text-[12px] px-3 py-2 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="size-3.5 shrink-0" />
                  <span>{passwordError}</span>
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#334155]">
                  Kata Sandi Saat Ini
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Masukkan kata sandi saat ini"
                  className="h-[38px] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg px-3 text-[13px] text-[#0f172a] focus:outline-none focus:border-[#134e35] focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#334155]">
                  Kata Sandi Baru
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Minimal 6 karakter"
                    className="w-full h-[38px] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg pl-3 pr-10 text-[13px] text-[#0f172a] focus:outline-none focus:border-[#134e35] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#475569]"
                  >
                    {showNewPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#334155]">
                  Konfirmasi Kata Sandi Baru
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi kata sandi baru"
                  className="h-[38px] bg-[#f8fafc] border border-[#cbd5e1] rounded-lg px-3 text-[13px] text-[#0f172a] focus:outline-none focus:border-[#134e35] focus:bg-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 rounded-lg text-[12.5px] font-semibold text-[#64748b] hover:bg-[#f1f5f9] transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingPassword}
                  className="px-5 py-2 rounded-lg bg-[#134e35] hover:bg-[#0e3b28] text-white text-[12.5px] font-semibold transition-all cursor-pointer flex items-center gap-2"
                >
                  {isUpdatingPassword ? (
                    <>
                      <RefreshCw className="size-3.5 animate-spin text-white" />
                      <span>Memperbarui...</span>
                    </>
                  ) : (
                    <span>Simpan Sandi Baru</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all"
          onClick={() => setShowLogoutModal(false)}
        >
          <div
            className="bg-white rounded-[20px] shadow-[0_16px_36px_rgba(15,23,42,0.25)] w-full max-w-[380px] p-[24px] flex flex-col gap-[16px] animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="size-[48px] rounded-full bg-[#fee2e2] flex items-center justify-center text-[#dc2626] mx-auto">
              <LogOut className="size-6" />
            </div>

            <div className="text-center">
              <h3 className="text-[17px] font-bold text-[#0f172a]">
                Konfirmasi Keluar Akun
              </h3>
              <p className="text-[13px] text-[#64748b] mt-1.5 leading-relaxed">
                Apakah Anda yakin ingin mengakhiri sesi aktif untuk akun <strong>{name}</strong>?
              </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 h-[42px] rounded-lg border border-[#cbd5e1] text-[13px] font-semibold text-[#475569] hover:bg-[#f8fafc] transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 h-[42px] rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[13px] font-semibold transition-colors"
              >
                Ya, Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#003622] text-white px-5 py-3 rounded-full text-[13px] font-medium shadow-lg z-50 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="size-4 text-[#10b981]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 7. Interactive Chat Bot Pop-Up & FAB */}
      <ChatBotPopup />
    </div>
  );
}
