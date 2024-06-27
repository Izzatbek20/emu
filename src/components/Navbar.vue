<template>
    <nav class="bg-white py-4 fixed w-full top-0 left-0 z-[99999]">
        <div class="container-rs flex flex-row justify-between items-center mx-auto gap-3">
            <div class="flex flex-row justify-between items-center gap-6">
                <img class="cursor-pointer max-md:h-11" src="@/assets/images/logo/emulogo.png" alt="logo" srcset=""
                    @click="$router.push('/')">
                <ul class="flex flex-row items-center gap-x-2 xs:max-md:hidden">
                    <li class="cursor-pointer group transition-colors">
                        <a href="https://www.instagram.com/emu_tashkent" target="_blank" rel="noopener noreferrer">
                            <Instagram :fillColor="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                        </a>
                    </li>
                    <li class="cursor-pointer group">
                        <a href="https://t.me/emuadmin" target="_blank" rel="noopener noreferrer">
                            <Telegram :fillColor="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                        </a>
                    </li>
                    <li class="cursor-pointer group">
                        <a href="https://www.facebook.com/emucargo?mibextid=LQQJ4d" target="_blank"
                            rel="noopener noreferrer">
                            <Facebook :fillColor="'nav-messanger-gray group-hover:nav-messanger-orange'" />
                        </a>
                    </li>
                </ul>
            </div>
            <ul class="flex flex-row items-center gap-x-5 xs:max-xl:hidden">
                <li v-for="(menu, index) in menus" :key="index" :id="'nab-link-' + index" class="relative z-50">
                    <router-link :to="getRouteLink(menu)" @click="select('nab-link-' + index, menu.sub)"
                        :class="{ 'active-nav': isActive(index, menu.name) }" class="nav-menu nav-menu-animation">
                        {{ $t(menu.title) }}
                    </router-link>
                </li>
            </ul>

            <div class="flex flex-row items-center gap-x-5">
                <a href="tel://+998712009669" class="flex flex-row items-center cursor-pointer xs:max-md:hidden">
                    <Phone class="size-4 h-4" :fillColor="'fill-text-gray'" />
                    <span class="text-text-gray">
                        +998 71 <span class="text-violet font-bold">200 96-69</span>
                    </span>
                </a>
                <ul class="flex relative flex-row items-center gap-x-5">
                    <li class="cursor-pointer relative">
                        <SearchPanel />
                    </li>
                    <li id="profil" class="max-sm:hidden relative">
                        <div v-if="isLoginIn" @click="select('profil', profil)"
                            class="flex items-center gap-x-2 cursor-pointer w-full h-full">

                            <div
                                class="w-7 h-7 flex items-center justify-center rounded-full bg-[#EF7F1A] overflow-hidden">
                                <img v-if="currentUser && currentUser.user_photos && currentUser.user_photos.url"
                                    :src="origin + '/' + currentUser.user_photos.url" alt="" srcset="" class="">
                                <User v-else class="size-3 h-4" :fillColor="'fill-white'" />
                            </div>
                            {{ $t('menu.shaxsiyKabinet') }}
                        </div>
                        <div v-else @click="$router.push({ name: 'login' })"
                            class="flex items-center gap-x-2 cursor-pointer w-full h-full">

                            <div
                                class="w-7 h-7 flex items-center justify-center rounded-full bg-[#EF7F1A] overflow-hidden">
                                <img v-if="currentUser && currentUser.user_photos && currentUser.user_photos.url"
                                    :src="origin + '/' + currentUser.user_photos.url" alt="" srcset="" class="">
                                <User v-else class="size-3 h-4" :fillColor="'fill-white'" />
                            </div>
                            {{ $t('profil.login') }}
                        </div>
                    </li>
                    <li id="til" class="relative">
                        <div class="flex items-center flex-row h-7 gap-x-2 text-violet cursor-pointer w-full h-full"
                            @click="select('til', til)">
                            {{ $t('tilInfo') }}
                            <ChevorDown class="size-4" :fillColor="'fill-line-gray'" />
                        </div>
                    </li>
                </ul>
                <div @click="menuMobileOpen"
                    class="rounded-lg p-2 border border-line-gray hidden xs:max-xl:block cursor-pointer gap-12">
                    <Menu />
                </div>

                <!-- Mobile menu -->
                <div v-show="menuMobile"
                    class="absolute right-0 top-0 bg-white rounded-xl shadow-xl z-50 w-full flex-col place-items-end p-5 py-8 hidden xs:max-xl:flex xs:max-sm:h-dvh overflow-y-scroll">
                    <div @click="menuMobileClose"
                        class="rounded-lg border border-line-gray hidden xs:max-xl:flex cursor-pointer w-8 h-8 items-center justify-center">
                        <CloseX @click="menuMobile != menuMobile" />
                    </div>
                    <ul class="flex flex-col place-items-end gap-12 mt-12">
                        <li id="profil" class="hidden max-sm:block relative">
                            <router-link :to="{ name: 'profil' }" @click="select('nab-link-' + 15, [])"
                                class="nav-menu nav-menu-animation">
                                <div @click="select('profil', profil)"
                                    class="flex items-center gap-x-2 cursor-pointer w-full h-full">

                                    <div class="w-7 h-7 flex items-center justify-center rounded-full bg-[#EF7F1A]">
                                        <User class="size-3 h-4" :fillColor="'fill-white'" />
                                    </div>
                                    {{ $t('menu.shaxsiyKabinet') }}
                                </div>
                            </router-link>
                        </li>
                        <li v-for="(menu, index) in menus" :key="index" class="relative z-50"
                            :class="$route.name == menu.name ? 'active' : null">
                            <template v-if="menu.sub.length == 0">
                                <router-link :to="getRouteLink(menu)" @click="select('nab-link-' + index, menu.sub)"
                                    :class="{ 'active-nav': isActive(index, menu.name) }"
                                    class="nav-menu nav-menu-animation">
                                    {{ $t(menu.title) }}
                                </router-link>
                            </template>
                            <template v-else>
                                <router-link :to="{ name: menu.sub[0].name }" @click="navDataChange([])"
                                    :class="{ 'active-nav': isActive(index, menu.name) }"
                                    class="nav-menu nav-menu-animation">
                                    {{ $t(menu.title) }}
                                </router-link>
                            </template>
                        </li>
                        <li class="hidden xs:max-md:block">
                            <a href="tel://+998712009669" class="flex flex-row items-center cursor-pointer">
                                <Phone class="size-4 h-4" :fillColor="'fill-text-gray'" />
                                <span class="text-text-gray">
                                    +998 71 <span class="text-violet font-bold">200 96-69</span>
                                </span>
                            </a>
                        </li>
                        <li class="hidden xs:max-md:block">
                            <ul class="flex flex-row items-center gap-x-2">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Active Nav -->
        <template v-if="menuMini">
            <Teleport id="menuBottom" :to="'#' + navTo">
                <div class="absolute top-0 left-0 bg-white rounded-xl shadow-xl z-50 translate-y-20"
                    :class="[((navTo == 'nab-link-3' || navTo == 'nab-link-2') ? 'w-[26rem]' : 'w-56'), (navTo == 'profil' || navTo == 'til') ? 'left-auto right-0' : null]">
                    <ul class="w-full h-full py-2 flex flex-col">
                        <!-- Tildan tashqari barcha uchun sub menu -->
                        <router-link v-if="navTo != 'til'" @click="navDataChange([])" :to="{ name: item.name }"
                            v-for="(item, i) in navData" :key="i + 'sub'"
                            class="mx-4 my-2 text-small nav-menu nav-menu-animation"
                            :class="{ 'active-sub': isActive(0, item.name) }">
                            {{ $t(item.title) }}
                        </router-link>

                        <!-- Til menuda bu routerlink ko'rinadi -->
                        <router-link v-else @click="lang = item.name, navDataChange([])" :to="''"
                            v-for="(item, i) in navData" :key="i + 'subTil'"
                            class="mx-4 my-2 text-small nav-menu nav-menu-animation flex items-center gap-2"
                            :class="{ 'active-sub': isActive(0, item.name) }">
                            <component :is="item.icon"></component>
                            {{ $t(item.title) }}
                        </router-link>
                    </ul>
                </div>
            </Teleport>
        </template>
    </nav>
</template>
<script>
import { ref } from 'vue';
import { mapGetters, mapState } from 'vuex';
import { menus, profil, til } from '@/constants/navbar.js';
import { setItem } from '@/helpers/rwLocalStorage';
import { gettersTypes } from '@/store/modules/types';
import SearchPanel from '@/components/SearchPanel.vue'


export default {
    data() {
        return {
            lang: this.$i18n.locale,
            menus: menus,
            profil: profil,
            til: til,
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
        }
    },
    components: {
        SearchPanel,
    },
    computed: {
        ...mapState({
            menuMini: state => state.main.menuMini,
            menuMobile: state => state.main.menuMobile,
            vakansiyaBreanch: state => state.emuAdmin.vakansiyaBreanch,
        }),
        ...mapGetters({
            currentUser: gettersTypes.currentUser,
            isLoginIn: gettersTypes.isLoginIn
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
        getRouteLink(menu) {
            // Agar menu.id mavjud bo'lsa, uni params ga qo'shamiz
            return menu.id ? { name: menu.name, params: { id: menu.id } } : { name: menu.name };
        },
        select(tagId, data) {
            this.navTo = tagId;
            this.navDataChange(data)
        },
        navDataChange(data) {
            this.navData = data.length > 0 ? data : null
            this.miniMenuToggle()
            this.menuMobileClose()
        },
        miniMenuToggle() {
            this.$store.commit('miniMenuToggle', (this.navData && this.navTo) ? true : false)
        },
        menuMobileOpen() {
            this.$store.commit('menuMobileToggle', true)
        },
        menuMobileClose() {
            this.$store.commit('menuMobileToggle', false)
        },
        isActive(index, link = null) {
            let res = false;
            if (this.menus[index].sub.length > 0) {
                this.menus[index].sub.forEach(element => {
                    if (this.$route.name === element.name) {
                        res = true;
                    }
                });
            } else {
                res = this.$route.name === link;
            }
            return res;
        },
    },
    mounted() {

        // Vokansiayalrni yuklab olamiz
        this.$store.dispatch('vacancyBreanch')

        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    watch: {
        lang(newLang, oldLang) {
            setItem('lang', newLang);
            this.$i18n.locale = newLang;
            const currentPath = this.$route.fullPath;
            if (currentPath) {
                let newPath = currentPath;

                if (newPath.startsWith(`/${oldLang}`)) {
                    newPath = newPath.replace(`/${oldLang}`, `/${newLang}`);
                } else {
                    newPath = `/${newLang}${currentPath}`;
                }

                this.$router.push(newPath);
            }
        },
        vakansiyaBreanch(newVal) {
            if (newVal) {
                const nav = newVal.find((item, index) => index == 0);
                if (nav) {
                    const vakansiya = this.menus.find(item => item.title == 'menu.vakansiya')
                    vakansiya.id = nav.breanch_id
                    vakansiya.name = 'vakansiyaId'
                }
            }
        }
    }
}
</script>
<style scoped>
.active-nav,
.active-sub {
    color: #8F2B83 !important;
}
</style>