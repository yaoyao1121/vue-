<template>
  <div>
      <!-- 
          什么是组件?
            组件是用封装起一些具体的功能实现代码的复用
          全局组件
            Vue.component("组件名",function(){})
          局部组件
            放在实例里面  需要加s  components("组件名":{})
          组件传值(组件通信)
            父传子   子传父   兄弟
       -->
       <!-- 父传子  在子组件中用props  给组件动态绑定数据 -->
       <list @getMsg="getUser"></list> 
       <div>父组件用户名为：{{user}}</div><br/>
       <child-list :data="info" ></child-list>
       <!-- 子组件部分  子传父通过事件 事件里用$emit来传值 -->
       
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("list", {
  template: `<div>
            <span>我是全局组件{{msg}}</span>
            <button @click="show">显示</button>
            <div class="login">
                <p>
                    <span>子组件用户名：</span>
                    <input type="text" v-model="userName" @input="setUser"/>
                </p>
            </div>
        </div>`,
  data() {
    return {
      msg: "ooo",
      userName:''
    };
  },
  methods: {
    show() {
      console.log("全局组件");
    },
    setUser(){
      //自定义事件  事件名称为getMsg   发送的数据
        this.$emit('getMsg',this.userName);
    }
  }
});
export default { //相当于new Vue
  data(){
      return{
          info:"我是父组件",
          user:""
      }
  },
  methods:{
     getUser(msg){
         this.user=msg;
     } 
  },
  components: {
    "child-list": {
      props:["data"],
      template: `
        <div>
            <span>局部组件{{data}}</span>
            <button @click="show">隐藏</button>
        </div>`,
      data() {
        return {
          msg: "aaa"
        };
      },
      methods:{
          show(){
              console.log("局部组件")
          }
      }
    }
  }
};
</script>

<style>

</style>
