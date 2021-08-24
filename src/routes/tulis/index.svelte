<svelte:head>
	<title>Tulis</title>
	<Meta slug='tulis' judul='Tulis' cuplikan='Tools untuk menyimpan tulisan'></Meta>
</svelte:head>

<script>
	import Meta from '$lib/Meta.svelte'
	import {sql, teks} from './api'
	import {stringify} from 'qs'
	import {headers} from '$lib/headers'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'
	import randomatic from 'randomatic'

	let teksnya
	let idnya

	async function simpan(){
		idnya = randomatic('a0', 4)

		let cekDulu = await fetch(sql, {
			method: 'post',
			headers,
			body: stringify({
				id: teks,
				kunci: 'cek',
				idnya
			})
		})
		cekDulu = await cekDulu.json()

		if (cekDulu[0].banyak > 0){
			simpan()
		} else {
			let mulaiSimpan = await fetch(sql, {
				method: 'post',
				headers,
				body: stringify({
					id: teks,
					kunci: 'tambah',
					teks: teksnya,
					idnya
				})
			})
			if (mulaiSimpan) {
				browser && goto(`/tulis/${idnya}`)
			}
		}
	}
</script>

<form action="" on:submit|preventDefault={simpan}>
	<textarea placeholder='Masukkan teks yang mau disimpan' name="" id="" cols="30" bind:value={teksnya} rows="10"></textarea>
	<input type="submit" value='Simpan' class='tombol'/>
</form>

<style>
	form {
		@apply p-5 bg-gray-200 h-screen
	}
	textarea, input {
		@apply block border border-black p-3 bg-white;
		box-shadow: 10px 10px 0 0 black;
	}
	textarea {
		@apply w-full
	}
	input {
		@apply mt-6 select-none cursor-pointer inline-block bg-white focus:bg-gray-200;
	}
</style>