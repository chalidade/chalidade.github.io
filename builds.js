// =====================================================================
//  BUILDS — repo & tools yang tampil di section "Builds" (index.html).
//
//  Tambah satu objek per repo/tool, urutan di sini = urutan di halaman.
//  Semua field opsional kecuali `name`:
//
//    name         Nama repo / tool.
//    description  Satu–dua kalimat: apa fungsinya.
//    repo         Link ke source (GitHub, dsb.) → tombol "Source".
//    url          Link demo / situs live      → tombol "Live".
//    tags         Stack / kata kunci, mis. ["Next.js", "CLI"].
//    status       "live" | "wip" | "archived"   → badge di pojok kartu.
//    icon         1–2 karakter / emoji untuk ikon; default huruf pertama nama.
//
//  Selesai edit → commit & push; GitHub Pages update dalam ±1 menit.
// =====================================================================

window.BUILDS = [
  {
    name: "weeknoo",
    description:
      "A website workspace that turns a prompt into a deployed site, an Android APK or a WordPress block theme.",
    repo: "https://github.com/chalidade/weeknoo",
    url: "https://chalidade.github.io/weeknoo/",
    tags: ["React", "Vite", "Tailwind", "Capacitor", "Claude Code"],
    status: "live",
    icon: "W",
  },
]
