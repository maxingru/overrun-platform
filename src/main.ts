import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
//  在这个整个应用中提供一个依赖 -> 任意位置任意组件中都可以使用
// app.provide('app', {});  -> 可以用来编写插件

app.use(ElementPlus)
app.mount('#app')






