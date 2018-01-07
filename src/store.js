//vuex 是什么？ 总结来说一个仓库，他可以检测到所有组件的状态，并相应的改变
//Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
//它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex); 
//state 单一状态管理树 存放所有数据
const state={
    count:0
}
//mutations 触发状态   存放所有函数(事件)
const mutations={
    add(state){
        state.count++;
    },
    del(state){
        state.count--;
    }
}
//store getters里面的计算属性
const getters={
    count:state=>state.count
}
//actions 分发事件
const actions={
    addActions({commit}){
        commit('add')
    },
    delActions(context){
        context.commit('del')
    }
}
//Vue.Store 实例化之后  注册进去 类似暴露
export default new　Vuex.Store({
  state,mutations,getters,actions
})