<template>
  <div>
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>

    <button @click="addItem">添加一项</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VNextTick extends Vue {
  list = ['a', 'b', 'c'];

  addItem() {
    this.list.push(`${Date.now()}`);
    this.list.push(`${Date.now()}`);
    this.list.push(`${Date.now()}`);

    // // 获取 DOM 元素
    // const ulElem = this.$refs.ul1 as Element;
    // console.log(ulElem.childNodes.length);

    // 1. 异步渲染，$nextTick 等待 DOM 渲染完再回调
    // 2. 页面渲染时会将 data 的修改做整合，多次 data 修改只会渲染一次
    this.$nextTick(() => {
      // 获取 DOM 元素
      const ulElem = this.$refs.ul1 as Element;
      console.log(ulElem.childNodes.length);
    });
  }
}

export default VNextTick;
</script>
