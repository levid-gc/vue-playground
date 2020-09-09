<template>
  <a :href="url">
    <slot :slotData="website">
      <!-- 默认值显示 subTitle -->
      {{ website.subTitle }}
    </slot>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class VScopedSlot extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  url!: string;

  website = {
    url: 'http://wangEditor.com',
    title: 'wangEditor',
    subTitle: '轻量级富文本编辑器'
  };
}

export default VScopedSlot;
</script>
