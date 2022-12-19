import React from 'react';
import RatingScoreInput from './RatingScoreInput.component';

function RatingScoresContainer({ size }) {
	const scores = Array.from({ length: size }, (_, i) => i + 1);
	return (
		<div className='d-flex d-flex-nowrap d-flex-jc-sb mb-28 rating__dots-box'>
			{scores.map((n) => (
				<RatingScoreInput key={n} score={n} />
			))}
		</div>
	);
}

export default RatingScoresContainer;
