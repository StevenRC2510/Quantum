import MenuIcon from 'assets/icons/menu';

export const Navbar = () => {
	const menu = ['ABOUT', 'DROPS', 'MEMBERSHIPS', 'CONNECT'];
	const linksStyle =
		'text-[1rem] font-bold text-white p-5 rounded-md hover:text-black hover:bg-white cursor-pointer last:bg-white last:text-black hover:last:opacity-70 ';
	return (
		<nav className="flex sticky px-3 bg-black  z-20 w-screen top-0 items-center justify-between [&>h1]:text-[2rem] [&>h1]:text-white [&>h1]:p-3 [&>h1]:font-bold ">
			<h1>QT</h1>
			<section className="hidden gap-[12px] p-3 sm:flex ">
				{menu.map((option) => (
					<p key={option} className={linksStyle}>
						{option}
					</p>
				))}
			</section>
			<span className="block self-center text-white sm:hidden">
				<MenuIcon width={40} height={40} fill={'#fff'} />
			</span>
		</nav>
	);
};
