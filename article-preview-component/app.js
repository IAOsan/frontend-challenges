const article = document.querySelector('.article');
const shareContainer = document.querySelector('.article__share');
const activeClass = 'article__share--active';

function handleCLick({ target }) {
	const shareBtn = target.closest('button');

	if (shareBtn) {
		shareContainer.classList.toggle(activeClass);
	} else {
		shareContainer.classList.remove(activeClass);
	}
}

article.addEventListener('click', handleCLick);
