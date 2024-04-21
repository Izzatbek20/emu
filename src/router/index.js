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
import NarxXisoblashView from '@/views/mijozlar/NarxXisoblashView.vue'
import NarxXisoblashShinishView from '@/views/mijozlar/NarxXisoblashShinishView.vue'
import OfislarimizView from '@/views/mijozlar/OfislarimizView.vue'
import KuryerChaqirishTolovView from '@/views/mijozlar/KuryerChaqirishTolovView.vue'
import KuryerChaqirishView from '@/views/mijozlar/KuryerChaqirishView.vue'
import KuryerChaqirishFinishView from '@/views/mijozlar/KuryerChaqirishFinishView.vue'

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
      path: '',
      children: [{
          path: 'xizmat-narxini-xisoblang',
          name: 'xizmatXisoblash',
          component: NarxXisoblashView
        },
        {
          path: 'xizmat-narx-xisobi',
          name: 'xizmatXisoblashFinish',
          component: NarxXisoblashShinishView
        },
        {
          path: 'ofislarimiz',
          name: 'ofislarimiz',
          component: OfislarimizView
        },
        {
          path: 'kuryer-chaqirish',
          name: 'kuryerChaqirish',
          component: KuryerChaqirishView
        },
        {
          path: 'kuryer-chaqirish',
          name: 'kuryerChaqirishTolov',
          component: KuryerChaqirishTolovView
        },
        {
          path: 'kuryer-chaqirish',
          name: 'kuryerChaqirishFinish',
          component: KuryerChaqirishFinishView
        },
      ]
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