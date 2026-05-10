---
title: Discord Mastery (101 to Pro)
---

# 🤖 Discord Mastery: Mengelola Markas Digital

Discord adalah pusat saraf seluruh aktivitas HMTI. Pengelolaan yang buruk akan menyebabkan kebocoran informasi atau kegaduhan (chaos). Panduan ini dirancang agar pengurus Ristek mampu mengelola server dari level moderasi dasar hingga otomatisasi tingkat tinggi.

---

## 🟢 Level 1: Dasar & Arsitektur Server
Sebelum menyentuh bot, pastikan struktur dasar server sudah kokoh.

### 1. Hierarchy & Permissions
- **Role Hierarchy**: Pastikan role Admin berada di paling atas, diikuti oleh Pengurus, Mentor, dan Anggota. Discord membaca izin dari atas ke bawah.
- **Permission Sync**: Gunakan fitur *Category Sync*. Atur izin di tingkat Kategori agar seluruh kanal di dalamnya mengikuti aturan yang sama secara otomatis.
- **Private Channels**: Kanal kementerian (seperti `#ristek-internal`) harus dikunci total dari role `@everyone`.

### 2. Onboarding Flow
Gunakan fitur **Discord Onboarding** resmi:
- Buat pertanyaan selamat datang (misal: "Pilih angkatan Anda?").
- Berikan role secara otomatis berdasarkan jawaban mereka untuk menghindari verifikasi manual yang melelahkan.

---

## 🟡 Level 2: Moderasi & Keamanan (The Shield)
Keamanan adalah harga mati untuk menghindari *raid* atau *spam*.

### 1. AutoMod & Audit Log
- Aktifkan **AutoMod** untuk memblokir kata-kata kasar atau link mencurigakan secara instan.
- Selalu pantau **Audit Log** untuk melihat siapa yang mengubah role, menghapus pesan, atau mengeluarkan anggota.

### 2. Webhook Integration
Integrasikan aktivitas eksternal agar muncul di Discord:
- **GitHub Webhook**: Hubungkan repositori ke kanal `#ristek-dev` agar setiap *Push* dan *Pull Request* terdeteksi.
- **Wiki Update**: Gunakan webhook untuk memberi tahu anggota jika ada artikel baru di Wiki.

---

## 🔴 Level 3: Pro & Automations (The Engineer)
Di level ini, kita menggunakan Discord sebagai alat produktivitas otomatis.

### 1. Manajemen Bot Spesifik
- **Carl-bot / Sapphire**: Gunakan untuk *Reaction Roles* dan kustomisasi pesan sambutan yang estetik menggunakan *Embeds*.
- **Tickets Bot**: Gunakan untuk layanan **Paper Clinic**. Anggota membuat tiket, dan kanal privat akan terbuka otomatis untuk diskusi dengan Tim Akademik.

### 2. Discord Developer Portal (Custom Bots)
Jika butuh fungsi spesifik (seperti absen otomatis yang terhubung ke database E-Himpunan):
1. Buat aplikasi di [Discord Developer Portal](https://discord.com/developers/applications).
2. Gunakan Library seperti `discord.py` atau `discord.js`.
3. Jalankan bot di *Shared Hosting* (melalui tugas kron atau node manager) agar aktif 24/7.

---

## 📋 SOP Admin Discord HMTI
Setiap Admin wajib mengikuti protokol berikut:
1. **No Ghost Pings**: Jangan melakukan `@everyone` kecuali untuk informasi yang sangat darurat (misal: pengumuman rekrutmen).
2. **Channel Cleaning**: Hapus atau arsipkan kanal proker yang sudah selesai agar sidebar tetap bersih.
3. **Role Audit**: Lakukan audit setiap awal semester untuk membersihkan role anggota yang sudah lulus atau tidak aktif.

---

## 💡 "Digital Home, Digital Discipline"
Server Discord yang rapi mencerminkan profesionalisme Departemen Ristek. Kita membangun tempat di mana mahasiswa merasa nyaman untuk berdiskusi teknis tanpa merasa terganggu oleh kebisingan yang tidak perlu.

> "A well-configured server is invisible. Users only notice it when it breaks."

---
**Selesai:** Selamat! Anda telah menyelesaikan seluruh seri Tutorial & SOP. Kini Anda bisa menjalankan ekosistem digital HMTI.