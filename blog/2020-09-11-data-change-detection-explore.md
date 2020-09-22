---
slug: data-change-detection-explore
title: 数据变化侦测探秘
author: Guan Chao
# author_title: 前端工程师
author_url: https://github.com/levid-gc
author_image_url: https://avatars1.githubusercontent.com/u/6498582?s=60&v=4
tags: [Object.defineProperty, Proxy]
---

Vue 是采用的是数据驱动视图的方式。如果数据发生变化，视图会随之更新。那么要想知道数据何时发生变化至关重要。

JavaScript 中对 `Object` 提供了一个名为 `defineProperty` 的方法，其实顾名思义就是给一个指定的对象定义属性用的。说到这里，估计不少前端开发者有点疑惑，什么叫做属性呢？

```javascript
function defineReactive(target, key, val) {
  // val 在这里会形成闭包

  Object.defineProperty(target, key, {
    get: function () {
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
    }
  })
}
```

