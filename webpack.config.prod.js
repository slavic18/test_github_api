/* eslint-disable */
var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var projectDir = path.join(__dirname, './public');
module.exports = require('./webpack.config.js');    // inherit from the main config file
// disable the hot reload
module.exports.entry = [
    'babel-polyfill',
    __dirname + '/src/index.js'
];

module.exports.output = {
  path: projectDir + '/js',
  filename: 'bundle.js',
};

// module.exports.plugins = [
//   new CleanWebpackPlugin(['../css/main.css', 'js/bundle.js'], {
//     root: projectDir,
//     verbose: true,
//     dry: false, // true for simulation
//   }),
// ];



// production env
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        }
    })
);

// compress the js file
module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compressor: {
            warnings: false
        }
    })
);

// export css to a separate file
module.exports.module.loaders[1] = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!sass'),
};

module.exports.plugins.push(
    new ExtractTextPlugin('../css/main.css')
);
