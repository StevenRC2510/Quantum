import { useEffect, useState } from 'react';

import { SectionProps } from 'components/molecules/Section/types';

export const useFooter = () => {
	const [footerData, setFooterData] = useState<SectionProps[]>([]);

	useEffect(() => {
		fetch('/footer', {
			method: 'GET',
		}).then((response) => {
			response.json().then((data) => {
				setFooterData(data.data);
			});
		});
	}, []);

	return { footerData };
};
