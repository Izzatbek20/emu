<template>
    <nav class="bg-white py-4">
        <div class="container-rs flex flex-row justify-between items-center mx-auto gap-3">
            <div class="flex flex-row justify-between items-center gap-6">
                <img class="cursor-pointer max-md:h-11" src="@/assets/images/logo/emulogo.png" alt="logo" srcset="">
                <ul class="flex flex-row items-center gap-x-2 xs:max-md:hidden">
                    <li class="cursor-pointer group transition-colors">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <Instagram :fillColor="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                        </a>
                    </li>
                    <li class="cursor-pointer group">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <Telegram :fillColor="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                        </a>
                    </li>
                    <li class="cursor-pointer group">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <Facebook :fillColor="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="flex flex-row items-center gap-x-5 xs:max-xl:hidden">
                <li v-for="(menu, index) in menus" :key="index" :id="'nab-link-' + index" class="relative z-50"
                    :class="$route.name == menu.name ? 'active' : null">
                    <router-link :to="{ name: menu.name }" @click="select('nab-link-' + index, menu.sub)"
                        class="nav-menu nav-menu-animation">
                        {{ menu.title }}
                    </router-link>
                </li>
            </ul>
            <template v-if="navData && navTo">
                <Teleport :to="'#' + navTo">
                    <div class="absolute left-0 mt-12 py-2 w-52 bg-white rounded-xl shadow-xl">
                        <ul>
                            <router-link @click="navDataChange([])" :to="{ name: item.name }"
                                v-for="(item, i) in navData" :key="i + 'sub'"
                                class="block mx-4 my-2 text-gray-800 hover:bg-indigo-500 text-small nav-menu nav-menu-animation">
                                {{ item.title }}
                            </router-link>
                        </ul>
                    </div>
                </Teleport>
            </template>
            <div class="flex flex-row justify-between items-center gap-6">
                <a href="tel://+998712009669" class="flex flex-row items-center cursor-pointer xs:max-md:hidden">
                    <Phone class="size-4 h-4" :fillColor="'fill-text-gray'" />
                    <span class="text-text-gray">
                        +998 71 <span class="text-violet font-bold">200 96-36</span>
                    </span>
                </a>
                <ul class="flex flex-row items-center gap-x-5">
                    <li class="cursor-pointer">
                        <Search class="size-4" :fillColor="'fill-violet'" />
                    </li>
                    <li class="flex gap-x-2 cursor-pointer max-sm:hidden">
                        <div class="w-7 h-7 flex items-center justify-center rounded-full bg-[#EF7F1A]">
                            <User class="size-3 h-4" :fillColor="'fill-white'" />
                        </div>
                        Shaxsiy kabinet
                    </li>
                    <li class="flex flex-row items-center gap-x-2 text-violet cursor-pointer">
                        O'z
                        <ChevorDown class="size-5" :fillColor="'fill-line-gray'" />
                    </li>
                </ul>
                <div class="rounded-lg p-2 border border-line-gray hidden xs:max-xl:block cursor-pointer">
                    <Menu />
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { ref } from 'vue';


export default {
    data() {
        return {
            menus: [
                {
                    title: 'Asosiy',
                    name: 'home',
                    sub: []
                },
                {
                    title: 'Biz haqimizda',
                    name: null,
                    sub: [
                        {
                            title: 'Kompaniya haqida',
                            name: 'bizHaqimizda',
                        },
                        {
                            title: 'Raxbariyat',
                            name: 'raxbariyat',
                        },
                        {
                            title: 'Hududiy menedjerlar',
                            name: 'hududiy',
                        },
                        {
                            title: 'Kompaniya yangiliklari',
                            name: 'yangiliklar',
                        },
                        {
                            title: 'Biz haqimizda fikrlar',
                            name: 'fikirlar',
                        },
                    ]
                },
                {
                    title: 'Mijozlarga',
                    name: 'mijozlarga',
                    sub: [

                        {
                            title: 'Kompaniya yangiliklari',
                            name: 'yangiliklar',
                        },
                        {
                            title: 'Raxbariyat',
                            name: 'raxbariyat',
                        },
                        {
                            title: 'Biz haqimizda fikrlar',
                            name: 'fikirlar',
                        },
                    ]
                },
                {
                    title: 'Xizmatlar',
                    name: 'xizmatlar',
                    sub: []
                },
                {
                    title: 'Vakansiya',
                    name: 'vakansiya',
                    sub: [
                        {
                            title: 'Hududiy menedjerlar',
                            name: 'hududiy',
                        },
                        {
                            title: 'Kompaniya yangiliklari',
                            name: 'yangiliklar',
                        },
                        {
                            title: 'Biz haqimizda fikrlar',
                            name: 'fikirlar',
                        },
                    ]
                },
                {
                    title: 'Biz bilan bog\'lanish',
                    name: 'aloqa',
                    sub: []
                },
            ]
        }
    },
    setup() {
        const navTo = ref(null)
        const navData = ref(null)

        return {
            navTo, navData
        }
    },
    methods: {
        select(tagId, data) {
            this.navTo = tagId;
            this.navDataChange(data)
        },
        navDataChange(data) {
            this.navData = data.length > 0 ? data : null
        }
    }
}
</script>
<style scoped></style>