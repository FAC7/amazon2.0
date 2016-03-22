const Path = require('path')

module.exports = {
  entry: {
    javascript: './src/js/amazon.jsx',
    html: './public/index.html'
  },
  output: {
    filename: 'amazon.js',
    path: Path.join(__dirname, 'production')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
