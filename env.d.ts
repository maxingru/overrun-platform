/// <reference types="vite/client" />

/*
类型声明文件：为本模块的外部接口的所有类型写在本文件，让使用者能更快了解接口。
reference(type):当前类型声明文件依赖的类型声明文件(node_modules/@types)
1.给自己新增的环境变量添加类型声明
*/

//合并import.meta.env interface
interface ImportMetaEnv{
  readonly VITE_APP_TITLE:string,
  readonly VITE_APP_END_URL:string,
  readonly VITE_GLOBAL_CONFIG:string,
}

//合并import.meta interface
interface ImportMeta{
  readonly env:ImportMetaEnv,
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

