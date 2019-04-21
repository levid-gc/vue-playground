<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <!-- <h3>Product: {{ name }}</h3> -->
      <!-- <h3>Product: <span v-text="name"></span></h3> -->
      <!-- <span v-html="fragment"></span> -->
      <!-- <h4 v-if="showElements">{{ price }}</h4> -->
      <!-- <h3 v-if="showElements">Product: {{ name }}</h3> -->
      <!-- <h3 v-if="!showElements">Price: {{ price }}</h3> -->
      <!-- <h3 v-else>Price: {{ price }}</h3> -->
      <!-- <ul class="text-left">
        <li>List item</li>
        <li v-if="showElements">{{ name }}</li>
        <li v-if="showElements">{{ price }}</li>
        <li>Other list item</li>
      </ul> -->

      <!-- <h3 v-if="counter % 3 === 0">Product: {{ name }}</h3>
      <h3 v-else-if="counter % 3 === 1">Price: {{ price }}</h3>
      <h3 v-else>Category: {{ category }}</h3> -->

      <!-- <h3 v-if="counter % 2 === 0">Product: {{ name }}</h3>
      <h3 v-else>Price: {{ price }}</h3> -->

      <!-- <h3 v-show="counter % 2 === 0">Product: {{ name }}</h3>
      <h3 v-show="counter % 2 !== 0">Price: {{ price }}</h3> -->

      <!-- <h3 v-bind:class="elemClasses">Product: {{ name }}</h3> -->

      <h3 v-bind:class="elemClasses" class="display-4">Product: {{ name }}</h3>
    </div>
    <button class="btn btn-primary" v-on:click="handleClick">Press Me</button>
    <button class="btn btn-primary" v-on:click="handleOtherClick">Or Press Me</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App'
})
export default class App extends Vue {
  public name: string = 'Lifejacket';

  // public fragment: string = `<div class="form-group">
  //                             Password
  //                             <input class="form-control" />
  //                            </div>`;

  public price: number = 275;

  // public showElements: boolean = true;

  // public category: string = 'Watersports';

  // public counter: number = 0;

  // public highlight: boolean = false;

  public highlight1: boolean = false;

  public highlight2: boolean = false;

  public get elemClasses(): {} {
    // return this.highlight
    //   ? ['bg-light', 'text-dark', 'display-4']
    //   : ['bg-dark', 'text-light', 'p-2'];
    return {
      'text-dark': this.highlight1,
      'bg-light': this.highlight2
    };
  }

  public handleClick() {
    // this.showElements = !this.showElements;
    // this.counter++;

    this.highlight1 = !this.highlight1;
  }

  public handleOtherClick(): void {
    this.highlight2 = !this.highlight2;
  }
}
</script>

<style>
  h3:first-child {
    background-color: aquamarine;
    padding: 10px;
    color: black;
  }
</style>


