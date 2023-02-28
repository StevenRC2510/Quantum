import { EggTypesWithImg } from 'types';

import { golderDark } from 'assets/images';

export const EggRotate = ({ eggSectionRef, eggElementRef, eggImageRef }: EggTypesWithImg) => {
	return (
		<section
			ref={eggSectionRef}
			className="flex justify-center items-center bg-center  bg-no-repeat bg-contain h-[50vh] sm:h-2/5 "
		>
			<span
				className="transition-transform duration-1000 translate-y-0 scale-100  relative  w-80 md:w-[40rem] flex flex-col justify-center items-center"
				id="cosmic-membership"
				ref={eggElementRef}
			>
				<img
					ref={eggImageRef}
					className="rotate w-80 md:w-full"
					src={golderDark}
					alt="egg-main"
				/>
				<h1 className="text-white w-[50%] font-bold text-xl md:text-3xl text-center text-[2rem] absolute z-50 top-[45%]">
					IT ALL BEGINS WITH A COSMIC EGG
				</h1>
			</span>
		</section>
	);
};
