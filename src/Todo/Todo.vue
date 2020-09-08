<template>
  <div>
    <Input @add="addHandler" />
    <list :list="list" @delete="deleteHandler" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Input from './Input.vue';
import List from './List.vue';

@Component({
  components: {
    Input,
    List
  }
})
class Todo extends Vue {
  list = [
    { id: 'id-1', title: '标题1' },
    { id: 'id-2', title: '标题2' }
  ];

  created() {
    console.log('Todo created');
  }

  mounted() {
    console.log('Todo mounted');
  }

  beforeUpdate() {
    console.log('Todo before update');
  }

  updated() {
    console.log('Todo updated');
  }

  addHandler(title: string) {
    this.list.push({
      id: `id-${Date.now()}`,
      title
    });
  }

  deleteHandler(id: string) {
    this.list = this.list.filter(item => item.id !== id);
  }
}

export default Todo;
</script>
