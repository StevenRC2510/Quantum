import { RefObject } from 'react';

export type EggTypes = {
	eggSectionRef: RefObject<HTMLDivElement>;
	eggElementRef: RefObject<HTMLSpanElement>;
};

export interface EggTypesWithImg extends EggTypes {
	eggImageRef: RefObject<HTMLImageElement>;
}
