import { BsMedium } from 'react-icons/bs';
import { FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

import { useFooter } from 'hooks/useFooter';

import { Section } from 'components/molecules/Section';

export const Footer = () => {
	const { footerData } = useFooter();

	return (
		<footer className="grid  grid-rows-1  md:grid-cols-2 text-white md:ml-4 text-sm text-center md:text-left ">
			<div className="flex flex-col md:text-left md:ml-5 items-center md:items-start ">
				<h1 className="text-white font-bold  md:w-auto w-36 text-4xl pt-10 md:pt-0 pb-10 md:pb-20 md:pl-0 ">
					quantum temple
				</h1>

				<div className="hidden md:flex flex-col gap-3  ">
					<h4 className="mb-5">Join out email list</h4>
					<div className="flex flex-row mb-6">
						<input
							placeholder="YOUR EMAIL"
							className="bg-black placeholder-slate-400 border-b-[1px] md:w-[14rem]"
						/>
						<button type="button" className="bg-black text-white border-b-[1px]">
							subscribe
						</button>
					</div>
					<p className="text-xs text-gray-500 mt-5  mb-5">
						QUANTUM TEMPLE ALL RIGHTS RESERVE
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-6">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-10  md:pb-10 md:pr-10  ">
					{footerData.map((section) => (
						<Section
							key={section.title}
							title={section.title}
							options={section.options}
							className={section.className}
						/>
					))}
				</div>
				<section className=" text-[1.8rem] grid grid-cols-3 justify-items-center md:flex md:flex-row gap-10 md:justify-end p-5">
					<AiOutlineTwitter />
					<AiOutlineInstagram />
					<AiFillYoutube />
					<FaLinkedinIn />
					<BsMedium />
					<FaTiktok />
				</section>
			</div>
		</footer>
	);
};
