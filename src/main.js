// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 导入  Vue(自己起的名字)   from 从  vue(库)
import Vue from 'vue'
// import App from './router.js'
import router from './router'
// import App from './components/http'
import Vuex from 'vuex'
Vue.use(Vuex);
import store from "./store"
Vue.config.productionTip = false  //开启生产坏境的提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
  // template: '<App/>',   //加载模板
  // components: { App }   //加载组件
})
