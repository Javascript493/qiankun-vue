import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: 'subapp2',
  //process.env.BASE_URL, 默认
  routes
})

export default router
