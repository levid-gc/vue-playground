<template>
  <div>
    <p>
      <router-link to="/template">模板（指令、插值）</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
