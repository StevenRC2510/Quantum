import { FC } from 'react';

import eth from 'assets/icons/Ethereum.png';
import alg from 'assets/icons/Algorand.png';

import { CardProps } from 'components/molecules/Card/types';

export const CardPrice: FC<CardProps> = ({ price }) => {
	const [firstPrice, secondPrice] = price;
	const iconsStyles = 'w-5 h-5';
	const iconsContainerStyle = 'flex flex-row items-center gap-2';
	return (
		<div className="flex flex-col gap-3 md:gap-10 md:flex-row  p-2">
			<div className={iconsContainerStyle}>
				<img src={eth} alt="icon" className={iconsStyles} />
				<h2 className="font-light text-lg">{`${firstPrice} ETH`}</h2>
			</div>
			<div className={iconsContainerStyle}>
				<img src={alg} alt="icon" className={iconsStyles} />
				<h2 className="font-light text-lg">{`${secondPrice} K ALGO`}</h2>
			</div>
		</div>
	);
};
