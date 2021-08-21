<script>
	import {page} from '$app/stores'
	import Meta from '$lib/Meta.svelte'
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

<form action="">
	<p>Hasilnya:</p>
	<input type="url" readonly value='https://zen.echlus.my.id/go/{$page.params.linknya}'>
</form>

<svelte:head>
	<title>Preview</title>
	<Meta judul='Preview' cuplikan='Preview {$page.params.linknya}' slug='go/preview/{$page.params.linknya}'></Meta>
</svelte:head>