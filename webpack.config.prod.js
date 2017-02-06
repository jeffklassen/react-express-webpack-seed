const webpack = require('webpack');
const commonWebPackConfig = require('./webpack.config.common.js');

const config = {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
    ]
};
module.exports = commonWebPackConfig(config);