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
                            Xalqaro yetkazib berish
                        </div>
                        <img src="@/assets/images/xalqaro-yetkazish.png" alt="image"
                            class="absolute bottom-0 right-0 w-96" srcset="">
                    </div>
                </div>

                <p class="txt-big max-md:txt-normal max-sm:txt-small mt-7">
                    EMU ning halqaro kuryerlik xizmati orqali Siz dunyoning 165 ta davlatiga pochta va kuryerlik
                    jo‘natmalaringizni tez va hamyonbop narxlarda jo‘natish imkoniyatiga egasiz. Bundan tashqari Rossiya
                    Fedaratsiyasi, Qozoqston, Qirg‘iziston va Tojikiston Respublikalari uchun maxsus arzonlashtirilgan
                    tarif ishlab chiqilgan.
                    <br>
                    <br>
                    ​Halqaro kuryerlik jo‘natmalar EMU ning barcha ofislaridan qabul qilinadi va oluvchining
                    manziligacha yetkazib beriladi. Tariflar va yetkazib berish muddatlariToshkent shahridan
                    hisoblangan. 
                    ​Xujjatlar 5 kg gacha qabul qilinadi 5 kg dan keyin Posilka tarifiga o‘tkailadi.
                </p>
                <b class="h5 max-md:h6 max-sm:h7 block mt-5">
                    ​Halqaro kuryerlik jo‘natmalarida tariflar 2 ga bo‘lingan:
                </b>
                <ul class="list-disc list-inside ml-3 mt-4 txt-big max-md:txt-normal max-sm:txt-small">
                    <li>Xujjatlar</li>
                    <li>​Posilkalar</li>
                </ul>
                <p class="txt-big max-md:txt-normal max-sm:txt-small mt-7">
                    ​Xujjatlar 5 kg gacha qabul qilinadi 5 kg dan keyin Posilka tarifiga o‘tkailadi.
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
        <Modal title="Xizmatdan foydalanish" :isOpen="isOpen" @close="closeModal">

            <div class="h5 my-10 text-center">Xizmatdan foydalanish uchun ma’lumotlaringizni qoldiring</div>

            <Input label="Sizning ismingiz" placeholder="Ism" :required="true" v-model="ino" />
            <InputPhone label="Telefon raqamingiz" :required="true" v-model="ino" />
            <InputSelect label="Biznes faoliyatingiz" :required="true" v-model="ino" />

            <p class="txt-small text-center">Menedjerlarimiz siz bilan tez orada bog’lanishadi</p>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModal" title="Jo’natish" class="w-full" />
            </div>
        </Modal>
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
            koropka: true,
            isOpen: false,
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
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