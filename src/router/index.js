import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/ref',
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('@/views/Ref.vue'),
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('@/views/Reactive.vue'),
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/Store.vue'),
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('@/views/Component.vue'),
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('@/views/Hook.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
