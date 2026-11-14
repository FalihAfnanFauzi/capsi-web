"use client";

import React, { useState } from "react";
import { Bot, Send, Shield, Sparkles, User, FileText, CheckCircle2 } from "lucide-react";

export default function AssistantSection() {
  const [messages, setMessages] = useState([
    {
      role: "user",
      sender: "Mandor Agus",
      time: "14:22 WIB",
      text: '"Kenapa buah cabai di Node A ada indikasi rontok dan daunnya melengkung ke atas?"',
    },
    {
      role: "assistant",
      title: "Analisis Terpadu Node A:",
      text: "Berdasarkan telemetri terkini: suhu udara mencapai 29.4°C dibarengi kelembapan tanah yang anjlok ke 32%. Kamera kanopi mengonfirmasi daun melengkung ke atas (tipe upward leaf curling), khas akibat kombinasi stres defisit air (VPD tinggi) dan aktivitas tungau halus (tarsonemid mites).",
      opsTitle: "REKOMENDASI OPERASIONAL:",
      steps: [
        "1. Jalankan fertigasi kalsium nitrat + air bersih hingga tanah ≥ 45%.",
        "2. Lakukan inspeksi fisik di bawah helaian daun menggunakan lup pembesar.",
      ],
      actions: ["Buat Lembar Tugas Lapangan", "Lihat Tren VPD 48 Jam"],
    },
  ]);

  const [inputVal, setInputVal] = useState("");

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        sender: "Petani Lapangan",
        time: "Baru saja",
        text: `"${query}"`,
      },
    ]);
    setInputVal("");

    setTimeout(() => {
      let analysis = "Analisis Telemetri Lapang:";
      let answer = "Sensor dan model AI membaca mikroklimat petak cabai Anda. Seluruh data terhubung ke SOP penanganan terstandar Kementan.";
      let recs = [
        "1. Pertahankan kelembapan tanah di atas ambang 55%.",
        "2. Amati sirkulasi mulsa perak-hitam di sekitar bedengan.",
      ];

      if (query.toLowerCase().includes("kalium") || query.toLowerCase().includes("pupuk")) {
        analysis = "Rekomendasi Pemupukan Generatif (Kalium):";
        answer = "Pada fase pembungaan dan pembentukan buah cabai ORI 212, berikan KNO3 (Kalium Nitrat) dengan konsentrasi 2 gram/liter air secara fertigasi tetes teratur.";
        recs = [
          "1. Aplikasikan pagi hari pukul 07:00–08:30 WIB saat penyerapan optimal.",
          "2. Pastikan EC larutan nutrisi berada di rentang 1.8–2.2 mS/cm.",
        ];
      } else if (query.toLowerCase().includes("hujan") || query.toLowerCase().includes("prediksi")) {
        analysis = "Proyeksi Mikroklimat & Hujan:";
        answer = "Model cuaca memprediksi potensi hujan ringan petang hari pukul 16:45 WIB dengan kelembapan kanopi diproyeksikan melonjak hingga 82%.";
        recs = [
          "1. Buka mulsa aerasi samping sebelum pukul 15:00 WIB.",
          "2. Tunda aplikasi pupuk daun untuk menghindari pencucian air hujan.",
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          title: analysis,
          text: answer,
          opsTitle: "REKOMENDASI OPERASIONAL:",
          steps: recs,
          actions: ["Catat ke Log Petak", "Tinjau Riwayat Sensor"],
        },
      ]);
    }, 500);
  };

  return (
    <section id="asisten" className="bg-white px-6 lg:px-[48px] py-[96px] relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
          {/* Left: Feature Details */}
          <div className="lg:col-span-5 flex flex-col gap-[23px] items-start">
            <span className="font-semibold text-[#006d3d] text-[12px] tracking-[0.6px] uppercase leading-[16px]">
              TANYA JAWAB BERBASIS KONTEKS
            </span>

            <h2 className="font-bold text-[#102a23] text-[28px] sm:text-[32px] leading-[34px] sm:leading-[32px] tracking-[-0.8px]">
              Asisten Agronomi AI:
              <br />
              Menjembatani Sensor ke Solusi Konkret
            </h2>

            <p className="font-normal text-[#5c6b66] text-[14px] leading-[22.75px]">
              Bukan sekadar chatbot generik. Asisten CAPSI membaca secara simultan data telemetri Node, riwayat penyiraman, dan foto terkini untuk memberikan jawaban yang dapat langsung dieksekusi di kebun.
            </p>

            <div className="flex flex-col gap-[14px] pt-[8px] w-full">
              {/* Feature 1 */}
              <div className="flex gap-[12px] items-start">
                <div className="bg-[#e7f7f1] rounded-[8px] size-[32px] flex items-center justify-center text-[#003527] shrink-0">
                  <CheckCircle2 className="size-[16px] text-[#006d3d]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#102a23] text-[14px] leading-[20px]">
                    Pemahaman Karakter Varietas
                  </span>
                  <span className="font-normal text-[#5c6b66] text-[13px] leading-[18px]">
                    Sensitivitas terhadap fluktuasi kalsium, rasio N-P-K berimbang pada fase generatif.
                  </span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-[12px] items-start">
                <div className="bg-[#e7f7f1] rounded-[8px] size-[32px] flex items-center justify-center text-[#003527] shrink-0">
                  <FileText className="size-[16px] text-[#006d3d]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#102a23] text-[14px] leading-[20px]">
                    Penerbitan Log Tindakan Terstandar
                  </span>
                  <span className="font-normal text-[#5c6b66] text-[13px] leading-[18px]">
                    Setiap rekomendasi otomatis tercatat ke riwayat pemeriksaan kebun tim lapangan.
                  </span>
                </div>
              </div>
            </div>

            {/* Privacy Pill */}
            <div className="pt-[8px]">
              <div className="bg-[rgba(220,232,247,0.4)] flex items-center gap-[8px] px-[12px] py-[6px] rounded-[8px]">
                <Shield className="size-[14px] text-[#003527]" />
                <span className="font-normal text-[#003527] text-[12px] leading-[16px]">
                  Data sensor internal tetap privat &amp; diproses terenkripsi.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Chat Preview Shell */}
          <div className="lg:col-span-7 bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100/60 flex flex-col">
            {/* Chat Window Header */}
            <div className="bg-[#003527] p-[16px] flex items-center justify-between text-white">
              <div className="flex gap-[12px] items-center">
                <div className="bg-white/10 rounded-full size-[36px] flex items-center justify-center">
                  <Bot className="size-[18px] text-[#95d3ba]" />
                </div>
                <span className="font-semibold text-[14px] leading-[20px] text-white">
                  Asisten AI
                </span>
              </div>
              <div className="flex items-center gap-[6px] text-xs text-[#95d3ba]">
                <span className="size-[6px] rounded-full bg-[#10b981] animate-pulse"></span>
                <span>Model Aktif</span>
              </div>
            </div>

            {/* Chat Conversation Body */}
            <div className="bg-[#f6f8fc] p-[24px] min-h-[380px] flex flex-col gap-[16px] overflow-y-auto max-h-[460px]">
              {messages.map((m, idx) => (
                <React.Fragment key={idx}>
                  {m.role === "user" ? (
                    <div className="flex gap-[10px] items-start justify-end w-full">
                      <div className="bg-[#003527] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[6px] p-[16px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] max-w-[448px] text-white">
                        <p className="font-normal text-[14px] leading-[20px]">
                          {m.text}
                        </p>
                        <div className="flex justify-end">
                          <span className="font-normal text-[#95d3ba] text-[12px] leading-[16px]">
                            {m.time} · {m.sender}
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#dcece5] rounded-full size-[32px] flex items-center justify-center text-[#003527] shrink-0">
                        <User className="size-[16px]" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-[10px] items-start w-full">
                      <div className="bg-[#064e3b] rounded-full size-[32px] flex items-center justify-center text-white shrink-0">
                        <Bot className="size-[16px] text-[#95d3ba]" />
                      </div>
                      <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[11px] p-[16px] rounded-bl-[16px] rounded-br-[16px] rounded-tr-[16px] max-w-[512px]">
                        <div className="border-b border-[#e2e8f0]/50 pb-[5px] flex items-center gap-[8px]">
                          <Sparkles className="size-[13px] text-[#006d3d]" />
                          <span className="font-semibold text-[#102a23] text-[12px] tracking-[0.12px] leading-[16px]">
                            {m.title}
                          </span>
                        </div>
                        <p className="font-normal text-[#5c6b66] text-[13px] leading-[21.13px]">
                          {m.text}
                        </p>

                        {m.steps && (
                          <div className="bg-[#e7f7f1] rounded-[8px] p-[12px] flex flex-col gap-[8px]">
                            <span className="font-semibold text-[#003527] text-[12px] tracking-[0.3px] uppercase leading-[16px]">
                              {m.opsTitle}
                            </span>
                            <div className="flex flex-col gap-[6px]">
                              {m.steps.map((st, sidx) => (
                                <div key={sidx} className="flex gap-[8px] items-center">
                                  <span className="size-[6px] rounded-full bg-[#17834d] shrink-0"></span>
                                  <span className="font-normal text-[#102a23] text-[12px] leading-[16px]">
                                    {st}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {m.actions && (
                          <div className="flex flex-wrap gap-[8px] items-center pt-[4px]">
                            <button
                              type="button"
                              className="bg-[#dcece5] hover:bg-[#c9e4d7] text-[#003527] text-[12px] font-semibold px-[12px] py-[6px] rounded-[8px] transition-colors"
                            >
                              {m.actions[0]}
                            </button>
                            <button
                              type="button"
                              className="bg-[#e1f2eb] hover:bg-[#d1ebd9] text-[#5c6b66] text-[12px] font-semibold px-[12px] py-[6px] rounded-[8px] transition-colors"
                            >
                              {m.actions[1]}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Chat Prompt Suggestions & Input */}
            <div className="bg-white border-t border-[#e2e8f0]/50 p-[16px] flex flex-col gap-[12px]">
              {/* Saran Cepat Pills */}
              <div className="flex gap-[8px] items-center overflow-x-auto pb-[2px]">
                <span className="font-normal text-[#5c6b66] text-[12px] whitespace-nowrap">
                  Saran Cepat:
                </span>
                <button
                  type="button"
                  onClick={() => handleSend("Berapa dosis pupuk kalium hari ini?")}
                  className="bg-[#e7f7f1] hover:bg-[#d6f4e6] text-[#003527] text-[12px] px-[10px] py-[4px] rounded-full whitespace-nowrap transition-colors"
                >
                  Berapa dosis pupuk kalium hari ini?
                </button>
                <button
                  type="button"
                  onClick={() => handleSend("Cek prediksi hujan sore nanti")}
                  className="bg-[#e7f7f1] hover:bg-[#d6f4e6] text-[#003527] text-[12px] px-[10px] py-[4px] rounded-full whitespace-nowrap transition-colors"
                >
                  Cek prediksi hujan sore nanti
                </button>
              </div>

              {/* Input row */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-[8px] items-center"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Tanyakan kondisi tanaman, nutrisi, atau penanganan hama..."
                  className="bg-[#f6f8fc] flex-1 px-[16px] py-[12px] min-h-[44px] rounded-[8px] text-[13px] text-[#102a23] placeholder:text-[#5c6b66] focus:outline-hidden focus:ring-1 focus:ring-[#006d3d]"
                />
                <button
                  type="submit"
                  className="bg-[#003527] hover:bg-[#064e3b] text-white size-[44px] rounded-[8px] flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send className="size-[16px]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
