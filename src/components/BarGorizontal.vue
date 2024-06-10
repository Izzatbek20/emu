<template>
    <div class="h-16 rounded-2xl bg-white flex items-center overflow-hidden">
        <Splide :has-track="false" ref="splide" :options="optionsMaxScreen768" aria-label="Hududlar">
            <SplideTrack class="h-full">

                <SplideSlide v-for="(item, index) in menu[name]" :key="index" class="transition-colors duration-700">
                    <router-link v-if="name != 'vakansiya' && (item.link != 'modal-yuk' && item.link != 'modal-hamkor')"
                        :to="{ name: item.link }" :class="{ active: isActive(item.link) }"
                        class="px-[2rem] min-w-32 xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] hover:text-white transition-colors duration-700 h-full">
                        <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3 transition-colors duration-700"
                            :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                            <component v-if="item.icon" :is="item.icon"
                                class="mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                                :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                            </component>
                            <div v-if="item.count != null"
                                class="mr-2 xs:max-xl:size-5 max-sm:size-10 bg-[#F7F5F7] rounded-full transition-colors duration-700 group-hover:text-black flex items-center justify-center size-8">
                                {{ item.count }}
                            </div>
                            <span class="group-hover:text-white">
                                {{ $t(item.title) }}
                                <br>
                                <span v-if="item.description"
                                    class="txt-micro max-md:text-[9px] text-gray group-hover:text-white">
                                    {{ $t(item.description) }}
                                </span>
                            </span>
                        </div>
                    </router-link>

                    <div v-else-if="item.link == 'modal-yuk' || item.link == 'modal-hamkor'"
                        :class="{ active: isActive(item.link, item.id) }"
                        class="px-[2rem] xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] h-full transition-colors duration-700">
                        <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3"
                            :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                            <component v-if="item.icon" :is="item.icon"
                                class="mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                                :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                            </component>
                            <div v-if="item.count != null"
                                class="mr-2 xs:max-xl:size-5 max-sm:size-10 bg-[#F7F5F7] rounded-full transition-colors duration-700 group-hover:text-black flex items-center justify-center size-8"
                                :class="{ 'active-vakansiya group-hover:bg-[#F7F5F7]': isActive(item.link, item.id) }">
                                {{ item.count }}
                            </div>
                            <span class="group-hover:text-white">
                                {{ $t(item.title) }}
                                <br>
                                <span v-if="item.description" class="txt-micro text-gray group-hover:text-white"
                                    :class="{ active: isActive(item.link, item.id) }">
                                    {{ $t(item.description) }}
                                </span>
                            </span>
                        </div>
                    </div>

                    <router-link v-else :to="{ name: item.link, params: { id: item.id } }"
                        :class="{ active: isActive(item.link) }"
                        class="px-[2rem] min-w-32 xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] hover:text-white transition-colors duration-700 h-full">
                        <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3 transition-colors duration-700"
                            :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                            <component v-if="item.icon" :is="item.icon"
                                class="mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                                :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                            </component>
                            <div v-if="item.count != null"
                                class="mr-2 xs:max-xl:size-5 max-sm:size-10 bg-[#F7F5F7] rounded-full transition-colors duration-700 group-hover:text-black flex items-center justify-center size-8"
                                :class="{ 'active-vakansiya group-hover:bg-[#F7F5F7]': isActive(item.link, item.id) }">
                                {{ item.count }}
                            </div>
                            <span class="group-hover:text-white" :class="{ active: isActive(item.link, item.id) }">
                                {{ $t(item.title) }}
                                <br>
                                <span v-if="item.description"
                                    class="txt-micro max-md:text-[9px] text-gray group-hover:text-white"
                                    :class="{ active: isActive(item.link, item.id) }">
                                    {{ $t(item.description) }}
                                </span>
                            </span>
                        </div>
                    </router-link>
                </SplideSlide>

            </SplideTrack>
        </Splide>
    </div>
</template>
<script>
import {
    home,
    bizHaqimizda,
    mijoz,
    xizmlatlar,
    vakansiya,
    profil
} from '@/constants/bar.js'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

// Default theme
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import { ref } from 'vue';

export default {
    components: {
        Splide, SplideSlide, SplideTrack
    },
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    setup() {
        const splide = ref();
        const splideActiveIndex = ref(0);
        const optionsMaxScreen768 = {
            focus: 'left',
            arrows: false,
            pagination: false,
            autoWidth: true,
        };

        return { optionsMaxScreen768, splide, splideActiveIndex };
    },
    data() {
        return {
            menu: {
                home: home,
                bizHaqimizda: bizHaqimizda,
                mijoz: mijoz,
                xizmlatlar: xizmlatlar,
                vakansiya: vakansiya,
                profil: profil,
            }
        }
    },
    mounted() {
        this.$refs.splide.splide.go(this.splideActiveIndex);
    },
    methods: {
        isActive(link, id = null) {
            if (this.name == 'vakansiya') {
                return this.$route.name === link && this.$route.params.id == id;
            } else {
                this.element()
                return this.$route.name === link;
            }
        },
        element() {
            if (this.menu[this.name]) {
                this.menu[this.name].forEach((element, index) => {
                    if (this.$route.name == element.link) {
                        this.splideActiveIndex = index
                    }
                });
            }
        }
    }
}
</script>

<style scoped>
.splide {
    padding: 0 0;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    overflow: hidden;
}

.active {
    color: #8F2B83;
}

.active-vakansiya {
    background-color: #8F2B83;
    color: white;
}
</style>