const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = require('./webpack.base.config')({
    entry: [
        'babel-polyfill',
        path.join(process.cwd(), 'app/app.js'),
    ],

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
        publicPath: 'http://10.215.160.35:1080/',
    },

    cssLoaders: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&importLoaders=1!postcss-loader'
    ),

    postcssPlugins: [
        postcssFocus(),
        cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
        }),
        postcssReporter({
            clearMessages: true,
        }),
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            children: true,
            minChunks: 2,
            async: true,
        }),

        new webpack.optimize.OccurrenceOrderPlugin(true),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
            warnings: false,
        },
        }),

        new HtmlWebpackPlugin({
            template: 'app/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),

        new ExtractTextPlugin('[name].[contenthash].css'),

        new OfflinePlugin({
            excludes: ['.htaccess'],

            caches: {
                main: [':rest:'],
                additional: ['*.chunk.js'],
            },

            safeToUseOptionalCaches: true,

            AppCache: {
                caches: ['main', 'additional'],
            },
        }),
    ],
});