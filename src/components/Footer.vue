<template>
    <div v-if="show" class="mt-20 py-10 px-5 bg-violet text-white">
        <div class="container-rs">
            <div class="flex flex-col">
                <div
                    class="grid grid-cols-6 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-8 max-xl:gap-6 max-md:gap-6 relative">
                    <ul v-for="(menu, index) in menus" :key="1 + index">
                        <li class="uppercase h7 max-lg:txt-micro-2-600">{{ menu.title }}</li>
                        <li class="mt-5 max-lg:mt-4">
                            <ul>
                                <li v-if="menu.sub" v-for="(sub, index) in menu.sub" :key="2 + index"
                                    class="txt-micro max-lg:txt-nano hover:underline mt-4 max-lg:mt-3">
                                    <a href="#">{{ sub.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <img src="@/assets/images/ias.png" alt="ias" srcset=""
                        class="absolute max-md:relative right-0 bottom-0">
                </div>

                <hr class="opacity-35 my-10">

                <div class="flex max-sm:flex-col gap-10 max-xl:gap-6">
                    <div class="basis-1/5">
                        <img src="@/assets/images/logo/emulogo_white.png" alt="logo-white" srcset="">
                    </div>
                    <div class="flex flex-row items-start justify-between gap-4">
                        <div class="flex-1 grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-xl:gap-6 text-wrap">
                            <div class="flex items-start gap-2">
                                <Clock :classNew="'fill-white'" class="size-5" />
                                <div class="flex flex-col items-start">
                                    <div class="h7 max-lg:txt-micro-2-600">Ish vaqti</div>
                                    <div class="txt-micro max-lg:txt-nano ">
                                        24 soat
                                        (Bayram kunlaridan tashqari)
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Phone :fillColor="'fill-white'" class="size-5" />
                                <div class="flex flex-col items-start ">
                                    <div class="h7 max-lg:txt-micro-2-600">Telefon</div>
                                    <div class="txt-micro max-lg:txt-nano ">
                                        +998712009669
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Marker :fillColor="'fill-white'" class="size-5" />
                                <div class="flex flex-col items-start ">
                                    <div class="h7 max-lg:txt-micro-2-600">Manzil</div>
                                    <div class="txt-micro max-lg:txt-nano ">
                                        O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start gap-2">
                                <Email :fillColor="'fill-white'" class="size-5" />
                                <div class="flex flex-col items-start ">
                                    <div class="h7 max-lg:txt-micro-2-600">E-mail</div>
                                    <div class="txt-micro max-lg:txt-nano ">
                                        info@emu.uz
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-xl:gap-6">
                            <div>
                                <div class="uppercase h7 max-lg:txt-micro-2-600">Ijtimoiy tarmoqlar</div>
                                <div class="mt-6 txt-micro max-lg:txt-nano">
                                    Bizga a’zo boling va kuzatib boring!
                                </div>
                                <ul class="flex flex-row items-center gap-x-2 mt-4">
                                    <li class="cursor-pointer group transition-colors">
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Instagram :fillColor="'fill-white group-hover:fill-orange'" />
                                        </a>
                                    </li>
                                    <li class="cursor-pointer group">
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Telegram :fillColor="'fill-white group-hover:fill-orange'" />
                                        </a>
                                    </li>
                                    <li class="cursor-pointer group">
                                        <a href="http://" target="_blank" rel="noopener noreferrer">
                                            <Facebook :fillColor="'fill-white group-hover:fill-orange'" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div class="h7 max-lg:txt-micro-2-600">
                                    Savol yoki takliflar bo’yicha
                                </div>
                                <ButtonWhiteViolety title="Biz bilan bog’lanish" titleClass="h7 max-lg:txt-micro-2-600"
                                    class="mt-4 p-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-ceneter mt-10">
                    <span class="txt-micro">2024 EMU</span>
                    <span class="txt-micro">
                        <a href="http://" target="_blank" rel="noopener noreferrer">Crud Group</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { menus } from '@/constants/footer';


export default {
    data() {
        return {
            show: true,
            menus: menus
        }
    },
    mounted() {
        // Shu shartlar qanoqatlantirsa footer ko'rinmasligi kerak
        const routeName = this.$route.name;
        // console.log(routeName);
        if (routeName == 'login' || routeName == 'register' || routeName == 'sms' || routeName == 'register-2') {
            this.show = false
        }
    }
}
</script>
<style></style>