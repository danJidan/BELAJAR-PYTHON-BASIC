"""
=========================================================
PR 1.3: KONVERSI SUHU MULTI-SATUAN DENGAN FUNGSI MODULAR
=========================================================
Materi yang dipelajari:
- Deklarasi dan pemanggilan fungsi (def nama_fungsi(parameter):)
- Parameter dan Nilai Kembalian (return value)
- Scope variabel (lokal vs global)
- String formatting tabel rapi (f-string alignment)
=========================================================
"""

def celsius_to_fahrenheit(celsius: float) -> float:
    """Mengubah suhu Celsius ke Fahrenheit. Rumus: (9/5 * C) + 32"""
    return (9 / 5 * celsius) + 32

def celsius_to_kelvin(celsius: float) -> float:
    """Mengubah suhu Celsius ke Kelvin. Rumus: C + 273.15"""
    return celsius + 273.15

def celsius_to_reamur(celsius: float) -> float:
    """Mengubah suhu Celsius ke Reamur. Rumus: 4/5 * C"""
    return 4 / 5 * celsius

def cetak_tabel_hasil(celsius: float):
    """Mencetak tabel hasil konversi suhu secara terstruktur."""
    f = celsius_to_fahrenheit(celsius)
    k = celsius_to_kelvin(celsius)
    r = celsius_to_reamur(celsius)

    print("\n" + "=" * 45)
    print(f"🌡️  HASIL KONVERSI DARI SUHU ASAL: {celsius:.2f} °C")
    print("=" * 45)
    print(f"| {'Satuan Suhu':<20} | {'Nilai Derajat':>18} |")
    print("-" * 45)
    print(f"| {'Celsius (°C)':<20} | {celsius:>18.2f} |")
    print(f"| {'Fahrenheit (°F)':<20} | {f:>18.2f} |")
    print(f"| {'Kelvin (K)':<20} | {k:>18.2f} |")
    print(f"| {'Reamur (°R)':<20} | {r:>18.2f} |")
    print("=" * 45)

def main():
    print("=" * 45)
    print("      🌡️ PROGRAM KONVERSI SUHU MODULAR      ")
    print("=" * 45)

    while True:
        try:
            raw_input = input("\nMasukkan nilai suhu dalam Celsius (°C) [atau ketik 'q' untuk keluar]: ").strip()
            if raw_input.lower() == 'q':
                print("👋 Terima kasih telah menggunakan konverter suhu!")
                break
            
            celsius = float(raw_input)
            cetak_tabel_hasil(celsius)
        except ValueError:
            print("⚠️ Input tidak valid! Harap masukkan angka atau 'q'.")

if __name__ == "__main__":
    main()
