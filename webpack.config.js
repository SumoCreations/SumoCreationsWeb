var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './app/App.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
    // JSX
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },
    // SASS
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
      )
    }]
  },
  plugins: [
    // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;
