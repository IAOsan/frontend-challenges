'use-strict';

class Validator {
	constructor(value) {
		this.value = value;
		this._label = null;
		this.error = null;
	}
	static errors(schema) {
		return Object.keys(schema).reduce((acc, key) => {
			if (schema[key].error) acc.set(key, schema[key].error);
			return acc;
		}, new Map());
	}
	static values(schema) {
		return Object.keys(schema).reduce((acc, key) => {
			acc[key] = schema[key].value;
			return acc;
		}, {});
	}
	label(label) {
		this._label = label;
		return this;
	}
	string() {
		if (typeof this.value !== 'string' || this.value instanceof String) {
			this.error = `${this._label} should be text`;
		}
		return this;
	}
	email() {
		const isValid = () =>
			/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}$/gi.test(this.value);

		if (!isValid()) {
			this.error = `Looks like this is not an email`;
		}

		return this;
	}
	required() {
		if (!this.value || !this.value.trim()) {
			this.error = `${this._label} cannot be empty`;
		}
		return this;
	}
	trim() {
		this.value = this.value.trim();
		return this;
	}
}

class App {
	constructor() {
		this.form = document.querySelector('.form');
		this.formElements = Array.from(this.form.elements).slice(0, -1);
		this.invalidInputClassname = 'form__control--invalid';
		this.invalidInputFeedbackClassname = 'form__control--invalid-feedback';
		this.form.addEventListener('submit', this.handleSubmit.bind(this));
		this.form.addEventListener('input', this.handleChange.bind(this));
	}

	createInvalidFeedbackElement(text = '') {
		const className = `text-orange ${this.invalidInputFeedbackClassname}`;
		const element = document.createElement('small');
		element.classList = className;
		element.textContent = text;
		return element;
	}

	removeError({ input, errorElement }) {
		input.classList.remove(this.invalidInputClassname);
		if (!!errorElement) errorElement.remove();
	}

	renderError({ input, parent, errorElement, message }) {
		input.classList.add(this.invalidInputClassname);
		if (!errorElement) {
			const error = this.createInvalidFeedbackElement.call(this, message);
			parent.insertAdjacentElement('beforeend', error);
		} else {
			errorElement.textContent = message;
		}
	}

	displayErrors(errors) {
		this.formElements.forEach((inputElement) => {
			const inputGroupElement = inputElement.parentNode,
				invalidFeedbackElement = inputGroupElement.querySelector(
					`.${this.invalidInputFeedbackClassname}`
				);

			if (errors.has(inputElement.name)) {
				this.renderError.call(this, {
					input: inputElement,
					parent: inputGroupElement,
					errorElement: invalidFeedbackElement,
					message: errors.get(inputElement.name),
				});
			} else {
				this.removeError({
					input: inputElement,
					errorElement: invalidFeedbackElement,
				});
			}
		});
	}

	handleChange({ target }) {
		if (target.classList.contains(this.invalidInputClassname)) {
			this.removeError({
				input: target,
				errorElement: target.nextElementSibling,
			});
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		const data = {
			firstName: new Validator(this.formElements[0].value)
				.label('First Name')
				.string()
				.required()
				.trim(),
			lastName: new Validator(this.formElements[1].value)
				.label('Last Name')
				.string()
				.required()
				.trim(),
			email: new Validator(this.formElements[2].value)
				.label('Email')
				.email(),
			password: new Validator(this.formElements[3].value)
				.label('Password')
				.string()
				.required()
				.trim(),
		};
		const errors = Validator.errors(data);

		if (!errors.size) {
			alert(JSON.stringify(Validator.values(data)));
		}
		this.displayErrors(errors);
	}
}

const app = new App();
