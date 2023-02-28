import { HEADER } from 'constants/index';

export const Header = () => {
	return (
		<header
			className={`flex flex-col relative bg-gif-home shadow-custom-shadow bg-cover w-screen h-[20rem] sm:h-[120rem]
         lg:h-[180rem] bg-bottom justify-center before:absolute before:border-transparent before:bg-clip-border before:blur`}
		>
			<h1 className="text-white p-10 font-bold text-xl md:text-4xltext-center ">
				{HEADER.TITLE}
			</h1>
		</header>
	);
};
