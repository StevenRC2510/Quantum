import {
	golderDark,
	goldenHover,
	silverDark,
	goldEgg,
	silverEgg,
	silverHover,
} from 'assets/images/index';

import { InfoEggsDescriptionValues } from './types';

export const infoEggsDescription = (typeEggs: string) => {
	const type = typeEggs.toLowerCase();
	const value: Record<string, InfoEggsDescriptionValues> = {
		gold: {
			type,
			codeImage: goldEgg,
			globeImage: [golderDark, goldenHover],
		},
		silver: {
			type,
			codeImage: silverEgg,
			globeImage: [silverDark, silverHover],
		},
	};

	return value[type] || value['gold'];
};
