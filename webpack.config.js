module.exports = {
	entry: {
	  preload: './js/micorriza.js'
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
		path: './dist/',
		publicPath: './dist/',
		filename: 'all.bundle.js',
//		chunkFilename: '[id].bundle.js'
	},
	devtool: 'source-map'
};