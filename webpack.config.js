
module.exports = {
  // bundles all the node_modules in index.js into a public 
  // folder called bundle.js
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        // json loader runs on all json files
        test: /\.json$/,
        loader: 'json-loader'
      },
      { 
        // babel loader runs on all js files 
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};


// babel helps us laod the react 