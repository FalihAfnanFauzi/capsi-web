import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAPSI • Smart Agronomy & AIoT Cabai Presisi",
  description: "Platform cerdas terintegrasi sensor mikroklimat tanah ESP32, kamera kanopi berbasis AI EfficientNet-B0, model proyeksi LSTM, dan Asisten Agronomi AI kontekstual.",
  icons: {
    icon: "/capsi-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-[#f8fafc] text-[#0f172a]`}>
        {children}
      </body>
    </html>
  );
}
