import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

/*
vite在开发服务器和打包时：
只会对代码转译(ts代码中的特性等转为目标环境支持的JS代码)
不会对ts文件进行类型检查。
//import checker from 'vite-plugin-checker' 边dev边 type-check
//plugins:[vue(),vueDevTools(),checker({typescript:true})]
//'dev':'vite type-check --watch src'
*/

export default defineConfig({
  base: '', //dev or prod's common base url
  plugins: [vue(), vueDevTools()],
  publicDir:'public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})


// configureWebpack:{
//   externals:{
//     vue:'Vue'
//   }
// }
