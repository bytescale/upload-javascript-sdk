/* eslint @typescript-eslint/no-var-requires: 0 */
const config = require("./webpack.config.base.js");
const nodeBuiltInModules = require("./webpack.config.externals.js");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WrapperPlugin = require("wrapper-webpack-plugin");
/**
 * 'esModuleInterop' in 'tsconfig.json' must be set to FALSE, else it injects '__importStar' around the 'buffer' and 'stream' imports.
 */

/**
 * Technically the consuming code's build tool (e.g. Webpack) should use our package.json to select the 'browser'
 * bundles of our library, which already has these packages polyfilled with empty objects.
 */
const polyfillHeader = `// ----------------------------------------
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

const baseCJS = {
  ...config,
  output: {
    filename: "main.js",
    libraryTarget: "commonjs2"
  },
  externalsType: "commonjs",
  externals: [nodeExternals({ importType: "commonjs" })]
};

const baseESM = {
  ...config,
  output: {
    filename: "main.mjs",
    library: { type: "module" },
    module: true,
    environment: {
      module: true
    }
  },
  externalsType: "module",
  externals: [nodeExternals({ importType: "module" })],
  experiments: { outputModule: true }
};

const nodeCJS = {
  ...baseCJS,
  output: {
    ...baseCJS.output,
    path: path.join(__dirname, "dist/node/cjs")
  },
  plugins: [...baseCJS.plugins, new WrapperPlugin({ header: () => polyfillHeader })],
  externals: [...baseCJS.externals, ...nodeBuiltInModules]
};

const nodeESM = {
  ...baseESM,
  output: {
    ...baseESM.output,
    path: path.join(__dirname, "dist/node/esm")
  },
  plugins: [...baseESM.plugins, new WrapperPlugin({ header: () => polyfillHeader })],
  externals: [...baseESM.externals, ...nodeBuiltInModules]
};

const browserResolveExtensions = {
  fallback: Object.fromEntries(nodeBuiltInModules.map(x => [x, false])),
  alias: {
    ...baseESM.resolve.alias,
    // Hack to prevent Webpack injecting its own polyfill for "buffer", despite us setting 'resolve.fallback.buffer = false'
    // above. The package name below doesn't exist (which is intentional).
    buffer: "@upload-io/fake-non-existent-package-name"
  }
};

const browserCJS = {
  ...baseCJS,
  output: {
    ...baseCJS.output,
    path: path.join(__dirname, "dist/browser/cjs")
  },
  resolve: {
    ...baseESM.resolve,
    ...browserResolveExtensions
  }
};

const browserESM = {
  ...baseESM,
  output: {
    ...baseESM.output,
    path: path.join(__dirname, "dist/browser/esm")
  },
  resolve: {
    ...baseESM.resolve,
    ...browserResolveExtensions
  }
};

module.exports = [nodeCJS, nodeESM, browserCJS, browserESM];
