import VModelDemo from './components/VModel/VModelDemo.vue';
import VNextTick from './components/VNextTick.vue';
import VSlotDemo from './components/VSlot/VSlotDemo.vue';
import VDynamicComponentDemo from './components/VDynamicComponent/VDynamicComponentDemo.vue';

const routes = [
  { path: '/v-model', component: VModelDemo },
  { path: '/next-tick', component: VNextTick },
  { path: '/slot', component: VSlotDemo },
  { path: '/dynamic-component', component: VDynamicComponentDemo },
];

export default routes;
