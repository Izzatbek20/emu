<template>
  <!-- Navbar -->
  <Navbar />

  <div @click="menuClose" class="mt-40 max-xl:mt-[80px]">
    <!-- Main -->
    <div class="container-rs">
      <RouterView />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue';
import { setItem } from './helpers/rwLocalStorage';
import { getAccess, getRefresh } from './services/firebase';

export default {
  components: {
    Navbar, Footer
  },
  methods: {
    menuClose() {
      this.$store.commit('miniMenuToggle', false)
      this.$store.commit('menuMobileToggle', false)
    },
    async initFireStoreToken() {
      // Firebaseda browser localStorage-ga refersh va access tokenlari yozib olamiz
      const act = await getAccess()
      const rft = await getRefresh()
      
      setItem('act', act)
      setItem('rft', rft)
    }
  },
  mounted() {
    this.initFireStoreToken()
  }

}
</script>