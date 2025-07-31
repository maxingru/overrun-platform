/**
 * @date:2025/7/10
 * @description:封装axios
 * 他把token放请求参数中纯白痴[还要区分不同类型]。 放header中才简单。
 * 路由的错误处理，axios的错误处理 cancelToken ，整个app的错误处理？？？
 * 在interceptors中拿到的都是原始数据 -> 只有在实际发送时才会被修改和拼接
 * 发请求 -> axios.interceptors 塞token -> router.beforeEach 验证token
 *
 * */
import axios from 'axios';
import {ElMessage} from 'element-plus';


//dev and prod
const baseURL = ():string=>{
  const {DEV,VITE_GLOBAL_CONFIG,VITE_APP_END_URL} = import.meta.env;
  const beforeURL:string = DEV
      ? JSON.parse(VITE_GLOBAL_CONFIG).apiBaseurl
      : GlobalConfig.apiBaseurl;
  return beforeURL + VITE_APP_END_URL;
}

//1.封装axios +
//axios
const service = axios.create({
  baseURL:baseURL(),
  timeout:5000,
  responseType:'json',  //=默认按JSON处理 -> 将JSON字符串转为JSON对象。
});

//axios guard
service.interceptors.request.use(config=>{
  const {method,params,data}= config;
  const withToken:boolean = false;
  if(!withToken) return config;
  interface TokenType{
    LoginName:string,
    AutoLogin:string
  }
  const currentToken:TokenType = {LoginName:'admin',AutoLogin:"2222"};

  //参数类型：根据Content-Type来区分: application/json text/plain application/x-www-urlencoded multipart/form-data
  if(method==='get'){
    //{} or URLSearchParams
    if(params instanceof URLSearchParams){
      config.params.append('LoginName',currentToken.LoginName);
      config.params.append('AutoLogin',currentToken.AutoLogin);
    }else{
      config.params = {...params,...currentToken};
    }
  }else{
    //{} or URLSearchParams or FormData
    if(data instanceof URLSearchParams || data instanceof FormData){
      config.data.append('LoginName',currentToken.LoginName);
      config.data.append('AutoLogin',currentToken.AutoLogin);
    }else{
      config.data = {...data,...currentToken}
    }
  }
  return config;
},error=>{
  return Promise.reject(error);
});

axios.interceptors.response.use(response=>{
  //1.这里的错误处理+ 全局错误处理 + cancelToken AbortCancel + 单点登录的实现？ + redirect ?
  //2.处理token + role + info


  //响应拦截。收到响应之前的处理；

  //检测token非法。token过期。单点登录。 响应错误。

  //-1 确实响应错误
  const {data} = response;
  if(data.status!=='0' && data.status!=='1001'){
    if(data.errmsg){
      ElMessage({
        type: 'error',
        message: data.errmsg,
        duration:2000,
        showClose: true,
        grouping:true
      })
      return Promise.reject(new Error(data.errmsg??'Error response'));   //响应错误
    }
  }
  //-2 token过期/非法token/单点登录
  if(data?.res?.LoginStatus==='F'){
    //1.这里使用ElMessage.confirm()
    //2.使用到了 markRaw + 自定义icon
    //3. 区分close 和 cancel
    //3. 可拖放
  }
  return Promise.resolve(response.data);

  //根据后端返回code ： token过期/非法token/单点登录
  //处理： -1 token过期/非法token/单点登录 -> 提示当前登录已失效，是否继续留在本页面？
  //      -2 确实是响应错误了。
},error=>{
  //over 2xx
  return Promise.reject(error);
})

export default service;


// //响应拦截器处理结果：
// services.interceptors.response.use(response=>{
//   //根据后端返回code -> 非法token/token过期/单点登录。
//
//
// },error=>{
//   //
//
// })


/*
services.interceptors.response.use(response=>{
  //非法token 过期token 单点登录原因。 (后端定死)
    const {data}= response;
    //data.status !=='0' && !=='1001' ->  {status:'',errmsg:''} ;//响应失败的信息
    //data.res.LoginStatus==='F' token过期/单点登录被顶掉  分开判断 -> 重登录
    //return res.data;
    if(data.status!=='0' && data.status!=='1001'){      //{status:'',errmsg:''}
      ElMessage({
        type:'error',
        message:data.errmsg??'Error',
        duration:3000,
        plain:true,
        showClose:true,
        grouping:true,
      });
      return Promise.reject(new Error(data.errmsg??'response failder'));
    }else if(data.res?.LoginStatus==='F'){
      //登录失败了？
      //
    }
// 我知道问题了：
//   -1 data.status!=='0' && data.status!=='1001')这个应该是后端直接返回 2xx范围外的状态码(表示响应错误) -> 在error=>{}中处理才对
//     但是他后端写的即使响应失败，也返回2xx范围内的状态码 -> 导致只能在response=>{}中处理响应错误。
//
//   -2  }else if(data.res?.LoginStatus==='F'){ 而这个才是token失败/单点登录被顶/非法token，只不过没有code而是用一个LoginStatus='F'代替。
//     只需要做一件事：重新登录。 (重置token + 刷新本页面 = 回到登录页面)
//   -3  其他情况则正常通过。


    console.log("response",response);
  return response.data;

},error=>{
  //over 2xx
  ElMessage({
    type:'error',
    message:error.message??'Error',
    plain:true,
    grouping:true,
    showClose:true,
    duration:3000,
  });
  return Promise.reject(error);
})


*/


//app.config.globalProperties

// services.interceptors.response.use(response=>{
//   //根据响应来处理。 过期/非法/单点登录
//   //response.data/.status/.statusText/.headers/.config(请求config) /.request
//
//   // return Promise.reject("response");
//   // return response.data;  //response:{} 整个对象 data:{}/status/request/statusText/config/
//   console.log("response内：",response);
//   //请求是成功发送，且成功响应了code:2xx范围 -> 只不过我手动Promise.reject抛出错误到catch了而已
//   return Promise.reject("手动终止响应");    //
// },error=>{
//   console.log("触发拦截-response",error.message);
//   return Promise.reject("error");
// })


// 问题：
// -1 他跳转到login页面，怎么还有redirect呢？？？
//   router.push({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   });



//响应时：要检查每个响应的status 和 res:{LoginStatus:"T"} 响应中是否token过期了 。
// services.interceptors.response.use(response=>{
//
//
//   //1.单点登录。 如何被顶下来的？
//   //2.未携带token 3.token过期。
// },error=>{
//
// })


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

