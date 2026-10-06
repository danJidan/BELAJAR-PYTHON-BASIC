# 📘 KONSEP LENGKAP NUMPY

### 1. Vectorization vs Python Loop
NumPy ditulis dalam bahasa C. Operasi vektorisasi pada `ndarray` mengeksekusi operasi matematika pada contiguous block of memory tanpa overhead dynamic type check Python. Hasilnya bisa **50x hingga 200x lebih cepat** daripada loop Python biasa!

### 2. Broadcasting Rules
Aturan bagaimana NumPy memperlakukan array dengan dimensi berbeda saat operasi matematika:
- Dimensi dicocokkan dari kanan ke kiri.
- Dua dimensi kompatibel jika: nilainya sama, ATAU salah satu dimensinya bernilai 1.

```python
import numpy as np

# Matriks 3x2 ditambah Vektor 1x2 (Broadcasting otomatis)
matriks = np.array([[1, 2], [3, 4], [5, 6]])  # shape (3, 2)
vektor  = np.array([10, 20])                   # shape (2,)
hasil = matriks + vektor
# Hasil: [[11, 22], [13, 24], [15, 26]]
```
