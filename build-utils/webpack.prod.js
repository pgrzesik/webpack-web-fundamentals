const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextWebpackPlugin.extract({
          loader: "css-loader",
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css")
  ]
};
