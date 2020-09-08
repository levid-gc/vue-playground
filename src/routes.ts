import VTemplate from './components/VTemplate.vue';
import VComputed from './components/VComputed.vue';
import VWatch from './components/VWatch.vue';

const routes = [
  { path: '/template', component: VTemplate },
  { path: '/computed', component: VComputed },
  { path: '/watch', component: VWatch }
];

export default routes;
