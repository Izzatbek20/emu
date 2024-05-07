<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'xizmlatlar'" class="max-xl:h-14 my-10" />
        </div>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <div
                    class="w-full h-96 flex items-center max-md:items-start bg-violet rounded-3xl relative overflow-hidden">
                    <div class="flex p-10 items-center max-md:items-start max-md:py-8">
                        <div
                            class="w-2/5 max-lg:w-3/5 max-md:w-4/6 max-sm:w-4/5 text-white h1 max-2xl:h2 max-sm:h3 z-20">
                            Individual yuk tashish xizmati
                        </div>
                        <img src="@/assets/images/individual.png" alt="image" class="absolute bottom-0 right-0 w-96"
                            srcset="">
                    </div>
                </div>

                <p class="txt-big max-md:txt-normal max-sm:txt-small mt-7">
                    Yuk tashish xizmati orqali Siz barcha turdagi yuklaringizni Respublika bo‘ylab yetkazib berishingiz
                    mumkin. Bugunda EMU kompaniyasida jami 40 dan ortiq yuk tashish uchun mo‘ljallangan Damas VAN, Damas
                    Labo, Forza, Mersedezbenz Sprinter, Ford, Isuzi, Man markali avtomashinalar bilan taʼminlangan. Biz
                    Sizga yuklaringizni Respublika bo‘ylab tez va ishonchli yetkazib berishni kafolatlaymiz. Bizda
                    profisional xaydovchilar va yuklovchi xodimlar bulib, yuklaringiz tezda sifatli yuklanib
                    beligilangan manzil buyicha yetkazib beriladi.
                    <br>
                    <br>
                    ​​Yuk tashish xizmati narxlari yetkazib berish masofasi, atomabil turi, yuk hajmiga qarab indiduval
                    hisoblanadi.  ​
                </p>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet @click="submit" title="Xizmatdan foydalanish" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'xizmlatlar'" />
            </div>
        </div>
        <!-- Modal -->
        <XizmatModal title="Xizmatdan foydalanish" :isOpen="isOpen" @close="closeModal" />
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import XizmatModal from '@/ui-components/XizmatModal.vue';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            isOpen: false,
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, XizmatModal
    },
    methods: {
        submit() {
            this.isOpen = true
        },
        closeModal() {
            this.isOpen = false
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

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>