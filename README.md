# CAPSI Web — Smart Agronomy & AIoT Cabai Presisi 🌶️🌱

Platform pemantauan cerdas berbasis **AIoT (Artificial Intelligence of Things)** dan agronomi presisi untuk budidaya cabai. Mengintegrasikan sensor mikroklimat tanah ESP32, kamera kanopi berbasis Edge AI EfficientNet-B0, model proyeksi time-series LSTM, dan Asisten Agronomi AI kontekstual untuk mendukung ketahanan pangan mitra petani Nusantara.

---

## 🚀 Fitur Utama (MVP)

- **Landing Page Interaktif (1:1 Figma Design)**:
  - Hero section dengan simulasi live telemetry (*Node A & Node B*).
  - Penjelasan arsitektur **4 Pilar Solusi**: Sensor IoT, Deteksi Visual Cerdas, Prediksi LSTM, dan Asisten AI berbasis RAG.
  - Dokumentasi & transparansi data studi kasus *Pilot Project* Kawan Agro Bersama, Sumedang (Varietas ORI 212).
  - Visualisasi alur kerja hulu-ke-hilir (*Edge Sensor $\to$ AI Cloud $\to$ Rekomendasi Lapang*).
  - Mode konsultasi Asisten Agronomi AI kontekstual.
- **Responsif & Aksesibel**: Sesuai standar WCAG AA dengan tipografi modern (*Plus Jakarta Sans*) dan palet warna agronomi harmonis.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Ready**: Vercel / Netlify

---

## 💻 Panduan Memulai Cepat (Untuk Rekan Tim)

Ikuti langkah-langkah di bawah untuk menjalankan proyek ini di laptop masing-masing:

### 1. Clone Repository
```bash
git clone <URL_REPOSITORY_GITHUB>
cd capsi-web
```

### 2. Install Dependensi
Pastikan [Node.js](https://nodejs.org/) (versi 18.x atau 20.x LTS) sudah terinstal, lalu jalankan:
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000) untuk melihat web secara langsung.

### 4. Build Verifikasi (Production Check)
```bash
npm run build
```

---

## 📂 Struktur Direktori Proyek

```text
capsi-web/
├── public/                  # Aset statis & logo resmi (capsi-logo-transparent.png)
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── layout.tsx       # Root layout, font Plus Jakarta Sans, Favicon & Metadata
│   │   ├── page.tsx         # Main Landing Page
│   │   └── globals.css      # Custom Tailwind styling & CSS animations
│   ├── components/          # Komponen modular UI
│   │   ├── Navbar.tsx       # Header navigasi & logo CAPSI
│   │   ├── HeroSection.tsx  # Hero header + live interactive telemetry widget
│   │   ├── FourPillars.tsx  # 4 pilar solusi AIoT
│   │   ├── PilotProject.tsx # Studi kasus lahan riil Sumedang
│   │   ├── HowItWorks.tsx   # Alur kerja hulu-ke-hilir
│   │   ├── AIAssistant.tsx  # Simulasi asisten agronomi kontekstual
│   │   ├── CTASection.tsx   # Call-to-Action banner
│   │   └── Footer.tsx       # Footer resmi & copyright
├── tailwind.config.ts       # Konfigurasi custom colors, spacing & theme
├── tsconfig.json            # Konfigurasi TypeScript
└── package.json             # Dependensi proyek
```

---

## 🤝 Alur Kolaborasi Tim (Git & Branching Workflow)

Agar pengerjaan tim tidak saling bertabrakan (*merge conflict*), disepakati alur kerja berikut:

### 1. Cabang Utama (*Branches*)
- `main`: Kode stabil untuk produksi / demo juri (hanya dimerge setelah dites).
- `dev`: Cabang integrasi aktif semua fitur tim.
- `feature/<nama-fitur>`: Cabang kerja mandiri masing-masing anggota tim.

### 2. Cara Mengerjakan Fitur Baru
```bash
# 1. Pastikan dev lokal up-to-date
git checkout dev
git pull origin dev

# 2. Buat branch baru untuk tugas kamu (contoh: halaman login)
git checkout -b feature/login-page

# 3. Lakukan coding & commit secara berkala
git add .
git commit -m "feat: implement responsive login page with form validation"

# 4. Push ke GitHub
git push -u origin feature/login-page

# 5. Buat Pull Request (PR) di GitHub ke branch 'dev' untuk direview rekan tim
```

### 3. Konvensi Pesan Commit (Conventional Commits)
Gunakan awalan berikut saat membuat commit:
- `feat:` Fitur atau komponen baru (contoh: `feat: add iot telemetry chart`)
- `fix:` Perbaikan bug (contoh: `fix: adjust navbar padding on mobile`)
- `style:` Perubahan tampilan/CSS tanpa merubah logika kode
- `docs:` Pembaruan dokumentasi atau README
- `refactor:` Restrukturisasi kode tanpa merubah fungsionalitas

---

## 🏆 Tim Pengembang
**Tim CAPSI** — *Solusi AIoT Presisi untuk Petani Nusantara*  
Hackathon 2026
