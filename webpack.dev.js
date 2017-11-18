// Libraries
const path = require('path');
const merge = require('webpack-merge');

// Constants
const DIST = path.join(__dirname, 'dist');

// Components
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',


    // Hot re-loading
    devServer: {
        contentBase: DIST, // Necessary to server Static files
        open: true, // open new window on server start
        compress: true, // enable gzip compression for everything served
        hot: true, // IMPORTANT! enable HOT-reloading => allows modules to be updated at runtime without full refresh
        noInfo: true, // only want to see errors and warnings from log
        port: 9000
    }
});
