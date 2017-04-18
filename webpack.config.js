const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',

  },
  resolve: {
    extensions: ['.js', '.jsx', '.rt']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          retainLines: true
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.rt$/,
        include: SRC_DIR,
        loader: 'react-templates-loader?modules=amd',
      },
    ],
  },
  // plugins: [
  //   new webpack.DefinePlugin({ // <-- key to reducing React's size
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin(), //minify everything
  //   new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  // ]
};

module.exports = config;
