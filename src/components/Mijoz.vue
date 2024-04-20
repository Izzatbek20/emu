<template>
    <Splide :has-track="false" :options="options" class="p-0 cursor-ew-resize">

        <SplideTrack class="flex flex-row gap-7 mt-10 flex-wrap">

            <template v-for="(data, index) in datas" :key="index">
                <SplideSlide class="w-[32.5%] max-md:w-[40.5%]">
                    <div
                        class="p-6 max-xl:p-5 max-md:p-4 h-full bg-white flex flex-col items-start gap-3 max-xl:gap-2 rounded-[2rem]">
                        <div class="w-full h-[15rem] max-lg:h-[10rem] rounded-xl rounded-bl-[3.5rem] relative bg-no-repeat bg-center bg-cover"
                            :style="{ backgroundImage: `url(${data.image})` }">
                            <Play
                                class="absolute bottom-2 left-2 size-24 max-lg:bottom-3 max-lg:left-3 max-lg:size-14" />
                        </div>
                        <h2 class="h4 max-xl:h5 max-md:h6 text-violet">{{ data.title }}</h2>
                        <span class="text-base max-xl:txt-micro max-md:txt-micro-2 font-normal">{{ data.short }}</span>
                        <div class="h6 max-xl:h7 max-md:txt-micro max-md:font-medium ">{{ data.body }}</div>
                    </div>
                </SplideSlide>
            </template>

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
import image1 from '@/assets/images/mijoz/1.jpg';
import image2 from '@/assets/images/mijoz/2.png';
import image3 from '@/assets/images/mijoz/3.png';

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
        SplideTrack,
    },
    data() {
        return {
            datas: [
                {
                    'title': 'Alisher, 32 yosh',
                    'short': 'Internet magazin asoschisi',
                    'body': '“Ajoyib xizmat! Tez yetkazib berish orqali biznesimda buyurtma hajmini sezilarli darajada oshirdim. Rahmat!”',
                    'image': image1
                },
                {
                    'title': 'Dilya, 28 yosh',
                    'short': 'Logistika bo’yicha menedjer',
                    'body': '“EMU Ekspress yetkazib berish ishonchimni oqladi. Hamkorlikdan juda mamnunman, hammaga tavsiya qilaman! ”',
                    'image': image2
                },
                {
                    'title': 'Leyla, 35 yosh',
                    'short': 'Kichik biznes egasi',
                    'body': '"Men xalqaro yetkazib berish xizmatlaridan foydalandim - natija kutganimdan a’lo! Hammaga tavsiya qilaman!"',
                    'image': image3
                },
                {
                    'title': 'Leyla, 35 yosh',
                    'short': 'Kichik biznes egasi',
                    'body': '"Men xalqaro yetkazib berish xizmatlaridan foydalandim - natija kutganimdan a’lo! Hammaga tavsiya qilaman!"',
                    'image': image3
                }
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