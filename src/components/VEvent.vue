<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VEvent extends Vue {
  num = 0;

  increment1(ev: Event) {
    console.log('event', ev); // ev.__proto__.constructor -> MouseEvent;
    console.log(ev.target);
    console.log(ev.currentTarget); // 注意，事件是被注册到当前元素
    this.num += 1;

    // 1. 事件是原生的
    // 2. 事件被挂载到当前元素
  }

  increment2(val: number, ev: Event) {
    console.log(ev.target);
    console.log(ev.currentTarget); // 注意，事件是被注册到当前元素
    this.num += val;
  }
}

export default VEvent;
</script>
