import { createRouter, createWebHistory } from 'vue-router';
 import Home from './views/Home.vue'; // Импортируй твои компоненты
// import About from './views/About.vue'; // Импортируй другие компоненты

const routes = [
   { path: '/', component: Home },
  // { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
