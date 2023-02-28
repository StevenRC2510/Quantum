import { FC } from 'react';

import { CardProjectProps } from 'components/organisms/CardProject/types';

import { styles } from './styles';

export const CardProject: FC<CardProjectProps> = ({ mandate, objective, status, title }) => {
	const ringType = 'ring-1 ring-white';

	return (
		<div className={`grid grid-rows-[0.2fr_1fr] row-gap-0   ${ringType} text-white`}>
			<h1 className={`font-bold text-2 h-20 ${ringType}`}>{title}</h1>
			<div className="flex flex-col gap-5 md:gap-0 justify-around  p-6 md:p-0 md:grid md:grid-rows-[repeat(3,0.4fr)_1.8fr_repeat(2,0.3fr)] md:items-center md:justify-items-center">
				<h2 className="font-bold">CORE MANDATE</h2>
				<p className={`${styles.label}  w-2/3`}>{mandate}</p>
				<h2 className="font-bold">objective</h2>
				<p className="text-sm p-1">{objective}</p>
				<h2 className="font-bold mt-5">PROJECT STATUS</h2>
				<p className={`${styles.labelColor} ${status.color} md:m-10`}>{status.status}</p>
			</div>
		</div>
	);
};
