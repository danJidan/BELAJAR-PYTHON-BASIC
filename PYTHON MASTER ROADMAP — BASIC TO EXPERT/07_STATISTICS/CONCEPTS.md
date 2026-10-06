# 📘 KONSEP LENGKAP: STATISTIK UNTUK DATA ANALYST & ML

---

## 1. STATISTIK DESKRIPTIF (UKURAN PEMUSATAN & PENYEBARAN)
- **Mean (Rata-rata):** Sensitif terhadap nilai ekstrem / outlier.
- **Median (Nilai Tengah):** Robust terhadap outlier. Gunakan median jika data skewed (menceng).
- **Mode (Modus):** Nilai yang paling sering muncul (berguna untuk data kategorikal).
- **Variansi ($\sigma^2$) & Standar Deviasi ($\sigma$):** Mengukur seberapa jauh sebaran data dari nilai rata-ratanya.
- **Interquartile Range (IQR):** Jarak antara Kuartil 3 (Q3 - 75%) dan Kuartil 1 (Q1 - 25%).
  $$\text{Batas Bawah} = Q1 - 1.5 \times IQR, \quad \text{Batas Atas} = Q3 + 1.5 \times IQR$$
  *Sangat efektif untuk mendeteksi outlier pada boxplot!*

---

## 2. STATISTIK INFERENSIAL & UJI HIPOTESIS (A/B TESTING)
- **Hipotesis Nol ($H_0$):** Pernyataan bahwa tidak ada perbedaan/efek nyata (status quo).
- **Hipotesis Alternatif ($H_1$):** Pernyataan bahwa ada efek/perubahan signifikan.
- **P-Value:** Probabilitas memperoleh hasil yang sama atau lebih ekstrem jika $H_0$ benar.
  - Jika $p \le 0.05$ (Alpha $\alpha = 5\%$): Tolak $H_0$ (Perbedaan signifikan secara statistik).
  - Jika $p > 0.05$: Gagal menolak $H_0$.
