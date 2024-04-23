<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>O’zbekiston bo’ylab 75ta ofislarimiz mavjudi</Navigation>

        <div class="hidden max-lg:flex mt-8">
            <Splide :has-track="false" :options="optionsMaxScreen768" aria-label="Hududlar">
                <SplideTrack class="overflow-hidden cursor-ew-resize">
                    <SplideSlide v-for="(item, index) in data">
                        <div class="rounded-[100px] hover:bg-violet hover:text-white px-6 py-4 h7 max-lg:txt-micro cursor-pointer"
                            :class="index == 0 ? 'bg-violet text-white' : 'bg-white'">{{ item }}</div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:basis-auto max-xl:w-full">

                <div class="flex flex-row max-lg:hidden gap-3 flex-wrap">
                    <div v-for="(item, index) in data"
                        class="rounded-[100px] hover:bg-violet hover:text-white px-6 py-4 h7 max-lg:txt-micro cursor-pointer"
                        :class="index == 0 ? 'bg-violet text-white' : 'bg-white'">{{ item }}</div>
                </div>

                <div class="flex max-lg:flex-col mt-4 items-start">
                    <div class="basis-1/3 max-lg:basis-auto max-xl:w-full">
                        <div class="block max-lg:hidden">
                            <Splide :has-track="false" :options="options" aria-label="Hududlar">
                                <SplideTrack>
                                    <SplideSlide v-for="i in [1, 2, 3]">
                                        <div
                                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                                            <div class="flex items-start gap-2">
                                                <Marker class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Manzil</div>
                                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli
                                                        ko’chasi,
                                                        35
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Marker2 class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Moljal</div>
                                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli
                                                        ko’chasi,
                                                        35
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Phone class="h-4" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Tel.raqam</div>
                                                    <div class="txt-small">+998 71 200 96-69</div>
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

                                    <SplideSlide v-for="i in [1, 2, 3]">
                                        <div
                                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                                            <div class="flex items-start gap-2">
                                                <Marker class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Manzil</div>
                                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli
                                                        ko’chasi,
                                                        35
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Marker2 class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Moljal</div>
                                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli
                                                        ko’chasi,
                                                        35
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex items-start gap-2">
                                                <Phone class="size-5" />
                                                <div class="flex flex-col items-start">
                                                    <div class="h6">Tel.raqam</div>
                                                    <div class="txt-small">+998 71 200 96-69</div>
                                                </div>
                                            </div>
                                        </div>
                                    </SplideSlide>

                                </SplideTrack>
                            </Splide>
                        </div>

                    </div>
                    <div class="basis-2/3 max-lg:basis-no max-lg:mt-5 flex items-center justify-center">
                        <MapUzb class="w-11/12  max-md:h-56" />
                    </div>
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'mijoz'" />
            </div>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';


// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';

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

            ino: '',
            ino2: '',
            ino3: 0,
            ino4: 'off',
            koropka: true,
            data: [
                "Toshkent shahri",
                "Andijon viloyati",
                "Buxoro viloyati",
                "Farg'ona viloyati",
                "Jizzax viloyati",
                "Namangan viloyati",
                "Navoiy viloyati",
                "Qashqadaryo viloyati",
                "Samarqand viloyati",
                "Sirdaryo viloyati",
                "Surxondaryo viloyati",
                "Toshkent viloyati",
                "Xorazm viloyati"
            ]

        }
    },
    computed: {
        // Ekran o'lchamiga qarab fon rangini aniqlash
        isSmallScreen() {
            // Ekran kengligi 768 pikseldan kichik bo'lsa true qaytaradi
            return this.windowWidth <= 768;
        },
    },
    mounted() {
        // Oynaning o'lchamlarini kuzatish
        window.addEventListener('resize', this.updateWindowSize);
    },
    beforeUnmount() {
        // Kuzatishni to'xtatish
        window.removeEventListener('resize', this.updateWindowSize);
    },
    methods: {
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