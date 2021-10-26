import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

// 乾坤配置

//qiankun配置
import { registerMicroApps, start } from 'qiankun';

//子应用列表
let apps = [
  // 优先在本地启动两个子项目
  // vue子项目一
  {
    name:'subapp',
    entry:'//localhost:8080',//子应用的地址，这里演示是本地启动的地址。
    container:'#subapp',//子应用的容器节点的选择器（vue一般为app）
    activeRule:'/subapp',//访问子应用的规则，比如：主应用为localhost:8081，那访问该子应用的url应为localhost:8081/subapp
  },
  // vue 子项目er
  {
    name: 'subapp2',
    entry: '//localhost:8081',
    container: '#subapp2',
    activeRule: '/subapp2'
  }
  // {
  //   name: 'reactapp',
  //   entry: '//localhost:3000',
  //   container: '#reactapp',
  //   activeRule: '/reactapp'
  // }
]

//注册子应用
registerMicroApps(apps);

//启动
start();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
