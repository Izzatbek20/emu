<template>
    <Splide :has-track="false" :options="options" class="p-0 cursor-ew-resize">

        <SplideTrack class="flex flex-row gap-7 mt-10 flex-wrap">
            <SplideSlide v-for="(data, index) in datas" :key="index"
                class="w-[32.5%] max-[479px]:w-[80.5%] max-md:w-[52.5%] max-lg:w-[40.5%] max-xl:w-[45.5%]">
                <MijozItem :item="data" />
            </SplideSlide>
        </SplideTrack>
        <div class="splide__arrows hidden">
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
import { data } from '@/constants/youtube';
import MijozItem from './MijozItem.vue';

export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack,
        MijozItem
    },
    data() {
        return {
            datas: data
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