<template>
    <Splide :has-track="false" :options="options" aria-label="Hududlar" class="mt-10">
        <SplideTrack>
            <template v-for="(data, index) in datas" :key="index">
                <SplideSlide>
                    <div class="p-6 w-96 bg-white flex flex-col items-start rounded-[2rem] cursor-pointer">
                        <div class="w-full h-[15rem] rounded-xl"
                            :style="'background-image: url(\'' + data.image + '\')'">
                        </div>
                        <div class="flex items-center gap-1 mt-5 mb-2">
                            <Calendar class="size-4" />
                            <span class="txt-micro text-gray">{{ data.date }}</span>
                        </div>
                        <h2 class="h4 text-orange">{{ data.title }}</h2>
                        <div class="txt-big line-clamp-3">{{ data.body }}</div>
                    </div>
                </SplideSlide>
            </template>
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

import image1 from '@/assets/images/news_1.png';
import image2 from '@/assets/images/news_2.png';
import image3 from '@/assets/images/news_3.png';

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
            datas: [
                {
                    'title': 'Yangilik nomi',
                    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas dolor natus eaque illum mollitia molestiae. Odio minus nisi ipsam aliquid at in vitae corrupti iste repellat cumque, esse debitis.',
                    'date': '02.02.2024',
                    'image': image1
                },
                {
                    'title': 'Yangilik nomi',
                    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas dolor natus eaque illum mollitia molestiae. Odio minus nisi ipsam aliquid at in vitae corrupti iste repellat cumque, esse debitis.',
                    'date': '02.02.2024',
                    'image': image2
                },
                {
                    'title': 'Yangilik nomi',
                    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas dolor natus eaque illum mollitia molestiae. Odio minus nisi ipsam aliquid at in vitae corrupti iste repellat cumque, esse debitis.',
                    'date': '02.02.2024',
                    'image': image3
                },
                {
                    'title': 'Yangilik nomi',
                    'body': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptas dolor natus eaque illum mollitia molestiae. Odio minus nisi ipsam aliquid at in vitae corrupti iste repellat cumque, esse debitis.',
                    'date': '02.02.2024',
                    'image': image2
                },

            ]
        }
    },
    setup() {
        const options = {
            focus: 'left',
            autoWidth: true,
            // rewind: true,
            gap: '2rem',
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