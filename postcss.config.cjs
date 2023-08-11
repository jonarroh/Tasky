const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssNesting = require('postcss-nesting');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
		postcssImport(),
		cssNesting
	]
};

module.exports = config;
