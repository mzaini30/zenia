---
layout: ../layouts/blog.astro
title: Mengenal atribut async dan defer pada tag script
description: Atribut pada JavaScript
date: 2021-09-16
---

Import JavaScript pada suatu halaman HTML itu sebenarnya blocking. Jadi, kode-kode yang berada di bawahnya `<script>` nggak berjalan jika `<script>` belum termuat secara sempurna.

Misalnya aja ada kode seperti ini:

```html
<script src="hello.js"></script>
<img src="kucing.jpg">
```

Pada kode di atas, maka script itu dimuat dulu secara sempurna, baru yang tag gambar bisa dimuat.

Misalnya aja tag script itu memuat 3 mb, maka ditunggu dulu sampai 3 mb itu dimuat, baru yang tag img itu dimuat.

Bagaimana solusinya?

Kita kasih atribut `async`:

```html
<script src="hello.js" async></script>
<img src="kucing.jpg">
```

Maka, scriptnya akan diload _bersamaan_ dengan tag-tag lainnya dimuat.

Kemudian, misalnya kita ingin script itu dimuat pertama kali tapi dijalankan jika semuanya sudah dimuat, bagaimana caranya? Kalau kita menggunakan kode yang di atas tadi kan, script dimuat pertama kali sekaligus dijalankan pertama kali.

```html
<script src="hello.js"></script>
<img src="kucing.jpg">
```

Jadi, `hello.js` kan dijalankan sebelum gambar `kucing.jpg` dimuat. Nah, bagaimana caranya supaya _dimuat_ pertama kali tapi _dijalankan_ terakhir kali?

Kita gunakan atribut `defer`. Jadinya seperti ini:

```html
<script src="hello.js" defer></script>
<img src="kucing.jpg">
```