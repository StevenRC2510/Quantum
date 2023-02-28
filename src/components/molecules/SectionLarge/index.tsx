import { FC } from 'react';

import { SectionLargeProps } from 'components/molecules/SectionLarge/types';

import { styles } from 'pages/home/styles';

export const SectionLarge: FC<SectionLargeProps> = ({ title, subtitle }) => {
	return (
		<div className={styles.containerCardStyle}>
			<h1 className={styles.cardTitleStyle}>{title}</h1>
			<p>{subtitle}</p>
		</div>
	);
};
