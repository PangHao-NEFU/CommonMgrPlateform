import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from "./router";
import store from "./store";
import mock from './api/mock'
import Cookie from "js-cookie";


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(store)

//全局前置路由守卫,没登录禁止访问home页面


new Vue({
  render: h => h(App),
  router,
  store,
    created() {
      store.commit('addMenuRouter',router)
    }
}).$mount('#app')
