/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				sxx: '0.60rem',
			},
			backgroundImage: {
				'gif-home': "url('/src/assets/gifs/video.gif')",
			},
			boxShadow: {
				'custom-shadow': `inset 2px -100px 35px -44px rgba(0,0,0,1)`,
				'custom-shadow-double': `-2px 6px 112px -4px rgba(0,0,0,1) inset`,
			},
		},
	},
	plugins: [],
};
