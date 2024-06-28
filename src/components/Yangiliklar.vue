<template>
    <Splide :has-track="false" :options="options" aria-label="Hududlar" class="mt-10">
        <SplideTrack class="flex flex-row gap-7 mt-10 flex-wrap">
            <SplideSlide v-if="isLoading" v-for="n in 3" :key="n"
                class="w-[32.5%] max-[479px]:w-[80.5%] max-md:w-[52.5%] max-lg:w-[40.5%] max-xl:w-[45.5%]">
                <Shimmer :key="n" />
            </SplideSlide>
            <SplideSlide v-for="(data, index) in datas" :key="index"
                class="w-[32.5%] max-[479px]:w-[80.5%] max-md:w-[52.5%] max-lg:w-[40.5%] max-xl:w-[45.5%]">
                <div
                    class="p-6 max-xl:p-5 max-md:p-4 h-full w-full bg-white flex flex-col items-start gap-3 max-xl:gap-2 rounded-[2rem]">
                    <router-link :to="{ name: 'yangilik', params: { id: data.id } }"
                        class="relative w-full h-[17rem] max-lg:h-[10rem] rounded-xl bg-no-repeat bg-center bg-cover"
                        :style="{ backgroundImage: data.image }">
                    </router-link>
                    <div class="flex items-center gap-1 mt-1 mb-1.5">
                        <Calendar class="size-4 max-md:size-3.5" />
                        <span class="txt-micro text-gray"> {{ data.date }}</span>
                    </div>
                    <router-link :to="{ name: 'yangilik', params: { id: data.id } }">
                        <h2 class="h4 max-xl:h5 max-md:h6 text-orange text-wrap" v-html="data.title"></h2>
                    </router-link>
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
import { mapGetters, mapState } from 'vuex';
import Shimmer from './Shimmer.vue';


export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack,
        Shimmer
    },
    data() {
        return {
            datas: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN
        }
    },
    computed: {
        ...mapState({
            news: state => state.emuAdmin.news,
        }),
        ...mapGetters({
            isLoading: 'isLoadingNews'
        })
    },
    watch: {
        news(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.news, newVal)
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            const totalData = [];
            if (newVal.results) {
                newVal.results.forEach((element, index) => {
                    if (element.langs) {
                        const item = element.langs.find(item => item.lang == locale)
                        if (item) {
                            const newDate = new Date(element.created_at)
                            const img = `${this.origin}/${item.photo.replace(/\\/g, '/')}`
                            const formatingData = {
                                id: element.id,
                                image: `url(${img})`,
                                title: item.title,
                                body: item.content,
                                date: newDate.toLocaleDateString('uz-UZ', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
                            }

                            totalData.push(formatingData)
                        }
                    }
                });
            }

            this.datas = totalData
        }
    },
    mounted() {
        this.$store.dispatch('news')
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