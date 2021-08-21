<script>
	import Meta from '$lib/Meta.svelte'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'

	function keluar(){
		if (browser) {
			localStorage.removeItem('username')
			localStorage.removeItem('password')
			goto('/login', {replaceState: true})
		}
	}
</script>

<svelte:head>
	<title>Menu</title>
	<Meta judul='Menu' slug='admin/menu' cuplikan='Menu admin'></Meta>
</svelte:head>

<div class="kotak">
	<a href="/">Beranda website</a>
	<a href="/admin">Beranda admin</a>
	<a href="/admin/tulisan-baru">Tulisan baru</a>
	<a href="/" on:click|preventDefault={keluar}>Logout</a>
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