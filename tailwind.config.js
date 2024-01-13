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
					'base-300': '#C2C2C2'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
