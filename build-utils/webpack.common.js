const path = require("path");

const config = {
  entry: "./src/",
  output: {
    filename: "[chunkhash].bundle.js",
    path: path.join(__dirname, "../dist")
  } 
};

module.exports = config;
