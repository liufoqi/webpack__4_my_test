const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    app: './src/index.js',  
    another: './src/print.js',  
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    //将css文件名
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('static/css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
  ],
  output: {
    filename: './static/js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          publicPath:'../',
          use: "css-loader"
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
          loader: 'file-loader',
          options: {
            outputPath: 'static/images',
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'static/fonts',
        },
      },
      {
        test: /\.(csv|tsv)$/,
        loader: 'csv-loader',
        options: {
          outputPath: 'static/csv-loader',
        },
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader',
        options: {
          outputPath: 'static/xmls',
        },
      }
    ]
  },
};