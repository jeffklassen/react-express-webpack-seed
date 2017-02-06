const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const config = {
    entry:
    {
        app: ['babel-polyfill', path.join(__dirname, 'client', 'app', 'main.jsx')],
    },

    output: {
        path: path.join(__dirname, 'client', 'build', 'static', 'js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'es2016', 'es2017'],
                    compact: true
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: false,
            sourcemap: true,
            beautify: true,
            dead_code: true,
            output: {
                comments: false
            },
        })
    ]
};
module.exports = function (options) { return merge(config, options); };