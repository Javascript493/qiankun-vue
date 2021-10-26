import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__  ? 'subapp' :  process.env.BASE_URL ,
  routes
})

export default router
