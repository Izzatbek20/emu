<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation class="max-xl:hidden">{{ $t('Kompaniya haqida') }}</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4  flex flex-row">
                <div class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden h-96 max-xl:h-[46rem] max-lg:h-[42rem] max-md:h-[38rem] max-sm:h-[35rem]"
                    :class="{ 'rounded-bl-[6rem]': !playing }">
                    <AboutBanner :v="coruselData.video" :title="coruselData.title" :image="coruselData.image"
                        @playing="playing = !playing" />
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
            <Title class="text-white" :pt="false">{{ $t('Nega aynan EMU express pochtasini tanlashingiz kerak?') }}
            </Title>
            <Xizmatlar2 :items="xizmatlar" />
        </Card>

        <InfoBanner :type="3" :bg-color="'bg-violet'"
            :title="$t('Tezkor yetkazib berish xizmatimiz bilan vaqtingizni optimallashtiring')"
            :bg-title="$t('xizmatdanFoydalanish')" />
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
import { mapState } from 'vuex';

export default {
    components: {
        AboutBanner, InfoBanner, About, Card, Xizmatlar2, Navigation, Bar, Title, BarGorizontal
    },
    data() {
        return {
            xizmatlar: [
                {
                    title: 'uzbekistonBoylabOfislar',
                    icon: 'Marker3'
                },
                {
                    title: 'aloqa',
                    icon: 'Aloqa'
                },
                {
                    title: 'tajribaliXodimlar',
                    icon: 'DeliverUser'
                },
                {
                    title: 'yukAvtomobillari',
                    icon: 'DeliverHome'
                },
                {
                    title: 'mdhXizmatlar',
                    icon: 'GlobalShipping'
                },
                {
                    title: 'isoStandartlari',
                    icon: 'Sertificat'
                }
            ],
            playing: false,
            coruselData: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
        }
    },
    computed: {
        // ...mapGetters({
        //     isLoading: 'isLoading'
        // }),
        ...mapState({
            banner2Data: state => state.emuAdmin.banner2Data,
        })
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal) {
                const item = newVal.langs.find(item => item.lang == locale)
                this.coruselData = {
                    image: `${this.origin}/${newVal.image.replaceAll(/\\/g, '/')}`,
                    video: newVal.video,
                    title: item.text,
                }
            }
        }
    },
    watch: {
        banner2Data(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.banner2Data, newVal)
        }
    },
    mounted() {
        this.$store.dispatch('getBanner2')
    }
}
</script>