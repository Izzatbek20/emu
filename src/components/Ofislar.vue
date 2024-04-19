<template>

    <div class="mt-10 p-10 max-xl:p-5 bg-white flex flex-row max-lg:flex-col gap-7 rounded-3xl">
        <div class="flex-1">
            <MapUzb class="w-full" />
        </div>
        <div class="flex-1 w-[50%] max-lg:w-[100%] z-0 flex flex-col gap-8 ">
            <Title class="pt-0 text-start">
                O’zbekiston bo’ylab 75ta ofislarimiz mavjud
            </Title>
            <div class="flex flex-row items-center flex-nowrap overflow-hidden">
                <span v-for="(region, index) in regions" class="font-bold mr-5 text-nowrap"
                    :class="index == 0 ? 'text-violet text-3xl max-xl:h5' : 'text-icon-gray max-xl:h7 h4'">
                    {{ region }}
                </span>
            </div>

            <Splide :has-track="false" :options="options" aria-label="Hududlar">
                <SplideTrack class="overflow-hidden ">
                    <SplideSlide>
                        <div
                            class=" flex flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                            <div class="flex items-start gap-2">
                                <Marker class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi,
                                        35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi,
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
                    <SplideSlide>
                        <div class="flex flex-col w-80 p-5 items-start gap-3 border border-line-gray rounded-2xl">
                            <div class="flex items-start gap-2">
                                <Marker class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi,
                                        35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi,
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
                    <SplideSlide>
                        <div class="flex flex-col w-80 p-5 items-start gap-3 border border-line-gray rounded-2xl">
                            <div class="flex items-start gap-2">
                                <Marker class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi,
                                        35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi,
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
                <div class="splide__arrows">
                    <div class="splide__arrow_in">
                        <button class="splide__arrow_my splide__arrow--prev group">
                            <CheverRight :fillColor="'group-hover:fill-white'" />
                        </button>
                        <button class="splide__arrow_my splide__arrow--next group">
                            <CheverRight :fillColor="'group-hover:fill-white'" />
                        </button>
                    </div>
                </div>
            </Splide>
        </div>
    </div>

</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import Title from './Title.vue';

export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack,
        Title
    },
    data() {
        return {
            regions: [
                'Toshkent viloyati',
                'Andijon viloyati',
                'Buxoro viloyati',
                'Fargʻona viloyati',
                'Jizzax viloyati',
                'Xorazm viloyati',
                'Namangan viloyati',
                'Qashqadaryo viloyati',
                'Qoraqalpogʻiston Respublikasi',
                'Samarqand viloyati',
                'Sirdaryo viloyati',
                'Surxondaryo viloyati'
            ]
        }
    },
    setup() {
        const options = {
            focus: 'left',
            autoWidth: true,
            // rewind: true,
            gap: '1rem',
            classes: {
                // Add classes for arrows.
                arrows: 'splide__arrows your-class-arrows',
                arrow: 'splide__arrow_my your-class-arrow',
                prev: 'splide__arrow--prev your-class-prev',
                next: 'splide__arrow--next your-class-next',

                // Add classes for pagination.
                pagination: '', // container
                page: '', // each button
            },
        };

        return { options };
    },
}



</script>
<style scoped>
.splide {
    padding: 0 0;
    position: relative;
    display: flex;
    align-items: center;
}

.splide__arrows {
    left: 0;
    width: 100%;
    position: absolute;
}

.splide__arrow_in {
    position: relative;
    display: flex;
    align-items: center;
}

.splide__arrow_my {
    position: absolute;
    margin: 0 0.5rem;
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 50% 50%;
    background: #fff !important;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.181);
    cursor: pointer;
}

.splide__arrow_my:hover {
    background: #EF7F1A !important;
}

.splide__arrow--prev {
    left: -2rem;
    z-index: 9999;
}

.splide__arrow--next {
    right: -2rem;
    z-index: 9999;
}
</style>