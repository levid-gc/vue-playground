<template>
  <div>C</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VKeepAliveC extends Vue {
  mounted() {
    console.log('C mounted');
  }

  destroyed() {
    console.log('C destroyed');
  }
}

export default VKeepAliveC;
</script>
