<template>
    <div>
        <!-- Navigation -->
        <Navigation class="max-xl:hidden">Kompaniya haqida</Navigation>

        <!-- Banner -->
        <div
            class="flex flex-row-reverse max-xl:flex-col gap-8 mt-10 h-96 max-xl:h-[40rem] max-lg:h-[44rem] max-md:h-[50rem] max-sm:h-[45rem]">
            <div class="basis-1/4">
                <Bar :name="'bizHaqimizda'" />
            </div>
            <Navigation class="hidden max-xl:block">Kompaniya haqida</Navigation>
            <div class="basis-3/4 flex flex-row">
                <div class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden rounded-bl-[6rem]">
                    <AboutBanner />
                </div>
            </div>
        </div>

        <Card class="bg-white mt-20">
            <About />
        </Card>

        <Card class="bg-orange mt-20">
            <Title class="text-white" :pt="false">Nega aynan EMU express pochtasini tanlashingiz kerak?</Title>
            <Xizmatlar2 :items="xizmatlar" />
        </Card>

        <InfoBanner :type="3" :bg-color="'bg-violet'"
            :title="'Tezkor yetkazib berish xizmatimiz bilan vaqtingizni optimallashtiring'"
            :bg-title="'Xizmatdan foydalanish'" />
    </div>
</template>

<script>
import InfoBanner from '@/components/InfoBanner.vue';

import About from '@/components/About.vue';
import Card from '@/components/Card.vue';
import Xizmatlar2 from '@/components/Xizmatlar2.vue';
import Navigation from '@/components/Navigation.vue';
import AboutBanner from '@/components/AboutBanner.vue';
import Bar from '@/components/Bar.vue';
import Title from '@/components/Title.vue';

export default {
    components: {
        AboutBanner, InfoBanner, About, Card, Xizmatlar2, Navigation, Bar, Title
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