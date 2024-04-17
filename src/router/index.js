import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/biz-haqimizda',
      name: 'bizHaqimizda',
      component: AboutView
    },
    {
      path: '/mijozlarga',
      name: 'mijozlarga',
      component: AboutView
    },
    {
      path: '/xizmatlar',
      name: 'xizmatlar',
      component: AboutView
    },
    {
      path: '/vakansiya',
      name: 'vakansiya',
      component: AboutView
    },
    {
      path: '/aloqa',
      name: 'aloqa',
      component: AboutView
    },
  ]
})

export default router