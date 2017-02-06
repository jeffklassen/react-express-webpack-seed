const webpack = require('webpack');
const commonWebPackConfig = require('./webpack.config.common.js');

const config = {
    devtool: 'eval',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev')
            }
        }),
    ]
};


module.exports = commonWebPackConfig(config);