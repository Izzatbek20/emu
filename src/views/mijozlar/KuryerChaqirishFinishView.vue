<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Kuryer chaqirish</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <div class="h4">
                    Yukingizni olib ketish uchun kuryerimiz tez orada yo’lga chiqadi. Iltimos berilgan ma’lumotlar
                    tog’riligini yana bir marta tasdiqlang
                </div>
                <div class="flex flex-row max-md:flex-col gap-7 mt-10">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">Kuryer chaqirish</h2>

                        <InputPreview label="Olib ketish joy" :value="calculator.from.adress" class="mb-6" />
                        <InputPreview label="Jo’natuvchining ism familiyasi:" :value="calculator.from.fullname"
                            class="mb-6" />
                        <InputPreview label="Jo’natuvchining telefon raqami:" :value="`+998 ${calculator.from.phone}`"
                            class="mb-6" />
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
                        <InputPreview label="Qabul qilish joyi:" :value="calculator.to.adress" class="mb-6" />
                        <InputPreview label="Qabul qiluvchining ism familiyasi:" :value="calculator.to.fullname"
                            class="mb-6" />
                        <InputPreview label="Jo’natuvchining telefon raqami:" :value="`+998 ${calculator.to.phone}`"
                            class="mb-6" />
                    </div>
                </div>
                <div class="flex items-start gap-6 mt-10">
                    <ButtonViolet :disabled="loading" @click="submit" title="Barcha ma’lumotlar tog’ri" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'xizmlatlar'" />
            </div>
        </div>
        <!-- Modal -->
        <Modal title="SMS kod" :isOpen="isOpen" @close="closeModal">

            <div class="txt-big my-10 text-center">Sizning so'rovingizni tasdiqlash maqsadida telefon raqamingizga SMS
                orqali kod jo'natildi. Bu kod orqali shaxsingizni identifikatsiya qilishingiz mumkin.</div>

            <!-- <form action="#"> -->
            <h5 class="h5 text-center">Iltimos, SMS kodni kiriting</h5>
            <div class="grid grid-cols-6 gap-3 max-sm:gap-1 mt-2">
                <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
            </div>

            <div
                class="flex max-[360px]:flex-row items-center justify-between gap-2 mt-8 mb-4 txt-normal max-md:txt-small">
                <router-link :to="''" class="text-violet nav-menu nav-menu-animation txt-normal max-md:txt-small mb-0">
                    Yana bir marta kod jo’natish
                </router-link>
                <div class="text-gray txt-normal max-md:txt-small">59 soniya</div>
            </div>
            <ButtonVioletLogin @click="closeModal" title="Kirish" class="mx-auto mt-10 " />
            <!-- </form> -->
        </Modal>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { XMLBuilder } from 'fast-xml-parser';
import { mapState } from 'vuex';

gsap.registerPlugin(ScrollTrigger)
const build = new XMLBuilder({
    attributeNamePrefix: '@', // Atributlarni belgilash
    textNodeName: '#text', // Matn elementlari nomini belgilash
    ignoreAttributes: false // Atributlarni o'xtirmashtirish
});

// { "to": { "fullname": "Sapiente omnis quas ", "phone": "32 232 32 32", "city": "Бухара", "adress": "Бухарская область, Бухара, Qui minima ea quibus, Aliquam ipsam aute m, Obcaecati at velit e, Facilis veritatis qu, Possimus dolore vol", "yetkazibBerish": "1" }, "from": { "fullname": "Magnam odio qui laud", "phone": "23 232 32 32", "city": "Андижан", "adress": "Бухарская область, Андижан, Sit facilis quisqua, Et eum rerum similiq, Tempor debitis esse, Numquam dolor aliqua, Voluptatem aut excep" }, "jonatmaTuri": "Бошқа...", "weight": 1, "w": 0, "h": 0, "l": 0, "price": 10000, "service": 1, "xizmatXaqi": "NO" }
export default {
    data() {
        return {
            login: null,
            isOpen: false,
            loading: false // Loading flag
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    computed: {
        ...mapState({
            calculator: state => state.courier.calculator,
            services: state => state.courier.services
        }),
        // kuryerChaqirish() {
        //     return this.services.service.find(item => item.code == this.calculator.from.kuryerChaqirish).name
        // }
    },
    methods: {
        async submit() {

            this.loading = true;

            this.$recaptcha('login').then((token) => {
                this.$store.dispatch('createOrder', build.build({
                    'neworder': {
                        "auth": {
                            "@extra": 8,
                            "@login": "login",
                            "@pass": "pass",
                        },
                        "order": {
                            "sender": {
                                "person": this.calculator.from.fullname,
                                "phone": this.calculator.from.phone,
                                "town": this.calculator.from.city,
                                "address": this.calculator.from.adress,
                            },
                            "receiver": {
                                "person": this.calculator.to.fullname,
                                "phone": this.calculator.to.phone,
                                "town": this.calculator.to.city,
                                "address": this.calculator.to.adress,
                            },
                            "service": this.calculator.to.yetkazibBerish,
                            "receiverpays": this.calculator.xizmatXaqi,
                            "items": {
                                "item": {
                                    "@mass": this.calculator.weight ?? 1,
                                    "#text": this.calculator.jonatmaTuri,
                                }
                            },
                            "packages": {
                                "package": {
                                    "@mass": this.calculator.weight ?? 1,
                                    "@width": this.calculator.w ?? 1,
                                    "@height": this.calculator.h ?? 1,
                                    "@length": this.calculator.l ?? 1,
                                    "#text": this.calculator.jonatmaTuri,
                                }
                            }
                        },
                    }
                })).then(response => {
                    let redirect = false;
                    this.isOpen = true
                    // if (redirect) {
                    //     this.$router.push({ name: 'xizmatXisoblashFinish' })
                    // }
                })


            });
        },
        checkCalculator() {
            if (!this.calculator.to.fullname || !this.calculator.from.fullname) {
                this.$router.go(-1)
            }
        },
        closeModal() {
            this.isOpen = false
        }
    },
    mounted() {
        this.checkCalculator()

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