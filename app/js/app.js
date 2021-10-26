// Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import MicroModal from 'micromodal' // es6 module
import Swiper, {
	Navigation,
	Pagination,
	EffectCoverflow,
	Autoplay,
} from 'swiper'
Swiper.use([Navigation, Pagination, EffectCoverflow, Autoplay])

document.addEventListener('DOMContentLoaded', () => {
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

	const initModal = () => {
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
			if (
				buttonLink.dataset.goto &&
				document.querySelector(buttonLink.dataset.goto)
			) {
				const gotoBlock = document.querySelector(
					buttonLink.dataset.goto
				)
				const gotoBlockValue =
					gotoBlock.getBoundingClientRect().top + pageYOffset
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
	const wrapper = document.querySelector('.wrapper')

	document.addEventListener('scroll', function () {
		if (window.pageYOffset >= 180) {
			header.classList.add('change')
			headerLogo.style.display = 'none'
			wrapper.style.paddingTop = 70 + 'px'
		} else {
			header.classList.remove('change')
			headerLogo.style.display = 'block'
			wrapper.style.paddingTop = 0 + 'px'
		}
	})

	// active class of menu items onscroll

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY

		if (window.innerWidth > 768) {
			document.querySelectorAll('.section').forEach((el, i) => {
				if (
					el.offsetTop -
						document.querySelector('.header__list').clientHeight <=
					scrollDistance
				) {
					document
						.querySelectorAll('.header__list .header__link')
						.forEach(el => {
							if (el.classList.contains('active')) {
								el.classList.remove('active')
							}
						})
					document
						.querySelectorAll('.header__list .header__li')
						[i].querySelector('.header__link')
						.classList.add('active')
				}
			})
		}
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
					if (
						spoller.classList.contains('_spoller-992') &&
						window.innerWidth > 992
					) {
						return false
					}
					if (
						spoller.classList.contains('_spoller-768') &&
						window.innerWidth > 768
					) {
						return false
					}
					if (
						spoller.closest('._spollers').classList.contains('_one')
					) {
						let curent_spollers = spoller
							.closest('._spollers')
							.querySelectorAll('._spoller')
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
			if (
				!reg.test(this.value) ||
				this.value.length < 5 ||
				(keyCode > 47 && keyCode < 58)
			) {
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

	/*
    spollersBlockItem.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault()
            let el = event.currentTarget
            let el2 = event.target
            if (el2.classList.contains("btn-micromodal-open")) {
                for (let field of formField) {
                    if (field.classList.contains("field-title")) {
                        field.childNodes[1].value = ""
                        field.childNodes[1].value = el.childNodes[1].innerText
                    }
                }
            }
        })
    })
	*/
})
