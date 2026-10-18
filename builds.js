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
    name: "Kita Berkembang",
    description:
      "A store builder for Indonesian small businesses: each store gets its own subdomain and orders land in WhatsApp. Prices, stock and vouchers are recomputed on the server, and CI runs 104 PHPUnit and 32 Playwright tests before every deploy.",
    url: "https://kitaberkembang.com",
    tags: ["WordPress Multisite", "PHP", "PHPUnit", "Playwright", "Docker"],
    status: "live",
    icon: "K",
  },
  {
    name: "tools",
    description:
      "My everyday file toolbox, free for everyone: 36 tools for PDF, Office, image, video, audio and QR files that run entirely in the browser, so files never leave the device.",
    repo: "https://github.com/chalidade/tools",
    url: "https://chalidade.github.io/tools/",
    tags: ["React", "TypeScript", "pdf.js", "qpdf-wasm", "WebCodecs"],
    status: "live",
    icon: "T",
  },
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
