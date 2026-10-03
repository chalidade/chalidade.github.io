# chalidade.github.io

Portfolio Chalid Ade Rahman, tayang di https://chalidade.github.io/.

HTML statis tanpa build step — isinya diambil dari CV (v3).

- `index.html` — seluruh halaman (experience, work, skills, dst).
- `builds.js` — daftar repo / tools di section **Builds**. Tambah satu objek
  per repo (`name`, `description`, `repo`, `url`, `tags`, `status`, `icon`);
  formatnya dijelaskan di kepala file.
- `log/index.html` — halaman **Devlog** (https://chalidade.github.io/log/). Isinya
  dibaca langsung dari repo [chalidade/devlog](https://github.com/chalidade/devlog)
  saat halaman dibuka: `entries/**/YYYY-MM-DD-judul.md` jadi linimasa (terbaru di
  atas), `notes/**/*.md` jadi kartu catatan. Cukup push file `.md` baru ke devlog —
  repo ini tidak perlu diubah.

Edit, commit, push — GitHub Pages memperbaruinya dalam ±1 menit.
Situs-situs weeknoo tetap di https://chalidade.github.io/weeknoo/ (repo terpisah).

Social card (`og.png`, 1200×630) dibuat dari `_og/og.html` — folder berawalan `_`
tidak ikut dipublikasikan. Untuk membuat ulang:
`google-chrome --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=4000 --screenshot=og.png "file://$PWD/_og/og.html"`
