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
import { Client } from 'amocrm-js'

export default {
  components: {
    Navbar, Footer
  },
  methods: {
    menuClose() {
      this.$store.commit('miniMenuToggle', false)
      this.$store.commit('menuMobileToggle', false)
    },
  },
  mounted() {
    // const auth = this.$store.dispatch('getAccessToken', {
    //   "client_id": "da4bb316-3d3a-4d73-9f9b-b45a5025678d",
    //   "client_secret": "0FPzLItmv3JadUJPjDw8LvSgPp10VaGoddpxm0OQS1moJWZ9QlTL6sV20hZ4oqow",
    //   "grant_type": "authorization_code",
    //   "code": "def50200ebd73fda91fa3886a0905757ae1101373ea90a6930837311ff146ef4668bca589012450fbaeab693d83fbd404b38a927f7346c21f64e6eed0e9e04f0822ff87ef9ae007646b5fb7e6542eb2fd66021b1514dfc5381cfa156a9da824ddea1582e09866966f3c8fc9537ea70dadc7cdb401f70de515c3588bf9cbf964657285fe3c11e71361a8a92b9c6bae333fd731576dfb2d6f7373c5e910f5aba2e7c66ccbecb50b2fd79ced928e4e43b569c505d76b743959062300d111c3d84586cafcc3e936ba0b173eab5e58c72a7c2c7ad4b6be4170f5878f45e5eed1804d640006d0183ef8f1d768f14c6fc58a2e228ac380135c0664713500d7970321ec7fbd081310a9c5f60613963a5e7f4e5692706bf1fbcca233e2515a45d53beacf274e8fe36e2bfa123b9bd887f6f432cd9b2b469ed792152c2e0f2c4179908d4fe45183a223a48804e34c5d6549e111ba125f48ca63cfbe2da893cf772ba5eb917aada1d1a55192232b2d5f51429a3b1cebadd580dd8baa7ad33ada3f01b4a32a327b3bba979ab522d87985ab950d13225a8e07258fb17d98b73c619f1211a06bbe89fa373911307ef4c4e39a496d48cbc03583c2f2cfd4a90bf2649822eaffe95c585302cb9742940279e43ec9f5102abc24b4a98de2bb214a4fda9b3cae4b6c3a3bc0c6b6030cfb5a6d6640fca31eba445d059437e074f18c71ab935",
    //   "redirect_uri": "https://1740-213-230-118-185.ngrok-free.app/"
    // })

    const client = new Client({
      domain: 'izzatbekmajidov2006', 
      auth: {
        client_id: 'da4bb316-3d3a-4d73-9f9b-b45a5025678d', // ID интеграции
        client_secret: '0FPzLItmv3JadUJPjDw8LvSgPp10VaGoddpxm0OQS1moJWZ9QlTL6sV20hZ4oqow', // Секретный ключ
        redirect_uri: 'https://1740-213-230-118-185.ngrok-free.app', // Ссылка для перенаправления
        code: 'def502003de2a6949550a3f998909ad78f8b31cd7f7aadab78797fdc6e4b3df720ee26155cb02512fe41f0048df6645f35d0e05edc20f8872e45dd6102dfb66efea1ace332fc1374113b99c790ad6e17955cfb1ff438c26637efd549c564554a4532fffdcaac6dc23346722b7c5ef07f4a2d2ef0d2d4224c4f6afed760227bb432fa2bfdee282f3df6c1f249fe7d7a5504d0b8fc583784c68602629fde8d7624970f3e6ea405a5b1566de258616e8e66d319408d30424f4da33be4d2e490503f0e99db6328760e45d00b35f86ed08c9e1e80d40dc4e64592237a143105a2eba0a21b5273eea86d0d91499e1375c44efbc112089e9cbb58c777f10656454acc94f66134074f464534b56d24ea299c57065b6a91b1233b38be54ade5e999520b225005b031631bb05cb7442e9c955ca62ec8dbdbe621747c098a015059b3691a966cda024150bfb63808bb8fdde491d0bc4db76b0b4ce6cea59de8ac85e830985e6f5322c6ea7f4a18b9f0f1488e3310414e3c23171d9e71e9aa585bc57380742feee95e9a3d639bca8837f92813f795574b16e2a8a6a8b36ca6736c55f4b959496544f7a87c171ffff2b6b266a074484d76f12fe8128e9da46f2959bcc7f1de4e87c38b0294701ffa7822361dac1209eb03d45cfcd7ec84b0cbd8310fa43abeb3a0d1783a80d1c33b93e6a1029bacb54428337bad47ea7ea40270275dd93b', // Код для упрощённой авторизации, необязательный
      },
    });


    console.log(client);
  }
}
</script>