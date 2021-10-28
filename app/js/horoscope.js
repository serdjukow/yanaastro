let xmlHoroContent = ''
fetch('horo.xml').then(response => {
	response.text().then(xml => {
		xmlHoroContent = xml

		let parser = new DOMParser()
		let xmlDOM = parser.parseFromString(xmlHoroContent, 'application/xml')
		let elements = xmlDOM.querySelector('horo')
		
		const currentDate = {
			yesterday: elements.childNodes[1].attributes.yesterday.nodeValue,
			today: elements.childNodes[1].attributes.today.nodeValue,
			tomorrow: elements.childNodes[1].attributes.tomorrow.nodeValue,
			tomorrow02: elements.childNodes[1].attributes.tomorrow02.nodeValue,
		}

		const toHTML_Horo = (horo) => `
		<div class="element">
			<div class="element__content">
				<div class="element__name">				
					<p>${currentDate.yesterday}</p>
				</div>
				<div class="element__text">
					<p>${horo.children[0].textContent}</p>
				</div>
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${currentDate.today}</p>
				</div>
				<div class="element__text">
					<p>${horo.children[1].textContent}</p>
				</div>
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${currentDate.tomorrow}</p>
				</div>
				<div class="element__text">
					<p>${horo.children[2].textContent}</p>
				</div>
			</div>
			<div class="element__content">
				<div class="element__name">				
					<p>${currentDate.tomorrow02}</p>
				</div>
				<div class="element__text">
					<p>${horo.children[3].textContent}</p>
				</div>
			</div>
		</div>
	`

		document.addEventListener('click', event => {
			event.preventDefault()
			let el = event.target
			let parent = el.closest('.horoscope__item')
			let id = parent.id
			//let x = event.target.childNodes[3].textContent
			for (let xmlNode of elements.childNodes) {
				if (xmlNode.nodeName == id) {
					document.querySelector('.callback__row').innerHTML = toHTML_Horo(xmlNode)
				}
			}
		})
	})
})
