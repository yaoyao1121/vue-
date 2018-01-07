import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
// console.log(VueRouter);
//局部组件
const Index = {
    template: `<h2>我是首页</h2>`
}
const News = {
    template: `<h2>我是新闻页</h2>`,
    //路由的生命周期函数
    //beforeRouteEnter在调用时没有访问到实例，但是可以通过next对其进行处理
    beforeRouteEnter(to,from,next){
        // console.log(arguments);
        next(vm=>{
            console.log(vm);
        })
    },
    //beforeRouteLeave  导航离开该组件的对应路由时调用 
    beforeRouteLeave(to,from,next){
        console.log(arguments);
    }
}
const INFO = {
    template: `<h2>我是资讯页</h2>`
}
const student = {
    template: `<h2>此学生的id是{{ $route.params.id }}</h2>`
}
const User = {
    template: `
      <div >
        <h2>用户：{{ $route.params[0] }}</h2>
        <router-view></router-view>
      </div>    
    `,
    // //监听路由变化  to是目的的路劲   from  上级路径
    // watch: {
    //     '$route' (to, from) {
    //       // 对路由变化作出响应...
    //       console.log(arguments)
    //       console.log(to)
    //     //   console.log(from)
    //     }
    // }
    beforeRouteUpdate(to, from, next) {
        // react to route changes...
        // don't forget to call next()
        // console.log(arguments);
        next();
    }
}
const user1 = {
    props:["id"],
    template: `
    <div>
        <h3>用户1===></h3>
        <p>{{id}}</p>
    </div>

    `
}
const user2 = {
    template: `<h3>用户2{{ $route.params.id }}</h3>`
}
const user3 = {
    template: `<h3>用户3{{ $route.params.id }}</h3>`
}
const newIndex={
    template:`<h2>新首页</h2>`
}
const Foo={
    template:`<h2>Foo</h2>`
}
const router = new VueRouter({
    mode: "history", //模式  history h5里面的方法  hash
    base: __dirname, //文件路径  filename  绝对路径    dirname  相对路径
    routes: [   //路由配置 
        { "path": "/", component:Index,name:"index"/* redirect:"/newIndex"  重定向 跳到新的页面*/},
        { "path": "/news", component: News ,/*alias:"/aa" 别名 代表小名还是这个页面*/},
        // {"path":"/newIndex",component:newIndex},
        // {"path":"/foo",component:Foo,name:"foo"},
        { "path": "/info", component: INFO ,/*redirect:(to)=>{return "/user"} 重定向 甚至是一个方法，动态返回重定向目标*/},
        // 动态路径参数 以冒号开头
        { "path": "/student/:id", component: student,name:"student"/*redirect:{name:"foo"} 重定向的目标也可以是一个命名的路由*/},
        {
            "path": "/user", component: User,
            children: [
                { "path": "/user/user1/:id", component: user1 ,props:true},
                { "path": "/user/user2/:id", component: user2 },
                { "path": "/user/user3/:id", component: user3 }
            ]
        }
    ]
})
// router.beforeEach((to, from, next) => {
//     console.log(arguments);
//     sessionStorage.setItem("user","qqq");
//     console.log(sessionStorage.getItem("user"));
//     next()
//   })
// router.afterEach((to,from)=>{
//     sessionStorage.removeItem("user")
// })
new Vue({
    el: "#app",
    router,
    template:
        `<div>
        <li> <router-link :to="{name:'index'}">首页</router-link></li>
        <li> <router-link to="/news">新闻</router-link></li>
        <li><router-link to="/info">资讯</router-link></li>
        <li><router-link :to="{name:'student',params:'id'}">学生页</router-link></li>
        <li>
            <router-link to="/user">用户</router-link>
            <ul>
                <li><router-link to="/user/user1/123">用户1</router-link></li>
                <li><router-link to="/user/user2/456">用户2</router-link></li>
                <li><router-link to="/user/user3/789">用户3</router-link></li>
            </ul>
        </li>
        <router-view></router-view>
    </div>`
})