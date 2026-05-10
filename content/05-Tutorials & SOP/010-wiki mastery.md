---
title: Wiki Mastery (Obsidian & Quartz)
---

# 🛠️ Wiki Mastery: Mengelola Otak Kolektif

Knowledge Base ini dibangun menggunakan **Quartz 4.0** dan dikelola melalui **Obsidian**. Sebagai pengelola Ristek, Anda bertanggung jawab untuk menjaga agar informasi tetap terstruktur dan sistem tetap berjalan lancar. Panduan ini mencakup teknik tingkat lanjut untuk pemeliharaan Wiki.

---

## 🖋️ Penulisan Tingkat Lanjut (Obsidian)

Agar dokumen tidak hanya berisi teks polos, gunakan fitur-fitur berikut untuk meningkatkan keterbacaan:

### 1. Callouts (Admonitions)
Gunakan *Callouts* untuk memberikan penekanan pada informasi tertentu.
> [!TIP]
> Gunakan tip ini untuk memberikan trik cepat kepada pembaca.

> [!WARNING]
> Gunakan peringatan ini untuk hal-hal krusial yang tidak boleh dilewatkan.

### 2. Dataview & Dynamic Content
Jika Anda ingin membuat daftar otomatis (misalnya daftar semua proker), gunakan *plugin* Dataview. Ini memastikan Anda tidak perlu memperbarui daftar secara manual setiap kali ada file baru.

---

## 🛠️ Pemeliharaan Quartz (Developer Guide)

Wiki ini bersifat statis dan di-*generate* melalui terminal. Berikut adalah SOP saat melakukan pembaruan sistem:

### 1. Local Preview
Sebelum melakukan *push* ke GitHub, selalu cek tampilan secara lokal:
```bash
npx quartz build --serve
```
Akses di `localhost:8080` untuk memastikan tidak ada link yang rusak atau gambar yang tidak muncul.

### 2. Mengatasi Build Error
Jika saat proses _build_ terjadi error:
- Periksa **Frontmatter**: Pastikan setiap file memiliki `title` di bagian paling atas.
- **Invalid Links**: Pastikan tidak ada kurung siku `[[ ]]` yang kosong atau merujuk ke file yang sudah dihapus.
- **Cache**: Jika perubahan tidak muncul, coba hapus folder `.quartz-cache` dan build ulang.

---

## 🎨 Customization & Styling

Untuk menjaga visual tetap konsisten dengan identitas HMTI:
- **quartz.config.ts**: Tempat mengatur warna tema (Dark/Light mode), font, dan nama situs.
- **quartz.layout.ts**: Tempat mengatur tata letak sidebar, grafik, dan letak _search bar_.
- **Custom CSS**: Jika ingin mengubah tampilan spesifik (misal: warna heading), edit file di `quartz/styles/custom.scss`.

---

## 🔄 Prosedur Update & Deployment
1. **Sync**: Selalu lakukan `git pull` sebelum mengedit untuk menghindari _conflict_ dengan pengurus lain.
2. **Edit**: Tambahkan materi baru melalui Obsidian.
3. **Commit**: Gunakan pesan yang jelas (Contoh: `docs: tambah panduan koding`).
4. **Push**: Kirim ke GitHub. Sistem akan melakukan _Auto-deploy_ ke alamat Wiki resmi.

---

## 💡 "Standard over Chaos"
Dokumentasi yang berantakan lebih buruk daripada tidak ada dokumentasi sama sekali. Pastikan setiap folder memiliki file `index.md` dan setiap gambar diletakkan di folder `/attachments` agar struktur file tetap bersih.

> "A library is not a luxury but one of the necessities of life."

---

**Selanjutnya:** Pelajari standar kolaborasi kode di [[05-Tutorials & SOP/020-github workflow sop|GitHub Workflow SOP]].