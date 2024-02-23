const rspack = require("@rspack/core");
const postcss = require('rollup-plugin-postcss');

const isDev = process.env.NODE_ENV === "development";
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/scripts/main.ts",
		"polyfill-nomodule": "./src/scripts/polyfill-nomodule.ts",
	},
	output: {
		path: "./dist/assets/js",
	},
	plugins: [
		new rspack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js?|ts?)$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							sourceMap: true,
							jsc: {
								parser: {
									syntax: "typescript"
								},
							},
							env: {
								targets: [
									"chrome >= 87",
									"edge >= 88",
									"firefox >= 78",
									"safari >= 14"
								]
							}
						}
					}
				]
			}
		]
	},
};
