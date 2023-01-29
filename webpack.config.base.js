/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require("path");

module.exports = {
  // Added by extending config.
  // output: {
  //   libraryTarget: "commonjs2",
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "main.js"
  // },
  // externals: [nodeExternals(), ...externals],
  cache: false,
  mode: "production",
  optimization: {
    // Packages on NPM shouldn't be minimized.
    minimize: false,
    // Several options to make the generated code a little easier to read (for debugging).
    chunkIds: "named",
    moduleIds: "named",
    mangleExports: false
  },
  target: "browserslist",
  entry: "./src/index.ts",
  plugins: [],
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader" // Options are in 'babel.config.js'
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json"
            }
          }
        ],
        include: [path.resolve(__dirname, "src")]
      }
    ]
  }
};
