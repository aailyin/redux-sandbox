var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry:  [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname,  'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins:  [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: { //Обновлено
    preLoaders: [ //добавили ESlint в preloaders
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [ //добавили babel-loader
      {
        exclude: /node_modules/,
        loader: "babel",
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        }
      }
    ]
  }
};