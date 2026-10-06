# 💡 IMPLEMENTASI MATEMATIKA DATA DENGAN PYTHON MURNI

```python
# Dot Product Manual vs NumPy
def manual_dot_product(vec_a: list[float], vec_b: list[float]) -> float:
    if len(vec_a) != len(vec_b):
        raise ValueError("Dimensi vektor harus sama!")
    return sum(a * b for a, b in zip(vec_a, vec_b))

v1 = [2.0, 3.0, 4.0]
v2 = [1.0, 0.5, -1.0]
print("Manual Dot Product:", manual_dot_product(v1, v2))  # 2.0*1 + 3.0*0.5 + 4.0*-1 = -0.5

# Gradient Descent Sederhana untuk f(x) = x^2 - 4x + 4 (Minima di x = 2)
def df(x: float) -> float:
    return 2 * x - 4  # Turunan dari f(x)

x = 10.0  # Tebakan awal
learning_rate = 0.1
for step in range(30):
    grad = df(x)
    x = x - (learning_rate * grad)

print(f"Nilai x minimum hasil optimasi: {x:.4f}")  # Mendekati 2.0000
```
