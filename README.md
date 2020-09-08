# Vue 基本使用

## 模板（插值，指令）

- 插值、表达式
- 指令、动态属性
- v-html：会有 XSS 风险，会覆盖子组件

## computed 和 watch

- computed 有缓存，data 不变则不会重新计算
- watch 设置 `deep` 进行深度监听
- watch 监听引用类型，拿不到 `oldVal`

## class 和 style

- 使用动态属性
- 使用驼峰式写法

## 条件渲染

- `v-if`, `v-else` 的用法，可使用变量，也可以使用 `===` 表达式
- `v-if` 和 `v-show` 的区别
- `v-if` 和 `v-show` 的使用场景

## 循环（列表）渲染

- 如何遍历对象？——也可以使用 `v-for`
- `key` 的重要性。`key` 不能乱写（如 random 或者 index）
- `v-for` 和 `v-if` 不要一起使用，`v-for` 的优先级高于 `v-if`

- 事件
- 表单
