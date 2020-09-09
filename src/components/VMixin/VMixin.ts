import { Vue, Component } from 'vue-property-decorator';

@Component
class VMixin extends Vue {
  [x: string]: any;

  city = '南京';

  mounted() {
    console.log('mixin mounted', this.name);
  }

  showName() {
    console.log(this.name);
  }
}

export default VMixin;
