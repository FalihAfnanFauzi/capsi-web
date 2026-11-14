import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        capsi: {
          bg: "#f8fafc",
          surface: "#ffffff",
          border: "#e2e8f0",
          "primary-dark": "#0a3d24",
          "primary-forest": "#064e3b",
          "primary-emerald": "#10b981",
          "primary-mint": "#d1fae5",
          "primary-soft": "#edfdf6",
          dark: "#0f172a",
          muted: "#475569",
          caption: "#64748b",
          amber: "#f59e0b",
          crimson: "#e11d48",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
