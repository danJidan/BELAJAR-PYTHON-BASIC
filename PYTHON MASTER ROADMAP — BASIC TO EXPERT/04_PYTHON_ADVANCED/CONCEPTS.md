# 📘 KONSEP LENGKAP: OBJECT-ORIENTED & ADVANCED PYTHON

---

## 1. 4 PILAR OBJECT-ORIENTED PROGRAMMING (OOP) [MUST MASTER]

### A. Konsep Inti
1. **Encapsulation (Enkapsulasi):** Menyembunyikan data internal objek agar tidak dimodifikasi secara sembarangan dari luar. Atribut private ditandai dengan `__nama_atribut`. Akses dilakukan via `@property` (getter) dan `@nama.setter`.
2. **Inheritance (Pewarisan):** Membuat class baru (child class) yang mewarisi sifat dan method dari class induk (parent class). Menggunakan `super().__init__()`.
3. **Polymorphism (Polimorfisme):** Objek dari berbagai tipe berbeda dapat merespons method yang sama dengan perilaku spesifik masing-masing.
4. **Abstraction (Abstraksi):** Menyembunyikan kompleksitas implementasi dan hanya menampilkan antarmuka (interface) esensial menggunakan modul `abc` (`ABC`, `@abstractmethod`).

### B. Kode Implementasi OOP Lengkap
```python
from abc import ABC, abstractmethod

# Abstraction
class BaseMLModel(ABC):
    def __init__(self, model_name: str):
        self.model_name = model_name
        self._is_trained = False  # Protected attribute

    @abstractmethod
    def fit(self, X, y):
        """Wajib diimplementasikan oleh setiap child class."""
        pass

    @abstractmethod
    def predict(self, X):
        pass

# Inheritance & Polymorphism
class SimpleLinearRegressor(BaseMLModel):
    def __init__(self, learning_rate: float = 0.01):
        super().__init__(model_name="LinearRegression")
        self.__lr = learning_rate  # Private attribute

    @property
    def learning_rate(self) -> float:
        return self.__lr

    def fit(self, X, y):
        print(f"Melatih {self.model_name} dengan lr={self.__lr}")
        self._is_trained = True

    def predict(self, X):
        if not self._is_trained:
            raise RuntimeError("Model belum dilatih!")
        return [0.0 for _ in X]
```

---

## 2. DUNDER / MAGIC METHODS [MUST MASTER]
Method khusus yang diawali dan diakhiri dengan dua garis bawah (`__`).
- `__init__`: Constructor objek.
- `__str__`: Representasi string yang rapi untuk pengguna/user (`print(obj)`).
- `__repr__`: Representasi teknis dan unambiguous untuk developer / debugging.
- `__len__`: Menentukan perilaku fungsi `len(obj)`.
- `__eq__`: Menentukan perbandingan kesamaan `obj1 == obj2`.

---

## 3. DECORATORS [MUST MASTER]
Fungsi yang membungkus fungsi lain untuk menambahkan fungsionalitas tanpa mengubah kode aslinya.

```python
import time
from functools import wraps

def time_tracker(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start
        print(f"[BENCHMARK] Fungsi '{func.__name__}' selesai dalam {duration:.6f} detik")
        return result
    return wrapper

@time_tracker
def komputasi_berat(n: int) -> int:
    return sum(i**2 for i in range(n))
```

---

## 4. GENERATORS & ITERATORS (`yield`) [MUST MASTER]
Mengembalikan nilai satu per satu saat diminta (*lazy evaluation*) tanpa memuat seluruh data ke dalam memori RAM sekaligus.

```python
def stream_large_dataset(max_records: int):
    current = 0
    while current < max_records:
        yield f"Record ID: {current}"
        current += 1

# Data dikonsumsi satu per satu, menghemat RAM
for row in stream_large_dataset(1_000_000):
    if row.endswith("5"):
        print(row)
        break
```
