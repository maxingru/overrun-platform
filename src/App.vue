<template>
  <header>
    <!--<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />-->
    <!--<div class="wrapper">-->
    <!--  <HelloWorld msg="You did it!" />-->
    <!--</div>-->
  </header>
  <main>
    <!--<TheWelcome  ref="wel"/>-->
    <div>
    <!--  子组件-->
  <!--<span ref="span">测试测试</span>-->
      <!--<FooA ref="fooRef"/>-->
      <!--<component :is="Math.random()>0.5?FooA:BarA" ref="comp"/>-->
      <!--<MyGenericModal ref="modal"/>-->




    </div>
</main>
</template>
<!--泛型组件-->




<script setup lang="ts">
import {ref,onMounted} from 'vue';

//这里默认就是beforeCreate /created

onMounted(()=>{
    console.log("环境变量：",JSON.parse(import.meta.env.VITE_GLOBAL_CONFIG));
})





// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import FooA from '@/views/demo/FooA.vue'
// import BarA from '@/views/demo/BarA.vue'
// import MyGenericModal from '@/views/demo/MyGenericModal.vue'
// import type {ComponentExposed} from 'vue-component-type-helpers'

// import {useTemplateRef,onMounted} from "vue";
//
// //为组件模板的引用添加类型
// // type compType = InstanceType<typeof FooA> | InstanceType<typeof BarA>
// // const compRef = useTemplateRef<compType>('comp');
//
//
//
// //当使用ref引用的组件为泛型组件时，
// //不能使用InstanceType -> 需要使用MyGenericModal;
// //泛型组件的类型
// type GeneType = ComponentExposed<typeof MyGenericModal>
// //
// //泛型组件的实例的类型
// const modal = useTemplateRef<GeneType>('modal');
//
//
// onMounted(()=>{
//   // console.log(modal.value?.open('hello'));
//   console.log(modal.value?.open('hello'));
//   //1.modal.value是一个泛型组件的实例。
// })

// import {ElMessage} from 'element-plus';
// const openMsg = ()=>{
//   ElMessage({
//     type:'success',
//     message:"测试",
//     duration:7000,
//     showClose:true,
//     grouping:true,
//     plain:true,
//   })
// }




</script>

<style scoped>
header {
  line-height: 1.5;
}
.logo {
  display: block;

  margin: 0 auto 2rem;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
