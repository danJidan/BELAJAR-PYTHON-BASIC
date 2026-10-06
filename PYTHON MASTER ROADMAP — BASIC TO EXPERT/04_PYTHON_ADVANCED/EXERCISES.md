# 🏋️ EXERCISES: PYTHON ADVANCED

### 🟢 Easy
1. Buat class `Rectangle` dengan atribut `width` dan `height`. Implementasikan `@property` untuk menghitung `area` dan dunder method `__str__`.

### 🟡 Medium
1. Buat custom decorator `@retry(max_attempts=3)` yang secara otomatis mencoba ulang eksekusi fungsi jika terjadi Exception.
2. Buat generator function `fibonacci(n)` yang menghasilkan deret angka Fibonacci sampai elemen ke-n.

### 🔴 Hard
1. Buat custom Context Manager class `DatabaseSession` yang mengimplementasikan `__enter__` (koneksi terbuka) dan `__exit__` (otomatis rollback jika terjadi error, atau commit jika sukses).
