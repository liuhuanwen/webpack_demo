const path = require('path')
const fs = require('fs')
const appRootDir = fs.realpathSync(process.cwd())

const resolveApp = relativePath => path.resolve(appRootDir, relativePath)

module.exports = {
  appConfig: resolveApp('config'),
  dist: resolveApp('dist'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
}