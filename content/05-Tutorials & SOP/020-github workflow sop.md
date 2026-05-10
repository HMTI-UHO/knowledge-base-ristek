---
title: GitHub Workflow SOP
---

# 🐙 GitHub Workflow: The Developer's Bible

Untuk menjaga integritas kode dan kelancaran kolaborasi di **HMTI-UHO GitHub Organization**, setiap kontributor wajib mengikuti standar kerja ini. Kita tidak hanya menulis kode agar jalan, tapi agar mudah dibaca dan dipelihara oleh orang lain.

---

## 🌲 Branching Strategy
Jangan pernah melakukan *push* langsung ke cabang `main`. Gunakan strategi cabang berikut:

- **`main`**: Cabang stabil yang siap di-deploy (Read-only bagi kontributor umum).
- **`development`**: Cabang utama untuk integrasi fitur baru sebelum masuk ke `main`.
- **`feature/nama-fitur`**: Untuk pengembangan fitur baru (Contoh: `feature/login-system`).
- **`fix/nama-bug`**: Untuk perbaikan *bug* (Contoh: `fix/api-endpoint-error`).
- **`docs/nama-dokumen`**: Untuk pembaruan dokumentasi atau Wiki.

---

## 💬 Commit Message Standard
Pesan *commit* yang berantakan mempersulit pelacakan kesalahan. Kita menggunakan standar **Conventional Commits**:

Format: `<type>: <description>`

- **`feat:`**: Fitur baru (Contoh: `feat: tambah fitur pendaftaran bootcamp`).
- **`fix:`**: Perbaikan *bug* (Contoh: `fix: perbaiki error validasi login`).
- **`docs:`**: Perubahan dokumentasi (Contoh: `docs: update SOP GitHub`).
- **`style:`**: Perubahan format/style (bukan logika) seperti *whitespace* atau titik koma.
- **`refactor:`**: Perubahan kode yang tidak menambah fitur atau memperbaiki bug.

---

## 🔄 The Pull Request (PR) Process
Setiap perubahan harus melalui mekanisme **Review**:

1. **Push & Open PR**: Dorong cabang fitur Anda ke GitHub dan buka Pull Request ke arah cabang `development`.
2. **Description**: Jelaskan apa yang Anda ubah dan sertakan *screenshot* jika ada perubahan visual.
3. **Review**: Tunggu setidaknya satu **Reviewer** (Tim Ristek/Lead) untuk mengecek kode Anda.
4. **Fix**: Jika ada saran perbaikan, segera lakukan di cabang yang sama.
5. **Merge**: Setelah mendapatkan `Approve`, kode akan digabungkan oleh maintainer.

---

## 🛡️ Best Practices & Security
- **No Hardcoded Secrets**: Jangan pernah memasukkan API Key, Password, atau kredensial database ke dalam kode. Gunakan file `.env`.
- **Atomic Commits**: Lakukan *commit* untuk satu perubahan kecil yang spesifik. Jangan menggabungkan 10 fitur dalam satu *commit*.
- **Sync Regularly**: Selalu lakukan `git pull origin development` sebelum mulai bekerja untuk menghindari *merge conflict* yang besar.

---

## 🛠️ Handling Conflicts
Jika terjadi *conflict*:
1. Tarik cabang terbaru: `git pull origin development`.
2. Selesaikan bagian yang bentrok secara manual di VS Code.
3. Lakukan *commit* hasil resolusi tersebut dan dorong kembali.

---

## 💡 "Code is Read Much More Often Than It is Written"
Menulis kode yang rapi dan mengikuti SOP bukan untuk membatasi Anda, melainkan untuk menghargai waktu rekan setim Anda yang harus membaca kode tersebut di masa depan.

> "I'm not a great programmer; I'm just a good programmer with great habits."

---
**Selanjutnya:** Kelola infrastruktur web kita di [[05-Tutorials & SOP/030-hosting & domain management|Hosting & Domain Management]].