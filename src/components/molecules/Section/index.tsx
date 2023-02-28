import { FC } from 'react';

import { SectionProps } from 'components/molecules/Section/types';

export const Section: FC<SectionProps> = ({ options, title, className = 'flex' }) => {
	return (
		<section className={`flex-col ${className}`}>
			<h2 className="font-bold text-gray-500 mb-4 ">{title}</h2>
			<div>
				{options.map((option) => (
					<p key={option}>{option}</p>
				))}
			</div>
		</section>
	);
};
