//create a router instance
import {createRouter,createWebHashHistory} from 'vue-router';
import type {Router,RouteRecordRaw,RouterHistory} from 'vue-router';
import {progressStart,progressEnd} from '@/utils/nprogress.ts';


/*
* 1. 仅在路由拦截器中判断是否有token
*
*
*
* */



// ===========================
// 注意在使用Vue-router的任意选项和API 时,都先看下文档中该TS类型是什么
// =============================

//1.配置一下动态和静态路由
/*
* 1.动态静态路由
* 2.<router-link> <router-view>
  3.options API:全局this.$router this.$route // this.$router.push()
  * composition API: 3.useRouter useRoute  .  //const router = useRouter() router.replace() 访问路由器实例和当前路由
  *
  * 5路由守卫写下???
  *  和 判断token等的登录权限
  *
  * 3.过一遍TS的工具类型. 整理一下.
  * 守卫是用来干啥的???
  * https://router.vuejs.org/zh/guide/advanced/navigation-failures.html
  * 把这个导航故障 和 router.onError()的作用 和 整个app.onError()联系起来写下. (之前的博客文章)
*
* */
//static router
const constantRoutes:RouteRecordRaw[] = [
  {
    path: '/redirect',
    redirect: 'redirect',
  },
];
const history:RouterHistory = createWebHashHistory();

const router:Router = createRouter({
  history: history,
  routes:constantRoutes,
  //1.动态路由和静态路由的区别???
});

//router-guard
router.beforeEach((to,from)=>{
  progressStart();



  /**
//   2.给router.onError() 如何注册一个错误处理函数????

  问题：
  1.动态路由要拉取role后才能addRoutes？？？？？
  原因？？？

// generate accessible routes map based on roles
  const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

  // dynamically add accessible routes
  router.addRoutes(accessRoutes)

  问题：
   2. next(`/login?redirect=${to.path}`) ???redirect是啥意思？
  //1.这里跳转到登录页面时 -> 为啥还有一个redirect呢？？？
  // next(`/login?redirect=${to.path}`)
  // NProgress.done()
  问题：
  3.[测试一下：不把登录放在白名单内会一直重复跳转么]

  **/
});



router.afterEach((to,from)=>{
  progressEnd();

});

export default router;



