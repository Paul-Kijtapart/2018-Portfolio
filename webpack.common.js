// Libraries
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Constants
const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
let pathsToClean = [DIST];

module.exports = {
    entry: {
        app: path.join(__dirname, 'index.js')
    },
    output: {
        path: DIST,
        filename: '[name].js' // one single build file for whole app
    },
    module: {
        rules: [ // The final loader is expected to return JavaScript.
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
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]?[hash]'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // should be in the fallback only OR ERROR
                    use: [ // Order is Bottom-up
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: 'postcss-loader' // autoprefixer
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                })
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
        // Clear
        new CleanWebpackPlugin(pathsToClean), // pass array of path to be clear,

        // auto-inject scripts
        new HtmlWebpackPlugin({
            title: 'Paul Nawat'
        })
    ]
};