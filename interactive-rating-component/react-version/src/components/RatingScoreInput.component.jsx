import React from 'react';

function RatingScoreInput({ score }) {
	return (
		<label className='rating__score'>
			<input type='radio' name='rating' value={score} />
			<span className='rating__score-dot' data-content={score}></span>
			<span className='sr-only'>{score}</span>
		</label>
	);
}

export default RatingScoreInput;
