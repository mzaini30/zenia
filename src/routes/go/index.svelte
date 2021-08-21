<script>
	import randomatic from 'randomatic'
	import {stringify} from 'qs'
	import {sql, link} from './api'
	import {browser} from '$app/env'
	import {goto} from '$app/navigation'
	import {headers} from '$lib/headers'
	import Meta from '$lib/Meta.svelte'

	let tujuan
	let singkatan

	async function buat(){
		singkatan = randomatic('a0', 4)

		let data = await fetch(sql, {
			method: 'post',
			headers,
			body: stringify({
				id: link,
				kunci: 'cek',
				singkatan
			})
		})
		data = await data.json()

		if (data[0].banyak > 0) {
			buat()
		} else {
			let buatBaru = await fetch(sql, {
				method: 'post',
				headers,
				body: stringify({
					id: link,
					kunci: 'tambah',
					tujuan, singkatan
				})
			})

			if (buatBaru) {
				browser && goto(`/go/preview/${singkatan}`, {replaceState: true})
			}
		}
	}
</script>

<style>
	form {
		@apply p-5
	}
	input {
		@apply w-full block border border-black p-3;
		box-shadow: 10px 10px 0 0 black;
	}
</style>

<svelte:head>
	<title>Go</title>
	<Meta judul='Go' cuplikan='Penyingkat URL' slug='go'></Meta>
</svelte:head>

<form action="" on:submit|preventDefault={buat}>
	<p>Masukkan link:</p>
	<input type="url" bind:value={tujuan} required>
</form>