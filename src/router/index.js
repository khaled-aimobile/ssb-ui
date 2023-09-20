import { createWebHistory, createRouter } from "vue-router";
import store from '@/state/store';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth) {
    if (store.state.token) {
      // If token exists, consider the user authenticated
      store.commit('SET_AUTH', true);
    } else {
      // If no token, redirect to login
      return next('/login');
    }
  }

  next();
});

export default router;
