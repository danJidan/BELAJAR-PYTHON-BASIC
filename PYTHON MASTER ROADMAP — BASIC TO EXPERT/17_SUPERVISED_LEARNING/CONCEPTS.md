# 📘 KATALOG ALGORITMA SUPERVISED LEARNING LENGKAP

---

## 1. LINEAR REGRESSION, RIDGE & LASSO
- **Linear Regression:** Mencari garis/bidang $y = \mathbf{w}X + b$ dengan meminimalkan Ordinary Least Squares (MSE).
- **Ridge (L2 Regularization):** Menambahkan penalti $\lambda \sum w_i^2$. Mencegah bobot terlalu besar, cocok jika terjadi multikolinearitas.
- **Lasso (L1 Regularization):** Menambahkan penalti $\lambda \sum |w_i|$. Mampu membuat bobot fitur menjadi tepat 0 (berfungsi sebagai *automatic feature selection*).

---

## 2. LOGISTIC REGRESSION (KLASIFIKASI BINER)
- Menggunakan fungsi Sigmoid $\sigma(z) = \frac{1}{1 + e^{-z}}$ untuk memetakan hasil linear ke rentang probabilitas $0$ sampai $1$.
- **Kapan digunakan:** Baseline model pertama untuk klasifikasi biner karena sangat cepat dan memiliki interpretasi tinggi (Odds Ratio).

---

## 3. TREE-BASED & ENSEMBLE: RANDOM FOREST & GRADIENT BOOSTING
- **Decision Tree:** Membagi data secara rekursif berdasarkan kriteria kemurnian (*Gini Impurity* atau *Entropy*). Rawan overfitting jika dibiarkan terlalu dalam.
- **Random Forest (Bagging):** Membangun ratusan Decision Tree secara paralel dengan subset data & fitur acak (Bootstrap Aggregating). Sangat stabil dan tahan overfitting.
- **XGBoost & LightGBM (Gradient Boosting):** Pohon dibangun secara sekuensial; setiap pohon baru bertugas mengoreksi error/residual dari pohon sebelumnya. Standar emas kompetisi tabular (Kaggle).
