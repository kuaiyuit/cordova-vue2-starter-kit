import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import * as components from 'components'
import * as filters from 'filters'
import routes from './routes'
import store from 'store'
import 'utils/responsive'
import App from 'views/app.vue'

// 载入公共样式
import './assets/styles/index.styl'

// 路由模块
Vue.use(VueRouter)
Vue.use(VueResource)

// 注册方法
function register (type, sets) {
  for (let key of Object.keys(sets)) {
    Vue[type](key, sets[key])
  }
}
// 全局注册 component
register('component', components)
register('filter', filters)

const router = new VueRouter({
  routes,
})

sync(store, router)

// 解决scroll位置不重置
router.afterEach(() => {
  global.scrollTo(0, 0)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if (!response.ok) {
      console.log('not ok!')
    }
    return response
  })
})

// 解决状态栏层叠在应用界面上，导致头部的内容或者界面被覆盖
function onDeviceReady () {
  if (parseFloat(window.device.version) >= 7.0) {
    document.body.style.marginTop = '20px'
  }
}
document.addEventListener('deviceready', onDeviceReady, false)
