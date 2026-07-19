---
layout: base.njk
title: Tentang
description: Tentang Kamus Aceh — cara berkontribusi dan lisensi.
permalink: /about/
---

<div class="prose">

## Tentang Kamus Aceh

**Kamus Aceh** adalah kamus digital terbuka untuk Bahasa Aceh, dirancang untuk memudahkan dokumentasi dan pelestarian bahasa daerah Aceh. Setiap entri tersedia dalam tiga bahasa: Aceh, Indonesia, dan Inggris.

Proyek ini sepenuhnya berbasis teks biasa (YAML) yang disimpan di GitHub, sehingga siapa pun dapat berkontribusi melalui pull request.

## Cara berkontribusi

### Menambahkan entri baru

1. Fork repositori ini di GitHub.
2. Salin file `src/entries/_template.yaml` dengan nama baru, misalnya `src/entries/kata-baru.yaml`.
3. Isi semua kolom yang relevan.
4. Buat pull request ke branch `main`.

Selengkapnya lihat [CONTRIBUTING.md](https://github.com/YOUR_USERNAME/kamus-aceh/blob/main/CONTRIBUTING.md).

### Format entri (YAML)

```yaml
headword: "kata-aceh"
ipa: "/ˈka.ta/"
part_of_speech: "kb"    # kb=kata benda, kk=kata kerja, ks=kata sifat, dll.
definitions:
  - meaning_id: "Arti dalam Bahasa Indonesia"
    meaning_en: "Meaning in English"
examples:
  - aceh: "Kalimat dalam Bahasa Aceh."
    id: "Terjemahan Indonesia."
    en: "English translation."
source: "Nama sumber / referensi"
contributor: "Nama kontributor"
date_added: "2025-01-01"
```

## Lisensi

- **Konten** (entri kamus): [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Kode sumber** (template, CSS, konfigurasi): [MIT License](https://opensource.org/licenses/MIT)

## Teknologi

Situs ini dibangun dengan [Eleventy](https://www.11ty.dev/) (generator situs statis) dan pencarian ditenagai oleh [Pagefind](https://pagefind.app/), tanpa server atau basis data. Di-_host_ gratis di [GitHub Pages](https://pages.github.com/).

## Proyek terkait

- [Aceh Wiki History](https://kbpro8.github.io/acehwiki) — ensiklopedia sejarah Aceh berbasis Quartz.

</div>
