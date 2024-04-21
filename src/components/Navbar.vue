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

            <div class="flex flex-row items-center gap-x-5">
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
                    <li id="profil" class="flex gap-x-2 cursor-pointer max-sm:hidden relative"
                        @click="select('profil', profil)">
                        <div class="w-7 h-7 flex items-center justify-center rounded-full bg-[#EF7F1A]">
                            <User class="size-3 h-4" :fillColor="'fill-white'" />
                        </div>
                        Shaxsiy kabinet
                    </li>
                    <li id="profil" class="flex flex-row items-center gap-x-2 text-violet cursor-pointer relative"
                        @click="select('profil', til)">
                        O'z
                        <ChevorDown class="size-5" :fillColor="'fill-line-gray'" />
                    </li>
                </ul>
                <div @click="miniMenuMobileOpen"
                    class="rounded-lg p-2 border border-line-gray hidden xs:max-xl:block cursor-pointer gap-12">
                    <Menu />
                </div>
                <div v-show="menuMini"
                    class="absolute right-0 top-0 bg-white rounded-xl shadow-xl z-50 w-full flex-col place-items-end p-5 py-8 hidden xs:max-xl:flex">
                    <div @click="miniMenuMobileClose"
                        class="rounded-lg border border-line-gray hidden xs:max-xl:flex cursor-pointer w-8 h-8 items-center justify-center">
                        <CloseX @click="menuMini != menuMini" />
                    </div>
                    <ul class="flex flex-col place-items-end gap-12 mt-12">
                        <li v-for="(menu, index) in menus" :key="index" class="relative z-50"
                            :class="$route.name == menu.name ? 'active' : null">
                            <template v-if="menu.sub.length == 0">
                                <router-link :to="{ name: menu.name }" @click="select('nab-link-' + index, menu.sub)"
                                    class="nav-menu nav-menu-animation">
                                    {{ menu.title }}
                                </router-link>
                            </template>
                            <template v-else>
                                <router-link :to="{ name: menu.sub[0].name }" @click="navDataChange([])"
                                    class="nav-menu nav-menu-animation">
                                    {{ menu.title }}
                                </router-link>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <template v-if="menuMini">
            <Teleport id="menuBottom" :to="'#' + navTo">
                <div class="absolute left-0 py-2 bg-white rounded-xl shadow-xl z-50"
                    :class="[(navTo == 'nab-link-3' ? 'w-[26rem]' : 'w-56'), (navTo == 'profil' || navTo == 'til') ? 'mt-20' : 'mt-12']">
                    <ul>
                        <router-link @click="navDataChange([])" :to="{ name: item.name }" v-for="(item, i) in navData"
                            :key="i + 'sub'"
                            class="block mx-4 my-2 text-gray-800 hover:bg-indigo-500 text-small nav-menu nav-menu-animation">
                            {{ item.title }}
                        </router-link>
                    </ul>
                </div>
            </Teleport>
        </template>
    </nav>
</template>
<script>
import { ref } from 'vue';
import { mapState } from 'vuex';


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
                    name: null,
                    sub: [

                        {
                            title: 'Xizmat narxini xisoblash',
                            name: 'xizmatXisoblash',
                        },
                        {
                            title: 'Ofislar',
                            name: 'ofislarimiz',
                        },
                        {
                            title: 'Kuryer chaqirish',
                            name: 'kuryerChaqirish',
                        },
                        {
                            title: 'Ko’p beriladigan savollar',
                            name: 'savollar',
                        },
                        {
                            title: 'Shartnoma va umumiy shartlar',
                            name: 'umumiyShartlar',
                        },

                    ]
                },
                {
                    title: 'Xizmatlar',
                    name: 'xizmatlar',
                    sub: [

                        {
                            title: 'Ichki kuryerlik xizmatlar',
                            name: 'yangiliklar',
                        },
                        {
                            title: 'Xalqaro kuryerlik xizmatlar',
                            name: 'raxbariyat',
                        },
                        {
                            title: 'Ustama to’lovli pochta jo’natmalarini yetkazib berish',
                            name: 'raxbariyat',
                        },
                        {
                            title: 'Fullfilment xizmati',
                            name: 'raxbariyat',
                        },
                        {
                            title: 'Yuk tashish xizmati',
                            name: 'raxbariyat',
                        },
                        {
                            title: 'EMU kargo xizmati',
                            name: 'raxbariyat',
                        },

                    ]
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
            ],
            profil: [
                {
                    title: 'Profil',
                    name: 'hududiy',
                },
                {
                    title: 'Qabul qilingan pochtalar',
                    name: 'yangiliklar',
                },
                {
                    title: 'Jo’natilgan pochtalar',
                    name: 'fikirlar',
                },
                {
                    title: 'Kirish / Chiqish',
                    name: 'fikirlar',
                }
            ],
            til: [
                {
                    title: 'O\'zbekcha',
                    name: 'hududiy',
                },
                {
                    title: 'Русский',
                    name: 'yangiliklar',
                },
                {
                    title: 'English',
                    name: 'fikirlar',
                }
            ]
        }
    },
    computed: {
        ...mapState({
            menuMini: state => state.main.menuMini
        })
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
            this.miniMenuToggle()
        },
        miniMenuToggle() {
            this.$store.commit('miniMenuToggle', (this.navData && this.navTo) ? true : false)
        },
        miniMenuMobileOpen() {
            this.$store.commit('miniMenuToggle', true)
        },
        miniMenuMobileClose() {
            this.$store.commit('miniMenuToggle', false)
        },
        // miniMenuClose() {
        //     if ((this.navData && this.navTo)) {
        //         this.$store.commit('miniMenuToggle', false)
        //     }
        // }
    },
    mounted() {
        // document.addEventListener('click', this.miniMenuClose);
    }
}
</script>
<style scoped></style>