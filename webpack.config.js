/* eslint-env node */
module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'app.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel',
			},
			{
				test: /\.css$/,
				exclude: /node_modules|bower_components/,
				loaders: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
};
