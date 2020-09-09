<template>
  <div>
    <component v-for="(section, index) in article" :key="index" :is="section.type">
      {{ section.text }}
    </component>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
class VDynamicComponentDemo extends Vue {
  article = [
    { type: 'h3', text: 'this is title' },
    { type: 'p', text: 'this is paragraph 1' },
    { type: 'p', text: 'this is paragraph 2' }
  ];
}

export default VDynamicComponentDemo;
</script>
