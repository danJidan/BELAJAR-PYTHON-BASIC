# 📘 GIT & MODERN DEVELOPMENT WORKFLOW

### A. Alur Kerja Git Standar Industri
1. **Inisialisasi & Staging:**
   - `git init`: Membuat repository lokal baru.
   - `git status`: Memeriksa file yang diubah.
   - `git add .`: Memasukkan perubahan ke Staging Area.
   - `git commit -m "feat: implement customer churn pipeline"`: Menyimpan snapshot versi.

2. **Branching & Collaboration:**
   - `git checkout -b feature/model-tuning`: Membuat branch baru untuk eksperimen tanpa merusak branch `main`.
   - `git merge feature/model-tuning`: Menggabungkan kode ke branch utama.
   - `git push origin main`: Mengunggah commit ke repository GitHub.

---

### B. Tooling Modern Python
- **Package Manager Cepat:** `uv` (10-100x lebih cepat dibanding `pip`).
- **Linter & Formatter Tercepat:** `ruff` (Menggantikan `flake8`, `black`, dan `isort` sekaligus).
- **Static Type Checking:** `mypy` (Mendeteksi bug tipe data sebelum kode dijalankan).
- **Testing Framework:** `pytest` (Standar industri pengujian kode Python).
