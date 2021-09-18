---
layout: ../layouts/blog.astro
title: Mulai Menggunakan Astro
description: Mudah banget loh...
date: 2021-09-18
---

Astro adalah tools frontend yang menghasilkan 0% JavaScript. Jadi, Astro ini semacam SSG (static site generator) sebagaimana Jekyll, Gatsby, Hugo, dan tools SSG lainnya. Tapi, yang membedakannya dengan tools SSG lainnya adalah dia itu pas kita dev, pakai sintaks JavaScript. Tapi, pas waktu build, sintaks JavaScriptnya nggak ada. Contohnya seperti ini:

```astro
---
const nama = "Zen"
---

<h1>Halo {nama}</h1>
```

Maka, hasil buildnya adalah:

```html
<h1>Halo Zen</h1>
```

Beneran, cuma itu aja jadinya. Dia nggak ada tambahan sintaks script maupun head dan body, jika kita nggak menuliskannya. Jadi, semua sintaks JavaScript itu, akan dirender oleh server, sehingga pas waktu build, bener-bener halaman statis aja, tanpa kode script dan segala macamnya.

Terus, gimana kalau kita ingin menambahkan interaksi seperti pada Svelte, Vue, maupun React? Gampang! Tinggal kita import aja! Mindblowing banget kan? Contohnya seperti ini:

```astro
---
import Komentar from "./bagianKomentar.vue"
---

<Komentar client:only="vue"/>
```

Gimana kalau kita ingin masukkan kode Vue, React, dan Svelte secara bersamaan? Sangat bisa!

```astro
---
import Head from "./head.tsx"
import Body from "./body.vue"
import Footer from "./footer.svelte"
---

<Head client:only="react"/>
<Body client:only="vue"/>
<Footer client:only="svelte"/>
```

Seru kan? Jadi cocok nih buat tim besar yang memang favoritnya beda-beda. Kalau aku sih, sukanya Svelte. Tapi kan ada orang yang sukanya tu yang lain. Misalnya aja, banyak yang pakai React. Terus, kalau pengguna Laravel, biasanya suka pakai Vue. Cocok kan?

## Persiapan

Direkomendasikan sih pakai pnpm supaya pas waktu install package, cek dulu apakah sudah punya packagenya. Kalau sudah ada packagenya, dia ambil dari yang sudah ada di laptop. Kalau belum ada, baru download dari repositorinya NPM. Nah, untuk install pnpm, perintahnya adalah:

```bash
npm i -g pnpm
```

## Mulai Develop (Hello World Maksudnya. Hehehhe...)

Jadi, kita buat foldernya dulu. Misalnya nama foldernya itu `blog`:

```bash
mkdir blog
cd blog
```

Terus, kita init sebagai project Node JS:

```bash
pnpm init -y
```

Terus, kita install package astro:

```bash
pnpm i -D astro --shamefully-hoist
```

Tapi kalau misalnya install pakai npm, nggak perlu tambahan `--shamefully-hoist`. Itu khusus kalau kita install pakai pnpm.

Terus, ditunggu sampai selesai ya. Soalnya, dia ada 745 package untuk diinstall. Tapi, jangan khawatir, kalau pakai pnpm, dia lebih cepat daripada cuma pakai npm.

Lalu, kita edit `package.json`. Nah, awalnya kan gini:

```json
{
	"name": "blog",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"devDependencies": {
		"astro": "^0.20.7"
	}
}
```

Nah, bagian `scripts` itu, di bawahnya `"test"`, tambahkan ini:

```javascript
"dev": "astro dev",
"build": "astro build",
"preview": "astro preview"
```

Terus, untuk membuat halaman beranda, kita buat `index.astro` di `src/pages/`. Berarti kan, kita buat dulu ya halaman `src/pages/`:

```bash
mkdir src
cd src
mkdir pages
cd pages
touch index.astro
```

Terus, di `index.astro`, kita tulis kayak gini:

```astro
<h1>Hello world...</h1>
```

Udah jadi.

Eh, gitu aja tutorialnya?

Iya. Katanya pengen buat hello world kan?

Oke. Oke. Kita lanjut.

Nah, sekarang, kita coba buat variabel dan kita panggil. Jadinya kayak gini:

```astro
---
const nama = "World"
---

<h1>Hello {nama}</h1>
```

Kalau main loop, jadinya kayak gini:

```astro
---
const keluarga = ["Abi", "Ummi", "Maryam"]
---

<h1>Keluarga:</h1>
<ol>
	{keluarga.map(x => <li>{x}</li>)}
</ol>
```

Kalau mau main conditional, kayak gini:

```astro
---
const tampilMenu = true
---

{tampilMenu ? <p>Ini menu</p> : ""}
```

Simpel banget kan?

## Lebih dari Satu Halaman

Untuk membuat lebih dari satu halaman, ya tinggal buat aja. Contohnya kayak gini:

```
.
└── src
		└── pages
				├── about.astro
				├── index.astro
				├── member
				│		└── semua-member.astro
				└── tentang-kita.astro
```

## Dev

Untuk dev, di root tinggal jalankan:

```bash
pnpm dev
```

## Build

Untuk build, tinggal jalankan:

```bash
pnpm build
```

Maka, secara otomatis, akan terbentuk folder `dist/` yang berisi hasil build berupa file-file html.

## Dukungan Syntax Highlighting di Text Editor

Kalau dari komunitas sih, sudah ada extension VSCodenya. Kalau kamu pakai Sublime Text Editor atau Micro Editor, kunjungi aja:

<https://zenia.my.id/astro-syntax-highlighting-for-sublime-text-and-micro>

Oke, ini cuma pengantarnya aja dalam bahasa Indonesia. Untuk lebih lengkapnya, monggo langsung kunjungi <https://docs.astro.build>.
