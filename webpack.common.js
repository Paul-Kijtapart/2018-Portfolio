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
        publicPath: '/dist/',
        filename: '[name].js' // one single build file for whole app
    },
    module: {
        rules: [ // The final loader is expected to return JavaScript.
            // JS (Ensure all JS is compiled by babel => allow es6 syntax)
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
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
        // new HtmlWebpackPlugin({
        //     title: 'Paul Nawat',
        //     filename: './index.html', // file to write the HTML to
        //     template: path.resolve(__dirname, "index.html"), // path to template
        //     inject: true, // ensure all js get added to template above
        //     hash: true, // ensure browser detects change from webpack
        //     cache: true // try to emit the file only if it was changed
        // }),
    ]
};