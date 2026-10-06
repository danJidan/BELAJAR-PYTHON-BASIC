/**
 * flowchart-svg.js
 * Generates accurate vector SVGs for ANSI/ISO standard flowchart symbols.
 */

const FlowchartSymbols = {
  terminal: {
    nameEn: "Terminal / Terminator",
    nameId: "Terminator / Titik Awal & Akhir",
    shape: "Oval / Kapsul",
    color: "#10b981",
    bgGradient: ["#10b981", "#059669"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <rect x="15" y="15" width="130" height="50" rx="25" ry="25" fill="url(#grad-terminal)" stroke="#059669" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="45" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Mulai / Selesai</text>
    </svg>`,
    category: "Dasar",
    desc: "Menandai awal (Start) atau akhir (End) dari suatu alur logika program.",
    when: "Diletakkan tepat 1 buah di awal bagan dan minimal 1 buah di akhir bagan.",
    exampleText: "Mulai, Selesai, Start, Stop",
    exampleUse: "Titik mulai proses login akun pengguna.",
    commonMistake: "Menggunakan persegi panjang biasa atau lupa memberi terminator akhir sehingga alur menggantung tanpa henti."
  },
  process: {
    nameEn: "Process",
    nameId: "Proses / Operasi",
    shape: "Persegi Panjang",
    color: "#3b82f6",
    bgGradient: ["#3b82f6", "#2563eb"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <rect x="15" y="15" width="130" height="50" rx="4" fill="url(#grad-process)" stroke="#1d4ed8" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="45" fill="#ffffff" font-size="13" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Luas = P × L</text>
    </svg>`,
    category: "Dasar",
    desc: "Menyatakan tindakan pengolahan, perhitungan matematika, atau penugasan variabel oleh sistem/komputer.",
    when: "Digunakan saat ada proses komputasi, rumus, atau pemrosesan data internal.",
    exampleText: "total = harga * qty, hitung diskon, counter = counter + 1",
    exampleUse: "Menghitung luas lingkaran dengan rumus L = π × r².",
    commonMistake: "Memasukkan instruksi pengambilan data input user atau pertanyaan kondisi di dalam simbol proses."
  },
  decision: {
    nameEn: "Decision",
    nameId: "Keputusan / Percabangan",
    shape: "Belah Ketupat (Diamond)",
    color: "#f59e0b",
    bgGradient: ["#f59e0b", "#d97706"],
    svg: `<svg viewBox="0 0 160 90" class="symbol-svg">
      <polygon points="80,10 145,45 80,80 15,45" fill="url(#grad-decision)" stroke="#b45309" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="43" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Nilai >= 75?</text>
      <text x="80" y="55" fill="#fef3c7" font-size="9" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">(Ya / Tidak)</text>
    </svg>`,
    category: "Dasar",
    desc: "Titik pengambilan keputusan logis berdasarkan kondisi Benar (True/Ya) atau Salah (False/Tidak).",
    when: "Digunakan saat ada pilihan jalur yang membutuhkan pengujian kondisi (if-else).",
    exampleText: "Apakah saldo >= total?, x % 2 == 0?, umur >= 17?",
    exampleUse: "Memeriksa apakah password yang dimasukkan user cocok dengan database.",
    commonMistake: "Lupa menuliskan label 'Ya' dan 'Tidak' pada garis panah keluar, atau hanya memiliki satu garis keluar."
  },
  io: {
    nameEn: "Input / Output Data",
    nameId: "Masukan / Keluaran Data",
    shape: "Jajar Genjang (Parallelogram)",
    color: "#8b5cf6",
    bgGradient: ["#8b5cf6", "#7c3aed"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <polygon points="35,15 145,15 125,65 15,65" fill="url(#grad-io)" stroke="#6d28d9" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="45" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Input / Cetak Nilai</text>
    </svg>`,
    category: "Dasar",
    desc: "Menerima masukan data (input) atau menampilkan/mencetak hasil (output) tanpa membedakan media spesifiknya.",
    when: "Digunakan saat program berinteraksi dengan pengguna (baca data atau cetak informasi).",
    exampleText: "Baca nama, Input nilai_ujian, Tampilkan status, Cetak invoice",
    exampleUse: "Menginputkan panjang dan lebar lapangan futsal dari keyboard.",
    commonMistake: "Menggunakan persegi panjang (proses) untuk membaca input atau mencetak output."
  },
  flowline: {
    nameEn: "Flowline / Flow Arrow",
    nameId: "Garis Alir / Arah Panah",
    shape: "Garis Berpanah",
    color: "#64748b",
    bgGradient: ["#64748b", "#475569"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <line x1="20" y1="40" x2="130" y2="40" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
      <polygon points="140,40 125,32 125,48" fill="#334155"/>
      <text x="75" y="30" fill="#475569" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Alur Logika ➔</text>
    </svg>`,
    category: "Dasar",
    desc: "Menghubungkan satu simbol dengan simbol berikutnya serta menunjukkan arah urutan instruksi.",
    when: "Digunakan di antara setiap langkah tanpa terkecuali.",
    exampleText: "Label Ya/Tidak (pada cabang percabangan)",
    exampleUse: "Menghubungkan langkah input data ke proses perhitungan.",
    commonMistake: "Menggambar garis lurus tanpa mata panah, membuat panah berpotongan silang tanpa aturan, atau panah buntu."
  },
  onpage: {
    nameEn: "On-Page Connector",
    nameId: "Penghubung Satu Halaman",
    shape: "Lingkaran Kecil",
    color: "#06b6d4",
    bgGradient: ["#06b6d4", "#0891b2"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <circle cx="80" cy="40" r="25" fill="url(#grad-onpage)" stroke="#0e7490" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="46" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">A</text>
    </svg>`,
    category: "Penghubung",
    desc: "Menyambungkan alur logika pada lembar halaman yang sama untuk menghindari garis panah yang terlalu panjang atau berpotongan ruwet.",
    when: "Digunakan saat alur diagram kompleks dan garis panah mulai menyilang membingungkan.",
    exampleText: "A, B, 1, 2",
    exampleUse: "Menyambungkan keluaran dari loop bawah ke cabang atas diagram.",
    commonMistake: "Menulis teks terlalu panjang di dalam lingkaran; simbol ini hanya boleh memuat huruf/angka kode penghubung."
  },
  offpage: {
    nameEn: "Off-Page Connector",
    nameId: "Penghubung Beda Halaman",
    shape: "Segi Lima (Rumah Terbalik)",
    color: "#ec4899",
    bgGradient: ["#ec4899", "#db2777"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <polygon points="35,15 125,15 125,50 80,72 35,50" fill="url(#grad-offpage)" stroke="#be185d" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="42" fill="#ffffff" font-size="14" font-weight="700" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Hal 2</text>
    </svg>`,
    category: "Penghubung",
    desc: "Menyambungkan diagram alir yang terputus karena berpindah ke kertas/lembar dokumen halaman berikutnya.",
    when: "Digunakan pada diagram sistem berukuran besar yang tidak muat dalam 1 lembar.",
    exampleText: "Hal 2, Sheet B",
    exampleUse: "Menghubungkan akhir proses modul kasir di lembar 1 ke modul cetak faktur di lembar 2.",
    commonMistake: "Tertukar dengan On-Page connector atau lupa memberi label nomor halaman target."
  },
  predefined: {
    nameEn: "Predefined Process / Subroutine",
    nameId: "Proses Terdefinisi / Subprogram",
    shape: "Persegi Panjang Garis Ganda",
    color: "#6366f1",
    bgGradient: ["#6366f1", "#4f46e5"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <rect x="15" y="15" width="130" height="50" rx="3" fill="url(#grad-predefined)" stroke="#4338ca" stroke-width="3" filter="url(#drop-shadow)"/>
      <line x1="32" y1="15" x2="32" y2="65" stroke="#ffffff" stroke-width="2" stroke-opacity="0.8"/>
      <line x1="128" y1="15" x2="128" y2="65" stroke="#ffffff" stroke-width="2" stroke-opacity="0.8"/>
      <text x="80" y="44" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">cetakStruk()</text>
    </svg>`,
    category: "Lanjutan",
    desc: "Menyatakan pemanggilan fungsi, prosedur, metode, atau modul terpisah yang alur detailnya telah digambar di diagram lain.",
    when: "Digunakan saat program menggunakan prinsip modularitas atau memanggil library eksternal.",
    exampleText: "hitungPajak(), validasiToken(), sortArray()",
    exampleUse: "Memanggil fungsi enkripsi sandi sebelum data disimpan ke database.",
    commonMistake: "Tertukar dengan simbol proses biasa (persegi panjang satu garis) sehingga rincian subprogram tidak jelas."
  },
  preparation: {
    nameEn: "Preparation / Initialization",
    nameId: "Persiapan / Inisialisasi",
    shape: "Segi Enam (Hexagon)",
    color: "#14b8a6",
    bgGradient: ["#14b8a6", "#0d9488"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <polygon points="35,15 125,15 145,40 125,65 35,65 15,40" fill="url(#grad-preparation)" stroke="#0f766e" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="45" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">i = 1; total = 0</text>
    </svg>`,
    category: "Struktur",
    desc: "Pemberian nilai awal (*initial value*) pada variabel atau penyiapan counter batas sebelum perulangan (loop) dimulai.",
    when: "Digunakan tepat sebelum blok perulangan `for` atau `while`.",
    exampleText: "i = 0, counter = 1 to 10, batas = 100",
    exampleUse: "Menyetel nilai variabel `total_belanja = 0` sebelum kasir mulai memindai barcode belanjaan.",
    commonMistake: "Menggunakan simbol input untuk inisialisasi variabel internal yang tidak melibatkan pengguna."
  },
  manualInput: {
    nameEn: "Manual Input",
    nameId: "Masukan Manual",
    shape: "Segiempat Permukaan Miring",
    color: "#e11d48",
    bgGradient: ["#e11d48", "#be123c"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <polygon points="15,30 145,15 145,65 15,65" fill="url(#grad-manualInput)" stroke="#9f1239" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="48" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Ketik Password</text>
    </svg>`,
    category: "Masukan Spesifik",
    desc: "Masukan data yang dimasukkan langsung secara manual oleh manusia melalui keyboard, tombol, atau scanner barcode.",
    when: "Digunakan pada flowchart sistem saat ingin menegaskan adanya keterlibatan input manusia secara aktif.",
    exampleText: "Ketik PIN ATM, Masukkan Username, Scan Kartu Pelajar",
    exampleUse: "Pengguna mengetikkan kata sandi pada halaman login aplikasi web.",
    commonMistake: "Menggunakan jajar genjang saat ingin mengkhususkan media keyboard fisik pada sistem flowchart."
  },
  manualOperation: {
    nameEn: "Manual Operation",
    nameId: "Operasi Manual (Tanpa Komputer)",
    shape: "Trapesium Terbalik",
    color: "#d97706",
    bgGradient: ["#d97706", "#b45309"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <polygon points="15,15 145,15 125,65 35,65" fill="url(#grad-manualOperation)" stroke="#92400e" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="44" fill="#ffffff" font-size="11" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Beri Stempel Dokumen</text>
    </svg>`,
    category: "Proses Fisik",
    desc: "Menyatakan langkah pemrosesan yang dilakukan manual oleh tenaga manusia secara fisik tanpa bantuan komputer.",
    when: "Banyak digunakan pada SOP (Standard Operating Procedure) dan Document Flowchart.",
    exampleText: "Tandatangani surat, tempel perangko, serahkan berkas ke kasir",
    exampleUse: "Petugas perpustakaan mencocokkan kartu fisik sebelum meminjamkan buku.",
    commonMistake: "Mengira ini adalah proses komputer; simbol ini khusus aksi manual manusia."
  },
  document: {
    nameEn: "Document",
    nameId: "Dokumen Tunggal",
    shape: "Persegi Dasar Gelombang",
    color: "#0284c7",
    bgGradient: ["#0284c7", "#0369a1"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <path d="M 15,15 L 145,15 L 145,55 Q 112,42 80,55 Q 48,68 15,55 Z" fill="url(#grad-document)" stroke="#075985" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="40" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Struk Belanja</text>
    </svg>`,
    category: "Keluaran Fisik",
    desc: "Menyatakan keluaran yang dicetak ke lembaran kertas fisik (hardcopy) atau dokumen laporan.",
    when: "Digunakan saat output akhir berupa cetakan fisik seperti struk kasir, kwitansi, atau rapor fisik.",
    exampleText: "Cetak Kwitansi, Laporan Penjualan, Faktur Pajak",
    exampleUse: "Mesin kasir mencetak struk belanjaan pelanggan setelah transaksi berhasil.",
    commonMistake: "Tertukar dengan simbol database silinder atau simbol tampilan monitor."
  },
  multipleDocuments: {
    nameEn: "Multiple Documents",
    nameId: "Banyak Dokumen (Tumpukan Dokumen)",
    shape: "Tumpukan Persegi Bergulung",
    color: "#0891b2",
    bgGradient: ["#0891b2", "#0e7490"],
    svg: `<svg viewBox="0 0 160 85" class="symbol-svg">
      <!-- Back doc -->
      <path d="M 25,10 L 145,10 L 145,45 Q 115,35 85,45 Q 55,55 25,45 Z" fill="#67e8f9" stroke="#0891b2" stroke-width="2"/>
      <!-- Mid doc -->
      <path d="M 20,18 L 140,18 L 140,53 Q 110,43 80,53 Q 50,63 20,53 Z" fill="#22d3ee" stroke="#0891b2" stroke-width="2"/>
      <!-- Front doc -->
      <path d="M 15,26 L 135,26 L 135,61 Q 105,51 75,61 Q 45,71 15,61 Z" fill="url(#grad-multipleDocuments)" stroke="#0e7490" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="75" y="48" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Rangkap Faktur</text>
    </svg>`,
    category: "Keluaran Fisik",
    desc: "Menyatakan sekumpulan dokumen fisik atau faktur rangkap (misal: lembar 1 untuk pembeli, lembar 2 untuk arsip toko).",
    when: "Digunakan pada sistem akuntansi atau administrasi perkantoran dengan arsip rangkap banyak.",
    exampleText: "Surat Jalan Rangkap 3, Kwitansi Rangkap 2",
    exampleUse: "Mencetak 3 rangkap surat jalan pengiriman barang ekspedisi.",
    commonMistake: "Menggunakan simbol dokumen tunggal padahal sistem menghasilkan beberapa salinan dokumen terpisah."
  },
  database: {
    nameEn: "Database / Stored Data",
    nameId: "Basis Data / Data Tersimpan",
    shape: "Silinder Tegak",
    color: "#84cc16",
    bgGradient: ["#84cc16", "#65a30d"],
    svg: `<svg viewBox="0 0 160 85" class="symbol-svg">
      <path d="M 30,25 C 30,13 130,13 130,25 L 130,60 C 130,72 30,72 30,60 Z" fill="url(#grad-database)" stroke="#4d7c0f" stroke-width="3" filter="url(#drop-shadow)"/>
      <ellipse cx="80" cy="25" rx="50" ry="12" fill="#a3e635" stroke="#4d7c0f" stroke-width="2"/>
      <text x="80" y="52" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Database Siswa</text>
    </svg>`,
    category: "Penyimpanan",
    desc: "Menyatakan penyimpanan data permanen atau pengambilan data dari basis data (MySQL, PostgreSQL, MongoDB, harddisk).",
    when: "Digunakan saat program membaca data tersimpan atau menyimpan hasil data transaksi ke server/disk.",
    exampleText: "Simpan Transaksi, SELECT * FROM users, Update Saldo",
    exampleUse: "Menyimpan data pendaftaran siswa baru ke server sekolah.",
    commonMistake: "Menyimpan data di simbol dokumen padahal tersimpan secara digital di harddisk."
  },
  delay: {
    nameEn: "Delay",
    nameId: "Penundaan / Menunggu",
    shape: "Setengah Lingkaran Huruf D",
    color: "#6b7280",
    bgGradient: ["#6b7280", "#4b5563"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <path d="M 25,15 L 90,15 A 25,25 0 0,1 90,65 L 25,65 Z" fill="url(#grad-delay)" stroke="#374151" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="70" y="45" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Tunggu 5 Detik</text>
    </svg>`,
    category: "Struktur",
    desc: "Menyatakan periode waktu tunda (jeda / timeout) sebelum langkah berikutnya dapat dilanjutkan.",
    when: "Digunakan pada sistem otomatisasi, mikrokontroler, atau alur antrean pemesanan.",
    exampleText: "Tunggu OTP (60 detik), Jeda 3 detik, Delay pending",
    exampleUse: "Menunggu selama 3 detik sebelum lampu lalu lintas berpindah dari kuning ke merah.",
    commonMistake: "Menggunakan simbol proses biasa untuk aksi menunggu waktu jeda."
  },
  display: {
    nameEn: "Display",
    nameId: "Tampilan Layar / Monitor",
    shape: "Sisi Kiri Runcing / Kanan Lengkung",
    color: "#f43f5e",
    bgGradient: ["#f43f5e", "#e11d48"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <path d="M 45,15 L 120,15 A 25,25 0 0,1 120,65 L 45,65 L 15,40 Z" fill="url(#grad-display)" stroke="#be123c" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="45" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Monitor LCD</text>
    </svg>`,
    category: "Keluaran Spesifik",
    desc: "Menyatakan informasi keluaran yang khusus ditampilkan secara visual ke layar monitor komputer, HP, atau display LCD.",
    when: "Digunakan ketika ingin menegaskan output berupa antarmuka grafis (UI) bukan dokumen cetak kertas.",
    exampleText: "Tampilkan Skor Game, Alert('Login Berhasil'), Tampilkan Peta",
    exampleUse: "Menampilkan pesan 'Selamat Datang' pada layar mesin ATM.",
    commonMistake: "Tertukar dengan simbol dokumen atau jajar genjang umum."
  },
  merge: {
    nameEn: "Merge",
    nameId: "Penggabungan Alur",
    shape: "Segitiga Terbalik",
    color: "#a855f7",
    bgGradient: ["#a855f7", "#9333ea"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <polygon points="20,15 140,15 80,68" fill="url(#grad-merge)" stroke="#7e22ce" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="38" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Gabung Alur</text>
    </svg>`,
    category: "Struktur",
    desc: "Menyatakan penggabungan dua atau lebih cabang alur data menjadi satu aliran proses tunggal.",
    when: "Banyak dipakai pada pemrosesan batch data, alur sortir logistik, atau merger antrean.",
    exampleText: "Gabung Data, Merge Streams",
    exampleUse: "Menggabungkan data transaksi dari cabang A dan cabang B ke pusat rekonsiliasi.",
    commonMistake: "Mengabaikan arah panah masuk sehingga membingungkan arah peleburan data."
  },
  alternateProcess: {
    nameEn: "Alternate Process",
    nameId: "Proses Alternatif",
    shape: "Persegi Sudut Membulat",
    color: "#059669",
    bgGradient: ["#059669", "#047857"],
    svg: `<svg viewBox="0 0 160 80" class="symbol-svg">
      <rect x="15" y="15" width="130" height="50" rx="14" fill="url(#grad-alternateProcess)" stroke="#065f46" stroke-width="3" filter="url(#drop-shadow)"/>
      <text x="80" y="45" fill="#ffffff" font-size="12" font-weight="600" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">Proses Cadangan</text>
    </svg>`,
    category: "Proses Khusus",
    desc: "Menyatakan langkah alternatif atau prosedur darurat jika kondisi utama mengalami gangguan atau kegagalan sistem.",
    when: "Digunakan pada sistem toleransi bencana (*failover*) atau skema cadangan *fallback*.",
    exampleText: "Gunakan Server Backup, Kirim OTP via SMS Cadangan",
    exampleUse: "Mengalihkan jalur pembayaran via transfer bank jika payment gateway kartu kredit sedang down.",
    commonMistake: "Tertukar dengan simbol Terminator (Oval penuh); simbol ini adalah persegi dengan sudut membulat (*rounded rectangle*)."
  }
};

/**
 * Returns complete SVG definitions with gradients and shadows for high aesthetics.
 */
function getSvgGradients() {
  return `<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
    <defs>
      <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.15"/>
      </filter>
      ${Object.keys(FlowchartSymbols).map(key => {
        const sym = FlowchartSymbols[key];
        return `<linearGradient id="grad-${key}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${sym.bgGradient[0]}" />
          <stop offset="100%" stop-color="${sym.bgGradient[1]}" />
        </linearGradient>`;
      }).join('\n')}
    </defs>
  </svg>`;
}

// Export to window
window.FlowchartSymbols = FlowchartSymbols;
window.getSvgGradients = getSvgGradients;
