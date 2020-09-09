/* eslint-disable class-methods-use-this */
<template>
  <div>A</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VKeepAliveA extends Vue {
  mounted() {
    console.log('A mounted');
  }

  destroyed() {
    console.log('A destroyed');
  }
}

export default VKeepAliveA;
</script>
