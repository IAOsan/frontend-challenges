import React from 'react';
import Accordion from './components/Accordion.component';
import './styles.css';

// FIXME arreglar animacion al expandir
function App() {
	return (
		<main className='d-flex d-flex-ai-c d-flex-jc-c'>
			<div className='container'>
				<Accordion />
			</div>
		</main>
	);
}

export default App;
