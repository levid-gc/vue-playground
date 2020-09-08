<template>
  <div>
    <p>
      <router-link to="/template">模板（指令、插值）</router-link>
      <router-link to="/computed">Computed</router-link>
      <router-link to="/watch">Watch</router-link>
      <router-link to="/class">Class</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
