<style>
	h1 {
		font-family: 'MonteCarlo', cursive;
		@apply text-7xl text-center py-7
	}
	input {
		@apply w-full
	}
	.kotak, .cari {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 my-8 mt-0 border border-black p-3
	}
	.kotak h2 {
		@apply text-2xl pb-2 pt-1
	}
	.melayang, .melayang-kiri {
		@apply fixed bottom-0 p-3 text-green-500
	}
	.melayang {
		@apply right-0
	}
	.melayang-kiri {
		@apply left-0 cursor-pointer select-none
	}
</style>

<script context='module'>
	import {sql, tulisan} from './api'
	import {headers} from '$lib/headers'

	export async function load({fetch}){
		const datanya = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=list-beranda`
		})
		return {
			props: {
				semuaTulisan: await datanya.json()
			}
		}
	}
</script>

<script>
	import Meta from '$lib/Meta.svelte'
	import {browser} from '$app/env'
	
	export let semuaTulisan

	let tempSemuaTulisan = [...semuaTulisan]
	let dicari
	const ukuranIconTulis = 3

	if (browser && localStorage.yangDicari) {
		dicari = localStorage.yangDicari
	}

	function filterTulisan(){
		tempSemuaTulisan = [...semuaTulisan]

		if (dicari) {
			let dicariKecil = dicari.toLowerCase()

			tempSemuaTulisan = tempSemuaTulisan.filter(x => x.judul.toLowerCase().includes(dicariKecil) || x.cuplikan.toLowerCase().includes(dicariKecil))
		} else {
			tempSemuaTulisan = [...semuaTulisan]			
		}

		console.log(dicari)

		if (browser) {
			localStorage.yangDicari = dicari
		}
	}

	$: dicari && filterTulisan()

	function keAtas(){
		browser && window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}
</script>

<svelte:head>
	<title>Zen</title>
	<Meta slug='' cuplikan='Blog yang membahas tentang frontend developing dan psikologi' judul='Zen'></Meta>
</svelte:head>

<h1>Zen</h1>

<div class="cari">
	<input type="text" placeholder="Cari apa?" on:keyup={filterTulisan} bind:value={dicari}>
</div>

{#each tempSemuaTulisan as x}
	<a href="/{x.slug}" class="kotak">
		<h2>{x.judul}</h2>
		<p>{x.cuplikan}....</p>
	</a>
{/each}

<div class="melayang-kiri" on:click={keAtas}>
	<svg width="{ukuranIconTulis * 1.07}em" height="{ukuranIconTulis}em" viewBox="0 0 17 16"><path d="M17.027 8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8zM5.154 10c-.205-.186-.205-.774 0-.96l3.467-4.9a.566.566 0 0 1 .746 0l3.478 4.9c.207.185.207.773 0 .96h-7.69z" fill="currentColor" fillRule="evenodd"></path></svg>
</div>

<a href="/admin/tulisan-baru" class="melayang">
	<svg width="{ukuranIconTulis}em" height="{ukuranIconTulis}em" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm1 15a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3z" fill="currentColor"></path></g></svg>
</a>