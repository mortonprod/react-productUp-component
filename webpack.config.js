'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
module.exports =  {
  entry: {
		bundle: "./productsMoveUp.js"
	},
	plugins: [new ExtractTextPlugin("index.css"),new OptimizeCssAssetsPlugin(), new UglifyJSPlugin() ],
  module:{
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    },
		{ test: /\.css$/, loader:ExtractTextPlugin.extract("css-loader") }
  ]
  },
  externals: {
    'react': 'commonjs react', 
		'lodash':'commonjs lodash',
		'react-addons-css-transition-group':'commonjs react-addons-css-transition-group'

  },
	output:{
    libraryTarget: 'umd',
  	filename: 'index.js',	
		path: path.resolve(__dirname, 'dist')
	},
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
