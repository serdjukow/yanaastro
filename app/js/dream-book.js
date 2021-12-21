const dreamBooktURL = '../data/dream-book.json'

async function sendDreamBook(url) {
	const res = await fetch(url)
	const dreamBook = await res.json()
	searchWord(dreamBook)
}
sendDreamBook(dreamBooktURL)

const renderWords = obj =>
	`
	<div class="dream-book__result">
		<div class="dream-book__word">${obj.word || ''}</div>
		<div class="dream-book__sonnik">${obj.sonnik || ''}</div>
	</div>
	`
const renderSonnik = obj =>
	`
	<div class="dream-book__result">
		<div class="dream-book__word">${obj.word || ''}</div>
		<div class="dream-book__sonnik">${obj.sonnik || ''}</div>
	</div>
	`

const searchWord = book => {
	const searchInput = document.querySelector('#search')
	const dreamBookBody = document.querySelector('#dream-book')
	searchInput.addEventListener('input', event => {
		event.preventDefault()

		let searchWord = event.target.value.trim().toLowerCase()
		if (searchWord.length >= 2) {
			let resultWords = book.filter(f => f.word.toLowerCase().includes(searchWord))
			dreamBookBody.innerHTML = ''
			resultWords.forEach(el => (dreamBookBody.innerHTML += renderWords(el)))
		}
	})
}

document.addEventListener('click', event => {
	if (event.target.closest('dream-book__word')) {
		console.log(event.target)
	}
})
