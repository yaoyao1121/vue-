<template>
    <div>
        <div v-for="item in arr" style="width:100px;height:100px;border:1px solid #ccc;" v-red>
            <img :src="item" alt="" width=100%/>
        </div>
        <div v-for="item in obj" v-color='item.url' style="width:100px;height:100px;border:1px solid #ccc;background-size:100% 100%;"></div>
    </div>
</template>

<script>
import Vue from "vue";
Vue.directive("red",{
    // el.style.backgroundColor="red";
    bind(el){
       
    },  //元素绑定时生效
    inserted(el){
         function color(min,max){
            return Math.ceil(Math.random()*(max-min)+min);
        }
        var str="ABCDEF1234567890abcdef";
        var returnStr="";
        for(var i=0;i<6;i++){
            returnStr+=str[color(0,str.length-1)];
        }
        el.style.backgroundColor="#"+returnStr
    },  //插入元素时生效
    update(){},  //更新数据时生效
})
Vue.directive("color",{
    // el.style.backgroundColor="red";
    //指令的生命周期函数
    bind(el){
       
    },  //元素绑定时生效
    inserted(el,binding){
        var color=Math.ceil(Math.random()*100000)+99999;
        el.style.backgroundColor="#"+color;
        var img=new Image();
        img.src=binding.value;
        console.log(img.src)
        img.onload=function(){
            el.style.backgroundImage="url("+binding.value+")";
        }
    },  //插入元素时生效
    update(){},  //更新数据时生效
    unbind(){}   //解除绑定
})
export default {
    name:"dir",
    data(){
        return{
            arr:["../../static/img/plist1.jpg","../../static/img/plist2.jpg","../../static/img/plist3.jpg","../../static/img/plist4.jpg","../../static/img/plist5.jpg"],
            obj:[
                {url:"../../static/img/plist1.jpg"},
                {url:"../../static/img/plist2.jpg"},
                {url:"../../static/img/plist3.jpg"},
                {url:"../../static/img/plist4.jpg"},
                {url:"../../static/img/plist5.jpg"}]

        }
    }
}
</script>

<style>

</style>
