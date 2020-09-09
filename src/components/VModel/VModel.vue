<template>
  <!-- 例如：颜色选择器 -->
  <input type="text" :value="text" @input="$emit('change', $event.target.value)">
</template>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator';

@Component
class VModel extends Vue {
  @Model('change', {
    type: String,
    default: ''
  })
  text!: string;
}

export default VModel;
</script>
