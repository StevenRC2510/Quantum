import { useEffect, useState } from 'react';

import { CardProjectProps } from 'components/organisms/CardProject/types';
import { DescriptionGlobeProps } from 'components/organisms/DescriptionGlobe/types';

export const useFetchData = () => {
	const [eggsDescriptions, setEggsDescriptions] = useState<DescriptionGlobeProps[]>();
	const [moreInformation, setMoreInformation] = useState<string[]>([]);
	const [projects, setProjects] = useState<CardProjectProps[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('/description');
			const response2 = await fetch('/more-information');
			const response3 = await fetch('/projects');
			const json = await response.json();
			const json2 = await response2.json();
			const json3 = await response3.json();
			setEggsDescriptions(json.data);
			setMoreInformation(json2.data);
			setProjects(json3.data);
		})();
	}, []);

	return [eggsDescriptions, moreInformation, projects];
};
