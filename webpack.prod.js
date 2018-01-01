// Libraries
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const baseConfig = require('./webpack.common');

// Constants
const ASSETS = path.join(__dirname, 'assets');
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');

module.exports = merge(baseConfig, {
    module: {
        rules: [
            // Vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: ['css-loader', 'postcss-loader',
                                {
                                    loader: 'sass-loader',
                                },
                                {
                                    loader: 'sass-resources-loader',
                                    options: {
                                        // SCSS to be auto-inject into all vue components' style
                                        resources: path.join(SRC, 'style.scss')
                                    }
                                }], //order run from Right -> Left
                        }),
                        'sass': ExtractTextPlugin.extract({
                            fallback: 'vue-style-loader',
                            use: ['css-loader', 'postcss-loader',
                                {
                                    loader: 'sass-loader',
                                },
                                {
                                    loader: 'sass-resources-loader',
                                    options: {
                                        // SCSS to be auto-inject into all vue components' style
                                        resources: path.join(SRC, 'style.scss')
                                    }
                                }]
                        }),

                        // Vue internationalization
                        i18n: '@kazupon/vue-i18n-loader'
                    }
                    // other vue-loader options go here
                }
            },
            // SCSS
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // should be in the fallback only OR ERROR
                    use: [ // Order is Bottom-up
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                        }, {
                            loader: 'postcss-loader', // autoprefixer
                        }, {
                            loader: "sass-loader", // compiles Sass to CSS
                        }
                    ]
                })
            },
            // CSS
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // should be in the fallback only OR ERROR
                    use: [ // order run from Right to Left which is Bottom-up in this case
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: 'postcss-loader' // autoprefixer
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        // short-circuits all Vue.js warning code
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

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
        }),

        /**
         * IMPORTANT!
         * ExtractTextPlugin generates a file per entry,
         * so you must use [name], [id] or [contenthash]
         * when using Multiple entries.
         */
        new ExtractTextPlugin("[name].style.css"),

        /**
         * Scope Hoisting: small size improvement, JS will load faster in the browser
         * Pre-condition: webpack version 3.10
         */
        // new webpack.optimize.ModuleConcatenationPlugin(),
    ]
});