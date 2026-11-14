"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Minus, Send, Sparkles, MessageSquare, AlertTriangle, Droplets, ShieldCheck } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export default function ChatBotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Halo Petani Kawan AgroBersama! Saya Asisten AI CAPSI. Saya mendeteksi ada peringatan anomali visual di Node A (Blok Utara) dan penurunan kelembapan di Node B. Ada yang ingin Anda tanyakan?",
      time: "09:30 WIB",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Simulate smart agronomic RAG AI response
    setTimeout(() => {
      let botReply = "Terima kasih atas pertanyaannya. Sistem CAPSI menyarankan verifikasi fisik berkala pada bedengan terkait.";

      const lower = text.toLowerCase();
      if (lower.includes("antraknosa") || lower.includes("bercak") || lower.includes("node a")) {
        botReply = "Berdasarkan inferensi model EfficientNet-B0 kanopi, terdeteksi pola lesi melingkar kehitaman pada buah cabai di Node A (Blok Utara) dengan confidence 84%. Rekomendasi: Petik dan musnahkan buah yang terinfeksi dari kebun, lalu semprotkan fungisida hayati Trichoderma harzianum atau tembaga hidroksida dosis rendah saat cuaca kering.";
      } else if (lower.includes("irigasi") || lower.includes("air") || lower.includes("kelembapan") || lower.includes("node b")) {
        botReply = "Data telemetri Node B (Blok Selatan) mencatat kelembapan tanah lapisan perakaran turun ke 32% (di bawah ambang batas 55%). Periksa selang drip emitter bedengan 5–8 apakah ada sumbatan pasir atau lumut, dan lakukan irigasi tetes 25 menit sore ini.";
      } else if (lower.includes("rekomendasi") || lower.includes("ramah lingkungan") || lower.includes("pupuk")) {
        botReply = "Untuk fase pembuahan aktif (generatif) varietas ORI 212 saat ini, jaga rasio Kalium dan Kalsium untuk memperkuat dinding sel buah cabai, serta gunakan ekstrak mimba atau PGPR guna menekan perkembangan spora patogen tanpa merusak musuh alami.";
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB",
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 size-[56px] rounded-full bg-[#10b981] hover:bg-[#059669] text-[#003622] hover:text-white shadow-[0px_6px_20px_rgba(16,185,129,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Buka Asisten Agronomi AI"
        title="Konsultasi Asisten Agronomi AI"
      >
        {isOpen ? <X className="size-6 text-white" /> : <Bot className="size-7" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 size-3 bg-[#dc2626] border-2 border-white rounded-full animate-ping" />
        )}
      </button>

      {/* Chat Pop-Up Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] h-[520px] bg-white border border-[#e2e8f0] rounded-[20px] shadow-[0px_12px_40px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          data-node-id="444:692"
          data-name="Chat Bot Pop-Up Window"
        >
          {/* Header */}
          <div className="bg-[#003622] px-4 py-3.5 flex items-center justify-between text-white border-b border-[#004d31]">
            <div className="flex items-center gap-3">
              <div className="size-[36px] rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981]">
                <Bot className="size-5" />
              </div>
              <div>
                <h3 className="font-bold text-[14px] leading-tight">Asisten Agronomi AI</h3>
                <p className="text-[11px] text-[#86efac] flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#22c55e] inline-block animate-pulse" />
                  Online • Terhubung ke Sensor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-300">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                title="Tutup"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f8fafc] text-[13px]">
            <div className="text-center my-1">
              <span className="text-[11px] bg-[#e2e8f0] text-[#64748b] px-2.5 py-0.5 rounded-full">
                Hari ini, 04 Nov 2026
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-[14px] px-3.5 py-2.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#003622] text-white rounded-br-xs"
                      : "bg-white text-[#0d1c2e] border border-[#e2e8f0] shadow-xs rounded-bl-xs"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[10px] text-[#94a3b8] mt-1 px-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-[#e2e8f0] rounded-[14px] px-3.5 py-2 w-fit text-[#64748b] text-[12px]">
                <span className="size-1.5 bg-[#003622] rounded-full animate-bounce" />
                <span className="size-1.5 bg-[#003622] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="size-1.5 bg-[#003622] rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px]">Menganalisis telemetri...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          <div className="p-2.5 bg-white border-t border-[#f1f5f9] space-y-1.5">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#64748b] px-1">
              <Sparkles className="size-3 text-[#d97706]" />
              <span>Saran Pertanyaan Cepat:</span>
            </div>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleSendMessage("Jelaskan indikasi antraknosa di Node A")}
                className="text-left text-[11px] text-[#003622] bg-[#effaf4] hover:bg-[#d6f5e3] border border-[#d1fae5] px-2.5 py-1.5 rounded-lg transition-colors truncate"
              >
                🔍 Jelaskan indikasi antraknosa di Node A
              </button>
              <button
                onClick={() => handleSendMessage("Berapa kebutuhan air irigasi Node B hari ini?")}
                className="text-left text-[11px] text-[#003622] bg-[#effaf4] hover:bg-[#d6f5e3] border border-[#d1fae5] px-2.5 py-1.5 rounded-lg transition-colors truncate"
              >
                💧 Berapa kebutuhan air irigasi Node B hari ini?
              </button>
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#e2e8f0] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tanyakan analisis tanaman..."
              className="flex-1 h-[38px] bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-3 text-[13px] text-[#0d1c2e] focus:outline-none focus:border-[#003622] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="size-[38px] bg-[#003622] hover:bg-[#004d31] disabled:opacity-50 text-white rounded-lg flex items-center justify-center shrink-0 transition-colors"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
