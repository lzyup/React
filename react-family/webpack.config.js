const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack');

const commonConfig = require('./webpack.common.config');
const { publicEncrypt } = require('crypto');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
}

module.exports = merge(commonConfig, publicConfig);