<template>
  <div>
    <button @click="hidden = false">显示表单</button>
    <v-form v-if="!hidden" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    VForm: () => import('./VForm.vue')
  }
})
class VAsyncComponentDemo extends Vue {
  hidden = true;
}

export default VAsyncComponentDemo;
</script>
