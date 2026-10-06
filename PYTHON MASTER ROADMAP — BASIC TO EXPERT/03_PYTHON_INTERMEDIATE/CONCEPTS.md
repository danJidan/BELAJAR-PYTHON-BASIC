# 📘 KONSEP LENGKAP: PYTHON INTERMEDIATE

---

## 1. COMPREHENSIONS (LIST, DICT, SET) [MUST MASTER]
- **Apa itu?** Cara ringkas dan sangat cepat (C-speed) untuk membuat koleksi baru dari iterasi koleksi yang ada.
- **Kenapa penting?** Kode jauh lebih bersih, terbaca, dan memiliki performa eksekusi lebih cepat dibanding loop manual `for ... .append()`.

```python
# List Comprehension
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
kuadrat_genap = [x**2 for x in angka if x % 2 == 0]
# Hasil: [4, 16, 36, 64, 100]

# Dict Comprehension
siswa = ["Budi", "Siti", "Agus"]
nilai = [85, 92, 78]
rapor = {nama: skor for nama, skor in zip(siswa, nilai)}
# Hasil: {'Budi': 85, 'Siti': 92, 'Agus': 78}

# Set Comprehension (Elemen unik otomatis)
daftar_kata = ["apel", "jeruk", "apel", "mangga", "jeruk"]
panjang_unik = {len(k) for k in daftar_kata}
```

---

## 2. BUILT-IN POWER UTILITIES: ENUMERATE, ZIP, SORTED, ANY, ALL [MUST MASTER]

```python
# Enumerate (Mengambil index dan elemen sekaligus)
bahasa = ["Python", "SQL", "Julia"]
for idx, item in enumerate(bahasa, start=1):
    print(f"Peringkat {idx}: {item}")

# Zip (Menggabungkan beberapa iterable secara paralel)
fitur = ["usia", "pendapatan", "skor_kredit"]
bobot = [0.25, 0.45, 0.30]
model_weights = dict(zip(fitur, bobot))

# Any & All
prediksi = [True, True, False, True]
print(all(prediksi))  # False (karena ada 1 yang False)
print(any(prediksi))  # True  (karena ada yang True)
```

---

## 3. ERROR & EXCEPTION HANDLING [MUST MASTER]
Penanganan error secara anggun tanpa membuat program terhenti tiba-tiba.

```python
def bagi_aman(a: float, b: float) -> float | None:
    try:
        hasil = a / b
    except ZeroDivisionError as err:
        print(f"Log Warning: Pembagian dengan nol terdeteksi -> {err}")
        return None
    except TypeError as err:
        print(f"Log Error: Tipe data salah -> {err}")
        raise
    else:
        # Dijalankan HANYA jika TIDAK ADA exception
        return hasil
    finally:
        # SELALU dijalankan (cocok untuk cleanup / menutup koneksi)
        pass
```

---

## 4. FILE I/O & MODERN PATHLIB [MUST MASTER]
Selalu gunakan Context Manager (`with open(...)`) agar file resource otomatis ditutup meskipun terjadi error di tengah proses.

```python
import json
import csv
from pathlib import Path

# Pathlib: Penanganan path lintas OS (Windows/Linux/Mac)
data_dir = Path("dataset") / "raw"
data_dir.mkdir(parents=True, exist_ok=True)
json_file = data_dir / "metadata.json"

# Menulis & Membaca JSON
config = {"model": "XGBoost", "max_depth": 6, "learning_rate": 0.05}
with open(json_file, mode="w", encoding="utf-8") as f:
    json.dump(config, f, indent=4)

with open(json_file, mode="r", encoding="utf-8") as f:
    loaded_config = json.load(f)
```
