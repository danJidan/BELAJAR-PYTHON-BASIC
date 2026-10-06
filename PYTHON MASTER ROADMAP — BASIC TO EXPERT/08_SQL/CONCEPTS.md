# 📘 SINTAKS & POLA QUERY SQL ANALITIK

---

## 1. ANATOMI QUERY SQL DASAR S/D INTERMEDIATE
```sql
SELECT
    kategori,
    COUNT(id_transaksi) AS total_transaksi,
    ROUND(AVG(total_belanja), 2) AS rata_rata_belanja
FROM transaksi
WHERE status = 'SUCCESS' AND tanggal >= '2026-01-01'
GROUP BY kategori
HAVING total_transaksi > 50
ORDER BY rata_rata_belanja DESC
LIMIT 10;
```

---

## 2. ADVANCED SQL: CTE & WINDOW FUNCTIONS [MUST MASTER]

### Common Table Expression (CTE)
Menjadikan query kompleks terbaca bersih dan terstruktur:
```sql
WITH data_bulanan AS (
    SELECT
        DATE_TRUNC('month', order_date) AS bulan,
        customer_id,
        SUM(amount) AS total_spent
    FROM orders
    GROUP BY 1, 2
)
SELECT
    bulan,
    AVG(total_spent) AS avg_customer_value
FROM data_bulanan
GROUP BY bulan
ORDER BY bulan ASC;
```

### Window Functions (ROW_NUMBER, RANK, LEAD, LAG)
Melakukan kalkulasi lintas baris tanpa mereduksi jumlah baris (tanpa GROUP BY):
```sql
SELECT
    employee_id,
    department_id,
    salary,
    -- Peringkat gaji tertinggi per departemen
    DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank_gaji,
    -- Selisih dengan gaji karyawan sebelumnya
    salary - LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary ASC) AS diff_prev
FROM employees;
```
