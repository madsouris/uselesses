import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainLayout from '../views/Layout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/page/watch',
  },
  {
    path: '/page/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/page/watch',
      },
      {
        path: 'watch',
        component: () => import('@/views/WatchPage.vue'),
      },
      {
        path: 'shoes',
        component: () => import('@/views/ShoesPage.vue'),
      },
      {
        path: 'games',
        component: () => import('@/views/GamesPage.vue'),
      },
    ],
  },
  {
    path: '/contact',
    name: 'Contac',
    component: () => import('@/views/pages/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
