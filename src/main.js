// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import 'amfe-flexible/index.js'
import axios from 'axios'
Vue.prototype.$moment = moment;//赋值使用
Vue.prototype.$axios = axios    //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.prototype.HOME = '/api'    //重要在于这里，Vue.prototype.HOME = '/api'是一个定值，默认指向localhost，所有修改指向路径为'/api'，配置文件index.js定义的可跨域路径
// 注意 在配置后一定要更改此处 否则跨域不生效
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
