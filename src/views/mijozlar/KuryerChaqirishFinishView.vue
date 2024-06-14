<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Kuryer chaqirish') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <div class="h4">
                    {{ $t('YukMalumotTekshir') }}
                </div>
                <div class="flex flex-row max-md:flex-col gap-7 mt-10">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Kuryer chaqirish') }}</h2>

                        <InputPreview :label="$t('Olib ketish joy')" :value="calculator.from.adress" class="mb-6" />
                        <InputPreview :label="`${$t('Jo’natuvchining ism familiyasi')}:`"
                            :value="calculator.from.fullname" class="mb-6" />
                        <InputPreview :label="`${$t('Jo’natuvchining telefon raqami')}:`"
                            :value="`+998 ${calculator.from.phone}`" class="mb-6" />
                    </div>
                    <div
                        class="w-[1.5px] max-md:w-auto max-md:h-[1.5px] bg-gradient-to-b from-[#8c3081c7] via-[#EF7F1A] to-[#8c3081c7] relative flex items-center justify-center">
                        <div
                            class="absolute w-10 h-10 rounded-full border bg-white flex items-center justify-center border-[#EF7F1A]">
                            <CheverRight :fillColor="'fill-violet'" class="max-md:rotate-90" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Qabul qiluvchi') }}</h2>
                        <InputPreview :label="`${$t('Qabul qilish joyi')}:`" :value="calculator.to.adress"
                            class="mb-6" />
                        <InputPreview :label="`${$t('Qabul qiluvchining ism familiyasi')}:`"
                            :value="calculator.to.fullname" class="mb-6" />
                        <InputPreview :label="`${$t('Qabul qiluvchining telefon raqami')}:`"
                            :value="`+998 ${calculator.to.phone}`" class="mb-6" />
                    </div>
                </div>
                <div class="flex items-start gap-6 mt-10">
                    <ButtonViolet :disabled="loading" @click="getSms" :title="$t('Barcha ma\'lumotlar to\'g\'ri')" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'mijoz'" />
            </div>
        </div>
        <!-- Modal -->
        <Modal :title="$t('SMS kod')" :isOpen="isOpen" :clickOutside="false" @close="closeModal">

            <div class="txt-big my-10 text-center">{{ $t('SmsyuborilgandaText') }}</div>

            <form ref="formSms" @submit.prevent="submit">
                <h5 class="h5 text-center">{{ $t('Iltimos, SMS kodni kiriting') }}</h5>
                <div class="grid grid-cols-6 gap-3 max-sm:gap-1 mt-2">
                    <InputSms @next-focus="nextFocus" @prevent-focus="preventFocus" :focus="focus" :id="1"
                        v-model="otpCode1" :error="error" :disabled="loading"
                        :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <InputSms @next-focus="nextFocus" @prevent-focus="preventFocus" :focus="focus" :id="2"
                        v-model="otpCode2" :error="error" :disabled="loading"
                        :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <InputSms @next-focus="nextFocus" @prevent-focus="preventFocus" :focus="focus" :id="3"
                        v-model="otpCode3" :error="error" :disabled="loading"
                        :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <InputSms @next-focus="nextFocus" @prevent-focus="preventFocus" :focus="focus" :id="4"
                        v-model="otpCode4" :error="error" :disabled="loading"
                        :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <InputSms @next-focus="nextFocus" @prevent-focus="preventFocus" :focus="focus" :id="5"
                        v-model="otpCode5" :error="error" :disabled="loading"
                        :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <InputSms @next-focus="nextFocus" @prevent-focus="preventFocus" :focus="focus" :id="6"
                        v-model="otpCode6" :error="error" :disabled="loading"
                        :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                </div>

                <div
                    class="flex max-[360px]:flex-row items-center justify-between gap-2 mt-8 mb-4 txt-normal max-md:txt-small">
                    <button type="button" v-if="retrySms" @click="getSms"
                        class="text-violet nav-menu nav-menu-animation txt-normal max-md:txt-small mb-0">
                        {{ $t('Yana bir marta kod jo’natish') }}
                    </button>
                    <button v-else class="text-[#be8fb7] cursor-wait txt-normal max-md:txt-small mb-0">
                        {{ $t('Yana bir marta kod jo’natish') }}
                    </button>
                    <div class="text-gray txt-normal max-md:txt-small">{{ minut }} {{ $t('soniya') }}</div>
                </div>
                <ButtonVioletLogin :icon="!submitBtnDisabled" :disabled="loading || submitBtnDisabled"
                    :title="$t('Yuborish')" class="mx-auto mt-10 " />
            </form>
        </Modal>

        <!-- Modal success -->
        <Modal title="Muvaffaqiyat" :isOpen="isOpenSuccess" :clickOutside="false" @close="closeModalSuccess">

            <div class="txt-big text-center mt-8 mb-2">Tez orada</div>
            <div class="text-center h5 text-violet mb-2">{{ calculator.from.adress }}</div>
            <div class="txt-big text-center">manziliga kuryerimiz yetib boradi. Iltimos aloqada bo’ling.</div>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModalSuccess" title="Asosiy menyuga qaytish" class="w-full" />
            </div>
        </Modal>

        <!-- Javob modal -->
        <Modal :title="$t(alert.title)" :isOpen="errorModal" @close="errorModal = false">

            <div class="h5 my-10 text-center">{{ $t(alert.message) }}</div>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="errorModal = false" :title="$t('Yopish')" class="w-full" />
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
import { XMLBuilder } from 'fast-xml-parser';
import { mapState } from 'vuex';
import InputSms from '@/ui-components/InputSms.vue';

gsap.registerPlugin(ScrollTrigger)
const build = new XMLBuilder({
    attributeNamePrefix: '@', // Atributlarni belgilash
    textNodeName: '#text', // Matn elementlari nomini belgilash
    ignoreAttributes: false // Atributlarni o'xtirmashtirish
});

export default {
    data() {
        return {
            submitBtnDisabled: true,
            retrySms: false,
            error: null,
            otpCode1: null,
            otpCode2: null,
            otpCode3: null,
            otpCode4: null,
            otpCode5: null,
            otpCode6: null,

            alert: {
                title: 'alertError.title',
                message: 'alertError.message'
            },
            otpCodeFull: null,

            leftMinut: 59,
            timer: null,
            focus: 1,

            isOpen: false,
            isOpenSuccess: false,
            errorModal: false,
            loading: false // Loading flag
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, InputSms
    },
    computed: {
        ...mapState({
            calculator: state => state.courier.calculator,
            services: state => state.courier.services,
            createOrder: state => state.courier.createOrder,
        }),
        otpCode() {
            let sms = ''
            if (this.otpCode1) {
                sms += `${this.otpCode1}`;
            }
            if (this.otpCode2) {
                sms += `${this.otpCode2}`;
            }
            if (this.otpCode3) {
                sms += `${this.otpCode3}`;
            }
            if (this.otpCode4) {
                sms += `${this.otpCode4}`;
            }
            if (this.otpCode5) {
                sms += `${this.otpCode5}`;
            }
            if (this.otpCode6) {
                sms += `${this.otpCode6}`;
            }
            return sms;
        },
        minut() {
            return this.leftMinut;
        }
    },
    methods: {
        async getSms() {
            this.loading = true;
            this.$recaptcha('login').then((token) => {
                this.$store.dispatch('smsGenerate', {
                    "recaptcha": token,
                    "telefon": this.calculator.from && this.calculator.from.phone ? "998" + this.calculator.from.phone.replaceAll(' ', '') : null,
                }).then(response => {
                    switch (response.status) {
                        case 200:
                            this.otpCode1 = null
                            this.otpCode2 = null
                            this.otpCode3 = null
                            this.otpCode4 = null
                            this.otpCode5 = null
                            this.otpCode6 = null
                            this.error = null

                            this.leftMinut = 59;
                            clearInterval(this.timer);

                            this.loading = false
                            this.isOpen = true
                            this.setTime()
                            break;
                        case 422:
                            // messagew = 'sms.notogriKod';
                            break;

                        default:
                            this.loading = false;
                            break;
                    }
                }).catch(err => {
                    if (err.status == 419) {
                        this.errorModal = true
                    }
                    this.loading = false
                })
            });
        },
        async submit() {

            this.loading = true;

            this.$recaptcha('login').then((token) => {
                this.$store.dispatch('createOrder', {
                    "recaptcha": token,
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
                        "mass": this.calculator.weight ?? 1,
                        "text": this.calculator.jonatmaTuri,
                    },
                    "packages": {
                        "mass": this.calculator.weight ?? 1,
                        "width": this.calculator.w ?? 1,
                        "height": this.calculator.h ?? 1,
                        "length": this.calculator.l ?? 1,
                        "text": this.calculator.jonatmaTuri,
                    },
                    "otpCode": this.otpCodeFull,
                }).then(response => {
                    if (this.createOrder.createorder['@errormsg'] == 'Success') {
                        this.isOpen = false
                        this.isOpenSuccess = true;
                    }
                }).catch(err => {
                    if (err.status = 400) {
                        this.loading = false;
                        this.retrySms = true;
                        this.error = 'error';

                        this.otpCode1 = null
                        this.otpCode2 = null
                        this.otpCode3 = null
                        this.otpCode4 = null
                        this.otpCode5 = null
                        this.otpCode6 = null
                    }

                    if (err.status == 419) {
                        this.errorModal = true
                    }
                    this.loading = false
                })
            });
        },
        checkCalculator() {
            if (!this.calculator.to.fullname || !this.calculator.from.fullname) {
                this.$router.go(-1)
            }
        },
        setTime() {
            this.leftMinut = 59;
            this.timer = setInterval(() => {
                if (this.leftMinut > 0) {
                    this.leftMinut--;
                } else {
                    clearInterval(this.timer);
                    this.retrySms = true;
                }
            }, 1000);
        },
        resetTime() {
            clearInterval(this.timer)
            this.leftMinut = 59
        },
        clearTime() {
            clearInterval(this.timer)
        },
        nextFocus(id) {
            if (id <= 6) {
                this.focus = id + 1
            }
        },
        preventFocus(id) {
            if (id <= 6 && id >= 1) {
                this.focus = id - 1
            }
        },
        closeModal() {
            this.isOpen = false
        },
        closeModalSuccess() {
            this.isOpenSuccess = false
            this.$router.push({ name: 'kuryerChaqirish' })
        }
    },
    watch: {
        otpCode(newVal) {
            if (newVal.length == 6) {
                this.otpCodeFull = newVal
                this.submitBtnDisabled = false
            } else {
                this.submitBtnDisabled = true
            }
        },
        leftMinut(newVal) {
            if (newVal <= 0) {
                this.retrySms = true

                this.otpCode1 = null
                this.otpCode2 = null
                this.otpCode3 = null
                this.otpCode4 = null
                this.otpCode5 = null
                this.otpCode6 = null

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