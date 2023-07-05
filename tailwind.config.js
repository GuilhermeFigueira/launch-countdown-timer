/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			blue: {
				grayish: "hsl(237, 18%, 59%)",
				desaturated: "hsl(236, 21%, 26%)",
				dark: "hsl(235, 16%, 14%)",
				black: "hsl(234, 17%, 12%)",
			},
			red: "hsl(345, 95%, 68%)",
		},
	},
	plugins: [],
};
