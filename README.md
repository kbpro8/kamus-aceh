# Kamus Aceh

Kamus digital terbuka untuk Bahasa Aceh — Indonesia — Inggris.
Dibangun dengan [Eleventy](https://www.11ty.dev/) dan dihosting gratis di GitHub Pages.

**Situs langsung:** `https://YOUR_USERNAME.github.io/kamus-aceh/`

---

## Menjalankan secara lokal

```bash
git clone https://github.com/YOUR_USERNAME/kamus-aceh.git
cd kamus-aceh
npm install
npm run dev        # http://localhost:8080/kamus-aceh/
```

Untuk build produksi (termasuk indeks pencarian Pagefind):

```bash
npm run build      # output ke _site/
```

## Menambahkan entri kamus

Setiap entri adalah file YAML di `src/entries/`. Salin `src/entries/_template.yaml`, isi kolom yang relevan, dan buat pull request. Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk panduan lengkap.

## Struktur proyek

```
kamus-aceh/
├── src/
│   ├── entries/          # satu .yaml per headword
│   ├── _includes/        # template Nunjucks
│   ├── assets/css/       # stylesheet
│   ├── index.njk         # halaman beranda
│   ├── browse.njk        # indeks A–Z
│   └── about.md          # halaman tentang
├── eleventy.config.js
├── .github/workflows/deploy.yml
└── package.json
```

## Deployment (GitHub Actions)

Setiap push ke `main` memicu workflow di `.github/workflows/deploy.yml` yang:
1. Build situs dengan Eleventy
2. Build indeks pencarian Pagefind
3. Deploy output `_site/` ke GitHub Pages

**Pengaturan pertama kali di GitHub:**
1. Buat repositori baru bernama `kamus-aceh` di GitHub.
2. Push kode ini ke repositori tersebut.
3. Buka **Settings → Pages → Source** dan pilih **GitHub Actions**.
4. Setelah workflow pertama selesai, situs tersedia di `https://<username>.github.io/kamus-aceh/`.

## Lisensi

- **Konten** (entri kamus): [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Kode sumber**: [MIT License](LICENSE)

## Proyek terkait

- [Aceh Wiki History](https://kbpro8.github.io/acehwiki) — ensiklopedia sejarah Aceh
