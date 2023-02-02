/* eslint @typescript-eslint/no-var-requires: 0 */
const config = require("./webpack.config.base.js");
const externals = require("./webpack.config.externals.js");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WrapperPlugin = require("wrapper-webpack-plugin");

const header = `// ----------------------------------------
// POLYFILL GUIDE:
// ----------------------------------------
//
// "buffer" & "stream" are not required for browser environments.
//
// They are only used when the code detects it's running in Node.js (at runtime).
//
// You may polyfill them with empty objects (for browser environments):
//
// ----------------------------------------
// Webpack:
// {
//   resolve: {
//     fallback: {
//       buffer: false,
//       stream: false
//     }
//   }
// }
// ----------------------------------------
//
`; // Last new line is required!

/**
 * 'esModuleInterop' in 'tsconfig.json' must be set to FALSE, else it injects '__importStar' around the 'buffer' and 'stream' imports.
 */
module.exports = [
  {
    ...config,
    output: {
      path: path.join(__dirname, "dist/cjs"),
      libraryTarget: "commonjs2"
    },
    plugins: [...config.plugins, new WrapperPlugin({ header: () => header })],
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
        module: true
        // dynamicImport: true // Required if using "import" as an external type. However, also causes root-level awaits, which many build tools don't support.
      }
    },
    plugins: [...config.plugins, new WrapperPlugin({ header: () => header })],
    externalsType: "module",
    externals: [nodeExternals({ importType: "module" }), ...externals],
    experiments: { outputModule: true }
  }
];
