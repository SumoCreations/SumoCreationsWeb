var path = require('path');
var webpack = require('webpack');
var bourbon = require('bourbon').includePaths;

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/App.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/static', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    loaders: [
    // Images
    {
      test: /\.(png|jpg|svg)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    },
    // JSX
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /(node_modules|bower_components)/
    },
    // SASS
    {
      test: /\.scss$/,
      loader: "style!css!sass?includePaths[]="+bourbon
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
