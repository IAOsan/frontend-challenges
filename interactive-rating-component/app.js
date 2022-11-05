class App {
	constructor() {
		this.form = document.querySelector('#form');
		this.defaultState = document.querySelector('.rating__default-content');
		this.successState = document.querySelector('.rating__success-content');
		this.ratingMeta = document.querySelector('.rating__meta');
		this.scoreInputContainer = document.querySelector('.rating__dots-box');
		this.maxScore = 5;

		this.renderInputs();
		this.form.addEventListener('submit', this.handleSubmit.bind(this));
	}

	renderInputs() {
		const scoreElement = (score) => {
			return `
			<label class='rating__score'>
					<input type='radio' name='rating' value='${score}' />
					<span class='rating__score-dot' data-content='${score}'></span>
					<span class='sr-only'>${score}</span>
			</label>
			`;
		};

		for (let i = 1; i <= this.maxScore; i++) {
			this.scoreInputContainer.insertAdjacentHTML(
				'beforeend',
				scoreElement(i)
			);
		}
	}

	get rating() {
		const radioInput = document.querySelector(
			'input[name="rating"]:checked'
		);

		return radioInput && radioInput.value;
	}

	isValidNumber(number) {
		const isNumber = /[1-5]{1}/g;
		return isNumber.test(number);
	}

	generateScoreString(rating) {
		return `You selected ${rating} out of 5`;
	}

	displaySuccessState() {
		this.defaultState.classList.add('rating__default-content--hidden');
		this.successState.classList.remove('rating__success-content--hidden');
		this.ratingMeta.textContent = this.generateScoreString(this.rating);
	}

	handleSubmit(e) {
		e.preventDefault();

		if (!this.isValidNumber(this.rating)) return;

		this.displaySuccessState.call(this);
	}
}

const app = new App();
