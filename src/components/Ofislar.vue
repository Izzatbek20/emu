<template>

    <div class="mt-10 p-10 max-xl:p-5 bg-white flex flex-row max-lg:flex-col gap-7 rounded-3xl">
        <div class="flex-1 py-3">
            <MapUzb @mapSelect="mapSelect" :active="current_region_name" class="w-full  max-md:h-56" />
        </div>
        <div class="flex-1 w-[50%] max-lg:w-[100%] z-0 flex flex-col gap-8 ">
            <Title class="pt-0 text-start">
                O’zbekiston bo’ylab 75ta ofislarimiz mavjud
            </Title>
            <Splide :has-track="false" :options="optionsRegion" aria-label="Ofislar">
                <SplideTrack class="overflow-hidden cursor-ew-resize">
                    <SplideSlide v-if="viloyat" v-for="(item, index) in viloyat.city">
                        <span @click="selectRegion(item)" v-if="index != 0"
                            class="font-bold mr-5 text-nowrap cursor-pointer h-full flex items-end"
                            :class="item.name == current_region_name ? 'text-violet text-3xl max-xl:h5' : 'text-icon-gray max-xl:h7 h4'">
                            {{ $t('viloyat.' + item.name) }}
                        </span>
                    </SplideSlide>
                </SplideTrack>
            </Splide>

            <Splide :has-track="false" ref="splide" :options="options" aria-label="Hududlar">
                <SplideTrack class="overflow-hidden cursor-ew-resize">
                    <SplideSlide v-if="punkit && typeof punkit.pvz[0] == 'object'" v-for="(pvz, i) in punkit.pvz">
                        <div
                            class=" flex  bg-white flex-col w-80 p-5 max-lg:p-3 items-start gap-3 border border-line-gray rounded-2xl">
                            <div class="flex items-start gap-2">
                                <Marker class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">{{ pvz.address }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">{{ pvz.traveldescription }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Phone class="h-4" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Tel.raqam</div>
                                    <div class="txt-small">+{{ pvz.phone }}</div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide v-else-if="punkit">
                        <div
                            class="flex  bg-white flex-col w-80 p-5 items-start gap-3 border border-line-gray rounded-2xl">
                            <div class="flex items-start gap-2">
                                <Marker class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Manzil</div>
                                    <div class="txt-small">{{ punkit.pvz.address }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker2 class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Moljal</div>
                                    <div class="txt-small">{{ punkit.pvz.traveldescription }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Phone class="h-4" />
                                <div class="flex flex-col items-start">
                                    <div class="h6">Tel.raqam</div>
                                    <div class="txt-small">+{{ punkit.pvz.phone }}</div>
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
import Title from './Title.vue';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import { XMLBuilder } from 'fast-xml-parser';
const build = new XMLBuilder({
    attributeNamePrefix: '@', // Atributlarni belgilash
    textNodeName: '#text', // Matn elementlari nomini belgilash
    ignoreAttributes: false // Atributlarni o'xtirmashtirish
});

// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import { mapState } from 'vuex';
import { ref } from 'vue';

export default {
    components: {
        Splide,
        SplideSlide,
        SplideTrack,
        Title
    },
    data() {
        return {
            current_region: 1458,
            current_region_name: "Андижанская область",
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
        const splide = ref();
        const splideActiveIndex = ref(0);
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
        const optionsRegion = {
            focus: 'left',
            autoWidth: true,
            arrows: false,
            pagination: false,
            // rewind: true,
            gap: '1rem'
        };

        return { options, optionsRegion, splide, splideActiveIndex };
    },
    computed: {
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
    methods: {
        selectRegion(region) {
            this.current_region = region.code;
            this.current_region_name = region.name;
            this.element()
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
        element() {
            if (this.viloyat.city) {
                this.viloyat.city.forEach((element, index) => {
                    if (this.$route.name == element.link) {
                        this.splideActiveIndex = index
                    }
                });
            }
        }
    },
    mounted() {
        this.getViloyat()
        this.getPunkit()

        this.$refs.splide.splide.go(this.splideActiveIndex);
    }
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