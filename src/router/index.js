import { createRouter, createWebHistory } from 'vue-router';
import { privateRoutes, publicRoutes } from './routes';

const routes = [...publicRoutes, ...privateRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
