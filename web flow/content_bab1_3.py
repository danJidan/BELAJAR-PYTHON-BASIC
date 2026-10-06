# content_bab1_3.py
# Modul konten BAB I, BAB II, dan BAB III

def get_bab1():
    return {
        "id": "bab1",
        "num": "BAB I",
        "title": "Pengenalan Flowchart",
        "subtitle": "Konsep Dasar, Algoritma, Hubungan Paradigma, dan Peran Penting dalam Teknologi",
        "learningGoals": [
            "Memahami definisi formal flowchart dan algoritma dalam komputasi modern.",
            "Menjelaskan hubungan timbal-balik antara algoritma logika dan representasi diagram visual.",
            "Menguraikan fungsi, tujuan, kelebihan, serta limitasi teknis dari flowchart.",
            "Membedakan dengan tegas antara Algoritma, Pseudocode, Flowchart, dan Kode Program.",
            "Mengidentifikasi skenario di mana flowchart mutlak diperlukan dalam rekayasa perangkat lunak."
        ],
        "sections": [
            {
                "id": "1-1-pengertian",
                "title": "1.1 Pengertian Flowchart dan Diagram Alir",
                "content": """<p>Secara terminologi komputasi, <strong>Flowchart</strong> (dikenal juga dalam Bahasa Indonesia sebagai <em>Diagram Alir</em> atau <em>Bagan Alir</em>) adalah <strong>representasi grafis atau visual dari suatu algoritma, proses bisnis, alur kerja (workflow), atau sistem komputasi</strong> yang memperlihatkan langkah-langkah dalam bentuk simbol-simbol geometris standar beserta urutan hubungannya yang dihubungkan dengan garis berpanah (<em>flowline</em>).</p>
                <p>Menurut standar <strong>ANSI (American National Standards Institute)</strong> dan <strong>ISO 5807:1985</strong>, setiap bangun datar dalam flowchart merepresentasikan jenis instruksi spesifik—mulai dari titik mula proses, operasi komputasi, masukan pengguna, pengujian kondisi logis, hingga keluaran sistem.</p>
                <div class="alert alert-info">
                    <strong>💡 Inti Konsep:</strong> Flowchart mengubah pemikiran logika manusia yang abstrak dan berbelit-belit menjadi gambaran skematis konkret yang dapat dibaca, diaudit, serta divalidasi oleh seluruh anggota tim teknis maupun non-teknis sebelum sebaris kode pun ditulis di komputer.
                </div>"""
            },
            {
                "id": "1-2-algoritma",
                "title": "1.2 Pengertian Algoritma dan Hubungannya dengan Flowchart",
                "content": """<p>Sebelum ada flowchart, selalu ada yang namanya <strong>Algoritma</strong>. Algoritma (berasal dari nama matematikawan Muslim abad ke-9, <em>Muhammad ibn Musa al-Khwarizmi</em>) adalah <strong>urutan langkah-langkah logis, berhingga (finite), dan sistematis untuk memecahkan suatu masalah komputasi atau mencapai tujuan tertentu</strong>.</p>
                <p>Tiga ciri mutlak sebuah algoritma yang baik menurut Donald E. Knuth adalah:</p>
                <ul>
                    <li><strong>Definiteness (Kepastian):</strong> Setiap instruksi harus jelas, eksplisit, dan tidak menimbulkan makna ambigu/ganda.</li>
                    <li><strong>Finiteness (Keberhinggaan):</strong> Algoritma wajib berhenti setelah sejumlah langkah terhingga dieksekusi. Tidak boleh berjalan selamanya tanpa akhir (*infinite trap*).</li>
                    <li><strong>Effectiveness (Efektivitas):</strong> Setiap langkah harus cukup sederhana sehingga dapat dikerjakan secara mekanis oleh mesin komputasi.</li>
                </ul>
                <p><strong>Hubungan Timbal Balik:</strong> Algoritma adalah <em>jiwa dan ide konseptual</em> di balik solusi, sedangkan Flowchart adalah <em>peta visual arsitektur</em> yang menggambarkan algoritma tersebut ke dalam bentuk diagram bagan alir.</p>"""
            },
            {
                "id": "1-3-tujuan-fungsi",
                "title": "1.3 Tujuan, Fungsi, dan Manfaat Flowchart",
                "content": """<div class="grid-3-col">
                    <div class="feature-card">
                        <div class="card-icon">🎯</div>
                        <h4>Tujuan Pembuatan</h4>
                        <ul>
                            <li>Menstandarisasi alur kerja agar seragam bagi seluruh pengembang.</li>
                            <li>Memecah permasalahan komputasi rumit (*divide-and-conquer*) menjadi modul-modul sederhana.</li>
                            <li>Sebagai cetak biru (*blueprint*) acuan sebelum menulis sintaks kode.</li>
                        </ul>
                    </div>
                    <div class="feature-card">
                        <div class="card-icon">⚙️</div>
                        <h4>Fungsi Pemecahan Masalah</h4>
                        <ul>
                            <li>Mendeteksi celah logika (*logic flaws*) dan cabang buntu lebih dini.</li>
                            <li>Menelusuri skenario normal (*happy path*) serta skenario gagal (*edge cases*).</li>
                            <li>Memetakan ketergantungan antar-data input dan variabel proses.</li>
                        </ul>
                    </div>
                    <div class="feature-card">
                        <div class="card-icon">🚀</div>
                        <h4>Manfaat Industri</h4>
                        <ul>
                            <li><strong>Komunikasi Efektif:</strong> Jembatan pemahaman antara Project Manager, Analis Sistem, Klien, dan Programmer.</li>
                            <li><strong>Dokumentasi Sistem Abadi:</strong> Menjadi panduan operasional saat developer lama telah berganti.</li>
                            <li><strong>Kemudahan Debugging:</strong> Mempercepat pelacakan letak kesalahan logika kode.</li>
                        </ul>
                    </div>
                </div>"""
            },
            {
                "id": "1-4-kelebihan-keterbatasan",
                "title": "1.4 Kelebihan dan Keterbatasan Flowchart",
                "content": """<div class="table-responsive">
                    <table class="table-custom">
                        <thead>
                            <tr>
                                <th style="width: 50%;">🌟 Kelebihan Flowchart</th>
                                <th style="width: 50%;">⚠️ Keterbatasan Flowchart</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sangat Visual & Intuitif:</strong> Manusia memproses gambar 60.000 kali lebih cepat daripada teks naratif panjang.</td>
                                <td><strong>Kurang Praktis untuk Program Skala Masif:</strong> Jika sebuah program memiliki ribuan baris kode, flowchart akan sangat luas dan rumit dibaca.</td>
                            </tr>
                            <tr>
                                <td><strong>Independen terhadap Bahasa Pemrograman:</strong> Berlaku universal baik nantinya diimplementasikan ke Python, Java, C++, PHP, maupun Rust.</td>
                                <td><strong>Biaya Modifikasi Cukup Tinggi:</strong> Jika ada satu logika awal berubah, seringkali tata letak garis alir harus digambar ulang dari awal.</td>
                            </tr>
                            <tr>
                                <td><strong>Memudahkan Analisis Jalur:</strong> Menjamin seluruh kemungkinan percabangan (*branch coverage*) teridentifikasi dengan jelas.</td>
                                <td><strong>Tidak Menunjukkan Detail Eksekusi Teknis:</strong> Tidak memperlihatkan manajemen memori, penanganan concurrency/thread, atau optimasi microcode.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>"""
            },
            {
                "id": "1-5-perbedaan-paradigma",
                "title": "1.5 Perbedaan: Algoritma, Pseudocode, Flowchart, dan Kode Program",
                "content": """<p>Seringkali pemula informatika mencampuradukkan keempat istilah fundamental ini. Berikut adalah tabel komparasi holistik:</p>
                <div class="table-responsive">
                    <table class="table-custom">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Algoritma</th>
                                <th>Pseudocode</th>
                                <th>Flowchart</th>
                                <th>Kode Program</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Bentuk / Media</strong></td>
                                <td>Kalimat deskriptif bahasa manusia (Indonesia/Inggris)</td>
                                <td>Teks semi-formal menyerupai sintaks kode pemrograman</td>
                                <td>Bagan diagram visual grafis bangun datar berpanah</td>
                                <td>Teks instruksi kode formal sesuai sintaks bahasa spesifik</td>
                            </tr>
                            <tr>
                                <td><strong>Standar Sintaks</strong></td>
                                <td>Bebas, fleksibel, mengutamakan pemahaman alur</td>
                                <td>Tidak kaku, memakai kata kunci baku (IF, ELSE, WHILE, FOR)</td>
                                <td>Standar geometris resmi (ANSI / ISO / DIN)</td>
                                <td>Sangat ketat (Strict Syntax), salah koma atau titik dua = Syntax Error</td>
                            </tr>
                            <tr>
                                <td><strong>Target Pembaca</strong></td>
                                <td>Manusia / Orang awam</td>
                                <td>Programmer & System Analyst</td>
                                <td>Seluruh tim (Teknis & Stakeholder Non-Teknis)</td>
                                <td>Kompilator / Interpreter Komputer</td>
                            </tr>
                            <tr>
                                <td><strong>Bisa Dijalankan Komputer?</strong></td>
                                <td>❌ Tidak bisa langsung dieksekusi</td>
                                <td>❌ Tidak bisa langsung dieksekusi</td>
                                <td>❌ Tidak bisa langsung dieksekusi</td>
                                <td>✅ Bisa dieksekusi langsung oleh prosesor komputer</td>
                            </tr>
                            <tr>
                                <td><strong>Contoh Konkret</strong></td>
                                <td>Jika nilai lebih besar atau sama dengan 75, nyatakan lulus.</td>
                                <td><code>IF nilai >= 75 THEN PRINT "LULUS" ENDIF</code></td>
                                <td>Simbol Belah Ketupat <code>{nilai >= 75?}</code> dengan panah Ya/Tidak</td>
                                <td><code>if nilai >= 75: print("LULUS")</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>"""
            },
            {
                "id": "1-6-kapan-digunakan",
                "title": "1.6 Kapan Flowchart Perlu Digunakan?",
                "content": """<p>Flowchart <strong>SANGAT DIREKOMENDASIKAN</strong> ketika:</p>
                <ol class="custom-ol">
                    <li><strong>Tahap Perancangan Sistem Baru (Design Phase):</strong> Saat merancang arsitektur perangkat lunak dari dokumen kebutuhan (*Software Requirement Specification*).</li>
                    <li><strong>Menganalisis Masalah Logika Rumit:</strong> Skenario yang memiliki banyak percabangan bertingkat (*nested if*) atau kondisi validasi berulang.</li>
                    <li><strong>Presentasi Kepada Klien & Manajemen:</strong> Klien bisnis tidak paham kode Python/Java, namun mereka paham bagan alir proses transaksi bisnis.</li>
                    <li><strong>Standarisasi SOP Operasional Perusahaan:</strong> Dokumentasi alur kerja birokrasi, penanganan insiden server, atau prosedur mutu ISO 9001.</li>
                    <li><strong>Investigasi Bug Sistem (Root Cause Analysis):</strong> Menelusuri di langkah mana data mengalami distorsi atau kegagalan pemrosesan.</li>
                </ol>
                <div class="alert alert-warning">
                    <strong>Kapan TIDAK Perlu Flowchart?</strong> Untuk fungsi utilitas mikro satu baris (seperti <code>def hitung_pajak(n): return n * 0.11</code>), membuat flowchart formal justru memboroskan waktu dan tidak memberikan nilai tambah signifikan.
                </div>"""
            },
            {
                "id": "1-7-contoh-nyata",
                "title": "1.7 Contoh Penggunaan Nyata dalam Kehidupan Sehari-hari & Teknologi",
                "content": """<div class="grid-2-col">
                    <div class="card-sub">
                        <h4>☕ Contoh Kehidupan Nyata: Menikmati Kopi Pagi</h4>
                        <p>Alur keputusan manusia sehari-hari:</p>
                        <ol>
                            <li>Ambil cangkir dan masukkan bubuk kopi.</li>
                            <li>Apakah suka manis?
                                <ul>
                                    <li><strong>Ya:</strong> Tambahkan 2 sendok gula pasir.</li>
                                    <li><strong>Tidak:</strong> Lewati pemberian gula.</li>
                                </ul>
                            </li>
                            <li>Tuang air panas 90°C sebanyak 150 ml.</li>
                            <li>Aduk hingga larut merata. Kopi siap dinikmati!</li>
                        </ol>
                    </div>
                    <div class="card-sub">
                        <h4>📱 Contoh Teknologi: Otentikasi Sidik Jari Smartphone</h4>
                        <p>Alur sistem sensor biometrik perangkat:</p>
                        <ol>
                            <li>Sensor mendeteksi sentuhan jari pada layar/tombol.</li>
                            <li>Sistem membaca pola lekukan dan mencocokkan hash dengan secure enclave chip.</li>
                            <li>Apakah pola sidik jari cocok (<em>match score >= 98%</em>)?
                                <ul>
                                    <li><strong>Ya:</strong> Buka kunci layar (<em>Unlock UI</em>).</li>
                                    <li><strong>Tidak:</strong> Munculkan getaran peringatan dan minta PIN alternatif.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>"""
            },
            {
                "id": "1-8-rangkuman",
                "title": "1.8 Rangkuman Bab I",
                "content": """<div class="summary-box">
                    <h4>📌 Rangkuman Inti Bab I:</h4>
                    <ul>
                        <li><strong>Flowchart</strong> adalah representasi diagram visual standar dari sebuah algoritma menggunakan bangun geometris yang dihubungkan garis panah.</li>
                        <li><strong>Algoritma</strong> adalah langkah sistematis logis pemecahan masalah yang berhingga (*finite*).</li>
                        <li>Flowchart menjembatani ide konseptual manusia dengan implementasi kode teknis komputer, serta mempermudah komunikasi lintas divisi.</li>
                        <li>Empat serangkai rekayasa sistem: <em>Algoritma (Ide Narasi) ➔ Flowchart (Peta Visual) ➔ Pseudocode (Draf Notasi) ➔ Kode Program (Eksekusi Mesin)</em>.</li>
                    </ul>
                </div>"""
            }
        ]
    }

def get_bab2():
    return {
        "id": "bab2",
        "num": "BAB II",
        "title": "Simbol-Simbol Flowchart",
        "subtitle": "Katalog Lengkap Standar ANSI/ISO, Visualisasi Vektor, dan Analisis Simbol Tertukar",
        "learningGoals": [
            "Mengenal 18+ simbol standar ANSI/ISO beserta fungsi teknis spesifiknya.",
            "Memahami kapan dan di mana setiap simbol wajib digunakan.",
            "Mengidentifikasi kesalahan umum dalam penggunaan masing-masing simbol.",
            "Membedakan pasangan simbol yang sering tertukar oleh pemula secara mendalam.",
            "Menyadari variasi standar (ANSI X3.5 vs ISO 5807 vs DIN 66001)."
        ],
        "sections": [
            {
                "id": "2-1-standar",
                "title": "2.1 Standarisasi Simbol: ANSI vs ISO vs DIN",
                "content": """<p>Simbol flowchart tidak dibuat secara sembarangan melainkan tunduk pada regulasi standar internasional. Standar yang paling banyak diacu di dunia teknologi informasi adalah:</p>
                <ul>
                    <li><strong>ANSI X3.5-1970:</strong> Standar asal Amerika Serikat yang pertama kali memformalkan simbol pengolahan data.</li>
                    <li><strong>ISO 5807:1985:</strong> Standar internasional yang diterbitkan oleh International Organization for Standardization, mencakup diagram alir data, diagram alir program, dan diagram jaringan sistem.</li>
                    <li><strong>DIN 66001:</strong> Standar industri Jerman yang banyak memengaruhi penyusunan diagram manufaktur dan rekayasa kontrol.</li>
                </ul>
                <div class="alert alert-warning">
                    <strong>Catatan Penting Antar-Standar:</strong> Sebagian besar simbol inti (Terminator, Process, Decision, IO) identik pada semua standar. Namun, simbol untuk media penyimpanan fisik (Punched card, Magnetic tape, Drum) yang populer di era 1970-an kini telah berevolusi menjadi simbol <strong>Database Silinder</strong> modern dalam perancangan aplikasi masa kini.
                </div>"""
            },
            {
                "id": "2-2-galeri-simbol",
                "title": "2.2 Galeri & Tabel Lengkap 18 Simbol Flowchart",
                "content": """<p>Berikut adalah tabel katalog interaktif seluruh simbol flowchart resmi. Klik setiap kartu simbol untuk melihat tampilan vektor SVG resolusi tinggi dan detail fungsi teknisnya:</p>
                <div id="symbols-gallery-container" class="symbols-grid"></div>"""
            },
            {
                "id": "2-3-simbol-tertukar",
                "title": "2.3 Analisis Kritis: Simbol-Simbol yang Sering Tertukar",
                "content": """<p>Banyak pemula dan mahasiswa informatika melakukan kesalahan fatal dalam ujian atau perancangan sistem karena menukar simbol-simbol yang tampak mirip. Berikut pembedahan detailnya:</p>
                
                <div class="comparison-card">
                    <h4>1. Process (Persegi Panjang Biasa) vs Predefined Process (Persegi Panjang Garis Ganda)</h4>
                    <div class="grid-2-col">
                        <div class="box-vs">
                            <span class="badge badge-blue">Process</span>
                            <p><strong>Fungsi:</strong> Operasi kalkulasi internal atau pengubahan nilai variabel lokal yang langsung dikerjakan saat itu juga.</p>
                            <p><strong>Contoh:</strong> <code>luas = p * l</code>, <code>total = subtotal + ongkir</code></p>
                        </div>
                        <div class="box-vs">
                            <span class="badge badge-purple">Predefined Process</span>
                            <p><strong>Fungsi:</strong> Pemanggilan sub-program, fungsi terpisah (function/method), atau modul eksternal yang alur detailnya digambar pada lembar diagram tersendiri.</p>
                            <p><strong>Contoh:</strong> <code>validasiKartuKredit()</code>, <code>kirimEmailNotifikasi()</code></p>
                        </div>
                    </div>
                </div>

                <div class="comparison-card">
                    <h4>2. Input/Output (Jajar Genjang) vs Manual Input (Segiempat Permukaan Miring)</h4>
                    <div class="grid-2-col">
                        <div class="box-vs">
                            <span class="badge badge-purple">Input/Output (General)</span>
                            <p><strong>Fungsi:</strong> Masukan atau keluaran generik tanpa mengikat media perangkat kerasnya. Bisa dari file, port serial, socket jaringan, ataupun memori.</p>
                            <p><strong>Contoh:</strong> <code>Baca Data Sensor</code>, <code>Kirim Payload API</code></p>
                        </div>
                        <div class="box-vs">
                            <span class="badge badge-red">Manual Input</span>
                            <p><strong>Fungsi:</strong> Masukan yang diketik atau ditekan langsung oleh jari tangan manusia secara fisik pada saat runtime.</p>
                            <p><strong>Contoh:</strong> <code>Ketik PIN pada Keypad ATM</code>, <code>Scan Barcode Barang</code></p>
                        </div>
                    </div>
                </div>

                <div class="comparison-card">
                    <h4>3. Flowline (Garis Panah) vs Connector (Lingkaran Kecil)</h4>
                    <div class="grid-2-col">
                        <div class="box-vs">
                            <span class="badge badge-gray">Flowline</span>
                            <p><strong>Fungsi:</strong> Menghubungkan dua langkah berdekatan secara langsung dan menunjukkan orientasi pergerakan alur.</p>
                        </div>
                        <div class="box-vs">
                            <span class="badge badge-cyan">On-Page Connector</span>
                            <p><strong>Fungsi:</strong> Memutus garis panah yang terlalu panjang atau berliku-liku agar diagram tidak dipenuhi kabel/garis yang ruwet dan saling tumpang tindih.</p>
                        </div>
                    </div>
                </div>

                <div class="comparison-card">
                    <h4>4. Database (Silinder) vs Document (Kertas Gelombang)</h4>
                    <div class="grid-2-col">
                        <div class="box-vs">
                            <span class="badge badge-green">Database (Silinder)</span>
                            <p><strong>Fungsi:</strong> Penyimpanan data secara digital, terstruktur, dan permanen di disk penyimpanan (SQL/NoSQL/File Server).</p>
                        </div>
                        <div class="box-vs">
                            <span class="badge badge-blue">Document (Kertas)</span>
                            <p><strong>Fungsi:</strong> Keluaran fisik yang dicetak ke atas kertas nyata (*hardcopy*) atau dokumen format cetak (PDF/Faktur/Kwitansi).</p>
                        </div>
                    </div>
                </div>

                <div class="comparison-card">
                    <h4>5. Decision (Belah Ketupat) vs Process (Persegi Panjang)</h4>
                    <div class="grid-2-col">
                        <div class="box-vs">
                            <span class="badge badge-amber">Decision</span>
                            <p><strong>Wajib memiliki:</strong> Pertanyaan kondisi dengan <strong>minimal 2 panah keluar</strong> berlabel (Ya / Tidak).</p>
                        </div>
                        <div class="box-vs">
                            <span class="badge badge-blue">Process</span>
                            <p><strong>Wajib memiliki:</strong> Pernyataan tindakan dengan <strong>hanya 1 panah masuk dan 1 panah keluar</strong>.</p>
                        </div>
                    </div>
                </div>"""
            },
            {
                "id": "2-4-rangkuman",
                "title": "2.4 Rangkuman Bab II",
                "content": """<div class="summary-box">
                    <h4>📌 Rangkuman Inti Bab II:</h4>
                    <ul>
                        <li>Simbol flowchart memiliki makna semantik yang ketat menurut standar ANSI/ISO; menggambar bentuk yang salah mengubah arti logika program.</li>
                        <li><strong>Terminator</strong> (Oval) untuk awal/akhir, <strong>Process</strong> (Persegi) untuk aksi komputasi, <strong>Decision</strong> (Belah Ketupat) untuk percabangan logis bernilai boolean, dan <strong>I/O</strong> (Jajar Genjang) untuk antarmuka data.</li>
                        <li>Simbol khusus seperti <strong>Predefined Process</strong>, <strong>Preparation</strong>, <strong>Database</strong>, dan <strong>Document</strong> memberikan ketegasan arsitektural pada sistem modern.</li>
                    </ul>
                </div>"""
            }
        ]
    }

def get_bab3():
    return {
        "id": "bab3",
        "num": "BAB III",
        "title": "Jenis-Jenis Flowchart",
        "subtitle": "Klasifikasi Diagram Berdasarkan Ranah Penerapan, Karakteristik, dan Komparasi DFD",
        "learningGoals": [
            "Memahami 5 klasifikasi utama flowchart: System, Program, Process, Document, dan Data Flowchart.",
            "Menganalisis perbedaan karakteristik, audiens pengguna, dan tujuan masing-masing jenis diagram.",
            "Membedakan dengan tegas antara Flowchart dan Data Flow Diagram (DFD).",
            "Menerapkan panduan pemilihan jenis diagram yang tepat berdasarkan studi kasus nyata."
        ],
        "sections": [
            {
                "id": "3-1-lima-jenis",
                "title": "3.1 Lima Klasifikasi Utama Flowchart",
                "content": """<p>Dalam praktik rekayasa sistem dan industri, flowchart dikelompokkan menjadi 5 jenis utama sesuai dengan sudut pandang (*viewpoint*) dan level abstraksi yang ingin disampaikan:</p>
                
                <div class="flowchart-type-card">
                    <div class="type-header">
                        <span class="badge badge-blue">Jenis 1</span>
                        <h3>System Flowchart (Bagan Alir Sistem)</h3>
                    </div>
                    <p><strong>Definisi:</strong> Diagram yang menggambarkan alur kerja sistem secara menyeluruh dari sudut pandang perangkat keras, media penyimpanan, dan aliran data antar-modul.</p>
                    <ul>
                        <li><strong>Tujuan:</strong> Memberikan gambaran makro arsitektur sistem kepada System Analyst, Network Engineer, dan Manajemen IT.</li>
                        <li><strong>Karakteristik:</strong> Menggunakan simbol-simbol media fisik seperti Silinder Database, Keyboard Input, Display Monitor, dan Garis Komunikasi Jaringan.</li>
                        <li><strong>Pengguna:</strong> System Analyst, Enterprise Architect, CIO.</li>
                        <li><strong>Contoh Kasus:</strong> Alur transaksi POS Kasir: Barcode Scanner ➔ Server Lokal ➔ Sinkronisasi Cloud Database ➔ Cetak Printer Termal.</li>
                    </ul>
                    <div class="mermaid-container">
                        <pre class="mermaid">
graph LR
    User[Pelanggan di Kasir] --> Scanner[Barcode Scanner]
    Scanner --> POS[Komputer POS Kasir]
    POS --> DB[(Database Transaksi SQL)]
    POS --> Printer[Printer Kasir: Cetak Struk]
    DB --> Cloud[(Cloud Central Server)]
                        </pre>
                    </div>
                </div>

                <div class="flowchart-type-card">
                    <div class="type-header">
                        <span class="badge badge-green">Jenis 2</span>
                        <h3>Program Flowchart (Bagan Alir Program)</h3>
                    </div>
                    <p><strong>Definisi:</strong> Diagram yang menggambarkan logika rinci dari langkah-langkah instruksi di dalam suatu unit program atau modul perangkat lunak.</p>
                    <ul>
                        <li><strong>Tujuan:</strong> Sebagai panduan kerja langsung bagi Software Developer/Programmer dalam menulis baris sintaks kode.</li>
                        <li><strong>Karakteristik:</strong> Berisi ekspresi matematika, inisialisasi variabel, perulangan (looping), dan percabangan kondisi spesifik (if-else).</li>
                        <li><strong>Pengguna:</strong> Programmer, Software Engineer, Quality Assurance (QA).</li>
                        <li><strong>Contoh Kasus:</strong> Algoritma verifikasi PIN ATM: Cek kecocokan PIN, kurangi counter kesempatan jika salah, kunci akun jika salah 3 kali.</li>
                    </ul>
                    <div class="mermaid-container">
                        <pre class="mermaid">
flowchart TD
    Start([Mulai]) --> InputPIN[/Input PIN/]
    InputPIN --> Check{PIN Cocok?}
    Check -- Ya --> Access[Buka Menu Transaksi]
    Check -- Tidak --> Retry{Percobaan < 3?}
    Retry -- Ya --> InputPIN
    Retry -- Tidak --> Block[Blokir Kartu ATM]
    Access --> End([Selesai])
    Block --> End
                        </pre>
                    </div>
                </div>

                <div class="flowchart-type-card">
                    <div class="type-header">
                        <span class="badge badge-amber">Jenis 3</span>
                        <h3>Process / Procedure Flowchart (Bagan Alir Prosedur / SOP)</h3>
                    </div>
                    <p><strong>Definisi:</strong> Diagram yang memetakan langkah-langkah kerja operasional dalam proses bisnis atau manufaktur yang melibatkan tanggung jawab manusia lintas bagian.</p>
                    <ul>
                        <li><strong>Tujuan:</strong> Menstandarisasi Standard Operating Procedure (SOP) dan efisiensi alur operasional kerja.</li>
                        <li><strong>Karakteristik:</strong> Sering digambar dengan format <em>Swimlane (Lintasan Renang)</em> untuk memisahkan wewenang tiap departemen.</li>
                        <li><strong>Pengguna:</strong> Business Analyst, Operation Manager, Auditor Mutu ISO.</li>
                        <li><strong>Contoh Kasus:</strong> Alur Pengajuan Cuti Karyawan: Karyawan ➔ Atasan Langsung ➔ Divisi HRD ➔ Penggajian.</li>
                    </ul>
                    <div class="mermaid-container">
                        <pre class="mermaid">
flowchart TD
    subgraph Karyawan
        A1[Isi Form Cuti] --> A2[Kirim ke Atasan]
    end
    subgraph Atasan
        A2 --> B1{Disetujui?}
        B1 -- Tidak --> B2[Tolak & Beri Alasan]
        B1 -- Ya --> B3[Tanda Tangan ACC]
    end
    subgraph HRD
        B3 --> C1[Update Kuota Cuti]
        C1 --> C2[Arsipkan Berkas]
    end
                        </pre>
                    </div>
                </div>

                <div class="flowchart-type-card">
                    <div class="type-header">
                        <span class="badge badge-purple">Jenis 4</span>
                        <h3>Document Flowchart (Bagan Alir Dokumen / Formulir)</h3>
                    </div>
                    <p><strong>Definisi:</strong> Diagram yang secara spesifik menelusuri perpindahan arus berkas formulir fisik, kwitansi, atau surat laporan dari satu unit kerja ke unit kerja lainnya.</p>
                    <ul>
                        <li><strong>Tujuan:</strong> Mengontrol jejak audit (*audit trail*) dokumen keuangan dan mencegah kebocoran faktur.</li>
                        <li><strong>Karakteristik:</strong> Dominan menggunakan simbol Document Tunggal dan Multiple Documents (rangkap faktur).</li>
                        <li><strong>Pengguna:</strong> Auditor Keuangan, Akuntan, Petugas Administrasi.</li>
                        <li><strong>Contoh Kasus:</strong> Alur Surat Perintah Jalan (SPJ) rangkap 3: Lembar 1 untuk Supir, Lembar 2 untuk Gudang, Lembar 3 untuk Finance.</li>
                    </ul>
                </div>

                <div class="flowchart-type-card">
                    <div class="type-header">
                        <span class="badge badge-red">Jenis 5</span>
                        <h3>Data Flowchart (Bagan Alir Data Terarah)</h3>
                    </div>
                    <p><strong>Definisi:</strong> Diagram yang menggambarkan transformasi logis aliran data yang melewati proses-proses pengolahan sistem.</p>
                    <ul>
                        <li><strong>Tujuan:</strong> Menganalisis bagaimana data mentah diproses dan disimpan menjadi informasi berharga.</li>
                        <li><strong>Karakteristik:</strong> Berfokus pada transformasi isi data ketimbang urutan kontrol instruksi mesin.</li>
                        <li><strong>Pengguna:</strong> Data Engineer, Analis Basis Data.</li>
                    </ul>
                </div>"""
            },
            {
                "id": "3-2-flowchart-vs-dfd",
                "title": "3.2 Perbedaan Tegas: Flowchart vs Data Flow Diagram (DFD)",
                "content": """<p>Salah satu kekeliruan fatal mahasiswa tingkat awal adalah menganggap Flowchart dan DFD adalah benda yang sama. Padahal keduanya mewakili paradigma yang sama sekali berbeda:</p>
                
                <div class="table-responsive">
                    <table class="table-custom">
                        <thead>
                            <tr>
                                <th>Kriteria Pembeda</th>
                                <th>Flowchart (Diagram Alir)</th>
                                <th>Data Flow Diagram (DFD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Fokus Utama</strong></td>
                                <td><strong>Control Flow (Alur Kendali):</strong> Urutan waktu eksekusi langkah demi langkah secara kronologis.</td>
                                <td><strong>Data Flow (Alur Data):</strong> Perpindahan dan transformasi paket data tanpa memedulikan urutan waktu eksekusi.</td>
                            </tr>
                            <tr>
                                <td><strong>Simbol Percabangan (Decision)</strong></td>
                                <td>Memiliki simbol khusus <em>Decision (Belah Ketupat)</em> untuk pilihan Ya / Tidak.</td>
                                <td><strong>TIDAK PERNAH</strong> memiliki simbol keputusan percabangan boolean.</td>
                            </tr>
                            <tr>
                                <td><strong>Simbol Perulangan (Looping)</strong></td>
                                <td>Memiliki panah balik ke atas untuk mengulang instruksi berkali-kali.</td>
                                <td>Tidak ada konsep looping; garis panah murni menunjukkan arah aliran paket data.</td>
                            </tr>
                            <tr>
                                <td><strong>Tingkat Hirarki</strong></td>
                                <td>Linear dalam 1 lembar atau menggunakan connector.</td>
                                <td>Berjenjang hierarkis: Diagram Konteks (Level 0), Level 1, Level 2, dst.</td>
                            </tr>
                            <tr>
                                <td><strong>Notasi Standar</strong></td>
                                <td>ANSI / ISO 5807</td>
                                <td>Yourdon / DeMarco atau Gane & Sarson</td>
                            </tr>
                        </tbody>
                    </table>
                </div>"""
            },
            {
                "id": "3-3-panduan-memilih",
                "title": "3.3 Panduan Praktis: Memilih Diagram Berdasarkan Kebutuhan Proyek",
                "content": """<p>Gunakan matriks keputusan praktis berikut saat Anda ragu memilih jenis diagram mana yang harus dibuat:</p>
                <div class="table-responsive">
                    <table class="table-custom">
                        <thead>
                            <tr>
                                <th>Kebutuhan Desain / Kasus Proyek</th>
                                <th>Diagram yang Wajib Dipilih</th>
                                <th>Alasan Pemilihan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ingin membuat fungsi algoritma sorting, kalkulator, atau game logic.</td>
                                <td><span class="badge badge-green">Program Flowchart</span></td>
                                <td>Membutuhkan kejelasan variabel, percabangan if-else, dan loop while/for.</td>
                            </tr>
                            <tr>
                                <td>Ingin mendokumentasikan pembagian tugas kasir, koki, dan pelayan restoran.</td>
                                <td><span class="badge badge-amber">Process Flowchart (Swimlane)</span></td>
                                <td>Memperlihatkan batas tanggung jawab lintas individu/departemen dengan jelas.</td>
                            </tr>
                            <tr>
                                <td>Ingin memperlihatkan integrasi hardware server, database, dan aplikasi mobile.</td>
                                <td><span class="badge badge-blue">System Flowchart</span></td>
                                <td>Mampu memetakan media fisik perangkat keras dan jaringan.</td>
                            </tr>
                            <tr>
                                <td>Ingin memetakan batas lingkup sistem informasi akademik dengan entitas luar (Mahasiswa, Dosen, Bank).</td>
                                <td><span class="badge badge-purple">DFD Context Level 0</span></td>
                                <td>DFD lebih superior untuk memetakan batasan sistem dan entitas eksternal.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>"""
            },
            {
                "id": "3-4-rangkuman",
                "title": "3.4 Rangkuman Bab III",
                "content": """<div class="summary-box">
                    <h4>📌 Rangkuman Inti Bab III:</h4>
                    <ul>
                        <li>Setiap jenis flowchart memiliki audiens dan level abstraksi tersendiri; jangan mencampuradukkan logika mikro coding ke dalam diagram makro sistem.</li>
                        <li><strong>Program Flowchart</strong> berfokus pada algoritma instruksi kode programmer; <strong>System Flowchart</strong> pada interaksi hardware & database; <strong>Process Flowchart</strong> pada SOP manusia.</li>
                        <li><strong>Flowchart ≠ DFD:</strong> Flowchart memetakan <em>urutan kendali waktu dan keputusan</em>, sedangkan DFD memetakan <em>transformasi aliran data tanpa keputusan waktu</em>.</li>
                    </ul>
                </div>"""
            }
        ]
    }

print("content_bab1_3 ready")
