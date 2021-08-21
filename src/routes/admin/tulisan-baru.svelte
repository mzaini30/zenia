<script type="text/javascript">
	import Meta from '$lib/Meta.svelte'
	import {slug} from 'kumpulan-tools'
	import marked from 'marked'
	import highlight from 'highlight.js'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'
	import {headers} from '$lib/headers'
	import {sql, tulisan} from '../api' // id, judul, markdown, html, slug, tanggal

	let judul
	let markdown

	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			const language = highlight.getLanguage(lang) ? lang : 'javascript'
			return highlight.highlight(code, {language}).value
		}
	})

	async function tambah(){
		const slugnya = slug(judul)

		let kirim = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=tambah&judul=${encodeURIComponent(judul)}&markdown=${encodeURIComponent(markdown)}&html=${encodeURIComponent(marked(markdown))}&cuplikan=${encodeURIComponent(markdown.substring(0, 198))}&slug=${slugnya}&tanggal=${Date.now()}
			`
		})
		if (kirim) {
			if (browser) {
				goto(`/admin/edit/${slugnya}`, {replaceState: true})
			}
		}
	}
</script>

<svelte:head>
	<title>Tulisan baru</title>
	<Meta judul='Tulisan baru' slug='admin/tulisan-baru' cuplikan='Tulisan baru untuk blog'></Meta>
</svelte:head>

<form action="" on:submit|preventDefault={tambah}>
	<!-- {new Date(Date.now())} -->
	<input class="kotak" bind:value={judul} type="text" required placeholder="Judul">
	<textarea name="" class="kotak" required id="" bind:value={markdown} cols="30" rows="10" placeholder="Isi"></textarea>
	<input type="submit" class="kotak submit" value="Kirim">
</form>

<style>
	form {
		@apply p-5 pt-0
	}
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block my-8 mt-0 border border-black w-full p-3 bg-white
	}
	.submit {
		@apply user-select-none cursor-pointer focus:bg-gray-300
	}
</style>
