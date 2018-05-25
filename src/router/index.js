import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})
