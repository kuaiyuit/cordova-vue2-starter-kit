/**
 * 此为model基类,所有业务层model都要继承此类
 */
import replaceVars from 'utils/replace-vars'

/**
 * 默认查询query参数配置
 */
const DEFAULT_FIND_PARAMS = {
  // 每页加载数条数
  pageSize: 10,
}

/**
 * 数据模型，用来封装业务数据请求
 */
export default class Base {

  _handleHttpOptions (options) {
    let { vars = {}, url, params } = options
    if (!url) {
      throw new Error('please set param  "url" ! ')
    }

    // 替换url中的变量
    // === url.indexOf()<-1
    if (~url.indexOf('${')) {
      url = replaceVars(url, vars)
    }

    // 解析 params
    if (params) {
      url += '?'
      for (let key in params) {
        url += `${key}=${params[key]}&`
      }
    }

    options.url = url

    return options
  }

  /**
   * @param options
   * {
   *   url: String,
   *   [vars: Object,] // 如果url中存在变量,需要提供此参数
   *   [params: Object,]
   *   [data: Object,]
   * }
   * @returns {Promise}
   */
  get (options) {
    options = this._handleHttpOptions(options)
    return Vue.http.get(options.url)
  }

  post (options) {
    options = this._handleHttpOptions(options)
    return Vue.http.post(options.url, options.data)
  }

}
