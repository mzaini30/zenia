---
layout: ../layouts/blog.astro
date: 2021-09-16
title: Alasan mengapa Svelte itu development tools masa depan
description: Framework JS baru lagi?
---

Svelte itu compiler, sama seperti Solid. Vue itu framework. React itu library. Itu sih perbedaan masing-masing "framework" JavaScript jika ingin dicari perbedaannya. Tapi, kesemuanya itu memiliki satu output yang sama: JavaScript. Entah dia nantinya berbentuk SPA yang bisa dihosting di manapun, atau yang berbentuk SSR yang memerlukan Node JS maupun serverless function untuk menjalankannya. 

Nah, kali ini kita bahas Svelte.

## Hanya seperti HTML, CSS, dan JS

Seperti inilah kode Svelte itu:

```html
<p>Hello {nama}</p>

<script>
 const nama = "world"
</script>

<style>
 p {
  color: blue;
 }
</style>
```

Simpel banget kan? Bahkan, mirip banget dengan kode HTML biasanya. Di satu file Svelte, terdiri dari tag-tag HTML, tag style, dan tag script. Bener-bener dah kayak di rumah rasanya kalau pakai Svelte.

## Binding simpel

Misal kita memiliki tag input:

```html
<input>
```

Terus, kita beri value:

```html
<input value="kucing">
```

Untuk memberikan dynamic value, kita gunakan tag script:

```html
<input value={nama}>

<script>
 const nama = "kucing"
</script>
```

Nah, untuk memberikan value kepada tag input. Tapi, ketika kita mengubah isi dari inputnya, variabel nama nggak berubah. Untuk bisa mengubah variabel nama, kita gunakan `bind:`. Maka, jadinya seperti ini:

```html
<input bind:value={nama}>

<script>
 let nama = "kucing"
</script>
```

Maka, berlakulah konsep two way binding.

Bind ini nggak cuma berlaku pada input tapi berlaku untuk semua tag. Simpel dan powerful kan? Kalau misalnya di Vue, yang namanya v-model itu ya cuma untuk input dan textarea, nggak bisa untuk yang lain. Kalau di Svelte, bind bisa juga untuk component:

```html
<Component bind:data={datanya}/>
```

Walaupun memang kalau katanya Ryan yang membuat Solid, bahwasanya two way binding itu menurunkan performa aplikasi, tapi menurutku nggak masalah sih. Yang penting kan project bisa selesai dengan cepat.

## Bind group

Ini sih yang membuat aku suka banget sama Svelte: bind group!

Jadi, misalnya ada radio atau checkbox, kita bisa gunakan bind group untuk menghubungkannya dengan variabel.

## Truly reactive

## Global state (store) yang sangat mudah

Untuk menggunakan store, pertama kita buat satu file JS (misalnya `store.js`) untuk menampung datanya. Isinya:

```javascript
import {writable} from "svelte/store"
export const nama = writable("world")
```

Nah, untuk mengubah storenya, kodenya hanya seperti ini:

```javascript
import {nama} from "./store"
$nama = "kucing"
```

Dan untuk menampilkannya, hanya seperti ini:

```javascript
import {nama} from "./store"
console.log($nama)
```

Mudah banget kan?

## Style scoped

Misal kita ada `Nested.svelte` yang berisi seperti ini:

```html
<p>Aku Nested</p>

<style>
 p {
  color: red;
 }
</style>
```

Lalu, di `App.svelte`:

```html
<script>
 import Nested from "./Nested.svelte"
</script>

<p>Aku Parent</p>
<Nested/>

<style>
 p {
  color: green;
 }
</style>
```

Maka, jadinya akan seperti ini:

Aku Parent (warna hijau)
Aku Nested (warna merah)

Jadi, walaupun di `App.svelte` dan `Nested.svelte` sama-sama memberikan style untuk tag p, tapi masing-masing nggak saling mempengaruhi. Jadi, dia scoped gitu.

## Menjawab komentar pembaca

> fungsionalitas bagus tp kodenya gk gk bersih dan tampilan jelek

Masih OTW blognya. Kan masih baru.

> konten" blognya jg kurang teori

Aku suka langsung praktek.

> Mantap nih, semoga berkembang terus blognya bermanfaat ;) jd kode-kode JavaScript ini jg banyak jenisnya gt y?

Kalau di frontend, yang terkenal ada Vue, React, dan Svelte. Nah, di sini aku menceritakan tentang betapa sederhananya dan betapa powerfulnya Svelte. Kodenya pun hanya seperti HTML, CSS, dan JS. Kalau React kan semuanya serba JS.

> eh iya, kode Svelte sekilas mirip kode html biasa. Baru tahu aku, ya kali ngoprek kode html blog aja mesti minta tolong suami karena takut rusak. mana paham kode2an svelte.. wkwk
keren sih, langsung praktek jadi nggak bertele2 kebanyakan teori. eh

Iya Mbak. Makanya lebih mudah mempelajari Svelte daripada framework JS lainnya.

> svelte tapi diki ya komunitasnya. apakah mereka masih aktif

Yang paling aktif kayaknya di Twitter sih. Yang Svelte Society itu. Di Discord juga aktif. Cuma memang kalau UI Component, lebih rame React. Tapi kan sekarang ada Windi...

> Buat yang belajar Java Script, pastinya akan sangat bermanfaat postingan ini.
Svelte ini lebih bagus ya dibandingkan compiler lain?

Susah sih kalau dibilang lebih bagus. Kalau lebih sederhana sih, iya.

> Zen .. meski kamu bilang simpel sekali, entah karena saya emak-emak saya juga belum bisa paham Zen.. rasanya Amazed loh kalo ngelihat orang yang melek di bidang ini Zen

Simpel kalau sudah familiar dengan HTML & CSS sih. Hehehhehe

> Trus gimana bang? Meskipun lebih sederhana, tapi ini rumit menurutku wkwkwk
Btw ini pakai font apa ya bang? Bagus eh

Untuk font, aku pakai Poppins. Ada kok di Google Fonts. Tinggal copas kodenya aja.

> Svelte ini digunakan juga kalau membuat ebook bukan ya? Ada javascript nya juga ya, diberi dynamic value juga wuihh jadi nambah deh perbendaharaan kosa kata saya mengenai si Svelte ini

Nggak tau sih Mbak kalau ebook. Baru denger juga malah kalau bisa untuk buat ebook. Yang jelas sih, Svelte itu kan macam HTML, CSS, JS biasa, jadi ya fokus untuk membuat tampilan website.

## Beberapa artikel tentang Svelte

1. https://dev.to/hanna/why-svelte-is-revolutionary-415e
2. https://dev.to/hanna/riotjs-vs-svelte-35h4