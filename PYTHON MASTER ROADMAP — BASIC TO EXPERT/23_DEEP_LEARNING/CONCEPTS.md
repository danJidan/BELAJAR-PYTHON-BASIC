# 📘 ARSITEKTUR DEEP LEARNING DENGAN PYTORCH

### 1. Anatomi Neuron & Forward Propagation
- Setiap neuron menghitung kombinasi linear dari input:
  $$z = \sum_{i=1}^n w_i x_i + b = \mathbf{w}^T \mathbf{x} + b$$
- Output dilewatkan ke fungsi aktivasi non-linear:
  $$a = \sigma(z)$$
  *Non-linearitas wajib ada agar neural network mampu memodelkan data non-linear (Universal Approximation Theorem).*

### 2. Fungsi Aktivasi Utama:
- **ReLU (Rectified Linear Unit):** $f(x) = \max(0, x)$. Standar utama hidden layer karena tidak mengalami vanishing gradient saat $x > 0$.
- **Sigmoid:** Output antara 0 dan 1 (cocok untuk output layer klasifikasi biner).
- **Softmax:** Output berupa distribusi probabilitas multi-kelas dengan total jumlah probabilitas tepat = 1.0.

### 3. PyTorch Autograd & Backpropagation
PyTorch melacak semua operasi kalkulus pada Tensor dengan atribut `requires_grad=True`. Ketika fungsi rugi (*loss*) dihitung, memanggil `loss.backward()` secara otomatis menghitung gradien $\frac{\partial \text{Loss}}{\partial \mathbf{w}}$ menggunakan Aturan Rantai (Chain Rule).
