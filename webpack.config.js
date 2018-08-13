const path = require('path');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const jsLoader = require('./webpack.jsloader');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      jsLoader,
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  cascade: false,
                  browsers: [
                    'last 2 versions',
                    '> 2%',
                    'ie 11',
                  ],
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './node_modules/design-system/dist/scss/wds-variables/index.scss'),
                path.resolve(__dirname, './node_modules/design-system/dist/scss/wds-mixins/index.scss'),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },

    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
