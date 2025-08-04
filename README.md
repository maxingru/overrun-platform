# overrun-platform

# ================================
# .html
1.使用环境变量： %value% 在html中使用


# 博客：类型转换 
1.看下博客的类型转换？？
（if(""==0){} 相同的原因是都转为布尔类型比较的）



# 统计结果
Bug — 50+；
Feature — 33；
Improvement — 27
Tech — 4
性能优化 ：
Render Wasted Time： 约5684ms 
DownTo 约767.4msRender 
Total Time：约18062.45ms 
DownTo 约2575.85ms（ps：每个组件渲染时间总和）
Code Contribute：
add lines 29553, remove lines 11776
这种东西是怎么搞出来的


# TS
1.enum 记录一下
const enum MediaTypes {
    JSON ='application/json',
    XML ='application/xml'
}
2.env.d.ts文件是干啥的？？ 1.看下vite中的ts配置？vite.d.ts？？？

1.工具类型跑一遍. 2.declare看下 和 env.d.ts为啥需要


# MDN
// 3.MDN的这个底部的promise和微任务？？
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises 



# 测试用例 怎么搞？？
# 测试 vite-test？
function doStuff(abc: string, xyz: string) {
assert(typeof abc === "string");
assert(typeof xyz === "string");
// do some stuff
}
expect(() => {
// @ts-expect-error
doStuff(123, 456);
}).toThrow();


# package.json
"scripts": {
"dev": "vite",  // 启动开发服务器(HMR，仅TS语法转译JS支持的语法，但不会类型检查,类型检查需要IDE)

"build": "run-p type-check \"build-only {@}\" --",      //构造生产包 + 类型检查。
"build-only": "vite build", //仅构造生成包，不进行类型检查
"preview": "vite preview",  //预览生产环境构建后的结果。 需先运行 npm run build 生成 dist 目录。启动一个静态服务器，模拟生产环境运行构建后的代码

"type-check": "vue-tsc --build", //进行TS的类型检查 + ts的增量编译 + 依赖顺序解析(references中依赖的多个子项目的tsconfig.json文件会被合并成一个tsconfig.json文件，然后进行类型检查)

"test:unit": "vitest",      //运行 Vitest 单元测试

"lint": "eslint . --fix",   //运行 ESLint 检查代码规范，并自动修复可修复的问题
"format": "prettier --write src/"   //用 Prettier 格式化 src/ 目录下的代码
            //prettier与 ESLint 的区别：Prettier 只关注格式，ESLint 还关注代码质量。
},



#  .env.development .env.development.local
# vite-env.d.ts 中的vite





# vue3：
响应式的解构会丢失响应性？？？
1.看下文档中的props解构时的响应性测试一下。
https://cn.vuejs.org/guide/components/props.html#reactive-props-destructure
https://cn.vuejs.org/api/composition-api-setup.html#accessing-props


# 开发进度

# git操作 
1.我先把master的commit -> push
2.新增一个dev分支 -> 开发。

tag版本：
-1 每发布一个版本 ，生成一个change log

分支:
-1 master
-2 dev
-3 fixBug [在dev开发中发现bug->开bug分支->合并->删除]

commit:
 -1 feat(范围): 新功能
 -2 fix(范围): 修复bug
 -3 docs(范围): 文档更新
 -5 style: 代码格式调整
 -6 refactor: 代码重构
 -7 test(范围): 测试用例
 -8 chore: 构建或工具链变动（依赖、脚本等）
 -9 revert: 撤销之前的提交
 -10 perf: 性能优化
-11 ci:	持续集成相关（CI/CD 配置）
-14 config: 项目配置文件的变动
-15 其他：其他类型的提交

revert: feat(pencil): add 'graphiteWidth' option    //撤销commit必须这么写


commit message 的工具：
-1 commitizen
$ npm install -g commitizen
全局安装 -> 以后 git commit ->改为 git cz
$ commitizen init cz-conventional-changelog --save --save-exact
在本项目内
-2 validate-commit-msg
-3 conventional-changelog


切换分支：
-1 切换之前确保本分支的已经commit or git stash 了








# 不同之间的版本问题：
最基础的超限平台版本是tag v1.0.0
-1 直接 remote clone下 tag v1.0.0 -> 每个点位最初的原始版本。 (就不需要再管了)



# npm cdn
首屏加载和优化
preload prefetch的问题？？ link.css的preload 和 prefetch
-1 生产下：我先用npm测试下首屏加载速度
-2 如果太慢，我就用cdn + npm(fallback) + externals 配置排除的库



.env.development 和 .evn.production 中都写 CDN的开关，一个ON,一个OFF。 使用时：===ON 则启用
gzip同理。都写。 【压缩】

# devServer
proxy代理？？？

# 待办
// 1.我要修改(.env.development 和 )了，让其他地方能使用全局变量。
// 2.TS语法的支持
// 3.提交git 新增dev分支
3.TS 中性的题目

# 动画
requestAnimationFrame 这个API的动画渲染帧？？
@vueuse/motion Motion底层基于requestAnimationFrame优化渲染，动画流畅不掉帧。即使页面元素再多，也能丝滑运行，对移动端尤其友好。
？？怎么实现的？
5.动画效果使用 <Transition> 代替css的transitio
库：
VueUse Motion、Anime.js 、GSAP
Framer Motion(react 也有vue的)




# SVG
stroke-dasharray: 90, 150;
stroke-dashoffset: 0;
stroke-width: 2;
stroke: #409eff;
stroke-linecap: round; 
用这来来解决一个loading 的border-color:transparent;的变长,而不是固定的长度
怎么用svg代替一个border的html元素实现的?



# # 开发进度
# index.html + config.js 配置
# 环境变量文件配置 + 公共文件配置
1.env.d.ts
新增环境变量 + 环境变量的类型定义
1.index.html
#app挂载之前的加载进度。

2.nprogress 的 路由守卫中使用.
-1 导入js -2 导入style


# 路由
-1 服务器端如何配置 适应history模式?
https://router.vuejs.org/zh/guide/essentials/history-mode.html
-2 
全局守卫
单个路由独享的守卫
组件内守卫

router中 ts类型的源码位置:
https://github.com/vuejs/router/blob/main/packages/router/src/types/index.ts


# store库
自己实现一下路由和store
https://cn.vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch
路由中 花裤衩文章中提到的问题看下.


# 插件
https://router.vuejs.org/zh/guide/#%E6%B3%A8%E5%86%8C%E8%B7%AF%E7%94%B1%E5%99%A8%E6%8F%92%E4%BB%B6


# 博客:
vue-router v4.x中 typescript使用说明 
vue-router中的工具类型.





# http
authorization  权限验证
HTTP Authorization 请求标头
auth 是 Axios 的一个配置选项，用于 HTTP 基本认证（HTTP Basic Authentication）

params 和 data需要编码后传输过去。。

# 用户名密码 和 params 需要加密吗？？？




# 待解决
-3 预发布模式是什么？是能直接看到打包后的内容？？
1.git 的 npm run release -- --prerelease alpha
2.npm的 npm run preview

3.看http的书!!!!!!!
3.过一遍TS工具类型 + ts的题目
3.看下阮一峰的JS教程中的 IndexedDB API等对象。
3.URLSerchParams？？？ FormData对象等一系列的。 url编码解码 url.encoded decoded
3.fetch？？？？

axios的错误处理+ vue的错误处理 + 取消请求等、
第二个问题： 看下稀土的针对逻辑层和视图的拆分的博客


# 请求-> 路由 ->登录的这一套流程整理一下。 
请求和路由跳转不同：(不一定同时发生)
请求：
-1 每个请求都带token。如果没有token也会正常发送请求(因为某些接口可能允许匿名访问->前端不应该阻止请求而是交给后端决定返回404还是数据。)
-2 如果某些接口必须认证token不存在就阻止发送

//请求拦截器use(config=>{//这里你可以手动抛出错误阻止发送请求/Promise.reject()->axios.catch中而不是到error中},error=>{//这里是请求配置出错了，需要你将错误抛出到axios.catch});
//响应拦截器use(response=>{//这里表示请求成功且响应成功2xx。Promise.reject()只是我手动抛出错误到axios.catch中，不会到error中},error=>{//响应超出2xx})
响应：
-1 根据响应code(token过期/非法/不存在) -> 报错/重新登录

路由跳转(判断token+role+用户信息)：
-1 每次跳转都先判断是否有token
    有  ->跳转的页面是login -> 跳转到首页
        ->不是login       -> 正常跳转[如果未拉取role和info -> 先拉取] 
                               -1 满足权限进入  -> 进入
                               -2 这里我有点奇怪！！！【只需要判断当前用role就能直接进入了？还是说拉取role并满足目标页面需要的role才行？   拉取info 和 拉取role是一回事？ 】
    无 -> 要跳转路由页面是否在白名单内(即页面不需要token属于公共页面/login 和 login/redirect) -> 是 -> 正常跳转
                                                             否 -> 跳转登录页面



# 把token过期/单点登录都放在请求响应中处理 -> 而不是在路由守卫中处理原因：
-1 触发路由守卫不一定触发请求 
-2 token过期/单点登录冲突仅在响应中收到



# 路由：先过一遍老项目的流程。

//1.但是这个不会涉及到重新拉取token？？

[测试一下：不把登录放在白名单内会一直重复跳转么]

权限和用户名(role和info)：

1.单点登录怎么搞？
//单点登录的话就不需要每次请求拉取最新的info。 保留在本地的cookie中就行


= {AutoLogin:'dd',LoginName:'admin'} ;//当前token + 当前用户的用户名

[//]: # (下载一个nginx ,然后在本地部署访问慢的官网？？？)

[//]: # (单点登录：https://juejin.cn/post/7483708438683287587)
[//]: # (vue3源码：https://zhuanlan.zhihu.com/p/1908987265839010468)
[//]: # (CI/CD:https://zhuanlan.zhihu.com/p/31604837208)


[//]: # (//全局黑色皮肤的背景)


# 加一个
table的编辑的文本或输入框/下拉框 （方便的）

1.axios的 proxy
2.vite的proxy
3.url的编码和解码 (阮一峰的JS)


# 封装一个el-select的包含一键多选+ 一键取消多选的。 打包一下。


# https://bgithub.xyz/PanJiaChen/vue-element-admin/blob/master/src/components/Charts/mixins/resize.js

-1 封装图表组件 + debounce的resize
chart.dispose()？？
dispose？ 销毁定时器、绑定的DOM节点？ 事件监听？ 销毁实例？


# ========================================================================================
# 开发日志
1.环境变量文件
.env .env.development
-1 生成下都在dist/config
-2 开发下在.env.development
新增类型声明文件 ：为自定义的外部接口添加类型声明
2.封装nprogress
放入路由守卫
3.封装axios
-1 请求+token/name  
//请求： 判断请求参数类型 + 添加token +username
//如果不存在token  -> 也正常发送请求 (某些公共页面可能不需要token)
//1.先判断method：在params 还是 data中添加token
//2.判断params/data的类型 —> 如何添加token
-2 响应  跳转 取消Controller？ AbortController 统一的错误处理？？？
//确实响应错误。 token过期/非法/其他用户登录。正常响应

3.登录
1.账号密码发送给服务端，服务端验证通过 返回token
2.token存入cookie . 再利用token拉取user_info + role
3.动态根据当前用户的role算出对应的路由 -> addRoute挂载动态路由。
vuex每次刷新页面内容都会丢失 -> 每次刷新都会根据token拉取user_info + rolr ->route?

5.路由 权限
静态路由 +  动态路由 [不同用户权限/条件路由/]




# 问题
1.环境问题和mode问题
"preview": "vite preview", 这个 和 预发布模式 --mode staging有啥区别？？？
2.proxy的跨域？？ nginx？
3.单元测试？
单点登录?清除token？
换肤
跨域(开发proxy 生产nginx)

文章：
手把手使用icon：
https://juejin.cn/post/6844903517564436493
