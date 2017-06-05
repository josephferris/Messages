const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const {resolve} = require('path')
const {getIfUtils} = require('webpack-config-utils')

const config = (env) => {
  const {ifDev} = getIfUtils(env)
  return {
    context: resolve(__dirname, 'app'),
    devtool: env.prod ? 'source-map' : 'eval',
    entry: {
      app: './index.jsx',
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    bail: env.prod,
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader',
          }]
        },
        {
          test: /\.css$/,
          loader:  ExtractTextPlugin.extract({
            loader: 'css-loader?importLoaders=1',
          }),
        },
        {
          test: /\.tiff$/,
          loader: 'file-loader',
        },
        {
          test: /\.png$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          use: [{
            loader: 'svg-inline-loader'
          }],
        },
        {
          enforce: 'pre',
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: ['babel-loader', 'eslint-loader'],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['es2015', 'stage-2', 'stage-1', 'react'],
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties',
              'transform-es2015-modules-commonjs'
            ]}
          }],
        },
        {
          test: /\.jsx$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['es2015', 'stage-2', 'stage-1', 'react'],
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties',
              'transform-es2015-modules-commonjs'
            ]}
          }],
        },
        {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }]
        }
      ],
    },
    plugins: [
      new WebpackNotifierPlugin({
        title: 'Messages',
        alwaysNotify: true
      }),
      new HtmlWebpackPlugin({
        title: 'Messages',
        template: '../templates/index.ejs',
        filename: 'index.html',
      }),
      new ExtractTextPlugin({
        filename: '[name].bundle.css',
        allChunks: true,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        // Specify the common bundle's name.
        name: 'vendor',
        minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1
        }
      }),
      //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        polymer: '@polymer/polymer',
        polymerNpmWrapper: 'polymer-npm-wrapper',
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9001,
      publicPath: '/assets/',
      proxy: {
        '/api/*': {
          host: 'localhost',
          target: 'localhost',
          rewrite: function (req){
            req.url = req.url.replace(/^\/api(.+)$/,'$1')
          }
        }
      }
    }
  }
}

module.exports = config
