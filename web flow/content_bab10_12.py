# content_bab10_12.py
# Modul konten BAB X, BAB XI, dan BAB XII

def get_bab10():
    # 15 Soal Pilihan Ganda
    pg_questions = [
        {
            "id": 1,
            "q": "Simbol bangun datar apakah yang digunakan untuk menandai titik Mulai (Start) dan Selesai (End) pada flowchart?",
            "options": ["Persegi Panjang", "Oval / Kapsul", "Belah Ketupat", "Jajar Genjang"],
            "ans": 1,
            "exp": "Simbol Oval / Kapsul disebut Terminator, berfungsi sebagai penanda awal dan akhir alur program."
        },
        {
            "id": 2,
            "q": "Manakah simbol yang wajib digunakan saat program melakukan perhitungan rumus matematika (misal: luas = p * l)?",
            "options": ["Jajar Genjang (Input/Output)", "Belah Ketupat (Decision)", "Persegi Panjang (Process)", "Lingkaran (Connector)"],
            "ans": 2,
            "exp": "Persegi Panjang melambangkan Process, yaitu instruksi kalkulasi matematika atau penugasan variabel."
        },
        {
            "id": 3,
            "q": "Sebuah simbol Belah Ketupat (Decision) wajib memiliki minimal berapa garis panah keluar?",
            "options": ["1 cabang", "2 cabang", "3 cabang", "Bebas berapapun"],
            "ans": 1,
            "exp": "Simbol Decision menguji kondisi logika (True/False), sehingga wajib memiliki minimal 2 cabang alur keluar yang berlabel."
        },
        {
            "id": 4,
            "q": "Simbol apakah yang digunakan untuk memutus garis alir yang terlalu panjang pada lembar halaman YANG SAMA?",
            "options": ["Off-Page Connector (Segilima)", "On-Page Connector (Lingkaran Kecil)", "Terminator (Oval)", "Predefined Process"],
            "ans": 1,
            "exp": "On-Page Connector (Lingkaran Kecil) digunakan untuk menyambungkan alur pada satu halaman yang sama tanpa garis silang ruwet."
        },
        {
            "id": 5,
            "q": "Manakah pernyataan yang paling tepat membedakan Flowchart dengan Data Flow Diagram (DFD)?",
            "options": [
                "Flowchart memetakan urutan kendali waktu eksekusi, sedangkan DFD memetakan aliran data tanpa keputusan waktu.",
                "Flowchart hanya untuk hardware, sedangkan DFD untuk software.",
                "DFD memiliki simbol belah ketupat, sedangkan Flowchart tidak.",
                "Flowchart dan DFD adalah istilah yang sama persis."
            ],
            "ans": 0,
            "exp": "Flowchart adalah Control Flow (urutan kronologis instruksi), sedangkan DFD adalah Data Flow (aliran paket data tanpa percabangan if-else)."
        },
        {
            "id": 6,
            "q": "Apa akibat fatal jika perulangan (looping) dalam flowchart tidak memiliki variabel pengubah / counter penambah?",
            "options": ["Syntax Error", "Infinite Loop (Perulangan Tanpa Henti)", "Memori otomatis kosong", "Hasil perhitungan selalu nol"],
            "ans": 1,
            "exp": "Tanpa penambahan nilai penghitung, kondisi berhenti tidak akan pernah tercapai sehingga terjadi Infinite Loop yang membekukan program."
        },
        {
            "id": 7,
            "q": "Simbol silinder tegak pada flowchart sistem merepresentasikan...",
            "options": ["Dokumen Cetak Fisik", "Monitor Komputer", "Basis Data (Database / Stored Data)", "Keyboard Fisik"],
            "ans": 2,
            "exp": "Bentuk silinder adalah simbol standar internasional untuk Database atau penyimpanan data digital permanen."
        },
        {
            "id": 8,
            "q": "Manakah standar internasional yang mengatur standarisasi simbol flowchart dan pengolahan data grafis?",
            "options": ["ISO 9001", "ISO 5807:1985", "IEEE 802.11", "W3C HTML5"],
            "ans": 1,
            "exp": "ISO 5807:1985 adalah standar resmi dari International Organization for Standardization untuk diagram pengolahan informasi."
        },
        {
            "id": 9,
            "q": "Simbol Persegi Panjang dengan dua garis ganda di sisi kiri dan kanannya disebut...",
            "options": ["Alternate Process", "Predefined Process / Subroutine", "Preparation", "Manual Operation"],
            "ans": 1,
            "exp": "Predefined Process digunakan untuk pemanggilan subprogram, fungsi, atau modul terpisah."
        },
        {
            "id": 10,
            "q": "Kapan struktur perulangan (Looping) dikatakan bertipe Pre-Tested (seperti WHILE loop)?",
            "options": [
                "Kondisi pengujian dievaluasi di awal sebelum badan perulangan dikerjakan.",
                "Kondisi pengujian dievaluasi di akhir setelah badan loop dikerjakan sekali.",
                "Loop dijalankan tanpa kondisi.",
                "Loop langsung berhenti di langkah pertama."
            ],
            "ans": 0,
            "exp": "Pre-tested loop memeriksa kondisi sebelum masuk ke blok instruksi; jika kondisi awal False, badan loop tidak pernah dieksekusi."
        },
        {
            "id": 11,
            "q": "Jika Anda ingin menggambarkan alur SOP pendaftaran siswa baru yang melibatkan interaksi siswa, petugas TU, dan kepala sekolah, format flowchart apa yang paling ideal?",
            "options": ["Program Flowchart", "Swimlane / Process Flowchart", "Data Flowchart", "Document Flowchart murni"],
            "ans": 1,
            "exp": "Format Swimlane (jalur renang) memisahkan kolom tanggung jawab lintas entitas atau departemen dengan sangat jelas."
        },
        {
            "id": 12,
            "q": "Manakah yang BUKAN merupakan ciri algoritma yang baik menurut Donald Knuth?",
            "options": ["Finiteness (Pasti Berakhir)", "Definiteness (Jelas dan Pasti)", "Infiniteness (Berjalan Selamanya)", "Effectiveness (Langkah Efektif)"],
            "ans": 2,
            "exp": "Algoritma wajib Finiteness (berhingga); berjalan selamanya tanpa akhir adalah bug, bukan ciri algoritma yang baik."
        },
        {
            "id": 13,
            "q": "Apa arti dari simbol Trapesium Terbalik dalam flowchart?",
            "options": ["Manual Operation (Operasi Manual Manusia)", "Manual Input", "Display Monitor", "Penyimpanan Magnetik"],
            "ans": 0,
            "exp": "Trapesium terbalik adalah simbol Manual Operation, yaitu tindakan fisik manusia tanpa campur tangan komputer."
        },
        {
            "id": 14,
            "q": "Alat bantu pembuatan diagram berbasis kode teks yang sangat populer dan terintegrasi di GitHub adalah...",
            "options": ["Adobe Photoshop", "Mermaid.js", "CorelDraw", "Notepad murni"],
            "ans": 1,
            "exp": "Mermaid.js adalah library text-to-diagram open-source standar dunia pengembang perangkat lunak."
        },
        {
            "id": 15,
            "q": "Teknik pengujian logika flowchart secara manual di atas kertas menggunakan pensil dan tabel nilai masukan disebut...",
            "options": ["Unit Testing Otomatis", "Uji Meja (Trace Table / Dry Run)", "Compile Time Checking", "Reverse Engineering"],
            "ans": 1,
            "exp": "Trace Table / Dry Run adalah teknik manual menelusuri variabel langkah demi langkah untuk membuktikan kebenaran logika."
        }
    ]

    # 10 Soal Benar / Salah
    bs_questions = [
        {
            "id": 1,
            "q": "Sebuah flowchart yang valid boleh memiliki 3 simbol Mulai (Start) yang berbeda.",
            "ans": False,
            "exp": "SALAH. Flowchart hanya boleh memiliki tepat 1 titik awal Mulai (Start) agar awal eksekusi program tidak ambigu."
        },
        {
            "id": 2,
            "q": "Simbol Jajar Genjang digunakan untuk proses membaca data input sekaligus mencetak hasil output.",
            "ans": True,
            "exp": "BENAR. Jajar Genjang adalah simbol umum Data Input/Output."
        },
        {
            "id": 3,
            "q": "Pseudocode dapat langsung dijalankan oleh komputer tanpa perlu dikompilasi atau diinterpretasikan.",
            "ans": False,
            "exp": "SALAH. Pseudocode hanyalah notasi informal untuk manusia. Hanya bahasa pemrograman formal (seperti Python, C++) yang bisa dijalankan komputer."
        },
        {
            "id": 4,
            "q": "Garis alir (flowline) standar mengalir dari atas ke bawah atau dari kiri ke kanan.",
            "ans": True,
            "exp": "BENAR. Arah alami pembacaan diagram standar ANSI/ISO adalah top-to-bottom dan left-to-right."
        },
        {
            "id": 5,
            "q": "Dalam simbol Decision (Belah Ketupat), kita tidak wajib memberi label 'Ya' atau 'Tidak' pada garis panah keluar.",
            "ans": False,
            "exp": "SALAH. Label Ya/Tidak mutlak wajib agar pembaca tahu jalur mana yang diambil saat kondisi terpenuhi atau tidak."
        },
        {
            "id": 6,
            "q": "Simbol Segi Enam (Preparation) biasanya digunakan untuk inisialisasi variabel awal pada perulangan.",
            "ans": True,
            "exp": "BENAR. Hexagon Preparation dirancang khusus untuk deklarasi dan penyiapan nilai awal variabel pengontrol."
        },
        {
            "id": 7,
            "q": "Semua jenis flowchart selalu memuat kode program Python di dalam kotak simbolnya.",
            "ans": False,
            "exp": "SALAH. Flowchart independen dari bahasa pemrograman. Isi simbolnya adalah kalimat instruksi logis ringkas, bukan kode mentah."
        },
        {
            "id": 8,
            "q": "Program Flowchart adalah jenis flowchart yang paling banyak digunakan oleh programmer untuk merancang algoritma fungsi.",
            "ans": True,
            "exp": "BENAR. Program flowchart berfokus langsung pada instruksi logika langkah demi langkah pengkodean."
        },
        {
            "id": 9,
            "q": "Simbol Dokumen (kertas bergelombang) menandakan penyimpanan permanen data di harddisk.",
            "ans": False,
            "exp": "SALAH. Penyimpanan di harddisk menggunakan simbol Silinder Database. Simbol dokumen untuk keluaran kertas cetak / faktur fisik."
        },
        {
            "id": 10,
            "q": "Dry Run (Uji Meja) sangat dianjurkan dilakukan sebelum menuliskan kode di aplikasi compiler.",
            "ans": True,
            "exp": "BENAR. Uji meja menghemat waktu berjam-jam dengan menemukan cacat logika sebelum program diketik."
        }
    ]

    return {
        "id": "bab10",
        "num": "BAB X",
        "title": "Latihan dan Evaluasi Interaktif",
        "subtitle": "Kuis Pilihan Ganda, Benar/Salah, Tebak Simbol, Analisis Urutan, dan Tantangan Debugging",
        "learningGoals": [
            "Menguji pemahaman menyeluruh tentang materi Bab I sampai Bab IX secara mandiri.",
            "Mendapatkan umpan balik langsung (instant feedback) dan pembahasan logis untuk setiap soal.",
            "Mengasah kemampuan berpikir kritis dalam mendeteksi galat diagram alir.",
            "Menyiapkan diri menghadapi ujian akademik maupun seleksi teknis pemrograman."
        ],
        "pgQuestions": pg_questions,
        "bsQuestions": bs_questions,
        "symbolQuestions": [
            {"no": 1, "shape": "Oval", "ans": "Terminator (Awal/Akhir Program)"},
            {"no": 2, "shape": "Persegi Panjang", "ans": "Process (Operasi / Kalkulasi Rumus)"},
            {"no": 3, "shape": "Belah Ketupat", "ans": "Decision (Percabangan Keputusan Ya/Tidak)"},
            {"no": 4, "shape": "Jajar Genjang", "ans": "Input / Output Data Generik"},
            {"no": 5, "shape": "Lingkaran Kecil", "ans": "On-Page Connector (Penghubung Satu Halaman)"},
            {"no": 6, "shape": "Segilima Rumah Terbalik", "ans": "Off-Page Connector (Penghubung Beda Halaman)"},
            {"no": 7, "shape": "Persegi Garis Ganda", "ans": "Predefined Process (Pemanggilan Subprogram/Fungsi)"},
            {"no": 8, "shape": "Segi Enam (Hexagon)", "ans": "Preparation (Inisialisasi Nilai Awal)"},
            {"no": 9, "shape": "Silinder Tegak", "ans": "Database / Stored Data (Penyimpanan Basis Data)"},
            {"no": 10, "shape": "Persegi Bawah Bergelombang", "ans": "Document (Keluaran Berkas / Cetak Fisik)"}
        ],
        "sequenceExercises": [
            {
                "no": 1,
                "title": "Membuat Teh Manis Hangat",
                "scrambled": ["Aduk hingga rata", "Siapkan cangkir dan teh celup", "Tuang air panas", "Masukkan gula pasir", "Teh manis siap disajikan"],
                "correct": ["Siapkan cangkir dan teh celup", "Tuang air panas", "Masukkan gula pasir", "Aduk hingga rata", "Teh manis siap disajikan"]
            },
            {
                "no": 2,
                "title": "Menghitung Luas Lingkaran",
                "scrambled": ["Tampilkan nilai luas", "Mulai", "Hitung luas = 3.14 * r * r", "Selesai", "Input jari-jari (r)"],
                "correct": ["Mulai", "Input jari-jari (r)", "Hitung luas = 3.14 * r * r", "Tampilkan nilai luas", "Selesai"]
            }
        ],
        "debuggingExercises": [
            {
                "no": 1,
                "title": "Bug: Infinite Loop pada Hitung Mundur",
                "problem": "Variabel counter tidak dikurangi nilainya (counter = counter - 1) di dalam loop, sehingga angka selalu 10.",
                "solution": "Tambahkan blok proses: counter = counter - 1 sebelum panah kembali ke atas."
            },
            {
                "no": 2,
                "title": "Bug: Pembagian dengan Nol",
                "problem": "Program menghitung c = a / b tanpa mengecek apakah nilai b adalah nol.",
                "solution": "Pasang simbol decision: Apakah b == 0? Jika ya, cetak 'Pembagi tidak boleh nol' dan hentikan program."
            }
        ],
        "miniProjects": [
            {
                "no": 1,
                "title": "Sistem Pembelian Kopi Otomatis (Vending Machine)",
                "task": "Rancang flowchart mesin penjual otomatis yang menerima koin, mengecek pilihan minuman, dan mengembalikan kembalian."
            },
            {
                "no": 2,
                "title": "Game Batu-Gunting-Kertas Melawan Komputer",
                "task": "Rancang flowchart permainan di mana komputer memilih acak dan menentukan siapa yang menang."
            },
            {
                "no": 3,
                "title": "Detektor Demam & Skrining Masuk Lab Sekolah",
                "task": "Rancang alur otomatis sensor suhu: jika suhu >= 37.5°C, tolak masuk dan bunyikan alarm buzzer."
            }
        ]
    }

def get_bab11():
    return {
        "id": "bab11",
        "num": "BAB XI",
        "title": "Proyek Akhir Perancangan Sistem",
        "subtitle": "Tiga Studi Kasus Nyata Tingkat Enterprise Dilengkapi Algoritma, Flowchart, Pseudocode, dan Rubrik Penilaian",
        "learningGoals": [
            "Menerapkan seluruh pengetahuan flowchart ke dalam proyek sistem dunia nyata skala penuh.",
            "Menghasilkan dokumentasi rekayasa sistem yang profesional (I/O, Flowchart, Pseudocode, Test Cases).",
            "Menilai mutu rancangan diagram alir menggunakan rubrik standar akademik industri."
        ],
        "projects": [
            {
                "id": "proj-1",
                "no": 1,
                "title": "Proyek 1: Sistem Penilaian Mahasiswa & Perhitungan Kelulusan Akademik",
                "bg": "Institusi pendidikan tinggi membutuhkan sistem otomatisasi rekapitulasi nilai mahasiswa dengan komponen nilai majemuk (Kehadiran 10%, Tugas 20%, UTS 30%, UAS 40%), penentuan huruf mutu (A, B, C, D, E), serta status kelulusan mata kuliah.",
                "problem": "Perhitungan manual sering memicu selisih koma desimal, kesalahan pembulatan, dan keterlambatan publikasi transkrip mahasiswa.",
                "io": "Input: nim, nama, nilai_hadir, nilai_tugas, nilai_uts, nilai_uas. Output: nilai_akhir, grade, status ('LULUS' / 'TIDAK LULUS').",
                "rules": "Kehadiran minimal 75% adalah syarat mutlak; jika kehadiran < 75%, otomatis mendapat grade E tanpa memedulikan nilai lainnya. Nilai Akhir = (0.10 * Hadir) + (0.20 * Tugas) + (0.30 * UTS) + (0.40 * UAS). Grade: >=85 (A), >=75 (B), >=65 (C), >=50 (D), <50 (E). Syarat Lulus: Grade minimal C.",
                "mermaid": """flowchart TD
    S([MULAI]) --> In[/Input: nim, nama, hadir, tugas, uts, uas/]
    In --> C1{"hadir >= 75?"}
    C1 -- Tidak --> F1["grade = 'E'<br>status = 'TIDAK LULUS (Kehadiran Kurang)'"]
    C1 -- Ya --> Calc["NA = (0.10*hadir) + (0.20*tugas) + (0.30*uts) + (0.40*uas)"]
    Calc --> G1{"NA >= 85?"}
    G1 -- Ya --> GA["grade = 'A'"]
    G1 -- Tidak --> G2{"NA >= 75?"}
    G2 -- Ya --> GB["grade = 'B'"]
    G2 -- Tidak --> G3{"NA >= 65?"}
    G3 -- Ya --> GC["grade = 'C'"]
    G3 -- Tidak --> G4{"NA >= 50?"}
    G4 -- Ya --> GD["grade = 'D'"]
    G4 -- Tidak --> GE["grade = 'E'"]
    GA --> St{"grade IN ('A','B','C')?"}
    GB --> St
    GC --> St
    GD --> St
    GE --> St
    St -- Ya --> Pass["status = 'LULUS'"]
    St -- Tidak --> Fail["status = 'TIDAK LULUS'"]
    F1 --> Out[/Tampilkan: nama, NA, grade, status/]
    Pass --> Out
    Fail --> Out
    Out --> E([SELESAI])""",
                "pseudo": """PROGRAM PenilaianMahasiswa
ALGORITMA:
    READ(nim, nama, hadir, tugas, uts, uas)
    IF hadir < 75 THEN
        grade = 'E'; status = 'TIDAK LULUS'
    ELSE
        NA = (0.10 * hadir) + (0.20 * tugas) + (0.30 * uts) + (0.40 * uas)
        IF NA >= 85 THEN grade = 'A'
        ELIF NA >= 75 THEN grade = 'B'
        ELIF NA >= 65 THEN grade = 'C'
        ELIF NA >= 50 THEN grade = 'D'
        ELSE grade = 'E'
        ENDIF
        IF grade IN ('A', 'B', 'C') THEN status = 'LULUS' ELSE status = 'TIDAK LULUS' ENDIF
    ENDIF
    WRITE(nama, NA, grade, status)
ENDPROGRAM""",
                "testCases": [
                    {"kasus": "Mahasiswa Pintar Rajin", "input": "Hadir: 100, Tugas: 90, UTS: 85, UAS: 90", "expected": "NA: 89.5 | Grade A | LULUS"},
                    {"kasus": "Mahasiswa Kurang Hadir", "input": "Hadir: 60, Tugas: 100, UTS: 100, UAS: 100", "expected": "Grade E | TIDAK LULUS (Kehadiran < 75%)"}
                ],
                "rubric": "1. Keabsahan Simbol (25%) | 2. Kelengkapan Validasi Kondisi (35%) | 3. Keterbacaan & Kerapian (20%) | 4. Sinkronisasi Pseudocode (20%)"
            },
            {
                "id": "proj-2",
                "no": 2,
                "title": "Proyek 2: Sistem Transaksi Point-of-Sale (POS) Kasir Toko Modern",
                "bg": "Mini market modern memerlukan sistem kasir yang dapat menginput banyak item secara berulang (*multi-item looping*), menghitung subtotal, mendeteksi kartu member untuk diskon tambahan 5%, menambahkan PPN 11%, dan memverifikasi pembayaran tunai.",
                "problem": "Antrean kasir yang mengular memerlukan sistem yang andal menangani kalkulasi keranjang belanja dinamis tanpa batas item.",
                "io": "Input: loop barang (nama, harga, qty), is_member, uang_tunai. Output: subtotal, diskon_member, ppn, total_bayar, uang_kembalian.",
                "rules": "Perulangan kasir berhenti ketika kasir menginput kode barang 'SELESAI' atau '0'. Jika member == True, diskon = 5% dari subtotal. PPN = 11% dari (subtotal - diskon).",
                "mermaid": """flowchart TD
    S([MULAI]) --> Init["subtotal = 0<br>is_member = False"]
    Init --> LoopCheck{"Ada barang belanjaan lagi?"}
    LoopCheck -- Ya --> InItem[/Input: harga, qty/]
    InItem --> AddItem["subtotal += (harga * qty)"]
    AddItem --> LoopCheck
    LoopCheck -- Tidak --> MemAsk[/Input: Punya Kartu Member? /]
    MemAsk --> MemCond{"is_member == True?"}
    MemCond -- Ya --> Disc["diskon = 0.05 * subtotal"]
    MemCond -- Tidak --> NoDisc["diskon = 0"]
    Disc --> Tax["dpp = subtotal - diskon<br>ppn = 0.11 * dpp<br>total_bayar = dpp + ppn"]
    NoDisc --> Tax
    Tax --> PayIn[/Input: uang_tunai/]
    PayIn --> PayCond{"uang_tunai >= total_bayar?"}
    PayCond -- Ya --> Change["kembalian = uang_tunai - total_bayar"]
    PayCond -- Tidak --> Kurang[/Tampilkan: Uang Kurang! Minta Tambahan/]
    Kurang --> PayIn
    Change --> Receipt[/Cetak Struk Transaksi Kasir/]
    Receipt --> Fin([SELESAI])""",
                "pseudo": """PROGRAM TransaksiPOSKasir
ALGORITMA:
    subtotal = 0
    WHILE MasihAdaBarang() DO
        READ(harga, qty)
        subtotal = subtotal + (harga * qty)
    ENDWHILE
    READ(is_member)
    IF is_member == TRUE THEN diskon = 0.05 * subtotal ELSE diskon = 0 ENDIF
    dpp = subtotal - diskon
    ppn = 0.11 * dpp
    total_bayar = dpp + ppn
    REPEAT
        READ(uang_tunai)
        IF uang_tunai < total_bayar THEN WRITE("Uang Kurang!") ENDIF
    UNTIL uang_tunai >= total_bayar
    kembalian = uang_tunai - total_bayar
    CETAK_STRUK(subtotal, diskon, ppn, total_bayar, uang_tunai, kembalian)
ENDPROGRAM""",
                "testCases": [
                    {"kasus": "Belanja 2 Item dengan Member", "input": "Barang A: 20rb x 2, Barang B: 10rb x 1, Member: Ya, Tunai: 100rb", "expected": "Subtotal: 50rb, Diskon: 2.5rb, PPN: 5.225, Bayar: 52.725, Kembali: 47.275"}
                ],
                "rubric": "1. Logika Looping Keranjang (30%) | 2. Akurasi Perhitungan Pajak & Diskon (30%) | 3. Validasi Uang Pembayaran (20%) | 4. Kelengkapan Output (20%)"
            },
            {
                "id": "proj-3",
                "no": 3,
                "title": "Proyek 3: Sistem Registrasi Akun & Pengaduan Fasilitas Digital",
                "bg": "Dinas Pelayanan Publik Sekolah merancang portal digital agar siswa dapat melaporkan kerusakan fasilitas kelas (AC, Proyektor, Meja) secara transparan disertai notifikasi berkala.",
                "problem": "Laporan lisan sering tercecer, petugas tidak tahu prioritas perbaikan, dan siswa tidak memiliki kepastian kapan fasilitas diperbaiki.",
                "io": "Input: nisn, password, kategori_fasilitas, deskripsi, foto_lampiran. Output: tiket_id, status_pengerjaan, estimasi_waktu.",
                "rules": "Siswa harus terotentikasi. Sistem memeriksa antrean petugas. Jika fasilitas kategori 'Kritis' (seperti listrik korsleting), set prioritas TINGGI dan langsung kirim alarm ke teknisi siaga.",
                "mermaid": """flowchart TD
    S([MULAI]) --> Auth[/Input: NISN, Sandi/]
    Auth --> CAuth{"Akun Terdaftar & Benar?"}
    CAuth -- Tidak --> E1[/Gagal Login: Kredensial Salah/]
    CAuth -- Ya --> Form[/Input: Kategori, Deskripsi, Foto/]
    Form --> Val{"Data Lengkap & Foto Valid?"}
    Val -- Tidak --> E2[/Error: Lengkapi Berkas Pengaduan/]
    Val -- Ya --> GenID["Generate Nomor Tiket Unik"]
    GenID --> PriCheck{"Kategori == 'Kritis'?"}
    PriCheck -- Ya --> HighP["prioritas = 'TINGGI'<br>Kirim Notif WhatsApp Teknisi Siaga"]
    PriCheck -- Tidak --> NormP["prioritas = 'NORMAL'<br>Masukkan Antrean Reguler"]
    HighP --> DB[(Simpan Tiket ke Database)]
    NormP --> DB
    DB --> Out[/Tampilkan: Tiket Berhasil Dibuat, No Tiket/]
    E1 --> Fin([SELESAI])
    E2 --> Form
    Out --> Fin""",
                "pseudo": """PROGRAM LayananPengaduanSekolah
ALGORITMA:
    READ(nisn, sandi)
    IF Otentikasi(nisn, sandi) == FALSE THEN
        WRITE("Login Ditolak")
        EXIT
    ENDIF
    READ(kategori, deskripsi, foto)
    tiket_id = GenerateTicket()
    IF kategori == "Kritis" THEN
        prioritas = "TINGGI"
        DispatchDarurat(tiket_id)
    ELSE
        prioritas = "NORMAL"
        AntreanReguler(tiket_id)
    ENDIF
    SimpanDatabase(tiket_id, nisn, kategori, prioritas, "DALAM_PROSES")
    WRITE("Pengaduan Berhasil Terkirim. Nomor Tiket:", tiket_id)
ENDPROGRAM""",
                "testCases": [
                    {"kasus": "Laporan Korsleting Listrik", "input": "Kategori: Listrik / Kritis", "expected": "Prioritas TINGGI ➔ Notif Teknisi Langsung"},
                    {"kasus": "Laporan Kursi Goyang", "input": "Kategori: Meubel / Normal", "expected": "Prioritas NORMAL ➔ Antrean Reguler"}
                ],
                "rubric": "1. Struktur Alur Keamanan & Validasi (25%) | 2. Alur Keputusan Prioritas (35%) | 3. Arsitektur Database (20%) | 4. Kelengkapan Uji Kasus (20%)"
            }
        ]
    }

def get_bab12():
    return {
        "id": "bab12",
        "num": "BAB XII",
        "title": "Rangkuman, Glosarium & Daftar Pustaka",
        "subtitle": "Kompilasi Teori 12 Bab, Glosarium A-Z, Cheatsheet Cepat, Checklist Mutu, dan Sumber Referensi",
        "learningGoals": [
            "Mereviu poin-poin kunci pembelajaran dari Bab I hingga Bab XI.",
            "Memahami istilah teknis komputasi melalui glosarium komprehensif.",
            "Menggunakan Checklist QA Mutu untuk memvalidasi diagram sebelum dipublikasikan.",
            "Menelusuri sumber pustaka otoritatif yang dapat diverifikasi."
        ],
        "glossary": [
            {"term": "Algoritma", "def": "Urutan langkah-langkah logis, berhingga, dan terdefinisi dengan pasti untuk memecahkan suatu permasalahan komputasi."},
            {"term": "ANSI", "def": "American National Standards Institute, badan standardisasi Amerika yang memformalkan simbol diagram alir pertama di dunia."},
            {"term": "Control Flow", "def": "Urutan kronologis arah pergerakan instruksi yang dieksekusi oleh mesin komputasi."},
            {"term": "Decision", "def": "Bangun belah ketupat yang menguji kondisi bernilai Boolean (True/False) dengan minimal dua jalur cabang berlabel."},
            {"term": "DFD (Data Flow Diagram)", "def": "Diagram yang memetakan aliran dan transformasi paket data tanpa memperlihatkan urutan kontrol waktu atau keputusan percabangan."},
            {"term": "Dry Run (Trace Table)", "def": "Metode verifikasi algoritma secara manual menggunakan pensil dan tabel jejak nilai untuk memastikan tidak ada kesalahan logika."},
            {"term": "Flowline", "def": "Garis berpanah yang menunjukkan arah pergerakan alur kendali dari satu langkah ke langkah berikutnya."},
            {"term": "Finiteness", "def": "Sifat mutlak algoritma yang menyatakan bahwa program harus berhenti setelah sejumlah langkah terhingga dieksekusi."},
            {"term": "Infinite Loop", "def": "Kondisi galat fatal di mana perulangan berjalan selamanya tanpa akhir karena kondisi berhenti tidak pernah terpenuhi."},
            {"term": "ISO", "def": "International Organization for Standardization, badan internasional yang menerbitkan standar ISO 5807:1985 untuk diagram alir data dan program."},
            {"term": "Mermaid.js", "def": "Library open-source berbasis JavaScript yang mengonversi teks Markdown menjadi diagram visual secara dinamis."},
            {"term": "On-Page Connector", "def": "Simbol lingkaran kecil yang menyambungkan garis alir pada satu halaman dokumen yang sama."},
            {"term": "Off-Page Connector", "def": "Simbol segi lima seperti rumah terbalik untuk menyambungkan alur yang berpindah ke lembar halaman berikutnya."},
            {"term": "Predefined Process", "def": "Simbol persegi panjang bergaris ganda yang menyatakan pemanggilan fungsi, prosedur, atau subprogram terpisah."},
            {"term": "Preparation", "def": "Simbol segi enam (hexagon) yang digunakan untuk inisialisasi variabel dan penyiapan counter perulangan."},
            {"term": "Pseudocode", "def": "Teks notasi informal yang menyerupai bahasa pemrograman tingkat tinggi untuk menggambarkan logika algoritma bagi pembaca manusia."},
            {"term": "Swimlane", "def": "Format diagram alir yang membagi kanvas menjadi lajur-lajur tanggung jawab departemen/aktor seperti lintasan kolam renang."},
            {"term": "Terminator", "def": "Simbol oval/kapsul yang menandai titik awal (Mulai) dan titik akhir (Selesai) dari alur diagram."}
        ],
        "qaChecklist": [
            "Apakah diagram memiliki tepat satu simbol Mulai (Start) berbentuk Oval?",
            "Apakah seluruh garis panah memiliki mata panah yang jelas dan mengarah secara logis (top-to-bottom / left-to-right)?",
            "Apakah seluruh simbol Decision (Belah Ketupat) memiliki minimal 2 jalur keluar yang masing-masing diberi label eksplisit (Ya/Tidak)?",
            "Apakah seluruh cabang percabangan pada akhirnya bertemu kembali dan bermuara ke simbol Selesai (End)?",
            "Apakah tidak ada garis alir yang saling memotong/menyilang secara tidak rapi tanpa simbol connector?",
            "Apakah simbol Jajar Genjang murni digunakan untuk Input/Output dan bukan untuk proses perhitungan?",
            "Apakah simbol Persegi Panjang hanya memuat instruksi proses kalkulasi internal tanpa kata tanya kondisi?",
            "Apakah seluruh struktur perulangan (looping) memiliki mekanisme pengubah nilai pengontrol (counter increment) agar bebas infinite loop?",
            "Apakah telah dilakukan pengujian Uji Meja (Trace Table) dengan data normal maupun data ekstrem (edge case)?",
            "Apakah teks di dalam setiap simbol ditulis secara padat, ringkas, dan menggunakan kata kerja operasional?"
        ],
        "references": [
            {
                "title": "Dicoding Indonesia — Flowchart adalah: Fungsi, Simbol, dan Contohnya",
                "author": "Tim Edukasi Dicoding",
                "url": "https://www.dicoding.com/blog/flowchart-adalah/",
                "note": "Referensi pengertian mendasar, fungsi dalam rekayasa perangkat lunak, dan simbol-simbol inti alur program."
            },
            {
                "title": "Sekawan Media — Flowchart: Pengertian, Simbol, Fungsi, Jenis dan Contohnya",
                "author": "Sekawan Media Tech Team",
                "url": "https://www.sekawanmedia.co.id/blog/pengertian-dan-simbol-flowchart/",
                "note": "Referensi klasifikasi jenis flowchart (System, Program, Document, Process) dan implementasi industri bisnis."
            },
            {
                "title": "ITB Tuban — Memahami Flowchart: Pengertian, Fungsi, Simbol, dan Contoh Penggunaan",
                "author": "Institut Teknologi dan Bisnis Tuban",
                "url": "https://itbtuban.ac.id/memahami-flowchart-pengertian-fungsi-simbol-dan-contoh-penggunaan/",
                "note": "Referensi konteks pembelajaran akademik informatika dan pemecahan masalah algoritma komputasi."
            },
            {
                "title": "ISO 5807:1985 Information processing — Documentation symbols and conventions for data, program and system flowcharts, network charts and system resources charts",
                "author": "International Organization for Standardization (ISO)",
                "url": "https://www.iso.org/standard/11955.html",
                "note": "Standar internasional resmi de-jure untuk geometri simbol dan konvensi bagan alir komputasi."
            },
            {
                "title": "The Art of Computer Programming, Volume 1: Fundamental Algorithms",
                "author": "Donald E. Knuth",
                "url": "https://www-cs-faculty.stanford.edu/~knuth/taocp.html",
                "note": "Rujukan landasan teori algoritma, sifat finitiness, dan analisis komputasi."
            },
            {
                "title": "Mermaid.js Official Documentation — Flowcharts Syntax and Deployment",
                "author": "Mermaid Open Source Project",
                "url": "https://mermaid.js.org/syntax/flowchart.html",
                "note": "Panduan resmi penulisan sintaks teks untuk rendering visual diagram alir berbasis web modern."
            }
        ]
    }

print("content_bab10_12 ready")
