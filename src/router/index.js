import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import KompaniyaView from '@/views/biz-haqimizda/KompaniyaView.vue'
import RaxbariyatView from '@/views/biz-haqimizda/RaxbariyatView.vue'
import HududView from '@/views/biz-haqimizda/HududView.vue'
import YangiliklarView from '@/views/biz-haqimizda/YangiliklarView.vue'
import YangilikView from '@/views/biz-haqimizda/YangilikView.vue'
import FikirlarView from '@/views/biz-haqimizda/FikirlarView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '',
      children: [{
          path: 'biz-haqimizda',
          name: 'bizHaqimizda',
          component: KompaniyaView
        },
        {
          path: 'raxbariyat',
          name: 'raxbariyat',
          component: RaxbariyatView
        },
        {
          path: 'hududiy',
          name: 'hududiy',
          component: HududView
        },
        {
          path: 'yangiliklar',
          name: 'yangiliklar',
          component: YangiliklarView,
        },
        {
          path: 'yangiliklar/:id',
          name: 'yangilik',
          component: YangilikView,
        },
        {
          path: 'fikirlar',
          name: 'fikirlar',
          component: FikirlarView
        }
      ]
    },
    {
      path: '/mijozlarga',
      name: 'mijozlarga',
      component: KompaniyaView
    },
    {
      path: '/xizmatlar',
      name: 'xizmatlar',
      component: KompaniyaView
    },
    {
      path: '/vakansiya',
      name: 'vakansiya',
      component: KompaniyaView
    },
    {
      path: '/aloqa',
      name: 'aloqa',
      component: KompaniyaView
    },
  ]
})

export default router