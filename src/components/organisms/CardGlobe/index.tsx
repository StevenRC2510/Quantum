import { FC } from 'react';

import { CardGlobeProps } from 'components/organisms/CardGlobe/types';

export const CardGlobe: FC<CardGlobeProps> = ({ globeImage, codeImage, type, className = '' }) => {
	const [firstImage, secondImage] = globeImage;
	return (
		<div
			className={`grid grid-cols-1  ring-2 rounded-md ring-white dml-3 h-full ${className} cursor-pointer group`}
		>
			<div className="relative">
				<img
					src={firstImage}
					alt="Globe"
					className="transition-opacity opacity-100 group-hover:opacity-0 w-64 h-full md:w-80 md:h-80"
				/>
				<img
					src={secondImage}
					alt="Globe"
					className="transition-opacity  absolute opacity-0 top-0 left-0 group-hover:opacity-100 w-64 h-64 md:w-80 md:h-80"
				/>
			</div>
			<div className="flex flex-row items-center justify-between text-white p-2">
				<img src={codeImage} alt="code" className="w-10 h-10" />
				<div className="p-2 ">
					<p className="text-right">COSMIC EGG</p>
					<p className="text-right text-sm">{type}</p>
				</div>
			</div>
		</div>
	);
};
