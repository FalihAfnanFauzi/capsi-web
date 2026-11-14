"use client";

import React from "react";
import { Radio, Scan, TrendingUp, Bot, Sun, Cpu, Clock, CheckCircle2 } from "lucide-react";

export default function PilarSection() {
  const pilars = [
    {
      id: "sensor",
      icon: Radio,
      title: "Sensor Internet of Things",
      desc: "Pemantauan kontinu mikroklimat tanah dan udara per bedengan. Mengukur suhu, RH, EC konduktivitas tanah, dan Vapor Pressure Deficit (VPD) secara real-time.",
      bottomText: "Daya Tahan Surya + Baterai",
      bottomIcon: Sun,
    },
    {
      id: "vision",
      icon: Scan,
      title: "Deteksi Visual Cerdas (EfficientNet-B0)",
      desc: "Analisis anomali visual daun dan buah cabai berkala dari kamera tepi kanopi. Menyajikan probabilitas gejala tanpa klaim mutlak sebelum verifikasi lapangan.",
      bottomText: "Inferensi Ringan di Gateway",
      bottomIcon: Cpu,
    },
    {
      id: "lstm",
      icon: TrendingUp,
      title: "Prediksi Tanaman (Model LSTM)",
      desc: "Proyeksi tren stres mikroklimat multi-horizon untuk mencegah kerontokan bunga dan deteksi dini titik rawan hawar daun.",
      bottomText: "Horizon 24–72 Jam",
      bottomIcon: Clock,
    },
    {
      id: "rag",
      icon: Bot,
      title: "Asisten AI berbasis RAG",
      desc: "Dukungan keputusan agronomi berbasis data aktif telemetri. Menghubungkan peringatan kritis lapangan ke Standard Operating Procedure (SOP) praktis petani.",
      bottomText: "Rekomendasi Terkalibrasi",
      bottomIcon: CheckCircle2,
    },
  ];

  return (
    <section id="solusi" className="bg-white px-6 lg:px-[48px] py-[96px] relative">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px]">
        {/* Section Header */}
        <div className="max-w-[672px] flex flex-col gap-[12px] items-start">
          <span className="font-semibold text-[#006d3d] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
            ARSITEKTUR TERPADU
          </span>
          <h2 className="font-bold text-[#102a23] text-[28px] sm:text-[32px] leading-[34px] sm:leading-[32px] tracking-[-0.8px]">
            Empat Pilar Solusi AIoT untuk Hasil Panen
            <br />
            Berkelanjutan
          </h2>
          <p className="font-normal text-[#5c6b66] text-[14px] leading-[20px]">
            Integrasi teknologi bertingkat dari perakaran tanah hingga model kecerdasan buatan, dirancang khusus menghadapi dinamika iklim tropis kebun cabai.
          </p>
        </div>

        {/* 4 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {pilars.map((p) => {
            const MainIcon = p.icon;
            const BottomIcon = p.bottomIcon;
            return (
              <div
                key={p.id}
                className="bg-[#e7f7f1] rounded-[16px] p-[24px] flex flex-col justify-between transition-all duration-200 hover:shadow-md"
              >
                <div className="flex flex-col gap-[16px]">
                  {/* Icon */}
                  <div className="bg-[#003527] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] size-[48px] flex items-center justify-center text-white shrink-0">
                    <MainIcon className="size-[20px] text-[#95d3ba]" />
                  </div>

                  {/* Title & Body */}
                  <div className="flex flex-col gap-[7.25px]">
                    <h3 className="font-semibold text-[#102a23] text-[16px] leading-[24px] tracking-[-0.08px]">
                      {p.title}
                    </h3>
                    <p className="font-normal text-[#5c6b66] text-[13px] leading-[21.13px]">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar with subtle border */}
                <div className="pt-[24px] mt-[12px]">
                  <div className="border-t border-[#d6e6e0] pt-[25px] flex items-center justify-between text-[#006d3d] text-[12px]">
                    <span className="font-normal leading-[16px]">{p.bottomText}</span>
                    <BottomIcon className="size-[14px] text-[#006d3d]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
