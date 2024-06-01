<template>
    <div class="flex flex-row justify-between max-md:flex-col gap-4">
        <div class="flex-1">
            <!-- <h2 class="h1 max-xl:h2 max-lg:h3 mb-6">
                Oliy maqsadimiz
            </h2> -->
            <h2 class="h1 max-xl:h2 max-lg:h3 mb-6">
                Aholiga tez va ishonchli xizmat ko'rsatish
            </h2>
            <h2 class="h2 max-xl:h3 max-lg:h4 mb-6">
                Kompaniya haqida
            </h2>
            <div class="txt-big max-xl:txt-normal max-lg:txt-small">2016-yilda tashkil etilgan kompaniyamiz O‘zbekiston
                Respublikasi
                bo‘ylab
                va undan tashqarida tez yetkazib berish xizmatlarining keng spektrini taklif etadi. EMU Express
                mijozlarimizning talab va istaklarini inobatga olgan holda har bir posilka yoki yukni tez va xavfsiz
                yetkazib berishni kafolatlaydi.</div>
        </div>
        <div class="flex-1">
            <Corusel3 :data="corusel" />
        </div>
    </div>
</template>
<script>
import Corusel3 from './Corusel3.vue';
import image7 from '@/assets/images/slide/7.png';

export default {
    components: {
        Corusel3
    },
    data() {
        return {
            corusel: [
                {
                    title: '',
                    image: image7
                },
                {
                    title: '',
                    image: image7
                },
                {
                    title: '',
                    image: image7
                },
            ]
        }
    }
}
</script>
<style></style>