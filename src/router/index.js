import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'register',
    path: '/register',
    component: () => import('@/view/RegisterPage.vue'),
  },
  { name: 'login', path: '/', component: () => import('@/view/LoginPage.vue') },
  {
    name: 'items',
    path: '/items',
    component: () => import('@/view/ItemsPage.vue'),
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: () => import('@/view/CheckoutPage.vue'),
  },
  {
    name: 'item',
    path: '/items/:id',
    component: () => import('@/view/ItemPage.vue'),
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('@/view/ProfilePage.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const publicPages = ['/', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  if (loggedIn && (to.path === '/' || to.path === '/register')) {
    return next('/items');
  }

  next();
});
