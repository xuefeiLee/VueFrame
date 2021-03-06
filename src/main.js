import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import {store} from './store/index'
import layer from 'vue-layer'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$http = axios

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
