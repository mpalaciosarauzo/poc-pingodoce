import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import store from '../store';

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const routeRequiresAuth = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  if (
    routeRequiresAuth &&
    !store.state.customer
  ) {
    next({ name: 'login' });
  } else {
    next();
  }
});
export default router;
