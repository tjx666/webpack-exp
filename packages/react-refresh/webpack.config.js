const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type { import('webpack').Configuration } */
const config = {
  mode: 'development',
  stats: 'minimal',
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              [
                '@babel/preset-react',
                {
                  development: true,
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

module.exports = config;
