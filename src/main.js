// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://192.168.4.149:6001'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
let token = JSON.parse(sessionStorage.getItem('token'))
axios.defaults.headers.common['token'] = token

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
