module.exports = {
  module: {
    rules: [
      // eslint-disable-next-line global-require
      require('../webpack.jsloader.js'),
      {
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
