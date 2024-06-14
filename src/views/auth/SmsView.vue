<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <div class="bg-white dark:bg-gray-900 shadow rounded-3xl px-8 py-6 max-w-md">
            <div class="my-8 txt-normal max-md:txt-small text-center">
                {{ $t('SmsyuborilgandaText') }}
            </div>
            <form ref="formSms" @submit.prevent="checkOtpCode">
                <h5 class="h5">{{ $t('Iltimos, SMS kodni kiriting') }}</h5>
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
                    <div class="text-gray txt-normal max-md:txt-small">{{ minut }} soniya</div>
                </div>
                <ButtonVioletLogin :title="$t('login')" :disabled="loading" class="mx-auto mt-10 w-2/3" />
            </form>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import InputSms from '@/ui-components/InputSms.vue';
import { mapState } from 'vuex';

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

            otpCodeFull: null,

            leftMinut: 59,
            timer: null,
            focus: 1,

            loading: false // Loading flag
        }
    },
    components: {
        Navigation, InputSms
    },
    computed: {
        ...mapState({
            registerForm: state => state.auth.registerForm
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
    async mounted() {
        if (!this.hasRegisterForm()) {
            this.$router.push({ name: 'home' });
        } else {
            await this.getSms()
        }
    },
    methods: {
        async getSms() {
            this.$recaptcha('login').then((token) => {
                this.$store.dispatch('smsGenerate', {
                    "captcha": token,
                    "telefon": this.registerForm && this.registerForm.telefon ? "998" + this.registerForm.telefon.replaceAll(' ', '') : null,
                }).then(response => {

                    this.otpCode1 = null
                    this.otpCode2 = null
                    this.otpCode3 = null
                    this.otpCode4 = null
                    this.otpCode5 = null
                    this.otpCode6 = null
                    this.error = null

                    this.leftMinut = 59;
                    clearInterval(this.timer);

                    this.setTime()
                })
            });
        },
        async checkOtpCode() {
            this.loading = true;
            this.$recaptcha('login').then((token) => {
                this.$store.dispatch('smsCheck', {
                    "otpCode": this.otpCodeFull,
                    "captcha": token
                }).then(response => {
                    this.$router.push({ name: 'register2' })
                }).catch(err => {
                    this.loading = false;
                    this.retrySms = true;
                    this.error = 'error';

                    this.otpCode1 = null
                    this.otpCode2 = null
                    this.otpCode3 = null
                    this.otpCode4 = null
                    this.otpCode5 = null
                    this.otpCode6 = null
                })
            });
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
        hasRegisterForm() {
            const form = this.registerForm

            if (form.ism && form.familya && form.telefon) {
                return true
            }

            return false
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
    }
}
</script>