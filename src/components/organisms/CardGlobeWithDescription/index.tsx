import { FC } from 'react';

import { CardGlobe } from 'components/organisms/CardGlobe';
import { DescriptionGlobe } from 'components/organisms/DescriptionGlobe';

import { CardGlobeWithDescriptionProps } from 'components/organisms/CardGlobeWithDescription/types';

export const CardGlobeWithDescription: FC<CardGlobeWithDescriptionProps> = ({
	cardGlobe,
	descriptionGlobe,
}) => {
	return (
		<div className="flex sm:flex-row flex-col justify-between  items-center p-5 gap-20 lg:gap-11 ">
			<CardGlobe {...cardGlobe} />
			<DescriptionGlobe {...descriptionGlobe} />
		</div>
	);
};
