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
import {ElMessage,ElMessageBox} from 'element-plus';
import {Position} from '@element-plus/icons-vue';
import {markRaw} from 'vue';



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
  const {method,params,data} = config;
  interface TokenType{
    LoginName:string,
    AutoLogin:string
  }
  const currentToken:TokenType = {LoginName:'admin',AutoLogin:"2222"};
  const withToken = false;
  if(!withToken) return config;   //即使不存在token也正常发送请求。
  if(method==='get'){
    //判断params类型
    //{} or URLSearchParams
    if(params instanceof URLSearchParams){
      config.params.append('LoginName',currentToken.LoginName);
      config.params.append('AutoLogin',currentToken.AutoLogin);
    }else{
      //param可能为undefined。
      config.params = {...params,...currentToken};
    }
  }else{
    //判断data类型
    //{} or URLSearchParams or FormData [整个对象 or {}对象内file/blob等]
    if(data instanceof URLSearchParams || data instanceof FormData){
      config.data.append("LoginName",currentToken.LoginName);
      config.data.append("AutoLogin",currentToken.AutoLogin);
    }else{
      config.data ={...data,...currentToken};
    }
  }
  return config;
},error=>{
  return Promise.reject(error);
});


service.interceptors.response.use(response=>{
  //-1.确实响应错误。 -2token过期/非法/其他用户登录  -3 正常响应
  const {data} = response;
  if(data.status!=='0' && data.status!=='1001'){
      ElMessage({
        type:'error',
        message:data.errmsg||"响应错误",
        duration:3000,
        plain:true,
        grouping:true,
        showClose:true
      });
      return Promise.reject(data);
  }
  //
  if(data.res?.LoginStatus ==='F'){
      ElMessageBox.confirm("您已登出，可以取消继续留在该页面，或者重新登录","确定登出",{
        type:'warning',
        confirmButtonText:"重新登录",
        cancelButtonText:"取消",
        draggable:true,
        distinguishCancelAndClose:true,
        icon:markRaw(Position)
      }).then(res=>{
        //confirm
        //1.删除登录信息 + 跳转到登录页面
      });
      return Promise.reject("登录信息失效");
  }
  //
  return data;
},error=>{
  ElMessage({
    type:'error',
    message:error.message??"error:响应超出范围",
    duration:3000,
    plain:true,
    showClose:true,
    grouping:true
  })
  return Promise.reject(error);
})

export default service;




// 问题：
// -1 他跳转到login页面，怎么还有redirect呢？？？
//   router.push({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   });









