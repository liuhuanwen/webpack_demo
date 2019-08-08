const paths = require('./paths')
const devConfig = require('./webpack.dev.config')
const HOST = process.env.HOST || '0.0.0.0'
const PORT = parseInt(process.env.PORT, 10) || 3000

module.exports = {
  // 从哪个目录获取静态资源
  contentBase: paths.dist,
  // 开启gzip压缩
  compress: true,
  // console不显示WebpackDevServer的日志
  clientLogLevel: 'none',
  // 监听contentBase的文件改动，触发reload
  watchContentBase: true,
  // 关闭hostname检查
  disableHostCheck: true,
  // 热更新
  hot: true,
  publicPath: devConfig.output.publicPath,
  // webpack的错误或警告在控制台不可见
  quiet: true,
  host: HOST,
  port: PORT,
  // 当编译错误的时候，是否需要全屏遮盖
  overlay: true,
  proxy: {
    '/api': {
      // 后台服务器api
      target: 'http://localhost:8080',
      pathRewrite: {'^/api' : ''}
    }
  }
}