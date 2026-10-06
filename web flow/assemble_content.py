# assemble_content.py
import json
import os

from content_bab1_3 import get_bab1, get_bab2, get_bab3
from content_bab4_6 import get_bab4, get_bab5, get_bab6
from content_bab7 import get_bab7
from content_bab8_9 import get_bab8, get_bab9
from content_bab10_12 import get_bab10, get_bab11, get_bab12

course_data = {
    "metadata": {
        "title": "FLOWCHART: Konsep Dasar, Simbol, Jenis, Algoritma, dan Implementasi dalam Pemrograman",
        "author": "Instruktur Algoritma & Pemrograman - Modul Terpadu",
        "audience": "Pelajar, Mahasiswa, Pemula Informatika & Pengembang Perangkat Lunak",
        "version": "2.0.0-PRO",
        "license": "Creative Commons Attribution 4.0 International",
        "lastUpdated": "Oktober 2026"
    },
    "chapters": [
        get_bab1(),
        get_bab2(),
        get_bab3(),
        get_bab4(),
        get_bab5(),
        get_bab6(),
        get_bab7(),
        get_bab8(),
        get_bab9(),
        get_bab10(),
        get_bab11(),
        get_bab12()
    ]
}

target_file = os.path.join("js", "data-content.js")

with open(target_file, "w", encoding="utf-8") as f:
    f.write("/**\n * data-content.js\n * Modul Lengkap Pembelajaran Flowchart (BAB I - BAB XII)\n */\n\n")
    f.write("window.FLOWCHART_COURSE_DATA = ")
    json.dump(course_data, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Sukses merakit data pembelajaran ke {target_file}!")
print(f"Total Bab: {len(course_data['chapters'])}")
