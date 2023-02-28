import { Navbar } from 'components/organisms/navbar';

import { ContainerProps } from 'container/types';

export const Layout = ({ children }: ContainerProps) => {
	return (
		<div className="grid bg-black grid-cols-1 gap-0">
			<Navbar />
			<main className="flex flex-col items-center content-center justify-center text-center gap-24 mt-4">
				{children}
			</main>
		</div>
	);
};
