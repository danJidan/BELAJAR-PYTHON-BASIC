# 💡 CONTOH CODE: SUPERVISED LEARNING PIPELINE DENGAN XGBOOST

```python
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, roc_auc_score
from xgboost import XGBClassifier

# 1. Load Dataset
data = load_breast_cancer()
X, y = data.data, data.target

# 2. Train-Test Split Terpisah (Stratified)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42, stratify=y
)

# 3. Preprocessing (Fit hanya pada Train!)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. Training Model XGBoost
model = XGBClassifier(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=4,
    random_state=42,
    eval_metric="logloss"
)
model.fit(X_train_scaled, y_train)

# 5. Prediksi & Evaluasi
y_pred = model.predict(X_test_scaled)
y_proba = model.predict_proba(X_test_scaled)[:, 1]

print("=== LAPORAN KLASIFIKASI XGBOOST ===")
print(classification_report(y_test, y_pred, target_names=data.target_names))
print(f"ROC-AUC Score: {roc_auc_score(y_test, y_proba):.4f}")
```
