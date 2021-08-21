<script>
	let tampil = false

	import {sql, akun} from '../api'
	import {goto} from '$app/navigation'
	import {browser} from '$app/env'
	import {headers} from '$lib/headers'

	async function cek(){
		if (browser){
			if (localStorage.username && localStorage.password) {
				let data = await fetch(sql, {
					method: 'post',
					headers,
					body: `id=${akun}&kunci=cek&username=${localStorage.username}&password=${localStorage.password}`
				})
				data = await data.json()

				if (data[0].banyak > 0) {
					tampil = true
				} else {
					goto('/login', {replaceState: true})
				}
			} else {
				goto('/login', {replaceState: true})
			}
		}
	}
	cek()
</script>

{#if tampil}
	<a href="/admin/menu" class="menu"><svg width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path></g></svg></a>

	<div class="isi">
		<slot></slot>
	</div>
{/if}

<style>
	.menu {
		@apply fixed right-0 top-0 p-3 cursor-pointer user-select-none
	}
	.isi {
		@apply pt-13
	}
</style>