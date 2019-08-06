const paths = require('./paths')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = webpackMerge([
  baseConfig,
  {
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
    optimization: {
      // 更新组件时在控制台输出组件的路径而不是数字ID，用在开发模式
      namedModules: true
    },
    plugins: [
      // mode配置项会自动添加这个全局常量，prod的配置同理
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify('development')
      // })
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin()
    ]
  }
])
