var path = require('path');
var webpack = require('webpack');
var bourbon = require('bourbon').includePaths;

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/App.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/static', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // Images
    {
      test: /\.(png|jpg|svg)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    },
    // JSX
    {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /(node_modules|bower_components)/
    },
    // SASS
    {
      test: /\.scss$/,
      loader: "style!css!sass?includePaths[]="+bourbon
    }]
  },
};

module.exports = config;
