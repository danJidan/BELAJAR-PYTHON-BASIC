# content_bab4_6.py
# Modul konten BAB IV, BAB V, dan BAB VI

def get_bab4():
    return {
        "id": "bab4",
        "num": "BAB IV",
        "title": "Aturan dan Prinsip Pembuatan Flowchart",
        "subtitle": "Pedoman Standar ANSI/ISO, Kaidah Keterbacaan, dan Komparasi Kasus Benar vs Salah",
        "learningGoals": [
            "Memahami 13 prinsip dan aturan baku dalam menggambar flowchart yang valid.",
            "Menghindari kesalahan fatal seperti garis bersilangan, terminator ganda, dan cabang tanpa label.",
            "Menganalisis perbandingan langsung antara flowchart yang salah vs flowchart yang benar.",
            "Menerapkan teknik penanganan kondisi alternatif dan error handling dalam diagram alir."
        ],
        "sections": [
            {
                "id": "4-1-tiga-belas-prinsip",
                "title": "4.1 Tiga Belas Aturan Baku Pembuatan Flowchart",
                "content": """<p>Menggambar flowchart bukan sekadar menaruh kotak dan garis secara bebas. Ada 13 kaidah baku teknis yang harus dipatuhi agar diagram dapat diverifikasi secara ilmiah:</p>
                
                <div class="rules-grid">
                    <div class="rule-card">
                        <span class="rule-num">1</span>
                        <h4>Titik Awal & Akhir Tunggal</h4>
                        <p>Diagram harus memiliki tepat <strong>satu simbol Mulai (Start)</strong>. Titik akhir (Selesai/End) idealnya tunggal atau berkonvergensi ke titik terminasi yang jelas.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">2</span>
                        <h4>Arah Aliran Alami</h4>
                        <p>Alur standar diagram selalu bergerak dari <strong>atas ke bawah (top-to-bottom)</strong> atau dari <strong>kiri ke kanan (left-to-right)</strong>. Alur ke atas hanya diizinkan untuk perulangan (*loop*).</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">3</span>
                        <h4>Kewajiban Mata Panah</h4>
                        <p>Garis alir (*flowline*) <strong>wajib memiliki mata panah</strong> penunjuk arah di ujungnya. Garis polos tanpa mata panah dianggap tidak valid karena kehilangan orientasi kendali.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">4</span>
                        <h4>Penamaan Singkat & Padat</h4>
                        <p>Teks di dalam simbol harus ringkas, jelas, dan menggunakan kata kerja aktif (misal: <code>Hitung Diskon</code>, bukan kalimat narasi panjang seperti <em>Lalu kita menghitung diskon sebesar sepuluh persen</em>).</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">5</span>
                        <h4>Konsistensi Simbol I/O</h4>
                        <p>Gunakan simbol Jajar Genjang untuk interaksi data (Input/Output). Jangan menggunakan simbol Proses (Persegi Panjang) untuk membaca masukan pengguna.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">6</span>
                        <h4>Kaidah Simbol Decision</h4>
                        <p>Simbol Belah Ketupat <strong>wajib memiliki minimal 2 jalur keluar</strong> yang masing-masing <strong>diberi label eksplisit</strong>: <em>Ya/Tidak</em>, <em>True/False</em>, atau <em>Nilai Pilihan</em>.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">7</span>
                        <h4>Konvergensi / Penggabungan Alur</h4>
                        <p>Ketika dua cabang percabangan selesai diproses, keduanya harus bertemu kembali pada satu titik aliran (simbol proses berikutnya atau terminator selesai) sebelum program berakhir.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">8</span>
                        <h4>Kondisi Terminasi Loop</h4>
                        <p>Setiap perulangan (*looping*) harus memiliki variabel pengontrol dan kondisi terminasi agar terhindar dari jebakan *Infinite Loop* (perulangan tanpa akhir).</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">9</span>
                        <h4>Gunakan On-Page Connector</h4>
                        <p>Jika diagram mulai rumit, gunakan simbol lingkaran penghubung (On-Page Connector) dengan huruf identik (misal: <code>A</code> ➔ <code>A</code>) untuk memotong garis panjang.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">10</span>
                        <h4>Hindari Garis Berpotongan</h4>
                        <p>Garis panah tidak boleh saling tumpang tindih menyilang (<em>crossing lines</em>). Gunakan jembatan garis lengkung atau connector jika persilangan tak terhindarkan.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">11</span>
                        <h4>Ukuran Simbol Proporsional</h4>
                        <p>Jaga keseragaman dimensi simbol agar diagram tampak rapi, teratur, dan profesional saat dipresentasikan atau dicetak.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">12</span>
                        <h4>Keterbacaan & Spasi Visual</h4>
                        <p>Beri jarak vertikal dan horizontal yang konsisten antar-simbol (rekomendasi 20–30 mm) agar mata pembaca nyaman menelusuri alur.</p>
                    </div>
                    <div class="rule-card">
                        <span class="rule-num">13</span>
                        <h4>Penanganan Error (Edge Cases)</h4>
                        <p>Jangan hanya merancang alur sukses (*happy path*). Selalu sediakan cabang penanganan jika pengguna memasukkan data salah (misal: input angka minus pada umur).</p>
                    </div>
                </div>"""
            },
            {
                "id": "4-2-kasus-benar-salah",
                "title": "4.2 Komparasi Kasus Nyata: Flowchart yang Salah vs Flowchart yang Benar",
                "content": """<p>Mari kita bedah sebuah kasus nyata: <strong>Alur Validasi Usia Pembuatan SIM (Surat Izin Mengemudi)</strong> dengan syarat usia minimal 17 tahun.</p>
                
                <div class="grid-2-col">
                    <div class="card-wrong">
                        <div class="badge badge-red">❌ CONTOH FLOWCHART SALAH</div>
                        <h4>Apa Saja Kesalahan Fatalnya?</h4>
                        <ul>
                            <li>Menggunakan persegi panjang biasa untuk awal/akhir (bukan oval).</li>
                            <li>Menggunakan persegi panjang untuk input usia (seharusnya jajar genjang).</li>
                            <li>Cabang belah ketupat tidak memiliki label <em>Ya</em> atau <em>Tidak</em>.</li>
                            <li>Jalur penolakan menggantung di udara tanpa pernah menuju titik Selesai.</li>
                        </ul>
                        <div class="mermaid-container">
                            <pre class="mermaid">
flowchart TD
    W1[Mulai] --> W2[Input Usia Siswa]
    W2 --> W3{Usia >= 17}
    W3 --> W4[Cetak SIM Diterbitkan]
    W3 --> W5[Tolak Permohonan]
    W4 --> W6[Selesai]
                            </pre>
                        </div>
                    </div>

                    <div class="card-correct">
                        <div class="badge badge-green">✅ CONTOH FLOWCHART BENAR</div>
                        <h4>Mengapa Diagram Ini Valid & Sempurna?</h4>
                        <ul>
                            <li>Titik Mulai dan Selesai menggunakan simbol Terminator (Oval) standar.</li>
                            <li>Input data usia menggunakan Jajar Genjang yang tepat.</li>
                            <li>Cabang Decision memiliki label jelas (<em>Ya</em> dan <em>Tidak</em>).</li>
                            <li>Seluruh cabang berkonvergensi kembali secara rapi menuju titik Selesai.</li>
                        </ul>
                        <div class="mermaid-container">
                            <pre class="mermaid">
flowchart TD
    C1([MULAI]) --> C2[/Input: usia/]
    C2 --> C3{"Apakah usia >= 17?"}
    C3 -- Ya --> C4[/Tampilkan: Berhak Mendapat SIM/]
    C3 -- Tidak --> C5[/Tampilkan: Belum Cukup Umur/]
    C4 --> C6([SELESAI])
    C5 --> C6
                            </pre>
                        </div>
                    </div>
                </div>"""
            },
            {
                "id": "4-3-rangkuman",
                "title": "4.3 Rangkuman Bab IV",
                "content": """<div class="summary-box">
                    <h4>📌 Rangkuman Inti Bab IV:</h4>
                    <ul>
                        <li>Flowchart yang baik harus selalu berorientasi top-to-bottom, memiliki terminator tunggal, serta panah yang terhubung tanpa garis silang ruwet.</li>
                        <li>Percabangan belah ketupat tidak boleh memiliki cabang tanpa label identitas keputusan (Ya/Tidak).</li>
                        <li>Kualitas seorang programmer tecermin dari kemampuannya menangani skenario kesalahan masukan (*defensive programming*) di dalam bagan alir.</li>
                    </ul>
                </div>"""
            }
        ]
    }

def get_bab5():
    return {
        "id": "bab5",
        "num": "BAB V",
        "title": "Langkah Membuat Flowchart dari Nol",
        "subtitle": "Panduan Praktis Bertahap 11 Langkah Dilengkapi Studi Kasus Terpandu & Uji Meja (Trace Table)",
        "learningGoals": [
            "Menguasai alur kerja sistematis 11 langkah membuat diagram alir dari narasi mentah.",
            "Mampu menganalisis I-P-O (Input - Process - Output) dari permasalahan dunia nyata.",
            "Menuliskan algoritma deskriptif dan pseudocode sebelum menggambar simbol.",
            "Melakukan teknik Uji Meja (Trace Table / Dry Run) untuk memverifikasi kebenaran logika."
        ],
        "sections": [
            {
                "id": "5-1-sebelas-langkah",
                "title": "5.1 Metodologi 11 Langkah Membuat Flowchart",
                "content": """<p>Untuk menghasilkan flowchart yang bebas bug, ikuti panduan rekayasa langkah demi langkah berikut:</p>
                
                <div class="step-guide">
                    <div class="step-item">
                        <div class="step-circle">1</div>
                        <div class="step-body">
                            <h4>Pahami Permasalahan Secara Menyeluruh</h4>
                            <p>Baca narasi kebutuhan dengan teliti. Pahami apa batasan masalah, siapa penggunanya, dan apa ekspektasi akhirnya.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">2</div>
                        <div class="step-body">
                            <h4>Tentukan Tujuan Utama Proses</h4>
                            <p>Rumuskan dalam 1 kalimat padat: <em>"Tujuan program ini adalah menghitung tarif parkir berdasarkan durasi jam dan jenis kendaraan."</em></p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">3</div>
                        <div class="step-body">
                            <h4>Petakan I-P-O (Input, Process, Output)</h4>
                            <p>Kelompokkan elemen masukan, rumus perhitungan matematika/logika, dan elemen hasil yang ditampilkan.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">4</div>
                        <div class="step-body">
                            <h4>Tuliskan Algoritma Deskriptif Sederhana</h4>
                            <p>Tuliskan poin-poin bernomor menggunakan bahasa Indonesia sehari-hari yang mudah dicerna akal.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">5</div>
                        <div class="step-body">
                            <h4>Identifikasi Titik Kondisi & Keputusan</h4>
                            <p>Cari kata kunci penentu seperti: <em>jika, apabila, selama, bila gagal, apakah</em>. Ini adalah calon simbol Belah Ketupat.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">6</div>
                        <div class="step-body">
                            <h4>Pilih Simbol Standar yang Sesuai</h4>
                            <p>Petakan masing-masing poin langkah ke simbol geometris ANSI yang tepat (Oval, Jajar Genjang, Persegi, dll).</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">7</div>
                        <div class="step-body">
                            <h4>Susun Urutan Alur dari Atas ke Bawah</h4>
                            <p>Tempatkan simbol Mulai di posisi teratas, lalu hubungkan setiap langkah berikutnya dengan garis panah vertikal.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">8</div>
                        <div class="step-body">
                            <h4>Gambar Diagram secara Rapi</h4>
                            <p>Gunakan aplikasi pembuat diagram (Draw.io, Mermaid, atau kertas milimeter blok) dengan spasi yang proporsional.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">9</div>
                        <div class="step-body">
                            <h4>Uji Meja (Trace Table / Dry Run)</h4>
                            <p>Simulasikan jalannya program secara manual menggunakan pensil dan tabel nilai untuk berbagai skenario input.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">10</div>
                        <div class="step-body">
                            <h4>Perbaiki Kesalahan (Refactoring)</h4>
                            <p>Jika ditemukan cabang buntu, loop tanpa henti, atau variabel yang belum terdefinisi, sempurnakan bagan alir.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">11</div>
                        <div class="step-body">
                            <h4>Dokumentasikan Hasil</h4>
                            <p>Beri judul diagram, nomor versi dokumen, tanggal pembuatan, dan nama perancang diagram.</p>
                        </div>
                    </div>
                </div>"""
            },
            {
                "id": "5-2-studi-kasus-terpandu",
                "title": "5.2 Studi Kasus Terpandu: Sistem Tarif Parkir Mall Berbasis Jam",
                "content": """<p>Mari kita praktikkan ke-11 langkah di atas pada sebuah studi kasus nyata:</p>
                
                <div class="case-study-box">
                    <h4>Deskripsi Masalah:</h4>
                    <p>Sebuah mall menetapkan aturan tarif parkir mobil sebagai berikut: Tarif 2 jam pertama adalah <strong>Rp 5.000 (flat)</strong>. Untuk setiap jam berikutnya setelah 2 jam pertama, dikenakan tarif tambahan <strong>Rp 3.000 per jam</strong>. Pengguna memasukkan lama waktu parkir (dalam jam integer). Program menghitung dan menampilkan total biaya yang harus dibayar ke layar.</p>
                    
                    <h4>Langkah 3: Pemetaan I-P-O</h4>
                    <ul>
                        <li><strong>Input (I):</strong> <code>lama_jam</code> (integer positif)</li>
                        <li><strong>Proses (P):</strong> Cek apakah <code>lama_jam <= 2</code>. Jika ya, <code>total = 5000</code>. Jika tidak, <code>total = 5000 + (lama_jam - 2) * 3000</code>.</li>
                        <li><strong>Output (O):</strong> <code>total_bayar</code></li>
                    </ul>

                    <h4>Langkah 4: Pseudocode Formal</h4>
                    <div class="code-wrapper">
                        <pre><code>PROGRAM HitungTarifParkir
KAMUS:
    lama_jam, total_bayar : integer
ALGORITMA:
    READ(lama_jam)
    IF lama_jam <= 2 THEN
        total_bayar = 5000
    ELSE
        total_bayar = 5000 + ((lama_jam - 2) * 3000)
    ENDIF
    WRITE("Total Biaya Parkir: Rp", total_bayar)
ENDPROGRAM</code></pre>
                    </div>

                    <h4>Langkah 8: Bagan Flowchart Final</h4>
                    <div class="mermaid-container">
                        <pre class="mermaid">
flowchart TD
    Start([MULAI]) --> In[/Input: lama_jam/]
    In --> Cond{"Apakah lama_jam <= 2?"}
    Cond -- Ya --> Flat["total_bayar = 5000"]
    Cond -- Tidak --> Extra["total_bayar = 5000 + (lama_jam - 2) * 3000"]
    Flat --> Out[/Tampilkan: total_bayar/]
    Extra --> Out
    Out --> Finish([SELESAI])
                        </pre>
                    </div>

                    <h4>Langkah 9: Uji Meja (Trace Table / Dry Run)</h4>
                    <p>Mari kita uji alur diagram di atas dengan 4 skenario masukan berbeda untuk membuktikan bahwa logikanya 100% akurat:</p>
                    <div class="table-responsive">
                        <table class="table-custom">
                            <thead>
                                <tr>
                                    <th>Kasus Pengujian</th>
                                    <th>Nilai Input (lama_jam)</th>
                                    <th>Evaluasi Kondisi (lama_jam <= 2)</th>
                                    <th>Jalur yang Dipilih</th>
                                    <th>Perhitungan Biaya</th>
                                    <th>Output Akhir</th>
                                    <th>Status Uji</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Uji Batas Minimal</td>
                                    <td><code>1</code></td>
                                    <td>1 <= 2 ➔ <strong>TRUE (Ya)</strong></td>
                                    <td>Jalur Flat</td>
                                    <td><code>5000</code></td>
                                    <td>Rp 5.000</td>
                                    <td><span class="badge badge-green">LULUS ✅</span></td>
                                </tr>
                                <tr>
                                    <td>Uji Batas Ambang</td>
                                    <td><code>2</code></td>
                                    <td>2 <= 2 ➔ <strong>TRUE (Ya)</strong></td>
                                    <td>Jalur Flat</td>
                                    <td><code>5000</code></td>
                                    <td>Rp 5.000</td>
                                    <td><span class="badge badge-green">LULUS ✅</span></td>
                                </tr>
                                <tr>
                                    <td>Uji Kasus Normal Ekstra</td>
                                    <td><code>5</code></td>
                                    <td>5 <= 2 ➔ <strong>FALSE (Tidak)</strong></td>
                                    <td>Jalur Extra</td>
                                    <td><code>5000 + (3 * 3000) = 14000</code></td>
                                    <td>Rp 14.000</td>
                                    <td><span class="badge badge-green">LULUS ✅</span></td>
                                </tr>
                                <tr>
                                    <td>Uji Durasi Panjang</td>
                                    <td><code>10</code></td>
                                    <td>10 <= 2 ➔ <strong>FALSE (Tidak)</strong></td>
                                    <td>Jalur Extra</td>
                                    <td><code>5000 + (8 * 3000) = 29000</code></td>
                                    <td>Rp 29.000</td>
                                    <td><span class="badge badge-green">LULUS ✅</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>"""
            },
            {
                "id": "5-3-rangkuman",
                "title": "5.3 Rangkuman Bab V",
                "content": """<div class="summary-box">
                    <h4>📌 Rangkuman Inti Bab V:</h4>
                    <ul>
                        <li>Pembuatan flowchart yang profesional selalu diawali dengan dekomposisi <strong>Input-Process-Output (I-P-O)</strong> sebelum menggambar simbol apapun.</li>
                        <li>Teknik <strong>Uji Meja (Trace Table)</strong> adalah senjata utama programmer untuk mendeteksi kesalahan logika sebelum program di-coding ke komputer.</li>
                    </ul>
                </div>"""
            }
        ]
    }

def get_bab6():
    return {
        "id": "bab6",
        "num": "BAB VI",
        "title": "Struktur Kontrol dalam Flowchart",
        "subtitle": "Tiga Pilar Logika Komputasi: Sekuensial, Percabangan, dan Perulangan dengan Penerapan Python",
        "learningGoals": [
            "Memahami prinsip kerja struktur runtutan (Sequence).",
            "Menguasai ragam struktur percabangan: Tunggal (If), Ganda (If-Else), Majemuk (If-Elif-Else), dan Bersarang (Nested If).",
            "Menguasai ragam struktur perulangan: Pre-tested loop (While/For) dan Post-tested loop (Do-While).",
            "Mampu memetakan setiap konstruksi diagram secara presisi ke dalam baris kode Python yang valid."
        ],
        "sections": [
            {
                "id": "6-1-sequence",
                "title": "6.1 Struktur Runtutan (Sequence / Sekuensial)",
                "content": """<p><strong>Struktur Sekuensial</strong> adalah struktur paling sederhana di mana setiap instruksi dijalankan berurutan satu per satu dari atas ke bawah, persis sesuai urutan penulisannya, tanpa ada loncatan, percabangan, maupun perulangan.</p>
                
                <div class="grid-2-col">
                    <div>
                        <h4>Flowchart Visual Sekuensial:</h4>
                        <div class="mermaid-container">
                            <pre class="mermaid">
flowchart TD
    S([Mulai]) --> A[/Input: panjang, lebar/]
    A --> B["luas = panjang * lebar"]
    B --> C[/Tampilkan: luas/]
    C --> E([Selesai])
                            </pre>
                        </div>
                    </div>
                    <div>
                        <h4>Implementasi Kode Python yang Sinkron:</h4>
                        <div class="code-wrapper">
                            <pre><code class="language-python"># Struktur Sekuensial Murni
panjang = 20
lebar = 10

# Proses
luas = panjang * lebar

# Output
print(f"Luas Persegi Panjang: {luas} cm²")</code></pre>
                        </div>
                        <div class="alert alert-info">
                            <strong>Analisis Sinkronisasi:</strong> Baris 1-2 merepresentasikan Jajar Genjang Input, Baris 5 merepresentasikan Persegi Panjang Proses, dan Baris 8 merepresentasikan Jajar Genjang Output.
                        </div>
                    </div>
                </div>"""
            },
            {
                "id": "6-2-selection",
                "title": "6.2 Struktur Percabangan (Selection / Branching)",
                "content": """<p>Struktur Percabangan memungkinkan komputer memilih salah satu dari beberapa jalur instruksi berdasarkan terpenuhi atau tidaknya suatu kondisi logis (bernilai Boolean: <code>True</code> atau <code>False</code>).</p>
                
                <h4>A. Percabangan Tunggal (Single Selection: IF)</h4>
                <p>Aksi hanya dijalankan jika kondisi bernilai True. Jika False, alur langsung berlanjut tanpa melakukan aksi tambahan.</p>
                <div class="mermaid-container">
                    <pre class="mermaid">
flowchart TD
    A([Mulai]) --> B[/Input: total_belanja/]
    B --> C{"total_belanja >= 500000?"}
    C -- Ya --> D[/Tampilkan: Selamat Dapat Kupon Undian/]
    C -- Tidak --> E([Selesai])
    D --> E
                    </pre>
                </div>

                <h4>B. Percabangan Ganda (Dual Selection: IF-ELSE)</h4>
                <p>Memiliki dua cabang tindakan yang mutually exclusive: satu untuk kondisi True, dan satu lagi untuk kondisi False.</p>
                <div class="grid-2-col">
                    <div>
                        <div class="mermaid-container">
                            <pre class="mermaid">
flowchart TD
    S([Mulai]) --> In[/Input: bilangan/]
    In --> Dec{"bilangan % 2 == 0?"}
    Dec -- Ya --> Genap["ket = 'GENAP'"]
    Dec -- Tidak --> Ganjil["ket = 'GANJIL'"]
    Genap --> Out[/Tampilkan: ket/]
    Ganjil --> Out
    Out --> End([Selesai])
                            </pre>
                        </div>
                    </div>
                    <div>
                        <div class="code-wrapper">
                            <pre><code class="language-python"># Implementasi IF-ELSE di Python
bilangan = 17

if bilangan % 2 == 0:
    ket = "GENAP"
else:
    ket = "GANJIL"

print(f"Bilangan {bilangan} adalah {ket}")</code></pre>
                        </div>
                    </div>
                </div>

                <h4>C. Percabangan Majemuk / Bertingkat (Multiple Selection: IF-ELIF-ELSE)</h4>
                <p>Digunakan saat terdapat lebih dari dua alternatif kondisi yang saling menguji secara beruntun.</p>
                <div class="code-wrapper">
                    <pre><code class="language-python"># Menentukan Kategori Umur
umur = 16

if umur >= 60:
    kategori = "Lansia"
elif umur >= 18:
    kategori = "Dewasa"
elif umur >= 13:
    kategori = "Remaja"
else:
    kategori = "Anak-anak"

print(f"Kategori usia: {kategori}")</code></pre>
                </div>"""
            },
            {
                "id": "6-3-iteration",
                "title": "6.3 Struktur Perulangan (Iteration / Looping)",
                "content": """<p>Struktur Perulangan menginstruksikan komputer untuk mengeksekusi blok langkah yang sama berulang kali selama kondisi pengulangan masih bernilai Benar (*True*).</p>
                
                <h4>Perulangan Kondisi di Awal (Pre-Tested Loop / WHILE Loop)</h4>
                <p>Kondisi diuji <em>sebelum</em> badan perulangan dikerjakan. Jika sejak awal kondisi bernilai False, maka badan loop tidak akan pernah dijalankan sama sekali.</p>
                
                <div class="grid-2-col">
                    <div>
                        <div class="mermaid-container">
                            <pre class="mermaid">
flowchart TD
    Start([MULAI]) --> Init["Preparation: counter = 1"]
    Init --> Check{"counter <= 5?"}
    Check -- Ya --> Action[/Tampilkan: counter/]
    Action --> Incr["counter = counter + 1"]
    Incr --> Check
    Check -- Tidak --> Finish([SELESAI])
                            </pre>
                        </div>
                    </div>
                    <div>
                        <div class="code-wrapper">
                            <pre><code class="language-python"># Implementasi WHILE loop di Python
counter = 1

while counter <= 5:
    print(f"Iterasi ke-{counter}")
    counter += 1  # Wajib ada agar tidak infinite loop!

print("Perulangan selesai!")</code></pre>
                        </div>
                        <div class="alert alert-warning">
                            <strong>⚠️ Anatomi Wajib Sebuah Loop:</strong>
                            <ol>
                                <li><strong>Inisialisasi:</strong> Memberikan nilai awal variabel hitung (<code>counter = 1</code>).</li>
                                <li><strong>Evaluasi Kondisi:</strong> Menguji batas perulangan (<code>counter <= 5</code>).</li>
                                <li><strong>Update / Increment:</strong> Mengubah nilai variabel hitung di dalam loop (<code>counter += 1</code>).</li>
                            </ol>
                        </div>
                    </div>
                </div>"""
            },
            {
                "id": "6-4-rangkuman",
                "title": "6.4 Rangkuman Bab VI",
                "content": """<div class="summary-box">
                    <h4>📌 Rangkuman Inti Bab VI:</h4>
                    <ul>
                        <li>Semua algoritma komputasi di dunia dapat dibangun hanya dengan 3 struktur kendali: <strong>Sequence</strong>, <strong>Selection</strong>, dan <strong>Iteration</strong>.</li>
                        <li>Struktur Percabangan diwakili oleh simbol Belah Ketupat (Decision) yang mengarahkan aliran ke dua atau lebih jalur berbeda.</li>
                        <li>Struktur Perulangan diwakili oleh garis alir yang berputar kembali ke atas (*backward flowline*), dan wajib memiliki variabel pengubah agar tidak mengalami kebuntuan memori (*infinite loop*).</li>
                    </ul>
                </div>"""
            }
        ]
    }

print("content_bab4_6 ready")
