const paths = require('./paths')
const baseConfig = require('./webpack.base.config')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  resolve: {
    alias: {
      '@': paths.appSrc
    }
  },
  module: {

  }
}
