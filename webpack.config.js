const path = require('path');
const Dotenv = require('dotenv-webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  target: 'node',
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
  module: {
    rules: [{
      test: /.(js|jsx|ejs)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new Dotenv(),
    new MinifyPlugin({}, {
      comments: false
    })
  ],
  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/modules'),
      Data: path.resolve(__dirname, 'data/json'),
    },
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.json', '.ejs'],
    modules: ['node_modules'],
  },
};