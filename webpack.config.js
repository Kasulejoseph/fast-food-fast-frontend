const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false,
      systemvars: false,
      silent: false,
      expand: false,
      defaults: false
    }),  
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template:path.resolve(__dirname, 'src','index.html'),
    filename:'./index.html'
  })]
};