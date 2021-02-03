const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  devtool: 'source-map',
  watch: true,
  mode: 'development',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader?url=false'
            },
            {
                 loader: 'postcss-loader',
                 },
            {
                loader: 'sass-loader'
            }
        ]
    },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
  }),
   ]

};