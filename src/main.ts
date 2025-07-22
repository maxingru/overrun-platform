import './assets/main.css'
//element-plus
import 'element-plus/dist/index.css'

import service from "@/utils/request";


// const params = {a:1,b:2};
const params = new URLSearchParams();
params.append('a',"1");
params.append('b',"2");

const res = service({url:'http://127.0.0.1:4523/m1/5540151-5217011-default/login',method:'get',
  params,
}).then(res=>{
  console.log("res", res);
}).catch(err=>{
  console.log("err",err);
})

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



// const {DEV,VITE_GLOBAL_CONFIG} = import.meta.env;
// console.log( DEV);
// const {} = import.meta.env
// console.log("结构:",JSON.parse(VITE_GLOBAL_CONFIG));


app.use(router).mount("#app");



