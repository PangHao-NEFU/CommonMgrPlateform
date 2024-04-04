import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import User from "../views/User";
import Main from "@/views/Main";
import Mall from "@/views/Mall";
import PageTwo from "@/views/PageTwo";
import PageOne from "@/views/PageOne";
import Login from "@/views/Login";
import Cookie from "js-cookie";
Vue.use(VueRouter)

const routes=[
    {
        path: '/',
        component: Main,
        redirect:'/home',
        name: "Main",
        children:[
            {
                path:'home',
                component:Home,

            },  //首页
            // {
            //     path:'user',
            //     component:User
            // },  //用户管理
            // {path:'mall',component: Mall},   //商品,业务属性
            // {path:'pageone',component: PageOne},
            // {path:'pagetwo',component: PageTwo}
        ]
    },
    {
        path:'/login',
        component: Login,
        name:'login',

    }

]

const router=new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
    //判断token存不存在
    const token=Cookie.get('token')
    if (!token&&to.name!=='login'){   //需要注意当第一次进入login时就不要跳转了,否则会进入死循环
        next({
            name: 'login',
        })
    }else if (token && to.name==='login'){      //如果用户已经登录过了,在前往login时就直接跳到home
        next({name:'Main'})
    }else {
        next()      //其他情况放行
    }
})

export default router





