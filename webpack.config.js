var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        hot: true
    },

    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('public'),
        new HtmlWebpackPlugin({ template: './src/index.html', title: 'Demo title' }),
        new webpack.HotModuleReplacementPlugin()
    ]
};