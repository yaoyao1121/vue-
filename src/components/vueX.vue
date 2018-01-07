<template>
  <div>
      <!-- <p>{{this.$store.state.count}}</p> -->
      <p>{{count}}</p>
      <!-- commit  触发对应的事件  store是存储所有的数据 -->
      <!-- <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('del')">-</button> -->
      <!-- <button @click="add">+</button>
      <button @click="del">-</button> -->
      <button @click="addActions">+</button>
      <button @click="delActions">-</button>
  </div>
</template>

<script>
// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);    可以不用引  store.js里面已经有了
import store from "../store.js"
//当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
//为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
    //计算属性 类似watch(实时监听)
    // computed:{   //自己下去看 在vue.js 官网中
    //     //普通函数
    //     // count(){
    //     //     return store.state.count;
    //     // }

    //     //es6 箭头函数
    //     // count:()=> store.state.count  
    // }
    //解构 赋值  class  map(循环)  set  get   jenerator   promise
    // computed:mapState(["count"]) //mapState辅助状态函数
    // computed:mapState({
    //   count:state=>state.count
    // })
    //...  Es6里面的扩展运算符
    // methods:mapMutations(['add','del']),
    // methods:{
    //   ...mapMutations(['add','del'])
    //   },
    computed:mapGetters(["count"]),
    // computed:{
    //   ...mapGetters(["count"])
    // }
    methods:mapActions(['addActions','delActions'])
     
}
</script>

<style>

</style>
