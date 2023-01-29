/* eslint @typescript-eslint/no-var-requires: 0 */
const config = require("./webpack.config.base.js");
const externals = require("./webpack.config.externals.js");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

/**
 * 'esModuleInterop' in 'tsconfig.json' must be set to FALSE, else it injects this janky '__importStar' wrapper around
 * our 'buffer' and 'stream' imports.
 */
module.exports = [
  {
    ...config,
    output: {
      path: path.join(__dirname, "dist/cjs"),
      libraryTarget: "commonjs2"
    },
    externalsType: "commonjs",
    externals: [nodeExternals({ importType: "commonjs" }), ...externals]
  },
  {
    ...config,
    output: {
      path: path.join(__dirname, "dist/esm"),
      library: { type: "module" },
      module: true,
      environment: {
        module: true,
        dynamicImport: true // Required if using "import" as an external type.
      }
    },
    // Applies to the 'externals' spread only -- i.e. uses "import" instead of "module" for those imports only. This is
    // because "import" is a lazy/dynamic ESM import, whereas "module" is an eager/static ESM import, and the for
    // modules listed in the "externals" array, we want them to be loaded lazily, as the browsr does not have them.
    externalsType: "import",
    externals: [nodeExternals({ importType: "module" }), ...externals],
    experiments: { outputModule: true }
  }
];
