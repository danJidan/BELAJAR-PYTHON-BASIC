# ⚡ 28_AI_ENGINEERING (FASTAPI & SERVING) [MUST MASTER]
Membangun Web API Berkecepatan Tinggi untuk Model AI/ML: FastAPI, Validasi Schema Pydantic, Asynchronous Inference, dan Autentikasi API Key / JWT.

## 📂 CONTOH SERVICE FASTAPI
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="ML Scoring API", version="1.0.0")

class CustomerInput(BaseModel):
    age: int = Field(..., ge=18, le=100, description="Usia pelanggan")
    annual_income: float = Field(..., gt=0)
    credit_score: int = Field(..., ge=300, le=850)

class PredictionOutput(BaseModel):
    risk_level: str
    approval_probability: float

@app.post("/predict", response_model=PredictionOutput)
async def predict_credit(customer: CustomerInput):
    # Logika inferensi model (dummy)
    prob = 0.85 if customer.credit_score > 650 else 0.35
    risk = "LOW" if prob > 0.5 else "HIGH"
    return PredictionOutput(risk_level=risk, approval_probability=prob)
```
