<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="info.city" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
class VWatch extends Vue {
  name = 'vue';

  info = {
    city: '南京'
  };

  @Watch('name')
  watchName(val: string, oldVal: string) {
    // 可以正常拿到 oldVal 和 val
    console.log('watch name', val, oldVal);
  }

  @Watch('info', { deep: true })
  watchInfo(val: string, oldVal: string) {
    // 引用类型，拿不到 oldVal，因为指针已指向新的 val 值
    console.log('watch info', val, oldVal);
  }
}

export default VWatch;
</script>
