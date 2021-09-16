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

```astro
---
const biodata = [
	{nama: "Zen", alamat: "Samarinda"},
	{nama: "Ummi Maryam", alamat: "Loa Bakung"},
	{nama: "Maryam", alamat: "Loa Bakung"}
]
---

<h1>List Biodata</h1>
{biodata.map(x => (
	<div class="kotak">
		Nama: {x.nama} <br>
		Alamat: {x.alamat}
	</div>
))}
```

Sangat familiar kan? Apalagi yang terbiasa pakai JSX pasti sudah nggak asing dengan penggunaan map() untuk ngeloop.

Kemudian, walaupun hasil dari Astro ini adalah pure static HTML, kita juga bisa menyisipkan JavaScript seperti biasanya dengan tag script. Terus, kita juga bisa **menyisipkan framework JavaScript ke dalamnya!** Wew. Kalau kata teman sih, ini namanya _island arsitektur_ yang artinya adalah sebuah tempat yang mampu menampung semuanya.

Misalnya aja kita ingin membuat fitur komentar dengan menggunakan Svelte, maka file Astronya cukup seperti ini:

```astro
---
import Komentar from "../components/komentar.svelte"
---

<h1>Ini Judul</h1>
<p>Ini isinya...</p>
<Komentar client:only="svelte"/>
```

Simpel banget kan ya?
