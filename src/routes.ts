import VTemplate from './components/VTemplate.vue';
import VComputed from './components/VComputed.vue';
import VWatch from './components/VWatch.vue';
import VClass from './components/VClass.vue';
import VCondition from './components/VCondition.vue';
import VList from './components/VList.vue';

const routes = [
  { path: '/template', component: VTemplate },
  { path: '/computed', component: VComputed },
  { path: '/watch', component: VWatch },
  { path: '/class', component: VClass },
  { path: '/condition', component: VCondition },
  { path: '/list', component: VList }
];

export default routes;
