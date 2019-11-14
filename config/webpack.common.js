const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/main/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new ExtractTextPlugin({
      filename:'static/css/[name].css'
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  output: {
    filename: './static/js/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      },
      {
        test: /\.css$/,
        use: [
          ExtractTextPlugin.loader,
          { loader: "css-loader" },
          // { loader: "less-loader" }   
        ]
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
          name:'',
          outputPath: 'static/xmls',
        },
      }
    ]
  },
};