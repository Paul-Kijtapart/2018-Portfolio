// Libraries
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Constants
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
let pathsToClean = [DIST];

module.exports = {
    entry: {
        app: path.join(__dirname, 'src/index.js')
    },
    output: {
        path: DIST,
        filename: '[name].js' // one single build file for whole app
    },
    module: {
        rules: [ // The final loader is expected to return JavaScript.
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
            // JS (Ensure all JS is compiled by babel => allow es6 syntax)
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
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
            // PNG
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            // Font
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': SRC
        }
    },
    plugins: [
        /**
         *  Clean output folder first
         *  So that only used files will be generated.
         */
        new CleanWebpackPlugin(pathsToClean),

        // auto-inject scripts
        new HtmlWebpackPlugin({
            title: 'Paul Nawat',
            filename: 'index.html', // file to write the HTML to
            template: path.resolve(__dirname, "index.html"), // path to template
            inject: true, // ensure all js get added to template above
            hash: true, // ensure browser detects change from webpack
            cache: true // try to emit the file only if it was changed
        }),
    ]
};