const path = require("path");

module.exports = (env) => {
    return {
      entry: "./src/",
      output: {
        filename: "[chunkhash].bundle.js",
        path: path.join(__dirname, "dist")
      } 
    }
};
