import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: () => import('@/views/layouts/BaseLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/team',
          name: 'team',
          component: () => import('@/views/TeamView.vue'),
        },
        {
          path: '/team/:id',
          name: 'team-detail',
          props: (route) => {
            return { id: route.params.id }
          },
          component: () => import('@/views/TeamDetailView.vue'),
        },
      ],
    },
  ],
})

export default router
