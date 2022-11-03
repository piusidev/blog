const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
    clean: true
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|\.webpack)/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        },
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      services: path.resolve(__dirname, 'src/services/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      config: path.resolve(__dirname, 'src/config/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      api: path.resolve(__dirname, 'src/api/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new Dotenv()
  ]
};
