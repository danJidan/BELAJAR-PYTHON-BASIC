# 🎯 20_MODEL_EVALUATION & DIAGNOSTICS [MUST MASTER]

### Metrik Klasifikasi:
- **Accuracy:** Cocok hanya jika kelas seimbang.
- **Precision:** $\frac{TP}{TP + FP}$ (Kritis saat False Positive berbahaya, misal filter spam email).
- **Recall / Sensitivity:** $\frac{TP}{TP + FN}$ (Kritis saat False Negative berbahaya, misal diagnosis kanker/deteksi fraud).
- **F1-Score:** Harmonic mean antara Precision dan Recall.
- **ROC-AUC & PR-AUC:** Mengukur performa di semua threshold klasifikasi.

### Metrik Regresi:
- **MAE:** Rata-rata error absolut (mudah dipahami stakeholder).
- **RMSE:** Menghukum error besar lebih keras karena dikuadratkan.
- **$R^2$ Score:** Persentase variansi target yang dapat dijelaskan oleh fitur model.
