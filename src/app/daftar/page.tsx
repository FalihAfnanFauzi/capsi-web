"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, User, Lock, Eye, EyeOff, ArrowRight, Activity, ShieldCheck, CalendarCheck, Check } from "lucide-react";

export default function DaftarPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [farmerName, setFarmerName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    // Simulate account registration
    setTimeout(() => {
      setIsLoading(false);
      setNotification("Pendaftaran berhasil! Mengalihkan ke halaman masuk...");
      setTimeout(() => {
        router.push("/masuk");
      }, 1200);
    }, 800);
  };

  return (
    <div
      className="min-h-screen bg-[#f8fafc] flex flex-col justify-between items-center w-full font-sans antialiased text-[#0d1c2e]"
      data-node-id="349:228"
      data-name="Daftar — CAPSI Web"
    >
      {/* Content Area */}
      <main
        className="w-full max-w-[1280px] flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 gap-[16px]"
        data-node-id="349:229"
        data-name="Content Area"
      >
        {/* Form Card */}
        <div
          className="bg-white border border-[#e2e8f0] rounded-[16px] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05)] w-full max-w-[440px] px-6 sm:px-[36px] py-[28px] flex flex-col items-center gap-[12px] relative overflow-hidden"
          data-node-id="349:230"
          data-name="Form Card"
        >
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center justify-center transition-transform hover:scale-105"
            title="Kembali ke Beranda CAPSI"
            data-node-id="349:231"
            data-name="logo agroguard (2) 2"
          >
            <div className="w-[100px] h-[100px] relative shrink-0">
              <Image
                src="/capsi-logo-transparent.png"
                alt="CAPSI Logo"
                width={100}
                height={100}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Welcome Heading */}
          <div
            className="w-full text-center flex flex-col items-center pb-[8px]"
            data-node-id="349:232"
            data-name="Welcome Heading:margin"
          >
            <h1
              className="text-[#0d1c2e] text-[24px] sm:text-[26px] font-bold tracking-[-0.65px] leading-[34px] w-full"
              data-node-id="349:235"
            >
              Daftar Akun Baru
            </h1>
            <p
              className="text-[#404943] text-[14px] font-normal leading-[20px] mt-1 max-w-[340px]"
              data-node-id="349:238"
            >
              Lengkapi data diri Anda untuk memulai perjalanan bersama kami
            </p>
          </div>

          {/* Notification Alert if Success */}
          {notification && (
            <div className="w-full bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[13px] px-3 py-2 rounded-[8px] flex items-center gap-2 animate-fade-in">
              <Check className="size-4 shrink-0 text-[#059669]" />
              <span>{notification}</span>
            </div>
          )}

          {/* Registration Form Container */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-[16px] pt-1"
            data-node-id="349:239"
            data-name="Login Form Container"
          >
            {/* Email Field */}
            <div
              className="w-full flex flex-col gap-[6px]"
              data-node-id="349:240"
              data-name="Identifier Field"
            >
              <label
                htmlFor="reg-email"
                className="flex items-center gap-[6px] text-[#0d1c2e] text-[14px] font-semibold cursor-pointer"
                data-node-id="349:241"
              >
                <Mail className="size-[15px] text-[#0d1c2e] shrink-0" />
                <span>Email</span>
              </label>
              <div className="w-full relative">
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full h-[48px] bg-[#eff4ff] text-[#0d1c2e] text-[15px] placeholder-[#707972] rounded-[8px] px-[16px] border border-transparent focus:border-[#003622] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Nama Petani / Kelompok Tani Field */}
            <div
              className="w-full flex flex-col gap-[6px]"
              data-node-id="349:250"
              data-name="Farmer Name Field"
            >
              <label
                htmlFor="reg-name"
                className="flex items-center gap-[6px] text-[#0d1c2e] text-[14px] font-semibold cursor-pointer"
                data-node-id="349:251"
              >
                <User className="size-[16px] text-[#0d1c2e] shrink-0" />
                <span>Nama Petani / Kelompok Tani</span>
              </label>
              <div className="w-full relative">
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={farmerName}
                  onChange={(e) => setFarmerName(e.target.value)}
                  placeholder="Kawan AgroBersama"
                  className="w-full h-[48px] bg-[#eff4ff] text-[#0d1c2e] text-[15px] placeholder-[#707972] rounded-[8px] px-[16px] border border-transparent focus:border-[#003622] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div
              className="w-full flex flex-col gap-[6px]"
              data-node-id="349:249"
              data-name="Password Field"
            >
              <label
                htmlFor="reg-password"
                className="flex items-center gap-[6px] text-[#0d1c2e] text-[14px] font-semibold cursor-pointer"
                data-node-id="349:261"
              >
                <Lock className="size-[15px] text-[#0d1c2e] shrink-0" />
                <span>Kata Sandi</span>
              </label>
              <div className="w-full relative">
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 8 karakter"
                  className="w-full h-[48px] bg-[#eff4ff] text-[#0d1c2e] text-[15px] placeholder-[#707972] rounded-[8px] pl-[16px] pr-[48px] border border-transparent focus:border-[#003622] focus:bg-white focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[6px] top-1/2 -translate-y-1/2 size-[36px] flex items-center justify-center rounded-full text-[#707972] hover:text-[#0d1c2e] transition-colors focus:outline-none"
                  aria-label={showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"}
                  data-node-id="349:268"
                >
                  {showPassword ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div
              className="w-full flex items-center justify-between pt-[2px]"
              data-node-id="349:271"
              data-name="Remember Me Checkbox"
            >
              <label className="flex items-center gap-[10px] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="size-[18px] sm:size-[20px] rounded-[3px] border-2 border-black/70 text-[#003622] focus:ring-[#003622] cursor-pointer"
                />
                <span className="text-[#404943] text-[14px] font-normal leading-[20px]">
                  Ingat Saya di Perangkat Ini
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div
              className="w-full pt-[6px]"
              data-node-id="349:276"
              data-name="Submit Button:margin"
            >
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[48px] bg-[#003622] hover:bg-[#004d31] disabled:bg-[#003622]/70 text-white text-[14px] font-semibold rounded-[8px] flex items-center justify-center gap-[8px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all cursor-pointer active:scale-[0.99]"
                data-node-id="349:277"
              >
                <span>{isLoading ? "Mendaftarkan..." : "Daftar"}</span>
                {!isLoading && <ArrowRight className="size-[14px]" />}
              </button>
            </div>
          </form>

          {/* Switch Prompt */}
          <div
            className="w-full flex items-center justify-center gap-[4px] pt-[8px] text-[13px]"
            data-node-id="349:282"
            data-name="Switch Prompt"
          >
            <span className="text-[#64748b]">Sudah memiliki akun?</span>
            <Link
              href="/masuk"
              className="font-semibold text-[#0a3d24] hover:underline"
              data-node-id="349:284"
            >
              Masuk
            </Link>
          </div>
        </div>

        {/* Feature Strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-[24px] sm:gap-[32px] pt-[12px] text-[#64748b] text-[12px]"
          data-node-id="349:285"
          data-name="Feature Strip"
        >
          <div className="flex items-center gap-[6px]" data-node-id="349:286">
            <Activity className="size-[14px] text-[#64748b]" />
            <span>Telemetri Real-Time</span>
          </div>
          <div className="flex items-center gap-[6px]" data-node-id="349:290">
            <ShieldCheck className="size-[14px] text-[#64748b]" />
            <span>Deteksi Hama AI</span>
          </div>
          <div className="flex items-center gap-[6px]" data-node-id="349:296">
            <CalendarCheck className="size-[14px] text-[#64748b]" />
            <span>Jadwal Agronomi</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="w-full h-[52px] bg-white border-t border-[#e2e8f0] flex items-center justify-center px-6 sm:px-[48px]"
        data-node-id="349:303"
        data-name="Footer"
      >
        <p className="text-[#94a3b8] text-[12px] text-center" data-node-id="349:304">
          © 2026 CAPSI • Smart Agronomy System
        </p>
      </footer>
    </div>
  );
}
