"use client";

import React from "react";
import { Eye, AlertTriangle, MessageSquare, ClipboardCheck } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      num: "01",
      numColor: "text-[rgba(0,109,61,0.4)]",
      icon: Eye,
      iconBg: "bg-[#e7f7f1]",
      iconColor: "text-[#006d3d]",
      title: "Pantau Kondisi",
      phase: "Awareness Fase",
      phaseColor: "text-[#006d3d]",
      desc: "Sensor tanah dan cuaca bekerja 24/7. Telemetri mengalir ke dasbor untuk memantau baseline fisiologis tanaman secara pasif.",
      bottomLabel: "Langkah Awal: Mengetahui Anomali",
    },
    {
      num: "02",
      numColor: "text-[rgba(182,106,18,0.4)]",
      icon: AlertTriangle,
      iconBg: "bg-[rgba(182,106,18,0.15)]",
      iconColor: "text-[#b66a12]",
      title: "Identifikasi Peringatan",
      phase: "Triage Risiko",
      phaseColor: "text-[#b66a12]",
      desc: "Sistem memilah anomali ke kategori 'Perlu Perhatian' atau 'Prioritas Pemeriksaan' tanpa istilah alarmis seperti 'Darurat'.",
      bottomLabel: "Skala Urgensi Berbobot",
    },
    {
      num: "03",
      numColor: "text-[rgba(0,53,39,0.4)]",
      icon: MessageSquare,
      iconBg: "bg-[#e7f7f1]",
      iconColor: "text-[#003527]",
      title: "Pahami & Diskusi",
      phase: "Understand & Act",
      phaseColor: "text-[#003527]",
      desc: "Petani mengonsultasikan data dengan Asisten Agronomi AI untuk memperoleh langkah mitigasi budidaya yang rasional dan terukur.",
      bottomLabel: "Konsultasi SOP Lapangan",
    },
    {
      num: "04",
      numColor: "text-[rgba(23,131,77,0.4)]",
      icon: ClipboardCheck,
      iconBg: "bg-[#dcece5]",
      iconColor: "text-[#17834d]",
      title: "Catat Tindakan",
      phase: "Record & Review",
      phaseColor: "text-[#17834d]",
      desc: "Petugas kebun memverifikasi hasil pemangkasan atau fertigasi melalui lembar inspeksi seluler agar riwayat lahan terdokumentasi.",
      bottomLabel: "Data Penelusuran Siklus",
    },
  ];

  return (
    <section id="alur" className="bg-[#edfdf6] px-6 lg:px-[48px] py-[96px] relative">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[48px] items-center">
        {/* Section Header */}
        <div className="flex flex-col gap-[12px] items-center max-w-[672px] text-center">
          <span className="font-semibold text-[#006d3d] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
            PROSEDUR OPERASI TERPADU
          </span>
          <h2 className="font-bold text-[#102a23] text-[28px] sm:text-[32px] leading-[34px] sm:leading-[32px] tracking-[-0.8px]">
            Filosofi Alur Kerja Keputusan Lapangan
          </h2>
          <p className="font-normal text-[#5c6b66] text-[14px] leading-[20px]">
            Pola terstruktur mencegah kepanikan dan pemborosan pestisida. Menuntun operator dari deteksi dini hingga catatan verifikasi panen.
          </p>
        </div>

        {/* 4 Stepper Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col justify-between border border-slate-100/60"
              >
                <div className="flex flex-col gap-[16px]">
                  {/* Top row with Number & Icon */}
                  <div className="flex items-center justify-between w-full">
                    <span className={`font-bold text-[28px] tracking-[-0.56px] leading-[34px] ${s.numColor}`}>
                      {s.num}
                    </span>
                    <div className={`${s.iconBg} rounded-full size-[32px] flex items-center justify-center shrink-0`}>
                      <Icon className={`size-[16px] ${s.iconColor}`} />
                    </div>
                  </div>

                  {/* Title & Phase & Description */}
                  <div className="flex flex-col gap-[5px]">
                    <h3 className="font-semibold text-[#102a23] text-[16px] tracking-[-0.08px] leading-[24px]">
                      {s.title}
                    </h3>
                    <span className={`font-medium text-[12px] tracking-[0.12px] leading-[16px] ${s.phaseColor}`}>
                      {s.phase}
                    </span>
                    <p className="font-normal text-[#5c6b66] text-[13px] leading-[21.13px] pt-[2px]">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="pt-[16px] mt-[12px]">
                  <div className="border-t border-[#e2e8f0]/50 pt-[17px] font-normal text-[#5c6b66] text-[12px] leading-[16px]">
                    {s.bottomLabel}
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
