<svelte:head>
	<title>Admin</title>
	<Meta judul='Admin' cuplikan='Ini adalah halaman admin' slug='admin'></Meta>
</svelte:head>

<script context='module'>
	import {sql, tulisan} from '../api'
	import {headers} from '$lib/headers'

	export async function load({fetch}){
		const dapatkanTulisan = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=list`
		})
		return {
			props: {
				listTulisan: await dapatkanTulisan.json()
			}
		}
	}
</script>

<script>
	export let listTulisan
	
	import Meta from '$lib/Meta.svelte'
</script>

<div class="kotak">
	{#each listTulisan as x}
		<a href="/admin/edit/{x.slug}">{x.judul}</a>
	{/each}
</div>

<style>
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 my-8 mt-0 border border-black
	}
	.kotak a {
		@apply block p-3 hover:bg-gray-100;
	}
</style>