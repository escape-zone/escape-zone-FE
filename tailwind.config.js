/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
		// colors: {
		// 	blue: '#1fb6ff',
		// 	purple: '#7e5bef',
		// 	pink: '#ff49db',
		// 	orange: '#ff7849',
		// 	green: '#13ce66',
		// 	yellow: '#ffc82c',
		// 	'gray-dark': '#273444',
		// 	gray: '#8492a6',
		// 	'gray-light': '#d3dce6'
		// }
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#FF8A50',
					// 'primary-content': '#FFE5D8',
					'primary-content': '#fff3ed',
					'primary-focus': '#ff6315',

					secondary: '#333333',
					'secondary-content': '#fffbe3',
					'secondary-focus': '#ffe44a',

					accent: '#4CAF50',
					'accent-content': '#92CF94',
					'accent-focus': '#2D682F',

					neutral: '#F5F5F5',
					'neutral-content': '#FFFFFF',
					'neutral-focus': '#333333',

					'base-100': '#EBEBEB',
					'base-200': '#DCDCDC',
					'base-300': '#C2C2C2',

					info: '#2F8EFF',
					success: '#00CD0C',
					warning: '#FCAA24',
					error: '#FF5454'

					// --primary-100:#FF5722;
					// --primary-200:#ff8a50;
					// --primary-300:#fff3b0;
					// --accent-100:#4CAF50;
					// --accent-200:#005100;
					// --text-100:#333333;
					// --text-200:#5c5c5c;
					// --bg-100:#F5F5F5;
					// --bg-200:#ebebeb;
					// --bg-300:#c2c2c2;
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
