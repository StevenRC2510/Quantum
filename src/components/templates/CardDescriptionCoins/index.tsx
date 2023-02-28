import { infoEggsDescription } from './constant';
import { useDescriptionCoins } from 'hooks/useDescriptionCoins';
import { DescriptionGlobeProps } from 'components/organisms/DescriptionGlobe/types';

import { CardGlobeWithDescription } from 'components/organisms/CardGlobeWithDescription';

export const Description = () => {
	const { eggsDescriptions } = useDescriptionCoins();

	return (
		<section className="flex flex-col justify-between md:w-full lg:w-[80vw] xl:w-[65vw]">
			{eggsDescriptions?.map((description: DescriptionGlobeProps, index) => (
				<CardGlobeWithDescription
					key={index}
					cardGlobe={{
						...infoEggsDescription(description.type),
						className: '[&>.recort>img]:h-[16rem] [&>.recort>img]:md:h-80',
					}}
					descriptionGlobe={description}
				/>
			))}
		</section>
	);
};
