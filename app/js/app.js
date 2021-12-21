import '@babel/polyfill'
import Scrollbar from 'smooth-scrollbar'

import MicroModal from 'micromodal' // es6 module
import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper'
Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay])

document.addEventListener('DOMContentLoaded', () => {
	Scrollbar.init(document.querySelector('.modal-news__body'))

	const swiper = new Swiper('.swiper', {
		loop: true,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 50,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		autoHeight: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true,
		},
		speed: 600,
		slidesPerView: 3,
		breakpoints: {
			'@0.00': {
				slidesPerView: 1,
			},
			'@0.75': {
				slidesPerView: 1,
			},
			'@1.00': {
				slidesPerView: 2,
			},
			'@1.50': {
				slidesPerView: 3,
			},
		},
	})

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

	// Переход по нажатию кнопок

	const buttons = document.querySelectorAll('.button-go-to[data-goto]')
	if (buttons.length > 0) {
		buttons.forEach(button => {
			button.addEventListener('click', onButtonClick)
		})
		function onButtonClick(e) {
			e.preventDefault()
			const buttonLink = e.target
			if (buttonLink.dataset.goto && document.querySelector(buttonLink.dataset.goto)) {
				const gotoBlock = document.querySelector(buttonLink.dataset.goto)
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset
				if (header.classList.contains('change')) {
					window.scrollTo({
						top: gotoBlockValue - 80,
						behavior: 'smooth',
					})
				} else {
					window.scrollTo({
						top: gotoBlockValue - 180,
						behavior: 'smooth',
					})
				}
			}
		}
	}

	const header = document.querySelector('.header')
	const headerLogo = document.querySelector('.li_logo')

	document.addEventListener('scroll', function () {
		if (window.pageYOffset >= 20) {
			header.classList.add('change')
			if (window.innerWidth > 767.98) {
				headerLogo.style.display = 'none'
			}
		} else {
			header.classList.remove('change')
			if (window.innerWidth > 767.98) {
				headerLogo.style.display = 'flex'
			}
		}
	})

	// active class of menu items onscroll

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY

		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__body').clientHeight - 100 <= scrollDistance) {
				document.querySelectorAll('.header__list .header__link').forEach(el => {
					if (el.classList.contains('active')) {
						el.classList.remove('active')
					}
				})
				document.querySelectorAll('.header__list .header__li')[i].querySelector('.header__link').classList.add('active')
			}
		})
	})

	//Spollers
	let spollers = document.querySelectorAll('._spoller')
	let spollersGo = true
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index]
			spoller.addEventListener('click', function (e) {
				if (spollersGo) {
					spollersGo = false
					if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
						return false
					}
					if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
						return false
					}
					if (spoller.closest('._spollers').classList.contains('_one')) {
						let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller')
						for (let i = 0; i < curent_spollers.length; i++) {
							let el = curent_spollers[i]
							if (el != spoller) {
								el.classList.remove('_active')
								_slideUp(el.nextElementSibling)
							}
						}
					}
					spoller.classList.toggle('_active')
					_slideToggle(spoller.nextElementSibling)

					setTimeout(function () {
						spollersGo = true
					}, 500)
				}
			})
		}
	}

	let _slideUp = (target, duration = 500) => {
		target.style.transitionProperty = 'height, margin, padding'
		target.style.transitionDuration = duration + 'ms'
		target.style.height = target.offsetHeight + 'px'
		target.offsetHeight
		target.style.overflow = 'hidden'
		target.style.height = 0
		target.style.paddingTop = 0
		target.style.paddingBottom = 0
		target.style.marginTop = 0
		target.style.marginBottom = 0
		window.setTimeout(() => {
			target.style.display = 'none'
			target.style.removeProperty('height')
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-top')
			target.style.removeProperty('margin-bottom')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('_slide')
		}, duration)
	}
	let _slideDown = (target, duration = 500) => {
		target.style.removeProperty('display')
		let display = window.getComputedStyle(target).display
		if (display === 'none') display = 'block'
		target.style.display = display
		let height = target.offsetHeight
		target.style.overflow = 'hidden'
		target.style.height = 0
		target.style.paddingTop = 0
		target.style.paddingBottom = 0
		target.style.marginTop = 0
		target.style.marginBottom = 0
		target.offsetHeight
		target.style.transitionProperty = 'height, margin, padding'
		target.style.transitionDuration = duration + 'ms'
		target.style.height = height + 'px'
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		window.setTimeout(() => {
			target.style.removeProperty('height')
			target.style.removeProperty('overflow')
			target.style.removeProperty('transition-duration')
			target.style.removeProperty('transition-property')
			target.classList.remove('_slide')
		}, duration)
	}
	let _slideToggle = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide')
			if (window.getComputedStyle(target).display === 'none') {
				return _slideDown(target, duration)
			} else {
				return _slideUp(target, duration)
			}
		}
	}

	// Маска телефона +7 (___) ___-__-__'
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector)
		function mask(event) {
			const keyCode = event.keyCode
			const template = masked,
				def = template.replace(/\D/g, ''),
				val = this.value.replace(/\D/g, '')
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				})
			i = newValue.indexOf('_')
			if (i !== -1) {
				newValue = newValue.slice(0, i)
			}
			let reg = template
				.substr(0, this.value.length)
				.replace(/_+/g, function (a) {
					return '\\d{1,' + a.length + '}'
				})
				.replace(/[+()]/g, '\\$&')
			reg = new RegExp('^' + reg + '$')
			if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
				this.value = newValue
			}
			if (event.type === 'blur' && this.value.length < 5) {
				this.value = ''
			}
		}
		for (const elem of elems) {
			elem.addEventListener('input', mask)
			elem.addEventListener('focus', mask)
			elem.addEventListener('blur', mask)
		}
	}
	maskPhone('.phone')

	// Получаем актуальный год в copiright
	const currentYear = new Date().getFullYear()
	document.querySelector('.current-date').innerHTML = `© ${currentYear}`

	// Проверяем, введен ли текст в форму, если да, добавляем активный цвет
	const fieldInput = document.querySelectorAll('.field')
	const activeColor = '#4E4E4E'
	fieldInput.forEach(el => {
		el.addEventListener('change', () => {
			if (el.value) {
				el.style.color = activeColor
			}
		})
	})

	// Select
	let selects = document.getElementsByTagName('select')
	if (selects.length > 0) {
		selects_init()
	}
	function selects_init() {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index]
			select_init(select)
		}
		//select_callback();
		document.addEventListener('click', function (e) {
			//selects_close(e);
		})
		document.addEventListener('keydown', function (e) {
			if (e.which == 27) {
				selects_close(e)
			}
		})
	}
	function selects_close(e) {
		const selects = document.querySelectorAll('.select')
		if (!e.target.closest('.select')) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index]
				const select_body_options = select.querySelector('.select__options')
				select.classList.remove('_active')
				_slideUp(select_body_options, 100)
			}
		}
	}
	function select_init(select) {
		const select_parent = select.parentElement
		const select_modifikator = select.getAttribute('class')
		const select_selected_option = select.querySelector('option:checked')
		select.setAttribute('data-default', select_selected_option.value)
		select.style.display = 'none'

		select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>')

		let new_select = select.parentElement.querySelector('.select')
		new_select.appendChild(select)
		select_item(select)
	}
	function select_item(select) {
		const select_parent = select.parentElement
		const select_items = select_parent.querySelector('.select__item')
		const select_options = select.querySelectorAll('option')
		const select_selected_option = select.querySelector('option:checked')
		const select_selected_text = select_selected_option.text
		const select_type = select.getAttribute('data-type')
		if (select_items) {
			select_items.remove()
		}

		let select_type_content = ''
		if (select_type == 'input') {
			select_type_content =
				'<div class="select__value"><input autocomplete="off" type="text" name="form[]" value="' +
				select_selected_text +
				'" data-error="Ошибка" data-value="' +
				select_selected_text +
				'" class="select__input"></div>'
		} else {
			select_type_content = '<div class="select__value"><span>' + select_selected_text + '</span></div>'
		}

		select_parent.insertAdjacentHTML(
			'beforeend',
			'<div class="select__item">' +
				'<div class="select__title">' +
				select_type_content +
				'</div>' +
				'<div class="select__options">' +
				select_get_options(select_options) +
				'</div>' +
				'</div></div>'
		)

		select_actions(select, select_parent)
	}

	function select_actions(original, select) {
		const select_item = select.querySelector('.select__item')
		const select_body_options = select.querySelector('.select__options')
		const select_options = select.querySelectorAll('.select__option-in')
		const select_type = original.getAttribute('data-type')
		const select_input = select.querySelector('.select__input')
		select_item.addEventListener('click', function () {
			let selects = document.querySelectorAll('.select')
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index]
				const select_body_options = select.querySelector('.select__options')
				if (select != select_item.closest('.select')) {
					select.classList.remove('_active')
					_slideUp(select_body_options, 100)
				}
			}
			if (window.innerWidth <= 1200) {
				_slideToggle(select_body_options, 100)
				select.classList.toggle('_active')
			}
		})

		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index]
			const select_option_value = select_option.getAttribute('data-value')
			const select_option_text = select_option.innerHTML

			if (select_type == 'input') {
				select_input.addEventListener('keyup', select_search)
			} else {
				if (select_option.getAttribute('data-value') == original.value) {
					select_option.style.display = 'none'
				}
			}
			select_option.addEventListener('click', function () {
				for (let index = 0; index < select_options.length; index++) {
					const el = select_options[index]
					el.style.display = 'flex'
				}
				if (select_type == 'input') {
					select_input.value = select_option_text
					original.value = select_option_value
				} else {
					select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>'
					original.value = select_option_value
					select_option.style.display = 'none'
				}
			})
		}
	}
	function select_get_options(select_options) {
		if (select_options) {
			let select_options_content = ''
			for (let index = 0; index < select_options.length; index++) {
				const select_option = select_options[index]
				const select_option_value = select_option.value
				if (select_option_value != '') {
					const select_option_text = select_option.text
					select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option-in">' + select_option_text + '</div>'
				}
			}
			return select_options_content
		}
	}
	function select_search(e) {
		let select_block = e.target.closest('.select ').querySelector('.select__options')
		let select_options = e.target.closest('.select ').querySelectorAll('.select__option-in')
		let select_search_text = e.target.value.toUpperCase()

		for (let i = 0; i < select_options.length; i++) {
			let select_option = select_options[i]
			let select_txt_value = select_option.textContent || select_option.innerText
			if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
				select_option.style.display = ''
			} else {
				select_option.style.display = 'none'
			}
		}
	}
	function selects_update_all() {
		let selects = document.querySelectorAll('select')
		if (selects) {
			for (let index = 0; index < selects.length; index++) {
				const select = selects[index]
				select_item(select)
			}
		}
	}

	// Select

	// Menu
	const menuButton = document.querySelector('#nav-icon')
	const navigationTop = document.querySelector('.header__menu')
	const body = document.querySelector('body')
	const bodyOverlay = document.querySelector('.body-overlay')

	const toggleNavActive = () => {
		menuButton.classList.toggle('_active')
		navigationTop.classList.toggle('_active')
		body.classList.toggle('_lock')
		bodyOverlay.classList.toggle('_active')
	}
	menuButton.addEventListener('click', () => {
		toggleNavActive()
	})

	bodyOverlay.addEventListener('click', () => {
		toggleNavActive()
	})
	// Menu

	/*
	const body = document.querySelector('body')
	const lockPadding = document.querySelectorAll('.lock-padding')
	function bodyLock() {
		const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index]
				el.style.paddingRight = lockPaddingValue
			}
		}
		body.style.paddingRight = lockPaddingValue
		body.classList.add('lock')
	}

	function bodyUnLock() {
		setTimeout(function () {
			if (lockPadding.length > 0) {
				for (let index = 0; index < lockPadding.length; index++) {
					const el = lockPadding[index]
					el.style.paddingRight = '0px'
				}
			}
			body.style.paddingRight = '0px'
			body.classList.remove('lock')
		}, 800)
	}
	//data-micromodal-open

	const btnMicromodalOpen = document.querySelectorAll('.btn-micromodal-open')
	btnMicromodalOpen.forEach(elem => {
		elem.addEventListener('click', event => {
			event.preventDefault()
			const btnType = event.target
			console.log(btnType)

			if (btnMicromodalOpen) {
				const aria = document.querySelector('.modal[aria-hidden]')
				if (!aria.getAttribute('aria-hidden')) {
					console.log('open')
					bodyLock()
				} else {
					console.log('close')
					bodyUnLock()
				}
			}
		})
	})
	*/
})
