"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#e7f7f1] text-[#003527] border-t border-[#d6e6e0]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[48px] py-[64px] flex flex-col gap-[48px]">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-[40px] gap-y-[40px]">
          {/* Brand Col (span 2 on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-[16px] items-start pb-[24px]">
            <div className="flex gap-[12px] items-center">
              <div className="size-[38px] relative shrink-0">
                <Image
                  src="/capsi-logo-transparent.png"
                  alt="CAPSI Logo"
                  width={38}
                  height={38}
                  className="size-full object-contain"
                />
              </div>
              <span className="font-semibold text-[#003527] text-[20px] tracking-[-0.5px]">
                CAPSI
              </span>
            </div>
            <p className="font-normal text-[#5c6b66] text-[14px] leading-[22.75px] max-w-[384px]">
              Platform kecerdasan buatan dan IoT agronomi terintegrasi untuk budidaya cabai. Menjembatani presisi sensor tanah, visual EfficientNet-B0, dan ramalan iklim LSTM ke genggaman petani.
            </p>
          </div>

          {/* Navigasi Col */}
          <div className="flex flex-col gap-[16px] items-start">
            <h4 className="font-semibold text-[#003527] text-[14px] leading-[20px]">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-[10px] font-normal text-[#5c6b66] text-[13px] leading-[18px]">
              <li>
                <a href="#hero" className="hover:text-[#003527] transition-colors">
                  Tentang CAPSI
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-[#003527] transition-colors">
                  Solusi AIoT
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-[#003527] transition-colors">
                  Cara Kerja &amp; Alur
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#003527] transition-colors">
                  Hubungi Tim Ahli
                </a>
              </li>
            </ul>
          </div>

          {/* Teknologi Col */}
          <div className="flex flex-col gap-[16px] items-start">
            <h4 className="font-semibold text-[#003527] text-[14px] leading-[20px]">
              Teknologi
            </h4>
            <ul className="flex flex-col gap-[10px] font-normal text-[#5c6b66] text-[13px] leading-[18px]">
              <li className="hover:text-[#003527] transition-colors">AI Diagnostik Daun</li>
              <li className="hover:text-[#003527] transition-colors">Sensor Mikroklimat NPK</li>
              <li className="hover:text-[#003527] transition-colors">Prediksi Penyakit LSTM</li>
              <li className="hover:text-[#003527] transition-colors">Preskripsi Irigasi Presisi</li>
              <li className="hover:text-[#003527] transition-colors">Edge Hardware Gateway</li>
            </ul>
          </div>

          {/* Akses Cepat Col */}
          <div className="flex flex-col gap-[16px] items-start">
            <h4 className="font-semibold text-[#003527] text-[14px] leading-[20px]">
              Akses Cepat
            </h4>
            <div className="flex flex-col gap-[10px] w-full">
              <Link
                href="/beranda"
                className="font-normal text-[#5c6b66] text-[13px] leading-[18px] hover:text-[#003527] transition-colors"
              >
                Demo Interaktif Node
              </Link>
              <Link
                href="/masuk"
                className="font-normal text-[#5c6b66] text-[13px] leading-[18px] hover:text-[#003527] transition-colors"
              >
                Konsol Farm Manager
              </Link>
              <div className="pt-[8px] flex flex-col gap-[2px]">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Dukungan Lapangan:
                </span>
                <a
                  href="mailto:agronomi@capsi.id"
                  className="font-semibold text-[#101e1a] text-[12px] tracking-[0.12px] leading-[16px] hover:text-[#006d3d] transition-colors"
                >
                  agronomi@capsi.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d6e6e0] pt-[32px] flex flex-col sm:flex-row items-center justify-between text-[#5c6b66] text-[12px] leading-[16px] gap-4">
          <p>© 2026 CAPSI . Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-[24px]">
            <a href="#" className="hover:text-[#003527] transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-[#003527] transition-colors">
              Syarat Layanan
            </a>
            <a href="#" className="hover:text-[#003527] transition-colors">
              Dokumentasi Sensor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
