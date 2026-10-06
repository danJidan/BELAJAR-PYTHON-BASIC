/**
 * playground.js
 * Interactive Live Mermaid Flowchart Sandbox & Visualizer
 */

const PLAYGROUND_PRESETS = {
  "luas": {
    name: "Hitung Luas Persegi Panjang",
    code: `flowchart TD
    Start([MULAI]) --> In[/Input: panjang, lebar/]
    In --> Calc["luas = panjang * lebar"]
    Calc --> Out[/Tampilkan: luas/]
    Out --> Finish([SELESAI])`
  },
  "ganjil_genap": {
    name: "Cek Bilangan Ganjil / Genap",
    code: `flowchart TD
    A([MULAI]) --> B[/Input: bilangan/]
    B --> C{"bilangan % 2 == 0?"}
    C -- Ya --> D["status = 'GENAP'"]
    C -- Tidak --> E["status = 'GANJIL'"]
    D --> F[/Tampilkan: status/]
    E --> F
    F --> G([SELESAI])`
  },
  "diskon": {
    name: "Kasir Promo Diskon Supermarket",
    code: `flowchart TD
    S([MULAI]) --> In[/Input: total_belanja/]
    In --> Check{"total_belanja >= 200000?"}
    Check -- Ya --> D1["diskon = 0.15 * total_belanja"]
    Check -- Tidak --> D0["diskon = 0"]
    D1 --> Calc["total_bayar = total_belanja - diskon"]
    D0 --> Calc
    Calc --> Out[/Tampilkan: diskon, total_bayar/]
    Out --> End([SELESAI])`
  },
  "atm": {
    name: "Simulasi Validasi Mesin ATM",
    code: `flowchart TD
    Start([MULAI]) --> InPIN[/Input: PIN Masuk/]
    InPIN --> CheckPIN{"PIN == '1234'?"}
    CheckPIN -- Tidak --> Fail[/Tampilkan: PIN Salah! Transaksi Batal/]
    CheckPIN -- Ya --> InTarik[/Input: Nominal Penarikan/]
    InTarik --> CheckSaldo{"Saldo >= Nominal?"}
    CheckSaldo -- Tidak --> FailSaldo[/Tampilkan: Saldo Tidak Cukup!/]
    CheckSaldo -- Ya --> Mutasi["Saldo = Saldo - Nominal"]
    Mutasi --> Dispense[/Keluarkan Uang Tunai & Cetak Resi/]
    Fail --> Finish([SELESAI])
    FailSaldo --> Finish
    Dispense --> Finish`
  },
  "loop_counter": {
    name: "Perulangan While: Hitung 1 s.d. 5",
    code: `flowchart TD
    Start([MULAI]) --> Init["Preparation: counter = 1"]
    Init --> Check{"counter <= 5?"}
    Check -- Ya --> Print[/Tampilkan: counter/]
    Print --> Incr["counter = counter + 1"]
    Incr --> Check
    Check -- Tidak --> Finish([SELESAI])`
  }
};

class FlowchartPlayground {
  constructor() {
    this.editor = null;
    this.preview = null;
    this.errorBox = null;
    this.zoomLevel = 1;
  }

  init() {
    this.editor = document.getElementById("playground-code");
    this.preview = document.getElementById("playground-render-target");
    this.errorBox = document.getElementById("playground-error");

    if (!this.editor || !this.preview) return;

    // Load initial preset
    this.loadPreset("luas");

    // Event listener for preset change
    const select = document.getElementById("playground-preset-select");
    if (select) {
      select.addEventListener("change", (e) => {
        this.loadPreset(e.target.value);
      });
    }
  }

  loadPreset(key) {
    if (PLAYGROUND_PRESETS[key]) {
      this.editor.value = PLAYGROUND_PRESETS[key].code;
      this.render();
    }
  }

  async render() {
    if (!this.editor || !this.preview) return;
    const code = this.editor.value.trim();

    if (this.errorBox) {
      this.errorBox.style.display = "none";
      this.errorBox.textContent = "";
    }

    try {
      this.preview.innerHTML = `<div class="loading-spinner">⚙️ Merender bagan alir...</div>`;
      const id = "mermaid-svg-" + Date.now();
      
      if (window.mermaid) {
        const { svg } = await window.mermaid.render(id, code);
        this.preview.innerHTML = svg;
        this.applyZoom();
      } else {
        this.preview.innerHTML = `<div class="alert alert-warning">Library Mermaid.js sedang dimuat...</div>`;
      }
    } catch (err) {
      console.warn("Mermaid render error:", err);
      if (this.errorBox) {
        this.errorBox.style.display = "block";
        this.errorBox.innerHTML = `<strong>⚠️ Galat Sintaks Diagram:</strong> Periksa kembali kurung simbol atau tanda panah.<br><small>${err.message || err}</small>`;
      }
      this.preview.innerHTML = `<div class="render-error-state">❌ Gagal merender diagram. Periksa kembali sintaks teks di samping kiri.</div>`;
    }
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.15, 2.5);
    this.applyZoom();
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.15, 0.4);
    this.applyZoom();
  }

  zoomReset() {
    this.zoomLevel = 1;
    this.applyZoom();
  }

  applyZoom() {
    const svgEl = this.preview.querySelector("svg");
    if (svgEl) {
      svgEl.style.transform = `scale(${this.zoomLevel})`;
      svgEl.style.transformOrigin = "top center";
      svgEl.style.transition = "transform 0.2s ease";
    }
  }

  copyCode() {
    if (!this.editor) return;
    navigator.clipboard.writeText(this.editor.value);
    alert("✅ Kode Mermaid berhasil disalin ke clipboard!");
  }
}

window.FlowchartPlayground = FlowchartPlayground;
