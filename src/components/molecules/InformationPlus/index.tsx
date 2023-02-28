import { FC } from 'react';

import { plus } from 'assets/icons/index';

import { InformationPlusProps } from 'components/molecules/InformationPlus/types';

export const InformationPlus: FC<InformationPlusProps> = ({ title }) => {
	return (
		<section className="border-b-2">
			<div className="flex flex-row justify-between items-center mb-3 pr-2 md:pr-0 md:mb-10 text-left w-[99%] text-sm md:text-base ">
				<p className=" text-4">{title}</p>
				<a href="/">
					<img className="w-4 h-4" src={plus} alt="plus" />
				</a>
			</div>
		</section>
	);
};
