let urlZodiac = '../data/zodiac.json'

async function load(url) {
	let zodiacResponse = await fetch(url)
	const zodiacs = await zodiacResponse.json()

	const toHTML_Zodiac = zodiacs => `	
			<div id="${zodiacs.name}" class="horoscope__item btn-micromodal-open" data-btn="zodiac" data-micromodal-open="modal-news">
			<div class="horoscope__img">
				<img src="${zodiacs.img}" alt="${zodiacs.title}">
			</div>
			<div class="horoscope__title">
				<h4>${zodiacs.title}</h4>
			</div>
			<div class="horoscope__date">
				<span>${zodiacs.date}</span>
			</div>
		</div>
	`

	function renderZodiacs() {
		const zodiacsBlock = document.querySelector('#horo-content')
		for (let zodiac of zodiacs) {
			zodiacsBlock.innerHTML += toHTML_Zodiac(zodiac)
		}
	}
	renderZodiacs()
	const initModal = function () {
		MicroModal.init({
			openTrigger: 'data-micromodal-open',
			disableScroll: true,
			disableFocus: true,
			awaitOpenAnimation: true,
			awaitCloseAnimation: true,
		})
	}
	initModal()
}
load(urlZodiac)
