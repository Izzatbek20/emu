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
import EngKopBeriladiganSavollar from '@/views/mijozlar/EngKopBeriladiganSavollar.vue'
import UmumiyShartlarView from '@/views/mijozlar/UmumiyShartlarView.vue'
import UmumiyShartlarKorishView from '@/views/mijozlar/UmumiyShartlarKorishView.vue'
import KuryerXizmatiView from '@/views/xizmatlar/KuryerXizmatiView.vue'
import XalqaroKuryerlikXizmatiView from '@/views/xizmatlar/XalqaroKuryerlikXizmatiView.vue'
import UstamaTolovliView from '@/views/xizmatlar/UstamaTolovliView.vue'
import FullfilmentView from '@/views/xizmatlar/FullfilmentView.vue'
import IndividualView from '@/views/xizmatlar/IndividualView.vue'
import KargoView from '@/views/xizmatlar/KargoView.vue'
import VakansiyaView from '@/views/vakansiya/VakansiyaView.vue'
import AloqaView from '@/views/aloqa/AloqaView.vue'
import ProfilView from '@/views/profil/ProfilView.vue'
import QabulView from '@/views/profil/QabulView.vue'
import JonatilganView from '@/views/profil/JonatilganView.vue'
import TrakingView from '@/views/profil/TrakingView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import SmsView from '@/views/auth/SmsView.vue'
import Register2View from '@/views/auth/Register2View.vue'
import ParolChangeView from '@/views/auth/ParolChangeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/:lang?',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:lang?/kompaniya',
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
      path: '/:lang?/mijoz',
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
        {
          path: 'eng-kop-beriladigan-savollar',
          name: 'savollar',
          component: EngKopBeriladiganSavollar
        },
        {
          path: 'shartnoma-va-umumiy-shartlar',
          name: 'umumiyShartlar',
          component: UmumiyShartlarView
        },
        {
          path: 'shartnoma-va-umumiy-shartlar-sertifikat',
          name: 'umumiyShartlarKorish',
          component: UmumiyShartlarKorishView
        },
      ]
    },
    {
      path: '/:lang?/xizmatlar',
      children: [{
          path: 'kuryer-xizmati',
          name: 'kuryerXizmati',
          component: KuryerXizmatiView
        },
        {
          path: 'xalqaro-kuryerlik-xizmatlar',
          name: 'xalqaroKuryerlikXizmati',
          component: XalqaroKuryerlikXizmatiView
        },
        {
          path: 'ustama-tolovli-yetkazib-berish',
          name: 'ustamaTolovli',
          component: UstamaTolovliView
        },
        {
          path: 'fullfilment-xizmat',
          name: 'fullfilmentView',
          component: FullfilmentView
        },
        {
          path: 'individual',
          name: 'individual',
          component: IndividualView
        },
        {
          path: 'kargo',
          name: 'kargo',
          component: KargoView
        },
      ]
    },
    {
      path: '/:lang?/vakansiya',
      name: 'vakansiya',
      component: VakansiyaView
    },
    {
      path: '/:lang?/vakansiya/:id',
      name: 'vakansiyaId',
      component: VakansiyaView
    },
    {
      path: '/:lang?/aloqa',
      name: 'aloqa',
      component: AloqaView
    },
    {
      path: '/:lang?/profil',
      children: [{
        path: 'user',
        name: 'profil',
        component: ProfilView
      }, {
        path: 'qabul',
        name: 'qabul',
        component: QabulView,
      }, {
        path: 'jonatilgan',
        name: 'jonatilgan',
        component: JonatilganView
      }, {
        path: 'traking/:id',
        name: 'traking',
        component: TrakingView
      }],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:lang?/auth',
      children: [{
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        },
        {
          path: 'sms',
          name: 'sms',
          component: SmsView
        },
        {
          path: 'register-2',
          name: 'register2',
          component: Register2View
        },
        {
          path: 'parol',
          name: 'parolChange',
          component: ParolChangeView
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/:pathMatch(.*)',
      name: 'bad-not-found',
      component: NotFoundView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Agar saqlangan pozitsiya mavjud bo'lsa, uni qaytaradi.
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
})

// Middleware funksiyasi
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Bu yerda autentifikatsiyani tekshiramiz
    if (!localStorage.getItem('access_token')) {
      // Agar foydalanuvchi autentifikatsiyadan o'tmagan bo'lsa, login sahifasiga yo'naltiramiz
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next(); // Aks holda, davom etamiz
    }
  } else {
    next(); // Agar autentifikatsiya talab qilinmasa, davom etamiz
  }
});


export default router