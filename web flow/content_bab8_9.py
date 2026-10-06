# content_bab8_9.py
# Modul konten BAB VIII (Tools Pembuatan Flowchart) dan BAB IX (Kesalahan Umum & Debugging)

def get_bab8():
    return {
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
                "content": """<p>Dalam era digital modern, pembuatan flowchart tidak lagi menggunakan penggaris dan pensil di atas kertas kalkir. Terdapat empat kategori utama software yang dapat Anda gunakan:</p>
                
                <div class="grid-2-col">
                    <div class="tool-category-card">
                        <span class="badge badge-blue">Kategori 1</span>
                        <h4>🌐 Editor Berbasis Web (Cloud-Based)</h4>
                        <p>Dijalankan langsung di peramban (browser) tanpa instalasi. Sangat unggul untuk kolaborasi tim secara real-time.</p>
                        <ul>
                            <li><strong>Draw.io (diagrams.net):</strong> 100% Gratis, open-source, terintegrasi dengan Google Drive, OneDrive, GitHub. URL: <a href="https://app.diagrams.net" target="_blank" rel="noopener">app.diagrams.net</a></li>
                            <li><strong>Lucidchart:</strong> Standar industri enterprise, template sangat melimpah, integrasi Atlassian Jira & Confluence. URL: <a href="https://www.lucidchart.com" target="_blank" rel="noopener">lucidchart.com</a></li>
                            <li><strong>Miro:</strong> Kanvas kolaborasi visual tak terbatas (*infinite canvas*) untuk brainstorming tim. URL: <a href="https://miro.com" target="_blank" rel="noopener">miro.com</a></li>
                        </ul>
                    </div>

                    <div class="tool-category-card">
                        <span class="badge badge-purple">Kategori 2</span>
                        <h4>💻 Aplikasi Desktop (Offline Native)</h4>
                        <p>Diinstal langsung di sistem operasi (Windows/macOS/Linux). Bekerja cepat tanpa memerlukan koneksi internet.</p>
                        <ul>
                            <li><strong>Microsoft Visio:</strong> Standar de-facto korporat dengan ribuan stensil resmi standar ANSI, ISO, UML, dan BPMN. URL: <a href="https://www.microsoft.com/en-us/microsoft-365/visio" target="_blank" rel="noopener">microsoft.com/visio</a></li>
                            <li><strong>EdrawMax:</strong> Perangkat lunak serbaguna kaya fitur grafis dengan ekspor ke berbagai format vektor. URL: <a href="https://www.edrawsoft.com/edraw-max/" target="_blank" rel="noopener">edrawsoft.com/edraw-max</a></li>
                            <li><strong>Dia Diagram Editor:</strong> Software open-source legendaris yang sangat ringan untuk Linux dan Windows. URL: <a href="http://dia-installer.de/" target="_blank" rel="noopener">dia-installer.de</a></li>
                        </ul>
                    </div>

                    <div class="tool-category-card">
                        <span class="badge badge-amber">Kategori 3</span>
                        <h4>📑 Fitur Diagram pada Aplikasi Perkantoran</h4>
                        <p>Menggunakan fitur bawaan pengolah kata dan presentasi untuk dokumen laporan formal.</p>
                        <ul>
                            <li><strong>Microsoft Word & PowerPoint:</strong> Menu <code>Insert ➔ Shapes ➔ Flowchart</code> atau menggunakan fitur <code>SmartArt</code>. Sangat praktis untuk makalah tugas sekolah tanpa software tambahan.</li>
                            <li><strong>Google Docs & Slides:</strong> Menu <code>Sisipkan ➔ Gambar ➔ Baru</code>. Memungkinkan pengeditan langsung bersama rekan kelompok di Google Workspace.</li>
                        </ul>
                    </div>

                    <div class="tool-category-card">
                        <span class="badge badge-green">Kategori 4</span>
                        <h4>⚡ Text-to-Diagram Tools (Diagram as Code)</h4>
                        <p>Membuat diagram menggunakan baris sintaks teks sederhana yang otomatis dirender menjadi diagram grafis.</p>
                        <ul>
                            <li><strong>Mermaid.js:</strong> Sintaks berbasis teks yang didukung secara *native* oleh GitHub, GitLab, Notion, dan Jupyter Notebook. URL: <a href="https://mermaid.js.org/" target="_blank" rel="noopener">mermaid.js.org</a></li>
                            <li><strong>PlantUML:</strong> Tool berbasis bahasa pemodelan Java untuk menghasilkan diagram teknis profesional. URL: <a href="https://plantuml.com/" target="_blank" rel="noopener">plantuml.com</a></li>
                        </ul>
                    </div>
                </div>"""
            },
            {
                "id": "8-2-tutorial-drawio",
                "title": "8.2 Langkah Praktis Membuat Flowchart di Draw.io (Gratis)",
                "content": """<div class="step-guide">
                    <div class="step-item">
                        <div class="step-circle">1</div>
                        <div class="step-body">
                            <h4>Buka Browser</h4>
                            <p>Kunjungi <a href="https://app.diagrams.net" target="_blank" rel="noopener">app.diagrams.net</a>, lalu pilih opsi penyimpanan <em>Decide Later</em> atau sambungkan ke <em>Google Drive</em>.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">2</div>
                        <div class="step-body">
                            <h4>Pilih Stensil 'General' & 'Flowchart'</h4>
                            <p>Pada panel kiri, buka grup <strong>Flowchart</strong>. Tarik (*drag-and-drop*) simbol <strong>Start/End (Oval)</strong> ke kanvas tengah.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">3</div>
                        <div class="step-body">
                            <h4>Mengetik Teks & Menghubungkan Panah</h4>
                            <p>Klik ganda (*double-click*) pada simbol untuk menulis teks. Arahkan kursor ke panah kecil biru di tepi simbol, lalu klik dan tarik menuju simbol berikutnya untuk membuat garis otomatis.</p>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-circle">4</div>
                        <div class="step-body">
                            <h4>Ekspor Diagram</h4>
                            <p>Pilih menu <code>File ➔ Export as ➔ PNG / PDF / SVG</code> untuk menyimpan diagram ke komputermu dengan resolusi tajam!</p>
                        </div>
                    </div>
                </div>"""
            },
            {
                "id": "8-3-panduan-mermaid",
                "title": "8.3 Kekuatan Mermaid.js: Menggambar Diagram Lewat Baris Kode",
                "content": """<p><strong>Mermaid.js</strong> adalah teknologi revolusioner yang memungkinkan developer menulis diagram alir semudah mengetik Markdown. Keunggulan utamanya: <em>Version control friendly</em> (bisa di-track perubahannya lewat Git commit tanpa binary file).</p>
                
                <h4>Contoh Kode Mermaid Sederhana:</h4>
                <div class="code-wrapper">
                    <pre><code class="language-markdown">flowchart TD
    A([Mulai]) --> B[/Input: Angka/]
    B --> C{Angka > 0?}
    C -- Ya --> D[/Tampilkan: Positif/]
    C -- Tidak --> E[/Tampilkan: Nol atau Negatif/]
    D --> F([Selesai])
    E --> F</code></pre>
                </div>
                
                <h4>Keterbatasan Mermaid.js:</h4>
                <ul>
                    <li>Tata letak node ditentukan secara otomatis oleh algoritma render grafis (Dagre layout engine), sehingga pengguna tidak bisa menggeser posisi kotak secara bebas dengan mouse piksel-demi-piksel.</li>
                    <li>Untuk percabangan yang sangat rumit dengan ratusan cabang, garis koneksi terkadang membentuk lintasan yang melingkar jauh.</li>
                </ul>"""
            }
        ]
    }

def get_bab9():
    return {
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
    }

print("content_bab8_9 ready")
