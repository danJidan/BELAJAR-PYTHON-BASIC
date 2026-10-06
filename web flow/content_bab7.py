# content_bab7.py
# Modul konten BAB VII: Kumpulan 20 Contoh Flowchart Lengkap dari Dasar hingga Lanjutan

def get_bab7():
    examples = [
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
            "pseudo": """PROGRAM TampilkanPesan
ALGORITMA:
    WRITE("Halo, Selamat Datang di Dunia Pemrograman Flowchart!")
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Tampilkan: 'Halo, Selamat Datang di Dunia Pemrograman Flowchart!'/]
    B --> C([SELESAI])""",
            "steps": "1. Program dimulai di Terminator Mulai.\n2. Alur mengalir ke Jajar Genjang yang memerintahkan komputer menampilkan string teks.\n3. Alur langsung menuju Terminator Selesai.",
            "python": """# Contoh 1: Menampilkan Pesan Sederhana
pesan = "Halo, Selamat Datang di Dunia Pemrograman Flowchart!"
print(pesan)""",
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
            "pseudo": """PROGRAM HitungLuasPersegiPanjang
KAMUS:
    panjang, lebar, luas : float
ALGORITMA:
    READ(panjang, lebar)
    luas = panjang * lebar
    WRITE("Luas Persegi Panjang:", luas)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: panjang, lebar/]
    B --> C["luas = panjang * lebar"]
    C --> D[/Tampilkan: luas/]
    D --> E([SELESAI])""",
            "steps": "1. Baca data panjang dan lebar dari masukan pengguna.\n2. Simpan dalam variabel, kalikan keduanya pada blok Proses.\n3. Cetak hasil perkalian pada blok Output.",
            "python": """# Contoh 2: Menghitung Luas Persegi Panjang
panjang = float(input("Masukkan panjang: "))
lebar = float(input("Masukkan lebar: "))

luas = panjang * lebar
print(f"Luas Persegi Panjang adalah: {luas}")""",
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
            "pseudo": """PROGRAM HitungRataRataTigaNilai
KAMUS:
    n1, n2, n3, rata : float
ALGORITMA:
    READ(n1, n2, n3)
    rata = (n1 + n2 + n3) / 3.0
    WRITE("Nilai Rata-rata:", rata)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: n1, n2, n3/]
    B --> C["rata = (n1 + n2 + n3) / 3"]
    C --> D[/Tampilkan: rata/]
    D --> E([SELESAI])""",
            "steps": "1. Membaca 3 data angka sekaligus.\n2. Menjalankan operasi penjumlahan di dalam kurung lalu membaginya dengan 3.\n3. Menampilkan nilai rata-rata.",
            "python": """# Contoh 3: Rata-rata 3 Nilai
n1 = 80
n2 = 90
n3 = 85

rata = (n1 + n2 + n3) / 3
print(f"Rata-rata: {rata:.2f}")""",
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
            "pseudo": """PROGRAM GanjilGenap
KAMUS:
    bil : integer
    ket : string
ALGORITMA:
    READ(bil)
    IF bil MOD 2 == 0 THEN
        ket = "GENAP"
    ELSE
        ket = "GANJIL"
    ENDIF
    WRITE(ket)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: bil/]
    B --> C{"bil % 2 == 0?"}
    C -- Ya --> D["ket = 'GENAP'"]
    C -- Tidak --> E["ket = 'GANJIL'"]
    D --> F[/Tampilkan: ket/]
    E --> F
    F --> G([SELESAI])""",
            "steps": "1. Masukkan bilangan.\n2. Pada belah ketupat, evaluasi sisa bagi dengan 2.\n3. Jika ya, ambil cabang kiri; jika tidak, ambil cabang kanan.\n4. Keduanya bergabung kembali sebelum mencetak hasil.",
            "python": """# Contoh 4: Ganjil Genap
bil = int(input("Masukkan angka: "))
if bil % 2 == 0:
    print(f"{bil} adalah bilangan GENAP")
else:
    print(f"{bil} adalah bilangan GANJIL")""",
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
            "pseudo": """PROGRAM CekKelulusan
KAMUS:
    nama : string; nilai : float; status : string
ALGORITMA:
    READ(nama, nilai)
    IF nilai >= 75 THEN
        status = "LULUS"
    ELSE
        status = "REMEDIAL"
    ENDIF
    WRITE(nama, status)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: nama, nilai/]
    B --> C{"nilai >= 75?"}
    C -- Ya --> D["status = 'LULUS'"]
    C -- Tidak --> E["status = 'REMEDIAL'"]
    D --> F[/Tampilkan: nama, status/]
    E --> F
    F --> G([SELESAI])""",
            "steps": "1. Input nama dan nilai.\n2. Belah ketupat memeriksa kondisi.\n3. Berikan nilai variabel status sesuai cabang.\n4. Cetak output terpadu.",
            "python": """# Contoh 5: Cek Kelulusan KKM
nama = "Fajar"
nilai = 78

status = "LULUS 🎉" if nilai >= 75 else "REMEDIAL 💪"
print(f"Siswa: {nama} | Status: {status}")""",
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
            "pseudo": """PROGRAM TerbesarDuaAngka
KAMUS:
    a, b, maks : float
ALGORITMA:
    READ(a, b)
    IF a > b THEN
        maks = a
    ELSE
        maks = b
    ENDIF
    WRITE("Terbesar adalah:", maks)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: a, b/]
    B --> C{"Apakah a > b?"}
    C -- Ya --> D["maks = a"]
    C -- Tidak --> E["maks = b"]
    D --> F[/Tampilkan: maks/]
    E --> F
    F --> G([SELESAI])""",
            "steps": "1. Input variabel a dan b.\n2. Bandingkan a terhadap b.\n3. Isi variabel maks dengan nilai yang unggul.\n4. Tampilkan nilai maks.",
            "python": """# Contoh 6: Maksimum 2 Angka
a = 45
b = 72

if a > b:
    maks = a
else:
    maks = b

print(f"Bilangan terbesar adalah: {maks}")""",
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
            "pseudo": """PROGRAM TerbesarTigaAngka
KAMUS:
    A, B, C, maks : float
ALGORITMA:
    READ(A, B, C)
    IF A >= B AND A >= C THEN
        maks = A
    ELIF B >= C THEN
        maks = B
    ELSE
        maks = C
    ENDIF
    WRITE("Terbesar:", maks)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> In[/Input: A, B, C/]
    In --> D1{"A >= B dan A >= C?"}
    D1 -- Ya --> SetA["maks = A"]
    D1 -- Tidak --> D2{"B >= C?"}
    D2 -- Ya --> SetB["maks = B"]
    D2 -- Tidak --> SetC["maks = C"]
    SetA --> Out[/Tampilkan: maks/]
    SetB --> Out
    SetC --> Out
    Out --> End([SELESAI])""",
            "steps": "1. Membandingkan A dengan B dan C sekaligus.\n2. Jika gagal, bandingkan kandidat kedua (B) dengan kandidat tersisa (C).\n3. Nilai terbesar disimpan dan dicetak.",
            "python": """# Contoh 7: Terbesar dari 3 Angka
A = 34
B = 89
C = 56

if A >= B and A >= C:
    maks = A
elif B >= C:
    maks = B
else:
    maks = C

print(f"Dari {A}, {B}, dan {C}, yang terbesar adalah: {maks}")""",
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
            "pseudo": """PROGRAM DiskonBelanja
KAMUS:
    belanja, diskon, total_bayar : float
ALGORITMA:
    READ(belanja)
    IF belanja >= 200000 THEN
        diskon = 0.15 * belanja
    ELSE
        diskon = 0
    ENDIF
    total_bayar = belanja - diskon
    WRITE(diskon, total_bayar)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    Start([MULAI]) --> In[/Input: belanja/]
    In --> Cond{"belanja >= 200000?"}
    Cond -- Ya --> Disc["diskon = 0.15 * belanja"]
    Cond -- Tidak --> NoDisc["diskon = 0"]
    Disc --> Calc["total_bayar = belanja - diskon"]
    NoDisc --> Calc
    Calc --> Out[/Tampilkan: diskon, total_bayar/]
    Out --> Finish([SELESAI])""",
            "steps": "1. Evaluasi batas belanja 200.000.\n2. Hitung diskon sesuai persentase promo.\n3. Kurangi total belanja dengan potongan diskon.\n4. Cetak informasi rincian.",
            "python": """# Contoh 8: Diskon Supermarket
belanja = 250000

if belanja >= 200000:
    diskon = 0.15 * belanja
else:
    diskon = 0

total_bayar = belanja - diskon
print(f"Belanja: Rp {belanja:,} | Diskon: Rp {int(diskon):,} | Bayar: Rp {int(total_bayar):,}")""",
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
            "pseudo": """PROGRAM KasirRestoran
KAMUS:
    subtotal, uang_diterima, pajak, total_tagihan, kembalian : float
ALGORITMA:
    READ(subtotal, uang_diterima)
    pajak = 0.11 * subtotal
    total_tagihan = subtotal + pajak
    kembalian = uang_diterima - total_tagihan
    IF kembalian >= 0 THEN
        WRITE("Transaksi Berhasil, Kembalian: Rp", kembalian)
    ELSE
        WRITE("Uang Kurang Sebesar: Rp", ABS(kembalian))
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: subtotal, uang_bayar/]
    B --> C["pajak = 0.11 * subtotal<br>tagihan = subtotal + pajak<br>kembali = uang_bayar - tagihan"]
    C --> D{"kembali >= 0?"}
    D -- Ya --> E[/Tampilkan: Transaksi Berhasil, kembali/]
    D -- Tidak --> F[/Tampilkan: Uang Kurang!/]
    E --> G([SELESAI])
    F --> G""",
            "steps": "1. Masukkan data subtotal belanja dan nominal uang tunai.\n2. Hitung rumus pajak restoran 11% dan kalkulasi kembalian.\n3. Uji apakah uang bayar mencukupi.\n4. Cetak struk atau peringatan.",
            "python": """# Contoh 9: Kasir Restoran
subtotal = 100000
uang_bayar = 150000

pajak = 0.11 * subtotal
tagihan = subtotal + pajak
kembali = uang_bayar - tagihan

if kembali >= 0:
    print(f"Tagihan: Rp {int(tagihan):,} | Kembali: Rp {int(kembali):,}")
else:
    print(f"Uang kurang Rp {int(abs(kembali)):,}")""",
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
            "pseudo": """PROGRAM LoginSederhana
KAMUS:
    u, p : string
ALGORITMA:
    READ(u, p)
    IF u == "admin" AND p == "rahasia123" THEN
        WRITE("Login Berhasil! Akses Diterima.")
    ELSE
        WRITE("Gagal: Username atau Password Salah!")
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: username, password/]
    B --> C{"username == 'admin' AND<br>password == 'rahasia123'?"}
    C -- Ya --> D[/Tampilkan: Login Berhasil!/]
    C -- Tidak --> E[/Tampilkan: Kredensial Salah!/]
    D --> F([SELESAI])
    E --> F""",
            "steps": "1. Membaca string masukan pengguna.\n2. Memvalidasi kedua syarat secara simultan.\n3. Memberikan respons sesuai hasil pengujian.",
            "python": """# Contoh 10: Login Sederhana
username = "admin"
password = "wrongpassword"

if username == "admin" and password == "rahasia123":
    print("✅ Login Berhasil!")
else:
    print("❌ Akses Ditolak: Kredensial Tidak Cocok!")""",
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
            "pseudo": """PROGRAM CetakDeretN
KAMUS:
    N, i : integer
ALGORITMA:
    READ(N)
    i = 1
    WHILE i <= N DO
        WRITE(i)
        i = i + 1
    ENDWHILE
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: N/]
    B --> C["Preparation: i = 1"]
    C --> D{"i <= N?"}
    D -- Ya --> E[/Tampilkan: i/]
    E --> F["i = i + 1"]
    F --> D
    D -- Tidak --> G([SELESAI])""",
            "steps": "1. Input angka batas N.\n2. Inisialisasi i = 1.\n3. Cek batas; jika benar cetak angka dan tambah 1.\n4. Panah loop kembali ke belah ketupat sampai i > N.",
            "python": """# Contoh 11: Cetak Angka 1 sampai N
N = 5
i = 1

while i <= N:
    print(f"Angka: {i}")
    i += 1""",
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
            "pseudo": """PROGRAM HitungFaktorial
KAMUS:
    n, i : integer; faktorial : integer
ALGORITMA:
    READ(n)
    faktorial = 1
    i = 1
    WHILE i <= n DO
        faktorial = faktorial * i
        i = i + 1
    ENDWHILE
    WRITE("Hasil Faktorial:", faktorial)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: n/]
    B --> C["faktorial = 1<br>i = 1"]
    C --> D{"i <= n?"}
    D -- Ya --> E["faktorial = faktorial * i<br>i = i + 1"]
    E --> D
    D -- Tidak --> F[/Tampilkan: faktorial/]
    F --> G([SELESAI])""",
            "steps": "1. Tetapkan nilai awal faktorial = 1 (elemen identitas perkalian).\n2. Kalikan secara akumulatif setiap langkah loop.\n3. Cetak hasil akhir saat iterasi selesai.",
            "python": """# Contoh 12: Faktorial
n = 5
faktorial = 1
for i in range(1, n + 1):
    faktorial *= i

print(f"{n}! = {faktorial}")""",
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
            "pseudo": """PROGRAM JumlahDeret
KAMUS:
    n, i, total : integer
ALGORITMA:
    READ(n)
    total = 0
    FOR i = 1 TO n DO
        total = total + i
    ENDFOR
    WRITE("Jumlah deret:", total)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: n/]
    B --> C["total = 0<br>i = 1"]
    C --> D{"i <= n?"}
    D -- Ya --> E["total = total + i<br>i = i + 1"]
    E --> D
    D -- Tidak --> F[/Tampilkan: total/]
    F --> G([SELESAI])""",
            "steps": "1. Inisialisasi total = 0.\n2. Akumulasi setiap nilai i ke dalam variabel total.\n3. Tampilkan hasil.",
            "python": """# Contoh 13: Jumlah Deret
n = 10
total = sum(range(1, n + 1))
print(f"Jumlah deret 1 s.d. {n} adalah: {total}")""",
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
            "pseudo": """PROGRAM KonversiGrade
KAMUS:
    nilai : float; grade : char
ALGORITMA:
    READ(nilai)
    IF nilai >= 85 THEN grade = 'A'
    ELIF nilai >= 70 THEN grade = 'B'
    ELIF nilai >= 60 THEN grade = 'C'
    ELIF nilai >= 50 THEN grade = 'D'
    ELSE grade = 'E'
    ENDIF
    WRITE("Grade:", grade)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: nilai/]
    B --> C{"nilai >= 85?"}
    C -- Ya --> A1["grade = 'A'"]
    C -- Tidak --> D{"nilai >= 70?"}
    D -- Ya --> B1["grade = 'B'"]
    D -- Tidak --> E{"nilai >= 60?"}
    E -- Ya --> C1["grade = 'C'"]
    E -- Tidak --> F{"nilai >= 50?"}
    F -- Ya --> D1["grade = 'D'"]
    F -- Tidak --> E1["grade = 'E'"]
    A1 --> Out[/Tampilkan: grade/]
    B1 --> Out
    C1 --> Out
    D1 --> Out
    E1 --> Out
    Out --> Fin([SELESAI])""",
            "steps": "1. Pengujian dilakukan berjenjang dari nilai tertinggi ke terendah.\n2. Begitu salah satu kondisi benar, langsung tetapkan grade dan lompat ke output.",
            "python": """# Contoh 14: Konversi Grade
nilai = 74

if nilai >= 85: grade = 'A'
elif nilai >= 70: grade = 'B'
elif nilai >= 60: grade = 'C'
elif nilai >= 50: grade = 'D'
else: grade = 'E'

print(f"Nilai: {nilai} ➔ Grade: {grade}")""",
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
            "pseudo": """PROGRAM SimulasiATM
KAMUS:
    pin, pin_asli : string; saldo, tarik : integer
ALGORITMA:
    pin_asli = "1234"; saldo = 1000000
    READ(pin)
    IF pin != pin_asli THEN
        WRITE("PIN Salah! Transaksi Dibatalkan.")
    ELSE
        READ(tarik)
        IF saldo < tarik THEN
            WRITE("Saldo Anda Tidak Cukup!")
        ELSE
            saldo = saldo - tarik
            WRITE("Silakan Ambil Uang Anda. Sisa Saldo: Rp", saldo)
        ENDIF
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    A([MULAI]) --> B[/Input: pin/]
    B --> C{"pin == '1234'?"}
    C -- Tidak --> D[/Tampilkan: PIN Salah!/]
    C -- Ya --> E[/Input: nominal_tarik/]
    E --> F{"saldo >= nominal_tarik?"}
    F -- Tidak --> G[/Tampilkan: Saldo Tidak Cukup!/]
    F -- Ya --> H["saldo = saldo - nominal_tarik"]
    H --> I[/Keluarkan Uang Tunai & Cetak Resi/]
    D --> Fin([SELESAI])
    G --> Fin
    I --> Fin""",
            "steps": "1. Verifikasi pintu gerbang keamanan pertama (PIN).\n2. Validasi pintu gerbang kedua (Ketersediaan dana).\n3. Mutasi saldo dan dispensasi uang fisik.",
            "python": """# Contoh 15: Simulasi ATM
saldo = 1000000
pin_terdaftar = "1234"

pin_masuk = "1234"
if pin_masuk == pin_terdaftar:
    tarik = 300000
    if saldo >= tarik:
        saldo -= tarik
        print(f"💵 Tarik tunai Rp {tarik:,} berhasil. Sisa saldo: Rp {saldo:,}")
    else:
        print("❌ Saldo tidak cukup!")
else:
    print("❌ PIN Salah!")""",
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
            "pseudo": """PROGRAM PinjamBuku
ALGORITMA:
    READ(id_anggota, id_buku)
    IF status_anggota != "AKTIF" THEN
        WRITE("Kartu Tidak Aktif")
    ELIF denda_tertunggak > 0 THEN
        WRITE("Harap Lunasi Denda Buku Sebelumnya")
    ELIF stok_buku < 1 THEN
        WRITE("Buku Sedang Kosong")
    ELSE
        stok_buku = stok_buku - 1
        tgl_kembali = TODAY + 7
        WRITE("Peminjaman Berhasil. Tanggal Kembali:", tgl_kembali)
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    S([MULAI]) --> In[/Input: id_siswa, id_buku/]
    In --> C1{"Kartu Aktif?"}
    C1 -- Tidak --> R1[/Tolak: Kartu Non-Aktif/]
    C1 -- Ya --> C2{"Ada Tunggakan Denda?"}
    C2 -- Ya --> R2[/Tolak: Harap Lunasi Denda/]
    C2 -- Tidak --> C3{"Stok Buku > 0?"}
    C3 -- Tidak --> R3[/Tolak: Buku Sedang Dipinjam/]
    C3 -- Ya --> OK["Update Database: Kurangi Stok<br>Set Batas Kembali 7 Hari"]
    OK --> Pr[/Cetak Bukti Peminjaman/]
    R1 --> E([SELESAI])
    R2 --> E
    R3 --> E
    Pr --> E""",
            "steps": "1. Pemeriksaan bertahap memastikan integritas operasional perpustakaan.",
            "python": """# Contoh 16: Peminjaman Buku
kartu_aktif = True
denda = 0
stok = 2

if not kartu_aktif:
    print("❌ Kartu non-aktif")
elif denda > 0:
    print(f"❌ Lunasi denda Rp {denda:,}")
elif stok <= 0:
    print("❌ Stok buku habis")
else:
    stok -= 1
    print("✅ Peminjaman berhasil! Batas kembali: 7 hari dari sekarang.")""",
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
            "pseudo": """PROGRAM RegistrasiAkun
ALGORITMA:
    READ(email, pass, konfirm)
    IF LENGTH(pass) < 8 THEN
        WRITE("Gagal: Password Minimal 8 Karakter")
    ELIF pass != konfirm THEN
        WRITE("Gagal: Konfirmasi Password Berbeda")
    ELIF CekEmailTerdaftar(email) == TRUE THEN
        WRITE("Gagal: Email Sudah Terdaftar")
    ELSE
        SimpanUserDatabase(email, Hash(pass))
        WRITE("Registrasi Berhasil! Silakan Cek Email.")
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    S([MULAI]) --> In[/Input: email, pass, konfirm/]
    In --> C1{"Panjang pass >= 8?"}
    C1 -- Tidak --> E1[/Error: Password Terlalu Pendek/]
    C1 -- Ya --> C2{"pass == konfirm?"}
    C2 -- Tidak --> E2[/Error: Password Tidak Cocok/]
    C2 -- Ya --> C3{"Email Sudah Terdaftar?"}
    C3 -- Ya --> E3[/Error: Email Sudah Ada/]
    C3 -- Tidak --> Save["Simpan ke Database<br>Kirim Email OTP"]
    Save --> Out[/Sukses: Akun Dibuat!/]
    E1 --> Fin([SELESAI])
    E2 --> Fin
    E3 --> Fin
    Out --> Fin""",
            "steps": "1. Sanitasi dan validasi data client-side.\n2. Verifikasi kesesuaian sandi.\n3. Pengecekan duplikasi pada basis data.",
            "python": """# Contoh 17: Registrasi Akun
email = "budi@sekolah.id"
password = "Password123"
konfirmasi = "Password123"
db_emails = ["ani@sekolah.id", "citra@sekolah.id"]

if len(password) < 8:
    print("❌ Password minimal 8 karakter!")
elif password != konfirmasi:
    print("❌ Konfirmasi password tidak cocok!")
elif email in db_emails:
    print("❌ Email sudah terdaftar!")
else:
    db_emails.append(email)
    print(f"✅ Registrasi sukses untuk {email}!")""",
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
            "pseudo": """PROGRAM HitungIPK
KAMUS:
    total_mutu, total_sks, IPK : float
ALGORITMA:
    total_mutu = 0; total_sks = 0
    FOR EACH matkul IN daftar_matkul DO
        bobot = KonversiBobot(matkul.nilai)
        total_mutu = total_mutu + (bobot * matkul.sks)
        total_sks = total_sks + matkul.sks
    ENDFOR
    IPK = total_mutu / total_sks
    WRITE("IPK Semester Anda:", IPK)
ENDPROGRAM""",
            "mermaid": """flowchart TD
    S([MULAI]) --> Init["total_mutu = 0<br>total_sks = 0<br>i = 1"]
    Init --> Check{"Masih ada mata kuliah?"}
    Check -- Ya --> Read[/Input: nilai_huruf, sks/]
    Read --> Calc["bobot = CekBobot(nilai_huruf)<br>total_mutu += bobot * sks<br>total_sks += sks"]
    Calc --> Check
    Check -- Tidak --> FinCalc["IPK = total_mutu / total_sks"]
    FinCalc --> Out[/Tampilkan: Total SKS, IPK/]
    Out --> E([SELESAI])""",
            "steps": "1. Akumulasi bobot kali sks untuk setiap mata kuliah.\n2. Pembagian akhir untuk memperoleh rasio mutu.",
            "python": """# Contoh 18: Perhitungan IPK
matkul = [
    {"nama": "Algoritma", "huruf": "A", "sks": 3},  # Bobot 4
    {"nama": "Matematika", "huruf": "B", "sks": 3}, # Bobot 3
    {"nama": "Basis Data", "huruf": "A", "sks": 4}  # Bobot 4
]

bobot_map = {"A": 4.0, "B": 3.0, "C": 2.0, "D": 1.0, "E": 0.0}
total_mutu = sum(bobot_map[m["huruf"]] * m["sks"] for m in matkul)
total_sks = sum(m["sks"] for m in matkul)
ipk = total_mutu / total_sks

print(f"Total SKS: {total_sks} | Total Mutu: {total_mutu} | IPK: {ipk:.2f}")""",
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
            "pseudo": """PROGRAM SistemPengaduan
ALGORITMA:
    SUBMIT(laporan)
    IF Validasi(laporan) == FALSE THEN
        UPDATE_STATUS(laporan, "DITOLAK")
    ELSE
        UPDATE_STATUS(laporan, "DIVERIFIKASI")
        DISPOSISI(laporan, dinas_tujuan)
        EXECUTE_PERBAIKAN()
        UPDATE_STATUS(laporan, "SELESAI")
        NOTIFIKASI_WARGA("Laporan Telah Diselesaikan")
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    S([MULAI]) --> Sub[/Warga Input Laporan Pengaduan/]
    Sub --> V{"Verifikasi Bukti Valid?"}
    V -- Tidak --> R[/Status: DITOLAK (Beri Alasan)/]
    V -- Ya --> T[Terbitkan No Tiket]
    T --> D[Disposisi ke Divisi Terkait]
    D --> Fix[Petugas Menindaklanjuti Lapangan]
    Fix --> Done[Upload Foto Bukti Perbaikan]
    Done --> Notif[/Status: SELESAI & Kirim Notif/]
    R --> E([SELESAI])
    Notif --> E""",
            "steps": "1. Alur administrasi memastikan akuntabilitas pelayanan publik secara transparan.",
            "python": """# Contoh 19: Pengaduan Layanan
tiket = {"id": "ADU-101", "judul": "AC Lab Rusak", "valid": True}

if not tiket["valid"]:
    tiket["status"] = "Ditolak"
else:
    tiket["status"] = "Dalam Pengerjaan"
    # Simulasi selesai dikerjakan teknisi
    tiket["status"] = "Selesai"

print(f"Tiket: {tiket['id']} | Judul: {tiket['judul']} | Status Akhir: {tiket['status']}")""",
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
            "pseudo": """PROGRAM ECommerceCheckout
ALGORITMA:
    CHECKOUT(cart)
    LOCK_STOCK(cart.items)
    GENERATE_PAYMENT_INVOICE()
    WAIT_PAYMENT(timeout = 24_HOURS)
    IF PaymentStatus == "LUNAS" THEN
        PACKING_ORDER()
        DISPATCH_TO_COURIER()
        SEND_TRACKING_NUMBER()
    ELSE
        RELEASE_STOCK(cart.items)
        UPDATE_STATUS("BATAL")
    ENDIF
ENDPROGRAM""",
            "mermaid": """flowchart TD
    S([MULAI]) --> In[/User Klik Checkout/]
    In --> Lock[Kunci Stok Barang di Gudang]
    Lock --> Pay{"Pembayaran Lunas dalam 24 Jam?"}
    Pay -- Tidak --> Exp[Kembalikan Stok ke Etalase]
    Exp --> Cancel[/Status: Pesanan Dibatalkan/]
    Pay -- Ya --> Pack[Gudang Mengemas Barang]
    Pack --> Resi[Cetak Label & No Resi Ekspedisi]
    Resi --> Ship[/Status: Paket Sedang Dikirim/]
    Cancel --> E([SELESAI])
    Ship --> E""",
            "steps": "1. Menjaga konsistensi inventori gudang (*inventory lock*).\n2. Memverifikasi konfirmasi pembayaran otomatis.\n3. Integrasi logistik ekspedisi.",
            "python": """# Contoh 20: Alur E-Commerce
stok_barang = 5
pembayaran_sukses = True

if stok_barang > 0:
    stok_barang -= 1  # Kunci stok
    if pembayaran_sukses:
        resi = "JNE-99887766"
        status = f"Paket Dikemas & Dikirim. Resi: {resi}"
    else:
        stok_barang += 1  # Rollback
        status = "Pembayaran Kadaluarsa, Pesanan Batal"
else:
    status = "Gagal: Stok Habis"

print(status)""",
            "simNormal": "Pembayaran lunas ➔ Paket dikirim dengan nomor resi pelacakan",
            "simAlt": "Pembayaran timeout 24 jam ➔ Stok dikembalikan otomatis"
        }
    ]

    return {
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
        "examples": examples
    }

print("content_bab7 ready")
