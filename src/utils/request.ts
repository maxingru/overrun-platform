/**
 * @date:2025/7/10
 * @description:封装axios
 * 1.后端定死了token在请求体/查询参数中 2.请求发送数据均为text/plain
 * 路由的错误处理，axios的错误处理 cancelToken ，整个app的错误处理？？？
 * */
import axios from 'axios';
//dev and prod
const baseURL = ():string=>{
  const {DEV,VITE_GLOBAL_CONFIG,VITE_APP_END_URL} = import.meta.env;
  const beforeURL:string = DEV
      ? JSON.parse(VITE_GLOBAL_CONFIG).apiBaseurl
      : GlobalConfig.apiBaseurl;
  return beforeURL + VITE_APP_END_URL;
}
// axios instance
const services = axios.create({  //request config
  baseURL:baseURL(),
  timeout: 10000,
  responseType:'json',  //将响应数据强制作为JSON处理->JS对象
});


//axios guard
services.interceptors.request.use(config=>{
  config.headers['Content-Type'] = 'text/plain;charset=UTF-8';
  const {method} = config;
  //query :get/delete
  //data: put/post/patch/delete
  //{LoginName:'当前用户名',AutoLogin:token}
  if(method ==='get'){
    const tmpParams = config.params;
    config.params = Object.assign(tmpParams, {
      LoginName:'demoName',
      AutoLogin:111111
    });

  }
  //对象浅拷贝：Object.assign() /
  return config;
},error=>{

})



//
// //axios guard
// services.interceptors.request.use(config=>{
//   config.headers['Content-type'] = 'text/plain;charset=UTF-8';
//   const {method} = config;
//   if(method==='get'){
//   处理params  data cancelToken 错误处理。
//   }
//   return config;
// },error=>{
//
// })
//
//
//







//1.错误处理 2.权限控制 3.

