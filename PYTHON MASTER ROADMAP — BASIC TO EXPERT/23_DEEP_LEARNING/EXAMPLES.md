# 💡 CONTOH CODE: KLASIFIKASI DENGAN PYTORCH

```python
import torch
import torch.nn as nn
import torch.optim as optim

# 1. Definisi Arsitektur Model berbasis OOP (nn.Module)
class SimpleClassifier(nn.Module):
    def __init__(self, input_features: int, hidden_units: int, num_classes: int):
        super().__init__()
        self.network = nn.Sequential(
            nn.Linear(input_features, hidden_units),
            nn.ReLU(),
            nn.Dropout(p=0.2),  # Regularisasi
            nn.Linear(hidden_units, num_classes)
        )
        
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.network(x)

# 2. Setup Data Dummy, Loss Function, dan Optimizer
model = SimpleClassifier(input_features=20, hidden_units=64, num_classes=2)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 3. Training Loop Standar PyTorch
X_dummy = torch.randn(100, 20)
y_dummy = torch.randint(0, 2, (100,))

model.train()
for epoch in range(10):
    optimizer.zero_grad()           # 1. Reset gradien sebelumnya
    predictions = model(X_dummy)   # 2. Forward pass
    loss = criterion(predictions, y_dummy)  # 3. Hitung loss
    loss.backward()                 # 4. Backward pass (hitung gradien)
    optimizer.step()                # 5. Update bobot model
    
    print(f"Epoch {epoch+1}/10 | Loss: {loss.item():.4f}")
```
