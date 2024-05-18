<template>
    <Splide :has-track="false" :options="options" aria-label="Hududlar" class="mt-10">
        <SplideTrack class="flex flex-row gap-7 mt-10 flex-wrap">
            <SplideSlide v-for="(data, index) in datas" :key="index" class="w-[32.5%] max-sm:w-[26.5%]">
                <div
                    class="p-6 max-xl:p-5 max-md:p-4 h-full w-full bg-white flex flex-col items-start gap-3 max-xl:gap-2 rounded-[2rem]">
                    <router-link :to="{ name: 'yangilik', params: { id: data.id } }"
                        class="relative w-full h-[17rem] max-lg:h-[10rem] rounded-xl bg-no-repeat bg-center bg-cover"
                        :style="{ backgroundImage: `url(${data.image})` }">
                    </router-link>
                    <div class="flex items-center gap-1 mt-1 mb-1.5">
                        <Calendar class="size-4 max-md:size-3.5" />
                        <span class="txt-micro text-gray"> 02.02.2024</span>
                    </div>
                    <router-link :to="{ name: 'yangilik', params: { id: data.id } }">
                        <h2 class="h4 max-xl:h5 max-md:h6 text-orange text-wrap" v-html="data.title"></h2>
                    </router-link>
                    <span class="text-base max-xl:txt-micro max-md:txt-micro-2 font-normal">{{ data.short }}</span>
                    <div class="txt-small max-md:txt-micro max-md:font-normal space line-clamp-3" v-html="data.body">
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
import { data } from '@/constants/news';


export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack
    },
    data() {
        return {
            datas: data['uz']
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
    padding: 0 0rem;
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