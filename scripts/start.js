process.on('unhandledRejection', err => {
  throw err;
});

const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devConfig = require('../config/webpack.dev.config')
const devServerConfig = require('../config/webpackdevServer.config')

const compiler = webpack(devConfig)

new WebpackDevServer(compiler, devServerConfig)
  .listen(devServerConfig.port, devServerConfig.host, err => {
    if (err) {
      console.log(err.message)
    }
    console.log(chalk.cyan('Starting the development server...\n'));
  })


