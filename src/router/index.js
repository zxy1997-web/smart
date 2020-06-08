import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import System from '../views/System'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/System',
    component: System
}]

const router = new VueRouter({
    routes
})

export default router