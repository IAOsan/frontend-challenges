import { render, setupUser, screen } from './test-utils';
import App from '../App';

function renderApp() {
	render(<App />);
}

const user = setupUser();

describe('<App />', () => {
	const defaultContent = () =>
			document.querySelector('.rating__default-content'),
		activeContent = () =>
			document.querySelector('.rating__success-content'),
		defaultHeading = () =>
			screen.queryByRole('heading', { name: /how.did.we.do\?/i }),
		scoreInputs = () => screen.queryAllByRole('radio'),
		submitBtn = () => screen.queryByRole('button', { name: /submit/i });

	describe('LAYOUT', () => {
		beforeEach(renderApp);

		it('should displays default content', () => {
			expect(defaultContent()).toBeInTheDocument();
		});

		it('should displays default heading', () => {
			expect(defaultHeading()).toBeInTheDocument();
		});

		it('should displays score inputs', () => {
			expect(scoreInputs()).toHaveLength(5);
		});

		it('should displays submit button', () => {
			expect(submitBtn()).toBeInTheDocument();
		});
	});

	describe('INTERACTIVITY', () => {
		beforeEach(renderApp);

		it('should not submit the form if no score is selected', async () => {
			await user.click(submitBtn());
			expect(defaultContent()).toBeInTheDocument();
		});

		it('should displays active state content after submit the form when score is selected', async () => {
			await user.click(scoreInputs()[0]);
			await user.click(submitBtn());

			expect(activeContent()).toBeInTheDocument();
		});

		it('should displays score selected after submit form', async () => {
			await user.click(scoreInputs()[0]);
			await user.click(submitBtn());

			expect(
				screen.queryByText(/you.selected.1.out.of.5/i)
			).toBeInTheDocument();
		});

		it('should displays gratitude heading after submit form', async () => {
			await user.click(scoreInputs()[0]);
			await user.click(submitBtn());

			expect(screen.queryByText(/thank.you/i)).toBeInTheDocument();
		});
	});
});
