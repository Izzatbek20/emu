<template>
    <div class="h-16 rounded-3xl bg-white flex items-center overflow-hidden">
        <Splide :has-track="false" :options="optionsMaxScreen768" aria-label="Hududlar">
            <SplideTrack class="h-full">

                <SplideSlide v-for="(item, index) in menu[name]" :key="index" class="transition-colors duration-700">
                    <router-link :to="{ name: item.link }"
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
                                {{ item.title }}
                                <br>
                                <span v-if="item.description"
                                    class="txt-micro max-md:text-[9px] text-gray group-hover:text-white">
                                    {{ item.description }}
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
        Splide, SplideSlide, SplideTrack
    },
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    setup() {
        const optionsMaxScreen768 = {
            focus: 'left',
            arrows: false,
            pagination: false,
            autoWidth: true,
        };

        return { optionsMaxScreen768 };
    },
    data() {
        return {
            menu: {
                home: [
                    {
                        title: "Yuk narxini xisoblash",
                        icon: 'Calculator',
                        link: 'xizmatXisoblash'
                    },
                    {
                        title: "Kuryer chaqirish",
                        icon: 'Curier',
                        link: 'kuryerChaqirish'
                    },
                    {
                        title: "Yukni kuzatish",
                        icon: 'BoxSearch',
                        link: ''
                    },
                    {
                        title: "Ofislarimiz",
                        icon: 'Marker',
                        link: 'ofislarimiz'
                    },
                    {
                        title: "Hamkorlik bo'yicha",
                        icon: 'Hand',
                        link: ''
                    },
                ],
                bizHaqimizda: [
                    {
                        title: "Kompaniya haqida",
                        icon: 'Home',
                        link: 'bizHaqimizda'
                    },
                    {
                        title: "Raxbariyat",
                        icon: 'UserGroup',
                        link: 'raxbariyat'
                    },
                    {
                        title: "Hududiy menedjerlar",
                        icon: '',
                        link: 'hududiy'
                    },
                    {
                        title: "Kompaniya yangiliklari",
                        icon: '',
                        link: 'yangiliklar'
                    },
                    {
                        title: "Biz haqimizda fikrlar",
                        icon: '',
                        link: 'fikirlar'
                    },
                ],
                mijoz: [
                    {
                        title: "Xizmat narxini xisoblash",
                        icon: 'Calculator',
                        link: 'xizmatXisoblash'
                    },
                    {
                        title: "Ofislar",
                        icon: 'Marker',
                        link: 'ofislarimiz'
                    },
                    {
                        title: "Kuryer chaqirish",
                        icon: 'Curier',
                        link: 'kuryerChaqirish'
                    },
                    {
                        title: "Ko’p beriladigan savollar",
                        icon: 'Question',
                        link: 'savollar'
                    },
                    {
                        title: "Shartnoma va umumiy shartlar",
                        icon: 'Docs',
                        link: 'umumiyShartlar'
                    },
                ],
                xizmlatlar: [
                    {
                        title: "Ichki kuryerlik xizmatlar",
                        icon: 'Map',
                        link: 'kuryerXizmati'
                    },
                    {
                        title: "Xalqaro kuryerlik xizmatlar",
                        icon: 'Global',
                        link: 'xalqaroKuryerlikXizmati'
                    },
                    {
                        title: "Ustama to’lovli pochta jo’natmalarini yetkazib berish",
                        icon: '',
                        link: 'ustamaTolovli'
                    },
                    {
                        title: "Fullfilment xizmati",
                        icon: 'WhereHouse',
                        link: 'fullfilmentView'
                    },
                    {
                        title: "Yuk tashish xizmati",
                        icon: 'Truck',
                        link: 'individual'
                    },
                    {
                        title: "EMU kargo xizmati",
                        icon: 'Container',
                        link: 'kargo'
                    },
                ],
                vakansiya: [
                    {
                        id: 1,
                        title: "Toshkent shahri",
                        icon: null,
                        count: 7,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 2,
                        title: "Andijon viloyati",
                        icon: null,
                        count: 2,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 3,
                        title: "Buxoro viloyati",
                        icon: null,
                        count: 5,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 4,
                        title: "Jizzax viloyati",
                        icon: null,
                        count: 1,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                    {
                        id: 5,
                        title: "Qashqadaryo viloyati",
                        icon: null,
                        count: 0,
                        description: 'bo’sh ish o’rni mavjud',
                        link: 'vakansiya'
                    },
                ],
                profil: [
                    {
                        id: 1,
                        title: "Profil",
                        icon: 'UserOctagon',
                        count: null,
                        description: null,
                        link: 'profil'
                    },
                    {
                        id: 1,
                        title: "Qabul qilingan pochtalar",
                        icon: 'ReceiveSquery',
                        count: null,
                        description: null,
                        link: 'qabul'
                    },
                    {
                        id: 1,
                        title: "Jo’natilgan pochtalar",
                        icon: 'SendRequest',
                        count: null,
                        description: null,
                        link: 'jonatilgan'
                    },
                ]
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
</style>