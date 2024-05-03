<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>
        <!-- Navigation -->
        <Navigation>O’zbekiston bo’yicha filiallarimiz ma’sullari</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">
                <div class="mb-4 w-full">
                    <h3 class="h3 max-xl:h4-2 mb-4">Toshkent viloyati</h3>
                    <RaxbariyatItem v-for="(item, i) in data" :key="i" :user="item" />
                </div>
                <div class="mb-4 w-full">
                    <h3 class="h3 max-xl:h4-2 mb-4">Andijon viloyati</h3>
                </div>
                <div class="mb-4 w-full">
                    <h3 class="h3 max-xl:h4-2 mb-4">Buxoro viloyati</h3>
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" class="mt-12" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import { data } from '@/constants/raxbariyat';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Bar
    },
    data() {
        return {
            data: data
        }
    },
    mounted() {
        let pin = document.getElementById("pin");
        let notPin = document.getElementById("pin-conatiner");

        ScrollTrigger.create({
            trigger: pin,
            start: "top 20%",
            end: () => `${notPin.offsetHeight - pin.offsetHeight}px 20%`,
            invalidateOnRefresh: true,
            pin: pin,
            pinSpacing: true,

        });
    }
}
</script>