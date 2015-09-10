var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/App.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  devtool: 'source-map',
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
      loaders: ['babel'], // Disabled react-hot for time being ('react-hot')
      exclude: /(node_modules|bower_components)/
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
    new ExtractTextPlugin('styles.css'),
    // new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
