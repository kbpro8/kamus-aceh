# Cara Berkontribusi ke Kamus Aceh

Terima kasih atas minat Anda berkontribusi! Setiap entri baru sangat berharga untuk pelestarian Bahasa Aceh.

## Cara menambahkan entri baru

### Prasyarat

- Akun GitHub
- Pengetahuan dasar Git dan YAML (atau gunakan editor GitHub langsung)

### Langkah-langkah

1. **Fork** repositori ini ke akun GitHub Anda.
2. Buat branch baru: `git checkout -b tambah-kata-baru`.
3. **Salin** `src/entries/_template.yaml` menjadi `src/entries/<kata>.yaml`.
   - Nama file harus berupa slug (huruf kecil, tanda hubung untuk spasi), misalnya `src/entries/ie-paya.yaml`.
4. **Isi** kolom-kolom yang tersedia (lihat format di bawah).
5. Commit: `git commit -m "Tambah entri: <kata>"`.
6. Push ke fork Anda dan buat **Pull Request** ke branch `main`.

### Format file YAML

```yaml
headword: "kata-aceh"           # wajib
ipa: "/transkripsi-ipa/"        # opsional tapi dianjurkan
part_of_speech: "kb"            # wajib; lihat daftar singkatan di bawah
definitions:
  - meaning_id: "Arti Indonesia"
    meaning_en: "English meaning"
examples:
  - aceh: "Kalimat dalam Bahasa Aceh."
    id: "Terjemahan Indonesia."
    en: "English translation."
etymology: "Asal usul kata"     # opsional
related_words: ["slug-lain"]    # opsional; daftar slug file lain
dialect_notes: "..."            # opsional
source: "Nama buku / kamus"     # wajib
date_added: "YYYY-MM-DD"       # wajib
contributor: "Nama Anda"        # wajib
```

### Singkatan part_of_speech

| Kode | Keterangan |
|------|------------|
| `kb` | kata benda (noun) |
| `kk` | kata kerja (verb) |
| `ks` | kata sifat (adjective) |
| `keterangan` | kata keterangan (adverb) |
| `partikel` | partikel |
| `kata ganti` | kata ganti (pronoun) |
| `seruan` | kata seru / interjection |
| `bilangan` | kata bilangan (numeral) |

## Pedoman kualitas

- Pastikan ejaan headword sesuai dengan sistem ejaan Bahasa Aceh yang berlaku atau sumber yang dapat diverifikasi.
- Sertakan minimal satu contoh kalimat lengkap.
- Sebutkan sumber atau referensi.
- Untuk kata pinjaman, sertakan informasi etimologi jika memungkinkan.

## Masa depan: Decap CMS (catatan)

Ke depannya kami akan menambahkan [Decap CMS](https://decapcms.org/) untuk memungkinkan kontribusi melalui antarmuka formulir tanpa perlu memahami Git atau YAML. Fitur ini belum tersedia di rilis ini.

## Pertanyaan?

Buka [GitHub Issue](https://github.com/kbpro8/kamus-aceh/issues) untuk pertanyaan atau diskusi.
