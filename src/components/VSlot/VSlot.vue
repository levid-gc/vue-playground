<template>
  <a :href="url">
    <slot>
      默认内容，即父组件没设置内容时，这里显示
    </slot>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class VSlot extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  url!: string;
}

export default VSlot;
</script>
