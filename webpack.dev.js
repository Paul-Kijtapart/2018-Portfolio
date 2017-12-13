// Libraries
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');


// Constants
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');

// Components
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
    devtool: '#eval-source-map',

    module: {
        rules: [
            //VUE
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: [
                            {
                                loader: 'vue-style-loader',
                                options: {sourceMap: true}

                            },
                            {
                                loader: 'css-loader',
                                options: {sourceMap: true}

                            },
                            {
                                loader: 'postcss-loader',
                                options: {sourceMap: true}

                            },
                            {
                                loader: 'sass-loader',
                                options: {sourceMap: true}
                            }, {
                                loader: 'sass-resources-loader',
                                options: {
                                    // SCSS to be auto-inject into all vue components' style
                                    resources: path.join(SRC, 'style.scss')
                                }
                            }],
                        sass: ['vue-style-loader', 'css-loader', 'postcss-loader',
                            {
                                loader: 'sass-loader',
                                options: {sourceMap: true}
                            },
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    // SCSS to be auto-inject into all vue components' style
                                    resources: path.join(SRC, 'style.scss')
                                }
                            }],

                        // Vue internationalization
                        i18n: '@kazupon/vue-i18n-loader'
                    },

                    // other vue-loader options go here
                }
            },
            // SCSS
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader", // creates style nodes from JS strings
                        options: {sourceMap: true}
                    }, {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {sourceMap: true}
                    }]
            },
            // CSS
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true, importLoaders: 1}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
        ]
    },

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
        new webpack.NamedModulesPlugin(), // see which dependencies are being patched
        new webpack.HotModuleReplacementPlugin() // !IMPORTANT => need to for HMR to re-load properly
    ],
});
