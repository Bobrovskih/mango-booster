const {
    DefinePlugin
} = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
            from: './src/manifest.json',
            to: './manifest.json'
        }, {
            from: './src/js/jquery.js',
            to: './',
        }, ]),
    ],
};