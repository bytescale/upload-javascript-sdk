/* eslint @typescript-eslint/no-var-requires: 0 */
const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  output: {
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  cache: false,
  mode: "production",
  target: "browserslist",
  entry: "./src/index.ts",
  plugins: [],
  resolve: {
    extensions: [".ts"]
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader" // Options are in 'babel.config.js'
          },
          {
            loader: "ts-loader"
          }
        ],
        include: [path.resolve(__dirname, "src")]
      }
    ]
  }
};
