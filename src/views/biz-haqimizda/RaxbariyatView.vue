<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Raxbariyat</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10 ">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <RaxbariyatItem v-for="(item, i) in data" :key="i" :user="item" />
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" />
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