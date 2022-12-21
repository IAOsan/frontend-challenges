import React, { useState } from 'react';
import AccordionQuestionItem from './AccordionQuestionListItem.component';

function AccordionQuestionList({ data }) {
	const [active, setActive] = useState(null);

	function handleClick(idx) {
		setActive((prevState) => {
			return idx === prevState ? null : idx;
		});
	}
	return (
		<ul>
			{data.map((q, idx) => (
				<AccordionQuestionItem
					key={idx}
					idx={idx}
					isActive={idx === active}
					onSelect={handleClick}
					{...q}
				/>
			))}
		</ul>
	);
}

export default AccordionQuestionList;
