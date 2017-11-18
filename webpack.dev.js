// Libraries
const merge = require('webpack-merge');

const baseConfig = require('/webpack.common');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map'
});
