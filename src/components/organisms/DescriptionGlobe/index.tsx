import { FC } from 'react';
import { Button } from 'components/atoms/button';
import { CardPrice } from 'components/molecules/Card';

import { DescriptionGlobeProps } from 'components/organisms/DescriptionGlobe/types';

export const DescriptionGlobe: FC<DescriptionGlobeProps> = ({
	title,
	description,
	subTitle,
	subDescription,
	priceAlgo,
	priceETH,
}) => {
	return (
		<div className="flex flex-col text-white text-left gap-5 [&>button]:self-start">
			<h1 className="font-bold text-xl text  sm:w-72 sm:text-left text-left">{title}:</h1>
			<ul className="list-[square] [&>li]:text-xs pl-3 md:gap-0 gap-2 flex flex-col">
				{description.map((element, i) => (
					<li key={`list-${i}`}>{element}</li>
				))}
			</ul>

			<div className="flex flex-col gap-2">
				<h4 className=" text-gray-500 text-sm">{subTitle}</h4>
				<p className=" text-white text-xs">{subDescription}</p>
			</div>
			<div className="flex flex-col gap-2">
				<h4 className="text-gray-500 text-sm">SALE PRICE:</h4>
				<CardPrice price={[priceETH, priceAlgo]} />
			</div>

			<Button
				className="p-3 text-sx md:text-sxx rounded md:px-10 font-bold w-[90vw] md:w-auto justify-center "
				text="CONNECT NOW"
			/>
		</div>
	);
};
