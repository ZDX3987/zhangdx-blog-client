'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    }),
      new HtmlWebpackExternalsPlugin({
          externals: [{
              module: 'vue',
              entry: 'https://cdn.bootcdn.net/ajax/libs/vue/2.5.2/vue.min.js',
              global: 'Vue'
          },
              {
                  module: 'element-ui',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.3/index.min.js',
                  global: 'ELEMENT'
              },
              {
                  module: 'vue-router',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.1/vue-router.min.js',
                  global: 'VueRouter'
              },
              {
                  module: 'axios',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/axios/0.21.0/axios.min.js',
                  global: 'axios'
              },
              {
                  module: 'vuex',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/vuex/3.6.0/vuex.min.js',
                  global: 'Vuex'
              },
              {
                  module: 'jquery',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js',
                  global: '$'
              },
              {
                  module: 'bootstrap',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.min.js',
                  global: 'bootstrap'
              },
              {
                  module: 'font-awesome',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
                  global: 'font-awesome'
              },
              {
                  module: 'vue-meta',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/vue-meta/2.4.0/vue-meta.min.js',
                  global: 'VueMeta'
              },
              {
                  module: 'vue-lazyload',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/vue-lazyload/1.3.3/vue-lazyload.js',
                  global: 'VueLazyload'
              },
              {
                  module: 'vditor',
                  entry: 'https://cdn.jsdelivr.net/npm/vditor@3.8.5/dist/index.min.js'
              },
              {
                  module: 'moment',
                  entry: 'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.min.js',
                  global: 'moment'
              }]
      })
  ]
}
