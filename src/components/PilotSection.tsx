"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Wind, Info, BookOpen } from "lucide-react";

export default function PilotSection() {
  return (
    <section id="pilot" className="bg-[#edfdf6] px-6 lg:px-[48px] py-[96px] relative">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px]">
        {/* Headline & Philosophy Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[24px] pb-[16px]">
          <div className="flex flex-col gap-[8px] max-w-[672px]">
            <span className="font-semibold text-[#17834d] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
              STUDI KASUS LAHAN RIIL
            </span>
            <h2 className="font-bold text-[#102a23] text-[28px] sm:text-[32px] leading-[34px] sm:leading-[32px] tracking-[-0.8px]">
              Pilot Project: Kawan Agro Bersama,
              <br />
              Sumedang
            </h2>
            <p className="font-normal text-[#5c6b66] text-[14px] leading-[20px]">
              Transparansi status instrumentasi pada lahan cabai Varietas ORI 212 seluas 1.2 Hektar.
            </p>
          </div>

          {/* Honest Status Callout */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-[14px] rounded-[12px] max-w-[448px] flex items-start gap-[12px] border border-slate-100">
            <CheckCircle2 className="size-[20px] text-[#17834d] shrink-0 mt-0.5" />
            <div className="text-[12px] leading-[16px]">
              <span className="font-normal text-[#102a23] block mb-0.5">
                Prinsip Observasi Lapang:
              </span>
              <span className="font-normal text-[#5c6b66]">
                Sistem CAPSI tidak mengklaim kesembuhan otomatis atau akurasi mutlak tanpa verifikasi fisik agronomis.
              </span>
            </div>
          </div>
        </div>

        {/* Comparative Monitoring Nodes Display (Node A & Node B side-by-side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-stretch">
          {/* NODE A: Blok Utara (With Camera & Priority Alert) */}
          <div className="bg-white rounded-[16px] p-[24px] sm:p-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] border border-slate-100/60">
            {/* Header Node A */}
            <div className="border-b border-[#e2e8f0]/50 pb-[17px] flex items-center justify-between">
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center gap-[8px]">
                  <span className="size-[12px] rounded-full bg-[#b42318] shrink-0"></span>
                  <h3 className="font-semibold text-[#102a23] text-[20px] tracking-[-0.2px] leading-[28px]">
                    Node A — Blok Utara
                  </h3>
                </div>
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  ESP32-GW-01 · Transmisi 3m lalu
                </span>
              </div>
              <div className="bg-[rgba(255,218,214,0.4)] px-[12px] py-[4px] rounded-full">
                <span className="font-semibold text-[#b42318] text-[12px] tracking-[0.12px] leading-[16px]">
                  Prioritas Pemeriksaan (ALT-001)
                </span>
              </div>
            </div>

            {/* Visual Observation + Metric Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] items-stretch">
              {/* Inspection Photo with Badge */}
              <div className="bg-[#d6e6e0] rounded-[12px] overflow-hidden relative min-h-[220px] sm:min-h-[248px] flex flex-col justify-end">
                <Image
                  src="/lahan.jpeg"
                  alt="Kamera Kanopi 01"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="relative z-10 m-[8px] p-[8px] rounded-[8px] backdrop-blur-[4px] bg-[rgba(37,51,47,0.85)] flex flex-col gap-[2px]">
                  <div className="flex items-center justify-between">
                    <span className="font-normal text-[#e4f4ee] text-[12px] leading-[16px]">
                      Kamera Kanopi 01
                    </span>
                    <span className="font-medium text-[#b42318] text-[12px] leading-[16px]">
                      84% Gejala
                    </span>
                  </div>
                  <span className="font-medium text-[#dcece5] text-[11px] tracking-[0.22px] leading-[14px]">
                    Indikasi Awal Antraknosa / Kutu Kebul
                  </span>
                </div>
              </div>

              {/* Stacked Telemetries */}
              <div className="flex flex-col justify-between gap-[8px]">
                <div className="bg-[#f6f8fc] rounded-[8px] p-[12px] flex flex-col justify-center">
                  <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                    Suhu Udara
                  </span>
                  <span className="font-semibold text-[#102a23] text-[22px] tracking-[-0.22px] leading-[28px] mt-[2px]">
                    29.4°C
                  </span>
                  <span className="font-medium text-[#b66a12] text-[11px] tracking-[0.22px] leading-[14px]">
                    Tinggi di kanopi
                  </span>
                </div>

                <div className="bg-[#f6f8fc] rounded-[8px] p-[12px] flex flex-col justify-center">
                  <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                    RH Lingkungan
                  </span>
                  <span className="font-semibold text-[#102a23] text-[22px] tracking-[-0.22px] leading-[28px] mt-[2px]">
                    72%
                  </span>
                  <span className="font-medium text-[#5c6b66] text-[11px] tracking-[0.22px] leading-[14px]">
                    Kelembapan sedang
                  </span>
                </div>

                <div className="bg-[#f6f8fc] rounded-[8px] p-[12px] flex flex-col justify-center">
                  <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                    Kadar Air Tanah
                  </span>
                  <span className="font-semibold text-[#b42318] text-[22px] tracking-[-0.22px] leading-[28px] mt-[2px]">
                    32%
                  </span>
                  <span className="font-medium text-[#b42318] text-[11px] tracking-[0.22px] leading-[14px]">
                    Perlu pengocoran
                  </span>
                </div>
              </div>
            </div>

            {/* SOP Guidance Box */}
            <div className="bg-[#e7f7f1] rounded-[12px] p-[16px] flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <BookOpen className="size-[15px] text-[#003527]" />
                <span className="font-semibold text-[#003527] text-[12px] tracking-[0.12px] leading-[16px]">
                  Panduan Sanitasi Lapang Mandiri:
                </span>
              </div>
              <ul className="flex flex-col gap-[6px] font-normal text-[#5c6b66] text-[13px] leading-[18px]">
                <li className="flex items-start gap-2">
                  <span className="text-[#003527] font-semibold">1.</span>
                  <span>Pangkas dan musnahkan daun yang menunjukkan tanda keriting atau bercak basah ke wadah terisolasi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003527] font-semibold">2.</span>
                  <span>Jadwalkan irigasi tetes 20 menit pada pukul 16:30 untuk memulihkan kelembapan tanah di atas 45%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003527] font-semibold">3.</span>
                  <span>Hindari penyemprotan pupuk daun saat matahari terik untuk mengurangi risiko nekrosis jaringan.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* NODE B: Blok Selatan (Telemetric Only - Honest Coverage) */}
          <div className="bg-white rounded-[16px] p-[24px] sm:p-[32px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] border border-slate-100/60 justify-between">
            {/* Header Node B */}
            <div className="border-b border-[#e2e8f0]/50 pb-[17px] flex items-center justify-between">
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center gap-[8px]">
                  <span className="size-[12px] rounded-full bg-[#b66a12] shrink-0"></span>
                  <h3 className="font-semibold text-[#102a23] text-[20px] tracking-[-0.2px] leading-[28px]">
                    Node B — Blok Selatan
                  </h3>
                </div>
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  ESP32-GW-02 · Transmisi 1m lalu
                </span>
              </div>
            </div>

            {/* Telemetry Focus Grid 2x2 */}
            <div className="grid grid-cols-2 gap-[16px]">
              {/* Suhu Kanopi */}
              <div className="bg-[#f6f8fc] rounded-[12px] p-[16px] flex flex-col gap-[3.5px]">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Suhu Kanopi
                </span>
                <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px] pt-[3px]">
                  27.1°C
                </span>
                <span className="font-normal text-[#17834d] text-[12px] leading-[16px]">
                  Stabil ideal
                </span>
              </div>

              {/* Kelembapan Udara (RH) */}
              <div className="bg-[#f6f8fc] rounded-[12px] p-[16px] flex flex-col gap-[3.5px]">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Kelembapan Udara (RH)
                </span>
                <span className="font-bold text-[#b66a12] text-[28px] tracking-[-0.56px] leading-[34px] pt-[3px]">
                  78%
                </span>
                <span className="font-normal text-[#b66a12] text-[12px] leading-[16px]">
                  Mendekati saturasi
                </span>
              </div>

              {/* Kelembapan Tanah Bedengan */}
              <div className="bg-[#f6f8fc] rounded-[12px] p-[16px] flex flex-col gap-[3.5px]">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Kelembapan Tanah Bedengan
                </span>
                <span className="font-bold text-[#102a23] text-[28px] tracking-[-0.56px] leading-[34px] pt-[3px]">
                  48%
                </span>
                <span className="font-normal text-[#17834d] text-[12px] leading-[16px]">
                  Zona optimal
                </span>
              </div>

              {/* Prediksi LSTM (48 Jam) */}
              <div className="bg-[#f6f8fc] rounded-[12px] p-[16px] flex flex-col gap-[5.5px]">
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Prediksi LSTM (48 Jam)
                </span>
                <span className="font-semibold text-[#b66a12] text-[22px] tracking-[-0.22px] leading-[28px] pt-px">
                  Risiko 61%
                </span>
                <span className="font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                  Potensi embun bulu
                </span>
              </div>
            </div>

            {/* Honest State Banner */}
            <div className="bg-[rgba(220,236,229,0.4)] rounded-[12px] p-[16px] flex gap-[12px] items-start border border-[#d6e6e0]/60">
              <Info className="size-[18px] text-[#006d3d] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-[6px]">
                <span className="font-semibold text-[#102a23] text-[12px] tracking-[0.12px] leading-[16px]">
                  Status Cakupan: Nir-Kamera Khusus
                </span>
                <p className="font-normal text-[#5c6b66] text-[12px] leading-[19.5px]">
                  Unit sensor Blok Selatan saat ini memfokuskan pemantauan pada mikroklimat tanah dan udara nirkabel. Analisis visual belum aktif di titik ini; agronomis dapat melakukan peninjauan mandiri secara periodik.
                </p>
              </div>
            </div>

            {/* Recommended Action for Node B */}
            <div className="bg-[#e7f7f1] rounded-[12px] p-[16px] flex flex-col gap-[7px]">
              <div className="flex items-center gap-[8px]">
                <Wind className="size-[15px] text-[#003527]" />
                <span className="font-semibold text-[#003527] text-[12px] tracking-[0.12px] leading-[16px]">
                  Tindakan Preventif Aerasi:
                </span>
              </div>
              <p className="font-normal text-[#5c6b66] text-[13px] leading-[21.13px]">
                Tingginya RH (78%) dengan suhu 27.1°C berpotensi memicu spora jamur malam hari. Buka mulsa ventilasi samping untuk meningkatkan sirkulasi udara antar baris tanaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
