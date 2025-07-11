import './assets/main.css'
//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//
// import {services} from "@/utils/request";

// const res = services({url:'login',method:})
//

//router -> plugin
import router from './router/index'

//app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
//  在这个整个应用中提供一个依赖 -> 任意位置任意组件中都可以使用
// app.provide('app', {});  -> 可以用来编写插件
// console.log("env:",import.meta.env);

// console.log("结果:",GlobalConfig);
if(!import.meta.env.DEV){
  alert("生产环境");
  // 测试一下这里。
}

// const {DEV,VITE_GLOBAL_CONFIG} = import.meta.env;
// console.log( DEV);
// const {} = import.meta.env
// console.log("结构:",JSON.parse(VITE_GLOBAL_CONFIG));


app.use(ElementPlus).use(router).mount('#app')




