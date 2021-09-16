---
layout: ../layouts/blog.astro
title: Ada Apa dengan TypeScript?
description: Bener nggak sih kalau TypeScript itu membantu?
date: 2021-09-16
---

Developer saat ini banyak yang mendewakan TypeScript. Ada apa?

Tentu karena TypeScript ini type checker. Jadi, kalau misalnya typenya harusnya string, tapi kita nulisnya number, dia bakalan kena error. Contohnya seperti di bawah ini:

```typescript
let nama: string = 'Zen'
nama = 17
```

Pasti akan muncul error karena harusnya tu nama pakai type string, bukan number.

Akan tetapi, muncul masalah yaitu kita jadi ketergantungan dengan TypeScript. Setiap kita ngoding pakai TypeScript, ekstensi filenya harus `*.ts`. Lalu, file dengan ekstensi `*.ts` itu nggak bisa langsung diinterpretasikan oleh Node JS. Kalau diinterpretasikan oleh Deno kan bisa. Cuma ya, environmentnya kan berbeda antara Node JS dengan Deno. Kalau Node JS itu import dari `node_modules`, kalau Deno langsung import dari link.

> File TypeScript nggak bisa langsung diinterpretasi.

Terus, apa solusinya? Kalau ingin langsung dijalankan ya pakai format JavaScript aja:

```javascript
let nama = 'Zen'
nama = 17
```

Tapi, jadinya kan nggak ada muncul errornya tuh. Maunya kan kita tuh ada fitur type checking juga. 

Jadi, kita pakai JSDoc:

```javascript
/**
 * @describe Nama harus pakai string ya....
 * @param {string} nama Namanya pakai string, nggak boleh pakai type lain*/

let nama = 'Zen'
nama = 17
```

Terus, untuk bisa memunculkan errornya, tetap pakai extension atau package TypeScript di editor kesayanganmu. Soalnya, TypeScript juga bisa mengecek type yang dideklarasikan oleh JSDoc.