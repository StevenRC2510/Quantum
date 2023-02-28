import { EggTypes } from 'types';
import { golderDark, goldenHover, goldEgg } from 'assets/images/index';

import { CardGlobe } from 'components/organisms/CardGlobe';

export const EggWithCodeMain = ({ eggElementRef, eggSectionRef }: EggTypes) => {
	return (
		<section
			ref={eggSectionRef}
			className="flex justify-center items-center w-80 md:w-96 h-[50vh] sm:h-2/6"
		>
			<span ref={eggElementRef} className="transition-all opacity-0 duration-1000">
				<CardGlobe codeImage={goldEgg} globeImage={[golderDark, goldenHover]} type="GOLD" />
			</span>
		</section>
	);
};
