<svelte:head>
	<title>{isinya.judul}</title>
	<Meta judul={isinya.judul} cuplikan={isinya.cuplikan} slug='ppt/{slugnya}'></Meta>
</svelte:head>

<script type="text/javascript">
	import Meta from '$lib/Meta.svelte'
	export let isinya
	export let slugnya
</script>

<script context='module'>
	import {sql, tulisan} from '../api'
	import {headers} from '$lib/headers'

	export async function load({page, fetch}){
		let isinya = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=dapatkan&slug=${page.params.slugnya}`
		})
		isinya = await isinya.json()

		return {
			props: {
				isinya: isinya[0],
				slugnya: page.params.slugnya
			}
		}
	}
</script>