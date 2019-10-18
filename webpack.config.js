const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
      },
        'css-loader',
        // 'postcss-loader',
        'sass-loader',
        // 'style-loader',
      ],
    },]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),
    new CopyWebpackPlugin([{
      from: 'src/index.html',
      to: 'index.html'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    host: '0.0.0.0',
    port: 9000
  }
};