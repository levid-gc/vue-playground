<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import event from './event';

@Component
class List extends Vue {
  @Prop({
    type: Array,
    default: () => ([])
  })
  list!: string[];

  created() {
    console.log('list created');
  }

  mounted() {
    console.log('list mounted');

    event.$on('onAddTitle', this.onTitleAddHandler);
  }

  beforeUpdate() {
    console.log('list before update');
  }

  beforeDestroy() {
    // 及时销毁，否则可能造成内存泄漏
    event.$off('onAddTitle', this.onTitleAddHandler);
  }

  updated() {
    console.log('list updated');
  }

  deleteItem(id: string) {
    this.$emit('delete', id);
  }

  onTitleAddHandler(title: string) {
    console.log('on add title', title);
  }
}

export default List;
</script>
