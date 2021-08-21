<script context='module'>
	import {sql, tulisan, support} from './api'
	import {headers} from '$lib/headers'

	export async function load({page, fetch}){
		let isinya = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=dapatkan&slug=${page.params.slugnya}`
		})
		isinya = await isinya.json()

		const listSupport = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${support}&kunci=dapatkan&slug=${page.params.slugnya}`
		})

		return {
			props: {
				isinya: isinya[0],
				listSupport: await listSupport.json(),
				slugnya: page.params.slugnya
			}
		}
	}
</script>

<script>
	export let isinya
	export let listSupport
	export let slugnya

	const rasioIcon = 2

	import Meta from '$lib/Meta.svelte'

	async function ambilSupport(){
		const getSupport = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${support}&kunci=dapatkan&slug=${slugnya}`
		})
		listSupport = await getSupport.json()
	}
	ambilSupport()

	let teksSupport

	async function kirimSupport(){
		const kirim = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${support}&kunci=tambah&support=${encodeURIComponent(teksSupport)}&slug=${slugnya}`
		})
		if (kirim) {
			ambilSupport()
			teksSupport = ''
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/monokai.css">
	<title>{isinya.judul}</title>
	<Meta slug={slugnya} judul={isinya.judul} cuplikan={isinya.cuplikan}></Meta>
</svelte:head>

<div class="konten">
	<h1 class="judul">{isinya.judul}</h1>
	<div class="aktifkan-prose">
		{#if isinya.tanggal}
			<p><em>{new Date(+isinya.tanggal)}</em></p>
		{/if}
		{@html isinya.html}
		<blockquote><p>Buat yang mau donasi untuk kelangsungan komunitas Echlus, silahkan transfer ke <a href="https://sociabuzz.com/hiyurigi/tribe">halaman donasi kami.</a></p></blockquote>
	</div>

	<form action="" on:submit|preventDefault={kirimSupport}>
		<textarea required name="" id="" cols="30" rows="10" class="kotak" placeholder="Tulis support di sini" bind:value={teksSupport}></textarea>
		<input type="submit" class="kotak" value="Kirim support">
	</form>

	{#if listSupport}
		<div class="kumpulan-kotak">
			{#each listSupport as x}
				<div class="kotak">{x.support.trim()}</div>
			{/each}
		</div>
	{/if}

	<a href="/admin/edit/{slugnya}" class="icon-kiri"><svg width="{rasioIcon}em" height="{rasioIcon}em" viewBox="0 0 24 24"><path d="M7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585l1.594-1.58zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006v-1.589z" fill="currentColor"></path><path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" fill="currentColor"></path></svg></a>

	<a href="/" class="icon"><svg width="{rasioIcon * 1.27}em" height="{rasioIcon}em" viewBox="0 0 1664 1312"><path d="M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474l575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200L140 777q-12 8-24 7q-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="currentColor"></path></svg></a>
</div>

<style>
	.konten {
		@apply p-4 pb-10 md:(w-[70%] mx-auto);
	}
	.judul {
		@apply text-3xl pb-3
	}
	:global(.aktifkan-prose) {
		@apply prose max-w-none
	}
	.icon, .icon-kiri {
		@apply fixed bottom-0 p-3 text-green-500
	}
	.icon {
		@apply right-0
	}
	.icon-kiri {
		@apply left-0
	}
	.aktifkan-prose :global(img){
		@apply block mx-auto border rounded-lg
	}
	.kumpulan-kotak {
		@apply mt-10
	}
	form {
		@apply mt-10
	}
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 mx-0 my-8 mt-0 border border-black p-3 whitespace-pre-wrap
	}
	textarea.kotak {
		@apply w-full
	}
	[type="submit"].kotak {
		@apply cursor-pointer user-select-none bg-white focus:bg-gray-300;
	}
</style>
