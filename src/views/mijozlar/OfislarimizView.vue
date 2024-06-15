<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('O’zbekiston bo’ylab 75ta ofislarimiz mavjudi') }}</Navigation>

        <div class="hidden max-lg:flex mt-8">
            <Splide :has-track="false" :options="optionsMaxScreen768" aria-label="Hududlar">
                <SplideTrack class="overflow-hidden cursor-ew-resize">
                    <SplideSlide v-if="viloyat" v-for="(item, index) in viloyat.city">
                        <div @click="selectRegion(item)" v-if="index != 0"
                            class="rounded-[100px] hover:bg-violet hover:text-white px-6 py-4 h7 max-lg:txt-micro cursor-pointer"
                            :class="item.name == current_region_name ? 'bg-violet text-white' : 'bg-white'">{{
                                $t('viloyat.'
                                    +
                                    item.name) }}</div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:basis-auto max-xl:w-full">

                <div class="flex flex-row max-lg:hidden gap-3 flex-wrap">
                    <template v-if="viloyat" v-for="(item, index) in viloyat.city">
                        <div @click="selectRegion(item)" v-if="index != 0"
                            class="rounded-[100px] hover:bg-violet hover:text-white px-6 py-4 h7 max-lg:txt-micro cursor-pointer"
                            :class="item.name == current_region_name ? 'bg-violet text-white' : 'bg-white'">{{
                                $t('viloyat.'
                                    +
                                    item.name) }}
                        </div>
                    </template>
                </div>

                <div class="flex max-lg:flex-col mt-4 items-start">
                    <div class="basis-1/3 max-lg:basis-auto max-xl:w-full">
                        <div class="block max-lg:hidden">
                            <Splide :has-track="false" :options="options" aria-label="Hududlar">
                                <SplideTrack>
                                    <!-- pvz ichida ko'p ma'lumot bo'lsa -->
                                    <SplideSlide v-if="punkit && typeof punkit.pvz[0] == 'object'"
                                        v-for="(pvz, i) in punkit.pvz">
                                        <div
                                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                                            <!-- <div class="h6">{{ pvz.name }}</div> -->
                                            <div class="flex items-start gap-2">
                                                <Marker class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Manzil') }}</div>
                                                    <div class="txt-small capitalize">{{ pvz.address }}</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Marker2 class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Mo’ljal') }}</div>
                                                    <div class="txt-small capitalize">{{ pvz.traveldescription }}</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Phone class="h-4" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Tel.raqam') }}</div>
                                                    <div class="txt-small">+{{ pvz.phone }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>

                                    <!-- pvz ichida 1 ma'lumot bo'lsa -->
                                    <SplideSlide v-else-if="punkit">
                                        <div
                                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                                            <!-- <div class="h6">{{ punkit.pvz.name }}</div> -->
                                            <div class="flex items-start gap-2">
                                                <Marker class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Manzil') }}</div>
                                                    <div class="txt-small capitalize">{{ punkit.pvz.address }}</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Marker2 class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Mo’ljal') }}</div>
                                                    <div class="txt-small capitalize">{{ punkit.pvz.traveldescription }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Phone class="h-4" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Tel.raqam') }}</div>
                                                    <div class="txt-small">+{{ punkit.pvz.phone }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                            </Splide>
                        </div>
                        <div class="hidden max-lg:block">
                            <Splide :has-track="false" :options="optionsMaxScreen768" aria-label="Hududlar">
                                <SplideTrack>

                                    <!-- pvz ichida ko'p ma'lumot bo'lsa -->
                                    <SplideSlide v-if="punkit && typeof punkit.pvz[0] == 'object'"
                                        v-for="(pvz, i) in punkit.pvz">
                                        <div
                                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                                            <div class="flex items-start gap-2">
                                                <Marker class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Manzil') }}</div>
                                                    <div class="txt-small capitalize">{{ pvz.address }}</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Marker2 class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Mo’ljal') }}</div>
                                                    <div class="txt-small capitalize">{{ pvz.traveldescription }}</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Phone class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Tel.raqam') }}</div>
                                                    <div class="txt-small">+{{ pvz.phone }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>

                                    <!-- pvz ichida 1 ma'lumot bo'lsa -->
                                    <SplideSlide v-else-if="punkit">
                                        <div
                                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                                            <div class="flex items-start gap-2">
                                                <Marker class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Manzil') }}</div>
                                                    <div class="txt-small capitalize">{{ punkit.pvz.address }}</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Marker2 class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Moljal</div>
                                                    <div class="h6">{{ $t('Mo’ljal') }}</div>
                                                    <div class="txt-small capitalize">{{ punkit.pvz.traveldescription }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Phone class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">{{ $t('Tel.raqam') }}</div>
                                                    <div class="txt-small">+{{ punkit.pvz.phone }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>

                                </SplideTrack>
                            </Splide>
                        </div>

                    </div>
                    <div class="basis-2/3 max-lg:basis-no max-lg:mt-5 flex items-center justify-center">
                        <MapUzb @mapSelect="mapSelect" :active="current_region_name" class="w-11/12  max-md:h-56" />
                    </div>
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'mijoz'" />
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import { mapState } from 'vuex';

export default {
    setup() {
        const options = {
            autoHeight: true,
            arrows: false,
            pagination: false,
            direction: 'ttb',
            height: '50rem',
            // wheel: true,
            gap: '1rem',
        };
        const optionsMaxScreen768 = {
            focus: 'left',
            arrows: false,
            pagination: false,
            autoWidth: true,
            // rewind: true,
            gap: '1rem',
        };

        return { options, optionsMaxScreen768 };
    },
    components: {
        BarGorizontal, Bar, Navigation, Splide, SplideSlide, SplideTrack
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            current_region: 1458,
            current_region_name: "Андижанская область",
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('sub.ofislarimiz')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('O’zbekiston bo’ylab 75ta ofislarimiz mavjudi'),
            pageKeyword: this.pageDescription,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/mijoz/ofislarimiz`,
            alternateUz: `${window.location.origin}/uz/mijoz/ofislarimiz`,
            alternateRu: `${window.location.origin}/ru/mijoz/ofislarimiz`,
            alternateEn: `${window.location.origin}/en/mijoz/ofislarimiz`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    computed: {
        // Ekran o'lchamiga qarab fon rangini aniqlash
        isSmallScreen() {
            // Ekran kengligi 768 pikseldan kichik bo'lsa true qaytaradi
            return this.windowWidth <= 768;
        },
        ...mapState({
            viloyat: state => state.courier.viloyat,
            punkit: state => state.courier.punkit,
        }),
    },
    watch: {
        current_region_name(newVal, oldVal) {
            this.getPunkit()
        },
    },
    mounted() {
        this.getViloyat()
        this.getPunkit()

        // Oynaning o'lchamlarini kuzatish
        window.addEventListener('resize', this.updateWindowSize);

        let pin = document.getElementById("pin");
        let notPin = document.getElementById("pin-conatiner");

        ScrollTrigger.create({
            trigger: pin,
            start: "top 20%",
            end: () => `${notPin.offsetHeight - pin.offsetHeight}px 20%`,
            invalidateOnRefresh: true,
            pin: pin,
            pinSpacing: true,

        });

        useHead({
            title: this.pageTitle,
            meta: [
                { name: 'title', content: this.pageTitle },
                { name: 'description', content: this.pageDescription },
                { name: 'keywords', content: `${this.pageTitle.substring(0, 290).replaceAll(' ', ', ').replaceAll('-,', '')}, ${this.$t('Hisoblash')}, ${this.$t('Korobka')}, ${this.$t('Qabul qiluvchi')}, ${this.$t('Kuryer chaqirish')}, ${this.$t('Jo’natuvchi')}` },

                { property: 'og:title', content: this.pageTitle },
                { property: 'og:description', content: this.pageDescription },
                { property: 'og:image', content: this.emuLogoImage },
                { property: 'og:url', content: this.canonical },
                { property: 'og:type', content: 'article' },

                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:title', content: this.pageTitle },
                { property: 'twitter:description', content: this.pageDescription },
                { property: 'twitter:image', content: this.emuLogoImage },
            ],
            link: [
                { rel: 'canonical', href: this.canonical },
                { rel: 'alternate', hreflang: 'uz', href: this.alternateUz },
                { rel: 'alternate', hreflang: 'ru', href: this.alternateRu },
                { rel: 'alternate', hreflang: 'en', href: this.alternateEn },
                { rel: 'alternate', hreflang: 'x-default', href: this.canonical }
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: `{"@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": ${this.pageTitle},
                        "image": [${this.emuLogoImage}],
                        "datePublished": "2024-06-14T08:00:00+00:00",
                        "dateModified": "2024-06-14T08:00:00+00:00",
                        "author": {
                            "@type": "Person",
                            "name": "${window.location.host}"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "${window.location.host}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": ${this.emuLogoImage}
                            }
                        },
                        "description": ${this.pageDescription}}`
                }
            ]
        });
    },
    beforeUnmount() {
        // Kuzatishni to'xtatish
        window.removeEventListener('resize', this.updateWindowSize);
    },
    methods: {
        selectRegion(region) {
            this.current_region = region.code;
            this.current_region_name = region.name;
        },
        mapSelect(val) {
            this.current_region = this.viloyat.city.find(item => item.name == val).code;
            this.current_region_name = val;
        },
        getViloyat() {
            this.$store.dispatch('getViloyat')
        },
        getPunkit() {
            this.$store.dispatch('getPunkit', {
                "city": this.current_region
            })
        },
        // Oynaning o'lchamlarini yangilash
        updateWindowSize() {
            this.windowWidth = window.innerWidth;
        },
    }
}
</script>

<style scoped>
.splide {
    padding: 0 0;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
}
</style>