var webpack = require('webpack');

module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: []
  }
}