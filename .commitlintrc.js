// package.json中定了type:'module' -> 只能用ES6 module
//或者本文件夹改为：.commitlintrc.cjs
// module.exports = {
//   extends: ['@commitlint/config-conventional']
// }

export default {
  extends: ['@commitlint/config-conventional'],
}
