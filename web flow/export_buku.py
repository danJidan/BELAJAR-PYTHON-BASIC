# export_buku.py
"""
Script Generator E-Book & Modul Pembelajaran Flowchart Lengkap
Menghasilkan:
1. buku.html (Website Buku Mandiri / Cetak PDF Seluruh Bab)
2. BUKU_PANDUAN_MATERI_FLOWCHART.md (Dokumen Markdown Lengkap)
"""

import os
import json
import re

from content_bab1_3 import get_bab1, get_bab2, get_bab3
from content_bab4_6 import get_bab4, get_bab5, get_bab6
from content_bab7 import get_bab7
from content_bab8_9 import get_bab8, get_bab9
from content_bab10_12 import get_bab10, get_bab11, get_bab12

# Kumpulkan semua bab
chapters = [
    get_bab1(),
    get_bab2(),
    get_bab3(),
    get_bab4(),
    get_bab5(),
    get_bab6(),
    get_bab7(),
    get_bab8(),
    get_bab9(),
    get_bab10(),
    get_bab11(),
    get_bab12()
]

metadata = {
    "title": "FLOWCHART: Konsep Dasar, Simbol, Jenis, Algoritma, dan Implementasi dalam Pemrograman",
    "subtitle": "Buku Panduan & Modul Pembelajaran Terpadu Komprehensif Berbasis Standar ANSI/ISO",
    "author": "Instruktur Algoritma & Pemrograman — Modul Terpadu Informatika",
    "audience": "Pelajar, Mahasiswa Ilmu Komputer/Informatika, Guru/Dosen, & Calon Software Engineer",
    "edition": "Edisi Lengkap Revisi 2.0 (Oktober 2026)",
    "license": "Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)",
    "year": "2026"
}

def clean_html_for_markdown(html_text):
    if not html_text:
        return ""
    text = html_text
    # Simple tag cleanup or conversion if needed
    text = re.sub(r'</?(?:div|span|article|section|header|footer)[^>]*>', '', text)
    text = text.replace('&nbsp;', ' ')
    text = text.replace('&times;', '×')
    text = text.replace('&le;', '≤')
    text = text.replace('&ge;', '≥')
    text = text.replace('&ne;', '≠')
    text = text.replace('&larr;', '←')
    text = text.replace('&rarr;', '→')
    text = text.replace('&plusmn;', '±')
    text = text.replace('&pi;', 'π')
    return text.strip()

def generate_markdown():
    md = []
    md.append(f"# 📘 {metadata['title']}\n")
    md.append(f"> **{metadata['subtitle']}**  \n")
    md.append(f"* **Penulis / Penyusun:** {metadata['author']}")
    md.append(f"* **Sasaran Pembaca:** {metadata['audience']}")
    md.append(f"* **Edisi:** {metadata['edition']}")
    md.append(f"* **Lisensi Dokumen:** {metadata['license']}")
    md.append(f"* **Tahun Terbit:** {metadata['year']}\n")
    md.append("---\n")

    # Table of contents
    md.append("## 📑 DAFTAR ISI BUKU\n")
    for i, ch in enumerate(chapters, 1):
        md.append(f"{i}. [**{ch['num']} — {ch['title']}**](#{ch['id']}): *{ch['subtitle']}*")
    md.append("\n---\n")

    # Chapter contents
    for ch in chapters:
        md.append(f"<a id='{ch['id']}'></a>")
        md.append(f"# {ch['num']} — {ch['title'].upper()}\n")
        md.append(f"> *{ch['subtitle']}*\n")

        if "learningGoals" in ch and ch["learningGoals"]:
            md.append("### 🎯 Tujuan Pembelajaran:")
            for g in ch["learningGoals"]:
                md.append(f"- {g}")
            md.append("\n")

        # Sections
        if "sections" in ch:
            for sec in ch["sections"]:
                md.append(f"## {sec['title']}\n")
                md.append(clean_html_for_markdown(sec["content"]))
                md.append("\n")

        # Bab 7: 20 Examples
        if ch["id"] == "bab7" and "examples" in ch:
            md.append("## 📚 KUMPULAN 20 CONTOH STUDI KASUS LENGKAP\n")
            for ex in ch["examples"]:
                md.append(f"### Kasus #{ex['no']}: {ex['title']} ({ex['level']})\n")
                md.append(f"**Deskripsi Kasus:** {ex['desc']}\n")
                md.append("| Komponen | Keterangan |")
                md.append("|---|---|")
                md.append(f"| **Input** | `{ex['input']}` |")
                md.append(f"| **Proses** | `{ex['process']}` |")
                md.append(f"| **Output** | `{ex['output']}` |\n")
                
                md.append("#### 📐 Bagan Alir (Mermaid):")
                md.append("```mermaid")
                md.append(ex['mermaid'].strip())
                md.append("```\n")

                md.append("#### 💻 Implementasi Kode Python 3:")
                md.append("```python")
                md.append(ex['python'].strip())
                md.append("```\n")

                md.append(f"**🧪 Simulasi Uji Meja:**")
                md.append(f"- **Kasus Normal:** {ex['simNormal']}")
                md.append(f"- **Kasus Alternatif/Batas:** {ex['simAlt']}\n")
                md.append("---\n")

        # Bab 9: 10 Mistakes
        if ch["id"] == "bab9" and "mistakes" in ch:
            md.append("## ⚠️ 10 KESALAHAN UMUM & SOLUSI DEBUGGING\n")
            for m in ch["mistakes"]:
                md.append(f"### Kesalahan #{m['no']}: {m['title']}\n")
                md.append(f"- ❌ **Praktik yang Salah:** {m['bad']}")
                md.append(f"- ⚠️ **Penyebab & Dampak:** {m['why']}")
                md.append(f"- ✅ **Solusi & Perbaikan:** {m['fix']}\n")

        # Bab 10: Quizzes & Evaluation
        if ch["id"] == "bab10":
            md.append("## 📝 EVALUASI PEMBELAJARAN & KUNCI PEMBAHASAN\n")
            
            md.append("### Bagian A: 15 Soal Pilihan Ganda\n")
            for q in ch.get("pgQuestions", []):
                md.append(f"**{q['id']}. {q['q']}**")
                ops = ["A", "B", "C", "D"]
                for oi, opt in enumerate(q['options']):
                    marker = "✓" if oi == q['ans'] else " "
                    md.append(f"   - [{marker}] **{ops[oi]}.** {opt}")
                correct_letter = ops[q['ans']]
                md.append(f"\n> **Kunci Jawaban:** **{correct_letter}** — *{q['exp']}*\n")

            md.append("### Bagian B: 10 Soal Benar / Salah\n")
            for q in ch.get("bsQuestions", []):
                ans_str = "BENAR" if q['ans'] else "SALAH"
                md.append(f"**{q['id']}.** {q['q']}")
                md.append(f"> **Jawaban:** **{ans_str}** — *{q['exp']}*\n")

            md.append("### Bagian C: 10 Latihan Identifikasi Simbol Visual\n")
            for s in ch.get("symbolQuestions", []):
                md.append(f"- **Bentuk:** {s['shape']} ➔ **Simbol:** {s['ans']}")
            md.append("\n")

            md.append("### Bagian D: Tantangan Debugging Logika\n")
            for d in ch.get("debuggingExercises", []):
                md.append(f"**#{d['no']}. {d['title']}**")
                md.append(f"- *Masalah:* {d['problem']}")
                md.append(f"- *Solusi:* {d['solution']}\n")

            md.append("### Bagian E: Mini Proyek Mandiri\n")
            for p in ch.get("miniProjects", []):
                md.append(f"**Proyek #{p['no']}: {p['title']}**")
                md.append(f"- *Tugas:* {p['task']}\n")

        # Bab 11: Enterprise Projects
        if ch["id"] == "bab11" and "projects" in ch:
            md.append("## 🏢 TIGA PROYEK AKHIR TINGKAT ENTERPRISE\n")
            for p in ch["projects"]:
                md.append(f"### {p['title']}\n")
                md.append(f"* **Latar Belakang:** {p['bg']}")
                md.append(f"* **Rumusan Masalah:** {p['problem']}")
                md.append(f"* **Kebutuhan I/O:** `{p['io']}`")
                md.append(f"* **Aturan Bisnis:** {p['rules']}\n")

                md.append("#### 📐 Arsitektur Flowchart:")
                md.append("```mermaid")
                md.append(p['mermaid'].strip())
                md.append("```\n")

                md.append("#### 📝 Pseudocode Standar:")
                md.append("```")
                md.append(p['pseudo'].strip())
                md.append("```\n")

                md.append(f"> ⚖️ **Rubrik Penilaian:** {p['rubric']}\n")
                md.append("---\n")

        # Bab 12: Glossary, QA Checklist, References
        if ch["id"] == "bab12":
            md.append("## 12.1 Glosarium Istilah Penting (A - Z)\n")
            md.append("| Istilah Teknis | Definisi & Penjelasan Ilmiah |")
            md.append("|---|---|")
            for g in ch.get("glossary", []):
                md.append(f"| **{g['term']}** | {g['def']} |")
            md.append("\n")

            md.append("## 12.2 Checklist Mutu Pemeriksaan Flowchart (QA Checklist)\n")
            for q in ch.get("qaChecklist", []):
                md.append(f"- [x] {q}")
            md.append("\n")

            md.append("## 12.3 Daftar Pustaka Resmi & Referensi Standar\n")
            for r in ch.get("references", []):
                md.append(f"1. **{r['title']}** — *{r['author']}*. {r['note']} [Buka Tautan]({r['url']})")
            md.append("\n")

        md.append("\n---\n")

    return "\n".join(md)

def build_buku_html():
    """
    Menghasilkan buku.html yang elegan, mandiri, lengkap dengan SVG Symbols,
    Mermaid.js rendering, responsive dark/light mode, dan tombol Cetak ke PDF.
    """
    html = f"""<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Buku Panduan & Modul Materi Lengkap Flowchart: Konsep Dasar, Simbol ANSI/ISO, Jenis, Algoritma, 20 Studi Kasus, dan Implementasi Pemrograman Python.">
  <meta name="author" content="{metadata['author']}">
  <title>BUKU MATERI LENGKAP: {metadata['title']}</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

  <!-- Core & Book Stylesheets -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/flowchart.css">
  <link rel="stylesheet" href="css/quiz.css">
  <link rel="stylesheet" href="css/book.css">

  <!-- Mermaid.js for Vector Diagram Rendering -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    if (window.mermaid) {{
      mermaid.initialize({{
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {{
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis'
        }}
      }});
    }}
  </script>
</head>
<body class="book-body">

  <!-- Floating Sticky Action Toolbar (Hidden during Print) -->
  <div class="book-toolbar no-print">
    <div class="toolbar-left">
      <a href="index.html" class="btn btn-outline btn-sm">
        🏠 Kembali ke Web Interaktif
      </a>
      <span class="toolbar-divider"></span>
      <select id="toc-quick-select" class="toc-select" onchange="jumpToChapter(this.value)">
        <option value="">📑 Lompat ke Bab...</option>
        <option value="cover">Sampul Buku</option>
        <option value="toc">Daftar Isi</option>
"""
    for ch in chapters:
        html += f'        <option value="{ch["id"]}">{ch["num"]}: {ch["title"]}</option>\n'

    html += f"""      </select>
    </div>
    <div class="toolbar-right">
      <button type="button" class="btn btn-primary btn-sm" onclick="window.print()" title="Cetak atau Simpan PDF seluruh buku">
        🖨️ Cetak / Simpan PDF
      </button>
      <button type="button" class="btn btn-outline btn-sm" id="book-theme-btn" onclick="toggleBookTheme()" title="Ganti Tema">
        🌙 Mode Gelap
      </button>
      <a href="BUKU_PANDUAN_MATERI_FLOWCHART.md" download="BUKU_PANDUAN_MATERI_FLOWCHART.md" class="btn btn-secondary btn-sm" title="Unduh File Markdown">
        📥 Unduh .MD
      </a>
    </div>
  </div>

  <!-- Injected SVG Definitions -->
  <div id="svg-defs-container"></div>

  <!-- Container Lembar Buku -->
  <div class="book-container">

    <!-- HALAMAN SAMPUL / COVER BUKU RESMI -->
    <section class="book-page book-cover" id="cover">
      <div class="cover-top-badge">
        <span class="cover-badge">MODUL KULIAH & PELATIHAN RESMI INFORMATIKA</span>
        <span class="cover-badge-ver">ISO 5807:1985 & ANSI X3.5</span>
      </div>

      <div class="cover-header">
        <div class="cover-icon">📊</div>
        <h1 class="cover-title">FLOWCHART</h1>
        <h2 class="cover-subtitle">Konsep Dasar, Simbol, Jenis, Algoritma, dan Implementasi dalam Pemrograman</h2>
        <div class="cover-decoration-line"></div>
        <p class="cover-tagline">Panduan Belajar Terpadu dari Tingkat Pemula hingga Mahir Dilengkapi 20 Kasus Komputasi Nyata, Analisis Kode Python 3, Soal Evaluasi, dan Proyek Akhir Enterprise</p>
      </div>

      <div class="cover-meta-grid">
        <div class="meta-box">
          <span class="meta-label">PENYUSUN & INSTRUKTUR</span>
          <span class="meta-val">{metadata['author']}</span>
        </div>
        <div class="meta-box">
          <span class="meta-label">SASARAN AUDIENS</span>
          <span class="meta-val">{metadata['audience']}</span>
        </div>
        <div class="meta-box">
          <span class="meta-label">EDISI & REVISI</span>
          <span class="meta-val">{metadata['edition']}</span>
        </div>
        <div class="meta-box">
          <span class="meta-label">HAK CIPTA & LISENSI</span>
          <span class="meta-val">{metadata['license']}</span>
        </div>
      </div>

      <div class="cover-footer">
        <span>Pusat Pengembangan Kompetensi Informatika & Pemrograman Modern</span>
        <span>Tahun {metadata['year']}</span>
      </div>
    </section>

    <!-- KATA PENGANTAR & PETUNJUK BUKU -->
    <section class="book-page page-break" id="preface">
      <div class="chapter-header-formal">
        <span class="chapter-pre-num">PENGANTAR & PEDOMAN BELAJAR</span>
        <h2 class="chapter-title-formal">Kata Pengantar & Panduan Penggunaan Modul</h2>
      </div>

      <div class="book-prose">
        <p>Puji syukur ke hadirat Tuhan Yang Maha Esa, buku materi terpadu <strong>“FLOWCHART: Konsep Dasar, Simbol, Jenis, Algoritma, dan Implementasi dalam Pemrograman”</strong> dapat diselesaikan sebagai bahan ajar komprehensif berstandar industri dan akademik tinggi.</p>

        <p>Buku ini dirancang khusus untuk memandu peserta didik, mahasiswa, dan pemrogram pemula dalam menjembatani kesenjangan antara <em>ide abstrak di kepala</em> dengan <em>baris kode komputer yang dapat dieksekusi</em>. Melalui visualisasi diagram alir standar ANSI/ISO, logika komputasi yang rumit diurai menjadi tahapan terstruktur yang sistematis, mudah diverifikasi, dan bebas dari galat fatal.</p>

        <h4>Keunggulan Khusus Buku Materi Ini:</h4>
        <ul class="book-list">
          <li><strong>Akurasi Standar Internasional:</strong> Membahas tuntas 18+ simbol ANSI/ISO dengan presisi grafis vektor beresolusi tinggi.</li>
          <li><strong>Pembahasan Teori & Praktik Seimbang:</strong> Menguraikan kaidah baku penyusunan, contoh salah vs benar, dekomposisi I-P-O, serta teknik Uji Meja (Trace Table).</li>
          <li><strong>20 Studi Kasus Komprehensif:</strong> Mulai dari algoritma aritmetika dasar, algoritma diskon kasir, validasi PIN ATM, hingga checkout e-commerce dunia nyata dengan sinkronisasi kode Python 3.</li>
          <li><strong>Bank Evaluasi & Kunci Pembahasan:</strong> Dilengkapi 15 soal pilihan ganda berpenjelasan lengkap, 10 uji benar/salah, tebak simbol, tantangan debugging, dan 3 proyek akhir enterprise.</li>
        </ul>

        <div class="alert alert-info" style="margin-top: 2rem;">
          <strong>💡 Tips Mempelajari Buku:</strong> Bacalah materi bab secara berurutan. Praktikkan setiap studi kasus pada Bab VII dengan menggambar ulang flowchart dan menjalankan kode Python yang disertakan pada komputer Anda.
        </div>
      </div>
    </section>

    <!-- DAFTAR ISI RESMI (TABLE OF CONTENTS) -->
    <section class="book-page page-break" id="toc">
      <div class="chapter-header-formal">
        <span class="chapter-pre-num">STRUKTUR MODUL PEMBELAJARAN</span>
        <h2 class="chapter-title-formal">Daftar Isi Buku Materi</h2>
      </div>

      <div class="toc-container">
"""
    for ch in chapters:
        badge_text = "20 Kasus" if ch['id'] == 'bab7' else ("Bank Soal" if ch['id'] == 'bab10' else ("3 Proyek" if ch['id'] == 'bab11' else "Materi"))
        html += f"""
        <div class="toc-row">
          <a href="#{ch['id']}" class="toc-link">
            <span class="toc-ch-num">{ch['num']}</span>
            <span class="toc-ch-title">{ch['title']}</span>
            <span class="toc-dots"></span>
            <span class="toc-badge-pill">{badge_text}</span>
          </a>
          <div class="toc-sub">{ch['subtitle']}</div>
        </div>
        """

    html += f"""
      </div>
    </section>
"""

    # Render All 12 Chapters
    for ch in chapters:
        html += f"""
    <!-- ==========================================
         {ch['num']}: {ch['title']}
         ========================================== -->
    <section class="book-page book-chapter page-break" id="{ch['id']}">
      <header class="chapter-header-formal">
        <div class="chapter-pill-group">
          <span class="badge badge-blue">{ch['num']}</span>
          <span class="badge badge-gray">Kurikulum Resmi</span>
        </div>
        <h2 class="chapter-title-formal">{ch['title']}</h2>
        <p class="chapter-subtitle-formal">{ch['subtitle']}</p>
      </header>
"""
        # Goals
        if "learningGoals" in ch and ch["learningGoals"]:
            html += f"""
      <div class="learning-goals-card">
        <h4>🎯 Tujuan Pembelajaran:</h4>
        <ul>
          {"".join([f"<li>{g}</li>" for g in ch["learningGoals"]])}
        </ul>
      </div>
"""
        # Standard Sections
        if "sections" in ch:
            for sec in ch["sections"]:
                html += f"""
      <section class="section-block" id="{sec['id']}">
        <h3 class="section-heading-formal">{sec['title']}</h3>
        <div class="section-body">
          {sec['content']}
        </div>
      </section>
"""

        # Special Bab 2: Symbols Gallery
        if ch["id"] == "bab2":
            html += f"""
      <div id="book-symbols-container" class="symbols-grid"></div>
"""

        # Special Bab 7: 20 Examples
        if ch["id"] == "bab7" and "examples" in ch:
            html += f"""
      <div class="examples-intro-alert alert alert-info">
        <strong>💡 Ensiklopedia 20 Kasus Komputasi:</strong> Berikut adalah dokumentasi lengkap 20 studi kasus terstruktur dari tingkat dasar, menengah, hingga sistem nyata. Setiap kasus memuat spesifikasi I-P-O, bagan alir Flowchart standar, baris kode Python 3 yang siap dijalankan, dan simulasi uji meja.
      </div>
      <div class="examples-stack">
"""
            for ex in ch["examples"]:
                html += f"""
        <div class="example-card-full feature-card" id="{ex['id']}" style="margin-bottom: 2.5rem; page-break-inside: avoid;">
          <div class="ex-card-header" style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
            <div>
              <span class="badge { 'badge-green' if ex['level'] == 'Dasar' else ('badge-amber' if ex['level'] == 'Menengah' else 'badge-red') }">
                Kasus #{ex['no']} • Tingkat {ex['level']}
              </span>
              <h3 style="margin-top:0.4rem; font-size:1.35rem; color:var(--text-main);">{ex['title']}</h3>
            </div>
          </div>
          <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1rem;">{ex['desc']}</p>
          
          <div class="table-responsive">
            <table class="table-custom">
              <tr><th style="width:20%;">Input</th><td><code>{ex['input']}</code></td></tr>
              <tr><th>Proses</th><td><code>{ex['process']}</code></td></tr>
              <tr><th>Output</th><td><code>{ex['output']}</code></td></tr>
            </table>
          </div>

          <div class="ex-tabs" style="margin-top:1.5rem;">
            <h4>📐 Bagan Alir Flowchart:</h4>
            <div class="mermaid-container">
              <pre class="mermaid">{ex['mermaid']}</pre>
            </div>

            <h4>💻 Implementasi Kode Python 3 Sinkron:</h4>
            <div class="code-wrapper">
              <div class="code-header">
                <span>Python 3.11</span>
              </div>
              <pre><code class="language-python">{ex['python']}</code></pre>
            </div>

            <div class="simulation-box" style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-sm); margin-top:1rem; font-size:0.875rem;">
              <strong>🧪 Simulasi Uji Meja (Trace Test):</strong><br>
              • <em>Kasus Normal:</em> {ex['simNormal']}<br>
              • <em>Kasus Alternatif:</em> {ex['simAlt']}
            </div>
          </div>
        </div>
"""
            html += "      </div>\n"

        # Special Bab 9: 10 Mistakes
        if ch["id"] == "bab9" and "mistakes" in ch:
            html += f"""
      <div class="mistakes-container">
"""
            for m in ch["mistakes"]:
                html += f"""
        <div class="mistake-item feature-card" style="margin-bottom: 2rem; page-break-inside: avoid;">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
            <span class="badge badge-red">Kesalahan #{m['no']}</span>
            <h4 style="margin:0; font-size:1.15rem; color:var(--text-main);">{m['title']}</h4>
          </div>
          <div class="grid-2-col" style="margin:1rem 0;">
            <div class="card-wrong">
              <strong>❌ Praktik yang Keliru:</strong>
              <p style="margin-top:0.35rem; font-size:0.9rem;">{m['bad']}</p>
              <small style="color:var(--accent-rose);"><em>Dampak: {m['why']}</em></small>
            </div>
            <div class="card-correct">
              <strong>✅ Cara Memperbaiki:</strong>
              <p style="margin-top:0.35rem; font-size:0.9rem;">{m['fix']}</p>
            </div>
          </div>
        </div>
"""
            html += "      </div>\n"

        # Special Bab 10: Quizzes Bank & Answer Keys
        if ch["id"] == "bab10":
            html += f"""
      <div class="quiz-book-section">
        <h3 class="section-heading-formal">10.1 Bank Soal Pilihan Ganda (15 Soal) & Pembahasan Resmi</h3>
        <p style="color:var(--text-muted); margin-bottom:1.5rem;">Gunakan bank soal berikut untuk menguji pemahaman teori dan konsep. Setiap nomor telah dilengkapi kunci jawaban benar dan penjelasan rasionalnya.</p>
        
        <div class="qa-book-stack">
"""
            ops_letters = ["A", "B", "C", "D"]
            for q in ch.get("pgQuestions", []):
                ans_letter = ops_letters[q['ans']]
                html += f"""
          <div class="qa-book-item feature-card" style="margin-bottom:1.5rem; page-break-inside: avoid;">
            <div class="qa-q-num"><strong>Soal #{q['id']}</strong></div>
            <p class="qa-question-text" style="font-weight:600; font-size:1.05rem; margin: 0.5rem 0 1rem;">{q['q']}</p>
            <div class="qa-options-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:0.5rem; margin-bottom:1rem;">
"""
                for oi, opt in enumerate(q['options']):
                    is_correct = (oi == q['ans'])
                    html += f"""
              <div class="qa-opt-box {'opt-correct-marker' if is_correct else ''}" style="padding:0.6rem 0.8rem; border-radius:6px; border:1px solid var(--border-color); background: {'rgba(16,185,129,0.1)' if is_correct else 'var(--bg-subtle)'}; font-size:0.9rem;">
                <strong>{ops_letters[oi]}.</strong> {opt} {'<span style="color:#10b981; font-weight:700; margin-left:4px;">(Kunci ✓)</span>' if is_correct else ''}
              </div>
"""
                html += f"""
            </div>
            <div class="qa-exp-box" style="background:var(--bg-card); border-left:4px solid var(--accent-emerald); padding:0.75rem 1rem; border-radius:0 6px 6px 0; font-size:0.875rem;">
              <strong>Kunci: {ans_letter}</strong> — <em>{q['exp']}</em>
            </div>
          </div>
"""

            html += f"""
        </div>

        <h3 class="section-heading-formal" style="margin-top:3rem;">10.2 Uji Pemahaman: 10 Soal Benar / Salah</h3>
        <div class="table-responsive">
          <table class="table-custom">
            <thead>
              <tr><th style="width:8%;">No</th><th>Pernyataan Soal</th><th style="width:15%;">Status</th><th>Pembahasan Teknis</th></tr>
            </thead>
            <tbody>
"""
            for b in ch.get("bsQuestions", []):
                status_badge = '<span class="badge badge-green">BENAR</span>' if b['ans'] else '<span class="badge badge-red">SALAH</span>'
                html += f"""
              <tr>
                <td><strong>#{b['id']}</strong></td>
                <td>{b['q']}</td>
                <td>{status_badge}</td>
                <td><small>{b['exp']}</small></td>
              </tr>
"""
            html += f"""
            </tbody>
          </table>
        </div>

        <h3 class="section-heading-formal" style="margin-top:3rem;">10.3 Latihan Identifikasi Simbol Visual Standar</h3>
        <div class="table-responsive">
          <table class="table-custom">
            <thead>
              <tr><th style="width:10%;">No</th><th style="width:30%;">Bentuk Geometri Visual</th><th>Nama Simbol & Fungsi Teknis</th></tr>
            </thead>
            <tbody>
"""
            for s in ch.get("symbolQuestions", []):
                html += f"""
              <tr>
                <td><strong>#{s['no']}</strong></td>
                <td><code>{s['shape']}</code></td>
                <td><strong>{s['ans']}</strong></td>
              </tr>
"""
            html += f"""
            </tbody>
          </table>
        </div>

        <h3 class="section-heading-formal" style="margin-top:3rem;">10.4 Tantangan Debugging Logika & Mini Proyek</h3>
        <div class="grid-2-col">
          <div>
            <h4 style="color:var(--accent-rose); margin-bottom:1rem;">🛠️ Tantangan Debugging Logika:</h4>
"""
            for d in ch.get("debuggingExercises", []):
                html += f"""
            <div class="feature-card" style="margin-bottom:1rem; padding:1rem;">
              <strong>Kasus #{d['no']}: {d['title']}</strong>
              <p style="font-size:0.875rem; margin:0.35rem 0; color:var(--text-muted);"><em>Masalah:</em> {d['problem']}</p>
              <div style="font-size:0.875rem; color:var(--accent-emerald);"><strong>Solusi:</strong> {d['solution']}</div>
            </div>
"""
            html += f"""
          </div>
          <div>
            <h4 style="color:var(--primary); margin-bottom:1rem;">🚀 Mini Proyek Mandiri:</h4>
"""
            for p in ch.get("miniProjects", []):
                html += f"""
            <div class="feature-card" style="margin-bottom:1rem; padding:1rem;">
              <strong>Proyek #{p['no']}: {p['title']}</strong>
              <p style="font-size:0.875rem; margin-top:0.35rem; color:var(--text-muted);">{p['task']}</p>
            </div>
"""
            html += f"""
          </div>
        </div>
      </div>
"""

        # Special Bab 11: Enterprise Projects
        if ch["id"] == "bab11" and "projects" in ch:
            html += f"""
      <div class="projects-stack">
"""
            for p in ch["projects"]:
                html += f"""
        <div class="project-card feature-card" style="margin-bottom: 3rem; padding: 2rem; page-break-inside: avoid;">
          <span class="badge badge-purple" style="margin-bottom:0.5rem;">Studi Kasus Proyek Skala Penuh</span>
          <h3 style="font-size:1.45rem; color:var(--text-main); margin-bottom:1rem;">{p['title']}</h3>
          
          <p><strong>Latar Belakang:</strong> {p['bg']}</p>
          <p><strong>Rumusan Masalah:</strong> {p['problem']}</p>
          <p><strong>Kebutuhan I/O:</strong> <code>{p['io']}</code></p>
          <p><strong>Aturan Proses Bisnis:</strong> {p['rules']}</p>

          <h4 style="margin-top:1.5rem;">📐 Arsitektur Flowchart Sistem:</h4>
          <div class="mermaid-container">
            <pre class="mermaid">{p['mermaid']}</pre>
          </div>

          <h4>📝 Pseudocode Program:</h4>
          <div class="code-wrapper">
            <pre><code>{p['pseudo']}</code></pre>
          </div>

          <div class="alert alert-info" style="margin-top:1.5rem;">
            <strong>⚖️ Rubrik Standar Penilaian:</strong> {p['rubric']}
          </div>
        </div>
"""
            html += "      </div>\n"

        # Special Bab 12: Glossary, Checklist, References
        if ch["id"] == "bab12":
            html += f"""
      <section class="section-block">
        <h3 class="section-heading-formal">12.1 Glosarium Istilah Penting (A - Z)</h3>
        <div class="table-responsive">
          <table class="table-custom">
            <thead>
              <tr><th style="width:25%;">Istilah Teknis</th><th>Definisi & Penjelasan Ilmiah</th></tr>
            </thead>
            <tbody>
              {"".join([f"<tr><td><strong>{g['term']}</strong></td><td>{g['def']}</td></tr>" for g in ch.get("glossary", [])])}
            </tbody>
          </table>
        </div>
      </section>

      <section class="section-block">
        <h3 class="section-heading-formal">12.2 Checklist Mutu Pemeriksaan Flowchart (Quality Assurance)</h3>
        <ul class="custom-ul" style="padding-left:1.5rem; font-size:0.95rem; line-height:1.8;">
          {"".join([f"<li>☑️ {q}</li>" for q in ch.get("qaChecklist", [])])}
        </ul>
      </section>

      <section class="section-block">
        <h3 class="section-heading-formal">12.3 Daftar Pustaka Resmi & Referensi Standar</h3>
        <div class="table-responsive">
          <table class="table-custom">
            <thead>
              <tr><th>Judul & Sumber Rujukan</th><th>Penulis / Organisasi</th><th>Catatan Verifikasi</th></tr>
            </thead>
            <tbody>
              {"".join([f"<tr><td><strong>{r['title']}</strong></td><td>{r['author']}</td><td>{r['note']}</td></tr>" for r in ch.get("references", [])])}
            </tbody>
          </table>
        </div>
      </section>
"""

        html += f"""
    </section>
"""

    html += f"""
    <!-- HALAMAN PENUTUP BUKU -->
    <section class="book-page book-back-cover page-break" id="back-cover">
      <div class="back-cover-content">
        <div class="back-cover-badge">MODUL AKADEMIK RESMI</div>
        <h2>FLOWCHART MASTER COURSE</h2>
        <p>Buku materi ini disusun sebagai panduan menyeluruh dalam membangun fondasi logika komputasi yang tangguh. Melalui pemahaman diagram alir yang tepat, pemrogram mampu merancang solusi perangkat lunak yang andal, efisien, dan mudah dipelihara.</p>
        <div class="back-cover-meta">
          <span>Hak Cipta © {metadata['year']} Edu Informatika</span>
          <span>Dilisensikan di bawah CC BY-SA 4.0</span>
        </div>
      </div>
    </section>

  </div>

  <!-- Injected Script Assets -->
  <script src="js/flowchart-svg.js"></script>
  <script>
    // 1. Inject SVG Gradients
    if (window.getSvgGradients) {{
      document.getElementById('svg-defs-container').innerHTML = window.getSvgGradients();
    }}

    // 2. Render Symbols Gallery for Bab II
    function renderBookSymbols() {{
      const container = document.getElementById("book-symbols-container");
      if (!container || !window.FlowchartSymbols) return;
      let html = "";
      Object.keys(window.FlowchartSymbols).forEach(key => {{
        const s = window.FlowchartSymbols[key];
        html += `
          <div class="symbol-card">
            <div class="symbol-visual-box">
              ${{s.svg}}
            </div>
            <div class="symbol-card-header">
              <h4>${{s.nameEn}}</h4>
              <span class="badge badge-blue">${{s.category}}</span>
            </div>
            <p class="shape-name">${{s.nameId}} (${{s.shape}})</p>
            <div class="symbol-meta-list">
              <div class="symbol-meta-item"><strong>Fungsi:</strong> ${{s.desc}}</div>
              <div class="symbol-meta-item"><strong>Kapan Dipakai:</strong> ${{s.when}}</div>
              <div class="symbol-meta-item"><strong>Contoh Isi:</strong> <code>${{s.exampleText}}</code></div>
              <div class="symbol-meta-item" style="color:var(--accent-rose);"><strong>Kesalahan Umum:</strong> ${{s.commonMistake}}</div>
            </div>
          </div>
        `;
      }});
      container.innerHTML = html;
    }}

    // 3. Render Mermaid Diagrams
    async function renderMermaid() {{
      if (window.mermaid) {{
        try {{
          await window.mermaid.run({{
            nodes: document.querySelectorAll('.mermaid')
          }});
        }} catch(e) {{
          console.warn("Mermaid render notice:", e);
        }}
      }}
    }}

    // 4. Quick Jump Dropdown
    function jumpToChapter(id) {{
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {{
        el.scrollIntoView({{ behavior: 'smooth' }});
      }}
    }}

    // 5. Theme Toggle
    function toggleBookTheme() {{
      const html = document.documentElement;
      const current = html.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      html.setAttribute("data-theme", next);
      const btn = document.getElementById("book-theme-btn");
      if (btn) {{
        btn.innerHTML = next === "dark" ? "☀️ Mode Terang" : "🌙 Mode Gelap";
      }}
      if (window.mermaid) {{
        window.mermaid.initialize({{
          theme: next === "dark" ? "dark" : "default"
        }});
        renderMermaid();
      }}
    }}

    window.addEventListener("DOMContentLoaded", () => {{
      renderBookSymbols();
      renderMermaid();
    }});
  </script>
</body>
</html>
"""
    return html

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 1. Export Markdown
    print("[...] Menghasilkan BUKU_PANDUAN_MATERI_FLOWCHART.md...")
    md_content = generate_markdown()
    md_path = os.path.join(base_dir, "BUKU_PANDUAN_MATERI_FLOWCHART.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"[OK] Sukses: {md_path} ({len(md_content)} karakter)")

    # Juga salin ke workspace root agar mudah diakses
    workspace_root = os.path.abspath(os.path.join(base_dir, ".."))
    root_md_path = os.path.join(workspace_root, "BUKU_PANDUAN_MATERI_FLOWCHART.md")
    with open(root_md_path, "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"[OK] Sukses: Salinan root di {root_md_path}")

    # 2. Export buku.html
    print("[...] Menghasilkan buku.html (Website Buku Mandiri / Ekspor Cetak PDF)...")
    html_content = build_buku_html()
    html_path = os.path.join(base_dir, "buku.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"[OK] Sukses: {html_path} ({len(html_content)} karakter)")

if __name__ == "__main__":
    main()
