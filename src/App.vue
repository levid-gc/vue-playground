<template>
  <div>
    <todo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Todo from './Todo';

@Component({
  components: {
    Todo
  }
})
export default class App extends Vue {}
</script>
