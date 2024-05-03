<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Mijozlarimizning biz haqimizda fikrlari</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">Jo’natuvchi</h2>

                        <InputSelect label="Viloyat" v-model="ino3" />
                        <InputSelect label="Tuman" v-model="ino3" />
                        <InputSelect label="Kuryer chaqirish" class="w-[50%]" v-model="ino3" />
                    </div>
                    <div
                        class="w-[1.5px] max-md:w-auto max-md:h-[1.5px] bg-gradient-to-b from-[#8c3081c7] via-[#EF7F1A] to-[#8c3081c7] relative flex items-center justify-center">
                        <div
                            class="absolute w-10 h-10 rounded-full border bg-white flex items-center justify-center border-[#EF7F1A]">
                            <CheverRight :fillColor="'fill-violet'" class="max-md:rotate-90" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="h4 mb-8">Qabul qiluvchi</h2>
                        <InputSelect label="Viloyat" v-model="ino3" />
                        <InputSelect label="Tuman" v-model="ino3" />
                        <InputSelect label="Kuryer chaqirish" class="w-[50%]" v-model="ino3" />
                    </div>
                </div>
                <div class="flex felx-col">
                    <div class="basis-2/3 max-sm:basis-full">
                        <div class="gap-6">
                            <CheckBox label="Korobka" v-model="koropka" />
                            <Transition name="slide-fade">
                                <div v-if="koropka"
                                    class="grid grid-cols-3 max-sm:grid-cols-2 max-[360px]:grid-cols-1 gap-4">
                                    <InputConuter label="Kenglik (sm):" v-model="ino3" />
                                    <InputConuter label="Uzunlik (sm):" v-model="ino3" />
                                    <InputConuter label="Balandlik (sm):" v-model="ino3" />
                                </div>
                            </Transition>
                            <div class="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
                                <InputConuter label="Og’irlik (kg):" v-model="ino3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet title="Hisoblash" @click="$router.push({ name: 'xizmatXisoblashFinish' })" />
                    <span class="txt-small"><span class="text-red">*</span>Hisoblash uchun barcha qatorlar to’ldirilishi
                        shart</span>
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'mijoz'" />
            </div>
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            ino: '',
            ino2: '',
            ino3: 0,
            ino4: 'off',
            koropka: true
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
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