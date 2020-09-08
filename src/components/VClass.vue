<template>
  <div>
    <p :class="{ bold: isBold, yellow: isYellow }">使用 class</p>
    <p :class="[bold, yellow]">使用 class（数组）</p>
    <p :style="styleData">使用 style</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VClass extends Vue {
  isBold = true;

  isYellow = true;

  bold = 'bold';

  yellow = 'yellow';

  styleData = {
    fontSize: '40px',
    color: 'red',
    backgroundColor: '#ccc'
  };
}

export default VClass;
</script>

<style scoped>
.bold {
  font-weight: 700;
}

.yellow {
  color: yellow;
}
</style>
