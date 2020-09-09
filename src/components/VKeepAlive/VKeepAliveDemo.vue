<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <!-- <v-keep-alive-a v-if="state === 'A'" />
    <v-keep-alive-b v-if="state === 'B'" />
    <v-keep-alive-c v-if="state === 'C'" /> -->

    <keep-alive>
      <v-keep-alive-a v-if="state === 'A'" />
      <v-keep-alive-b v-if="state === 'B'" />
      <v-keep-alive-c v-if="state === 'C'" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import VKeepAliveA from './VKeepAliveA.vue';
import VKeepAliveB from './VKeepAliveB.vue';
import VKeepAliveC from './VKeepAliveC.vue';

@Component({
  components: {
    VKeepAliveA,
    VKeepAliveB,
    VKeepAliveC
  }
})
class VKeepAliveDemo extends Vue {
  state = 'A';

  changeState(state: string) {
    this.state = state;
  }
}

export default VKeepAliveDemo;
</script>
