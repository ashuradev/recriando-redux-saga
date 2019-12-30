const path = require('path');
const glob = require('glob');

module.exports = {
  entry: {
    example: path.resolve('example', 'src', 'index.js'),
    spark: path.resolve('src', 'index.js')
  },

  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },

  devServer: {
    contentBase: 'example/',
    publicPath: '/'
  },

  resolve: {
    alias: {
      spark: path.resolve('src')
    }
  }
};
