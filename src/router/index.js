import Vue from 'vue'
import Router from 'vue-router'
//@ 相当于../上级目录
// import HelloWorld from '@/components/HelloWorld'
//use 在vue中只要是vue的插件就必须通过vue.use 去使用
import Http from '@/components/http'
// import Search from '@/components/search'
// import Dir from '@/components/directive';
// import Component from '@/components/component'
// import Brother from '@/components/brother'
import Select from '@/components/select'
// import vueX from '@/components/vueX'
Vue.use(Router)
Vue.directive(
  "focus",{
    inserted(el){
      console.log("全局指令")
      el.focus();
    }
  }
)
export default new Router({  //抛出模块
  routes: [
    {
      path: '/',
      name: 'Http',
      component: Http
    },{
      path: '/select',
      name: 'Select',
      component: Select
    }
  ]
})
