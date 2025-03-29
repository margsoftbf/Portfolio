/** @type {import('tailwindcss').Config} */

const primaryColor = '#8750f7';
const primaryColor2 = '#9b8dff';
const primaryColorLight = '#140c1c';
const seondaryColor = '#2a1454';
const bodyColor = '#dddddd';
const bodyColor2 = '#7A7A7A';
const whiteColor = '#ffffff';
const blackColor = '#050709';
const blackColor2 = '#0b0410';
const grayColor = '#636363';
const grayColor2 = '#747779';
const grayColor3 = '#22272c';
const borderColor = '#d9d9d9';
const creamLightColor = '#f6f3fc';
const darkColor = '#0f0715';
const bgColor = '#10171c';
const bgColor2 = '#FFFFFF1A';
const bgColor3 = '#d9d9d980';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				playFair: ['Playfair Display', 'sans-serif'],
				sora: ['Sora', 'sans-serif'],
				russo: ['Russo One', 'sans-serif'],
			},
			colors: {
				lightNavy: '#232639',
				darkNavy: '#202235',
				lightOrange: '#ffc576',

				'primary-color': primaryColor,
				'primary-color-2': primaryColor2,
				'primary-color-light': primaryColorLight,
				'seondary-color': seondaryColor,
				'body-color': bodyColor,
				'body-color-2': bodyColor2,
				'white-color': whiteColor,
				'black-color': blackColor,
				'black-color-2': blackColor2,
				'gray-color': grayColor,
				'gray-color-2': grayColor2,
				'gray-color-3': grayColor3,
				'dark-color': darkColor,
				'border-color': borderColor,
				'cream-light-color': creamLightColor,
				'bg-color': bgColor,
				'bg-color-2': bgColor2,
				'bg-color-3': bgColor3,
			},
			boxShadow: {
				myShadow: '0 6px 12px rgb(0 0 0 / 0.4)',
			},
		},
	},
	plugins: [],
};
