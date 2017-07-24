const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry: ['./app.js'],
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './index.html'
      })
  ]
}