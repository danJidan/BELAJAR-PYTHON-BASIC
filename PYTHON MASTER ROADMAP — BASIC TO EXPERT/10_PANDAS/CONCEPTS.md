# 📘 PANDAS COMPLETE GUIDE

### 1. Seleksi Data: `loc` vs `iloc`
- `df.loc[label_baris, nama_kolom]`: Berdasarkan label/nama indeks.
- `df.iloc[indeks_angka_baris, indeks_angka_kolom]`: Berdasarkan posisi integer angka (0, 1, 2...).

### 2. GroupBy & Multi-Aggregation
```python
import pandas as pd

df = pd.DataFrame({
    "Cabang": ["Jakarta", "Jakarta", "Surabaya", "Surabaya", "Bandung"],
    "Kategori": ["Elektronik", "Fashion", "Elektronik", "Fashion", "Fashion"],
    "Penjualan": [15000000, 4500000, 12000000, 3000000, 5000000]
})

laporan = df.groupby(["Cabang", "Kategori"])["Penjualan"].agg(["count", "mean", "sum"])
print(laporan)
```

### 3. Merging & Joining (Relational Wrangling)
```python
# Mirip SQL INNER JOIN
df_merged = pd.merge(df_orders, df_customers, on="customer_id", how="left")
```
