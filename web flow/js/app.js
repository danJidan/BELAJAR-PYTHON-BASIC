/**
 * app.js
 * Master Application Controller & Router for Flowchart Learning Platform
 */

class FlowchartApp {
  constructor() {
    this.data = window.FLOWCHART_COURSE_DATA;
    this.currentChapterId = "bab1";
    this.quizEngine = null;
    this.playground = null;
  }

  init() {
    if (!this.data) {
      console.error("Course data not found!");
      return;
    }

    this.initTheme();
    this.initSidebar();
    this.initEvents();

    // Instantiate quiz engine and playground
    this.quizEngine = new window.FlowchartQuizEngine(this.data);
    window.quizEngine = this.quizEngine;

    this.playground = new window.FlowchartPlayground();
    window.playground = this.playground;

    // Load initial chapter
    const hash = window.location.hash.replace("#", "");
    if (hash && this.data.chapters.find(c => c.id === hash)) {
      this.loadChapter(hash);
    } else {
      this.loadChapter("bab1");
    }
  }

  initTheme() {
    const savedTheme = localStorage.getItem("flowchart_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("flowchart_theme", next);
    this.updateThemeIcon(next);

    // Re-render Mermaid if active
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: next === "dark" ? "dark" : "default"
      });
      this.renderMermaidDiagrams();
    }
  }

  updateThemeIcon(theme) {
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.innerHTML = theme === "dark" ? "☀️" : "🌙";
      btn.title = theme === "dark" ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap";
    }
  }

  initSidebar() {
    const navList = document.getElementById("sidebar-nav-list");
    if (!navList) return;

    let html = `
      <div class="nav-section-title">DAFTAR BAB MODUL</div>
    `;

    this.data.chapters.forEach(ch => {
      html += `
        <button type="button" class="nav-item-btn" id="nav-${ch.id}" onclick="window.app.loadChapter('${ch.id}')">
          <span class="nav-num">${ch.num}</span>
          <span class="nav-title">${ch.title}</span>
          <span class="nav-badge-pill">${ch.id === 'bab7' ? '20 Kasus' : (ch.id === 'bab10' ? 'Kuis' : 'Materi')}</span>
        </button>
      `;
    });

    html += `
      <div class="nav-section-title" style="margin-top: 1rem;">FITUR PRAKTIK INTERAKTIF</div>
      <button type="button" class="nav-item-btn" id="nav-playground" onclick="window.app.showPlayground()">
        <span class="nav-num">⚡</span>
        <span class="nav-title">Flowchart Sandbox</span>
        <span class="nav-badge-pill" style="background:#10b981;color:#fff;">Live</span>
      </button>

      <div class="nav-section-title" style="margin-top: 1.25rem;">EKSPOR & BUKU LENGKAP</div>
      <a href="buku.html" target="_blank" class="nav-item-btn" style="text-decoration:none; background:linear-gradient(135deg, rgba(37,99,235,0.14), rgba(16,185,129,0.14)); border:1px solid var(--primary); font-weight:600; color:var(--text-main);">
        <span class="nav-num">📖</span>
        <span class="nav-title">Buku Materi Lengkap</span>
        <span class="nav-badge-pill" style="background:#2563eb;color:#fff;">PDF</span>
      </a>
      <a href="BUKU_PANDUAN_MATERI_FLOWCHART.md" download="BUKU_PANDUAN_MATERI_FLOWCHART.md" class="nav-item-btn" style="text-decoration:none;">
        <span class="nav-num">📥</span>
        <span class="nav-title">Unduh File Markdown</span>
        <span class="nav-badge-pill">.MD</span>
      </a>
    `;

    navList.innerHTML = html;
  }

  initEvents() {
    // Search input live filter
    const searchInput = document.getElementById("course-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.filterContent(e.target.value);
      });
    }

    // Scroll reading progress
    window.addEventListener("scroll", () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById("reading-progress");
      if (bar) bar.style.width = scrolled + "%";
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById("mobile-menu-btn");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar) sidebar.classList.toggle("open");
      });
    }
  }

  loadChapter(chapterId) {
    const chapter = this.data.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    this.currentChapterId = chapterId;
    window.location.hash = chapterId;

    // Update active state in sidebar
    document.querySelectorAll(".nav-item-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`nav-${chapterId}`);
    if (activeBtn) activeBtn.classList.add("active");

    // Close mobile menu if open
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.classList.remove("open");

    // Update breadcrumbs
    const currentBreadcrumb = document.getElementById("breadcrumb-current");
    if (currentBreadcrumb) currentBreadcrumb.textContent = `${chapter.num}: ${chapter.title}`;

    // Render container
    const container = document.getElementById("main-content-target");
    if (!container) return;

    let html = `
      <article class="chapter-wrapper">
        <header class="chapter-hero">
          <div class="chapter-badge-top">
            <span class="badge badge-blue">${chapter.num}</span>
            <span class="badge badge-gray">Kurikulum Lengkap</span>
          </div>
          <h2>${chapter.title}</h2>
          <p class="subtitle">${chapter.subtitle}</p>
        </header>
    `;

    // Learning Goals
    if (chapter.learningGoals && chapter.learningGoals.length > 0) {
      html += `
        <div class="learning-goals-card">
          <h4>🎯 Tujuan Pembelajaran Bab Ini:</h4>
          <ul>
            ${chapter.learningGoals.map(g => `<li>${g}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // Render Sections for standard chapters (Bab 1, 2, 3, 4, 5, 6, 8, 9)
    if (chapter.sections) {
      chapter.sections.forEach(sec => {
        html += `
          <section class="section-block" id="${sec.id}">
            <h3>${sec.title}</h3>
            <div class="section-body">
              ${sec.content}
            </div>
          </section>
        `;
      });
    }

    // Special Rendering for BAB II: Symbols Gallery
    if (chapter.id === "bab2") {
      // Injected automatically in renderSymbolCards()
    }

    // Special Rendering for BAB VII: 20 Examples
    if (chapter.id === "bab7" && chapter.examples) {
      html += this.renderChapter7Examples(chapter.examples);
    }

    // Special Rendering for BAB IX: 10 Mistakes
    if (chapter.id === "bab9" && chapter.mistakes) {
      html += this.renderChapter9Mistakes(chapter.mistakes);
    }

    // Special Rendering for BAB X: Interactive Quizzes
    if (chapter.id === "bab10") {
      html += `
        <div class="quiz-tab-section">
          <div id="pg-quiz-container"></div>
          <hr style="margin: 3rem 0; border: none; border-top: 1px solid var(--border-color);">
          <div id="bs-quiz-container"></div>
          <hr style="margin: 3rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem;">🔍 Latihan Identifikasi Simbol Visual:</h3>
          <div id="symbol-match-container"></div>
        </div>
      `;
    }

    // Special Rendering for BAB XI: Final Projects
    if (chapter.id === "bab11" && chapter.projects) {
      html += this.renderChapter11Projects(chapter.projects);
    }

    // Special Rendering for BAB XII: Glossary & QA Checklist & References
    if (chapter.id === "bab12") {
      html += this.renderChapter12Details(chapter);
    }

    // Chapter Navigation Footer (Prev & Next)
    html += this.renderChapterNavFooter(chapterId);

    html += `</article>`;
    container.innerHTML = html;

    // Post-render attachments
    if (chapter.id === "bab2") {
      this.renderSymbolCards();
    }
    if (chapter.id === "bab10") {
      this.quizEngine.renderPgQuiz("pg-quiz-container");
      this.quizEngine.renderBsQuiz("bs-quiz-container");
      this.quizEngine.renderSymbolMatch("symbol-match-container");
    }

    // Render Mermaid diagrams
    this.renderMermaidDiagrams();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderChapter7Examples(examples) {
    return `
      <div class="examples-intro-alert alert alert-info">
        <strong>💡 Ensiklopedia Kasus:</strong> Berikut adalah 20 studi kasus terlengkap. Klik tab untuk melihat bagan visual Flowchart, Pseudocode formal, maupun baris kode Python yang valid!
      </div>
      <div class="examples-stack">
        ${examples.map(ex => `
          <div class="example-card-full feature-card" id="${ex.id}" style="margin-bottom: 2.5rem;">
            <div class="ex-card-header" style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
              <div>
                <span class="badge ${ex.level === 'Dasar' ? 'badge-green' : (ex.level === 'Menengah' ? 'badge-amber' : 'badge-red')}">
                  Kasus #${ex.no} • ${ex.level}
                </span>
                <h3 style="margin-top:0.4rem; font-size:1.35rem; color:var(--text-main);">${ex.title}</h3>
              </div>
            </div>
            <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1rem;">${ex.desc}</p>
            
            <div class="table-responsive">
              <table class="table-custom">
                <tr><th style="width:20%;">Input</th><td><code>${ex.input}</code></td></tr>
                <tr><th>Proses</th><td><code>${ex.process}</code></td></tr>
                <tr><th>Output</th><td><code>${ex.output}</code></td></tr>
              </table>
            </div>

            <div class="ex-tabs" style="margin-top:1.5rem;">
              <h4>📐 Bagan Alir Flowchart:</h4>
              <div class="mermaid-container">
                <pre class="mermaid">${ex.mermaid}</pre>
              </div>

              <h4>💻 Implementasi Kode Python Sinkron:</h4>
              <div class="code-wrapper">
                <div class="code-header">
                  <span>Python 3.11</span>
                  <button type="button" class="btn-copy-code" onclick="window.app.copyText(this)">📋 Salin Kode</button>
                </div>
                <pre><code class="language-python">${ex.python}</code></pre>
              </div>

              <div class="simulation-box" style="background:var(--bg-subtle); padding:1rem; border-radius:var(--radius-sm); margin-top:1rem; font-size:0.875rem;">
                <strong>🧪 Simulasi Uji Kasus:</strong><br>
                • <em>Kasus Normal:</em> ${ex.simNormal}<br>
                • <em>Kasus Alternatif:</em> ${ex.simAlt}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  renderChapter9Mistakes(mistakes) {
    return `
      <div class="mistakes-container">
        ${mistakes.map(m => `
          <div class="mistake-item feature-card" style="margin-bottom: 2rem;">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
              <span class="badge badge-red">Kesalahan #${m.no}</span>
              <h4 style="margin:0; font-size:1.15rem; color:var(--text-main);">${m.title}</h4>
            </div>
            <div class="grid-2-col" style="margin:1rem 0;">
              <div class="card-wrong">
                <strong>❌ Praktik yang Keliru:</strong>
                <p style="margin-top:0.35rem; font-size:0.9rem;">${m.bad}</p>
                <small style="color:var(--accent-rose);"><em>Dampak: ${m.why}</em></small>
              </div>
              <div class="card-correct">
                <strong>✅ Cara Memperbaiki:</strong>
                <p style="margin-top:0.35rem; font-size:0.9rem;">${m.fix}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  renderChapter11Projects(projects) {
    return `
      <div class="projects-stack">
        ${projects.map(p => `
          <div class="project-card feature-card" style="margin-bottom: 3rem; padding: 2rem;">
            <span class="badge badge-purple" style="margin-bottom:0.5rem;">Studi Kasus Proyek Skala Penuh</span>
            <h3 style="font-size:1.45rem; color:var(--text-main); margin-bottom:1rem;">${p.title}</h3>
            
            <p><strong>Latar Belakang:</strong> ${p.bg}</p>
            <p><strong>Rumusan Masalah:</strong> ${p.problem}</p>
            <p><strong>Kebutuhan I/O:</strong> <code>${p.io}</code></p>
            <p><strong>Aturan Proses Bisnis:</strong> ${p.rules}</p>

            <h4 style="margin-top:1.5rem;">📐 Arsitektur Flowchart Sistem:</h4>
            <div class="mermaid-container">
              <pre class="mermaid">${p.mermaid}</pre>
            </div>

            <h4>📝 Pseudocode Program:</h4>
            <div class="code-wrapper">
              <pre><code>${p.pseudo}</code></pre>
            </div>

            <div class="alert alert-info" style="margin-top:1.5rem;">
              <strong>⚖️ Rubrik Standar Penilaian:</strong> ${p.rubric}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  renderChapter12Details(chapter) {
    return `
      <section class="section-block">
        <h3>12.1 Glosarium Istilah Penting (A - Z)</h3>
        <div class="table-responsive">
          <table class="table-custom">
            <thead>
              <tr><th>Istilah Teknis</th><th>Definisi & Penjelasan Ilmiah</th></tr>
            </thead>
            <tbody>
              ${chapter.glossary.map(g => `<tr><td><strong>${g.term}</strong></td><td>${g.def}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="section-block">
        <h3>12.2 Checklist Mutu Pemeriksaan Flowchart (Quality Assurance)</h3>
        <ul class="custom-ul" style="padding-left:1.5rem; font-size:0.95rem; line-height:1.8;">
          ${chapter.qaChecklist.map(q => `<li>☑️ ${q}</li>`).join("")}
        </ul>
      </section>

      <section class="section-block">
        <h3>12.3 Daftar Pustaka & Atribusi Rujukan</h3>
        <div class="table-responsive">
          <table class="table-custom">
            <thead>
              <tr><th>Judul & Penulis</th><th>Catatan Verifikasi</th><th>Tautan Resmi</th></tr>
            </thead>
            <tbody>
              ${chapter.references.map(r => `
                <tr>
                  <td><strong>${r.title}</strong><br><small style="color:var(--text-muted);">${r.author}</small></td>
                  <td>${r.note}</td>
                  <td><a href="${r.url}" target="_blank" rel="noopener">Buka Sumber ↗</a></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  renderSymbolCards() {
    const container = document.getElementById("symbols-gallery-container");
    if (!container || !window.FlowchartSymbols) return;

    let html = "";
    Object.keys(window.FlowchartSymbols).forEach(key => {
      const s = window.FlowchartSymbols[key];
      html += `
        <div class="symbol-card">
          <div class="symbol-visual-box">
            ${s.svg}
          </div>
          <div class="symbol-card-header">
            <h4>${s.nameEn}</h4>
            <span class="badge badge-blue">${s.category}</span>
          </div>
          <p class="shape-name">${s.nameId} (${s.shape})</p>
          <div class="symbol-meta-list">
            <div class="symbol-meta-item"><strong>Fungsi:</strong> ${s.desc}</div>
            <div class="symbol-meta-item"><strong>Kapan Dipakai:</strong> ${s.when}</div>
            <div class="symbol-meta-item"><strong>Contoh Isi:</strong> <code>${s.exampleText}</code></div>
            <div class="symbol-meta-item" style="color:var(--accent-rose);"><strong>Kesalahan Umum:</strong> ${s.commonMistake}</div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  renderChapterNavFooter(currentId) {
    const chapters = this.data.chapters;
    const currentIndex = chapters.findIndex(c => c.id === currentId);
    const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    return `
      <div class="chapter-nav-footer" style="display:flex; justify-content:space-between; margin-top:4rem; padding-top:2rem; border-top:1px solid var(--border-color);">
        ${prev ? `
          <button type="button" class="btn btn-secondary" onclick="window.app.loadChapter('${prev.id}')">
            ← ${prev.num}: ${prev.title}
          </button>
        ` : '<div></div>'}
        ${next ? `
          <button type="button" class="btn btn-primary" onclick="window.app.loadChapter('${next.id}')">
            ${next.num}: ${next.title} →
          </button>
        ` : '<div></div>'}
      </div>
    `;
  }

  showPlayground() {
    const container = document.getElementById("main-content-target");
    if (!container) return;

    document.querySelectorAll(".nav-item-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById("nav-playground");
    if (activeBtn) activeBtn.classList.add("active");

    const currentBreadcrumb = document.getElementById("breadcrumb-current");
    if (currentBreadcrumb) currentBreadcrumb.textContent = "Flowchart Sandbox (Live Playground)";

    container.innerHTML = `
      <header class="chapter-hero">
        <span class="badge badge-green">Eksplorasi Mandiri</span>
        <h2>⚡ Flowchart Live Sandbox (Mermaid.js)</h2>
        <p class="subtitle">Ketik sintaks diagram alir atau pilih template siap pakai, lalu saksikan diagram dirender secara real-time!</p>
      </header>

      <div class="playground-wrapper">
        <div class="playground-editor-col">
          <div class="playground-toolbar">
            <h4>Editor Sintaks Mermaid</h4>
            <select class="playground-select" id="playground-preset-select">
              <option value="luas">Preset: Hitung Luas Persegi Panjang</option>
              <option value="ganjil_genap">Preset: Cek Ganjil / Genap</option>
              <option value="diskon">Preset: Kasir Diskon Supermarket</option>
              <option value="atm">Preset: Simulasi Mesin ATM</option>
              <option value="loop_counter">Preset: Perulangan While 1-5</option>
            </select>
          </div>
          <textarea class="playground-textarea" id="playground-code"></textarea>
          <div class="playground-controls">
            <button class="btn btn-primary btn-sm" onclick="window.playground.render()">▶️ Render Ulang</button>
            <button class="btn btn-secondary btn-sm" onclick="window.playground.copyCode()">📋 Salin Kode</button>
          </div>
        </div>

        <div class="playground-render-col">
          <div class="playground-toolbar">
            <h4>Kanvas Pratinjau Diagram</h4>
            <div style="display:flex; gap:0.25rem;">
              <button class="btn btn-sm btn-outline" onclick="window.playground.zoomIn()">🔍+</button>
              <button class="btn btn-sm btn-outline" onclick="window.playground.zoomOut()">🔍-</button>
              <button class="btn btn-sm btn-outline" onclick="window.playground.zoomReset()">100%</button>
            </div>
          </div>
          <div id="playground-error" class="alert alert-warning" style="display:none; margin:0 0 0.5rem;"></div>
          <div class="playground-render-box" id="playground-render-target"></div>
        </div>
      </div>
    `;

    this.playground.init();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async renderMermaidDiagrams() {
    if (!window.mermaid) return;
    try {
      const nodes = document.querySelectorAll(".mermaid");
      if (nodes.length > 0) {
        await window.mermaid.run({
          nodes: nodes
        });
      }
    } catch (err) {
      console.warn("Mermaid batch run notice:", err);
    }
  }

  copyText(btn) {
    const pre = btn.closest(".code-wrapper").querySelector("pre code");
    if (pre) {
      navigator.clipboard.writeText(pre.innerText);
      const original = btn.textContent;
      btn.textContent = "✅ Tersalin!";
      setTimeout(() => { btn.textContent = original; }, 2000);
    }
  }

  filterContent(query) {
    const q = (query || "").trim().toLowerCase();
    const navButtons = document.querySelectorAll(".nav-item-btn");

    if (!q) {
      navButtons.forEach(btn => btn.style.display = "flex");
      return;
    }

    navButtons.forEach(btn => {
      const text = btn.textContent.toLowerCase();
      if (text.includes(q)) {
        btn.style.display = "flex";
      } else {
        btn.style.display = "none";
      }
    });
  }

  printDocument() {
    const wantFull = confirm("Apakah Anda ingin mencetak BUKU MATERI LENGKAP (seluruh 12 bab)?\n\n- Klik [OK] untuk membuka Buku Materi Lengkap siap cetak PDF.\n- Klik [Cancel] untuk mencetak bab yang sedang aktif saja.");
    if (wantFull) {
      window.open("buku.html", "_blank");
    } else {
      window.print();
    }
  }
}

// Global initialization
window.addEventListener("DOMContentLoaded", () => {
  window.app = new FlowchartApp();
  window.app.init();
});
