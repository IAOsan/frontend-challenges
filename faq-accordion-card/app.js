'use-strict';

class App {
	constructor() {
		this.accordion = document.querySelector('.faq-accordion');
		this.allQuestions = Array.from(
			document.querySelectorAll('.faq-accordion__question')
		);
		this.activeClass = 'faq-accordion__question--active';
		this.activeQuestion = null;
		this.title = null;

		document.addEventListener('DOMContentLoaded', this.init.bind(this));
		this.accordion.addEventListener('click', this.handleClick.bind(this));
	}

	getTitleQuestionHeight() {
		const padding = 32;
		return this.title.offsetHeight + padding;
	}

	init() {
		this.allQuestions.forEach((element) => {
			this.title = element.querySelector('span');
			element.style.height = `${this.getTitleQuestionHeight()}px`;
		});
	}

	collapseQuestion() {
		if (!this.activeQuestion) return;

		this.activeQuestion.classList.remove(this.activeClass);
		this.title.classList.remove('font-bold');
		this.activeQuestion.style.height = `${this.getTitleQuestionHeight()}px`;
	}

	expandQuestion() {
		if (!this.activeQuestion) return;

		this.activeQuestion.classList.add(this.activeClass);
		this.title.classList.add('font-bold');
		this.activeQuestion.style.height = `${this.activeQuestion.scrollHeight}px`;
	}

	handleClick(e) {
		const clickedQuestion = e.target.closest('button');

		if (!clickedQuestion) return;

		this.collapseQuestion();
		this.title = clickedQuestion.querySelector('span');
		this.activeQuestion =
			this.activeQuestion !== clickedQuestion ? clickedQuestion : null;
		this.expandQuestion();
	}
}

const app = new App();
