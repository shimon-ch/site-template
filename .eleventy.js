module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy({ public: "./" });

	eleventyConfig.setServerOptions({
		watch: ['./dist/assets/**/*'],
	});

	eleventyConfig.addFilter("isDev", () => {
		return process.env.NODE_ENV !== "production";
	});

	return {
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: "src/pages",
			includes: "../layouts",
			layout: '../layouts',
			output: "dist",
		}
	};
};
