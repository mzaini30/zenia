(function(){
	let node = document.querySelector('.hitung-kata')

	if (document.body.contains(node)) {
		document.body.removeChild(node)
	}

	let bagianCounter = document.createElement('div')
	bagianCounter.classList.add('hitung-kata')
	bagianCounter.innerText = 'n kata'

	const warnaTeks = '#15803d'
	const warnaBackground = '#bbf7d0'

	const style = {
		position: 'fixed',
		'z-index': 10,
		bottom: '10px',
		left: '10px',
		background: warnaBackground,
		padding: '5px 10px',
		color: warnaTeks,
		border: `1px solid ${warnaTeks}`,
		'border-radius': '5px'
	}

	for (let n in style){
		bagianCounter.style[n] = style[n]
	}

	document.body.appendChild(bagianCounter)

	let textarea = document.querySelector('iframe.editable').contentDocument.querySelector('.editable')

	function hitungJumlahKata(){
		let teks = textarea.innerText.trim()
		let banyakKata = teks.split('\n').map(x => x.split(' ')).flat().filter(x => x).length

		bagianCounter.innerText = `${banyakKata.toLocaleString('id')} kata`
	}
	hitungJumlahKata()
	textarea.addEventListener('input', hitungJumlahKata)
})()