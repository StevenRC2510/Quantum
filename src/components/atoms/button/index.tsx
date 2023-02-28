import { FC } from 'react';

import { ButtonProps } from 'components/atoms/button/types';

export const Button: FC<ButtonProps> = ({ text, className = '' }) => {
	return (
		<button
			className={`flex flex-row text-black self-center bg-white p-4 border-none rounded-md ${className}`}
		>
			{text}
		</button>
	);
};
