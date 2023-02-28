/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react';

import { useScrollAnimate } from 'hooks/useScrollAnimate';
import { eggStylesToAnimate } from './styles';

export const generateRefToAnimateToScroll = () => {
	const eggRotateRef = useRef<HTMLSpanElement>(null);
	const eggRotateImg = useRef<HTMLImageElement>(null);
	const eggSectionRotate = useRef<HTMLDivElement>(null);
	const egg1 = useRef<HTMLSpanElement>(null);
	const eggSection1 = useRef<HTMLDivElement>(null);
	const eggElementCodeMain = useRef<HTMLSpanElement>(null);
	const eggSectionCodeMain = useRef<HTMLDivElement>(null);

	const handleRotate = (bool: boolean) => {
		if (bool) {
			eggRotateImg.current?.classList.remove('rotate');
			eggRotateRef.current?.classList.add(...['[&>h1]:opacity-0']);
			eggRotateRef.current?.classList.remove(...['translate-y-0', 'scale-100']);
		} else {
			eggRotateRef.current?.classList.add(...['translate-y-0', 'scale-100']);
			eggRotateRef.current?.classList.remove(...['[&>h1]:opacity-0']);
			eggRotateImg.current?.classList.add('rotate');
		}
	};
	const handleChangeScaleEggNotBorder = (bool: boolean) => {
		if (bool) {
			egg1.current?.classList.remove(...['scale-0']);
		} else {
			egg1.current?.classList.add(...['scale-0']);
		}
	};
	const handleChangeOpacityEggs = (bool: boolean) => {
		if (bool) {
			eggRotateRef.current?.classList.add(...['opacity-0']);
			egg1.current?.classList.add(...['opacity-0']);
			eggElementCodeMain.current?.classList.remove(...['opacity-0']);
		} else {
			eggRotateRef.current?.classList.remove(...['opacity-0']);
			egg1.current?.classList.remove(...['opacity-0']);
			eggElementCodeMain.current?.classList.add(...['opacity-0']);
		}
	};
	useScrollAnimate(
		{ ref: eggSectionRotate, condition: undefined },
		eggRotateRef,
		eggStylesToAnimate,
		handleRotate,
	);
	useScrollAnimate(
		{ ref: eggSection1, condition: window.innerHeight / 9 },
		egg1,
		['second', 'ring-2', 'ring-white', 'rounded-md', 'scale-100'],
		handleChangeScaleEggNotBorder,
	);
	useScrollAnimate({ ref: eggSection1, condition: window.innerHeight / 2 }, eggRotateRef, [
		'lg:translate-y-[103rem]',
		'sm:scale-[0.5]',
	]);
	useScrollAnimate({ ref: eggSection1, condition: window.innerHeight / 2 }, egg1, [
		'translate-y-[50.5rem]',
		'h-[25rem]',
		'w-80',
		'md:w-80',
	]);
	useScrollAnimate(
		{ ref: eggSectionCodeMain, condition: window.innerHeight / 9 },
		eggElementCodeMain,
		['opacity-100'],
		handleChangeOpacityEggs,
	);
	return {
		eggRotateRef,
		eggRotateImg,
		eggSectionRotate,
		egg1,
		eggSection1,
		eggElementCodeMain,
		eggSectionCodeMain,
		handleRotate,
		handleChangeScaleEggNotBorder,
		handleChangeOpacityEggs,
	};
};
