<svelte:head>
	<title>{title}</title>
	<Meta {title} description="All my activities in code" url="{link}/aktivitas"/>
</svelte:head>

<script lang="ts">
	import {link} from "./data"
	import Meta from "svelte-meta-text"

	const title: string = 'Aktivitas'
	const gambar: string[] = [
		"https://github-profile-trophy.vercel.app/?username=mzaini30&row=1",
		"https://github-readme-stats.vercel.app/api?username=mzaini30&theme=blue-green",
		"https://github-readme-stats.vercel.app/api/top-langs/?username=mzaini30&theme=blue-green",
		"https://github-readme-streak-stats.herokuapp.com/?user=mzaini30&theme=blue-green",
		"https://github-readme-stats.vercel.app/api/wakatime?username=mzaini30",
	]
</script>

<div class="wadah">
	{#each gambar as x}
		<div><img src={x}></div>
	{/each}
</div>

<style lang="postcss">
	.wadah {
		@apply p-3 pb-0 min-h-screen bg-gradient-to-br from-red-500 to-violet-500;
	}
	.wadah div {
		@apply pb-3;
	}
	img {
		@apply w-full h-auto;
	}
</style>
