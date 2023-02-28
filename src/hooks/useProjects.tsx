import { useEffect, useState } from 'react';

import { CardProjectProps } from 'components/organisms/CardProject/types';

export const useProjects = () => {
	const [projects, setProjects] = useState<CardProjectProps[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('/projects');
			const json = await response.json();
			setProjects(json.data);
		})();
	}, []);

	return { projects };
};
