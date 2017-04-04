const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: {
		'app': [
			'babel-polyfill',
			'react-hot-loader/patch',
			'webpack/hot/only-dev-server',
			'./src/_main.jsx'
		]
	},
	output: {
		path: path.resolve(__dirname, './www'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}],
		rules: [{
			test: /\.jsx$/,
			exclude: /node_modules/,
			loader: 'jsx-loader!babel-loader'
		}]
	}
}