/**
 * @namespace urls
 * @desc 配置接口
 */

let urls = {}

/**
 * 全局接口
 * @name urls.global
 */

urls.global = {
}


/**
 * 公用部分
 * @name urls.common
 */

urls.common = {
}


export default {
  get (scope, name) {
    if (name) {
      return urls[ scope ][ name ]
    }

    return urls[ scope ]
  }
}
