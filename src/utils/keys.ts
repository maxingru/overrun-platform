//提供project的注入名Symbol;

const myProvideKey1:unique symbol = Symbol.for('provide_key1');
export { myProvideKey1 };


// //使用时：
// import {myProvideKey1} from './keys';
// import {provide} from 'vue';
// provide(myProvideKey1, "val");
//
//
// //注入方
//
// import {inject} from 'vue'
// import {myProvideKey1} from './keys';
// const injected = inject(myProvideKey1);

