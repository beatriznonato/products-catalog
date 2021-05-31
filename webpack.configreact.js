const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: ['babel-polyfill', './src/App.js'],
  // entry: {
  //   "app": "./src/App.js"
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    sourceMapFilename: "[name].js.map"
  },
  devtool: "source-map",
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {}
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
};