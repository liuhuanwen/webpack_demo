const paths = require('./paths')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: [
    paths.appIndexJs
  ],
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: paths.appSrc,
        exclude: paths.appNodeModules,
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            '@babel/transform-runtime',
            '@babel/transform-async-to-generator'
          ]
        },
      },
      {
        test: /\.css$/,
        exclude: paths.appNodeModules,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // 在css-loader前应用的loader的数量
              importLoaders: 1,
              modules: true,
              localIndexName:'[name]__[local]___[hash:base64:5]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'url-loader',
        exclude: paths.appNodeModules,
        options: {
          // 只有小于8k的图片才用base64编码内联
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: paths.appNodeModules,
        loader: 'url-loader'
      },
      // 其他文件通过file-loader来打包
      // {
      //   test: /\.()$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // true || 'head' || 'body' || false Inject all assets into the given template or templateContent.
      // When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
      // 'head' will place the scripts in the head element.
      inject: true,
      template: paths.appHtml,
      // 生成index.html时，需要插入哪些生成好的js，默认插入entry中所有的
      // chunks: []
    }),
  ]
}