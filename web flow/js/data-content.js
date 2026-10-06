/**
 * data-content.js
 * Modul Lengkap Pembelajaran Flowchart (BAB I - BAB XII)
 */

window.FLOWCHART_COURSE_DATA = {
  "metadata": {
    "title": "FLOWCHART: Konsep Dasar, Simbol, Jenis, Algoritma, dan Implementasi dalam Pemrograman",
    "author": "Instruktur Algoritma & Pemrograman - Modul Terpadu",
    "audience": "Pelajar, Mahasiswa, Pemula Informatika & Pengembang Perangkat Lunak",
    "version": "2.0.0-PRO",
    "license": "Creative Commons Attribution 4.0 International",
    "lastUpdated": "Oktober 2026"
  },
  "chapters": [
    {
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
          "content": "<p>Secara terminologi komputasi, <strong>Flowchart</strong> (dikenal juga dalam Bahasa Indonesia sebagai <em>Diagram Alir</em> atau <em>Bagan Alir</em>) adalah <strong>representasi grafis atau visual dari suatu algoritma, proses bisnis, alur kerja (workflow), atau sistem komputasi</strong> yang memperlihatkan langkah-langkah dalam bentuk simbol-simbol geometris standar beserta urutan hubungannya yang dihubungkan dengan garis berpanah (<em>flowline</em>).</p>\n                <p>Menurut standar <strong>ANSI (American National Standards Institute)</strong> dan <strong>ISO 5807:1985</strong>, setiap bangun datar dalam flowchart merepresentasikan jenis instruksi spesifik—mulai dari titik mula proses, operasi komputasi, masukan pengguna, pengujian kondisi logis, hingga keluaran sistem.</p>\n                <div class=\"alert alert-info\">\n                    <strong>💡 Inti Konsep:</strong> Flowchart mengubah pemikiran logika manusia yang abstrak dan berbelit-belit menjadi gambaran skematis konkret yang dapat dibaca, diaudit, serta divalidasi oleh seluruh anggota tim teknis maupun non-teknis sebelum sebaris kode pun ditulis di komputer.\n                </div>"
        },
        {
          "id": "1-2-algoritma",
          "title": "1.2 Pengertian Algoritma dan Hubungannya dengan Flowchart",
          "content": "<p>Sebelum ada flowchart, selalu ada yang namanya <strong>Algoritma</strong>. Algoritma (berasal dari nama matematikawan Muslim abad ke-9, <em>Muhammad ibn Musa al-Khwarizmi</em>) adalah <strong>urutan langkah-langkah logis, berhingga (finite), dan sistematis untuk memecahkan suatu masalah komputasi atau mencapai tujuan tertentu</strong>.</p>\n                <p>Tiga ciri mutlak sebuah algoritma yang baik menurut Donald E. Knuth adalah:</p>\n                <ul>\n                    <li><strong>Definiteness (Kepastian):</strong> Setiap instruksi harus jelas, eksplisit, dan tidak menimbulkan makna ambigu/ganda.</li>\n                    <li><strong>Finiteness (Keberhinggaan):</strong> Algoritma wajib berhenti setelah sejumlah langkah terhingga dieksekusi. Tidak boleh berjalan selamanya tanpa akhir (*infinite trap*).</li>\n                    <li><strong>Effectiveness (Efektivitas):</strong> Setiap langkah harus cukup sederhana sehingga dapat dikerjakan secara mekanis oleh mesin komputasi.</li>\n                </ul>\n                <p><strong>Hubungan Timbal Balik:</strong> Algoritma adalah <em>jiwa dan ide konseptual</em> di balik solusi, sedangkan Flowchart adalah <em>peta visual arsitektur</em> yang menggambarkan algoritma tersebut ke dalam bentuk diagram bagan alir.</p>"
        },
        {
          "id": "1-3-tujuan-fungsi",
          "title": "1.3 Tujuan, Fungsi, dan Manfaat Flowchart",
          "content": "<div class=\"grid-3-col\">\n                    <div class=\"feature-card\">\n                        <div class=\"card-icon\">🎯</div>\n                        <h4>Tujuan Pembuatan</h4>\n                        <ul>\n                            <li>Menstandarisasi alur kerja agar seragam bagi seluruh pengembang.</li>\n                            <li>Memecah permasalahan komputasi rumit (*divide-and-conquer*) menjadi modul-modul sederhana.</li>\n                            <li>Sebagai cetak biru (*blueprint*) acuan sebelum menulis sintaks kode.</li>\n                        </ul>\n                    </div>\n                    <div class=\"feature-card\">\n                        <div class=\"card-icon\">⚙️</div>\n                        <h4>Fungsi Pemecahan Masalah</h4>\n                        <ul>\n                            <li>Mendeteksi celah logika (*logic flaws*) dan cabang buntu lebih dini.</li>\n                            <li>Menelusuri skenario normal (*happy path*) serta skenario gagal (*edge cases*).</li>\n                            <li>Memetakan ketergantungan antar-data input dan variabel proses.</li>\n                        </ul>\n                    </div>\n                    <div class=\"feature-card\">\n                        <div class=\"card-icon\">🚀</div>\n                        <h4>Manfaat Industri</h4>\n                        <ul>\n                            <li><strong>Komunikasi Efektif:</strong> Jembatan pemahaman antara Project Manager, Analis Sistem, Klien, dan Programmer.</li>\n                            <li><strong>Dokumentasi Sistem Abadi:</strong> Menjadi panduan operasional saat developer lama telah berganti.</li>\n                            <li><strong>Kemudahan Debugging:</strong> Mempercepat pelacakan letak kesalahan logika kode.</li>\n                        </ul>\n                    </div>\n                </div>"
        },
        {
          "id": "1-4-kelebihan-keterbatasan",
          "title": "1.4 Kelebihan dan Keterbatasan Flowchart",
          "content": "<div class=\"table-responsive\">\n                    <table class=\"table-custom\">\n                        <thead>\n                            <tr>\n                                <th style=\"width: 50%;\">🌟 Kelebihan Flowchart</th>\n                                <th style=\"width: 50%;\">⚠️ Keterbatasan Flowchart</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td><strong>Sangat Visual & Intuitif:</strong> Manusia memproses gambar 60.000 kali lebih cepat daripada teks naratif panjang.</td>\n                                <td><strong>Kurang Praktis untuk Program Skala Masif:</strong> Jika sebuah program memiliki ribuan baris kode, flowchart akan sangat luas dan rumit dibaca.</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Independen terhadap Bahasa Pemrograman:</strong> Berlaku universal baik nantinya diimplementasikan ke Python, Java, C++, PHP, maupun Rust.</td>\n                                <td><strong>Biaya Modifikasi Cukup Tinggi:</strong> Jika ada satu logika awal berubah, seringkali tata letak garis alir harus digambar ulang dari awal.</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Memudahkan Analisis Jalur:</strong> Menjamin seluruh kemungkinan percabangan (*branch coverage*) teridentifikasi dengan jelas.</td>\n                                <td><strong>Tidak Menunjukkan Detail Eksekusi Teknis:</strong> Tidak memperlihatkan manajemen memori, penanganan concurrency/thread, atau optimasi microcode.</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>"
        },
        {
          "id": "1-5-perbedaan-paradigma",
          "title": "1.5 Perbedaan: Algoritma, Pseudocode, Flowchart, dan Kode Program",
          "content": "<p>Seringkali pemula informatika mencampuradukkan keempat istilah fundamental ini. Berikut adalah tabel komparasi holistik:</p>\n                <div class=\"table-responsive\">\n                    <table class=\"table-custom\">\n                        <thead>\n                            <tr>\n                                <th>Parameter</th>\n                                <th>Algoritma</th>\n                                <th>Pseudocode</th>\n                                <th>Flowchart</th>\n                                <th>Kode Program</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td><strong>Bentuk / Media</strong></td>\n                                <td>Kalimat deskriptif bahasa manusia (Indonesia/Inggris)</td>\n                                <td>Teks semi-formal menyerupai sintaks kode pemrograman</td>\n                                <td>Bagan diagram visual grafis bangun datar berpanah</td>\n                                <td>Teks instruksi kode formal sesuai sintaks bahasa spesifik</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Standar Sintaks</strong></td>\n                                <td>Bebas, fleksibel, mengutamakan pemahaman alur</td>\n                                <td>Tidak kaku, memakai kata kunci baku (IF, ELSE, WHILE, FOR)</td>\n                                <td>Standar geometris resmi (ANSI / ISO / DIN)</td>\n                                <td>Sangat ketat (Strict Syntax), salah koma atau titik dua = Syntax Error</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Target Pembaca</strong></td>\n                                <td>Manusia / Orang awam</td>\n                                <td>Programmer & System Analyst</td>\n                                <td>Seluruh tim (Teknis & Stakeholder Non-Teknis)</td>\n                                <td>Kompilator / Interpreter Komputer</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Bisa Dijalankan Komputer?</strong></td>\n                                <td>❌ Tidak bisa langsung dieksekusi</td>\n                                <td>❌ Tidak bisa langsung dieksekusi</td>\n                                <td>❌ Tidak bisa langsung dieksekusi</td>\n                                <td>✅ Bisa dieksekusi langsung oleh prosesor komputer</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Contoh Konkret</strong></td>\n                                <td>Jika nilai lebih besar atau sama dengan 75, nyatakan lulus.</td>\n                                <td><code>IF nilai >= 75 THEN PRINT \"LULUS\" ENDIF</code></td>\n                                <td>Simbol Belah Ketupat <code>{nilai >= 75?}</code> dengan panah Ya/Tidak</td>\n                                <td><code>if nilai >= 75: print(\"LULUS\")</code></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>"
        },
        {
          "id": "1-6-kapan-digunakan",
          "title": "1.6 Kapan Flowchart Perlu Digunakan?",
          "content": "<p>Flowchart <strong>SANGAT DIREKOMENDASIKAN</strong> ketika:</p>\n                <ol class=\"custom-ol\">\n                    <li><strong>Tahap Perancangan Sistem Baru (Design Phase):</strong> Saat merancang arsitektur perangkat lunak dari dokumen kebutuhan (*Software Requirement Specification*).</li>\n                    <li><strong>Menganalisis Masalah Logika Rumit:</strong> Skenario yang memiliki banyak percabangan bertingkat (*nested if*) atau kondisi validasi berulang.</li>\n                    <li><strong>Presentasi Kepada Klien & Manajemen:</strong> Klien bisnis tidak paham kode Python/Java, namun mereka paham bagan alir proses transaksi bisnis.</li>\n                    <li><strong>Standarisasi SOP Operasional Perusahaan:</strong> Dokumentasi alur kerja birokrasi, penanganan insiden server, atau prosedur mutu ISO 9001.</li>\n                    <li><strong>Investigasi Bug Sistem (Root Cause Analysis):</strong> Menelusuri di langkah mana data mengalami distorsi atau kegagalan pemrosesan.</li>\n                </ol>\n                <div class=\"alert alert-warning\">\n                    <strong>Kapan TIDAK Perlu Flowchart?</strong> Untuk fungsi utilitas mikro satu baris (seperti <code>def hitung_pajak(n): return n * 0.11</code>), membuat flowchart formal justru memboroskan waktu dan tidak memberikan nilai tambah signifikan.\n                </div>"
        },
        {
          "id": "1-7-contoh-nyata",
          "title": "1.7 Contoh Penggunaan Nyata dalam Kehidupan Sehari-hari & Teknologi",
          "content": "<div class=\"grid-2-col\">\n                    <div class=\"card-sub\">\n                        <h4>☕ Contoh Kehidupan Nyata: Menikmati Kopi Pagi</h4>\n                        <p>Alur keputusan manusia sehari-hari:</p>\n                        <ol>\n                            <li>Ambil cangkir dan masukkan bubuk kopi.</li>\n                            <li>Apakah suka manis?\n                                <ul>\n                                    <li><strong>Ya:</strong> Tambahkan 2 sendok gula pasir.</li>\n                                    <li><strong>Tidak:</strong> Lewati pemberian gula.</li>\n                                </ul>\n                            </li>\n                            <li>Tuang air panas 90°C sebanyak 150 ml.</li>\n                            <li>Aduk hingga larut merata. Kopi siap dinikmati!</li>\n                        </ol>\n                    </div>\n                    <div class=\"card-sub\">\n                        <h4>📱 Contoh Teknologi: Otentikasi Sidik Jari Smartphone</h4>\n                        <p>Alur sistem sensor biometrik perangkat:</p>\n                        <ol>\n                            <li>Sensor mendeteksi sentuhan jari pada layar/tombol.</li>\n                            <li>Sistem membaca pola lekukan dan mencocokkan hash dengan secure enclave chip.</li>\n                            <li>Apakah pola sidik jari cocok (<em>match score >= 98%</em>)?\n                                <ul>\n                                    <li><strong>Ya:</strong> Buka kunci layar (<em>Unlock UI</em>).</li>\n                                    <li><strong>Tidak:</strong> Munculkan getaran peringatan dan minta PIN alternatif.</li>\n                                </ul>\n                            </li>\n                        </ol>\n                    </div>\n                </div>"
        },
        {
          "id": "1-8-rangkuman",
          "title": "1.8 Rangkuman Bab I",
          "content": "<div class=\"summary-box\">\n                    <h4>📌 Rangkuman Inti Bab I:</h4>\n                    <ul>\n                        <li><strong>Flowchart</strong> adalah representasi diagram visual standar dari sebuah algoritma menggunakan bangun geometris yang dihubungkan garis panah.</li>\n                        <li><strong>Algoritma</strong> adalah langkah sistematis logis pemecahan masalah yang berhingga (*finite*).</li>\n                        <li>Flowchart menjembatani ide konseptual manusia dengan implementasi kode teknis komputer, serta mempermudah komunikasi lintas divisi.</li>\n                        <li>Empat serangkai rekayasa sistem: <em>Algoritma (Ide Narasi) ➔ Flowchart (Peta Visual) ➔ Pseudocode (Draf Notasi) ➔ Kode Program (Eksekusi Mesin)</em>.</li>\n                    </ul>\n                </div>"
        }
      ]
    },
    {
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
          "content": "<p>Simbol flowchart tidak dibuat secara sembarangan melainkan tunduk pada regulasi standar internasional. Standar yang paling banyak diacu di dunia teknologi informasi adalah:</p>\n                <ul>\n                    <li><strong>ANSI X3.5-1970:</strong> Standar asal Amerika Serikat yang pertama kali memformalkan simbol pengolahan data.</li>\n                    <li><strong>ISO 5807:1985:</strong> Standar internasional yang diterbitkan oleh International Organization for Standardization, mencakup diagram alir data, diagram alir program, dan diagram jaringan sistem.</li>\n                    <li><strong>DIN 66001:</strong> Standar industri Jerman yang banyak memengaruhi penyusunan diagram manufaktur dan rekayasa kontrol.</li>\n                </ul>\n                <div class=\"alert alert-warning\">\n                    <strong>Catatan Penting Antar-Standar:</strong> Sebagian besar simbol inti (Terminator, Process, Decision, IO) identik pada semua standar. Namun, simbol untuk media penyimpanan fisik (Punched card, Magnetic tape, Drum) yang populer di era 1970-an kini telah berevolusi menjadi simbol <strong>Database Silinder</strong> modern dalam perancangan aplikasi masa kini.\n                </div>"
        },
        {
          "id": "2-2-galeri-simbol",
          "title": "2.2 Galeri & Tabel Lengkap 18 Simbol Flowchart",
          "content": "<p>Berikut adalah tabel katalog interaktif seluruh simbol flowchart resmi. Klik setiap kartu simbol untuk melihat tampilan vektor SVG resolusi tinggi dan detail fungsi teknisnya:</p>\n                <div id=\"symbols-gallery-container\" class=\"symbols-grid\"></div>"
        },
        {
          "id": "2-3-simbol-tertukar",
          "title": "2.3 Analisis Kritis: Simbol-Simbol yang Sering Tertukar",
          "content": "<p>Banyak pemula dan mahasiswa informatika melakukan kesalahan fatal dalam ujian atau perancangan sistem karena menukar simbol-simbol yang tampak mirip. Berikut pembedahan detailnya:</p>\n                \n                <div class=\"comparison-card\">\n                    <h4>1. Process (Persegi Panjang Biasa) vs Predefined Process (Persegi Panjang Garis Ganda)</h4>\n                    <div class=\"grid-2-col\">\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-blue\">Process</span>\n                            <p><strong>Fungsi:</strong> Operasi kalkulasi internal atau pengubahan nilai variabel lokal yang langsung dikerjakan saat itu juga.</p>\n                            <p><strong>Contoh:</strong> <code>luas = p * l</code>, <code>total = subtotal + ongkir</code></p>\n                        </div>\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-purple\">Predefined Process</span>\n                            <p><strong>Fungsi:</strong> Pemanggilan sub-program, fungsi terpisah (function/method), atau modul eksternal yang alur detailnya digambar pada lembar diagram tersendiri.</p>\n                            <p><strong>Contoh:</strong> <code>validasiKartuKredit()</code>, <code>kirimEmailNotifikasi()</code></p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"comparison-card\">\n                    <h4>2. Input/Output (Jajar Genjang) vs Manual Input (Segiempat Permukaan Miring)</h4>\n                    <div class=\"grid-2-col\">\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-purple\">Input/Output (General)</span>\n                            <p><strong>Fungsi:</strong> Masukan atau keluaran generik tanpa mengikat media perangkat kerasnya. Bisa dari file, port serial, socket jaringan, ataupun memori.</p>\n                            <p><strong>Contoh:</strong> <code>Baca Data Sensor</code>, <code>Kirim Payload API</code></p>\n                        </div>\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-red\">Manual Input</span>\n                            <p><strong>Fungsi:</strong> Masukan yang diketik atau ditekan langsung oleh jari tangan manusia secara fisik pada saat runtime.</p>\n                            <p><strong>Contoh:</strong> <code>Ketik PIN pada Keypad ATM</code>, <code>Scan Barcode Barang</code></p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"comparison-card\">\n                    <h4>3. Flowline (Garis Panah) vs Connector (Lingkaran Kecil)</h4>\n                    <div class=\"grid-2-col\">\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-gray\">Flowline</span>\n                            <p><strong>Fungsi:</strong> Menghubungkan dua langkah berdekatan secara langsung dan menunjukkan orientasi pergerakan alur.</p>\n                        </div>\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-cyan\">On-Page Connector</span>\n                            <p><strong>Fungsi:</strong> Memutus garis panah yang terlalu panjang atau berliku-liku agar diagram tidak dipenuhi kabel/garis yang ruwet dan saling tumpang tindih.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"comparison-card\">\n                    <h4>4. Database (Silinder) vs Document (Kertas Gelombang)</h4>\n                    <div class=\"grid-2-col\">\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-green\">Database (Silinder)</span>\n                            <p><strong>Fungsi:</strong> Penyimpanan data secara digital, terstruktur, dan permanen di disk penyimpanan (SQL/NoSQL/File Server).</p>\n                        </div>\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-blue\">Document (Kertas)</span>\n                            <p><strong>Fungsi:</strong> Keluaran fisik yang dicetak ke atas kertas nyata (*hardcopy*) atau dokumen format cetak (PDF/Faktur/Kwitansi).</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"comparison-card\">\n                    <h4>5. Decision (Belah Ketupat) vs Process (Persegi Panjang)</h4>\n                    <div class=\"grid-2-col\">\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-amber\">Decision</span>\n                            <p><strong>Wajib memiliki:</strong> Pertanyaan kondisi dengan <strong>minimal 2 panah keluar</strong> berlabel (Ya / Tidak).</p>\n                        </div>\n                        <div class=\"box-vs\">\n                            <span class=\"badge badge-blue\">Process</span>\n                            <p><strong>Wajib memiliki:</strong> Pernyataan tindakan dengan <strong>hanya 1 panah masuk dan 1 panah keluar</strong>.</p>\n                        </div>\n                    </div>\n                </div>"
        },
        {
          "id": "2-4-rangkuman",
          "title": "2.4 Rangkuman Bab II",
          "content": "<div class=\"summary-box\">\n                    <h4>📌 Rangkuman Inti Bab II:</h4>\n                    <ul>\n                        <li>Simbol flowchart memiliki makna semantik yang ketat menurut standar ANSI/ISO; menggambar bentuk yang salah mengubah arti logika program.</li>\n                        <li><strong>Terminator</strong> (Oval) untuk awal/akhir, <strong>Process</strong> (Persegi) untuk aksi komputasi, <strong>Decision</strong> (Belah Ketupat) untuk percabangan logis bernilai boolean, dan <strong>I/O</strong> (Jajar Genjang) untuk antarmuka data.</li>\n                        <li>Simbol khusus seperti <strong>Predefined Process</strong>, <strong>Preparation</strong>, <strong>Database</strong>, dan <strong>Document</strong> memberikan ketegasan arsitektural pada sistem modern.</li>\n                    </ul>\n                </div>"
        }
      ]
    },
    {
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
          "content": "<p>Dalam praktik rekayasa sistem dan industri, flowchart dikelompokkan menjadi 5 jenis utama sesuai dengan sudut pandang (*viewpoint*) dan level abstraksi yang ingin disampaikan:</p>\n                \n                <div class=\"flowchart-type-card\">\n                    <div class=\"type-header\">\n                        <span class=\"badge badge-blue\">Jenis 1</span>\n                        <h3>System Flowchart (Bagan Alir Sistem)</h3>\n                    </div>\n                    <p><strong>Definisi:</strong> Diagram yang menggambarkan alur kerja sistem secara menyeluruh dari sudut pandang perangkat keras, media penyimpanan, dan aliran data antar-modul.</p>\n                    <ul>\n                        <li><strong>Tujuan:</strong> Memberikan gambaran makro arsitektur sistem kepada System Analyst, Network Engineer, dan Manajemen IT.</li>\n                        <li><strong>Karakteristik:</strong> Menggunakan simbol-simbol media fisik seperti Silinder Database, Keyboard Input, Display Monitor, dan Garis Komunikasi Jaringan.</li>\n                        <li><strong>Pengguna:</strong> System Analyst, Enterprise Architect, CIO.</li>\n                        <li><strong>Contoh Kasus:</strong> Alur transaksi POS Kasir: Barcode Scanner ➔ Server Lokal ➔ Sinkronisasi Cloud Database ➔ Cetak Printer Termal.</li>\n                    </ul>\n                    <div class=\"mermaid-container\">\n                        <pre class=\"mermaid\">\ngraph LR\n    User[Pelanggan di Kasir] --> Scanner[Barcode Scanner]\n    Scanner --> POS[Komputer POS Kasir]\n    POS --> DB[(Database Transaksi SQL)]\n    POS --> Printer[Printer Kasir: Cetak Struk]\n    DB --> Cloud[(Cloud Central Server)]\n                        </pre>\n                    </div>\n                </div>\n\n                <div class=\"flowchart-type-card\">\n                    <div class=\"type-header\">\n                        <span class=\"badge badge-green\">Jenis 2</span>\n                        <h3>Program Flowchart (Bagan Alir Program)</h3>\n                    </div>\n                    <p><strong>Definisi:</strong> Diagram yang menggambarkan logika rinci dari langkah-langkah instruksi di dalam suatu unit program atau modul perangkat lunak.</p>\n                    <ul>\n                        <li><strong>Tujuan:</strong> Sebagai panduan kerja langsung bagi Software Developer/Programmer dalam menulis baris sintaks kode.</li>\n                        <li><strong>Karakteristik:</strong> Berisi ekspresi matematika, inisialisasi variabel, perulangan (looping), dan percabangan kondisi spesifik (if-else).</li>\n                        <li><strong>Pengguna:</strong> Programmer, Software Engineer, Quality Assurance (QA).</li>\n                        <li><strong>Contoh Kasus:</strong> Algoritma verifikasi PIN ATM: Cek kecocokan PIN, kurangi counter kesempatan jika salah, kunci akun jika salah 3 kali.</li>\n                    </ul>\n                    <div class=\"mermaid-container\">\n                        <pre class=\"mermaid\">\nflowchart TD\n    Start([Mulai]) --> InputPIN[/Input PIN/]\n    InputPIN --> Check{PIN Cocok?}\n    Check -- Ya --> Access[Buka Menu Transaksi]\n    Check -- Tidak --> Retry{Percobaan < 3?}\n    Retry -- Ya --> InputPIN\n    Retry -- Tidak --> Block[Blokir Kartu ATM]\n    Access --> End([Selesai])\n    Block --> End\n                        </pre>\n                    </div>\n                </div>\n\n                <div class=\"flowchart-type-card\">\n                    <div class=\"type-header\">\n                        <span class=\"badge badge-amber\">Jenis 3</span>\n                        <h3>Process / Procedure Flowchart (Bagan Alir Prosedur / SOP)</h3>\n                    </div>\n                    <p><strong>Definisi:</strong> Diagram yang memetakan langkah-langkah kerja operasional dalam proses bisnis atau manufaktur yang melibatkan tanggung jawab manusia lintas bagian.</p>\n                    <ul>\n                        <li><strong>Tujuan:</strong> Menstandarisasi Standard Operating Procedure (SOP) dan efisiensi alur operasional kerja.</li>\n                        <li><strong>Karakteristik:</strong> Sering digambar dengan format <em>Swimlane (Lintasan Renang)</em> untuk memisahkan wewenang tiap departemen.</li>\n                        <li><strong>Pengguna:</strong> Business Analyst, Operation Manager, Auditor Mutu ISO.</li>\n                        <li><strong>Contoh Kasus:</strong> Alur Pengajuan Cuti Karyawan: Karyawan ➔ Atasan Langsung ➔ Divisi HRD ➔ Penggajian.</li>\n                    </ul>\n                    <div class=\"mermaid-container\">\n                        <pre class=\"mermaid\">\nflowchart TD\n    subgraph Karyawan\n        A1[Isi Form Cuti] --> A2[Kirim ke Atasan]\n    end\n    subgraph Atasan\n        A2 --> B1{Disetujui?}\n        B1 -- Tidak --> B2[Tolak & Beri Alasan]\n        B1 -- Ya --> B3[Tanda Tangan ACC]\n    end\n    subgraph HRD\n        B3 --> C1[Update Kuota Cuti]\n        C1 --> C2[Arsipkan Berkas]\n    end\n                        </pre>\n                    </div>\n                </div>\n\n                <div class=\"flowchart-type-card\">\n                    <div class=\"type-header\">\n                        <span class=\"badge badge-purple\">Jenis 4</span>\n                        <h3>Document Flowchart (Bagan Alir Dokumen / Formulir)</h3>\n                    </div>\n                    <p><strong>Definisi:</strong> Diagram yang secara spesifik menelusuri perpindahan arus berkas formulir fisik, kwitansi, atau surat laporan dari satu unit kerja ke unit kerja lainnya.</p>\n                    <ul>\n                        <li><strong>Tujuan:</strong> Mengontrol jejak audit (*audit trail*) dokumen keuangan dan mencegah kebocoran faktur.</li>\n                        <li><strong>Karakteristik:</strong> Dominan menggunakan simbol Document Tunggal dan Multiple Documents (rangkap faktur).</li>\n                        <li><strong>Pengguna:</strong> Auditor Keuangan, Akuntan, Petugas Administrasi.</li>\n                        <li><strong>Contoh Kasus:</strong> Alur Surat Perintah Jalan (SPJ) rangkap 3: Lembar 1 untuk Supir, Lembar 2 untuk Gudang, Lembar 3 untuk Finance.</li>\n                    </ul>\n                </div>\n\n                <div class=\"flowchart-type-card\">\n                    <div class=\"type-header\">\n                        <span class=\"badge badge-red\">Jenis 5</span>\n                        <h3>Data Flowchart (Bagan Alir Data Terarah)</h3>\n                    </div>\n                    <p><strong>Definisi:</strong> Diagram yang menggambarkan transformasi logis aliran data yang melewati proses-proses pengolahan sistem.</p>\n                    <ul>\n                        <li><strong>Tujuan:</strong> Menganalisis bagaimana data mentah diproses dan disimpan menjadi informasi berharga.</li>\n                        <li><strong>Karakteristik:</strong> Berfokus pada transformasi isi data ketimbang urutan kontrol instruksi mesin.</li>\n                        <li><strong>Pengguna:</strong> Data Engineer, Analis Basis Data.</li>\n                    </ul>\n                </div>"
        },
        {
          "id": "3-2-flowchart-vs-dfd",
          "title": "3.2 Perbedaan Tegas: Flowchart vs Data Flow Diagram (DFD)",
          "content": "<p>Salah satu kekeliruan fatal mahasiswa tingkat awal adalah menganggap Flowchart dan DFD adalah benda yang sama. Padahal keduanya mewakili paradigma yang sama sekali berbeda:</p>\n                \n                <div class=\"table-responsive\">\n                    <table class=\"table-custom\">\n                        <thead>\n                            <tr>\n                                <th>Kriteria Pembeda</th>\n                                <th>Flowchart (Diagram Alir)</th>\n                                <th>Data Flow Diagram (DFD)</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td><strong>Fokus Utama</strong></td>\n                                <td><strong>Control Flow (Alur Kendali):</strong> Urutan waktu eksekusi langkah demi langkah secara kronologis.</td>\n                                <td><strong>Data Flow (Alur Data):</strong> Perpindahan dan transformasi paket data tanpa memedulikan urutan waktu eksekusi.</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Simbol Percabangan (Decision)</strong></td>\n                                <td>Memiliki simbol khusus <em>Decision (Belah Ketupat)</em> untuk pilihan Ya / Tidak.</td>\n                                <td><strong>TIDAK PERNAH</strong> memiliki simbol keputusan percabangan boolean.</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Simbol Perulangan (Looping)</strong></td>\n                                <td>Memiliki panah balik ke atas untuk mengulang instruksi berkali-kali.</td>\n                                <td>Tidak ada konsep looping; garis panah murni menunjukkan arah aliran paket data.</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Tingkat Hirarki</strong></td>\n                                <td>Linear dalam 1 lembar atau menggunakan connector.</td>\n                                <td>Berjenjang hierarkis: Diagram Konteks (Level 0), Level 1, Level 2, dst.</td>\n                            </tr>\n                            <tr>\n                                <td><strong>Notasi Standar</strong></td>\n                                <td>ANSI / ISO 5807</td>\n                                <td>Yourdon / DeMarco atau Gane & Sarson</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>"
        },
        {
          "id": "3-3-panduan-memilih",
          "title": "3.3 Panduan Praktis: Memilih Diagram Berdasarkan Kebutuhan Proyek",
          "content": "<p>Gunakan matriks keputusan praktis berikut saat Anda ragu memilih jenis diagram mana yang harus dibuat:</p>\n                <div class=\"table-responsive\">\n                    <table class=\"table-custom\">\n                        <thead>\n                            <tr>\n                                <th>Kebutuhan Desain / Kasus Proyek</th>\n                                <th>Diagram yang Wajib Dipilih</th>\n                                <th>Alasan Pemilihan</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>Ingin membuat fungsi algoritma sorting, kalkulator, atau game logic.</td>\n                                <td><span class=\"badge badge-green\">Program Flowchart</span></td>\n                                <td>Membutuhkan kejelasan variabel, percabangan if-else, dan loop while/for.</td>\n                            </tr>\n                            <tr>\n                                <td>Ingin mendokumentasikan pembagian tugas kasir, koki, dan pelayan restoran.</td>\n                                <td><span class=\"badge badge-amber\">Process Flowchart (Swimlane)</span></td>\n                                <td>Memperlihatkan batas tanggung jawab lintas individu/departemen dengan jelas.</td>\n                            </tr>\n                            <tr>\n                                <td>Ingin memperlihatkan integrasi hardware server, database, dan aplikasi mobile.</td>\n                                <td><span class=\"badge badge-blue\">System Flowchart</span></td>\n                                <td>Mampu memetakan media fisik perangkat keras dan jaringan.</td>\n                            </tr>\n                            <tr>\n                                <td>Ingin memetakan batas lingkup sistem informasi akademik dengan entitas luar (Mahasiswa, Dosen, Bank).</td>\n                                <td><span class=\"badge badge-purple\">DFD Context Level 0</span></td>\n                                <td>DFD lebih superior untuk memetakan batasan sistem dan entitas eksternal.</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>"
        },
        {
          "id": "3-4-rangkuman",
          "title": "3.4 Rangkuman Bab III",
          "content": "<div class=\"summary-box\">\n                    <h4>📌 Rangkuman Inti Bab III:</h4>\n                    <ul>\n                        <li>Setiap jenis flowchart memiliki audiens dan level abstraksi tersendiri; jangan mencampuradukkan logika mikro coding ke dalam diagram makro sistem.</li>\n                        <li><strong>Program Flowchart</strong> berfokus pada algoritma instruksi kode programmer; <strong>System Flowchart</strong> pada interaksi hardware & database; <strong>Process Flowchart</strong> pada SOP manusia.</li>\n                        <li><strong>Flowchart ≠ DFD:</strong> Flowchart memetakan <em>urutan kendali waktu dan keputusan</em>, sedangkan DFD memetakan <em>transformasi aliran data tanpa keputusan waktu</em>.</li>\n                    </ul>\n                </div>"
        }
      ]
    },
    {
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
          "content": "<p>Menggambar flowchart bukan sekadar menaruh kotak dan garis secara bebas. Ada 13 kaidah baku teknis yang harus dipatuhi agar diagram dapat diverifikasi secara ilmiah:</p>\n                \n                <div class=\"rules-grid\">\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">1</span>\n                        <h4>Titik Awal & Akhir Tunggal</h4>\n                        <p>Diagram harus memiliki tepat <strong>satu simbol Mulai (Start)</strong>. Titik akhir (Selesai/End) idealnya tunggal atau berkonvergensi ke titik terminasi yang jelas.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">2</span>\n                        <h4>Arah Aliran Alami</h4>\n                        <p>Alur standar diagram selalu bergerak dari <strong>atas ke bawah (top-to-bottom)</strong> atau dari <strong>kiri ke kanan (left-to-right)</strong>. Alur ke atas hanya diizinkan untuk perulangan (*loop*).</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">3</span>\n                        <h4>Kewajiban Mata Panah</h4>\n                        <p>Garis alir (*flowline*) <strong>wajib memiliki mata panah</strong> penunjuk arah di ujungnya. Garis polos tanpa mata panah dianggap tidak valid karena kehilangan orientasi kendali.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">4</span>\n                        <h4>Penamaan Singkat & Padat</h4>\n                        <p>Teks di dalam simbol harus ringkas, jelas, dan menggunakan kata kerja aktif (misal: <code>Hitung Diskon</code>, bukan kalimat narasi panjang seperti <em>Lalu kita menghitung diskon sebesar sepuluh persen</em>).</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">5</span>\n                        <h4>Konsistensi Simbol I/O</h4>\n                        <p>Gunakan simbol Jajar Genjang untuk interaksi data (Input/Output). Jangan menggunakan simbol Proses (Persegi Panjang) untuk membaca masukan pengguna.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">6</span>\n                        <h4>Kaidah Simbol Decision</h4>\n                        <p>Simbol Belah Ketupat <strong>wajib memiliki minimal 2 jalur keluar</strong> yang masing-masing <strong>diberi label eksplisit</strong>: <em>Ya/Tidak</em>, <em>True/False</em>, atau <em>Nilai Pilihan</em>.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">7</span>\n                        <h4>Konvergensi / Penggabungan Alur</h4>\n                        <p>Ketika dua cabang percabangan selesai diproses, keduanya harus bertemu kembali pada satu titik aliran (simbol proses berikutnya atau terminator selesai) sebelum program berakhir.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">8</span>\n                        <h4>Kondisi Terminasi Loop</h4>\n                        <p>Setiap perulangan (*looping*) harus memiliki variabel pengontrol dan kondisi terminasi agar terhindar dari jebakan *Infinite Loop* (perulangan tanpa akhir).</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">9</span>\n                        <h4>Gunakan On-Page Connector</h4>\n                        <p>Jika diagram mulai rumit, gunakan simbol lingkaran penghubung (On-Page Connector) dengan huruf identik (misal: <code>A</code> ➔ <code>A</code>) untuk memotong garis panjang.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">10</span>\n                        <h4>Hindari Garis Berpotongan</h4>\n                        <p>Garis panah tidak boleh saling tumpang tindih menyilang (<em>crossing lines</em>). Gunakan jembatan garis lengkung atau connector jika persilangan tak terhindarkan.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">11</span>\n                        <h4>Ukuran Simbol Proporsional</h4>\n                        <p>Jaga keseragaman dimensi simbol agar diagram tampak rapi, teratur, dan profesional saat dipresentasikan atau dicetak.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">12</span>\n                        <h4>Keterbacaan & Spasi Visual</h4>\n                        <p>Beri jarak vertikal dan horizontal yang konsisten antar-simbol (rekomendasi 20–30 mm) agar mata pembaca nyaman menelusuri alur.</p>\n                    </div>\n                    <div class=\"rule-card\">\n                        <span class=\"rule-num\">13</span>\n                        <h4>Penanganan Error (Edge Cases)</h4>\n                        <p>Jangan hanya merancang alur sukses (*happy path*). Selalu sediakan cabang penanganan jika pengguna memasukkan data salah (misal: input angka minus pada umur).</p>\n                    </div>\n                </div>"
        },
        {
          "id": "4-2-kasus-benar-salah",
          "title": "4.2 Komparasi Kasus Nyata: Flowchart yang Salah vs Flowchart yang Benar",
          "content": "<p>Mari kita bedah sebuah kasus nyata: <strong>Alur Validasi Usia Pembuatan SIM (Surat Izin Mengemudi)</strong> dengan syarat usia minimal 17 tahun.</p>\n                \n                <div class=\"grid-2-col\">\n                    <div class=\"card-wrong\">\n                        <div class=\"badge badge-red\">❌ CONTOH FLOWCHART SALAH</div>\n                        <h4>Apa Saja Kesalahan Fatalnya?</h4>\n                        <ul>\n                            <li>Menggunakan persegi panjang biasa untuk awal/akhir (bukan oval).</li>\n                            <li>Menggunakan persegi panjang untuk input usia (seharusnya jajar genjang).</li>\n                            <li>Cabang belah ketupat tidak memiliki label <em>Ya</em> atau <em>Tidak</em>.</li>\n                            <li>Jalur penolakan menggantung di udara tanpa pernah menuju titik Selesai.</li>\n                        </ul>\n                        <div class=\"mermaid-container\">\n                            <pre class=\"mermaid\">\nflowchart TD\n    W1[Mulai] --> W2[Input Usia Siswa]\n    W2 --> W3{Usia >= 17}\n    W3 --> W4[Cetak SIM Diterbitkan]\n    W3 --> W5[Tolak Permohonan]\n    W4 --> W6[Selesai]\n                            </pre>\n                        </div>\n                    </div>\n\n                    <div class=\"card-correct\">\n                        <div class=\"badge badge-green\">✅ CONTOH FLOWCHART BENAR</div>\n                        <h4>Mengapa Diagram Ini Valid & Sempurna?</h4>\n                        <ul>\n                            <li>Titik Mulai dan Selesai menggunakan simbol Terminator (Oval) standar.</li>\n                            <li>Input data usia menggunakan Jajar Genjang yang tepat.</li>\n                            <li>Cabang Decision memiliki label jelas (<em>Ya</em> dan <em>Tidak</em>).</li>\n                            <li>Seluruh cabang berkonvergensi kembali secara rapi menuju titik Selesai.</li>\n                        </ul>\n                        <div class=\"mermaid-container\">\n                            <pre class=\"mermaid\">\nflowchart TD\n    C1([MULAI]) --> C2[/Input: usia/]\n    C2 --> C3{\"Apakah usia >= 17?\"}\n    C3 -- Ya --> C4[/Tampilkan: Berhak Mendapat SIM/]\n    C3 -- Tidak --> C5[/Tampilkan: Belum Cukup Umur/]\n    C4 --> C6([SELESAI])\n    C5 --> C6\n                            </pre>\n                        </div>\n                    </div>\n                </div>"
        },
        {
          "id": "4-3-rangkuman",
          "title": "4.3 Rangkuman Bab IV",
          "content": "<div class=\"summary-box\">\n                    <h4>📌 Rangkuman Inti Bab IV:</h4>\n                    <ul>\n                        <li>Flowchart yang baik harus selalu berorientasi top-to-bottom, memiliki terminator tunggal, serta panah yang terhubung tanpa garis silang ruwet.</li>\n                        <li>Percabangan belah ketupat tidak boleh memiliki cabang tanpa label identitas keputusan (Ya/Tidak).</li>\n                        <li>Kualitas seorang programmer tecermin dari kemampuannya menangani skenario kesalahan masukan (*defensive programming*) di dalam bagan alir.</li>\n                    </ul>\n                </div>"
        }
      ]
    },
    {
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
          "content": "<p>Untuk menghasilkan flowchart yang bebas bug, ikuti panduan rekayasa langkah demi langkah berikut:</p>\n                \n                <div class=\"step-guide\">\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">1</div>\n                        <div class=\"step-body\">\n                            <h4>Pahami Permasalahan Secara Menyeluruh</h4>\n                            <p>Baca narasi kebutuhan dengan teliti. Pahami apa batasan masalah, siapa penggunanya, dan apa ekspektasi akhirnya.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">2</div>\n                        <div class=\"step-body\">\n                            <h4>Tentukan Tujuan Utama Proses</h4>\n                            <p>Rumuskan dalam 1 kalimat padat: <em>\"Tujuan program ini adalah menghitung tarif parkir berdasarkan durasi jam dan jenis kendaraan.\"</em></p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">3</div>\n                        <div class=\"step-body\">\n                            <h4>Petakan I-P-O (Input, Process, Output)</h4>\n                            <p>Kelompokkan elemen masukan, rumus perhitungan matematika/logika, dan elemen hasil yang ditampilkan.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">4</div>\n                        <div class=\"step-body\">\n                            <h4>Tuliskan Algoritma Deskriptif Sederhana</h4>\n                            <p>Tuliskan poin-poin bernomor menggunakan bahasa Indonesia sehari-hari yang mudah dicerna akal.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">5</div>\n                        <div class=\"step-body\">\n                            <h4>Identifikasi Titik Kondisi & Keputusan</h4>\n                            <p>Cari kata kunci penentu seperti: <em>jika, apabila, selama, bila gagal, apakah</em>. Ini adalah calon simbol Belah Ketupat.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">6</div>\n                        <div class=\"step-body\">\n                            <h4>Pilih Simbol Standar yang Sesuai</h4>\n                            <p>Petakan masing-masing poin langkah ke simbol geometris ANSI yang tepat (Oval, Jajar Genjang, Persegi, dll).</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">7</div>\n                        <div class=\"step-body\">\n                            <h4>Susun Urutan Alur dari Atas ke Bawah</h4>\n                            <p>Tempatkan simbol Mulai di posisi teratas, lalu hubungkan setiap langkah berikutnya dengan garis panah vertikal.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">8</div>\n                        <div class=\"step-body\">\n                            <h4>Gambar Diagram secara Rapi</h4>\n                            <p>Gunakan aplikasi pembuat diagram (Draw.io, Mermaid, atau kertas milimeter blok) dengan spasi yang proporsional.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">9</div>\n                        <div class=\"step-body\">\n                            <h4>Uji Meja (Trace Table / Dry Run)</h4>\n                            <p>Simulasikan jalannya program secara manual menggunakan pensil dan tabel nilai untuk berbagai skenario input.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">10</div>\n                        <div class=\"step-body\">\n                            <h4>Perbaiki Kesalahan (Refactoring)</h4>\n                            <p>Jika ditemukan cabang buntu, loop tanpa henti, atau variabel yang belum terdefinisi, sempurnakan bagan alir.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">11</div>\n                        <div class=\"step-body\">\n                            <h4>Dokumentasikan Hasil</h4>\n                            <p>Beri judul diagram, nomor versi dokumen, tanggal pembuatan, dan nama perancang diagram.</p>\n                        </div>\n                    </div>\n                </div>"
        },
        {
          "id": "5-2-studi-kasus-terpandu",
          "title": "5.2 Studi Kasus Terpandu: Sistem Tarif Parkir Mall Berbasis Jam",
          "content": "<p>Mari kita praktikkan ke-11 langkah di atas pada sebuah studi kasus nyata:</p>\n                \n                <div class=\"case-study-box\">\n                    <h4>Deskripsi Masalah:</h4>\n                    <p>Sebuah mall menetapkan aturan tarif parkir mobil sebagai berikut: Tarif 2 jam pertama adalah <strong>Rp 5.000 (flat)</strong>. Untuk setiap jam berikutnya setelah 2 jam pertama, dikenakan tarif tambahan <strong>Rp 3.000 per jam</strong>. Pengguna memasukkan lama waktu parkir (dalam jam integer). Program menghitung dan menampilkan total biaya yang harus dibayar ke layar.</p>\n                    \n                    <h4>Langkah 3: Pemetaan I-P-O</h4>\n                    <ul>\n                        <li><strong>Input (I):</strong> <code>lama_jam</code> (integer positif)</li>\n                        <li><strong>Proses (P):</strong> Cek apakah <code>lama_jam <= 2</code>. Jika ya, <code>total = 5000</code>. Jika tidak, <code>total = 5000 + (lama_jam - 2) * 3000</code>.</li>\n                        <li><strong>Output (O):</strong> <code>total_bayar</code></li>\n                    </ul>\n\n                    <h4>Langkah 4: Pseudocode Formal</h4>\n                    <div class=\"code-wrapper\">\n                        <pre><code>PROGRAM HitungTarifParkir\nKAMUS:\n    lama_jam, total_bayar : integer\nALGORITMA:\n    READ(lama_jam)\n    IF lama_jam <= 2 THEN\n        total_bayar = 5000\n    ELSE\n        total_bayar = 5000 + ((lama_jam - 2) * 3000)\n    ENDIF\n    WRITE(\"Total Biaya Parkir: Rp\", total_bayar)\nENDPROGRAM</code></pre>\n                    </div>\n\n                    <h4>Langkah 8: Bagan Flowchart Final</h4>\n                    <div class=\"mermaid-container\">\n                        <pre class=\"mermaid\">\nflowchart TD\n    Start([MULAI]) --> In[/Input: lama_jam/]\n    In --> Cond{\"Apakah lama_jam <= 2?\"}\n    Cond -- Ya --> Flat[\"total_bayar = 5000\"]\n    Cond -- Tidak --> Extra[\"total_bayar = 5000 + (lama_jam - 2) * 3000\"]\n    Flat --> Out[/Tampilkan: total_bayar/]\n    Extra --> Out\n    Out --> Finish([SELESAI])\n                        </pre>\n                    </div>\n\n                    <h4>Langkah 9: Uji Meja (Trace Table / Dry Run)</h4>\n                    <p>Mari kita uji alur diagram di atas dengan 4 skenario masukan berbeda untuk membuktikan bahwa logikanya 100% akurat:</p>\n                    <div class=\"table-responsive\">\n                        <table class=\"table-custom\">\n                            <thead>\n                                <tr>\n                                    <th>Kasus Pengujian</th>\n                                    <th>Nilai Input (lama_jam)</th>\n                                    <th>Evaluasi Kondisi (lama_jam <= 2)</th>\n                                    <th>Jalur yang Dipilih</th>\n                                    <th>Perhitungan Biaya</th>\n                                    <th>Output Akhir</th>\n                                    <th>Status Uji</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Uji Batas Minimal</td>\n                                    <td><code>1</code></td>\n                                    <td>1 <= 2 ➔ <strong>TRUE (Ya)</strong></td>\n                                    <td>Jalur Flat</td>\n                                    <td><code>5000</code></td>\n                                    <td>Rp 5.000</td>\n                                    <td><span class=\"badge badge-green\">LULUS ✅</span></td>\n                                </tr>\n                                <tr>\n                                    <td>Uji Batas Ambang</td>\n                                    <td><code>2</code></td>\n                                    <td>2 <= 2 ➔ <strong>TRUE (Ya)</strong></td>\n                                    <td>Jalur Flat</td>\n                                    <td><code>5000</code></td>\n                                    <td>Rp 5.000</td>\n                                    <td><span class=\"badge badge-green\">LULUS ✅</span></td>\n                                </tr>\n                                <tr>\n                                    <td>Uji Kasus Normal Ekstra</td>\n                                    <td><code>5</code></td>\n                                    <td>5 <= 2 ➔ <strong>FALSE (Tidak)</strong></td>\n                                    <td>Jalur Extra</td>\n                                    <td><code>5000 + (3 * 3000) = 14000</code></td>\n                                    <td>Rp 14.000</td>\n                                    <td><span class=\"badge badge-green\">LULUS ✅</span></td>\n                                </tr>\n                                <tr>\n                                    <td>Uji Durasi Panjang</td>\n                                    <td><code>10</code></td>\n                                    <td>10 <= 2 ➔ <strong>FALSE (Tidak)</strong></td>\n                                    <td>Jalur Extra</td>\n                                    <td><code>5000 + (8 * 3000) = 29000</code></td>\n                                    <td>Rp 29.000</td>\n                                    <td><span class=\"badge badge-green\">LULUS ✅</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>"
        },
        {
          "id": "5-3-rangkuman",
          "title": "5.3 Rangkuman Bab V",
          "content": "<div class=\"summary-box\">\n                    <h4>📌 Rangkuman Inti Bab V:</h4>\n                    <ul>\n                        <li>Pembuatan flowchart yang profesional selalu diawali dengan dekomposisi <strong>Input-Process-Output (I-P-O)</strong> sebelum menggambar simbol apapun.</li>\n                        <li>Teknik <strong>Uji Meja (Trace Table)</strong> adalah senjata utama programmer untuk mendeteksi kesalahan logika sebelum program di-coding ke komputer.</li>\n                    </ul>\n                </div>"
        }
      ]
    },
    {
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
          "content": "<p><strong>Struktur Sekuensial</strong> adalah struktur paling sederhana di mana setiap instruksi dijalankan berurutan satu per satu dari atas ke bawah, persis sesuai urutan penulisannya, tanpa ada loncatan, percabangan, maupun perulangan.</p>\n                \n                <div class=\"grid-2-col\">\n                    <div>\n                        <h4>Flowchart Visual Sekuensial:</h4>\n                        <div class=\"mermaid-container\">\n                            <pre class=\"mermaid\">\nflowchart TD\n    S([Mulai]) --> A[/Input: panjang, lebar/]\n    A --> B[\"luas = panjang * lebar\"]\n    B --> C[/Tampilkan: luas/]\n    C --> E([Selesai])\n                            </pre>\n                        </div>\n                    </div>\n                    <div>\n                        <h4>Implementasi Kode Python yang Sinkron:</h4>\n                        <div class=\"code-wrapper\">\n                            <pre><code class=\"language-python\"># Struktur Sekuensial Murni\npanjang = 20\nlebar = 10\n\n# Proses\nluas = panjang * lebar\n\n# Output\nprint(f\"Luas Persegi Panjang: {luas} cm²\")</code></pre>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <strong>Analisis Sinkronisasi:</strong> Baris 1-2 merepresentasikan Jajar Genjang Input, Baris 5 merepresentasikan Persegi Panjang Proses, dan Baris 8 merepresentasikan Jajar Genjang Output.\n                        </div>\n                    </div>\n                </div>"
        },
        {
          "id": "6-2-selection",
          "title": "6.2 Struktur Percabangan (Selection / Branching)",
          "content": "<p>Struktur Percabangan memungkinkan komputer memilih salah satu dari beberapa jalur instruksi berdasarkan terpenuhi atau tidaknya suatu kondisi logis (bernilai Boolean: <code>True</code> atau <code>False</code>).</p>\n                \n                <h4>A. Percabangan Tunggal (Single Selection: IF)</h4>\n                <p>Aksi hanya dijalankan jika kondisi bernilai True. Jika False, alur langsung berlanjut tanpa melakukan aksi tambahan.</p>\n                <div class=\"mermaid-container\">\n                    <pre class=\"mermaid\">\nflowchart TD\n    A([Mulai]) --> B[/Input: total_belanja/]\n    B --> C{\"total_belanja >= 500000?\"}\n    C -- Ya --> D[/Tampilkan: Selamat Dapat Kupon Undian/]\n    C -- Tidak --> E([Selesai])\n    D --> E\n                    </pre>\n                </div>\n\n                <h4>B. Percabangan Ganda (Dual Selection: IF-ELSE)</h4>\n                <p>Memiliki dua cabang tindakan yang mutually exclusive: satu untuk kondisi True, dan satu lagi untuk kondisi False.</p>\n                <div class=\"grid-2-col\">\n                    <div>\n                        <div class=\"mermaid-container\">\n                            <pre class=\"mermaid\">\nflowchart TD\n    S([Mulai]) --> In[/Input: bilangan/]\n    In --> Dec{\"bilangan % 2 == 0?\"}\n    Dec -- Ya --> Genap[\"ket = 'GENAP'\"]\n    Dec -- Tidak --> Ganjil[\"ket = 'GANJIL'\"]\n    Genap --> Out[/Tampilkan: ket/]\n    Ganjil --> Out\n    Out --> End([Selesai])\n                            </pre>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"code-wrapper\">\n                            <pre><code class=\"language-python\"># Implementasi IF-ELSE di Python\nbilangan = 17\n\nif bilangan % 2 == 0:\n    ket = \"GENAP\"\nelse:\n    ket = \"GANJIL\"\n\nprint(f\"Bilangan {bilangan} adalah {ket}\")</code></pre>\n                        </div>\n                    </div>\n                </div>\n\n                <h4>C. Percabangan Majemuk / Bertingkat (Multiple Selection: IF-ELIF-ELSE)</h4>\n                <p>Digunakan saat terdapat lebih dari dua alternatif kondisi yang saling menguji secara beruntun.</p>\n                <div class=\"code-wrapper\">\n                    <pre><code class=\"language-python\"># Menentukan Kategori Umur\numur = 16\n\nif umur >= 60:\n    kategori = \"Lansia\"\nelif umur >= 18:\n    kategori = \"Dewasa\"\nelif umur >= 13:\n    kategori = \"Remaja\"\nelse:\n    kategori = \"Anak-anak\"\n\nprint(f\"Kategori usia: {kategori}\")</code></pre>\n                </div>"
        },
        {
          "id": "6-3-iteration",
          "title": "6.3 Struktur Perulangan (Iteration / Looping)",
          "content": "<p>Struktur Perulangan menginstruksikan komputer untuk mengeksekusi blok langkah yang sama berulang kali selama kondisi pengulangan masih bernilai Benar (*True*).</p>\n                \n                <h4>Perulangan Kondisi di Awal (Pre-Tested Loop / WHILE Loop)</h4>\n                <p>Kondisi diuji <em>sebelum</em> badan perulangan dikerjakan. Jika sejak awal kondisi bernilai False, maka badan loop tidak akan pernah dijalankan sama sekali.</p>\n                \n                <div class=\"grid-2-col\">\n                    <div>\n                        <div class=\"mermaid-container\">\n                            <pre class=\"mermaid\">\nflowchart TD\n    Start([MULAI]) --> Init[\"Preparation: counter = 1\"]\n    Init --> Check{\"counter <= 5?\"}\n    Check -- Ya --> Action[/Tampilkan: counter/]\n    Action --> Incr[\"counter = counter + 1\"]\n    Incr --> Check\n    Check -- Tidak --> Finish([SELESAI])\n                            </pre>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"code-wrapper\">\n                            <pre><code class=\"language-python\"># Implementasi WHILE loop di Python\ncounter = 1\n\nwhile counter <= 5:\n    print(f\"Iterasi ke-{counter}\")\n    counter += 1  # Wajib ada agar tidak infinite loop!\n\nprint(\"Perulangan selesai!\")</code></pre>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <strong>⚠️ Anatomi Wajib Sebuah Loop:</strong>\n                            <ol>\n                                <li><strong>Inisialisasi:</strong> Memberikan nilai awal variabel hitung (<code>counter = 1</code>).</li>\n                                <li><strong>Evaluasi Kondisi:</strong> Menguji batas perulangan (<code>counter <= 5</code>).</li>\n                                <li><strong>Update / Increment:</strong> Mengubah nilai variabel hitung di dalam loop (<code>counter += 1</code>).</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>"
        },
        {
          "id": "6-4-rangkuman",
          "title": "6.4 Rangkuman Bab VI",
          "content": "<div class=\"summary-box\">\n                    <h4>📌 Rangkuman Inti Bab VI:</h4>\n                    <ul>\n                        <li>Semua algoritma komputasi di dunia dapat dibangun hanya dengan 3 struktur kendali: <strong>Sequence</strong>, <strong>Selection</strong>, dan <strong>Iteration</strong>.</li>\n                        <li>Struktur Percabangan diwakili oleh simbol Belah Ketupat (Decision) yang mengarahkan aliran ke dua atau lebih jalur berbeda.</li>\n                        <li>Struktur Perulangan diwakili oleh garis alir yang berputar kembali ke atas (*backward flowline*), dan wajib memiliki variabel pengubah agar tidak mengalami kebuntuan memori (*infinite loop*).</li>\n                    </ul>\n                </div>"
        }
      ]
    },
    {
      "id": "bab7",
      "num": "BAB VII",
      "title": "Kumpulan Contoh Flowchart",
      "subtitle": "20 Kasus Komprehensif: Dari Tingkat Dasar, Menengah, Hingga Sistem Lanjutan Enterprise",
      "learningGoals": [
        "Mempelajari 20 contoh kasus flowchart terlengkap dengan detail I-P-O, algoritma, dan pseudocode.",
        "Memahami sinkronisasi diagram alir dengan baris kode program Python pada setiap studi kasus.",
        "Mampu menganalisis skenario pengujian normal maupun alternatif (edge cases).",
        "Menjadikan kumpulan contoh ini sebagai ensiklopedia referensi saat merancang solusi komputasi."
      ],
      "examples": [
        {
          "id": "ex-01",
          "no": 1,
          "level": "Dasar",
          "title": "Menampilkan Pesan Sederhana ('Hello World')",
          "desc": "Program paling mendasar untuk menguji apakah sistem keluaran komputer berfungsi normal dengan mencetak sebuah pesan teks sapaan ke layar monitor.",
          "goal": "Memahami alur paling dasar: Terminator Mulai ➔ Output Teks ➔ Terminator Selesai.",
          "input": "Tidak ada masukan data dari pengguna.",
          "process": "Menyiapkan string teks sapaan di memori.",
          "output": "Pesan teks 'Halo, Selamat Datang di Dunia Pemrograman Flowchart!'.",
          "algo": [
            "Mulai alur program.",
            "Tampilkan pesan teks ke layar monitor.",
            "Selesaikan program."
          ],
          "pseudo": "PROGRAM TampilkanPesan\nALGORITMA:\n    WRITE(\"Halo, Selamat Datang di Dunia Pemrograman Flowchart!\")\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Tampilkan: 'Halo, Selamat Datang di Dunia Pemrograman Flowchart!'/]\n    B --> C([SELESAI])",
          "steps": "1. Program dimulai di Terminator Mulai.\n2. Alur mengalir ke Jajar Genjang yang memerintahkan komputer menampilkan string teks.\n3. Alur langsung menuju Terminator Selesai.",
          "python": "# Contoh 1: Menampilkan Pesan Sederhana\npesan = \"Halo, Selamat Datang di Dunia Pemrograman Flowchart!\"\nprint(pesan)",
          "simNormal": "Output di layar: 'Halo, Selamat Datang di Dunia Pemrograman Flowchart!'",
          "simAlt": "Jika printer terputus, pesan tetap muncul di terminal konsol."
        },
        {
          "id": "ex-02",
          "no": 2,
          "level": "Dasar",
          "title": "Menghitung Luas Persegi Panjang",
          "desc": "Menghitung luas bidang datar persegi panjang berdasarkan nilai panjang dan lebar yang dimasukkan oleh pengguna.",
          "goal": "Memahami pola sekuensial klasik: Input ➔ Proses Rumus Matematika ➔ Output Hasil.",
          "input": "panjang (angka positif), lebar (angka positif).",
          "process": "luas = panjang * lebar",
          "output": "Nilai luas persegi panjang.",
          "algo": [
            "Mulai.",
            "Masukkan nilai panjang dan lebar.",
            "Hitung luas dengan mengalikan panjang dan lebar.",
            "Tampilkan nilai luas.",
            "Selesai."
          ],
          "pseudo": "PROGRAM HitungLuasPersegiPanjang\nKAMUS:\n    panjang, lebar, luas : float\nALGORITMA:\n    READ(panjang, lebar)\n    luas = panjang * lebar\n    WRITE(\"Luas Persegi Panjang:\", luas)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: panjang, lebar/]\n    B --> C[\"luas = panjang * lebar\"]\n    C --> D[/Tampilkan: luas/]\n    D --> E([SELESAI])",
          "steps": "1. Baca data panjang dan lebar dari masukan pengguna.\n2. Simpan dalam variabel, kalikan keduanya pada blok Proses.\n3. Cetak hasil perkalian pada blok Output.",
          "python": "# Contoh 2: Menghitung Luas Persegi Panjang\npanjang = float(input(\"Masukkan panjang: \"))\nlebar = float(input(\"Masukkan lebar: \"))\n\nluas = panjang * lebar\nprint(f\"Luas Persegi Panjang adalah: {luas}\")",
          "simNormal": "Input: panjang=12, lebar=5 ➔ Luas: 60.0",
          "simAlt": "Input desimal: panjang=7.5, lebar=4 ➔ Luas: 30.0"
        },
        {
          "id": "ex-03",
          "no": 3,
          "level": "Dasar",
          "title": "Menghitung Rata-rata Tiga Nilai Ujian",
          "desc": "Menghitung nilai rata-rata (*mean*) dari tiga mata pelajaran (Matematika, IPA, Bahasa Indonesia).",
          "goal": "Memahami urutan presedensi operator matematika dalam simbol proses.",
          "input": "nilai1, nilai2, nilai3 (skala 0 - 100).",
          "process": "rata_rata = (nilai1 + nilai2 + nilai3) / 3",
          "output": "Nilai rata-rata dalam format desimal float.",
          "algo": [
            "Mulai.",
            "Input nilai1, nilai2, nilai3.",
            "Jumlahkan ketiga nilai dan bagi dengan 3.",
            "Tampilkan rata-rata.",
            "Selesai."
          ],
          "pseudo": "PROGRAM HitungRataRataTigaNilai\nKAMUS:\n    n1, n2, n3, rata : float\nALGORITMA:\n    READ(n1, n2, n3)\n    rata = (n1 + n2 + n3) / 3.0\n    WRITE(\"Nilai Rata-rata:\", rata)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: n1, n2, n3/]\n    B --> C[\"rata = (n1 + n2 + n3) / 3\"]\n    C --> D[/Tampilkan: rata/]\n    D --> E([SELESAI])",
          "steps": "1. Membaca 3 data angka sekaligus.\n2. Menjalankan operasi penjumlahan di dalam kurung lalu membaginya dengan 3.\n3. Menampilkan nilai rata-rata.",
          "python": "# Contoh 3: Rata-rata 3 Nilai\nn1 = 80\nn2 = 90\nn3 = 85\n\nrata = (n1 + n2 + n3) / 3\nprint(f\"Rata-rata: {rata:.2f}\")",
          "simNormal": "Input: 80, 90, 85 ➔ Rata-rata: 85.00",
          "simAlt": "Input: 70, 75, 80 ➔ Rata-rata: 75.00"
        },
        {
          "id": "ex-04",
          "no": 4,
          "level": "Dasar",
          "title": "Menentukan Bilangan Ganjil atau Genap",
          "desc": "Mengecek apakah sebuah bilangan bulat merupakan bilangan genap atau ganjil menggunakan operator modulo (sisa bagi).",
          "goal": "Memahami percabangan ganda (IF-ELSE) paling dasar.",
          "input": "bilangan (integer).",
          "process": "Cek apakah `bilangan % 2 == 0`.",
          "output": "Keterangan teks 'GENAP' atau 'GANJIL'.",
          "algo": [
            "Mulai.",
            "Input sebuah bilangan bulat.",
            "Jika bilangan dibagi 2 bersisa 0, maka jenis adalah GENAP.",
            "Jika tidak, maka jenis adalah GANJIL.",
            "Tampilkan jenis dan selesai."
          ],
          "pseudo": "PROGRAM GanjilGenap\nKAMUS:\n    bil : integer\n    ket : string\nALGORITMA:\n    READ(bil)\n    IF bil MOD 2 == 0 THEN\n        ket = \"GENAP\"\n    ELSE\n        ket = \"GANJIL\"\n    ENDIF\n    WRITE(ket)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: bil/]\n    B --> C{\"bil % 2 == 0?\"}\n    C -- Ya --> D[\"ket = 'GENAP'\"]\n    C -- Tidak --> E[\"ket = 'GANJIL'\"]\n    D --> F[/Tampilkan: ket/]\n    E --> F\n    F --> G([SELESAI])",
          "steps": "1. Masukkan bilangan.\n2. Pada belah ketupat, evaluasi sisa bagi dengan 2.\n3. Jika ya, ambil cabang kiri; jika tidak, ambil cabang kanan.\n4. Keduanya bergabung kembali sebelum mencetak hasil.",
          "python": "# Contoh 4: Ganjil Genap\nbil = int(input(\"Masukkan angka: \"))\nif bil % 2 == 0:\n    print(f\"{bil} adalah bilangan GENAP\")\nelse:\n    print(f\"{bil} adalah bilangan GANJIL\")",
          "simNormal": "Input: 18 ➔ 'GENAP'",
          "simAlt": "Input: 25 ➔ 'GANJIL'"
        },
        {
          "id": "ex-05",
          "no": 5,
          "level": "Dasar",
          "title": "Menentukan Kelulusan Berdasarkan KKM (Kriteria Ketuntasan Minimal)",
          "desc": "Siswa dinyatakan LULUS jika nilai ujian >= 75, dan REMEDIAL jika di bawah 75.",
          "goal": "Memahami evaluasi perbandingan relasional (>=) pada pengambilan keputusan.",
          "input": "nama_siswa, nilai (0 - 100).",
          "process": "Evaluasi `nilai >= 75`.",
          "output": "Status: 'LULUS' atau 'REMEDIAL'.",
          "algo": [
            "Mulai.",
            "Input nama dan nilai siswa.",
            "Apakah nilai >= 75? Jika ya, status = LULUS. Jika tidak, status = REMEDIAL.",
            "Tampilkan nama dan status kelulusan.",
            "Selesai."
          ],
          "pseudo": "PROGRAM CekKelulusan\nKAMUS:\n    nama : string; nilai : float; status : string\nALGORITMA:\n    READ(nama, nilai)\n    IF nilai >= 75 THEN\n        status = \"LULUS\"\n    ELSE\n        status = \"REMEDIAL\"\n    ENDIF\n    WRITE(nama, status)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: nama, nilai/]\n    B --> C{\"nilai >= 75?\"}\n    C -- Ya --> D[\"status = 'LULUS'\"]\n    C -- Tidak --> E[\"status = 'REMEDIAL'\"]\n    D --> F[/Tampilkan: nama, status/]\n    E --> F\n    F --> G([SELESAI])",
          "steps": "1. Input nama dan nilai.\n2. Belah ketupat memeriksa kondisi.\n3. Berikan nilai variabel status sesuai cabang.\n4. Cetak output terpadu.",
          "python": "# Contoh 5: Cek Kelulusan KKM\nnama = \"Fajar\"\nnilai = 78\n\nstatus = \"LULUS 🎉\" if nilai >= 75 else \"REMEDIAL 💪\"\nprint(f\"Siswa: {nama} | Status: {status}\")",
          "simNormal": "Nilai 78 ➔ 'LULUS'",
          "simAlt": "Nilai 64 ➔ 'REMEDIAL'"
        },
        {
          "id": "ex-06",
          "no": 6,
          "level": "Menengah",
          "title": "Menentukan Bilangan Terbesar dari Dua Angka",
          "desc": "Menerima dua angka berbeda, lalu menentukan angka mana yang bernilai lebih besar (maksimum).",
          "goal": "Memahami logika pemilihan nilai ekstrim (maksimum).",
          "input": "a, b (dua angka float atau integer).",
          "process": "Jika `a > b` maka `maks = a`, jika tidak maka `maks = b`.",
          "output": "Nilai maksimum.",
          "algo": [
            "Mulai.",
            "Input angka a dan b.",
            "Cek apakah a > b? Jika ya, maks = a. Jika tidak, maks = b.",
            "Tampilkan nilai maks.",
            "Selesai."
          ],
          "pseudo": "PROGRAM TerbesarDuaAngka\nKAMUS:\n    a, b, maks : float\nALGORITMA:\n    READ(a, b)\n    IF a > b THEN\n        maks = a\n    ELSE\n        maks = b\n    ENDIF\n    WRITE(\"Terbesar adalah:\", maks)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: a, b/]\n    B --> C{\"Apakah a > b?\"}\n    C -- Ya --> D[\"maks = a\"]\n    C -- Tidak --> E[\"maks = b\"]\n    D --> F[/Tampilkan: maks/]\n    E --> F\n    F --> G([SELESAI])",
          "steps": "1. Input variabel a dan b.\n2. Bandingkan a terhadap b.\n3. Isi variabel maks dengan nilai yang unggul.\n4. Tampilkan nilai maks.",
          "python": "# Contoh 6: Maksimum 2 Angka\na = 45\nb = 72\n\nif a > b:\n    maks = a\nelse:\n    maks = b\n\nprint(f\"Bilangan terbesar adalah: {maks}\")",
          "simNormal": "a=45, b=72 ➔ Terbesar: 72",
          "simAlt": "a=90, b=15 ➔ Terbesar: 90"
        },
        {
          "id": "ex-07",
          "no": 7,
          "level": "Menengah",
          "title": "Menentukan Bilangan Terbesar dari Tiga Angka",
          "desc": "Menerima tiga angka masukan (A, B, C) dan menentukan angka yang paling besar di antara ketiganya.",
          "goal": "Memahami percabangan bersarang (*Nested Decision*) atau penggunaan operator logika AND.",
          "input": "A, B, C (tiga angka numerik).",
          "process": "Bandingkan A dengan B dan C, lalu B dengan C.",
          "output": "Angka terbesar.",
          "algo": [
            "Mulai.",
            "Input A, B, C.",
            "Jika A >= B dan A >= C, maka terbesar = A.",
            "Jika tidak, apakah B >= C? Jika ya, terbesar = B. Jika tidak, terbesar = C.",
            "Tampilkan nilai terbesar.",
            "Selesai."
          ],
          "pseudo": "PROGRAM TerbesarTigaAngka\nKAMUS:\n    A, B, C, maks : float\nALGORITMA:\n    READ(A, B, C)\n    IF A >= B AND A >= C THEN\n        maks = A\n    ELIF B >= C THEN\n        maks = B\n    ELSE\n        maks = C\n    ENDIF\n    WRITE(\"Terbesar:\", maks)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> In[/Input: A, B, C/]\n    In --> D1{\"A >= B dan A >= C?\"}\n    D1 -- Ya --> SetA[\"maks = A\"]\n    D1 -- Tidak --> D2{\"B >= C?\"}\n    D2 -- Ya --> SetB[\"maks = B\"]\n    D2 -- Tidak --> SetC[\"maks = C\"]\n    SetA --> Out[/Tampilkan: maks/]\n    SetB --> Out\n    SetC --> Out\n    Out --> End([SELESAI])",
          "steps": "1. Membandingkan A dengan B dan C sekaligus.\n2. Jika gagal, bandingkan kandidat kedua (B) dengan kandidat tersisa (C).\n3. Nilai terbesar disimpan dan dicetak.",
          "python": "# Contoh 7: Terbesar dari 3 Angka\nA = 34\nB = 89\nC = 56\n\nif A >= B and A >= C:\n    maks = A\nelif B >= C:\n    maks = B\nelse:\n    maks = C\n\nprint(f\"Dari {A}, {B}, dan {C}, yang terbesar adalah: {maks}\")",
          "simNormal": "Input: 34, 89, 56 ➔ Terbesar: 89",
          "simAlt": "Input: 100, 10, 50 ➔ Terbesar: 100"
        },
        {
          "id": "ex-08",
          "no": 8,
          "level": "Menengah",
          "title": "Menghitung Diskon Belanja Supermarket",
          "desc": "Supermarket memberikan promo diskon 15% jika total belanja minimal Rp 200.000, jika tidak maka tidak ada diskon.",
          "goal": "Memahami perhitungan persentase dalam proses kondisional.",
          "input": "total_belanja (angka rupiah).",
          "process": "Jika belanja >= 200000, diskon = 0.15 * belanja, selain itu diskon = 0.",
          "output": "Besar diskon dan total yang harus dibayar.",
          "algo": [
            "Mulai.",
            "Input total belanja.",
            "Apakah total belanja >= 200000?",
            "Jika Ya: diskon = 15% * total_belanja.",
            "Jika Tidak: diskon = 0.",
            "total_bayar = total_belanja - diskon.",
            "Tampilkan diskon dan total bayar.",
            "Selesai."
          ],
          "pseudo": "PROGRAM DiskonBelanja\nKAMUS:\n    belanja, diskon, total_bayar : float\nALGORITMA:\n    READ(belanja)\n    IF belanja >= 200000 THEN\n        diskon = 0.15 * belanja\n    ELSE\n        diskon = 0\n    ENDIF\n    total_bayar = belanja - diskon\n    WRITE(diskon, total_bayar)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    Start([MULAI]) --> In[/Input: belanja/]\n    In --> Cond{\"belanja >= 200000?\"}\n    Cond -- Ya --> Disc[\"diskon = 0.15 * belanja\"]\n    Cond -- Tidak --> NoDisc[\"diskon = 0\"]\n    Disc --> Calc[\"total_bayar = belanja - diskon\"]\n    NoDisc --> Calc\n    Calc --> Out[/Tampilkan: diskon, total_bayar/]\n    Out --> Finish([SELESAI])",
          "steps": "1. Evaluasi batas belanja 200.000.\n2. Hitung diskon sesuai persentase promo.\n3. Kurangi total belanja dengan potongan diskon.\n4. Cetak informasi rincian.",
          "python": "# Contoh 8: Diskon Supermarket\nbelanja = 250000\n\nif belanja >= 200000:\n    diskon = 0.15 * belanja\nelse:\n    diskon = 0\n\ntotal_bayar = belanja - diskon\nprint(f\"Belanja: Rp {belanja:,} | Diskon: Rp {int(diskon):,} | Bayar: Rp {int(total_bayar):,}\")",
          "simNormal": "Belanja 250.000 ➔ Diskon: 37.500, Bayar: 212.500",
          "simAlt": "Belanja 150.000 ➔ Diskon: 0, Bayar: 150.000"
        },
        {
          "id": "ex-09",
          "no": 9,
          "level": "Menengah",
          "title": "Menghitung Total Pembayaran Kasir Restoran (Termasuk Pajak & Kembalian)",
          "desc": "Program kasir menghitung subtotal pesanan, menambahkan PPN 11%, menerima uang bayar dari pelanggan, dan menghitung uang kembalian.",
          "goal": "Memahami alur bisnis transaksi keuangan multi-tahap.",
          "input": "subtotal, uang_diterima (angka rupiah).",
          "process": "pajak = 0.11 * subtotal; total_tagihan = subtotal + pajak; kembalian = uang_diterima - total_tagihan.",
          "output": "pajak, total_tagihan, kembalian (atau pesan kurang bayar).",
          "algo": [
            "Mulai.",
            "Input subtotal makanan dan uang yang diserahkan pelanggan.",
            "Hitung pajak = 11% dari subtotal.",
            "Hitung total tagihan = subtotal + pajak.",
            "Hitung kembalian = uang_diterima - total tagihan.",
            "Apakah kembalian >= 0? Jika Ya, tampilkan kembalian. Jika Tidak, tampilkan pesan uang kurang.",
            "Selesai."
          ],
          "pseudo": "PROGRAM KasirRestoran\nKAMUS:\n    subtotal, uang_diterima, pajak, total_tagihan, kembalian : float\nALGORITMA:\n    READ(subtotal, uang_diterima)\n    pajak = 0.11 * subtotal\n    total_tagihan = subtotal + pajak\n    kembalian = uang_diterima - total_tagihan\n    IF kembalian >= 0 THEN\n        WRITE(\"Transaksi Berhasil, Kembalian: Rp\", kembalian)\n    ELSE\n        WRITE(\"Uang Kurang Sebesar: Rp\", ABS(kembalian))\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: subtotal, uang_bayar/]\n    B --> C[\"pajak = 0.11 * subtotal<br>tagihan = subtotal + pajak<br>kembali = uang_bayar - tagihan\"]\n    C --> D{\"kembali >= 0?\"}\n    D -- Ya --> E[/Tampilkan: Transaksi Berhasil, kembali/]\n    D -- Tidak --> F[/Tampilkan: Uang Kurang!/]\n    E --> G([SELESAI])\n    F --> G",
          "steps": "1. Masukkan data subtotal belanja dan nominal uang tunai.\n2. Hitung rumus pajak restoran 11% dan kalkulasi kembalian.\n3. Uji apakah uang bayar mencukupi.\n4. Cetak struk atau peringatan.",
          "python": "# Contoh 9: Kasir Restoran\nsubtotal = 100000\nuang_bayar = 150000\n\npajak = 0.11 * subtotal\ntagihan = subtotal + pajak\nkembali = uang_bayar - tagihan\n\nif kembali >= 0:\n    print(f\"Tagihan: Rp {int(tagihan):,} | Kembali: Rp {int(kembali):,}\")\nelse:\n    print(f\"Uang kurang Rp {int(abs(kembali)):,}\")",
          "simNormal": "Subtotal 100rb, Uang 150rb ➔ Tagihan 111rb, Kembali 39rb",
          "simAlt": "Subtotal 100rb, Uang 100rb ➔ Uang kurang Rp 11.000"
        },
        {
          "id": "ex-10",
          "no": 10,
          "level": "Menengah",
          "title": "Memeriksa Login Sederhana (Username & Password)",
          "desc": "Memeriksa validitas kredensial pengguna yang mencoba masuk ke dalam sistem.",
          "goal": "Memahami logika autentikasi dan operator boolean AND.",
          "input": "input_user, input_pass (string).",
          "process": "Cek apakah `input_user == 'admin'` DAN `input_pass == 'rahasia123'`.",
          "output": "'Login Berhasil' atau 'Username / Password Salah!'.",
          "algo": [
            "Mulai.",
            "Input username dan password.",
            "Apakah username == 'admin' DAN password == 'rahasia123'?",
            "Jika Ya: cetak 'Login Berhasil, Selamat Datang!'.",
            "Jika Tidak: cetak 'Akses Ditolak: Kredensial Salah!'.",
            "Selesai."
          ],
          "pseudo": "PROGRAM LoginSederhana\nKAMUS:\n    u, p : string\nALGORITMA:\n    READ(u, p)\n    IF u == \"admin\" AND p == \"rahasia123\" THEN\n        WRITE(\"Login Berhasil! Akses Diterima.\")\n    ELSE\n        WRITE(\"Gagal: Username atau Password Salah!\")\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: username, password/]\n    B --> C{\"username == 'admin' AND<br>password == 'rahasia123'?\"}\n    C -- Ya --> D[/Tampilkan: Login Berhasil!/]\n    C -- Tidak --> E[/Tampilkan: Kredensial Salah!/]\n    D --> F([SELESAI])\n    E --> F",
          "steps": "1. Membaca string masukan pengguna.\n2. Memvalidasi kedua syarat secara simultan.\n3. Memberikan respons sesuai hasil pengujian.",
          "python": "# Contoh 10: Login Sederhana\nusername = \"admin\"\npassword = \"wrongpassword\"\n\nif username == \"admin\" and password == \"rahasia123\":\n    print(\"✅ Login Berhasil!\")\nelse:\n    print(\"❌ Akses Ditolak: Kredensial Tidak Cocok!\")",
          "simNormal": "Input: admin / rahasia123 ➔ 'Login Berhasil!'",
          "simAlt": "Input: admin / 12345 ➔ 'Akses Ditolak'"
        },
        {
          "id": "ex-11",
          "no": 11,
          "level": "Menengah",
          "title": "Menampilkan Angka 1 Sampai N Menggunakan Perulangan",
          "desc": "Mencetak deret angka bulat mulai dari 1 sampai batas N yang ditentukan pengguna.",
          "goal": "Memahami konsep perulangan counter-controlled (FOR / WHILE) dan increment.",
          "input": "N (bilangan bulat positif).",
          "process": "Inisialisasi `i = 1`. Ulangi cetak `i` dan `i = i + 1` selama `i <= N`.",
          "output": "Deret angka 1, 2, 3, ..., N.",
          "algo": [
            "Mulai.",
            "Input batas N.",
            "Inisialisasi variabel penghitung i = 1.",
            "Apakah i <= N?",
            "Jika Ya: cetak i, naikkan i = i + 1, lalu kembali cek kondisi.",
            "Jika Tidak: keluar dari perulangan.",
            "Selesai."
          ],
          "pseudo": "PROGRAM CetakDeretN\nKAMUS:\n    N, i : integer\nALGORITMA:\n    READ(N)\n    i = 1\n    WHILE i <= N DO\n        WRITE(i)\n        i = i + 1\n    ENDWHILE\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: N/]\n    B --> C[\"Preparation: i = 1\"]\n    C --> D{\"i <= N?\"}\n    D -- Ya --> E[/Tampilkan: i/]\n    E --> F[\"i = i + 1\"]\n    F --> D\n    D -- Tidak --> G([SELESAI])",
          "steps": "1. Input angka batas N.\n2. Inisialisasi i = 1.\n3. Cek batas; jika benar cetak angka dan tambah 1.\n4. Panah loop kembali ke belah ketupat sampai i > N.",
          "python": "# Contoh 11: Cetak Angka 1 sampai N\nN = 5\ni = 1\n\nwhile i <= N:\n    print(f\"Angka: {i}\")\n    i += 1",
          "simNormal": "N = 5 ➔ Mencetak: 1, 2, 3, 4, 5",
          "simAlt": "N = 0 ➔ Tidak mencetak angka apapun langsung selesai."
        },
        {
          "id": "ex-12",
          "no": 12,
          "level": "Lanjutan",
          "title": "Menghitung Nilai Faktorial (n!)",
          "desc": "Menghitung hasil perkalian beruntun faktorial n! = 1 * 2 * 3 * ... * n.",
          "goal": "Memahami konsep akumulator perkalian dalam perulangan.",
          "input": "n (integer non-negatif).",
          "process": "Inisialisasi `faktorial = 1, i = 1`. Selama `i <= n`, `faktorial = faktorial * i`, `i = i + 1`.",
          "output": "Nilai hasil n!.",
          "algo": [
            "Mulai.",
            "Input bilangan n.",
            "Set faktorial = 1 dan pengali i = 1.",
            "Cek apakah i <= n?",
            "Jika Ya: kalikan faktorial = faktorial * i, tambah i = i + 1, lalu ulangi.",
            "Jika Tidak: cetak nilai faktorial.",
            "Selesai."
          ],
          "pseudo": "PROGRAM HitungFaktorial\nKAMUS:\n    n, i : integer; faktorial : integer\nALGORITMA:\n    READ(n)\n    faktorial = 1\n    i = 1\n    WHILE i <= n DO\n        faktorial = faktorial * i\n        i = i + 1\n    ENDWHILE\n    WRITE(\"Hasil Faktorial:\", faktorial)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: n/]\n    B --> C[\"faktorial = 1<br>i = 1\"]\n    C --> D{\"i <= n?\"}\n    D -- Ya --> E[\"faktorial = faktorial * i<br>i = i + 1\"]\n    E --> D\n    D -- Tidak --> F[/Tampilkan: faktorial/]\n    F --> G([SELESAI])",
          "steps": "1. Tetapkan nilai awal faktorial = 1 (elemen identitas perkalian).\n2. Kalikan secara akumulatif setiap langkah loop.\n3. Cetak hasil akhir saat iterasi selesai.",
          "python": "# Contoh 12: Faktorial\nn = 5\nfaktorial = 1\nfor i in range(1, n + 1):\n    faktorial *= i\n\nprint(f\"{n}! = {faktorial}\")",
          "simNormal": "n = 5 ➔ 5! = 120",
          "simAlt": "n = 0 ➔ 0! = 1"
        },
        {
          "id": "ex-13",
          "no": 13,
          "level": "Lanjutan",
          "title": "Menghitung Jumlah Deret Bilangan (1 + 2 + ... + n)",
          "desc": "Menghitung total jumlahan aritmatika dari bilangan 1 sampai n.",
          "goal": "Memahami konsep akumulator penjumlahan dalam struktur loop.",
          "input": "n (integer positif).",
          "process": "total = 0; loop i dari 1 sampai n: total = total + i.",
          "output": "Total jumlahan deret.",
          "algo": [
            "Mulai.",
            "Input nilai n.",
            "Set total = 0 dan i = 1.",
            "Selama i <= n, lakukan: total = total + i, i = i + 1.",
            "Tampilkan total.",
            "Selesai."
          ],
          "pseudo": "PROGRAM JumlahDeret\nKAMUS:\n    n, i, total : integer\nALGORITMA:\n    READ(n)\n    total = 0\n    FOR i = 1 TO n DO\n        total = total + i\n    ENDFOR\n    WRITE(\"Jumlah deret:\", total)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: n/]\n    B --> C[\"total = 0<br>i = 1\"]\n    C --> D{\"i <= n?\"}\n    D -- Ya --> E[\"total = total + i<br>i = i + 1\"]\n    E --> D\n    D -- Tidak --> F[/Tampilkan: total/]\n    F --> G([SELESAI])",
          "steps": "1. Inisialisasi total = 0.\n2. Akumulasi setiap nilai i ke dalam variabel total.\n3. Tampilkan hasil.",
          "python": "# Contoh 13: Jumlah Deret\nn = 10\ntotal = sum(range(1, n + 1))\nprint(f\"Jumlah deret 1 s.d. {n} adalah: {total}\")",
          "simNormal": "n = 10 ➔ Total: 55",
          "simAlt": "n = 100 ➔ Total: 5050"
        },
        {
          "id": "ex-14",
          "no": 14,
          "level": "Lanjutan",
          "title": "Menentukan Kategori Grade Nilai (A, B, C, D, E)",
          "desc": "Mengonversi nilai numerik siswa (0 - 100) menjadi huruf mutu akademik standar universitas.",
          "goal": "Memahami percabangan bertingkat (Cascading IF-ELIF-ELSE) multi-kondisi.",
          "input": "nilai (0 - 100).",
          "process": ">=85 (A), >=70 (B), >=60 (C), >=50 (D), selain itu (E).",
          "output": "Grade huruf dan bobot.",
          "algo": [
            "Mulai.",
            "Input nilai siswa.",
            "Jika nilai >= 85 ➔ A.",
            "Selain itu jika nilai >= 70 ➔ B.",
            "Selain itu jika nilai >= 60 ➔ C.",
            "Selain itu jika nilai >= 50 ➔ D.",
            "Selain itu ➔ E.",
            "Tampilkan Grade dan Selesai."
          ],
          "pseudo": "PROGRAM KonversiGrade\nKAMUS:\n    nilai : float; grade : char\nALGORITMA:\n    READ(nilai)\n    IF nilai >= 85 THEN grade = 'A'\n    ELIF nilai >= 70 THEN grade = 'B'\n    ELIF nilai >= 60 THEN grade = 'C'\n    ELIF nilai >= 50 THEN grade = 'D'\n    ELSE grade = 'E'\n    ENDIF\n    WRITE(\"Grade:\", grade)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: nilai/]\n    B --> C{\"nilai >= 85?\"}\n    C -- Ya --> A1[\"grade = 'A'\"]\n    C -- Tidak --> D{\"nilai >= 70?\"}\n    D -- Ya --> B1[\"grade = 'B'\"]\n    D -- Tidak --> E{\"nilai >= 60?\"}\n    E -- Ya --> C1[\"grade = 'C'\"]\n    E -- Tidak --> F{\"nilai >= 50?\"}\n    F -- Ya --> D1[\"grade = 'D'\"]\n    F -- Tidak --> E1[\"grade = 'E'\"]\n    A1 --> Out[/Tampilkan: grade/]\n    B1 --> Out\n    C1 --> Out\n    D1 --> Out\n    E1 --> Out\n    Out --> Fin([SELESAI])",
          "steps": "1. Pengujian dilakukan berjenjang dari nilai tertinggi ke terendah.\n2. Begitu salah satu kondisi benar, langsung tetapkan grade dan lompat ke output.",
          "python": "# Contoh 14: Konversi Grade\nnilai = 74\n\nif nilai >= 85: grade = 'A'\nelif nilai >= 70: grade = 'B'\nelif nilai >= 60: grade = 'C'\nelif nilai >= 50: grade = 'D'\nelse: grade = 'E'\n\nprint(f\"Nilai: {nilai} ➔ Grade: {grade}\")",
          "simNormal": "Nilai: 74 ➔ Grade: B",
          "simAlt": "Nilai: 42 ➔ Grade: E"
        },
        {
          "id": "ex-15",
          "no": 15,
          "level": "Lanjutan",
          "title": "Simulasi Mesin ATM Sederhana (Cek PIN, Saldo, & Tarik Tunai)",
          "desc": "Simulasi alur transaksi mesin anjungan tunai mandiri: verifikasi PIN, cek kecukupan saldo terhadap nominal penarikan, pemotongan saldo, dan pengeluaran uang fisik.",
          "goal": "Memahami alur bisnis perbankan dengan validasi multi-level.",
          "input": "pin_input, jumlah_tarik.",
          "process": "Cek pin == pin_rahasia. Jika valid, cek saldo >= jumlah_tarik. Jika cukup, kurangi saldo.",
          "output": "Uang tunai keluar atau pesan kegagalan (PIN salah / Saldo tidak cukup).",
          "algo": [
            "Mulai.",
            "Input PIN.",
            "Apakah PIN benar? Jika Tidak: Tampilkan 'PIN Salah' dan Selesai.",
            "Jika Ya: Input nominal penarikan tunai.",
            "Apakah saldo >= nominal_tarik? Jika Tidak: Tampilkan 'Saldo Tidak Cukup'.",
            "Jika Ya: saldo = saldo - nominal_tarik. Keluarkan uang tunai dan cetak sisa saldo.",
            "Selesai."
          ],
          "pseudo": "PROGRAM SimulasiATM\nKAMUS:\n    pin, pin_asli : string; saldo, tarik : integer\nALGORITMA:\n    pin_asli = \"1234\"; saldo = 1000000\n    READ(pin)\n    IF pin != pin_asli THEN\n        WRITE(\"PIN Salah! Transaksi Dibatalkan.\")\n    ELSE\n        READ(tarik)\n        IF saldo < tarik THEN\n            WRITE(\"Saldo Anda Tidak Cukup!\")\n        ELSE\n            saldo = saldo - tarik\n            WRITE(\"Silakan Ambil Uang Anda. Sisa Saldo: Rp\", saldo)\n        ENDIF\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    A([MULAI]) --> B[/Input: pin/]\n    B --> C{\"pin == '1234'?\"}\n    C -- Tidak --> D[/Tampilkan: PIN Salah!/]\n    C -- Ya --> E[/Input: nominal_tarik/]\n    E --> F{\"saldo >= nominal_tarik?\"}\n    F -- Tidak --> G[/Tampilkan: Saldo Tidak Cukup!/]\n    F -- Ya --> H[\"saldo = saldo - nominal_tarik\"]\n    H --> I[/Keluarkan Uang Tunai & Cetak Resi/]\n    D --> Fin([SELESAI])\n    G --> Fin\n    I --> Fin",
          "steps": "1. Verifikasi pintu gerbang keamanan pertama (PIN).\n2. Validasi pintu gerbang kedua (Ketersediaan dana).\n3. Mutasi saldo dan dispensasi uang fisik.",
          "python": "# Contoh 15: Simulasi ATM\nsaldo = 1000000\npin_terdaftar = \"1234\"\n\npin_masuk = \"1234\"\nif pin_masuk == pin_terdaftar:\n    tarik = 300000\n    if saldo >= tarik:\n        saldo -= tarik\n        print(f\"💵 Tarik tunai Rp {tarik:,} berhasil. Sisa saldo: Rp {saldo:,}\")\n    else:\n        print(\"❌ Saldo tidak cukup!\")\nelse:\n    print(\"❌ PIN Salah!\")",
          "simNormal": "PIN '1234', Tarik 300rb ➔ Sukses, Saldo sisa 700rb",
          "simAlt": "PIN '1234', Tarik 1.5jt ➔ Gagal: Saldo tidak cukup"
        },
        {
          "id": "ex-16",
          "no": 16,
          "level": "Lanjutan",
          "title": "Proses Peminjaman Buku Perpustakaan Digital",
          "desc": "Siswa meminjam buku di perpustakaan sekolah. Sistem memeriksa apakah kartu aktif, buku tersedia, dan apakah siswa masih memiliki tunggakan denda buku lama.",
          "goal": "Memahami diagram alur bisnis administrasi terintegrasi.",
          "input": "id_anggota, id_buku.",
          "process": "Validasi status keanggotaan ➔ Cek denda tertunggak ➔ Cek stok buku di database ➔ Buat tiket peminjaman.",
          "output": "Buku berhasil dipinjam (cetak tanggal kembali) atau penolakan dengan alasan.",
          "algo": [
            "Mulai.",
            "Input data anggota dan buku.",
            "Apakah kartu anggota masih aktif? Jika Tidak, tolak.",
            "Apakah anggota memiliki denda buku lama? Jika Ya, tolak dan minta lunasi denda.",
            "Apakah stok buku tersedia di rak? Jika Tidak, tolak dan tawarkan reservasi.",
            "Catat transaksi peminjaman di database, kurangi stok, dan cetak bukti peminjaman.",
            "Selesai."
          ],
          "pseudo": "PROGRAM PinjamBuku\nALGORITMA:\n    READ(id_anggota, id_buku)\n    IF status_anggota != \"AKTIF\" THEN\n        WRITE(\"Kartu Tidak Aktif\")\n    ELIF denda_tertunggak > 0 THEN\n        WRITE(\"Harap Lunasi Denda Buku Sebelumnya\")\n    ELIF stok_buku < 1 THEN\n        WRITE(\"Buku Sedang Kosong\")\n    ELSE\n        stok_buku = stok_buku - 1\n        tgl_kembali = TODAY + 7\n        WRITE(\"Peminjaman Berhasil. Tanggal Kembali:\", tgl_kembali)\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    S([MULAI]) --> In[/Input: id_siswa, id_buku/]\n    In --> C1{\"Kartu Aktif?\"}\n    C1 -- Tidak --> R1[/Tolak: Kartu Non-Aktif/]\n    C1 -- Ya --> C2{\"Ada Tunggakan Denda?\"}\n    C2 -- Ya --> R2[/Tolak: Harap Lunasi Denda/]\n    C2 -- Tidak --> C3{\"Stok Buku > 0?\"}\n    C3 -- Tidak --> R3[/Tolak: Buku Sedang Dipinjam/]\n    C3 -- Ya --> OK[\"Update Database: Kurangi Stok<br>Set Batas Kembali 7 Hari\"]\n    OK --> Pr[/Cetak Bukti Peminjaman/]\n    R1 --> E([SELESAI])\n    R2 --> E\n    R3 --> E\n    Pr --> E",
          "steps": "1. Pemeriksaan bertahap memastikan integritas operasional perpustakaan.",
          "python": "# Contoh 16: Peminjaman Buku\nkartu_aktif = True\ndenda = 0\nstok = 2\n\nif not kartu_aktif:\n    print(\"❌ Kartu non-aktif\")\nelif denda > 0:\n    print(f\"❌ Lunasi denda Rp {denda:,}\")\nelif stok <= 0:\n    print(\"❌ Stok buku habis\")\nelse:\n    stok -= 1\n    print(\"✅ Peminjaman berhasil! Batas kembali: 7 hari dari sekarang.\")",
          "simNormal": "Kartu aktif, denda 0, stok 2 ➔ Peminjaman Berhasil",
          "simAlt": "Kartu aktif, denda 5000 ➔ Ditolak karena denda"
        },
        {
          "id": "ex-17",
          "no": 17,
          "level": "Lanjutan",
          "title": "Proses Registrasi Akun Pengguna Digital (Validasi Password Kuat)",
          "desc": "Alur pendaftaran akun pengguna baru dengan verifikasi kelayakan kata sandi (minimal 8 karakter dan mengandung angka).",
          "goal": "Memahami alur verifikasi data masukan pengguna pada sistem web/mobile modern.",
          "input": "email, password, konfirmasi_password.",
          "process": "Cek format email ➔ Cek panjang password >= 8 ➔ Cek password == konfirmasi_password ➔ Cek email belum terdaftar di database.",
          "output": "Pesan 'Registrasi Berhasil! Cek Email Aktivasi' atau pesan kesalahan spesifik.",
          "algo": [
            "Mulai.",
            "Input email, password, dan konfirmasi password.",
            "Jika panjang password < 8, tolak 'Password Terlalu Pendek'.",
            "Jika password != konfirmasi, tolak 'Konfirmasi Password Tidak Cocok'.",
            "Cek database: apakah email sudah pernah terdaftar? Jika Ya, tolak 'Email Sudah Dipakai'.",
            "Simpan akun baru di database dan kirim email aktivasi.",
            "Selesai."
          ],
          "pseudo": "PROGRAM RegistrasiAkun\nALGORITMA:\n    READ(email, pass, konfirm)\n    IF LENGTH(pass) < 8 THEN\n        WRITE(\"Gagal: Password Minimal 8 Karakter\")\n    ELIF pass != konfirm THEN\n        WRITE(\"Gagal: Konfirmasi Password Berbeda\")\n    ELIF CekEmailTerdaftar(email) == TRUE THEN\n        WRITE(\"Gagal: Email Sudah Terdaftar\")\n    ELSE\n        SimpanUserDatabase(email, Hash(pass))\n        WRITE(\"Registrasi Berhasil! Silakan Cek Email.\")\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    S([MULAI]) --> In[/Input: email, pass, konfirm/]\n    In --> C1{\"Panjang pass >= 8?\"}\n    C1 -- Tidak --> E1[/Error: Password Terlalu Pendek/]\n    C1 -- Ya --> C2{\"pass == konfirm?\"}\n    C2 -- Tidak --> E2[/Error: Password Tidak Cocok/]\n    C2 -- Ya --> C3{\"Email Sudah Terdaftar?\"}\n    C3 -- Ya --> E3[/Error: Email Sudah Ada/]\n    C3 -- Tidak --> Save[\"Simpan ke Database<br>Kirim Email OTP\"]\n    Save --> Out[/Sukses: Akun Dibuat!/]\n    E1 --> Fin([SELESAI])\n    E2 --> Fin\n    E3 --> Fin\n    Out --> Fin",
          "steps": "1. Sanitasi dan validasi data client-side.\n2. Verifikasi kesesuaian sandi.\n3. Pengecekan duplikasi pada basis data.",
          "python": "# Contoh 17: Registrasi Akun\nemail = \"budi@sekolah.id\"\npassword = \"Password123\"\nkonfirmasi = \"Password123\"\ndb_emails = [\"ani@sekolah.id\", \"citra@sekolah.id\"]\n\nif len(password) < 8:\n    print(\"❌ Password minimal 8 karakter!\")\nelif password != konfirmasi:\n    print(\"❌ Konfirmasi password tidak cocok!\")\nelif email in db_emails:\n    print(\"❌ Email sudah terdaftar!\")\nelse:\n    db_emails.append(email)\n    print(f\"✅ Registrasi sukses untuk {email}!\")",
          "simNormal": "Data valid ➔ Registrasi sukses",
          "simAlt": "Password 5 huruf ➔ Ditolak karena < 8 karakter"
        },
        {
          "id": "ex-18",
          "no": 18,
          "level": "Lanjutan",
          "title": "Pengolahan Data Nilai Mahasiswa & Perhitungan IPK Semester",
          "desc": "Menghitung Indeks Prestasi Semester (IPS/IPK) mahasiswa berdasarkan sejumlah mata kuliah dengan bobot SKS berbeda.",
          "goal": "Memahami pengolahan data array/list menggunakan perulangan akumulatif multi-variabel.",
          "input": "Daftar mata kuliah (nilai_huruf, sks).",
          "process": "Konversi nilai huruf ke angka bobot (A=4, B=3, C=2, D=1, E=0). Akumulasi `total_mutu += bobot * sks` dan `total_sks += sks`. Hitung `IPK = total_mutu / total_sks`.",
          "output": "Total SKS, Total Mutu, dan Nilai IPK.",
          "algo": [
            "Mulai.",
            "Inisialisasi total_mutu = 0, total_sks = 0.",
            "Untuk setiap mata kuliah: Masukkan nilai huruf dan SKS.",
            "Konversi huruf ke bobot numerik.",
            "total_mutu += bobot * SKS, total_sks += SKS.",
            "IPK = total_mutu / total_sks.",
            "Tampilkan IPK.",
            "Selesai."
          ],
          "pseudo": "PROGRAM HitungIPK\nKAMUS:\n    total_mutu, total_sks, IPK : float\nALGORITMA:\n    total_mutu = 0; total_sks = 0\n    FOR EACH matkul IN daftar_matkul DO\n        bobot = KonversiBobot(matkul.nilai)\n        total_mutu = total_mutu + (bobot * matkul.sks)\n        total_sks = total_sks + matkul.sks\n    ENDFOR\n    IPK = total_mutu / total_sks\n    WRITE(\"IPK Semester Anda:\", IPK)\nENDPROGRAM",
          "mermaid": "flowchart TD\n    S([MULAI]) --> Init[\"total_mutu = 0<br>total_sks = 0<br>i = 1\"]\n    Init --> Check{\"Masih ada mata kuliah?\"}\n    Check -- Ya --> Read[/Input: nilai_huruf, sks/]\n    Read --> Calc[\"bobot = CekBobot(nilai_huruf)<br>total_mutu += bobot * sks<br>total_sks += sks\"]\n    Calc --> Check\n    Check -- Tidak --> FinCalc[\"IPK = total_mutu / total_sks\"]\n    FinCalc --> Out[/Tampilkan: Total SKS, IPK/]\n    Out --> E([SELESAI])",
          "steps": "1. Akumulasi bobot kali sks untuk setiap mata kuliah.\n2. Pembagian akhir untuk memperoleh rasio mutu.",
          "python": "# Contoh 18: Perhitungan IPK\nmatkul = [\n    {\"nama\": \"Algoritma\", \"huruf\": \"A\", \"sks\": 3},  # Bobot 4\n    {\"nama\": \"Matematika\", \"huruf\": \"B\", \"sks\": 3}, # Bobot 3\n    {\"nama\": \"Basis Data\", \"huruf\": \"A\", \"sks\": 4}  # Bobot 4\n]\n\nbobot_map = {\"A\": 4.0, \"B\": 3.0, \"C\": 2.0, \"D\": 1.0, \"E\": 0.0}\ntotal_mutu = sum(bobot_map[m[\"huruf\"]] * m[\"sks\"] for m in matkul)\ntotal_sks = sum(m[\"sks\"] for m in matkul)\nipk = total_mutu / total_sks\n\nprint(f\"Total SKS: {total_sks} | Total Mutu: {total_mutu} | IPK: {ipk:.2f}\")",
          "simNormal": "Mata kuliah di atas ➔ IPK: 3.70",
          "simAlt": "Semua mata kuliah bernilai A ➔ IPK: 4.00"
        },
        {
          "id": "ex-19",
          "no": 19,
          "level": "Lanjutan",
          "title": "Alur Sistem Pengaduan Aspirasi Layanan Publik / Sekolah",
          "desc": "Alur penanganan tiket laporan pengaduan dari siswa/warga: pelaporan ➔ verifikasi admin ➔ disposisi ke divisi terkait ➔ tindak lanjut ➔ penutupan tiket.",
          "goal": "Memahami alur proses workflow (SOP digital) dengan banyak tahapan status.",
          "input": "tiket_laporan (kategori, deskripsi, lampiran).",
          "process": "Verifikasi validitas ➔ Disposisi departemen ➔ Investigasi ➔ Penyelesaian.",
          "output": "Notifikasi berkala status tiket (Diajukan ➔ Diproses ➔ Selesai).",
          "algo": [
            "Mulai.",
            "Warga mengirim laporan pengaduan via aplikasi.",
            "Admin memvalidasi: Apakah bukti laporan valid dan tidak mengandung hoax?",
            "Jika Tidak: Tolak pengaduan dengan alasan.",
            "Jika Ya: Terbitkan No Tiket dan teruskan ke dinas/divisi terkait.",
            "Petugas lapangan melakukan penanganan fisik.",
            "Unggah bukti penyelesaian dan ubah status menjadi SELESAI.",
            "Sistem mengirim survei kepuasan ke warga.",
            "Selesai."
          ],
          "pseudo": "PROGRAM SistemPengaduan\nALGORITMA:\n    SUBMIT(laporan)\n    IF Validasi(laporan) == FALSE THEN\n        UPDATE_STATUS(laporan, \"DITOLAK\")\n    ELSE\n        UPDATE_STATUS(laporan, \"DIVERIFIKASI\")\n        DISPOSISI(laporan, dinas_tujuan)\n        EXECUTE_PERBAIKAN()\n        UPDATE_STATUS(laporan, \"SELESAI\")\n        NOTIFIKASI_WARGA(\"Laporan Telah Diselesaikan\")\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    S([MULAI]) --> Sub[/Warga Input Laporan Pengaduan/]\n    Sub --> V{\"Verifikasi Bukti Valid?\"}\n    V -- Tidak --> R[/Status: DITOLAK (Beri Alasan)/]\n    V -- Ya --> T[Terbitkan No Tiket]\n    T --> D[Disposisi ke Divisi Terkait]\n    D --> Fix[Petugas Menindaklanjuti Lapangan]\n    Fix --> Done[Upload Foto Bukti Perbaikan]\n    Done --> Notif[/Status: SELESAI & Kirim Notif/]\n    R --> E([SELESAI])\n    Notif --> E",
          "steps": "1. Alur administrasi memastikan akuntabilitas pelayanan publik secara transparan.",
          "python": "# Contoh 19: Pengaduan Layanan\ntiket = {\"id\": \"ADU-101\", \"judul\": \"AC Lab Rusak\", \"valid\": True}\n\nif not tiket[\"valid\"]:\n    tiket[\"status\"] = \"Ditolak\"\nelse:\n    tiket[\"status\"] = \"Dalam Pengerjaan\"\n    # Simulasi selesai dikerjakan teknisi\n    tiket[\"status\"] = \"Selesai\"\n\nprint(f\"Tiket: {tiket['id']} | Judul: {tiket['judul']} | Status Akhir: {tiket['status']}\")",
          "simNormal": "Laporan valid ➔ Tiket terselesaikan",
          "simAlt": "Laporan fiktif ➔ Tiket ditolak"
        },
        {
          "id": "ex-20",
          "no": 20,
          "level": "Lanjutan",
          "title": "Proses Bisnis Pemesanan Produk E-Commerce (Checkout hingga Pengiriman)",
          "desc": "Alur transaksi menyeluruh pada toko online: cek keranjang belanja, pemilihan kurir logistik, pembayaran ke payment gateway, pemotongan stok gudang, dan penyerahan paket ke kurir.",
          "goal": "Memahami arsitektur proses bisnis industri komersial skala enterprise.",
          "input": "keranjang_belanja, metode_pembayaran, alamat_kirim.",
          "process": "Reservasi stok ➔ Integrasi payment gateway ➔ Cek status lunas ➔ Cetak resi gudang ➔ Serah terima kurir.",
          "output": "Pesanan terkirim dengan nomor resi pelacakan ekspedisi.",
          "algo": [
            "Mulai.",
            "Pembeli melakukan checkout keranjang belanja.",
            "Sistem mengunci (*reserve*) stok barang di gudang.",
            "Pembeli diberi waktu 24 jam untuk transfer pembayaran.",
            "Apakah pembayaran terkonfirmasi lunas?",
            "Jika Tidak: Batalkan pesanan, kembalikan stok barang ke etalase, Selesai.",
            "Jika Ya: Notifikasi penjual untuk kemas barang, cetak label resi ekspedisi, dan serahkan ke kurir pengiriman.",
            "Selesai."
          ],
          "pseudo": "PROGRAM ECommerceCheckout\nALGORITMA:\n    CHECKOUT(cart)\n    LOCK_STOCK(cart.items)\n    GENERATE_PAYMENT_INVOICE()\n    WAIT_PAYMENT(timeout = 24_HOURS)\n    IF PaymentStatus == \"LUNAS\" THEN\n        PACKING_ORDER()\n        DISPATCH_TO_COURIER()\n        SEND_TRACKING_NUMBER()\n    ELSE\n        RELEASE_STOCK(cart.items)\n        UPDATE_STATUS(\"BATAL\")\n    ENDIF\nENDPROGRAM",
          "mermaid": "flowchart TD\n    S([MULAI]) --> In[/User Klik Checkout/]\n    In --> Lock[Kunci Stok Barang di Gudang]\n    Lock --> Pay{\"Pembayaran Lunas dalam 24 Jam?\"}\n    Pay -- Tidak --> Exp[Kembalikan Stok ke Etalase]\n    Exp --> Cancel[/Status: Pesanan Dibatalkan/]\n    Pay -- Ya --> Pack[Gudang Mengemas Barang]\n    Pack --> Resi[Cetak Label & No Resi Ekspedisi]\n    Resi --> Ship[/Status: Paket Sedang Dikirim/]\n    Cancel --> E([SELESAI])\n    Ship --> E",
          "steps": "1. Menjaga konsistensi inventori gudang (*inventory lock*).\n2. Memverifikasi konfirmasi pembayaran otomatis.\n3. Integrasi logistik ekspedisi.",
          "python": "# Contoh 20: Alur E-Commerce\nstok_barang = 5\npembayaran_sukses = True\n\nif stok_barang > 0:\n    stok_barang -= 1  # Kunci stok\n    if pembayaran_sukses:\n        resi = \"JNE-99887766\"\n        status = f\"Paket Dikemas & Dikirim. Resi: {resi}\"\n    else:\n        stok_barang += 1  # Rollback\n        status = \"Pembayaran Kadaluarsa, Pesanan Batal\"\nelse:\n    status = \"Gagal: Stok Habis\"\n\nprint(status)",
          "simNormal": "Pembayaran lunas ➔ Paket dikirim dengan nomor resi pelacakan",
          "simAlt": "Pembayaran timeout 24 jam ➔ Stok dikembalikan otomatis"
        }
      ]
    },
    {
      "id": "bab8",
      "num": "BAB VIII",
      "title": "Tools Pembuatan Flowchart",
      "subtitle": "Panduan Aplikasi Web, Desktop, Office Suite, dan Text-to-Diagram (Mermaid.js)",
      "learningGoals": [
        "Mengenal 4 kategori alat bantu pembuatan flowchart modern.",
        "Memilih software yang paling tepat sesuai kebutuhan proyek, anggaran, dan kolaborasi tim.",
        "Menguasai sintaks teks Mermaid.js untuk membuat diagram alir instan tanpa drag-and-drop.",
        "Memahami kelebihan dan batasan dari masing-masing alat."
      ],
      "sections": [
        {
          "id": "8-1-kategori-tools",
          "title": "8.1 Empat Kategori Perangkat Lunak Flowchart",
          "content": "<p>Dalam era digital modern, pembuatan flowchart tidak lagi menggunakan penggaris dan pensil di atas kertas kalkir. Terdapat empat kategori utama software yang dapat Anda gunakan:</p>\n                \n                <div class=\"grid-2-col\">\n                    <div class=\"tool-category-card\">\n                        <span class=\"badge badge-blue\">Kategori 1</span>\n                        <h4>🌐 Editor Berbasis Web (Cloud-Based)</h4>\n                        <p>Dijalankan langsung di peramban (browser) tanpa instalasi. Sangat unggul untuk kolaborasi tim secara real-time.</p>\n                        <ul>\n                            <li><strong>Draw.io (diagrams.net):</strong> 100% Gratis, open-source, terintegrasi dengan Google Drive, OneDrive, GitHub. URL: <a href=\"https://app.diagrams.net\" target=\"_blank\" rel=\"noopener\">app.diagrams.net</a></li>\n                            <li><strong>Lucidchart:</strong> Standar industri enterprise, template sangat melimpah, integrasi Atlassian Jira & Confluence. URL: <a href=\"https://www.lucidchart.com\" target=\"_blank\" rel=\"noopener\">lucidchart.com</a></li>\n                            <li><strong>Miro:</strong> Kanvas kolaborasi visual tak terbatas (*infinite canvas*) untuk brainstorming tim. URL: <a href=\"https://miro.com\" target=\"_blank\" rel=\"noopener\">miro.com</a></li>\n                        </ul>\n                    </div>\n\n                    <div class=\"tool-category-card\">\n                        <span class=\"badge badge-purple\">Kategori 2</span>\n                        <h4>💻 Aplikasi Desktop (Offline Native)</h4>\n                        <p>Diinstal langsung di sistem operasi (Windows/macOS/Linux). Bekerja cepat tanpa memerlukan koneksi internet.</p>\n                        <ul>\n                            <li><strong>Microsoft Visio:</strong> Standar de-facto korporat dengan ribuan stensil resmi standar ANSI, ISO, UML, dan BPMN. URL: <a href=\"https://www.microsoft.com/en-us/microsoft-365/visio\" target=\"_blank\" rel=\"noopener\">microsoft.com/visio</a></li>\n                            <li><strong>EdrawMax:</strong> Perangkat lunak serbaguna kaya fitur grafis dengan ekspor ke berbagai format vektor. URL: <a href=\"https://www.edrawsoft.com/edraw-max/\" target=\"_blank\" rel=\"noopener\">edrawsoft.com/edraw-max</a></li>\n                            <li><strong>Dia Diagram Editor:</strong> Software open-source legendaris yang sangat ringan untuk Linux dan Windows. URL: <a href=\"http://dia-installer.de/\" target=\"_blank\" rel=\"noopener\">dia-installer.de</a></li>\n                        </ul>\n                    </div>\n\n                    <div class=\"tool-category-card\">\n                        <span class=\"badge badge-amber\">Kategori 3</span>\n                        <h4>📑 Fitur Diagram pada Aplikasi Perkantoran</h4>\n                        <p>Menggunakan fitur bawaan pengolah kata dan presentasi untuk dokumen laporan formal.</p>\n                        <ul>\n                            <li><strong>Microsoft Word & PowerPoint:</strong> Menu <code>Insert ➔ Shapes ➔ Flowchart</code> atau menggunakan fitur <code>SmartArt</code>. Sangat praktis untuk makalah tugas sekolah tanpa software tambahan.</li>\n                            <li><strong>Google Docs & Slides:</strong> Menu <code>Sisipkan ➔ Gambar ➔ Baru</code>. Memungkinkan pengeditan langsung bersama rekan kelompok di Google Workspace.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"tool-category-card\">\n                        <span class=\"badge badge-green\">Kategori 4</span>\n                        <h4>⚡ Text-to-Diagram Tools (Diagram as Code)</h4>\n                        <p>Membuat diagram menggunakan baris sintaks teks sederhana yang otomatis dirender menjadi diagram grafis.</p>\n                        <ul>\n                            <li><strong>Mermaid.js:</strong> Sintaks berbasis teks yang didukung secara *native* oleh GitHub, GitLab, Notion, dan Jupyter Notebook. URL: <a href=\"https://mermaid.js.org/\" target=\"_blank\" rel=\"noopener\">mermaid.js.org</a></li>\n                            <li><strong>PlantUML:</strong> Tool berbasis bahasa pemodelan Java untuk menghasilkan diagram teknis profesional. URL: <a href=\"https://plantuml.com/\" target=\"_blank\" rel=\"noopener\">plantuml.com</a></li>\n                        </ul>\n                    </div>\n                </div>"
        },
        {
          "id": "8-2-tutorial-drawio",
          "title": "8.2 Langkah Praktis Membuat Flowchart di Draw.io (Gratis)",
          "content": "<div class=\"step-guide\">\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">1</div>\n                        <div class=\"step-body\">\n                            <h4>Buka Browser</h4>\n                            <p>Kunjungi <a href=\"https://app.diagrams.net\" target=\"_blank\" rel=\"noopener\">app.diagrams.net</a>, lalu pilih opsi penyimpanan <em>Decide Later</em> atau sambungkan ke <em>Google Drive</em>.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">2</div>\n                        <div class=\"step-body\">\n                            <h4>Pilih Stensil 'General' & 'Flowchart'</h4>\n                            <p>Pada panel kiri, buka grup <strong>Flowchart</strong>. Tarik (*drag-and-drop*) simbol <strong>Start/End (Oval)</strong> ke kanvas tengah.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">3</div>\n                        <div class=\"step-body\">\n                            <h4>Mengetik Teks & Menghubungkan Panah</h4>\n                            <p>Klik ganda (*double-click*) pada simbol untuk menulis teks. Arahkan kursor ke panah kecil biru di tepi simbol, lalu klik dan tarik menuju simbol berikutnya untuk membuat garis otomatis.</p>\n                        </div>\n                    </div>\n                    <div class=\"step-item\">\n                        <div class=\"step-circle\">4</div>\n                        <div class=\"step-body\">\n                            <h4>Ekspor Diagram</h4>\n                            <p>Pilih menu <code>File ➔ Export as ➔ PNG / PDF / SVG</code> untuk menyimpan diagram ke komputermu dengan resolusi tajam!</p>\n                        </div>\n                    </div>\n                </div>"
        },
        {
          "id": "8-3-panduan-mermaid",
          "title": "8.3 Kekuatan Mermaid.js: Menggambar Diagram Lewat Baris Kode",
          "content": "<p><strong>Mermaid.js</strong> adalah teknologi revolusioner yang memungkinkan developer menulis diagram alir semudah mengetik Markdown. Keunggulan utamanya: <em>Version control friendly</em> (bisa di-track perubahannya lewat Git commit tanpa binary file).</p>\n                \n                <h4>Contoh Kode Mermaid Sederhana:</h4>\n                <div class=\"code-wrapper\">\n                    <pre><code class=\"language-markdown\">flowchart TD\n    A([Mulai]) --> B[/Input: Angka/]\n    B --> C{Angka > 0?}\n    C -- Ya --> D[/Tampilkan: Positif/]\n    C -- Tidak --> E[/Tampilkan: Nol atau Negatif/]\n    D --> F([Selesai])\n    E --> F</code></pre>\n                </div>\n                \n                <h4>Keterbatasan Mermaid.js:</h4>\n                <ul>\n                    <li>Tata letak node ditentukan secara otomatis oleh algoritma render grafis (Dagre layout engine), sehingga pengguna tidak bisa menggeser posisi kotak secara bebas dengan mouse piksel-demi-piksel.</li>\n                    <li>Untuk percabangan yang sangat rumit dengan ratusan cabang, garis koneksi terkadang membentuk lintasan yang melingkar jauh.</li>\n                </ul>"
        }
      ]
    },
    {
      "id": "bab9",
      "num": "BAB IX",
      "title": "Kesalahan Umum dan Debugging Flowchart",
      "subtitle": "10 Kesalahan Fatal Pembawa Petaka, Analisis Diagram Cacat, dan Metode Trace Table",
      "learningGoals": [
        "Mengidentifikasi 10 kesalahan umum yang sering merusak validitas flowchart.",
        "Menganalisis contoh diagram cacat logika vs perbaikan solusinya secara side-by-side.",
        "Menguasai teknik pelacakan kesalahan (Debugging) berbasis Uji Meja (*Dry Run Trace Table*).",
        "Membangun kebiasaan *defensive modeling* dalam merancang perangkat lunak."
      ],
      "mistakes": [
        {
          "no": 1,
          "title": "Simbol Tidak Sesuai Fungsi (Shape-Function Mismatch)",
          "bad": "Menggunakan simbol Persegi Panjang untuk membaca masukan pengguna (Input) atau Terminator awal/akhir.",
          "why": "Bentuk simbol membawa makna semantik formal. Memakai bentuk salah membingungkan programmer yang akan mengimplementasikannya.",
          "fix": "Gunakan Jajar Genjang untuk I/O, Oval untuk Terminator, dan Persegi Panjang murni untuk kalkulasi/proses data internal."
        },
        {
          "no": 2,
          "title": "Tidak Ada Titik Akhir yang Jelas (Dangling Diagram / Endless End)",
          "bad": "Alur diagram dibiarkan menggantung begitu saja setelah proses selesai tanpa dihubungkan ke simbol Terminator Selesai.",
          "why": "Algoritma wajib memiliki sifat <em>Finiteness</em> (pasti berakhir). Tanpa titik akhir, alur logika dianggap tidak lengkap (*incomplete specification*).",
          "fix": "Seluruh jalur percabangan wajib bermuara ke simbol Terminator Selesai."
        },
        {
          "no": 3,
          "title": "Panah Tanpa Mata Panah atau Menunjuk Terbalik",
          "bad": "Menghubungkan dua kotak dengan garis lurus polos tanpa panah, atau panah menunjuk ke arah berlawanan.",
          "why": "Komputer mengeksekusi instruksi secara terarah. Garis tanpa panah menghilangkan informasi urutan kronologis waktu eksekusi.",
          "fix": "Pastikan setiap garis alir memiliki mata panah tegas di ujung tujuannya."
        },
        {
          "no": 4,
          "title": "Cabang Keputusan (Decision) Tanpa Label",
          "bad": "Simbol Belah Ketupat memiliki dua garis panah keluar, namun tidak ada tulisan 'Ya' dan 'Tidak'.",
          "why": "Programmer tidak akan tahu jalur mana yang harus dieksekusi saat kondisi bernilai True atau False.",
          "fix": "Selalu beri label teks eksplisit (Ya / Tidak, True / False, >=75 / <75) tepat di samping setiap garis keluar."
        },
        {
          "no": 5,
          "title": "Jalur Tak Pernah Mencapai Akhir (Dead End Path)",
          "bad": "Salah satu cabang percabangan berhenti di tengah jalan tanpa menyambung ke langkah selanjutnya.",
          "why": "Program akan terhenti (hang/freeze) jika pengguna masuk ke skenario cabang tersebut.",
          "fix": "Hubungkan seluruh ujung cabang kembali ke jalur utama atau ke Terminator Selesai."
        },
        {
          "no": 6,
          "title": "Perulangan Tanpa Kondisi Berhenti (Infinite Loop Trap)",
          "bad": "Alur looping berputar kembali ke atas, tetapi tidak ada variabel yang bertambah (counter) atau tidak ada kondisi batas.",
          "why": "Menyebabkan memori komputer penuh (*stack overflow*), browser macet, atau CPU 100%.",
          "fix": "Wajib sertakan langkah penambahan nilai pencacah (misal: <code>i = i + 1</code>) di dalam badan perulangan."
        },
        {
          "no": 7,
          "title": "Variabel Digunakan Sebelum Diberi Nilai (Undefined Variable)",
          "bad": "Melakukan proses <code>total = total + harga</code> padahal variabel <code>total</code> belum pernah dideklarasikan atau bernilai nol.",
          "why": "Menghasilkan galat logika *NullPointerException* atau *UnboundLocalError* saat dijalankan di Python.",
          "fix": "Gunakan simbol Preparation (Hexagon) atau Proses di awal untuk menginisialisasi <code>total = 0</code>."
        },
        {
          "no": 8,
          "title": "Output Tidak Selaras dengan Input (Phantom Data)",
          "bad": "Meminta input variabel <code>panjang</code> dan <code>lebar</code>, namun di akhir mencetak variabel <code>keliling_lingkaran</code>.",
          "why": "Menunjukkan cacat fatal konsistensi nama variabel di sepanjang alur program.",
          "fix": "Lakukan audit keselarasan nama variabel dari awal sampai akhir diagram."
        },
        {
          "no": 9,
          "title": "Kondisi Percabangan Saling Bertentangan atau Tumpang Tindih",
          "bad": "Membuat cabang: <code>nilai >= 70</code> dan cabang sebelahnya <code>nilai >= 60</code> tanpa urutan hirarki yang tepat.",
          "why": "Nilai 85 akan cocok dengan kedua kondisi sekaligus sehingga memicu kebingungan jalur eksekusi.",
          "fix": "Gunakan aturan rentang yang saling lepas (*mutually exclusive*) secara menurun dari kondisi paling ketat."
        },
        {
          "no": 10,
          "title": "Kasus Ekstrem & Galat Tidak Ditangani (No Error Handling)",
          "bad": "Program pembagian dua angka tidak mengecek apakah angka pembagi bernilai nol (<code>pembagi == 0</code>).",
          "why": "Aplikasi akan langsung *crash* dengan pesan galat <code>ZeroDivisionError</code> saat pengguna memasukkan angka 0.",
          "fix": "Pasang simbol Decision pengaman: <em>Apakah pembagi == 0?</em> Jika ya, tampilkan pesan peringatan dan tolak perhitungan."
        }
      ]
    },
    {
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
      "pgQuestions": [
        {
          "id": 1,
          "q": "Simbol bangun datar apakah yang digunakan untuk menandai titik Mulai (Start) dan Selesai (End) pada flowchart?",
          "options": [
            "Persegi Panjang",
            "Oval / Kapsul",
            "Belah Ketupat",
            "Jajar Genjang"
          ],
          "ans": 1,
          "exp": "Simbol Oval / Kapsul disebut Terminator, berfungsi sebagai penanda awal dan akhir alur program."
        },
        {
          "id": 2,
          "q": "Manakah simbol yang wajib digunakan saat program melakukan perhitungan rumus matematika (misal: luas = p * l)?",
          "options": [
            "Jajar Genjang (Input/Output)",
            "Belah Ketupat (Decision)",
            "Persegi Panjang (Process)",
            "Lingkaran (Connector)"
          ],
          "ans": 2,
          "exp": "Persegi Panjang melambangkan Process, yaitu instruksi kalkulasi matematika atau penugasan variabel."
        },
        {
          "id": 3,
          "q": "Sebuah simbol Belah Ketupat (Decision) wajib memiliki minimal berapa garis panah keluar?",
          "options": [
            "1 cabang",
            "2 cabang",
            "3 cabang",
            "Bebas berapapun"
          ],
          "ans": 1,
          "exp": "Simbol Decision menguji kondisi logika (True/False), sehingga wajib memiliki minimal 2 cabang alur keluar yang berlabel."
        },
        {
          "id": 4,
          "q": "Simbol apakah yang digunakan untuk memutus garis alir yang terlalu panjang pada lembar halaman YANG SAMA?",
          "options": [
            "Off-Page Connector (Segilima)",
            "On-Page Connector (Lingkaran Kecil)",
            "Terminator (Oval)",
            "Predefined Process"
          ],
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
          "options": [
            "Syntax Error",
            "Infinite Loop (Perulangan Tanpa Henti)",
            "Memori otomatis kosong",
            "Hasil perhitungan selalu nol"
          ],
          "ans": 1,
          "exp": "Tanpa penambahan nilai penghitung, kondisi berhenti tidak akan pernah tercapai sehingga terjadi Infinite Loop yang membekukan program."
        },
        {
          "id": 7,
          "q": "Simbol silinder tegak pada flowchart sistem merepresentasikan...",
          "options": [
            "Dokumen Cetak Fisik",
            "Monitor Komputer",
            "Basis Data (Database / Stored Data)",
            "Keyboard Fisik"
          ],
          "ans": 2,
          "exp": "Bentuk silinder adalah simbol standar internasional untuk Database atau penyimpanan data digital permanen."
        },
        {
          "id": 8,
          "q": "Manakah standar internasional yang mengatur standarisasi simbol flowchart dan pengolahan data grafis?",
          "options": [
            "ISO 9001",
            "ISO 5807:1985",
            "IEEE 802.11",
            "W3C HTML5"
          ],
          "ans": 1,
          "exp": "ISO 5807:1985 adalah standar resmi dari International Organization for Standardization untuk diagram pengolahan informasi."
        },
        {
          "id": 9,
          "q": "Simbol Persegi Panjang dengan dua garis ganda di sisi kiri dan kanannya disebut...",
          "options": [
            "Alternate Process",
            "Predefined Process / Subroutine",
            "Preparation",
            "Manual Operation"
          ],
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
          "options": [
            "Program Flowchart",
            "Swimlane / Process Flowchart",
            "Data Flowchart",
            "Document Flowchart murni"
          ],
          "ans": 1,
          "exp": "Format Swimlane (jalur renang) memisahkan kolom tanggung jawab lintas entitas atau departemen dengan sangat jelas."
        },
        {
          "id": 12,
          "q": "Manakah yang BUKAN merupakan ciri algoritma yang baik menurut Donald Knuth?",
          "options": [
            "Finiteness (Pasti Berakhir)",
            "Definiteness (Jelas dan Pasti)",
            "Infiniteness (Berjalan Selamanya)",
            "Effectiveness (Langkah Efektif)"
          ],
          "ans": 2,
          "exp": "Algoritma wajib Finiteness (berhingga); berjalan selamanya tanpa akhir adalah bug, bukan ciri algoritma yang baik."
        },
        {
          "id": 13,
          "q": "Apa arti dari simbol Trapesium Terbalik dalam flowchart?",
          "options": [
            "Manual Operation (Operasi Manual Manusia)",
            "Manual Input",
            "Display Monitor",
            "Penyimpanan Magnetik"
          ],
          "ans": 0,
          "exp": "Trapesium terbalik adalah simbol Manual Operation, yaitu tindakan fisik manusia tanpa campur tangan komputer."
        },
        {
          "id": 14,
          "q": "Alat bantu pembuatan diagram berbasis kode teks yang sangat populer dan terintegrasi di GitHub adalah...",
          "options": [
            "Adobe Photoshop",
            "Mermaid.js",
            "CorelDraw",
            "Notepad murni"
          ],
          "ans": 1,
          "exp": "Mermaid.js adalah library text-to-diagram open-source standar dunia pengembang perangkat lunak."
        },
        {
          "id": 15,
          "q": "Teknik pengujian logika flowchart secara manual di atas kertas menggunakan pensil dan tabel nilai masukan disebut...",
          "options": [
            "Unit Testing Otomatis",
            "Uji Meja (Trace Table / Dry Run)",
            "Compile Time Checking",
            "Reverse Engineering"
          ],
          "ans": 1,
          "exp": "Trace Table / Dry Run adalah teknik manual menelusuri variabel langkah demi langkah untuk membuktikan kebenaran logika."
        }
      ],
      "bsQuestions": [
        {
          "id": 1,
          "q": "Sebuah flowchart yang valid boleh memiliki 3 simbol Mulai (Start) yang berbeda.",
          "ans": false,
          "exp": "SALAH. Flowchart hanya boleh memiliki tepat 1 titik awal Mulai (Start) agar awal eksekusi program tidak ambigu."
        },
        {
          "id": 2,
          "q": "Simbol Jajar Genjang digunakan untuk proses membaca data input sekaligus mencetak hasil output.",
          "ans": true,
          "exp": "BENAR. Jajar Genjang adalah simbol umum Data Input/Output."
        },
        {
          "id": 3,
          "q": "Pseudocode dapat langsung dijalankan oleh komputer tanpa perlu dikompilasi atau diinterpretasikan.",
          "ans": false,
          "exp": "SALAH. Pseudocode hanyalah notasi informal untuk manusia. Hanya bahasa pemrograman formal (seperti Python, C++) yang bisa dijalankan komputer."
        },
        {
          "id": 4,
          "q": "Garis alir (flowline) standar mengalir dari atas ke bawah atau dari kiri ke kanan.",
          "ans": true,
          "exp": "BENAR. Arah alami pembacaan diagram standar ANSI/ISO adalah top-to-bottom dan left-to-right."
        },
        {
          "id": 5,
          "q": "Dalam simbol Decision (Belah Ketupat), kita tidak wajib memberi label 'Ya' atau 'Tidak' pada garis panah keluar.",
          "ans": false,
          "exp": "SALAH. Label Ya/Tidak mutlak wajib agar pembaca tahu jalur mana yang diambil saat kondisi terpenuhi atau tidak."
        },
        {
          "id": 6,
          "q": "Simbol Segi Enam (Preparation) biasanya digunakan untuk inisialisasi variabel awal pada perulangan.",
          "ans": true,
          "exp": "BENAR. Hexagon Preparation dirancang khusus untuk deklarasi dan penyiapan nilai awal variabel pengontrol."
        },
        {
          "id": 7,
          "q": "Semua jenis flowchart selalu memuat kode program Python di dalam kotak simbolnya.",
          "ans": false,
          "exp": "SALAH. Flowchart independen dari bahasa pemrograman. Isi simbolnya adalah kalimat instruksi logis ringkas, bukan kode mentah."
        },
        {
          "id": 8,
          "q": "Program Flowchart adalah jenis flowchart yang paling banyak digunakan oleh programmer untuk merancang algoritma fungsi.",
          "ans": true,
          "exp": "BENAR. Program flowchart berfokus langsung pada instruksi logika langkah demi langkah pengkodean."
        },
        {
          "id": 9,
          "q": "Simbol Dokumen (kertas bergelombang) menandakan penyimpanan permanen data di harddisk.",
          "ans": false,
          "exp": "SALAH. Penyimpanan di harddisk menggunakan simbol Silinder Database. Simbol dokumen untuk keluaran kertas cetak / faktur fisik."
        },
        {
          "id": 10,
          "q": "Dry Run (Uji Meja) sangat dianjurkan dilakukan sebelum menuliskan kode di aplikasi compiler.",
          "ans": true,
          "exp": "BENAR. Uji meja menghemat waktu berjam-jam dengan menemukan cacat logika sebelum program diketik."
        }
      ],
      "symbolQuestions": [
        {
          "no": 1,
          "shape": "Oval",
          "ans": "Terminator (Awal/Akhir Program)"
        },
        {
          "no": 2,
          "shape": "Persegi Panjang",
          "ans": "Process (Operasi / Kalkulasi Rumus)"
        },
        {
          "no": 3,
          "shape": "Belah Ketupat",
          "ans": "Decision (Percabangan Keputusan Ya/Tidak)"
        },
        {
          "no": 4,
          "shape": "Jajar Genjang",
          "ans": "Input / Output Data Generik"
        },
        {
          "no": 5,
          "shape": "Lingkaran Kecil",
          "ans": "On-Page Connector (Penghubung Satu Halaman)"
        },
        {
          "no": 6,
          "shape": "Segilima Rumah Terbalik",
          "ans": "Off-Page Connector (Penghubung Beda Halaman)"
        },
        {
          "no": 7,
          "shape": "Persegi Garis Ganda",
          "ans": "Predefined Process (Pemanggilan Subprogram/Fungsi)"
        },
        {
          "no": 8,
          "shape": "Segi Enam (Hexagon)",
          "ans": "Preparation (Inisialisasi Nilai Awal)"
        },
        {
          "no": 9,
          "shape": "Silinder Tegak",
          "ans": "Database / Stored Data (Penyimpanan Basis Data)"
        },
        {
          "no": 10,
          "shape": "Persegi Bawah Bergelombang",
          "ans": "Document (Keluaran Berkas / Cetak Fisik)"
        }
      ],
      "sequenceExercises": [
        {
          "no": 1,
          "title": "Membuat Teh Manis Hangat",
          "scrambled": [
            "Aduk hingga rata",
            "Siapkan cangkir dan teh celup",
            "Tuang air panas",
            "Masukkan gula pasir",
            "Teh manis siap disajikan"
          ],
          "correct": [
            "Siapkan cangkir dan teh celup",
            "Tuang air panas",
            "Masukkan gula pasir",
            "Aduk hingga rata",
            "Teh manis siap disajikan"
          ]
        },
        {
          "no": 2,
          "title": "Menghitung Luas Lingkaran",
          "scrambled": [
            "Tampilkan nilai luas",
            "Mulai",
            "Hitung luas = 3.14 * r * r",
            "Selesai",
            "Input jari-jari (r)"
          ],
          "correct": [
            "Mulai",
            "Input jari-jari (r)",
            "Hitung luas = 3.14 * r * r",
            "Tampilkan nilai luas",
            "Selesai"
          ]
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
    },
    {
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
          "mermaid": "flowchart TD\n    S([MULAI]) --> In[/Input: nim, nama, hadir, tugas, uts, uas/]\n    In --> C1{\"hadir >= 75?\"}\n    C1 -- Tidak --> F1[\"grade = 'E'<br>status = 'TIDAK LULUS (Kehadiran Kurang)'\"]\n    C1 -- Ya --> Calc[\"NA = (0.10*hadir) + (0.20*tugas) + (0.30*uts) + (0.40*uas)\"]\n    Calc --> G1{\"NA >= 85?\"}\n    G1 -- Ya --> GA[\"grade = 'A'\"]\n    G1 -- Tidak --> G2{\"NA >= 75?\"}\n    G2 -- Ya --> GB[\"grade = 'B'\"]\n    G2 -- Tidak --> G3{\"NA >= 65?\"}\n    G3 -- Ya --> GC[\"grade = 'C'\"]\n    G3 -- Tidak --> G4{\"NA >= 50?\"}\n    G4 -- Ya --> GD[\"grade = 'D'\"]\n    G4 -- Tidak --> GE[\"grade = 'E'\"]\n    GA --> St{\"grade IN ('A','B','C')?\"}\n    GB --> St\n    GC --> St\n    GD --> St\n    GE --> St\n    St -- Ya --> Pass[\"status = 'LULUS'\"]\n    St -- Tidak --> Fail[\"status = 'TIDAK LULUS'\"]\n    F1 --> Out[/Tampilkan: nama, NA, grade, status/]\n    Pass --> Out\n    Fail --> Out\n    Out --> E([SELESAI])",
          "pseudo": "PROGRAM PenilaianMahasiswa\nALGORITMA:\n    READ(nim, nama, hadir, tugas, uts, uas)\n    IF hadir < 75 THEN\n        grade = 'E'; status = 'TIDAK LULUS'\n    ELSE\n        NA = (0.10 * hadir) + (0.20 * tugas) + (0.30 * uts) + (0.40 * uas)\n        IF NA >= 85 THEN grade = 'A'\n        ELIF NA >= 75 THEN grade = 'B'\n        ELIF NA >= 65 THEN grade = 'C'\n        ELIF NA >= 50 THEN grade = 'D'\n        ELSE grade = 'E'\n        ENDIF\n        IF grade IN ('A', 'B', 'C') THEN status = 'LULUS' ELSE status = 'TIDAK LULUS' ENDIF\n    ENDIF\n    WRITE(nama, NA, grade, status)\nENDPROGRAM",
          "testCases": [
            {
              "kasus": "Mahasiswa Pintar Rajin",
              "input": "Hadir: 100, Tugas: 90, UTS: 85, UAS: 90",
              "expected": "NA: 89.5 | Grade A | LULUS"
            },
            {
              "kasus": "Mahasiswa Kurang Hadir",
              "input": "Hadir: 60, Tugas: 100, UTS: 100, UAS: 100",
              "expected": "Grade E | TIDAK LULUS (Kehadiran < 75%)"
            }
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
          "mermaid": "flowchart TD\n    S([MULAI]) --> Init[\"subtotal = 0<br>is_member = False\"]\n    Init --> LoopCheck{\"Ada barang belanjaan lagi?\"}\n    LoopCheck -- Ya --> InItem[/Input: harga, qty/]\n    InItem --> AddItem[\"subtotal += (harga * qty)\"]\n    AddItem --> LoopCheck\n    LoopCheck -- Tidak --> MemAsk[/Input: Punya Kartu Member? /]\n    MemAsk --> MemCond{\"is_member == True?\"}\n    MemCond -- Ya --> Disc[\"diskon = 0.05 * subtotal\"]\n    MemCond -- Tidak --> NoDisc[\"diskon = 0\"]\n    Disc --> Tax[\"dpp = subtotal - diskon<br>ppn = 0.11 * dpp<br>total_bayar = dpp + ppn\"]\n    NoDisc --> Tax\n    Tax --> PayIn[/Input: uang_tunai/]\n    PayIn --> PayCond{\"uang_tunai >= total_bayar?\"}\n    PayCond -- Ya --> Change[\"kembalian = uang_tunai - total_bayar\"]\n    PayCond -- Tidak --> Kurang[/Tampilkan: Uang Kurang! Minta Tambahan/]\n    Kurang --> PayIn\n    Change --> Receipt[/Cetak Struk Transaksi Kasir/]\n    Receipt --> Fin([SELESAI])",
          "pseudo": "PROGRAM TransaksiPOSKasir\nALGORITMA:\n    subtotal = 0\n    WHILE MasihAdaBarang() DO\n        READ(harga, qty)\n        subtotal = subtotal + (harga * qty)\n    ENDWHILE\n    READ(is_member)\n    IF is_member == TRUE THEN diskon = 0.05 * subtotal ELSE diskon = 0 ENDIF\n    dpp = subtotal - diskon\n    ppn = 0.11 * dpp\n    total_bayar = dpp + ppn\n    REPEAT\n        READ(uang_tunai)\n        IF uang_tunai < total_bayar THEN WRITE(\"Uang Kurang!\") ENDIF\n    UNTIL uang_tunai >= total_bayar\n    kembalian = uang_tunai - total_bayar\n    CETAK_STRUK(subtotal, diskon, ppn, total_bayar, uang_tunai, kembalian)\nENDPROGRAM",
          "testCases": [
            {
              "kasus": "Belanja 2 Item dengan Member",
              "input": "Barang A: 20rb x 2, Barang B: 10rb x 1, Member: Ya, Tunai: 100rb",
              "expected": "Subtotal: 50rb, Diskon: 2.5rb, PPN: 5.225, Bayar: 52.725, Kembali: 47.275"
            }
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
          "mermaid": "flowchart TD\n    S([MULAI]) --> Auth[/Input: NISN, Sandi/]\n    Auth --> CAuth{\"Akun Terdaftar & Benar?\"}\n    CAuth -- Tidak --> E1[/Gagal Login: Kredensial Salah/]\n    CAuth -- Ya --> Form[/Input: Kategori, Deskripsi, Foto/]\n    Form --> Val{\"Data Lengkap & Foto Valid?\"}\n    Val -- Tidak --> E2[/Error: Lengkapi Berkas Pengaduan/]\n    Val -- Ya --> GenID[\"Generate Nomor Tiket Unik\"]\n    GenID --> PriCheck{\"Kategori == 'Kritis'?\"}\n    PriCheck -- Ya --> HighP[\"prioritas = 'TINGGI'<br>Kirim Notif WhatsApp Teknisi Siaga\"]\n    PriCheck -- Tidak --> NormP[\"prioritas = 'NORMAL'<br>Masukkan Antrean Reguler\"]\n    HighP --> DB[(Simpan Tiket ke Database)]\n    NormP --> DB\n    DB --> Out[/Tampilkan: Tiket Berhasil Dibuat, No Tiket/]\n    E1 --> Fin([SELESAI])\n    E2 --> Form\n    Out --> Fin",
          "pseudo": "PROGRAM LayananPengaduanSekolah\nALGORITMA:\n    READ(nisn, sandi)\n    IF Otentikasi(nisn, sandi) == FALSE THEN\n        WRITE(\"Login Ditolak\")\n        EXIT\n    ENDIF\n    READ(kategori, deskripsi, foto)\n    tiket_id = GenerateTicket()\n    IF kategori == \"Kritis\" THEN\n        prioritas = \"TINGGI\"\n        DispatchDarurat(tiket_id)\n    ELSE\n        prioritas = \"NORMAL\"\n        AntreanReguler(tiket_id)\n    ENDIF\n    SimpanDatabase(tiket_id, nisn, kategori, prioritas, \"DALAM_PROSES\")\n    WRITE(\"Pengaduan Berhasil Terkirim. Nomor Tiket:\", tiket_id)\nENDPROGRAM",
          "testCases": [
            {
              "kasus": "Laporan Korsleting Listrik",
              "input": "Kategori: Listrik / Kritis",
              "expected": "Prioritas TINGGI ➔ Notif Teknisi Langsung"
            },
            {
              "kasus": "Laporan Kursi Goyang",
              "input": "Kategori: Meubel / Normal",
              "expected": "Prioritas NORMAL ➔ Antrean Reguler"
            }
          ],
          "rubric": "1. Struktur Alur Keamanan & Validasi (25%) | 2. Alur Keputusan Prioritas (35%) | 3. Arsitektur Database (20%) | 4. Kelengkapan Uji Kasus (20%)"
        }
      ]
    },
    {
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
        {
          "term": "Algoritma",
          "def": "Urutan langkah-langkah logis, berhingga, dan terdefinisi dengan pasti untuk memecahkan suatu permasalahan komputasi."
        },
        {
          "term": "ANSI",
          "def": "American National Standards Institute, badan standardisasi Amerika yang memformalkan simbol diagram alir pertama di dunia."
        },
        {
          "term": "Control Flow",
          "def": "Urutan kronologis arah pergerakan instruksi yang dieksekusi oleh mesin komputasi."
        },
        {
          "term": "Decision",
          "def": "Bangun belah ketupat yang menguji kondisi bernilai Boolean (True/False) dengan minimal dua jalur cabang berlabel."
        },
        {
          "term": "DFD (Data Flow Diagram)",
          "def": "Diagram yang memetakan aliran dan transformasi paket data tanpa memperlihatkan urutan kontrol waktu atau keputusan percabangan."
        },
        {
          "term": "Dry Run (Trace Table)",
          "def": "Metode verifikasi algoritma secara manual menggunakan pensil dan tabel jejak nilai untuk memastikan tidak ada kesalahan logika."
        },
        {
          "term": "Flowline",
          "def": "Garis berpanah yang menunjukkan arah pergerakan alur kendali dari satu langkah ke langkah berikutnya."
        },
        {
          "term": "Finiteness",
          "def": "Sifat mutlak algoritma yang menyatakan bahwa program harus berhenti setelah sejumlah langkah terhingga dieksekusi."
        },
        {
          "term": "Infinite Loop",
          "def": "Kondisi galat fatal di mana perulangan berjalan selamanya tanpa akhir karena kondisi berhenti tidak pernah terpenuhi."
        },
        {
          "term": "ISO",
          "def": "International Organization for Standardization, badan internasional yang menerbitkan standar ISO 5807:1985 untuk diagram alir data dan program."
        },
        {
          "term": "Mermaid.js",
          "def": "Library open-source berbasis JavaScript yang mengonversi teks Markdown menjadi diagram visual secara dinamis."
        },
        {
          "term": "On-Page Connector",
          "def": "Simbol lingkaran kecil yang menyambungkan garis alir pada satu halaman dokumen yang sama."
        },
        {
          "term": "Off-Page Connector",
          "def": "Simbol segi lima seperti rumah terbalik untuk menyambungkan alur yang berpindah ke lembar halaman berikutnya."
        },
        {
          "term": "Predefined Process",
          "def": "Simbol persegi panjang bergaris ganda yang menyatakan pemanggilan fungsi, prosedur, atau subprogram terpisah."
        },
        {
          "term": "Preparation",
          "def": "Simbol segi enam (hexagon) yang digunakan untuk inisialisasi variabel dan penyiapan counter perulangan."
        },
        {
          "term": "Pseudocode",
          "def": "Teks notasi informal yang menyerupai bahasa pemrograman tingkat tinggi untuk menggambarkan logika algoritma bagi pembaca manusia."
        },
        {
          "term": "Swimlane",
          "def": "Format diagram alir yang membagi kanvas menjadi lajur-lajur tanggung jawab departemen/aktor seperti lintasan kolam renang."
        },
        {
          "term": "Terminator",
          "def": "Simbol oval/kapsul yang menandai titik awal (Mulai) dan titik akhir (Selesai) dari alur diagram."
        }
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
  ]
};
