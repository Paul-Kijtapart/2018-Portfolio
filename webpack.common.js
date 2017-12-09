// Libraries
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ],


                        // Vue internationalization
                        i18n: '@kazupon/vue-i18n-loader'
                    }
                    // other vue-loader options go here
                }
            },
            // CSS
            {
                test: /\.css$/,
                use: ['style-loader', 'postcss-loader']
            },
            // SVG
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: ['file-loader']
            },
            // PNG/JPG
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]?[hash]'
                    }
                }]
            },
            // SCSS
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
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