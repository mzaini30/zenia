---
layout: ../layouts/blog.astro
title: Pengalaman Menggunakan Astro
description: Ini pengalaman yang aku dapatkan setelah migrasi blog ini dari SvelteKit ke Astro
date: 2021-09-16
---

Astro itu adalah sebuah Static Site Generator yang menggabungkan dua kenyamanan dalam develop website:

- Dalam mode dev, dia dapat menggunakan berbagai library JavaScript seperti framework-framework JavaScript pada umumnya.
- Dalam mode build, dia menghapus semua JavaScript di dalam halaman sehingga bisa menghasilkan website yang sangat cepat!

Mantap banget kan, dua keunggulan dari masing-masing paradigma. Yang pertama adalah paradigma framework JavaScript di mana kita bisa menggunakan berbagai library JavaScript dengan mudah tapi biasanya kita terkendala dengan hasil output yang masih menghasilkan JavaScript. Kan kita pengennya itu murni HTML dan CSS aja supaya website kita ngebut. Jadi, itu kekurangan framework JS.

Kemudian, kita mencoba pakai SSG (Static Site Generator) seperti Hugo, Jekyll, Pelican, dll. Namun, ternyata pas mode dev, SSG itu menggunakan bahasa lain, bukan JavaScript, sehingga kita harus mempelajari bahasa baru, dan itu terkadang membuat nggak nyaman.

So, akhirnya datangnya Astro yang menggabungkan kedua keunggulan itu.

Contoh sintaks Astro:

