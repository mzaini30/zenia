---
layout: ../layouts/blog.astro
date: 2021-09-16
title: Pengenalan HTML, CSS, JS (materi ISB)
description: Sedikit mengulik tools nulis kita
---

## Dasar tampilan website

1. HTML
2. CSS
3. JS

## HTML

```html
<p>Ini paragraf</p>
<h1>Ini judul</h1>
<img src="https://kucing.com/anggora.jpg">
<br class="break">
<hr id="garis"> <!-- garis -->
```

## CSS

```css
* {
 color: blue;
 background: pink;
}
p {
 background: aqua;
}
#garis {
 display: none;
}
.break {
 height: 80px;
 width: 100%;
}
[type="submit"] {
 background: green;
}
```

## JS

```javascript
const nama = "Zen"
let usia = 30
usia = 17
console.log(nama)
console.log(`${nama} berumur ${usia} tahun`)
// Zen berumur 17 tahun
```

## Svelte + Windi

```html
<script>
 const judul = "Pengumuman Kelulusan"
 const lulus = ["Siesta", "Elaina", "Megumin"]
</script>

<h1>{judul}</h1>

<p>Nama-nama yang lulus:</p>
<ol>
 {#each lulus as x}
  <li>{x}</li>
 {/each}
</li>

<style>
 h1 {
  @apply text-center text-green-700
 }
 p {
  @apply text-red-600 italic underline
 }
</style>
```

## Penerapan HTML, CSS, JS

https://zenia.my.id/penghitung-kata-di-blogger

https://zenia.my.id/kode-untuk-resize-gambar