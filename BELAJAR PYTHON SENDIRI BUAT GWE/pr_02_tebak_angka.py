"""
=========================================================
PR 1.2: GAME TEBAK ANGKA PINTAR (HIGH-LOW NUMBER GUESSING)
=========================================================
Materi yang dipelajari:
- Modul standar Python (`import random`)
- Perulangan (for / while loop)
- Logika percabangan kondisi (if, elif, else)
- Sistem scoring & pembatasan nyawa
=========================================================
"""

import random

def main():
    print("=" * 50)
    print("       🎯 GAME TEBAK ANGKA PINTAR (1 - 100)      ")
    print("=" * 50)
    print("Aturan Main:")
    print("1. Komputer sudah memilih satu angka rahasia antara 1 s/d 100.")
    print("2. Kamu punya 7 kali kesempatan menebak.")
    print("3. Semakin sedikit tebakanmu, semakin tinggi skormu!\n")

    # Generate angka acak 1 sampai 100
    angka_rahasia = random.randint(1, 100)
    total_kesempatan = 7
    menang = False

    for tebakan_ke in range(1, total_kesempatan + 1):
        sisa_nyawa = total_kesempatan - tebakan_ke + 1
        print(f"--- Percobaan ke-{tebakan_ke} dari {total_kesempatan} (Sisa Kesempatan: {sisa_nyawa}) ---")

        # Validasi input angka
        try:
            tebakan = int(input("Tebakan kamu: "))
        except ValueError:
            print("⚠️ Input salah! Masukkan bilangan bulat antara 1 s/d 100.\n")
            continue

        # Cek batas angka
        if tebakan < 1 or tebakan > 100:
            print("⚠️ Harap tebak angka dalam rentang 1 - 100 saja!\n")
            continue

        # Evaluasi tebakan
        if tebakan == angka_rahasia:
            skor = sisa_nyawa * 100
            print("\n" + "🎉" * 15)
            print(f"🏆 SELAMAT! Tebakanmu BENAR: {angka_rahasia}!")
            print(f"Kamu berhasil menebak dalam {tebakan_ke} kali percobaan.")
            print(f"⭐ Skor Akhir Kamu: {skor} Poin")
            print("🎉" * 15)
            menang = True
            break
        elif tebakan < angka_rahasia:
            print("🔻 Terlalu RENDAH! Coba angka yang lebih besar.\n")
        else:
            print("🔺 Terlalu TINGGI! Coba angka yang lebih kecil.\n")

    # Jika kesempatan habis dan belum menang
    if not menang:
        print("\n" + "💀" * 15)
        print("GAME OVER! Kesempatan kamu sudah habis.")
        print(f"Angka rahasia yang benar adalah: {angka_rahasia}")
        print("💀" * 15)

if __name__ == "__main__":
    main()
