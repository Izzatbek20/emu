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
import axios from 'axios';
// import { Client } from 'amocrm-js';

export default {
  components: {
    Navbar, Footer
  },
  methods: {
    menuClose() {
      this.$store.commit('miniMenuToggle', false)
      this.$store.commit('menuMobileToggle', false)
    },
    async get() {
      axios.get('https://izzatbekmajidov2006.amocrm.ru/api/v4/leads', {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc5YTU1MWUxMjM2MjZhYTdkYWZkMjRmMGM2NDhmNWE0NDI2ZDc1N2RhZWFhZTY2YTEyMmRjNjBjMjBiZGUxZDkwN2IxZGRiYjA1YzA1NTE3In0.eyJhdWQiOiJkYTRiYjMxNi0zZDNhLTRkNzMtOWY5Yi1iNDVhNTAyNTY3OGQiLCJqdGkiOiI3OWE1NTFlMTIzNjI2YWE3ZGFmZDI0ZjBjNjQ4ZjVhNDQyNmQ3NTdkYWVhYWU2NmExMjJkYzYwYzIwYmRlMWQ5MDdiMWRkYmIwNWMwNTUxNyIsImlhdCI6MTcxNTM0NjU5MywibmJmIjoxNzE1MzQ2NTkzLCJleHAiOjE3MTY2ODE2MDAsInN1YiI6IjExMDAwMDY2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzI4MzkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOWM4Y2NhMmMtYjcyZC00ODdjLWIzMTQtNWUxODVjN2JkYjhkIn0.F5ab6M09P5CWtq3KbqyCxGpANh-30zF8NMUXujNnk6lGB9ULRz0BjEAPCP61J0GuIb1E7xJXXExrZ5wAGhTkWshJCUAJzkoYI35GhIFXuVefQuLz13uWzVUB4f-yJEBipfo8OPCWpnMEE6jVCdsYB7F0Ah1QFUJGUj0tQzQfXCW9bVY--dP8YYQqflCHbadndq7fxpnfpNO_QkVCZAuyDLV2q3fvX8o7seHuhbmVVhKCcbkl3pyeJbTyWdPrsWzSChhkjR2nzMVXNbIGh2fajqdeBj0AL2Z3BK_mslskfLS4PdE5n_HDWz5VvPqRPitWk-en6Um9_oQLtTr2RFR-7A`
        }
      })
        .then(response => {
          // Muvaffaqiyatli javobni qayta ishlang
          console.log(response.data);
        })
        .catch(error => {
          // Xatolikni qayta ishlang
          console.error('Xatolik:', error);
        });
    }
  },
  mounted() {
    this.get()
    // const auth = this.$store.dispatch('getAccessToken', {
    //   "client_id": "da4bb316-3d3a-4d73-9f9b-b45a5025678d",
    //   "client_secret": "0FPzLItmv3JadUJPjDw8LvSgPp10VaGoddpxm0OQS1moJWZ9QlTL6sV20hZ4oqow",
    //   "grant_type": "authorization_code",
    //   "code": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyY2Y2YTA4MDY3NGVjMDNmODQxY2E3MDNlNWQ2YTVhODlmYTgwNjkzODQyZWQzNjkxYTNjMmEwYzA2NjRjYzBhOGI1YjViYmI5MjRhYmJmIn0.eyJhdWQiOiJkYTRiYjMxNi0zZDNhLTRkNzMtOWY5Yi1iNDVhNTAyNTY3OGQiLCJqdGkiOiJlMmNmNmEwODA2NzRlYzAzZjg0MWNhNzAzZTVkNmE1YTg5ZmE4MDY5Mzg0MmVkMzY5MWEzYzJhMGMwNjY0Y2MwYThiNWI1YmJiOTI0YWJiZiIsImlhdCI6MTcxNTM0Mzk5MiwibmJmIjoxNzE1MzQzOTkyLCJleHAiOjE3MTU0MzAzOTIsInN1YiI6IjExMDAwMDY2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzI4MzkwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOGY2MjM5YzItMjQ2NS00ODNhLWIyOGMtN2M5NTIwNGEyNDAzIn0.UzXr_H9KYlqGrAJJkjTs8IVYqxHBSeNMwl5zYTsbjVpgnsKXuYLmFD3BLBYG9FRt83I2J2nd67V3hcc8OpCemjfbVdw0n3F7U5oI_in85oK8kU5AfXFMH07RQiJB7zbyjT6jwmRVbFbenoyGkT3n6NA3S44TxtkgmeiMrb95G4VdDUrRP7FmFftKLNf7k7ARkOr8P-ZwnFMCTPRjzzMSvICQ0H5wZ8m9KbKLD3s1NDFEB_VsUkIMfQ7OrCcr117nxMk8ciBvq9D1tuJHc4dyxlSHfIfdrgHadVrseHp5XYqkk9se3dMDabOe3ascxH4ngUHnZDTLFAr6i6ZJyr6FqA",
    //   "redirect_uri": "https://1740-213-230-118-185.ngrok-free.app/"
    // })

    // const res = this.$store.dispatch('getLeads')



    // const client = new Client({
    //   domain: 'izzatbekmajidov2006', 
    //   auth: {
    //     client_id: 'da4bb316-3d3a-4d73-9f9b-b45a5025678d', // ID интеграции
    //     client_secret: '0FPzLItmv3JadUJPjDw8LvSgPp10VaGoddpxm0OQS1moJWZ9QlTL6sV20hZ4oqow', // Секретный ключ
    //     redirect_uri: 'https://1740-213-230-118-185.ngrok-free.app', // Ссылка для перенаправления
    //     code: 'def502003de2a6949550a3f998909ad78f8b31cd7f7aadab78797fdc6e4b3df720ee26155cb02512fe41f0048df6645f35d0e05edc20f8872e45dd6102dfb66efea1ace332fc1374113b99c790ad6e17955cfb1ff438c26637efd549c564554a4532fffdcaac6dc23346722b7c5ef07f4a2d2ef0d2d4224c4f6afed760227bb432fa2bfdee282f3df6c1f249fe7d7a5504d0b8fc583784c68602629fde8d7624970f3e6ea405a5b1566de258616e8e66d319408d30424f4da33be4d2e490503f0e99db6328760e45d00b35f86ed08c9e1e80d40dc4e64592237a143105a2eba0a21b5273eea86d0d91499e1375c44efbc112089e9cbb58c777f10656454acc94f66134074f464534b56d24ea299c57065b6a91b1233b38be54ade5e999520b225005b031631bb05cb7442e9c955ca62ec8dbdbe621747c098a015059b3691a966cda024150bfb63808bb8fdde491d0bc4db76b0b4ce6cea59de8ac85e830985e6f5322c6ea7f4a18b9f0f1488e3310414e3c23171d9e71e9aa585bc57380742feee95e9a3d639bca8837f92813f795574b16e2a8a6a8b36ca6736c55f4b959496544f7a87c171ffff2b6b266a074484d76f12fe8128e9da46f2959bcc7f1de4e87c38b0294701ffa7822361dac1209eb03d45cfcd7ec84b0cbd8310fa43abeb3a0d1783a80d1c33b93e6a1029bacb54428337bad47ea7ea40270275dd93b', // Код для упрощённой авторизации, необязательный
    //   },
    // });


    // console.log(res);
  }
}
</script>