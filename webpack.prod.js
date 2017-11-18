// Libraries
const webpack = require('webpack');

const baseConfig = require('/webpack.common');

module.exports = merge(baseConfig, {
    plugins: [

        // Tree shaking (Remove unused codes from production)
        new webpack.optimize.UglifyJsPlugin({
            // Eliminate comments
            comments: false,
            soureMap: false,
            compress: {
                // remove warnings
                warnings: false,

                // Drop console statements
                drop_console: true
            }
        })
    ]
});