<template>
   <div>
       <!-- 兄弟之间的通信  先子传父(通过事件绑定,创建自定义事件用$emit) 再父传子(通过props[""])-->
       <list @getInfo="get"></list>
       <child-list :data="msg"></child-list>

   </div>
</template>

<script>
import Vue from 'vue'; //相当于script标签的引进
window.eventBus = new Vue();
//全局组件
Vue.component("list",{
    template:`
        <div>
            <div>全局组件：<input type="text" v-model="msg" @input="send" /></div>
        </div>  
    `,
    data(){
        return{
            msg:""
        }
    },
    methods:{
        send(){
            this.$emit("getInfo",this.msg)
        }
    },
   
    mounted(){
        // 实例挂载完成之后执行 生命周期函数
        // this.send();
        //  eventBus.$on('eventBusName', function(val) {console.log(val)}) 
    }
})
export default {
    data(){
        return{
            msg:"",
            parent:"我是父亲的值"
        }
    },
    methods:{
        get(val){
            this.msg=val;
        }
    },
    mounted(){
    },
    components:{
        "child-list":{
            name:"child-list",
            props:["data"],
            data(){
                return{
                    id:"eventbus"
                }
               
            },
            template:`
                <div>
                    <div>局部组件：<span>{{data}}===>{{id}}</span></div>
                    <button>点击</button>
                </div>
                    `,
            methods:{
                

                   
               
            },
            mounted(){
                //  eventBus.$emit('eventBusName', this.id);
                this.id=this.$parent.$data.parent;
                console.log(navigator.userAgent)
            }
        }
    }
}
</script>

<style>

</style>
