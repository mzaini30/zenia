<svelte:head>
	<title>Login</title>
	<Meta judul='Login' slug='login' cuplikan='Login dulu ya...'></Meta>
</svelte:head>

<script>
	let username
	let password

	import {sql, akun} from './api'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'
	import Meta from '$lib/Meta.svelte'
	import {headers} from '$lib/headers'

	async function login(){
		if (browser){
			let data = await fetch(sql, {
				method: 'post',
				headers,
				body: `id=${akun}&kunci=cek&username=${username}&password=${password}`
			})
			data = await data.json()

			if (data[0].banyak > 0){
				localStorage.username = username
				localStorage.password = password
				goto('/admin', {replaceState: true})
			} else {
				alert('Username dan password salah')
			}
		}
	}
</script>

<form action="" on:submit|preventDefault={login}>
	<p>Username</p>
	<input type="text" required bind:value={username}>
	<p class="mt-5">Password</p>
	<input type="password" required bind:value={password}>
	<input type="submit" class="tombol" value="Login">
</form>

<style>
	form {
		@apply p-5
	}
	input {
		@apply w-full block border border-black p-3;
		box-shadow: 10px 10px 0 0 black;
	}
	.tombol {
		@apply mt-7 user-select-none cursor-pointer
	}
</style>