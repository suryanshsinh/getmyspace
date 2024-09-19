/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"logo": ["Underrated"],
				"body": ["Mulish"],
				"heading": ["Bricolage Grotesque"],
			},
			screens: {
				'md': '920px',
				'lg': '1150px',
			},
			boxShadow: {
				'3xl': '0px 4px 180px 0px #FFFFFF',
				'input': `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
			}
		},
	},
	plugins: [],
};
