<svelte:head>
	<title>Redirect</title>
	<Meta judul='Redirect' cuplikan='Redirect ke {singkatan}' slug='go/{singkatan}'></Meta>
</svelte:head>

<script context='module'>
	import {sql, link} from './api'
	import {headers} from '$lib/headers'

	export async function load({fetch, page}) {
		let ambil = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${link}&kunci=dapatkan&singkatan=${page.params.singkatan}`
		})
		ambil = await ambil.json()
		return {
			props: {
				redirectKe: ambil[0].tujuan,
				singkatan: page.params.singkatan
			}
		}
	}
</script>

<script>
	export let redirectKe
	export let singkatan

	import {browser} from '$app/env'
	import Meta from '$lib/Meta.svelte'

	if (browser) {
		location.href = redirectKe
	}
</script>