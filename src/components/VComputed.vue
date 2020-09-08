<template>
  <div>
    <p>num {{ num }}</p>
    <p>double1 {{ double1 }}</p>
    <input type="text" v-model="double2" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class VComputed extends Vue {
  num = 20;

  get double1() {
    return this.num * 2;
  }

  get double2() {
    return this.num * 2;
  }

  set double2(val) {
    this.num = val / 2;
  }
}

export default VComputed;
</script>
