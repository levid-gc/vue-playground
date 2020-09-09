# Vue 高级特性

## 自定义 `v-model`

## `$nextTick`

- Vue 是异步渲染的
- data 改变之后，DOM 不会立刻渲染
- `$nextTick` 会在 DOM 渲染之后被触发，以获取最新 DOM 节点

## slot

- 基本使用
- 作用域插槽
- 具名插槽

## 动态组件

- `:is="component-name"` 用法
- 需要根据数据，动态渲染的场景。即组件类型不确定。
- 比如新闻文章页，不确定多少个段落、视频、图片。

## 异步组件

- `import()` 函数
- 按需加载，异步加载大组件

## keep-alive

## mixin
