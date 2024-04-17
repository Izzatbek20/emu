<template>
    <div>
        <div class="flex flex-row items-center h-96 gap-8 mt-10">
            <div class="h-full flex items-center bg-violet basis-3/4 rounded-3xl relative overflow-hidden">
                <Corusel />
            </div>
            <div class="h-full overflow-hidden basis-1/4 rounded-3xl bg-white">
                <ul class="h-full grid grid-cols-1">
                    <li
                        class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
                        <div
                            class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
                            <Icons class="text-violet" name="calculate" /> Yuk narxini xisoblash
                        </div>
                    </li>
                    <li
                        class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
                        <div
                            class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
                            <Icons color="text-violet" name="courier" /> Kuryer chaqirish
                        </div>
                    </li>
                    <li
                        class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
                        <div
                            class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
                            <Icons color="text-violet" name="box-search" /> Yukni kuzatish
                        </div>
                    </li>
                    <li
                        class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
                        <div
                            class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 w-full h-full flex items-center">
                            <Icons color="text-violet" name="marker-pin" /> Ofislarimiz
                        </div>
                    </li>
                    <li
                        class="px-[2rem] flex items-center justify-between cursor-pointer group hover:bg-violet hover:text-white transition-colors duration-700">
                        <div
                            class="border-b-[1px] border-line-gray group-hover:border-violet ease-in-out transition-colors duration-700 last:border-b-0 w-full h-full flex items-center">
                            <Icons color="text-violet" name="hands" /> Hamkorlik bo'yicha
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Information -->
        <Info />
        <InfoBanner :type="1" :bg-color="'bg-orange'" :title="'Har kuni 15 000dan ortiq odam xizmatimizdan foydalanadi'"
            :bg-title="'Xizmatdan foydalanish'" />
        <Xizmatlar />
        <Ofislar />
        <BizniMijozlar />

        <h2 class="h1 text-center pt-20">
            Bizning mijozlarimiz
        </h2>
        <Mijoz />

        <h2 class="h1 text-center pt-20">
            Xizmatlarimiz
        </h2>
        <InfoBanner :type="2" :bg-color="'bg-violet'"
            :title="'Telegram BOT orqali jo’natmalaringizni oson jo’nating va qabul qiling'"
            :bg-title="'Telegram Bot'" />

        <h2 class="h1 text-center pt-20">
            Yangiliklar
        </h2>
        <Yangiliklar />

    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Corusel from '@/components/Corusel.vue'
import Info from '@/components/Info.vue'
import InfoBanner from '@/components/InfoBanner.vue';
import Xizmatlar from '@/components/Xizmatlar.vue';
import Ofislar from '@/components/Ofislar.vue';
import BizniMijozlar from '@/components/BizniMijozlar.vue';
import Mijoz from '@/components/Mijoz.vue';
import Yangiliklar from '@/components/Yangiliklar.vue';

export default {
    components: {
        Corusel, Info, InfoBanner, Xizmatlar, Ofislar, BizniMijozlar, Mijoz, Yangiliklar
    }
}
</script>