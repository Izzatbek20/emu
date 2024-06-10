<template>
    <ul
        class="grid grid-cols-1 rounded-2xl relative max-xl:divide-x max-xl:divide-line-gray overflow-hidden bg-white max-sm:overflow-y-hidden max-sm:overflow-scroll max-xl:grid-cols-5 max-xl:h-20 max-sm:flex scrollbar-imm">
        <li v-for="(item, index) in menu[name]" :key="index" class="transition-colors duration-700 h-20">

            <!-- Vakansiya -->
            <router-link v-if="name != 'vakansiya' && (item.link != 'modal-yuk' && item.link != 'modal-hamkor')"
                :to="{ name: item.link }" :class="{ active: isActive(item.link) }"
                class="px-[2rem] xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] h-full transition-colors duration-700">
                <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3"
                    :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                    <component v-if="item.icon" :is="item.icon"
                        class="basis-1/6 mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                        :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                    </component>
                    <div class="basis-full ">
                        <div v-if="item.count != null"
                            class="mr-2 xs:max-xl:size-5 max-sm:size-10 bg-[#F7F5F7] rounded-full transition-colors duration-700 group-hover:text-black flex items-center justify-center size-8">
                            {{ item.count }}
                        </div>
                        <span class="group-hover:text-white">
                            {{ $t(item.title) }}
                            <br>
                            <span v-if="item.description" class="txt-micro text-gray group-hover:text-white">
                                {{ $t(item.description) }}</span>
                        </span>
                    </div>
                </div>
            </router-link>


            <!-- Asosiy sahifada bar da modal ochilishiuchun -->
            <div v-else-if="item.link == 'modal-yuk' || item.link == 'modal-hamkor'" @click="$emit('modal', item.link)"
                :class="{ active: isActive(item.link, item.id) }"
                class="px-[2rem] xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] h-full transition-colors duration-700">
                <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3"
                    :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                    <component v-if="item.icon" :is="item.icon"
                        class="basis-1/6 mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
                        :fillColor="'fill-violet group-hover:fill-white transition-colors duration-700'">
                    </component>
                    <div class="basis-full ">
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
                                {{ $t(item.description) }}</span>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Qolgan menyular uchun -->
            <router-link v-else :to="{ name: item.link, params: { id: item.id } }"
                :class="{ active: isActive(item.link, item.id) }"
                class="px-[2rem] xs:max-xl:px-0 flex items-center justify-between cursor-pointer group hover:bg-violet max-xl:text-sm max-lg:text-[10px] h-full transition-colors duration-700">
                <div class="group-hover:border-opacity-0 xs:max-xl:px-2 ease-in-out w-full h-full flex items-center text-wrap xs:max-xl:leading-3"
                    :class="(index + 1) != menu[name].length ? 'border-b-[1px] border-line-gray max-xl:border-b-0 max-xl:border-r-[1px]' : null">
                    <component v-if="item.icon" :is="item.icon" class="mr-2 size-6 xs:max-xl:size-5 max-sm:size-10"
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
                            {{ $t(item.description) }}</span>
                    </span>
                </div>
            </router-link>


        </li>
    </ul>
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

export default {
    props: {
        name: {
            type: String,
            required: true,
        }
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
    methods: {
        isActive(link, id = null) {
            if (this.name == 'vakansiya') {
                return this.$route.name === link && this.$route.params.id == id;
            } else {
                return this.$route.name === link;
            }
        }
    }
}
</script>

<style scoped>
.active {
    color: #8F2B83;
}

.active-vakansiya {
    background-color: #8F2B83;
    color: white;
}
</style>