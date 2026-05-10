---
title: Technical Setup & Installation
---

# 🛠️ Technical Setup & Environment

Untuk berkontribusi dalam ekosistem digital Ristek, setiap anggota disarankan memiliki standar lingkungan kerja yang seragam. Hal ini bertujuan untuk meminimalisir masalah "it works on my machine" dan mempercepat proses kolaborasi pada proyek-proyek seperti **E-Himpunan**.

---

## 🏗️ Core Technologies (Wajib)

Sesuai dengan kurikulum **HMIF Weekly Sprint**, teknologi berikut adalah pondasi utama kita:
### 1. Git & GitHub
Alat utama untuk manajemen versi kode dan kolaborasi.
- **Linux (Arch/CachyOS)**: `sudo pacman -S git`
- **Windows**: Gunakan [Git for Windows](https://gitforwindows.org/)
- **Langkah Lanjutan**: Pastikan Anda sudah mengatur `user.name` dan `user.email` sesuai dengan akun GitHub Anda.

### 2. Docker & Docker Compose
Pilar utama infrastruktur kita untuk menjalankan *development environment* secara terisolasi.
- **Fungsi**: Menjalankan database, web server, dan tools lainnya tanpa mengotori sistem utama Anda.
- **Panduan**: Gunakan dokumentasi resmi untuk instalasi di [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac) atau Engine (Linux).

### 3. Editor Kode
Kami merekomendasikan alat berikut untuk efisiensi:
- **VS Code**: Editor standar dengan dukungan ekstensi yang luas.
- **Obsidian**: Wajib bagi pengurus untuk mengelola dokumentasi di Knowledge Base ini.

---

## 🌐 Environment Standards

Anda bebas menggunakan sistem operasi apa pun (**Windows, Linux, maupun macOS**). Namun, untuk kenyamanan pengembangan, silakan ikuti instruksi *shell* sesuai OS Anda: 
### Pengaturan Shell & Terminal 
Agar status repositori Git terlihat jelas di terminal, kami menyarankan: 
- **Windows**: Gunakan **Git Bash** (bawaan instalasi Git) atau **PowerShell** dengan modul [oh-my-posh](https://ohmyposh.dev/). Jika Anda pengguna tingkat lanjut, sangat disarankan menggunakan **WSL2 (Ubuntu/Debian)**. 
- **Linux**: Gunakan **Zsh** dengan [Oh My Zsh](https://ohmyzsh.ai/) atau **Fish Shell**. Ini akan sangat membantu dalam melihat *branch* Git secara langsung di terminal. 
- **macOS**: Terminal bawaan macOS sudah menggunakan **Zsh**. Anda cukup menambahkan tema seperti *Powerlevel10k* untuk visualisasi yang lebih baik. 
### Browser & Tooling 
- **Browser**: Gunakan browser berbasis Chromium (Brave/Chrome) atau Firefox untuk memastikan kompatibilitas pengujian UI/UX.

---

## 📦 Project-Specific Setup

*(Bagian ini akan diupdate setelah pengembangan proyek resmi dimulai)*

---

## 🧪 Verifikasi Instalasi

Setelah instalasi selesai, pastikan semua alat berjalan dengan perintah berikut di terminal:
```bash
git --version
docker --version
docker-compose --version
```

---

## 🚀 Langkah Selanjutnya

Setelah lingkungan kerja siap, saatnya memahami standar alur kerja harian kita:
- [[02-Getting Started/060-tech stack workflow|Tech Stack & Workflow Standard]]

> "A well-prepared environment is half the battle won."

