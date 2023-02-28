import { AnimationOnScroll } from 'react-animation-on-scroll';

import codeGold from 'assets/images/codeGold.png';
import codeSilver from 'assets/images/codeSilver.png';
import silverDark from 'assets/images/Silver_dark.png';
import goldenDark from 'assets/images/Golden_dark.png';
import silverHover from 'assets/images/Silver_hover.png';
import goldenHover from 'assets/images/Golden_hover.png';
import { CardGlobe } from 'components/organisms/CardGlobe';

export const CardGlobeDouble = () => {
	return (
		<section className=" flex flex-row justify-center items-center h-[50vh] sm:h-2/6">
			<div className=" relative flex flex-row right-16">
				<AnimationOnScroll
					animateIn="animate__fadeInLeftBig"
					animateOut="animate__bounceOutDown"
					className="z-10"
				>
					<CardGlobe
						className="relative left-[6.5rem] md:left-[8.5rem] z-10  bg-black [&>.recort>img]:h-[12rem] [&>.recort>img]:md:h-80"
						codeImage={codeGold}
						globeImage={[goldenDark, goldenHover]}
						type="GOLD"
					/>
				</AnimationOnScroll>
				<AnimationOnScroll
					animateIn="animate__fadeInRightBig"
					animateOut="animate__bounceOutDown"
					className="z-0"
				>
					<CardGlobe
						className="[&>.recort>img]:h-[12rem] [&>.recort>img]:md:h-80"
						codeImage={codeSilver}
						globeImage={[silverDark, silverHover]}
						type="SILVER"
					/>
				</AnimationOnScroll>
			</div>
		</section>
	);
};
