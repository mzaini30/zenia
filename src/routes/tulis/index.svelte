<svelte:head>
	<title>Tulis</title>
	<Meta slug='tulis' judul='Tulis' cuplikan='Tools untuk menyimpan tulisan'></Meta>
</svelte:head>

<script>
	import Meta from '$lib/Meta.svelte'

	let teksnya

	async function simpan(){

	}
</script>

<form action="" onSubmit={simpan}>
	<textarea placeholder='Masukkan teks yang mau disimpan' name="" id="" cols="30" bind:value={teksnya} rows="10"></textarea>
	<input type="submit" value='Simpan' class='tombol'/>
</form>