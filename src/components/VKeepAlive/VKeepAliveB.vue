<template>
  <div>B</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VKeepAliveB extends Vue {
  mounted() {
    console.log('B mounted');
  }

  destroyed() {
    console.log('B destroyed');
  }
}

export default VKeepAliveB;
</script>
