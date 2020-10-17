const PATH = require('path');
const SRC_FOLDER = PATH.resolve(__dirname, 'src');
const ENTRY_FILE = PATH.resolve(SRC_FOLDER, 'index.js');
const OUTPUT_FOLDER = PATH.resolve(__dirname, 'public');

const config = {
	devtool: 'source-map',
	entry: {
		app: ENTRY_FILE
	},
	output: {
		path: OUTPUT_FOLDER, 
		filename: '[name].js',
		sourceMapFilename: '[name].js.map'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [SRC_FOLDER],
				use: 'babel-loader'
			}
		]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	}
};

module.exports = config;