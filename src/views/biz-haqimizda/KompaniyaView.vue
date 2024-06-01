<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation class="max-xl:hidden">Kompaniya haqida</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4  flex flex-row">
                <div class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden h-96 max-xl:h-[46rem] max-lg:h-[42rem] max-md:h-[38rem] max-sm:h-[35rem]"
                    :class="{ 'rounded-bl-[6rem]': !playing }">
                    <AboutBanner @playing="playing = !playing" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'bizHaqimizda'" />
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
import BarGorizontal from '@/components/BarGorizontal.vue';

export default {
    components: {
        AboutBanner, InfoBanner, About, Card, Xizmatlar2, Navigation, Bar, Title, BarGorizontal
    },
    data() {
        return {
            xizmatlar: [
                {
                    title: 'O’zbekiston bo’ylab 75ta ofisimiz mavjud',
                    icon: 'Marker3'
                },
                {
                    title: '24/7 aloqadamiz',
                    icon: 'Aloqa'
                },
                {
                    title: '+8 yillik tajribali kuryer va boshqa xodimlarimiz sizga xizmat ko’rsatadi',
                    icon: 'DeliverUser'
                },
                {
                    title: '200ta yuk tashish avtomobillarmiz O’zbekistonning har bir burchagiga yetib boradi',
                    icon: 'DeliverHome'
                },
                {
                    title: 'MDH mamlakatlari bo’ylab ham xizmat ko’rsatamiz',
                    icon: 'GlobalShipping'
                },
                {
                    title: 'ISO 9001-2015 standarti bo’yicha yuqori sifatta xizmat ko’rsatamiz',
                    icon: 'Sertificat'
                }
            ],
            playing: false
        }
    }
}
</script>