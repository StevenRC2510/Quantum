import { useInformation } from 'hooks/useInformation';

import { Button } from 'components/atoms/button';
import { InformationPlus } from 'components/molecules/InformationPlus';

import { styles } from 'pages/home/styles';

export const MoreInformation = () => {
	const { moreInformation } = useInformation();

	return (
		<>
			<div className="flex p-3 flex-col md:gap-10 w-full gap-10 md:p-10">
				{moreInformation.map((information) => (
					<InformationPlus key={information} title={information} />
				))}
			</div>
			<Button
				text="Visit our help center"
				className={`${styles.buttonStyle} md:self-baseline md:ml-7 bg-[black] text-[white]`}
			/>
		</>
	);
};
