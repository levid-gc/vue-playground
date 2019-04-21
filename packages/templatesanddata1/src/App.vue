<template>
  <div class="bg-primary text-white text-center m-2 p-3">
    <h3>Products: {{ name | reverse | capitalize }}</h3>
    <h3>Price: {{ lowTotalPrice | currency(3) }} (Low Rate)</h3>
    <h3>Price: {{ highTotalPrice | currency }} (High Rate)</h3>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'App',
  filters: {
    currency: (value: number, places?: number): string => {
      return new Intl.NumberFormat('en-US',
        {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: places || 2,
          maximumFractionDigits: places || 2
        }
      ).format(value);
    },
    capitalize: (value: string): string => {
      return value[0].toUpperCase() + value.slice(1);
    },
    reverse: (value: string): string => {
      return value.split('').reverse().join('');
    }
  }
})
export default class App extends Vue {
  public name: string = 'Lifejacket';

  public price: number = 48.95;

  public lowTaxRate: number = 12;

  public highTaxRate: number = 20;

  public get lowTotalPrice(): number {
    return this._getTotalPrice(this.lowTaxRate);
  }

  public get highTotalPrice(): number {
    return this._getTotalPrice(this.highTaxRate);
  }

  private _getTotalPrice(taxRate: number): number {
    return this.price + (this.price * (taxRate / 100));
  }
}
</script>
