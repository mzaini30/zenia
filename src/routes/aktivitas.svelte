<svelte:head>
	<title>{title}</title>
	<Meta {title} description="All my activities in code" url="{linkBlog}/aktivitas"/>
</svelte:head>

<script context='module' lang="ts">
	import {sql} from './api'
	import {stringify} from 'qs'
	import {headers} from '$lib/headers'

	const link: string = 'c0fb8f8ac2d58d9af14156671038df78' // id, link

	export async function load({fetch}){
		let datanya = await fetch(sql, {
			method: 'post',
			headers,
			body: stringify({
				id: link,
				kunci: 'tampil'
			})
		})
		datanya = await datanya.json()

		return {
			props: {
				linknya: datanya
			}
		}
	}
</script>

<script lang="ts">
	import {link as linkBlog} from "./data"
	import Meta from "svelte-meta-text"

	export let linknya

	const title: string = 'Aktivitas'
	const gambar: string[] = [
		"https://github-profile-trophy.vercel.app/?username=mzaini30&row=1",
		"https://github-readme-stats.vercel.app/api/wakatime?username=mzaini30",
		"https://github-readme-stats.vercel.app/api?username=mzaini30&theme=blue-green",
		"https://github-readme-streak-stats.herokuapp.com/?user=mzaini30&theme=blue-green",
		"https://github-readme-stats.vercel.app/api/top-langs/?username=mzaini30&theme=blue-green",
		"https://projecteuler.net/profile/mzaini30.png",
		"https://data.typeracer.com/misc/badge?user=mzaini30"
	]
</script>

<div class="wadah">

	<!-- {JSON.stringify(linknya)} -->

	<div class="putih">
		<h2>Klien</h2>	
		{#each linknya as x}
			<a href={x.link} rel='nofollow'>{x.link.replace('http://', '').replace('https://', '').replace("www.", "")}</a>
		{/each}
	</div>

	{#each gambar as x}
		<div><img src={x}></div>
	{/each}
</div>

<style lang="postcss">
	.wadah {
		@apply p-3 pb-0 min-h-screen bg-gradient-to-br from-red-500 to-violet-500;
	}
	.wadah div:not(.putih) {
		@apply pb-3;
	}
	img {
		@apply max-w-full mx-auto h-auto;
	}

	.putih {
		@apply bg-white rounded-xl shadow p-8 pb-5 mb-3;
	}
	.putih h2 {
		@apply text-3xl mb-3 font-bold text-blue-500;
	}
	.putih a {
		@apply inline-block mr-3 mb-3;
	}
</style>
