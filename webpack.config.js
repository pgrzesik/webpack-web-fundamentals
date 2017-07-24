const path = require("path");

module.exports = {
  entry: "./src/",
  output: {
    filename: "[chunkhash].bundle.js",
    path: path.join(__dirname, "dist")
  } 
}
