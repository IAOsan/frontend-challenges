import React from 'react';
import { Illustration } from '../icons';

function RatingActiveState({ scoreSelected, isVisible }) {
	const activeContentClassName = `rating__success-content ${
		!isVisible && 'rating__success-content--hidden'
	}`;

	return (
		<div className={activeContentClassName}>
			<Illustration className='d-block mx-auto mb-28' />
			<span className='d-block mx-auto mb-32 rating__meta'>
				You selected {scoreSelected} out of 5
			</span>
			<h2 className='h2 mb-16'>Thank you!</h2>
			<p className='text-muted mb-16'>
				We appreciate you taking the time to give a rating. If you ever
				need more support, don’t hesitate to get in touch!
			</p>
		</div>
	);
}

export default RatingActiveState;
