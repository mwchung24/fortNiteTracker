const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.jsx'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: { warnings: false },
        mangle: true,
        sourcemap: false,
        beautify: false,
        dead_code: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
// const path = require('path');
// const webpack = require("webpack");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//
// var plugins = [];
// var devPlugins = [];
//
// var prodPlugins = [
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }),
//   new UglifyJsPlugin()
// ];
//
// plugins = plugins.concat(
//   process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
// );
//
// module.exports = {
//   context: __dirname,
//   entry: './frontend/selfie_gram.jsx',
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: 'bundle.js'
//   },
//   plugins: plugins,
//   resolve: {
//     extensions: ['.js', '.jsx', '*']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   },
//   devtool: 'source-maps',
// };
