<template>
  <div>
    <v-slot :url="website.url">
      {{ website.title }}
    </v-slot>

    <v-scoped-slot :url="website.url">
      <template v-slot="data">
        {{ `${data.slotData.title} ${data.slotData.subTitle}` }}
      </template>
    </v-scoped-slot>

    <v-named-slot>
      <!-- 缩写形式 -->
      <template #header>
        <h1>将插入 header slot 中</h1>
      </template>

      <p>将插入 main slot 中，即未命名的 slot</p>

      <template v-slot:footer>
        <p>将插入到 footer slot 中</p>
      </template>
    </v-named-slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import VSlot from './VSlot.vue';
import VScopedSlot from './VScopedSlot.vue';
import VNamedSlot from './VNamedSlot.vue';

@Component({
  components: {
    VSlot,
    VScopedSlot,
    VNamedSlot
  }
})
class VSlotDemo extends Vue {
  website = {
    url: 'http://www.imooc.com',
    title: 'imooc'
  };
}

export default VSlotDemo;
</script>
