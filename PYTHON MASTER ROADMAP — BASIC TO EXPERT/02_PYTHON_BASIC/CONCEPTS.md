# 📘 KONSEP LENGKAP: PYTHON BASIC (FORMAT STANDAR A-J)

---

## 1. VARIABEL, TIPE DATA & OPERATOR [MUST MASTER]

### A. Konsep
- **Apa itu?** Variabel adalah wadah di RAM untuk menyimpan nilai data. Python bersifat *dynamically typed* (tipe data ditentukan otomatis saat runtime).
- **Kenapa penting?** Semua kalkulasi data (numerik, teks, boolean) membutuhkan penyimpanan variabel.
- **Tipe Data Primitif:**
  - `int`: Bilangan bulat (`10`, `-5`)
  - `float`: Bilangan desimal (`3.14`, `-0.001`)
  - `str`: Teks diapit tanda petik (`"Machine Learning"`, `'Python'`)
  - `bool`: Logika kebenaran (`True` atau `False`)
  - `NoneType`: Nilai hampa / representasi ketiadaan nilai (`None`)
- **Hubungan dengan AI/Data:** Nilai fitur input pada model ML selalu berupa angka (`float`), label kategori berupa string (`str`), dan mask klasifikasi biner berupa boolean (`bool`). Missing value sering direpresentasikan dengan `None` / `np.nan`.

### B. Syntax & Contoh Kode
```python
# Deklarasi variabel
umur: int = 25
gaji: float = 12500000.50
nama_kandidat: str = "Ahmad Data"
is_active: bool = True
catatan_tambahan = None

# Type Checking & Conversion
print(type(umur))           # <class 'int'>
umur_str = str(umur)        # Konversi int ke str -> "25"
gaji_int = int(gaji)        # Konversi float ke int (trunckasi) -> 12500000

# String Formatting Modern (f-string)
print(f"Karyawan: {nama_kandidat}, Gaji: Rp {gaji:,.2f}")
```

### D. Common Mistakes
1. Menjumlahkan `str` dengan `int` tanpa konversi eksplisit (`"10" + 5` -> `TypeError`).
2. Mengira `int(3.99)` akan dibulatkan ke atas menjadi `4` (Python memotong desimal / truncating, hasilnya tetap `3`).
3. Menggunakan nama variabel terlarang yang merupakan keyword bawaan Python (`class`, `def`, `for`, `in`, `type`).

### F. Best Practices
- Gunakan penamaan `snake_case` untuk variabel dan fungsi (`total_penjualan`, `hitung_pajak`).
- Gunakan huruf kapital semua untuk konstanta (`MAX_RETRIES = 5`, `PI = 3.14159`).
- Selalu gunakan `f-string` modern (`f"{var}"`) daripada format lama (`%` atau `.format()`).

---

## 2. KONTROL ALUR (CONTROL FLOW): IF-ELSE & MATCH-CASE [MUST MASTER]

### A. Konsep
Mengatur cabang eksekusi kode berdasarkan evaluasi kondisi boolean (`True` atau `False`). Python mendukung `if`, `elif`, `else`, ternary operator, serta `match-case` (Python 3.10+).

### B. Syntax & Contoh Kode
```python
skor = 85

# If-Elif-Else standar
if skor >= 90:
    grade = "A"
elif skor >= 80:
    grade = "B"
elif skor >= 70:
    grade = "C"
else:
    grade = "D / Remedial"

# Ternary Operator (One-liner conditional)
status = "LULUS" if skor >= 70 else "GAGAL"

# Modern Match-Case (Pattern Matching)
role = "data_scientist"
match role:
    case "data_analyst":
        tools = ["SQL", "PowerBI", "Pandas"]
    case "data_scientist" | "ml_engineer":
        tools = ["Python", "Scikit-Learn", "PyTorch"]
    case _:
        tools = ["General Computer Literacy"]
```

---

## 3. PERULANGAN (LOOPS): FOR, WHILE, & RANGE [MUST MASTER]

### A. Konsep
- `for loop`: Digunakan saat jumlah perulangan sudah diketahui pasti (mengiterasi koleksi data / `range`).
- `while loop`: Digunakan saat perulangan bergantung pada kondisi kebenaran tertentu yang dinamis.
- Kontrol loop: `break` (keluar dari loop seketika), `continue` (lewati sisa baris, lompat ke iterasi berikutnya), `pass` (placeholder kosong).

### B. Syntax & Contoh Kode
```python
# For loop dengan range
for i in range(1, 6):  # 1, 2, 3, 4, 5
    if i == 3:
        continue  # lewati angka 3
    print(f"Iterasi ke-{i}")

# While loop dengan penghenti dinamis
saldo = 1000
while saldo > 0:
    saldo -= 300
    print(f"Sisa saldo: {saldo}")
```

---

## 4. FUNGSI: MODULARITAS & REUSABILITAS [MUST MASTER]

### A. Konsep
Fungsi membungkus logika agar dapat dipanggil berulang kali tanpa duplikasi kode (*Don't Repeat Yourself / DRY*).

### B. Syntax & Contoh Kode
```python
def hitung_diskon(total_belanja: float, persen_diskon: float = 0.10) -> float:
    """Menghitung potongan diskon dengan default diskon 10%."""
    potongan = total_belanja * persen_diskon
    return total_belanja - potongan

# *args dan **kwargs
def logging_metrics(model_name: str, *params, **metrics):
    print(f"Model: {model_name}")
    print(f"Parameters: {params}")
    for k, v in metrics.items():
        print(f"Metric {k}: {v:.4f}")

logging_metrics("RandomForest", 100, 42, accuracy=0.945, f1_score=0.932)
```
