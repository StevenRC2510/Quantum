import { RefObject, useEffect } from 'react';
const DIVIDER_SCREEN = 2;

export const useScrollAnimate = (
	section: {
		ref: RefObject<HTMLElement>;
		condition?: number;
	},
	item: RefObject<HTMLElement>,
	animateClass: string[],
	subClass?: Function,
) => {
	useEffect(() => {
		const onScroll = () => {
			const bottomPosition = section.ref?.current?.getBoundingClientRect().bottom;
			const innerHeight = window.innerHeight;
			const arrayT = Array.from(item.current?.classList.values() || []);
			const condition = section.condition ?? innerHeight / DIVIDER_SCREEN;
			if (bottomPosition && bottomPosition + condition < innerHeight) {
				subClass?.(true);
				item.current?.classList.add(...animateClass);
			} else if (
				bottomPosition &&
				bottomPosition + innerHeight / DIVIDER_SCREEN > innerHeight &&
				arrayT.includes(animateClass[0])
			) {
				item.current?.classList.remove(...animateClass);
				subClass?.(false);
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
