import { SectionProps } from 'components/molecules/Section/types';
import { CardProjectProps } from 'components/organisms/CardProject/types';
import { SectionLargeProps } from 'components/molecules/SectionLarge/types';

import { Colors } from '../styles/colors';

export const goldDescriptionMock = {
	title: 'COLLECT A COSMIC EGG GOLD TO',
	type: 'gold',
	description: [
		'Donate 50% to Impact Fund treasury (see ETH & ALGO)',
		'Get invited to official in-person event',
		'Earn 5 governance votes in the Impact Fund ',
		'Access to future NFT airdrops and rewards ',
		'Access to exclusive token-gated community ',
		'Earn Quantum Temple founding member status ',
	],
	priceAlgo: 29,
	priceETH: 4,
	subDescription: '111 on Ethereum - 111 on Algorand',
	subTitle: 'TOTAL SUPPLY COSMIC EGG GOLD NFTs',
};

export const silverDescriptionMock = {
	title: 'COLLECT A COSMIC EGG SILVER TO',
	type: 'silver',
	description: [
		'Donate 50% to Impact Fund treasury (see ETH & ALGO)',
		'Get invited to official in-person event',
		'Earn 5 governance votes in the Impact Fund',
		'Access to future NFT airdrops and rewards',
		'Access to exclusive token-gated community',
		'Earn Quantum Temple founding member status',
	],
	priceAlgo: 7.25,
	priceETH: 1,
	subDescription: '111 on Ethereum - 111 on Algorand',
	subTitle: 'TOTAL SUPPLY COSMIC EGG SILVER NFTs',
};

export const projectsMock: CardProjectProps[] = [
	{
		title: `workshops on crypto
        on ramps to local
        community in bali`,
		mandate: 'education',
		objective: `Educate Members of the communities
    that participated in the development of the NFT collections on web3 so that they
    can receive and manage their funds.`,
		status: {
			color: `bg-[${Colors.ON_REVIEW}]`,
			status: 'on review',
		},
	},
	{
		title: `set up a team field for research purposes`,
		mandate: 'infraestructure',
		objective: `Set up an on field team to arrange and manage all the onsite projects`,
		status: {
			color: `bg-[${Colors.IMPLEMENTED}]`,
			status: 'implemented',
		},
	},
	{
		title: `workshops on crypto
    on ramps to local
    community in bali`,
		mandate: 'education',
		objective: `Educate Members of the communities
    that participated in the development of
    the NFT collections on web3 so that they
    can receive and manage their funds.`,
		status: {
			color: `bg-[${Colors.WAITING_FOR_MEMBERS_APPROVAL}]`,
			status: 'waiting for members approval',
		},
	},
	{
		title: `set up a team
    field for research
    purposes`,
		mandate: 'infraestructure',
		objective: `Set up an on field team to arrange and
    manage all the onsite projects`,
		status: {
			color: `bg-[${Colors.IMPLEMENTED}]`,
			status: 'implemented',
		},
	},
];

export const moreInformationMock = [
	'what’s the purpose for the application membership?',
	'how does governance work?',
	'Is there a scholarship application?',
	'what’s the origin of the cosmic egg?',
	'why should i buy a cosmic egg?',
];

export const sectionsLargeCosmicMembershipMock: SectionLargeProps[] = [
	{
		title: 'JOIN OUR WAITLIST',
		subtitle:
			'Quantum Temple performs an extensive screening to ensure that each member is aligned with the purpose and mission of the organization',
	},

	{
		title: 'COMPLETE APPLICATION',
		subtitle:
			'Once the allowlist application opens, you will receive a link to the form where we will ask you a series of important questions to ensure you are aligned with the purpose of the organization.',
	},
	{
		title: 'ACTIVATE MEMBERSHIP',
		subtitle:
			'If you qualify, you will receive a link in your email to purchase and activate your Cosmic Membership',
	},
];

export const sectionsLargePillarsMock: SectionLargeProps[] = [
	{
		title: 'INFRAESTRUCTURE DEVELOPMENT',
		subtitle:
			'Providing the infrastructure necessary to access connectivity (eg.green energy, Wi-Fi network , cable , etc .).',
	},
	{
		title: 'CRYPTO ON-RAMPS & OFF-RAMPS',
		subtitle:
			'Providing easy-to-access and regulated crypto on-ramps and off ramps product solutions to interact with the wider Web3 ecosystem.',
	},
	{
		title: 'WEB3 EDUCATION',
		subtitle:
			'Providing valuable educational content and knowledge to understand, learn, and embrace Web3 as a new paradigm, technology, and a force for good.',
	},

	{
		title: 'HERITAGE REVITALIZATION',
		subtitle:
			'Supporting research, conservation and implementation projects around traditional knowledge & cultural expressions in partnership with ancestral communities.',
	},
];

export const sectionsMook: SectionProps[] = [
	{
		title: 'Carreer',
		options: ['open positions'],
		className: 'hidden md:flex ',
	},
	{
		title: 'Press',
		options: ['DOWNLOAD', 'media kit'],
	},

	{
		title: 'NEWS',
		options: ['BLOG', 'LITEPAPER', 'pitch deck'],
	},
	{
		title: 'sections',
		options: ['our mission', 'drops', 'MEMBERSHIPS'],
	},
	{
		title: 'SUPPORT',
		options: ['CONTACT US', 'FAQs', 'Terms & Conditions'],
	},
];
