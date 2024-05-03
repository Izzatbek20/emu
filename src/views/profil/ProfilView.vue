<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'profil'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Profil</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div
                    class="relative w-36 h-36 max-lg:mx-auto bg-[#F7F5F7] border border-gray border-dashed rounded-full flex items-center justify-center">
                    <User :fillColor="'fill-icon-gray'" class="w-10 h-10" />
                    <div
                        class="absolute bg-violet right-0 bottom-0 w-12 h-12 rounded-full flex items-center justify-center">
                        <Edit :fillColor="'fill-white'" />
                    </div>
                </div>

                <div class="grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-6">
                    <Input label="Ism" placeholder="Ism" v-model="ino3" />
                    <Input label="Familiya" placeholder="Familiya" v-model="ino3" />
                    <InputPhone label="Telefon raqamingiz" :required="true" placeholder="Telefon" v-model="ino3" />
                    <Textarea class="col-span-2 max-lg:col-span-1" label="Manzil" v-model="ino3" />
                </div>

                <router-link :to="'#'" class="nav-menu nav-menu-animation">Parol o‘zgartirish</router-link>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet title="Saqlash" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'profil'" />
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