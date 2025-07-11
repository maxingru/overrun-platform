/// <reference types="vite/client" />
//为了给环境变量(import.meta.env) 和 客户端特性(import.meta.hot)等提供类型声明


//给import.meta.env中新增的环境变量添加类型声明的扩展
interface ImportMetaEnv{
  readonly VITE_GLOBAL_CONFIG:string,  //这里的值类型始终是string类型而不是自定义对象类型
  readonly VITE_APP_TITLE:string,
  readonly VITE_APP_END_URL:string,
}
interface ImportMeta{
  readonly env:ImportMetaEnv
}
//给不会被ts处理且无法添加到includes/files中的文件添加类型声明 (public下的)
//会全局污染
declare const GlobalConfig : {
  apiBaseurl:string,
  reportBaseurl: string,
  dataviewBaseurl: string,
  mapBaseUrl: string,
  mapCenterLat?: number,
  mapCenterLng?: number,
  mapCity: string,
  mapPolygon:string,
}
