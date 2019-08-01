const baseConfig = require('./webpack.base.config')

module.exports = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
  }
}