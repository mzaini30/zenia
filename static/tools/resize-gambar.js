(function(){
	const lebar = prompt('Masukkan lebar')
	
	let link = location.href.replace('https://', '').replace('http://', '').split('/')
	const [domain, ...path] = link

	const pathString = path.join('/')

	const hasil = `https://cdn.statically.io/img/${domain}/w=${lebar}/${pathString}`
	
	location.href = hasil
})()