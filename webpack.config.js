
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ip = require('ip').address();
const open = require('opn');
const chalk = require('chalk');

module.exports = {
  entry: path.join(__dirname, "/src/main.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    host: ip,
    contentBase: "./public",
    port: "8080",
    inline: true,
    historyApiFallback: true,
    after() {
      open(`http://${ip}:${this.port}`)
        .then(() => {
          console.log(chalk.cyan(`成功打开链接： http://${ip}:${this.port}`));
        })
        .catch(err => {
          console.log(chalk.red(err));
        });;
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
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
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
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