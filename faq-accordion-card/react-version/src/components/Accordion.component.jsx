import React from 'react';
import AccordionQuestionList from './AccordionQuestionList.component';
import { ReactComponent as Cube } from '../assets/illustration-box-desktop.svg';

const data = [
	{
		title: 'How many team members can I invite?',
		answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
	},
	{
		title: 'What is the maximum file upload size?',
		answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
	},
	{
		title: 'How do I reset my password?',
		answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
	},
	{
		title: 'Can I cancel my subscription?',
		answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
	},
	{
		title: 'Do you provide additional support?',
		answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
	},
];

function Accordion() {
	return (
		<article className='d-flex bg-light faq-accordion'>
			<div className='faq-accordion__picture-box'>
				<Cube className='faq-accordion__picture-cube' />
			</div>
			<div className='faq-accordion__body'>
				<h3 className='h2 faq-accordion__heading'>faq</h3>
				<AccordionQuestionList data={data} />
			</div>
		</article>
	);
}

export default Accordion;
