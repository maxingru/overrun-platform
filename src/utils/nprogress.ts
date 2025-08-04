/**
 * @date:2025/7/10
 * @description: 路由导航间的进度条
 * */
import NProgress from 'nprogress';
NProgress.configure({
  minimum:0.08,
  easing:'ease',
  speed:500,
  trickleSpeed:200,
  showSpinner: true,
  parent:'body',
})
const progressStart:()=>void = ()=>{
  NProgress.start();
}
const progressEnd:()=>void = ()=>{
  NProgress.done();
}
export {progressStart,progressEnd};























