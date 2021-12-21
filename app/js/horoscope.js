import convert from 'xml-js'

const requestURL = '../data/daily/com.xml'

async function sendRequest(url) {
	const response = await fetch(url)
	const xml = await response.text()
	let elementsJson = convert.xml2json(xml, { compact: true, spaces: 4 })
	const myObj = JSON.parse(elementsJson)
	obj(myObj)
	horoscopeSubTitle(myObj)
}
sendRequest(requestURL)

document.addEventListener('click', event => {
	const selectValue = document.querySelector('.select__title')
	event.preventDefault()
	let el = event.target
	if (el.closest('.select__option-in[data-value]')) {
		let currentUrl = `../data/daily/${el.dataset.value}.xml`
		sendRequest(currentUrl)
		selectValue.classList.add('_load')
		setTimeout(() => {
			selectValue.classList.remove('_load')
		}, 1000)
	}
})

const horoscopeSubTitle = json => {
	document.querySelector('.horoscope__sub-title').innerHTML = `
	Ежедневный ${json.horo.date._attributes.yesterday} - ${json.horo.date._attributes.tomorrow02}
	`
}

const obj = json => {
	const dateAttributes = json.horo.date._attributes
	document.addEventListener('click', event => {
		event.preventDefault()
		let el = event.target
		let parent = el.closest('.horoscope__item')
		if (parent) {
			let id = parent.id
			const horoObj = Object.entries(json.horo)
			const horo = horoObj.find(f => f[0] == id)
			document.querySelector('.callback__row').innerHTML = ''
			document.querySelector('.callback__row').innerHTML = toHTML_Horo(horo, dateAttributes)
		}
	})
}

const zodiacsTypeObject = {
	aries: 'Овен',
	taurus: 'Телец',
	gemini: 'Близнецы',
	cancer: 'Рак',
	leo: 'Лев',
	virgo: 'Дева',
	libra: 'Весы',
	scorpio: 'Скорпион',
	sagittarius: 'Стрелец',
	capricorn: 'Козерог',
	aquarius: 'Водолей',
	pisces: 'Рыбы',
}

const toHTML_Horo = (horoBody, date) => `
		<div class="element">
			<div class="element__title">				
			${zodiacsTypeObject[horoBody[0]]}
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${date.yesterday}</p>
				</div>
				<div class="element__text">
					<p>${horoBody[1].yesterday._text}</p>
				</div>
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${date.today}</p>
				</div>
				<div class="element__text">
					<p>${horoBody[1].today._text}</p>
				</div>
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${date.tomorrow}</p>
				</div>
				<div class="element__text">
					<p>${horoBody[1].tomorrow._text}</p>
				</div>
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${date.tomorrow02}</p>
				</div>
				<div class="element__text">
					<p>${horoBody[1].tomorrow02._text}</p>
				</div>
			</div>
		</div>
	`
