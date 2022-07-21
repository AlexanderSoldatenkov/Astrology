'use strict';

// let path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './src/js/script.js',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/dist/js'
//   },
//   watch: true,

//   devtool: "source-map",

//   module: {}
// };

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// const filename = (ext) => `[name].${ext}`; 
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  };

  if (isProd) {
    configObj.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }

  return configObj;
};

const plugins = () => {
  const basePlugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/policy.html'),
      filename: 'policy.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'src/assets') , to: path.resolve(__dirname, 'dist/assets')}
      ]
    }),
    // new webpack.NoErrorsPlugin(),
  ];

  // if (isProd) {
    
  //   basePlugins.push(
  //     new ImageminPlugin({
  //       bail: false, // Ignore errors on corrupted images
  //       cache: true,
  //       imageminOptions: {
  //         plugins: [
  //           ["gifsicle", { interlaced: true }],
  //           ["jpegtran", { progressive: true }],
  //           ["optipng", { optimizationLevel: 5 }],
  //           [
  //             "svgo",
  //             {
  //               plugins: [
  //                 {
  //                   removeViewBox: false
  //                 }
  //               ]
  //             }
  //           ]
  //         ]
  //       }
  //     })
  //   );
  // }

  return basePlugins;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/main.js', // entry: ['./src/file_1.js', './src/file_2.js'],
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    // contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  optimization: optimization(),
  plugins: plugins(),
  devtool: isProd ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },

      {
        test: /\.html$/i,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            esModule: false,
            sources: {
              list: [
                '...',
                {
                  tag: 'a',
                  attribute: 'href',
                  type: 'src'
                }
              ]
            }
          }
        }
      },

      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            },
          },
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            }
          },
          'css-loader',
          'sass-loader'
        ],
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      // },
      // {
      //   test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: `[path]${filename('[ext]')}`
      //     }
      //   }],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        
      },
      {
        test: /\.(?:|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: `./fonts/${filename('[ext]')}`
          }
        }],
      }
    ]
  }
};
