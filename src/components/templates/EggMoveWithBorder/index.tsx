import { EggTypes } from 'types';

export const EggMoveWithBorder = ({ eggElementRef, eggSectionRef }: EggTypes) => {
	return (
		<section
			ref={eggSectionRef}
			className="flex justify-center items-center w-80 md:w-96 h-[50vh] sm:h-2/6"
		>
			<span
				className="second-remove transition-all duration-1000 flex h-80 md:h-96  w-72 md:w-96"
				ref={eggElementRef}
			/>
		</section>
	);
};
