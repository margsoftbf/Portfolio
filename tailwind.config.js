/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				playFair: ['Playfair Display', 'sans-serif'],
			},
			colors: {
				lightNavy: '#232639',
				darkNavy: '#202235',
				lightOrange: '#ffc576',
			},
			boxShadow: {
				myShadow: '0 6px 12px rgb(0 0 0 / 0.4)',
			},
		},
	},
	plugins: [],
};
