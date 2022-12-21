import { render, setupUser, screen } from './test-utils';
import App from '../App';

function renderApp() {
	render(<App />);
}

const user = setupUser();

describe('<App />', () => {
	const questions = () => screen.queryAllByRole('button');
	describe('LAYOUT', () => {
		beforeEach(renderApp);

		it('should display all questions', () => {
			expect(questions()).toHaveLength(5);
		});

		it('should each question be of type button', () => {
			const condition = questions().every((q) => q.type === 'button');
			expect(condition).toBeTruthy();
		});

		it('should not show the answers initially', () => {
			const allHasAriaHidden = questions().every((q) => {
				return q.getAttribute('aria-expanded') === 'false';
			});
			expect(allHasAriaHidden).toBe(true);
		});
	});

	describe('INTERACTIVITY', () => {
		beforeEach(renderApp);

		it('should expand question after clicking on it', async () => {
			const question = questions()[0];
			await user.click(question);

			expect(question).toHaveAttribute('aria-expanded', 'true');
		});

		it('should collapse question after clicking on it if question are actually expanded', async () => {
			const question = questions()[0];
			await user.click(question);
			await user.click(question);

			expect(question).toHaveAttribute('aria-expanded', 'false');
		});

		it('should collapse previous question after clicking a new question', async () => {
			const questionA = questions()[0];
			const questionB = questions()[1];

			await user.click(questionA);
			expect(questionA).toHaveAttribute('aria-expanded', 'true');

			await user.click(questionB);
			expect(questionB).toHaveAttribute('aria-expanded', 'true');
			expect(questionA).toHaveAttribute('aria-expanded', 'false');
		});
	});
});
