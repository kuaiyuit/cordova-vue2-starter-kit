var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
let autoprefixer = require('autoprefixer')
let pxtorem = require('postcss-pxtorem')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
      replace: true,
      minPixelValue: 3
    }),
    autoprefixer({ browsers: '> 1%' })
  ]
}
