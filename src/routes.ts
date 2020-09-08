import VTemplate from './components/VTemplate.vue';
import VComputed from './components/VComputed.vue';
import VWatch from './components/VWatch.vue';
import VClass from './components/VClass.vue';

const routes = [
  { path: '/template', component: VTemplate },
  { path: '/computed', component: VComputed },
  { path: '/watch', component: VWatch },
  { path: '/class', component: VClass }
];

export default routes;
