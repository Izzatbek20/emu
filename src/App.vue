<template>
  <!-- Navbar -->
  <Navbar />

  <!-- Main -->
  <div class="container-rs">
    <RouterView />
  </div>

  <!-- Footer -->
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Navbar, Footer
  }
}
</script>