<template>
  <div>
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>Other</p>

    <p v-show="type === 'a'">A by v-show</p>
    <p v-show="type === 'b'">B by v-show</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VCondition extends Vue {
  type = 'a';
}

export default VCondition;
</script>

<style>

</style>
