'use strict';

const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_PATH    = path.join(__dirname, '..', 'src');
var BUILD_PATH  = path.join(__dirname, '..', 'dist');
var HTML_OPTS   = {
  filename: 'testbench.html',
  title:    'Nimbus Testbench'
};

module.exports = {
  quiet: true,
  context: SRC_PATH,
  entry: [ path.join(SRC_PATH, 'testbench.js') ],
  resolve: {
    root: SRC_PATH,
    extensions: [ '', '.js' ]
  },
  output: {
    path: BUILD_PATH,
    filename: 'testbench.js'
  },
  plugins: [ new HtmlWebpackPlugin(HTML_OPTS) ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      }
    ]
  }
};
