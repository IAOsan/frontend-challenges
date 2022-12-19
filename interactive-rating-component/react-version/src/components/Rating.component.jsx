import React, { useState } from 'react';
import RatingActiveState from './RatingActiveState.component';
import RatingDefaultState from './RatingDefaultState.component';

function Rating() {
	const [score, setScore] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleClick(e) {
		const { value } = e.target;
		setScore(+value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!!score) setIsSubmitted(true);
	}

	return (
		<article className='mx-auto rating'>
			<RatingDefaultState
				isVisible={isSubmitted}
				onSelect={handleClick}
				onSend={handleSubmit}
			/>
			<RatingActiveState scoreSelected={score} isVisible={isSubmitted} />
		</article>
	);
}

export default Rating;
