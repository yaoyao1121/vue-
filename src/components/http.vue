<template>
  <div>
    <p v-for="item in msg">{{item}}</p>
    <button @click="getInfo">获取</button>
    <input type="text" v-focus>
  </div>
</template>

<script>
import Vue from "vue";
import $http from "vue-resource";
import Axios from "axios";
Vue.use($http);
export default {
  name:"http",
  data(){
    return{
      msg:""
    }
  },
  // directives:{
  //   "focus":{
  //     inserted(el){
  //       console.log(el)
  //       el.focus();
  //     }
  //   }
  // }
  // ,
  methods:{
    //Axios jsonp跨域
    getInfo(){
      //get方式
      // this.$http.get("../../package.json").then((result)=>{
      //     this.msg=result.body;
      // })
      //post方式
      // this.$http.post("../../package.json").then(result=>{

      // })
      // this.$http.jsonp()
      //百度：https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a
      // this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a",{jsonp:"cb"}).then(function(result){
      //   console.log(result.body.s)
      //   this.msg=result.body.s;
      // })

      //360：https://sug.so.360.cn/suggest?callback=suggest_so&word=a   emulateJSON:true 允许跨域访问
      // this.$http.jsonp("https://sug.so.360.cn/suggest?callback=suggest_so&word=a",{emulateJSON:true}).then(function(result){
      //   this.msg=result.data.s;
      // })
    
    //http://event.laifeng.com/event/137/group/ranking?_=1513770768718&rulesId=32&stageId=78&widgetId=81&divisionId=1950&start=0&end=4
      // this.$http.jsonp("http://event.laifeng.com/event/137/group/ranking?_=1513770768718&rulesId=32&stageId=78&widgetId=81&divisionId=1950&start=0&end=4",{jsonp:"cb"}).then(function(result){
      //   console.log(result.data)
      // })

      //vue2里的请求后台数据
      // Axios({
      //   url:"../../package.json",
      //   method:"get",
      //   params:{

      //   }
      // }).then(result=>{
      //     console.log(result.data);
      // })

      // Es6 fetch请求后台数据
      // arrayBuffer()  解析数组
      // blob()         解析图片
      // json()         解析对象
      // text()         解析文本
      // formData()     解析表单
      fetch("../../package.json").then(result=>{
         if(result.ok){
           result.json().then(data=>{
             console.log(data)
           })
         }else{
           console.log(result.status);
         }
      },err=>{
        console.log("Fetch failed!",err);
      })
      alert(1);
    }
  }
}
</script>

<style scoped>

</style>
