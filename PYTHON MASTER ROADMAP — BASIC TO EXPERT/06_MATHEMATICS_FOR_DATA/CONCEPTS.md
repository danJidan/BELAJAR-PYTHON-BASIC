# 📘 MATEMATIKA UNTUK DATA SCIENCE & AI

---

## 1. ALJABAR LINIER: BAHASA DASAR MACHINE LEARNING
- **Skalar ($0D$):** Angka tunggal, misal: $x = 5$.
- **Vektor ($1D$):** Kumpulan angka satu dimensi, merepresentasikan 1 baris sampel fitur data: $\mathbf{x} = [x_1, x_2, x_3]$.
- **Matriks ($2D$):** Tabel data dengan baris (sampel) dan kolom (fitur): $\mathbf{X} \in \mathbb{R}^{m \times n}$.
- **Tensor ($3D+$):** Array berdimensi 3 atau lebih (misal: Gambar RGB = [Height, Width, 3]).

### Operasi Kritis:
- **Dot Product (Perkalian Titik):**
  $$\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^n a_i b_i$$
  *Aplikasi:* Perhitungan neuron forward pass: $z = \mathbf{w} \cdot \mathbf{x} + b$.
- **Perkalian Matriks:** Syarat kolom matriks $A$ harus sama dengan baris matriks $B$ ($[m \times k] \times [k \times n] = [m \times n]$).

---

## 2. KALKULUS: MESIN OPTIMASI (GRADIENT DESCENT)
- **Turunan (Derivative):** Laju perubahan instan fungsi $f(x)$ terhadap $x$.
- **Turunan Parsial:** Laju perubahan fungsi multi-variabel terhadap salah satu variabel saja (variabel lain dianggap konstan).
- **Gradien ($\nabla$):** Vektor seluruh turunan parsial. Menunjukkan arah tanjakan paling curam.
- **Aturan Rantai (Chain Rule):**
  $$\frac{dz}{dx} = \frac{dz}{dy} \cdot \frac{dy}{dx}$$
  *Aplikasi:* Algoritma **Backpropagation** pada Neural Network (Deep Learning).

---

## 3. PROBABILITAS: MENANGANI KETIDAKPASTIAN
- **Probabilitas Bersyarat & Teorema Bayes:**
  $$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$
  *Aplikasi:* Algoritma klasifikasi Naive Bayes dan inferensi Bayesian.
