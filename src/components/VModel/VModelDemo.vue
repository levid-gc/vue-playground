<template>
  <div>
    <p>{{ name }}</p>
    <VModel v-model="name" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import VModel from './VModel.vue';

@Component({
  components: {
    VModel
  }
})
class VModelDemo extends Vue {
  name = 'Vue';
}

export default VModelDemo;
</script>
