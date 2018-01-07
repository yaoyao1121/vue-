<template>
    <div>
        <input type="text" v-model="msg" @keyup.enter="enter" @input="down" placeholder="请输入搜索内容" list="valList"/>
        <datalist id="valList">
            <option v-for="item in List">{{item}}</option>
        </datalist>
        <li v-for="item in arr">{{item}}</li>
    </div>
</template>

<script>
import Vue from "vue";
import $http from "vue-resource";
Vue.use($http);
export default {
    name:"search",
    data(){
        return{
            msg:"",
            arr:"",
            List:""
        }
    },
    methods:{
        down(){
            this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.msg,{jsonp:"cb"}).then((result)=>{
                this.List=result.data.s;
            })
        },
        enter(){
            this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.msg,{jsonp:"cb"}).then((result)=>{
                this.arr=result.data.s;
                this.List=""
            })
        }
    }
}
</script>

<style>
    #valList{
        width:400px;
        height:200px;
        overflow-y: hidden;
    }
</style>
