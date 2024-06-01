<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Kuryer chaqirish</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <form @submit.prevent="check" class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
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
                <div class="h5 mt-10">
                    Xizmat haqini kim to’laydi?
                </div>
                <div class="flex flex-row gap-x-6 gap-y-3 mt-2">
                    <Radio label="Jo’natuvchi" :value="'NO'" :disabled="loading" v-model="xizmatXaqi.value"
                        :error="xizmatXaqi.error" />
                    <Radio label="Qabul qiluvchi" :value="'YES'" :disabled="loading" v-model="xizmatXaqi.value"
                        :error="xizmatXaqi.error" />
                </div>
                <p class="text-red text-xs italic" v-if="xizmatXaqi.error">
                    {{ xizmatXaqi.error }}
                </p>
                <div class="h5 mt-10">
                    Tarif bo’yicha yukning taxminiy narxi:
                </div>
                <div class="h3-2 text-violet">
                    {{ Intl.NumberFormat('uz-UZ', { maximumSignificantDigits: 3 }).format(calculator.price) }} so’m
                </div>
                <hr class="text-color_active my-10">

                <div class="h4">
                    Tarif bo’yicha kelishilgan narxga ro’zimisiz?
                </div>
                <div class="flex items-start gap-6 mt-10">
                    <ButtonViolet title="Xa, jo’natish" :disabled="loading" />
                    <ButtonOranger title="Yoq, qayta xisoblash" @click="$router.push({ name: 'kuryerChaqirish' })" />
                </div>

            </form>
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
import { mapState } from 'vuex';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            xizmatXaqi: {
                value: 'NO',
                error: null
            },
            loading: false,
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
        check() {

            let error = this.validate()

            if (error) {
                return;
            }

            if (!error) {
                this.$store.commit('addCalculatorAttribute', {
                    name: 'xizmatXaqi',
                    code: this.xizmatXaqi.value
                })

                this.$router.push({ name: 'kuryerChaqirishFinish' })
            }
        },
        validate() {
            let error = false;

            const checkField = (field, errorMessage, phone = false) => {
                if (!field.value) {
                    field.error = errorMessage;
                    error = true;
                } else {
                    if (phone && field.value && field.value.length != 12) {
                        field.error = this.$t('validate.phone');
                        error = true
                    } else {
                        field.error = null;
                    }
                }
            };

            // Validate 'from' fields
            checkField(this.xizmatXaqi, this.$t('validate.required'));

            return error;
        },
        checkCalculator() {
            if (!this.calculator.to.fullname || !this.calculator.from.fullname) {
                this.$router.go(-1)
            }
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