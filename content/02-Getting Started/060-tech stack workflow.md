---
title: Tech Stack & Workflow Standard
---

# ⚙️ Tech Stack & Workflow Standard

Untuk menjaga kualitas dan keberlanjutan ekosistem digital HMTI, kita perlu bekerja dengan standar yang sama. Halaman ini menjelaskan teknologi apa yang kita gunakan dan bagaimana alur kerja harian di Departemen Ristek.

---

## 🛠️ Integrated Tech Stack
Berikut adalah daftar teknologi utama yang menjadi standar pengembangan di ekosistem kita:

### 1. Dokumentasi & Knowledge (Wiki)
- **Quartz 4.x**: Framework untuk membangun Knowledge Base berbasis Markdown.
- **Obsidian**: Editor utama untuk manajemen konten dan penulisan artikel.

### 2. Pengembangan Aplikasi (E-Himpunan)
- **Backend**: Laravel (PHP) / Dockerized Environment.
- **Frontend**: Tailwind CSS / Bootstrap (Tergantung kebutuhan proyek).
- **Database**: MySQL / PostgreSQL (Berjalan di atas Docker).

### 3. Kolaborasi & DevOps
- **Git & GitHub**: Version control dan manajemen organisasi.
- **Discord Webhooks**: Notifikasi otomatis untuk setiap perubahan kode atau integrasi sistem.

---

## 🔄 Workflow: Dari Ide ke Kontribusi
Kami menggunakan alur kerja yang sistematis agar setiap *legacy* terdokumentasi dengan baik. Ikuti langkah berikut:

### Langkah 1: Koordinasi (Discord)
Sebelum memulai tugas atau proyek, diskusikan di kanal terkait (misal: `#ristek-dev`). Pastikan Anda memahami tugas yang diberikan oleh Koordinator Tim.

### Langkah 2: Eksekusi (Lokal)
Kerjakan tugas di lingkungan lokal Anda menggunakan standar yang ada di [[02-Getting Started/050-technical setup|Technical Setup]]. 
- Jika menulis **Wiki**: Gunakan Obsidian.
- Jika menulis **Kode**: Gunakan VS Code dan pastikan berjalan di Docker.

### Langkah 3: Review & Pull Request
Setelah selesai, jangan langsung menggabungkan kode/tulisan ke cabang utama:
1. Push perubahan Anda ke *branch* baru.
2. Ajukan **Pull Request (PR)** di GitHub.
3. Tunggu review dari **Tim Developer**. Kami akan memberikan feedback untuk memastikan kualitas kode dan keamanan sistem.

### Langkah 4: Deployment & Dokumentasi
Setelah PR di-*merge*, perubahan akan otomatis terupdate di sistem. Langkah terakhir yang paling krusial adalah **mendokumentasikannya** kembali di Wiki jika ada fitur atau alur baru yang ditambahkan.

---

## 💎 Prinsip "Legacy Code"
Setiap pengurus Ristek wajib memegang prinsip:
- **Write for Others**: Tulislah kode dan dokumentasi seolah-olah Anda sedang menjelaskan kepada adik tingkat Anda tahun depan.
- **Self-Documented**: Gunakan nama variabel dan struktur folder yang jelas.
- **Iterative**: Tidak perlu sempurna di awal, yang penting fungsional dan terdokumentasi.

---

## 🚀 Selesai Onboarding!
Selamat, karena sudah sampai di titik ini berarti anda telah siap untuk berkontribusi secara penuh. Anda sekarang memiliki izin untuk:
1. Mulai menjelajahi [[03-Core Programs/index|Program Kerja Utama Ristek]].
2. Mengambil tugas pertama Anda di GitHub atau Wiki.

> "Standardization is not about restriction, it's about making collaboration effortless."