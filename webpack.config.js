module.exports = {
	entry: {
	  preload: './test/js/src/main.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015']
	      }
	    }
	  ]
	},
	output: {
		path: './dest',
		publicPath: './dest/',
		filename: 'all.bundle.js',
//		chunkFilename: '[id].bundle.js'
	},
	devtool: 'source-map'
};