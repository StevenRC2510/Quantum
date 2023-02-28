import { APLICATION, GOAL, INFORMATION, MEMBERSHIP, PROYECTS } from 'constants/index';
import { sectionsLargeCosmicMembershipMock, sectionsLargePillarsMock } from 'mocks/info';

import { generateRefToAnimateToScroll } from './generateAnimation';

import { Button } from 'components/atoms/button';
import { Footer } from 'components/organisms/footer';
import { Header } from 'components/templates/Header';
import { EggRotate } from 'components/templates/EggRotate';
import { CardProjects } from 'components/templates/CardProjects';
import { SectionLarge } from 'components/molecules/SectionLarge';
import { CardGlobeDouble } from 'components/templates/CardGlobeDouble';
import { MoreInformation } from 'components/templates/MoreInformation';
import { Description } from 'components/templates/CardDescriptionCoins';
import { EggWithCodeMain } from 'components/templates/EggWithCodeMain';
import { EggMoveWithBorder } from 'components/templates/EggMoveWithBorder';

import './style.css';
import { styles } from './styles';

export const Home = () => {
	const {
		egg1,
		eggElementCodeMain,
		eggRotateImg,
		eggRotateRef,
		eggSectionRotate,
		eggSection1,
		eggSectionCodeMain,
	} = generateRefToAnimateToScroll();

	return (
		<>
			<Header />
			<EggRotate
				eggElementRef={eggRotateRef}
				eggImageRef={eggRotateImg}
				eggSectionRef={eggSectionRotate}
			/>
			<EggMoveWithBorder eggElementRef={egg1} eggSectionRef={eggSection1} />
			<EggWithCodeMain
				eggElementRef={eggElementCodeMain}
				eggSectionRef={eggSectionCodeMain}
			/>
			<CardGlobeDouble />
			<Description />

			<h1 className={styles.titleStyle}>{MEMBERSHIP.TITLE}</h1>
			<div className="flex flex-col md:gap-24">
				<div className="grid md:h-full sm:grid-cols-3 sm:gap-12  md:gap-20 gap-10 items-start md:px-32 px-10 ">
					{sectionsLargeCosmicMembershipMock.map(({ title, subtitle }) => (
						<SectionLarge key={title} title={title} subtitle={subtitle} />
					))}
				</div>
				<Button className={styles.buttonStyle} text="APPLY NOW" />
			</div>

			<div
				className="flex flex-col justify-center bg-red-500 w-screen h-[100vh] text-white
        shadow-custom-shadow-double bg-cover
        before:absolute before:border-transparent before:bg-clip-border before:blur"
			>
				<h1 className="font-bold text-4xl m-5">{APLICATION.TITLE}</h1>
				<p>{APLICATION.PARGRAPH}</p>
			</div>

			<h1 className={styles.titleStyle}>{GOAL.TITLE}</h1>
			<div className="grid md:h-full sm:grid-cols-4 sm:gap-12  md:gap-20 gap-10 items-start md:px-32 px-10 ">
				{sectionsLargePillarsMock.map(({ title, subtitle }) => (
					<SectionLarge key={title} title={title} subtitle={subtitle} />
				))}
			</div>
			<h1 className={styles.titleStyle}>{PROYECTS.TITLE}</h1>
			<CardProjects />

			<Button text="Apply to membership" className={styles.buttonStyle} />
			<div className=" flex flex-col  items-start bg-white w-screen">
				<h1 className={`${styles.titleStyle} text-3xl text-black pt-20`}>
					{INFORMATION.TITLE}
				</h1>
				<MoreInformation />
				<Button
					text="Visit our help center"
					className={`${styles.buttonStyle} md:self-baseline md:ml-7 bg-[black] text-[white]`}
				/>
			</div>

			<Footer />
		</>
	);
};
