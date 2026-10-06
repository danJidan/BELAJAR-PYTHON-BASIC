# 💡 INTEGRASI PYTHON + SQL + PANDAS

```python
import sqlite3
import pandas as pd

# 1. Membuat Database In-Memory SQLite untuk Analisis Cepat
conn = sqlite3.connect(":memory:")

# 2. Menyiapkan Dummy Data Transaksi
df_raw = pd.DataFrame({
    "transaksi_id": [101, 102, 103, 104, 105],
    "user_id": [1, 2, 1, 3, 2],
    "amount": [150000, 300000, 75000, 500000, 120000],
    "status": ["PAID", "PAID", "FAILED", "PAID", "PAID"]
})
df_raw.to_sql("transaksi", conn, index=False)

# 3. Menjalankan Query SQL via Pandas
query = """
SELECT 
    user_id,
    COUNT(transaksi_id) AS frekuensi_beli,
    SUM(amount) AS total_omset
FROM transaksi
WHERE status = 'PAID'
GROUP BY user_id
ORDER BY total_omset DESC;
"""

df_hasil = pd.read_sql_query(query, conn)
print("=== HASIL QUERY VIA PANDAS ===")
print(df_hasil)
conn.close()
```
