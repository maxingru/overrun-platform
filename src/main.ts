import './assets/main.css'
//element-plus -> plugin
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

//router -> plugin
import router from './router/index'

//progress
import 'nprogress/nprogress.css';



import service from '@/utils/request';
async function testAxios(){
    const res = await service({method:'post',
      url:'http://127.0.0.1:4523/m2/5540151-5217011-default/330867972',
      data:{a:1,b:2}});
    console.log("res的结果：",res);
}
//要是响应报错 -> 在这里拿到了结果。
testAxios();







//app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus).use(router).mount("#app");



//  在这个整个应用中提供一个依赖 -> 任意位置任意组件中都可以使用
// app.provide('app', {});  -> 可以用来编写插件
// console.log("env:",import.meta.env);




