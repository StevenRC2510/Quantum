import { useEffect, useState } from 'react';

export const useInformation = () => {
	const [moreInformation, setMoreInformation] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch('/more-information');
			const json = await response.json();
			setMoreInformation(json.data);
		})();
	}, []);

	return { moreInformation };
};
