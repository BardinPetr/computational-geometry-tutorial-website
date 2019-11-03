const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    main: './src/app.js',
    lesson: './src/lesson.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: __dirname + '/dist'
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
        'sass-loader'
      ],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
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
      from: 'src/pages',
      to: '.'
    }]),
    new CopyWebpackPlugin([{
      from: 'src/index.html',
      to: 'index.html'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname),
    host: '0.0.0.0',
    port: 9000
  }
};