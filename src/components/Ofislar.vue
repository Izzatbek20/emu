<template>

    <div class="mt-10 p-10 bg-white flex flex-row max-md:flex-col gap-7 rounded-3xl">
        <div class="flex-1">
            <MapUzb class="w-full" />
        </div>
        <div class="h-full overflow-hidden z-0 flex-1 flex flex-col gap-8">
            <h2 class="h1">O’zbekiston bo’ylab 75ta ofislarimiz mavjud</h2>
            <div class="flex flex-row items-center flex-nowrap">
                <span v-for="region in regions"
                    class="font-bold mr-5 text-nowrap text-icon-gray first:text-violet first:text-3xl h4">
                    {{ region }}
                </span>
            </div>
            <Splide :has-track="false" :options="options" aria-label="Hududlar">
                <SplideTrack>
                    <SplideSlide>
                        <div class=" flex flex-col w-80 p-5 items-start gap-3 border border-line-gray rounded-2xl">
                            <div class="flex items-start gap-2">
                                <Marker class="w-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="w-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Phone class="w-5" />
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
                                <Marker class="w-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="w-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Phone class="w-5" />
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
                            <CheverRight />
                        </button>
                        <button class="splide__arrow_my splide__arrow--next group">
                            <CheverRight />
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

export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack
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
    padding: 0 1.2rem;
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
    left: 0rem;
}

.splide__arrow--next {
    right: 0rem;
}
</style>