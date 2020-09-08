<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="addTitle">add</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import event from './event';

@Component
class Input extends Vue {
  title = '';

  addTitle() {
    // 调用父组件的事件
    this.$emit('add', this.title);

    // 调用自定义事件
    event.$emit('onAddTitle', this.title);

    this.title = '';
  }
}

export default Input;
</script>
