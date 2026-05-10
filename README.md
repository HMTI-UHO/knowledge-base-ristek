# 🏛️ HMTI-UHO Knowledge Base (Wiki)

[![Build Quartz](https://github.com/HMTI-UHO/knowledge-base/actions/workflows/deploy.yml/badge.svg)](https://github.com/HMTI-UHO/knowledge-base/actions/workflows/deploy.yml)
[![Quartz Version](https://img.shields.io/badge/Powered%20by-Quartz%204.0-blueviolet)](https://quartz.jzhao.xyz/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **"Mahasiswa Biasa, Hal Luar Biasa."**
> Dokumentasi terintegrasi, pusat riset, dan standar operasional Departemen Riset dan Teknologi (Ristek) HMTI-UHO Periode 2026.

Ini adalah repositori sumber untuk **Knowledge Base Ristek**, sebuah ekosistem informasi statis yang dibangun menggunakan [Quartz 4.0](https://quartz.jzhao.xyz/) dan dikelola sepenuhnya melalui Markdown.

---

## 🗺️ Struktur Navigasi

Repositori ini disusun secara modular untuk memudahkan navigasi dan pemeliharaan jangka panjang:

- **`01 - Prologue`**: Visi, misi, filosofi kementerian, dan identitas organisasi.
- **`02 - Getting Started`**: Panduan *onboarding* anggota baru dan setup lingkungan kerja.
- **`03 - Core Programs`**: Detail operasional 7 Program Kerja Utama (P1-P7).
- **`04 - Archive & Community`**: Galeri proyek (*showcase*), gudang ilmu, dan budaya komunitas.
- **`05 - Tutorials & SOP`**: Dokumentasi teknis mendalam mengenai pengelolaan infrastruktur digital.
- **`06 - Changelog`**: Catatan riwayat pembaruan sistem secara otomatis.

---

## 🛠️ Stack Teknologi

Sistem ini dirancang untuk kecepatan, keamanan, dan kemudahan kolaborasi:

- **Static Site Generator:** [Quartz 4.0](https://quartz.jzhao.xyz/) (Framework berbasis TypeScript).
- **Content Management:** [Obsidian](https://obsidian.md/) (Local-first Markdown editor).
- **Deployment:** GitHub Actions & GitHub Pages.
- **Infrastructure:** Hostinger (Custom Domain Integration).

---

## 🚀 Cara Berkontribusi (Developer Guide)

Kami mengundang seluruh pengurus Ristek dan anggota HMTI untuk memperkaya Knowledge Base ini.

### Prasyarat
- [Node.js](https://nodejs.org/) (Versi 18.x atau terbaru)
- [NPM](https://www.npmjs.com/)
- Pemahaman dasar tentang **Git** dan **Markdown**.

### Instalasi Lokal
1. **Clone repositori:**
   ```bash
   git clone [https://github.com/HMTI-UHO/knowledge-base.git](https://github.com/HMTI-UHO/knowledge-base.git)
   cd knowledge-base
   ```

2. **Instal dependensi:**
    ```bash
    npm install
    ```

3. **Jalankan preview lokal:**
    ```bash
    npx quartz build --serve
    ```

Akses di `http://localhost:8080`.

### Alur Kontribusi (SOP)
1. Buat branch baru: `feat/tambah-materi-bootcamp`.
2. Lakukan perubahan file Markdown di folder yang relevan.
3. Commit dengan standar *Conventional Commits*: `docs: tambah materi web dev`.
4. Push dan buka **Pull Request** ke branch `main`.

---

## 🏛️ Kepemilikan & Lisensi

Proyek ini merupakan aset digital resmi **Kementerian Ristek HMTI-UHO**. Seluruh konten di dalamnya dimaksudkan untuk kepentingan edukasi dan kemajuan organisasi.

* **Author:** Muhammad Fathan Fuad - Head of Ristek 2026.
* **Maintainers:** Tim Developer Ristek.
* **License:** [MIT License](https://www.google.com/search?q=LICENSE).

---
