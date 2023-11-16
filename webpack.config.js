const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const ROOT_DIR = __dirname;
const buildType = process.env.BUILD_TYPE || 'umd';
const buildTarget = process.env.BUILD_TARGET || 'app';

module.exports = {
  entry:
    buildTarget === 'package'
      ? './src/package/index.js'
      : ['./src/app/index.js'],

  output: {
    path: path.join(
      ROOT_DIR,
      buildTarget === 'package'
        ? buildType === 'umd'
          ? '/dist'
          : '/package'
        : '/docs'
    ),
    filename: 'bundle.js',
    libraryTarget: buildType,
    publicPath: mode === 'development' ? '/' : './',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins:
    buildTarget === 'app'
      ? [
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new HtmlWebpackPlugin({
            template: './src/app/index.html',
            title: 'bCharts',
            rootUrl: '/',
          }),
        ]
      : [new CleanWebpackPlugin()],
};
