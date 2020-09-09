import VModelDemo from './components/VModel/VModelDemo.vue';
import VNextTick from './components/VNextTick.vue';
import VSlotDemo from './components/VSlot/VSlotDemo.vue';
import VDynamicComponentDemo from './components/VDynamicComponent/VDynamicComponentDemo.vue';
import VAsyncComponentDemo from './components/VAsyncComponent/VAsyncComponentDemo.vue';
import VKeepAliveDemo from './components/VKeepAlive/VKeepAliveDemo.vue';

const routes = [
  { path: '/v-model', component: VModelDemo },
  { path: '/next-tick', component: VNextTick },
  { path: '/slot', component: VSlotDemo },
  { path: '/dynamic-component', component: VDynamicComponentDemo },
  { path: '/async-component', component: VAsyncComponentDemo },
  { path: '/keep-alive', component: VKeepAliveDemo },
];

export default routes;
