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
    name: "Saling Jaga",
    description:
      "Calls, walkie-talkie, chat, an offline map, roll call and SOS between phones with no internet or signal, over Wi-Fi Direct and Bluetooth; iPhones and laptops join through the browser of an Android host. Every link is encrypted (ECDH P-256, AES-256-GCM), the APK is ~760 KB with no third-party libraries, and it is in closed testing on Google Play. 4,000+ APK downloads in its first week; six Threads posts about it passed 590,000 views.",
    url: "https://saling-jaga.com/",
    tags: ["Android", "Java", "Wi-Fi Direct", "Bluetooth", "Encryption"],
    status: "live",
    icon: "S",
  },
  {
    name: "jobfair.co.id",
    description:
      "A virtual job fair you walk through as a character: browse company stands, chat with recruiters, join career seminars and apply online from anywhere. Payments run on an append-only coin ledger, and movement is sent as intent so a crowd fits a free realtime tier.",
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
    name: "toowl",
    description:
      "toowl, my everyday toolbox, free for everyone: 110+ tools for PDF, Office, image, video, audio, music, QR, developer work, everyday sums and emergencies. Everything runs in the browser, so files never leave the device; it installs as an app, speaks Indonesian and English, and tools are also published on npm under @chalidade.",
    repo: "https://github.com/chalidade/tools",
    url: "https://toowl.my.id/",
    tags: ["React", "TypeScript", "WebAssembly", "WebCodecs", "npm"],
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
