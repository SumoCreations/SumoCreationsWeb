var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var config = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'bootstrap-loader',
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
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.js$/, loaders: ['babel'], exclude: /(node_modules|bower_components)/},
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass', 'sass-resources' ] },
    ]
  },
  postcss: [ autoprefixer ],
  sassResources: './app/config/sass-resources.scss',
};

module.exports = config;
