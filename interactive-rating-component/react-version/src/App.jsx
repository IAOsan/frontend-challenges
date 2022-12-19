import React from 'react';
import Rating from './components/Rating.component';
import './styles.css';

function App() {
	return (
		<main className='d-flex d-flex-ai-c d-flex-jc-c'>
			<div className='container'>
				<Rating />
			</div>
		</main>
	);
}

export default App;
