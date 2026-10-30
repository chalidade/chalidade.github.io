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
    name: "jobfair.co.id",
    description:
      "A virtual job fair you walk through as a character: browse company stands, chat with recruiters, join career seminars and apply online from anywhere. Payments run on an append-only coin ledger, and movement is sent as intent so a crowd fits a free realtime tier.",
    repo: "https://github.com/chalidade/vwo",
    url: "https://jobfair.co.id",
    tags: ["Next.js", "TypeScript", "Postgres", "Supabase Realtime", "Xendit"],
    status: "live",
    icon: "J",
  },
  {
    name: "Kuliah Indo",
    description:
      "A learning platform for Indonesian university students, live for two years: paid seminars and trainings taught by industry mentors, with free modules and certificates after each class. 600+ registered students so far.",
    url: "https://kuliahindo.com",
    tags: ["Laravel", "PHP", "MySQL"],
    status: "live",
    icon: "K",
  },
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
    name: "Saling Jaga",
    description:
      "Walkie-talkie, chat and SOS between Android phones with no internet or signal, over Wi-Fi Direct. A custom binary protocol over TCP, tested with three hubs on real sockets, in a ~200 KB APK with no third-party libraries.",
    url: "https://saling-jaga.my.id/",
    tags: ["Android", "Java", "Wi-Fi Direct", "TCP", "GitHub Actions"],
    status: "live",
    icon: "S",
  },
  {
    name: "tools",
    description:
      "My everyday file toolbox, free for everyone: 38 tools for PDF, Office, image, video, audio and QR files that run entirely in the browser, so files never leave the device.",
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
