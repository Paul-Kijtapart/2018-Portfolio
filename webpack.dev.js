// Libraries
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');


// Constants
const DIST = path.join(__dirname, 'dist');

// Components
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',


    // Hot re-loading
    devServer: {
        historyApiFallback: true, // use index.html for 404 responses
        contentBase: DIST, // Necessary to server Static files
        open: true, // open new window on server start
        compress: true, // enable gzip compression for everything served
        hot: true, // IMPORTANT! enable HOT-reloading => allows modules to be updated at runtime without full refresh
        noInfo: true, // only want to see errors and warnings from log
        port: 9000
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() // !IMPORTANT => need to for HMR to re-load properly
    ],
});
