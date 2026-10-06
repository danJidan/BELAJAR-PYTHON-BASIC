# 📘 ARSITEKTUR RETRIEVAL-AUGMENTED GENERATION (RAG)

### Kenapa RAG Kritis untuk Perusahaan?
Model LLM memiliki dua kelemahan fatal:
1. **Halusinasi:** Memberikan jawaban yang terdengar meyakinkan padahal fakta salah.
2. **Knowledge Cutoff:** Tidak mengetahui data privat perusahaan atau informasi terkini.

RAG menyelesaikan masalah ini dengan menyuntikkan dokumen relevan ke dalam prompt LLM sebagai konteks rujukan sebelum LLM menghasilkan jawaban.

```
Dokumen Perusahaan (PDF/Doc)
       │
       ▼ (1. Chunking teks)
Teks Potongan (Chunks)
       │
       ▼ (2. Embedding Model)
Vektor Densitas Tinggi (Float Arrays)
       │
       ▼ (3. Simpan di Vector Database)
Vector DB (ChromaDB / Qdrant)

--- RUNTIME PENGGUNA ---
Pertanyaan User ──► [Embed Query] ──► [Kosinus Similaritas di Vector DB]
                                                  │
                                                  ▼
                                      Ambil Top-3 Chunks Relevan
                                                  │
                                                  ▼
Prompt: "Jawab hanya berdasarkan konteks berikut: {Chunks} | Soal: {Query}"
                                                  │
                                                  ▼
                                          Jawaban Akurat dari LLM
```
