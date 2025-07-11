<template>
  <div>
    <span>generic component</span>
  </div>
</template>
<!--泛型组件-->
<script setup lang="ts" generic="T extends string|number">
import {ref} from  'vue'
//T：当前泛型组件的类型T可能被实例化为更具体的类型。
//T：可能是22类型等。这里只把hello可能不符合类型T
const content = ref<T|null>(null);

//方法
const open = (newC:T) =>{
  return (content.value = newC)
}
defineExpose({
  open
})



</script>
<style scoped>

</style>


