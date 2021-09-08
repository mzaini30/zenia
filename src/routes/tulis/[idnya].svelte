<svelte:head>
	<title>Tampil {idnya}</title>
	<Meta judul='Tampil {idnya}' cuplikan='Menampilkan tulisan yang disimpan' slug='tulis/{idnya}'></Meta>
</svelte:head>

<script context='module'>
	import {headers} from '$lib/headers'
	import {sql, teks} from './api'
	import {stringify} from 'qs'

	export async function load({fetch, page}){
		let teksnya = await fetch(sql, {
			method: 'post',
			headers,
			body: stringify({
				id: teks,
				kunci: 'ambil',
				idnya: page.params.idnya
			})
		})
		teksnya = await teksnya.json()

		return {
			props: {
				idnya: page.params.idnya,
				teksnya: teksnya[0].teks
			}
		}
	}
</script>

<script>
	import Meta from '$lib/Meta.svelte'
	export let idnya
	export let teksnya
</script>

<div class="isi">
	<a href="/tulis" sveltekit:prefetch class="tombol">Tulis baru</a>
	<p>{teksnya.trim()}</p> 
</div>

<style>
	.isi {
		@apply p-3
	}
	.tombol {
		@apply mb-3 inline-block no-underline text-white bg-green-500 rounded bordered py-2 px-5 select-none
	}
	p {
		@apply whitespace-pre-wrap
	}
</style>