//本文件是封装的axios
import axios from "axios";

const http=axios.create({    //一些对axios的配置
    //写自己后端服务地址
    baseURL: "/api",    //基于哪个路径,路径当中会出现/api
    timeout: "20000" ,   //单位ms,请求超时时间

})

//请求拦截器
axios.interceptors.request.use(function (config){
    //发送请求前需要做什么,config是一个配置对象,其中有一个属性header请求头非常重要
    return config;
},function (error){
    //请求错误处理
    return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use(function (response){
    //接收请求首先需要做什么,response中的data属性非常重要
    return response;
},function (error){
    //响应错误处理
    return Promise.reject(error);
})

export default http

