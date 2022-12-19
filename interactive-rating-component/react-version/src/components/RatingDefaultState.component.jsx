import React from 'react';
import { Star } from '../icons';
import RatingScoresContainer from './RatingScoresContainer.component';

function RatingDefaultState({ isVisible, onSelect, onSend }) {
	const defaultContentClassName = `rating__default-content ${
		isVisible && 'rating__default-content--hidden'
	}`;

	return (
		<div className={defaultContentClassName}>
			<div className='rating__dot pos-rel mb-28'>
				<Star className='icon pos-abs pos-centered' />
			</div>
			<form id='form' onChange={onSelect} onSubmit={onSend}>
				<h2 className='h2 mb-16'>How did we do?</h2>
				<p className='text-muted mb-28'>
					Please let us know how we did with your support request. All
					feedback is appreciated to help us improve our offering!
				</p>
				<RatingScoresContainer size={5} />
				<button
					id='submitBtn'
					className='btn btn--default btn--block btn--rounded btn--primary text-uppercase'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default RatingDefaultState;
