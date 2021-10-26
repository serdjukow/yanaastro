const consultations = [
	{
		id: 1,
		title: 'Консультация «Путь к себе» состоит из двух частей',
		content: {
			p: 'Первая часть',
			p1: '1. Характеристика ядра личности человека( Луны -эмоциональной составляющей , того как человек видит и чувствует мир. Солнца- активной части, самоценности, уникальности) . Гармоничные и напряжённые аспекты, если они есть . Способы компенсаторики.',
			p2: '2 .Конкретные индивидуальные действия, привычки , вводя в свою жизнь которые, человек приходит в своё ресурсное состояние в достаточно короткие сроки. И начинает жить полноценной жизнью, реализуя свой потенциал.',
			p3: 'Формат консультации - письменный ( пдф файл) с аудио комментариями.',
			p4: '<br>',
			p12: 'Вторая часть',
			p5: '1. Полная характеристика женской энергетики, сильные, слабые стороны.',
			p6: '2.Образ , с точки зрения внешности и стиля, который усилит энергетический посыл и задаст ему верный вектор.',
			p7: '3. Персональные рекомендации по раскрытию женственности.',
			p8: '4. Характеристика мужской составляющей личности. Особенности взаимоотношений с мужчинами. Как выстроить гармоничные отношения.',
			p9: '5.Подсознательный образ мужа/ возлюбленного. Вероятный сценарий знакомства.',
			p10: '6.Возможные причины проблем в личной жизни. Рекомендации по их проработке.',
			p11: 'Формат консультации - письменный ( пдф файл) с аудио комментариями.',
		},
		thime: '2h',
		price: 5000,
	},
	{
		id: 2,
		title: 'Натальная карта',
		content: {
			p1: '1. Полный психологический портрет, анализ сильных и слабых сторон, рекомендации по их проработке.',
			p2: '2. Особенности построения взаимоотношений с противоположным полом, рекомендации по раскрытию женственности ( для девушек), характеристика мужской составляющей ( для мужчин).',
			p3: '3. Сильные планеты в карте, рекомендации по проработке.',
			p4: '4. Финансы : тратить или копить, бизнес или работа по найму. Рекомендуемая сфера деятельности.',
			p5: '5. Опыт, наработанный в прошлых жизнях и кармические задачи на это воплощение.',
			p6: '6. Список ежедневных ресурсных действий, которые позволяют повысить самооценку, обрести внутреннюю силу и уверенность в себе.',
			p7: '7. Ответы на частные вопросы.',
			p8: ' Консультация проводится по вотсап видеосвязи или лично, если вы находитесь в Москве.',
		},
		thime: '1.5 - 2h',
		price: 8000,
	},
	{
		id: 3,
		title: 'Детский гороскоп до 14 лет',
		content: {
			p1: '1. Опыт, накопленный в прошлых воплощениях, задачи для этой жизни.',
			p2: '2. Характеристика эмоций и чувств, то, как ребёнок видит мир вокруг , как найти к нему подход, . подсознательный образ мамы.',
			p3: '3. Характеристика личности, сильные стороны, потенциал, таланты. Подсознательный образ папы.',
			p4: '4. Как мотивировать ребёнка. Рекомендации по выбору спорта и кружков, для наибольшего раскрытия потенциала.',
			p5: '5. Особенности интеллекта. Рекомендации по выбору учителя, наставника и наиболее эффективный способ обучения в целом.',
			p6: '6. Рекомендации по развитию( список ежедневных индивидуальных действий).',
			p7: ' Консультация проводится по вотсап видеосвязи или лично, если вы находитесь в Москве.',
		},
		thime: '1.5 - 2h',
		price: 6000,
	},
	{
		id: 4,
		title: 'Совместимость',
		content: {
			p1: '1. Подсознательные образы потенциальных партнеров. Ваши ожидания от отношений.',
			p2: '2. Анализ астрологической совместимости. Психологическая, сексуальная.',
			p3: '3. Анализ наличия конфликтных показателей. Рекомендации по проработке.',
			p4: '4. Рекомендации по построению гармоничных отношений.',
			p5: '5. Особенности интеллекта. Рекомендации по выбору учителя, наставника и наиболее эффективный способ обучения в целом.',
			p6: ' Консультация проводится по вотсап видеосвязи или лично, если вы находитесь в Москве.',
		},
		thime: '1.5 - 2h',
		price: 7500,
	},
	{
		id: 5,
		title: 'Финансы',
		content: {
			p1: '1. Как хочется тратить деньги.Как нужно тратить деньги.',
			p2: '2. В каких сферах лучше всего себя реализовывать.',
			p3: '3. Бизнес или работа по найму.',
			p4: '4. Индивидуальные рекомендации по увеличению финансов.',
		},
		thime: '1.5 - 2h',
		price: 5000,
	},
	{
		id: 6,
		title: 'Консультация «Путь к себе» состоит из двух частей',
		content: {
			p1: ' 1. Характеристика ядра личности человека( Луны -эмоциональной составляющей , того как человек видит и чувствует мир. Солнца-активной части, самоценности, уникальности). Гармоничные и напряжённые аспекты, если они есть . Способы компенсаторики.',
			p2: '2 .Конкретные индивидуальные действия, привычки , вводя в свою жизнь которые, человек приходит в своё ресурсное состояние в достаточно короткие сроки. И начинает жить полноценной жизнью, реализуя свой потенциал.',
			p3: 'Формат консультации - письменный ( пдф файл) с аудио комментариями.',
		},
		thime: '1.5 - 2h',
		price: 5000,
	},
]

const toHTML_CS = (consultation, contentValue) => `
<div class="spollers-block__item">
	<div class="spollers-block__title _spoller">${consultation.title}</div>
	<div class="spollers-block__body">
		<div class="spollers-block__body-content">
			<p>${contentValue}</p>
		</div>
		<div class="spollers-block__bottom">
			<div class="spollers-block__bottom-item">
				<span class="spollers-block__bottom-title">
					Продолжительность:
				</span>
				<span class="spollers-block__bottom-value">
					${consultation.thime}
					<i class="fas fa-hourglass-start"></i>
				</span>
			</div>
			<div class="spollers-block__bottom">
				<span class="spollers-block__bottom-title">
				Стоимость консультации:
				</span>
				<span class="spollers-block__bottom-value">
					${consultation.price}
					<i class="fas fa-ruble-sign"></i>
				</span>
			</div>
		</div>
		<div class="spollers-block__buttons">
			<a
				href="#"
				data-id="${consultation.id}"
				data-btn="consult"		
				class="btn btn-micromodal-open"
				data-micromodal-open="modal-news"
			>
				Записаться
			</a>		
		</div>
	</div>
</div>
`

const toHTML_FORM = consultation => `
<form class="contact" enctype="multipart/form-data" method="post" id="form"
onsubmit="send(event, 'sendemail.php')">
	<div class="form__field field-title">
		<textarea type="text" name="title" id="title" class="input-title" autocomplete="off"
			placeholder=""  readonly>${consultation.title}</textarea>			
	</div>

	<div class="form__field field-name">
		<label for="name">Ваше имя и фамилия</label>
		<input type="text" name="name" id="name" class="field" autocomplete="off"
			placeholder="Иван Иванов" required>
	</div>

	<div class="form__field field-name">
		<label for="date">Дата рождения</label>
		<input type="date" name="name" id="date" class="field" autocomplete="off"
			placeholder="xx.xx.xxxx" required>
	</div>

	<div class="form__field field-name">
		<label for="place">Место рождения</label>
		<input type="text" name="name" id="place" class="field" autocomplete="off"
			placeholder="Москва, Россия" required>
	</div>

	<div class="form__field field-name">
		<label for="time">Время рождения</label>
		<input type="time" name="name" id="time" class="field" autocomplete="off"
			placeholder="20:30" required>
	</div>

	<div class="form__field field-phone">
		<label for="phone">Ваш телефон</label>
		<input id="phone" class="field input _req phone" autocomplete="off" type="tel" name="phone"
			placeholder="+7 (___) ___-__-__ " required>
	</div>

	<div class="form__field field-mail">
		<label for="email">Ваш e-mail</label>
		<input type="email" name="email" id="email" class="field" autocomplete="off"
			placeholder="example@gmail.com" required>
	</div>

	<div class="form__field field-message">
		<label for="message">Сообщение</label>
		<textarea name="message" id="message" class="field" placeholder="Начните писать..."></textarea>
	</div>
	<button id="callback" type="submit" name="submit" class="send-btn form__button btn">
	Оставить заявку</button>
</form>	
`

function renderConsultations() {
	const consultationsBlock = document.querySelector('#consultations-block')
	for (let consultation of consultations) {
		let contentValue = ''
		for (let i in consultation.content) {
			contentValue += `<p>${consultation.content[i]}</p>`
		}
		consultationsBlock.innerHTML += toHTML_CS(consultation, contentValue)
	}
}
renderConsultations()

function renderFORM() {
	document.addEventListener('click', event => {
		event.preventDefault()
		const btnType = event.target.dataset.btn
		const id = +event.target.dataset.id
		if (btnType == 'consult') {
			const consultation = consultations.find(f => f.id === id)
			document.querySelector('#form').innerHTML = toHTML_FORM(consultation)
		}
	})
}
renderFORM()
