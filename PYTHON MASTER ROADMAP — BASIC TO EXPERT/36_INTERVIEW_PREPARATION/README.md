# 🎯 36_INTERVIEW_PREPARATION: BANK SOAL & JAWABAN TEKNIS

---

## 1. PYTHON CORE INTERVIEW QUESTIONS

### Q1: Apa perbedaan antara `is` dan `==` di Python?
**Jawaban:**
- `==` memeriksa **kesetaraan nilai** (equality of value).
- `is` memeriksa **kesetaraan identitas memori** (apakah kedua variabel menunjuk ke objek yang sama di RAM, dicek via `id(a) == id(b)`).
```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # True (nilainya sama)
print(a is b)  # False (dua list berbeda di RAM)
```

### Q2: Bagaimana Python mengelola memori dan apa itu GIL?
**Jawaban:**
- **Manajemen Memori:** Python menggunakan mekanisme *Reference Counting*. Setiap objek memiliki penghitung berapa kali ia dirujuk. Jika hitungan = 0, memori langsung dibebaskan. Untuk menangani siklus melingkar (*circular reference*), Python memiliki *Generational Garbage Collector*.
- **GIL (Global Interpreter Lock):** Mutex di CPython yang memastikan hanya satu thread yang mengeksekusi bytecode Python pada satu waktu. Akibatnya, multi-threading di Python murni tidak mempercepat komputasi CPU-bound (gunakan modul `multiprocessing` untuk CPU-bound).

---

## 2. DATA ANALYST & SQL INTERVIEW QUESTIONS

### Q3: Kapan kita memilih Median daripada Mean?
**Jawaban:**
Mean sangat rentan terhadap pencilan (*outliers*) dan distribusi data yang menceng (*skewed*), seperti data gaji atau harga rumah. Dalam situasi tersebut, Median adalah ukuran pemusatan yang jauh lebih representatif karena kebal terhadap nilai ekstrem.

### Q4: Apa perbedaan antara `ROW_NUMBER()`, `RANK()`, dan `DENSE_RANK()` di SQL?
**Jawaban:**
Jika ada nilai seri/kembar:
- `ROW_NUMBER()`: Memberikan nomor unik berurutan tanpa peduli ada nilai kembar (misal: 1, 2, 3, 4).
- `RANK()`: Memberikan peringkat yang sama untuk nilai kembar, tetapi melompati urutan berikutnya (misal: 1, 2, 2, 4).
- `DENSE_RANK()`: Memberikan peringkat yang sama untuk nilai kembar tanpa melompati urutan berikutnya (misal: 1, 2, 2, 3).

---

## 3. MACHINE LEARNING INTERVIEW QUESTIONS

### Q5: Kapan kita memprioritaskan Recall dibanding Precision?
**Jawaban:**
Recall diprioritaskan saat **False Negative sangat mahal atau berbahaya** dibandingkan False Positive.
- *Contoh Medis:* Memprediksi penyakit kanker ganas. Lebih baik salah menduga orang sehat sebagai sakit (False Positive, nanti bisa diklarifikasi tes ulang), daripada menduga orang sakit sebagai sehat (False Negative, pasien tidak diobati dan berisiko meninggal).
- *Contoh Lain:* Deteksi transaksi penipuan kartu kredit (Fraud Detection).

### Q6: Apa itu Data Leakage dan bagaimana cara mendeteksinya?
**Jawaban:**
Data Leakage terjadi saat informasi dari data pengujian (*test set*) secara tidak sengaja masuk ke proses pelatihan model (*training set*).
- *Tanda Utama:* Model mendapatkan akurasi 99.9% di notebook saat training, tetapi performanya anjlok total saat diuji pada data baru di dunia nyata.
- *Pencegahan:* Selalu pisahkan Train/Test split sebelum proses imputasi, scaling, atau feature engineering, dan bungkus alur dalam Scikit-Learn `Pipeline`.

---

## 4. AI & LLM INTERVIEW QUESTIONS

### Q7: Bagaimana cara mengurangi halusinasi pada aplikasi berbasis LLM?
**Jawaban:**
1. **RAG (Retrieval-Augmented Generation):** Berikan dokumen referensi terpercaya ke dalam context window model.
2. **Grounding Prompt:** Instruksikan model dengan tegas: *"Jawab HANYA berdasarkan konteks yang diberikan. Jika informasi tidak ada di konteks, katakan bahwa Anda tidak tahu."*
3. **Menurunkan Temperature:** Atur `temperature = 0.0` atau mendekati 0 untuk output yang lebih deterministik dan faktual.
4. **Structured Output Validation:** Gunakan Pydantic / Json Schema validator untuk memastikan format keluaran terverifikasi secara sintaksis dan semantik.
