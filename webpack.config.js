
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, "/src/main.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    contentBase: "./public",
    port: "8080",
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [

      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [{
          loader: 'url-loader', // 如果文件大小于1024，则使用base64
          options: {
            limit: 1024,
            name: '[name].[ext]',
            esModule: false
          }
        }]
      },
      {
        test: /\.(css|less|scss|sass)$/,
        use: [
          // 将px转换成rem
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 10, // 375尺寸
              remPrecision: 8
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('Author:Kip Song'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html")
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}