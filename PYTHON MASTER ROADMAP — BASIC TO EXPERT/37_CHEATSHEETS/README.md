# 📑 37_CHEATSHEETS: RANGKUMAN CEPAT SEMUA TEKNOLOGI

---

### 🐍 Python Quick Reference
```python
# Slicing: [start:stop:step]
nums = [0, 1, 2, 3, 4, 5]
nums[::-1]          # Reverse list: [5, 4, 3, 2, 1, 0]

# List Comprehension
[x*2 for x in nums if x % 2 == 0]

# Dict Unpacking
config = {**default_cfg, **user_override}
```

---

### 🐼 Pandas Quick Reference
```python
import pandas as pd
df = pd.read_csv("data.csv")

# Filter baris dengan kondisi ganda
filtered = df[(df["usia"] > 25) & (df["gaji"] > 10000000)]

# Missing Values
df.dropna(subset=["kolom_kritis"])
df["usia"].fillna(df["usia"].median(), inplace=True)

# GroupBy & Aggregasi
df.groupby("departemen")["gaji"].agg(mean_gaji="mean", total_karyawan="count")
```

---

### 🗄️ SQL Quick Reference
```sql
-- CTE & Window Function
WITH RankedSales AS (
    SELECT 
        sales_id,
        sales_person,
        amount,
        DENSE_RANK() OVER (ORDER BY amount DESC) as rank_penjualan
    FROM sales
)
SELECT * FROM RankedSales WHERE rank_penjualan <= 5;
```

---

### 🤖 Scikit-Learn Pipeline Quick Reference
```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("classifier", RandomForestClassifier(n_estimators=100, random_state=42))
])
pipeline.fit(X_train, y_train)
accuracy = pipeline.score(X_test, y_test)
```
