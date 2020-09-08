<template>
  <div>
    <p class="nav">
      <router-link to="/template">模板（指令、插值）</router-link>
      <router-link to="/computed">Computed</router-link>
      <router-link to="/watch">Watch</router-link>
      <router-link to="/class">class 和 style</router-link>
      <router-link to="/condition">条件渲染</router-link>
      <router-link to="/list">循环渲染</router-link>
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
