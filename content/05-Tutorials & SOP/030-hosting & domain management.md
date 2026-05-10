---
title: Hosting & Domain Management
---


# 🌐 Hosting & Domain Management (Web Ops)

Sebagai pengelola teknologi di HMTI, Anda bertanggung jawab untuk memastikan seluruh platform web (Wiki, E-Himpunan, dsb) dapat diakses dengan lancar. Saat ini, kita menggunakan layanan **Shared Hosting** untuk kemudahan skalabilitas dan pemeliharaan.

---

## 🔑 Akses Panel Kontrol
Seluruh pengaturan server dilakukan melalui Control Panel (hPanel/cPanel).
- **Akses**: Pastikan kredensial login hanya dipegang oleh **Ketua Ristek** dan **Admin Server**.
- **Backup Rutin**: Sebelum melakukan perubahan besar pada website, selalu lakukan *Manual Backup* pada bagian "Files" dan "Databases".

---

## 🚀 Deployment (Update Website)
Untuk memperbarui isi website (seperti E-Himpunan), gunakan metode berikut:

### 1. File Manager / FTP
- Gunakan **File Manager** langsung dari browser atau aplikasi seperti **FileZilla**.
- Pastikan file aplikasi diletakkan di dalam folder `public_html`.

### 2. Git Integration (Recommended)
Jika hosting mendukung, hubungkan repositori GitHub langsung ke hosting:
- Setiap kali ada *push* ke cabang `main`, hosting akan otomatis melakukan *pull* (Deployment otomatis).
- Cara ini lebih aman dan mengurangi risiko salah hapus file secara manual.

---

## 📁 Database Management
Website dinamis memerlukan database MySQL/PostgreSQL:
- **phpMyAdmin**: Gunakan alat ini untuk melakukan ekspor/impor data atau perbaikan tabel yang *corrupt*.
- **Koneksi**: Pastikan file `.env` di server mencantumkan `DB_HOST`, `DB_NAME`, dan `DB_PASSWORD` yang sesuai dengan yang dibuat di panel hosting.

---

## 🔒 Security & Domain (SSL)
- **SSL (HTTPS)**: Pastikan status SSL selalu *Active*. Jangan biarkan website diakses melalui HTTP biasa demi keamanan data mahasiswa.
- **Sub-domain**: Jika ingin membuat layanan baru (misal: `wiki.hmti-uho.org`), buatlah melalui menu "Subdomains" dan arahkan ke folder yang tepat.
- **Email Organizations**: Kelola email resmi (misal: `ristek@hmti-uho.org`) untuk kebutuhan surat-menyurat formal atau pendaftaran akun pihak ketiga.

---

## 📅 Prosedur Perpanjangan (Renewal)
Agar layanan tidak mati mendadak:
1. **Monitoring**: Cek tanggal kedaluwarsa domain dan hosting setiap awal semester.
2. **Budgeting**: Laporkan biaya perpanjangan kepada Bendahara Himpunan minimal 1 bulan sebelum jatuh tempo.
3. **Domain Privacy**: Pastikan fitur *WHOIS Privacy* aktif agar data pribadi pengelola tidak tersebar ke publik.

---

## 💡 "Uptime is Your Reputation"
Website yang sering *down* akan menurunkan kepercayaan anggota terhadap kredibilitas Ristek. Pastikan Anda memahami cara membaca log error di panel hosting jika terjadi kendala.

> "A website is never finished, it's only abandoned. Keep it alive."

---
**Selanjutnya:** Pelajari cara mengelola data menjadi visual di [[05-Tutorials & SOP/040-content creation guide|Content Creation Guide]].