const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {DefinePlugin} = require('webpack')
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const PROD_BASE_URL = JSON.stringify('/transboar');
const LOCAL_BASE_URL = JSON.stringify('');

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new DefinePlugin({
			PRODUCTION: prod,
			BASE_URL: prod ? PROD_BASE_URL : LOCAL_BASE_URL
		})
	],
	devtool: prod ? false: 'source-map'
};