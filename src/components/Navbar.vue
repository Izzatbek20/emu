<template>
    <nav class="bg-white py-4">
        <div class="container flex flex-row justify-between items-center w-10/12 mx-auto">
            <img class="cursor-pointer" src="@/assets/images/logo/emulogo.png" alt="logo" srcset="">
            <ul class="flex flex-row items-center gap-x-2">
                <li class="cursor-pointer group transition-colors">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <Instagram :classNew="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                    </a>
                </li>
                <li class="cursor-pointer group">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <Telegram :classNew="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                    </a>
                </li>
                <li class="cursor-pointer group">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <Facebook :classNew="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                    </a>
                </li>
            </ul>
            <ul class="flex flex-row items-center gap-x-5">
                <li v-for="(menu, index) in menus" :key="index" class="nav-menu nav-menu-animation "
                    :class="$route.name == menu.name ? 'active' : null">
                    <router-link :to="{ name: menu.name }">{{ menu.title }}</router-link>
                </li>
            </ul>
            <a href="tel://+998712009669" class="flex flex-row items-center cursor-pointer">
                <Phone class="h-4" classNew="fill-text-gray" />
                <span class="text-text-gray">
                    +998 71 <span class="text-violet font-bold">200 96-36</span>
                </span>
            </a>
            <ul class="flex flex-row items-center gap-x-5">
                <li class="cursor-pointer">
                    <Search class="h-5" classNew="fill-violet" />
                </li>
                <li class="flex gap-x-2 cursor-pointer">
                    <div class="w-7 h-7 flex items-center justify-center rounded-full bg-[#EF7F1A]">
                        <User class="w-4" classNew="fill-white" />
                    </div>
                    Shaxsiy kabinet
                </li>
                <li class="flex flex-row items-center gap-x-2 text-violet cursor-pointer">
                    O'z
                    <ChevorDown class="w-5 h-5" classNew="fill-line-gray" />
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import ChevorDown from '@/ui-components/icons/ChevorDown.vue';

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
                    name: 'bizHaqimizda',
                    sub: []
                },
                {
                    title: 'Mijozlarga',
                    name: 'mijozlarga',
                    sub: []
                },
                {
                    title: 'Xizmatlar',
                    name: 'xizmatlar',
                    sub: []
                },
                {
                    title: 'Vakansiya',
                    name: 'vakansiya',
                    sub: []
                },
                {
                    title: 'Biz bilan bog\'lanish',
                    name: 'aloqa',
                    sub: []
                },
            ]
        }
    }
}
</script>
<style scoped></style>