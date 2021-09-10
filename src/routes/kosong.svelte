<div contenteditable="true"></div>

<style lang='postcss'>
    div {
        @apply p-5 text-right text-3xl;
    }
</style>

<script lang='ts'>
    import Meta from 'svelte-meta-text'
    import {link} from './data'

    const title: string = 'Kosong'
</script>

<svelte:head>
    <title>{title}</title>
    <Meta {title} description='Biasanya dipakai untuk nulis tulisan Arab' url='{link}/kosong'/>
</svelte:head>