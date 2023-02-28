import { useEffect, useState } from 'react';

import { DescriptionGlobeProps } from 'components/organisms/DescriptionGlobe/types';

export const useDescriptionCoins = () => {
	const [eggsDescriptions, setEggsDescriptions] = useState<DescriptionGlobeProps[]>();
	useEffect(() => {
		(async () => {
			const response = await fetch('/description');
			const json = await response.json();
			setEggsDescriptions(json.data);
		})();
	}, []);

	return {
		eggsDescriptions,
	};
};
