<template>
  <div>
      <h1>下拉框组件</h1>
     <custom-select btn-value="查询" class="Select" :list="list"></custom-select>  
     <custom-select btn-value="搜索" class="Select" :list="list2"></custom-select>  
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("custom-select",{
    props:["btnValue","list"],
    template:`
        <div>
            <div class="box">
                <input @click="show" @input="change" @keyup.enter="search" class="text" type="text" v-model="msg" />
                <input class="btn"  type="button" :value="btnValue" @click="search" />
                <custom-list :list="list" v-show="hidden" @getMsg="getVal"></custom-list>
            </div>
        </div>
    `,
    data(){
        return{
            msg:"",
            hidden:false
        }
    },
    methods:{
        clearBgColor(){
             if(this.hidden==false){
               let len=this.list.length;
               for(let i=0;i<len;i++){
                let li=this.$el.querySelector("#selected"+i);
                li.style.backgroundColor="#999999";
               }
            }
        },
        change(){
            this.hidden=false;
            this.clearBgColor()
        },
        show(){
            this.hidden=!this.hidden
            this.clearBgColor()
        },
        getVal(val){
            this.msg=val;
        },
        search(){
            if(this.list.indexOf(this.msg)==-1){
                //不存在
                this.hidden=false
                alert("没有此内容，请重新输入")
                this.msg=''
            }else{
                //存在
                this.hidden=true
                let index=this.list.indexOf(this.msg);
                let li=this.$el.querySelector("#selected"+index);
                li.style.backgroundColor="#fff";
                this.msg=''
            }
        }
    }
})
Vue.component("custom-list",{
    props:["list"],
    template:`
        <div>
            <ul style="margin-top:20px">
                <li class="listStyle"v-for="(item,index) in list" @mouseover="hover(index)" @mouseout="out(index)" :id="'selected'+index"  @click="send(item)">{{item}}</li>
            </ul>
        </div>
    `,
    methods:{
        send(item){
            this.$emit("getMsg",item);
        },
        hover(index){
            let li=this.$el.querySelector("#selected"+index);
            li.style.backgroundColor="#fff";
        },
        out(index){
            let li=this.$el.querySelector("#selected"+index);
            li.style.backgroundColor="#999999";
        }
    }
})
export default {
    data(){
        return{
            list:["html5","css3","react","vue"],
            list2:["data","javascript","html"]
        }
    }
}
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    .box{
        width:300px;
        border-radius:20px;
        border:1px solid red;
        background:#999999;
        margin:0 auto;
        padding-bottom:7px;
    }
    .Select{
        width:400px;
        height: 300px;
        box-shadow: 5px 5px 10px #585858;
        margin:0 auto;
        padding-top:30px;
    }
    .text{
        width:200px;
        height:30px;
        border-radius:30px;
        outline: none;
        border:0;
        margin:8px 0 0 5px;
        padding-left:10px;
    }
    .btn{
        width:61px;
        height: 30px;
        border-radius:30px;
        outline: none;
        border:0;
        margin:8px 0 0 10px;
        background-color:red;
        font-size:15px;
    }
    li{
        list-style: none;
        cursor:pointer;
    }
    .listStyle{
        width:200px;
        height: 40px;
        line-height: 40px;
        padding-left:15px;
        border-radius:30px;
        margin-left:10px;
    }
    /* .listStyle:hover{
        background:#fff;
    } */
</style>
