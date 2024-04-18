<template>
    <div>
        <!-- Navigation -->
        <Navigation>Kompaniya haqida</Navigation>
        <!-- Banner -->
        <Banner :banner="2" />

        <Card class="bg-white mt-20">
            <About />
        </Card>

        <Card class="bg-orange mt-20">
            <Xizmatlar2 :title="'Nega aynan EMU express pochtasini tanlashingiz kerak?'" :items="xizmatlar" />
        </Card>

        <InfoBanner :type="3" :bg-color="'bg-violet'"
            :title="'Tezkor yetkazib berish xizmatimiz bilan vaqtingizni optimallashtiring'"
            :bg-title="'Xizmatdan foydalanish'" />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import InfoBanner from '@/components/InfoBanner.vue';

import About from '@/components/About.vue';
import Card from '@/components/Card.vue';
import Xizmatlar2 from '@/components/Xizmatlar2.vue';
import Navigation from '@/components/Navigation.vue';

export default {
    components: {
        Banner, InfoBanner, About, Card, Xizmatlar2, Navigation
    },
    data() {
        return {
            xizmatlar: [
                {
                    title: 'O’zbekiston bo’ylab 75ta ofisimiz mavjud',
                    icon: 'Aloqa'
                },
                {
                    title: '24/7 aloqadamiz',
                    icon: 'Aloqa'
                },
                {
                    title: '+8 yillik tajribali kuryer va boshqa xodimlarimiz sizga xizmat ko’rsatadi',
                    icon: 'Aloqa'
                },
                {
                    title: '200ta yuk tashish avtomobillarmiz O’zbekistonning har bir burchagiga yetib boradi',
                    icon: 'Aloqa'
                },
                {
                    title: 'MDH mamlakatlari bo’ylab ham xizmat ko’rsatamiz',
                    icon: 'Aloqa'
                },
                {
                    title: 'ISO 9001-2015 standarti bo’yicha yuqori sifatta xizmat ko’rsatamiz',
                    icon: 'Aloqa'
                }
            ]
        }
    }
}
</script>