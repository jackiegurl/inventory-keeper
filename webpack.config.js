module.exports = {
  entry: './client/components/homepage/homepage.js',
  output: {
    filename: './client/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
}