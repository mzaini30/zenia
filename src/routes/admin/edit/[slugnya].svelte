<svelte:head>
	<title>Edit {judul}</title>
	<Meta judul='Edit {judul}' slug='admin/edit/{slugnya}' cuplikan=''></Meta>
</svelte:head>

<script context='module'>
	import {sql, tulisan} from '../../api' // id, judul, markdown, html, slug, tanggal

	export async function load({fetch, page}){
		let data = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=dapatkan&slug=${page.params.slugnya}`
		})
		data = await data.json()
		return {
			props: {
				judul: data[0].judul,
				markdown: data[0].markdown,
				slugnya: page.params.slugnya
			}
		}
	}
</script>

<script type="text/javascript">
	export let judul
	export let markdown
	export let slugnya

	import Meta from '$lib/Meta.svelte'
	import {slug} from 'kumpulan-tools'
	import marked from 'marked'
	import highlight from 'highlight.js'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'
	import {headers} from '$lib/headers'
	import {stringify} from 'qs'

	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			const language = highlight.getLanguage(lang) ? lang : 'javascript'
			return highlight.highlight(code, {language}).value
		}
	})

	async function update(){
		if (browser) {
			let diubah = await fetch(sql, {
				method: 'post',
				headers,
				body: stringify({
					id: tulisan,
					kunci: 'update',
					judul,
					markdown,
					html: marked(markdown),
					slug: slugnya,
					cuplikan: markdown.substring(0, 198),
					username: localStorage.username,
					password: localStorage.password
				})
			})
			if (diubah) {
				alert('Tulisan sudah diupdate')
			}
		}
	}

	async function hapus(){
		const tanya = confirm('Hapus kah?')
		if (tanya) {
			let mulaiHapus = await fetch(sql, {
				method: 'post',
				headers,
				body: stringify({
					id: tulisan,
					kunci: 'hapus',
					slug: slugnya,
					username: browser && localStorage.username,
					password: browser && localStorage.password
				})
			})
			if (mulaiHapus) {
				browser && goto('/admin', {replaceState: true})
			}
		}
	}
</script>

<form action="" on:submit|preventDefault={update}>
	<!-- {new Date(Date.now())} -->
	<input class="kotak" bind:value={judul} type="text" required placeholder="Judul">
	<textarea name="" class="kotak" id="" bind:value={markdown} required cols="30" rows="10" placeholder="Isi"></textarea>
	<div class="flex gap-5">
		<input type="submit" class="kotak tombol submit" value="Perbarui">
		<div class="kotak tombol hapus" on:click={hapus}>Hapus</div>
	</div>
</form>

<style>
	form {
		@apply p-5 pt-0
	}
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block my-8 mt-0 border border-black w-full p-3 bg-white
	}
	.tombol {
		@apply cursor-pointer text-center user-select-none focus:bg-gray-300;
	}
	.hapus {
		@apply bg-red-500 text-white
	}
	.submit {
		@apply user-select-none cursor-pointer
	}
</style>
