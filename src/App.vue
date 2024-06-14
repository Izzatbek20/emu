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

export default {
  components: {
    Navbar, Footer
  },
  methods: {
    menuClose() {
      this.$store.commit('miniMenuToggle', false)
      this.$store.commit('menuMobileToggle', false)
    },
    getUser() {
      this.$store.dispatch('me')
    }
  },
  watch: {
    '$route.params.lang'(newLang) {
      if (newLang && newLang !== this.$i18n.locale) {
        this.$i18n.locale = newLang
      }
    }
  },
  mounted() {
    this.getUser()

    // if (to.params.lang !== from.params.lang) {
    //   i18n.global.locale.value = lang;
    // }
  }

}
</script>