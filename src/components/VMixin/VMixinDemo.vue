<template>
  <div>
    <p>{{ name }} {{ major }} {{ city }}</p>
    <button @click="showName">显示名称</button>
  </div>
</template>

<script>
import { Component, Mixins } from 'vue-property-decorator';

import VMixin from './VMixin';

@Component
class VMixinDemo extends Mixins(VMixin) {
  name = 'Vue';

  major = 'frontend';

  mounted() {
    console.log('component mounted', this.name);
  }
}

export default VMixinDemo;
</script>
