"""
=========================================================
PR 1.1: KALKULATOR ARITMATIKA INTERAKTIF CLI
=========================================================
Materi yang dipelajari:
- Input & Output (input(), print())
- Percabangan (if, elif, else)
- Perulangan (while True, break, continue)
- Penanganan Pembagian Nol (ZeroDivision)
=========================================================
"""

def tampilkan_menu():
    print("\n" + "=" * 40)
    print("       🧮 KALKULATOR ARITMATIKA CLI      ")
    print("=" * 40)
    print("1. Penjumlahan (+)")
    print("2. Pengurangan (-)")
    print("3. Perkalian (*)")
    print("4. Pembagian (/)")
    print("5. Modulo / Sisa Bagi (%)")
    print("6. Pangkat (**)")
    print("7. Keluar")
    print("-" * 40)

def main():
    while True:
        tampilkan_menu()
        pilihan = input("Pilih menu operasi (1-7): ").strip()

        # Cek jika user ingin keluar
        if pilihan == '7':
            print("\n👋 Terima kasih sudah menggunakan kalkulator! Sampai jumpa.")
            break

        # Validasi pilihan menu valid atau tidak
        if pilihan not in ['1', '2', '3', '4', '5', '6']:
            print("⚠️ Pilihan tidak valid! Silakan masukkan angka 1 sampai 7.")
            continue

        # Meminta input angka dengan validasi agar tidak error jika diisi huruf
        try:
            angka1 = float(input("Masukkan angka pertama : "))
            angka2 = float(input("Masukkan angka kedua   : "))
        except ValueError:
            print("⚠️ Error: Harap masukkan angka yang valid!")
            continue

        # Proses kalkulasi berdasarkan menu yang dipilih
        print("\n--- HASIL PERHITUNGAN ---")
        if pilihan == '1':
            hasil = angka1 + angka2
            print(f"✅ {angka1} + {angka2} = {hasil}")
        elif pilihan == '2':
            hasil = angka1 - angka2
            print(f"✅ {angka1} - {angka2} = {hasil}")
        elif pilihan == '3':
            hasil = angka1 * angka2
            print(f"✅ {angka1} * {angka2} = {hasil}")
        elif pilihan == '4':
            # Validasi pembagian dengan nol
            if angka2 == 0:
                print("❌ Error: Tidak dapat membagi dengan angka 0 (ZeroDivisionError)!")
            else:
                hasil = angka1 / angka2
                print(f"✅ {angka1} / {angka2} = {hasil:.4f}")
        elif pilihan == '5':
            # Validasi modulo dengan nol
            if angka2 == 0:
                print("❌ Error: Operasi modulo dengan 0 tidak diperbolehkan!")
            else:
                hasil = angka1 % angka2
                print(f"✅ {angka1} % {angka2} = {hasil}")
        elif pilihan == '6':
            hasil = angka1 ** angka2
            print(f"✅ {angka1} ^ {angka2} = {hasil}")

        # Jeda sebelum menu berikutnya
        input("\nTekan [Enter] untuk melanjutkan...")

if __name__ == "__main__":
    main()
