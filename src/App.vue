<template>
  <div>
    <p class="nav">
      <router-link to="/v-model">v-model</router-link>
      <router-link to="/next-tick">$nextTick</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style scoped>
.nav a {
  display: inline-block;
  margin-right: 20px;
}
</style>
