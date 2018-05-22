const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/index.ts"
  },
  output: {
    filename: "[name].bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, use: "ts-loader", exclude: [ "node_modules" ] },
      { test: /\.css?$/, use: [ "style-loader", "css-loader" ] },
      { test: /\.(png|jpg|jpeg|svg|gif)$/, use: [ "file-loader" ] }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(["dist"])
  ]
};                          