const feedbacks = [
    {
        id: 1,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptas labore eveniet iusto nam, laboriosam culpa quos pariatur et reprehenderit?",
        name: "Masha Ivanova",
        mail: "masha@mail.ru",
    },
    {
        id: 2,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptas labore eveniet iusto nam, laboriosam culpa quos pariatur et reprehenderit?",
        name: "Masha Ivanova",
        mail: "masha@mail.ru",
    },
    {
        id: 3,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptas labore eveniet iusto nam, laboriosam culpa quos pariatur et reprehenderit?",
        name: "Masha Ivanova",
        mail: "masha@mail.ru",
    },
    {
        id: 4,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptas labore eveniet iusto nam, laboriosam culpa quos pariatur et reprehenderit?",
        name: "Masha Ivanova",
        mail: "masha@mail.ru",
    },
    {
        id: 5,

        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptas labore eveniet iusto nam, laboriosam culpa quos pariatur et reprehenderit?",
        name: "Masha Ivanova",
        mail: "masha@mail.ru",
    },
    {
        id: 6,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptas labore eveniet iusto nam, laboriosam culpa quos pariatur et reprehenderit?",
        name: "Masha Ivanova",
        mail: "masha@mail.ru",
    },
]

const toHTML_FB = (feedback) => `
		<div class="swiper-slide">
			<div class="feedback-slider__title">
				<i class="fas fa-comment-dots"></i>
			</div>
			<div class="feedback-slider__text">
				<p>
					<i class="fas fa-quote-right"></i>
					${feedback.content}
					<i class="fas fa-quote-left"></i>
				</p>
			</div>
			<div class="feedback-slider__signature">
				<p>${feedback.name}</p>
				<p>${feedback.mail}</p>
			</div>
		</div>
	`

function renderFeebacks() {
    const html_fb = feedbacks.map(toHTML_FB).join("")
    document.querySelector("#feedbacks-block").innerHTML = html_fb
}
renderFeebacks()