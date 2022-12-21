import React, { useLayoutEffect, useRef } from 'react';
import { getClasName } from '../utils';

function AccordionQuestionItem({ idx, title, answer, isActive, onSelect }) {
	const btnRef = useRef();
	const questionClassName = getClasName('btn faq-accordion__question', {
		'faq-accordion__question--active': isActive,
	});
	const titleClassName = getClasName('d-block', { 'font-bold': isActive });

	useLayoutEffect(() => {
		const padding = 32;

		if (isActive) {
			btnRef.current.style.height = `${btnRef.current.scrollHeight}px`;
		} else {
			const height = btnRef.current.children[0].offsetHeight + padding;
			btnRef.current.style.height = `${height}px`;
		}
	}, [isActive]);

	return (
		<li key={idx}>
			<button
				ref={btnRef}
				onClick={() => onSelect(idx)}
				className={questionClassName}
				type='button'
				aria-expanded={isActive}
				aria-selected={isActive}
				aria-controls={`question${idx}`}
			>
				<span className={titleClassName}>{title}</span>
				<span
					id={`question${idx}`}
					className='text-muted d-block faq-accordion__question-body'
				>
					{answer}
				</span>
			</button>
		</li>
	);
}

export default AccordionQuestionItem;
