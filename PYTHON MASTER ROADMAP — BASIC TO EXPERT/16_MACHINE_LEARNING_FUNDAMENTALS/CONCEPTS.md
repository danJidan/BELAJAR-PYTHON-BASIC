# 📘 FUNDAMENTAL MACHINE LEARNING

### 1. Paradigma Pemrograman Tradisional vs Machine Learning
- **Traditional Programming:** Data + Rules (Logika If-Else yang ditulis programmer) $\rightarrow$ **Answers**.
- **Machine Learning:** Data + Answers (Label Jawaban Sebenarnya) $\rightarrow$ **Rules / Patterns (Model)**.

### 2. Tiga Kategori Utama Machine Learning
1. **Supervised Learning:** Data input memiliki target label ($y$). Tujuan: Memetakan $X \rightarrow y$.
   - *Regresi:* Target kontinu (misal: memprediksi harga rumah).
   - *Klasifikasi:* Target diskrit / kategori (misal: memprediksi email spam vs bukan spam).
2. **Unsupervised Learning:** Data tidak memiliki label target. Tujuan: Menemukan pola tersembunyi, klaster, atau reduksi dimensi.
   - *Clustering:* Mengelompokkan pelanggan dengan kemiripan perilaku (K-Means).
   - *Dimensionality Reduction:* Meringkas 100 fitur menjadi 10 komponen utama (PCA).
3. **Reinforcement Learning:** Agen belajar melalui interaksi dengan lingkungan via sistem *Reward* dan *Penalty*.

### 3. Golden Rule: Mencegah Data Leakage (Kebocoran Data)
Data testing **TIDAK BOLEH** pernah terlihat oleh proses preprocessing / scaling. Lakukan split Train & Test terlebih dahulu, baru terapkan fit transform pada Train, dan transform saja pada Test!
