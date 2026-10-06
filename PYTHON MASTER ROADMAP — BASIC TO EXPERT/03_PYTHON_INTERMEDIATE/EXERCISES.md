# 🏋️ EXERCISES: PYTHON INTERMEDIATE

### 🟢 Easy
1. Gunakan list comprehension untuk mengambil semua kata yang berawalan huruf 'a' dari sebuah list kalimat.
2. Gunakan `zip()` untuk menggabungkan dua list: `keys = ['nama', 'usia', 'jurusan']` dan `values = ['Dina', 20, 'Ilmu Komputer']` menjadi sebuah dictionary.

### 🟡 Medium
1. Buat fungsi `baca_csv_aman(filepath: str) -> list[dict]` yang membaca file CSV. Gunakan `try-except` untuk menangani `FileNotFoundError` dan `PermissionError`.
2. Gunakan dictionary comprehension untuk memfilter mahasiswa yang nilainya >= 80 dari dictionary `{'Andi': 75, 'Budi': 85, 'Caca': 90, 'Dodi': 65}`.

### 🔴 Hard
1. Buat custom exception class `InvalidModelMetricError(Exception)`. Tulis fungsi validasi metrik akurasi (rentang harus antara 0.0 s/d 1.0). Jika di luar rentang, lempar exception tersebut lengkap dengan pesan error spesifik.
