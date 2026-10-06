# 💡 CODE EXAMPLES: PYTHON BASIC

### 1. Manipulasi Teks & Validasi Data Input
```python
def bersihkan_nama(raw_name: str) -> str:
    # Menghapus spasi liar di awal/akhir dan kapitalisasi tiap kata
    return raw_name.strip().title()

nama_input = "   joko widodo sasmito   "
nama_rapi = bersihkan_nama(nama_input)
print(f"Nama Asli: '{nama_input}' -> Nama Rapi: '{nama_rapi}'")
```

### 2. Algoritma Pencari Angka Maksimum & Minimum Manual
```python
def cari_min_max(angka_list: list[int]) -> tuple[int, int]:
    if not angka_list:
        raise ValueError("List tidak boleh kosong!")
    
    nilai_min = angka_list[0]
    nilai_max = angka_list[0]
    
    for x in angka_list[1:]:
        if x < nilai_min:
            nilai_min = x
        if x > nilai_max:
            nilai_max = x
            
    return nilai_min, nilai_max

data = [45, 12, 89, 3, 77, 24]
terkecil, terbesar = cari_min_max(data)
print(f"Min: {terkecil}, Max: {terbesar}")
```
