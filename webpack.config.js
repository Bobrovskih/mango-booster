const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SERVER = process.env.SERVER || 'http://localhost/';

module.exports = {
    target: "web",
    entry: {
        background: "./src/js/background.js",
    },
    plugins: [
        new DefinePlugin({
            SERVER: JSON.stringify(SERVER),
        }),
        new CopyWebpackPlugin([{
            from: './src/html',
            to: './html'
        }, {
            from: './src/images',
            to: './images'
        }, {
            from: './src/js/jquery.js',
            to: './',
        }, ]),
        new HtmlWebpackPlugin({
            SERVER,
            template: './src/html/background.html',
            filename: './html/background.html',
            chunks: [],
        }),
        new HtmlWebpackPlugin({
            SERVER,
            template: './src/manifest.html',
            filename: './manifest.json',
            chunks: [],
        }),
    ],
};