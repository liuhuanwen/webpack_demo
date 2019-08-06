const baseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge([
  baseConfig,
  {
    mode: 'production',
    output: {
      filename: 'static/js/[name].[chunkhash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    },
    optimization: {
      // 等同于webpack.optimize.UglifyJsPlugin
      minimize: true
    }
  }
])