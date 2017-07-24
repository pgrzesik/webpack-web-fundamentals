const commonPaths = require("./common-paths");

const config = {
  entry: "./src/",
  output: {
    filename: "[chunkhash].bundle.js",
    path: commonPaths.outputPath
  } 
};

module.exports = config;
