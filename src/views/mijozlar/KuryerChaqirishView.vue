<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Kuryer chaqirish') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <form @submit.prevent="calculate" class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Qaerdan') }}</h2>

                        <Input :label="$t('Jo’natuvchining ismi')" :required="true" :placeholder="$t('Ism')"
                            v-model="from.fullname.value" :error="from.fullname.error" :disabled="loading" />
                        <InputPhone :label="$t('Jo’natuvchining telefon raqami')" :required="true"
                            v-model="from.phone.value" :error="from.phone.error" :disabled="loading" />
                        <InputSelect :label="$t('Viloyat')" v-model="from.viloyat.value" :error="from.viloyat.error"
                            :optionsData="viloyatFilter" @change="getCitysFrom" :disabled="loading" />
                        <InputSelectFilter :label="$t('Tuman')" v-model="from.city.value" :error="from.city.error"
                            :optionsData="city.from" :disabled="!loading && from.viloyat.value ? false : true"
                            @change="validateKeyupFrom" />
                        <Input :label="$t('Mahalla')" v-model="from.mahalla.value" :error="from.mahalla.error"
                            :disabled="loading" />
                        <Input :label="$t('Ko’cha')" v-model="from.kocha.value" :error="from.kocha.error"
                            :disabled="loading" />
                        <div class="grid grid-cols-3 max-sm:grid-cols-2 max-[360px]:grid-cols-1 gap-4">
                            <Input :label="$t('Uy')" :required="true" :placeholder="$t('Uy')" v-model="from.uy.value"
                                :error="from.uy.error" :disabled="loading" />
                            <Input :label="$t('Xonadon')" :placeholder="$t('Xonadon')" v-model="from.xona.value"
                                :error="from.xona.error" :disabled="loading" />
                            <Input :label="$t('Mo’ljal')" :placeholder="$t('Mo’ljal')" class="max-sm:col-span-2"
                                v-model="from.moljal.value" :error="from.moljal.error" :disabled="loading" />
                        </div>
                    </div>
                    <div
                        class="w-[1.5px] max-md:w-auto max-md:h-[1.5px] bg-gradient-to-b from-[#8c3081c7] via-[#EF7F1A] to-[#8c3081c7] relative flex items-center justify-center">
                        <div
                            class="absolute w-10 h-10 rounded-full border bg-white flex items-center justify-center border-[#EF7F1A]">
                            <CheverRight :fillColor="'fill-violet'" class="max-md:rotate-90" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Qaerga') }}</h2>
                        <Input :label="$t('Qabul qiluvchining ismi')" :required="true" :placeholder="$t('Ism')"
                            v-model="to.fullname.value" :error="to.fullname.error" :disabled="loading" />
                        <InputPhone :label="$t('Qabul qiluvchining telefon raqami')" :required="true"
                            v-model="to.phone.value" :error="to.phone.error" :disabled="loading" />
                        <InputSelect :label="$t('Viloyat')" v-model="to.viloyat.value" :error="to.viloyat.error"
                            :optionsData="viloyatFilter" @change="getCitysTo" :disabled="loading" />
                        <InputSelectFilter :label="$t('Tuman')" v-model="to.city.value" :error="to.city.error"
                            :optionsData="city.to" :disabled="!loading && to.viloyat.value ? false : true"
                            @change="validateKeyupFrom" />
                        <Input :label="$t('Mahalla')" v-model="to.mahalla.value" :error="to.mahalla.error"
                            :disabled="loading" />
                        <Input :label="$t('Ko’cha')" v-model="to.kocha.value" :error="to.kocha.error"
                            :disabled="loading" />
                        <div class="grid grid-cols-3 max-sm:grid-cols-2 max-[360px]:grid-cols-1 gap-4">
                            <Input :label="$t('Uy')" :required="true" :placeholder="$t('Uy')" v-model="to.uy.value"
                                :error="to.uy.error" :disabled="loading" />
                            <Input :label="$t('Xonadon')" :placeholder="$t('Xonadon')" v-model="to.xona.value"
                                :error="to.xona.error" :disabled="loading" />
                            <Input :label="$t('Mo’ljal')" :placeholder="$t('Mo’ljal')" class="max-sm:col-span-2"
                                v-model="to.moljal.value" :error="to.moljal.error" :disabled="loading" />
                        </div>
                        <div class="grid grid-cols-2 gap-x-4">
                            <Radio :label="$t('Yetkazib berish')" :value="xizmat.naDom" :disabled="loading"
                                v-model="to.yetkazibBerish.value" :error="to.yetkazibBerish.error" />
                            <Radio :label="$t('EMU ofisidan olish')" :value="xizmat.unversal" :disabled="loading"
                                v-model="to.yetkazibBerish.value" :error="to.yetkazibBerish.error" />
                            <p class="text-red text-xs italic" v-if="to.yetkazibBerish.error">
                                {{ to.yetkazibBerish.error }}
                            </p>
                        </div>
                    </div>
                </div>
                <hr class="text-color_active my-10">
                <div class="h5">
                    {{ $t('Jo’natma') }}
                </div>
                <div class="flex felx-col mt-3">
                    <div class="basis-2/3 max-lg:basis-full">
                        <div class="gap-6">
                            <div v-if="koropka"
                                class="grid grid-cols-3 max-sm:grid-cols-2 max-[360px]:grid-cols-1 gap-4">
                                <InputSelect class="col-span-2 max-[360px]:col-span-1" :label="$t('Jo’natma turi')"
                                    :optionsData="jonatmalar" v-model="jonatmaTuri.value" :i18n="'jonatma'"
                                    :valueAttr="'code'" />
                                <InputConuter :label="$t('Yuk og’irligi (taxminan)')" :required="true"
                                    v-model="weight.value" :error="weight.error" :disabled="loading" />
                                <InputConuter :label="$t('Kenglik (sm)')" v-model="w.value" :disabled="loading" />
                                <InputConuter :label="$t('Uzunlik (sm)')" v-model="l.value" :disabled="loading" />
                                <InputConuter :label="$t('Balandlik (sm)')" v-model="h.value" :disabled="loading" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet :disabled="loading" :title="$t('Jo\'natish')" />
                    <span class="txt-small"><span class="text-red">*</span>
                        {{ $t('Jo’natish uchun barcha qatorlar to’ldirilishi shart') }}</span>
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
import { kirillga } from 'lotin-kirill-uz';
import { XMLBuilder } from 'fast-xml-parser';
import { jonatma, xizmat } from '@/constants/kuryerChaqirish';

const build = new XMLBuilder({
    attributeNamePrefix: '@', // Atributlarni belgilash
    textNodeName: '#text', // Matn elementlari nomini belgilash
    ignoreAttributes: false // Atributlarni o'xtirmashtirish
});

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            from: {
                fullname: {
                    value: null,
                    error: null
                },
                phone: {
                    value: null,
                    error: null
                },
                viloyat: {
                    value: null,
                    error: null
                },
                city: {
                    value: null,
                    error: null
                },
                mahalla: {
                    value: null,
                    error: null
                },
                kocha: {
                    value: null,
                    error: null
                },
                uy: {
                    value: null,
                    error: null
                },
                xona: {
                    value: null,
                    error: null
                },
                moljal: {
                    value: null,
                    error: null
                },
            },
            to: {
                fullname: {
                    value: null,
                    error: null
                },
                phone: {
                    value: null,
                    error: null
                },
                viloyat: {
                    value: null,
                    error: null
                },
                city: {
                    value: null,
                    error: null
                },
                mahalla: {
                    value: null,
                    error: null
                },
                kocha: {
                    value: null,
                    error: null
                },
                uy: {
                    value: null,
                    error: null
                },
                xona: {
                    value: null,
                    error: null
                },
                moljal: {
                    value: null,
                    error: null
                },
                yetkazibBerish: {
                    value: '1', // dafault unversal tarif (xizmat) bo'ladi 
                    error: null
                },
            },
            jonatmaTuri: {
                value: null,
                error: null
            },
            weight: {
                value: null,
                error: null
            },
            h: {
                value: null,
                error: null
            },
            w: {
                value: null,
                error: null
            },
            l: {
                value: null,
                error: null
            },
            city: {
                from: [],
                to: [],
            },
            viloyatFilter: [], // Viloyat o'zimizga moslashtirish
            koropka: true,
            jonatmalar: jonatma,
            xizmat: xizmat,
            loading: false,
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    computed: {
        ...mapState({
            viloyat: state => state.courier.viloyat,
        })
    },
    methods: {
        getViloyat() {
            this.$store.dispatch('getViloyat')
        },
        getCitysFrom(viloyat, city = null) {
            this.$store.dispatch('getCitys', {
                "city": viloyat,
                "namestarts": city
            }).then(response => {
                // Responseda ko'p ma'lumot kelsa array bo'ladi. 1 ta natiha qaytsa u object bo'ladi.
                if (response.town) {

                    if (typeof response.town[0] == 'object') { // agar array kelsa 0 index object bo'ladi. 1 dona kelsa undifined bo'ladi
                        this.city.from = this.toArray(response.town);
                    } else {
                        this.city.from = this.toArray([response.town]);
                    }
                } else {
                    this.city.from = [];
                }
            })

        },
        getCitysTo(viloyat, city = null) {
            this.$store.dispatch('getCitys', {
                "city": viloyat,
                "namestarts": city
            }).then(response => {
                // Responseda ko'p ma'lumot kelsa array bo'ladi. 1 ta natiha qaytsa u object bo'ladi.
                if (response.town) {

                    if (typeof response.town[0] == 'object') { // agar array kelsa 0 index object bo'ladi. 1 dona kelsa undifined bo'ladi
                        this.city.to = this.toArray(response.town);
                    } else {
                        this.city.to = this.toArray([response.town]);
                    }
                } else {
                    this.city.to = [];
                }
            })
        },
        async calculate() {

            let error = this.validate()

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;

                this.$recaptcha('login').then((token) => {
                    this.$store.dispatch('calculator', {
                        "senderTown": this.from.city.value,
                        "receiverTown": this.to.city.value,
                        "service": this.to.yetkazibBerish.value,
                        "packages": {
                            "mass": this.weight.value ?? 1,
                            "width": this.w.value ?? 1,
                            "height": this.h.value ?? 1,
                            "length": this.l.value ?? 1,
                        }
                    }).then(response => {
                        let redirect = false;
                        if (response.calculator && response.calculator.calc) {
                            this.$store.commit('setCalculator', {
                                to: {
                                    fullname: this.to.fullname.value,
                                    phone: this.to.phone.value,
                                    city: this.to.city.value,
                                    adress: `${this.to.viloyat.value ? this.to.viloyat.value + ',' : ''} ${this.to.city.value ? this.to.city.value + ',' : ''} ${this.to.mahalla.value ? this.to.mahalla.value + ',' : ''} ${this.to.kocha.value ? this.to.kocha.value + ',' : ''} ${this.to.uy.value ? this.to.uy.value + ' ' : ''} ${this.to.xona.value ? this.to.xona.value + ' ' : ''} ${this.to.moljal.value ? this.to.moljal.value : ''}`,
                                    yetkazibBerish: this.to.yetkazibBerish.value,
                                },
                                from: {
                                    fullname: this.from.fullname.value,
                                    phone: this.from.phone.value,
                                    city: this.from.city.value,
                                    adress: `${this.from.viloyat.value ? this.from.viloyat.value + ',' : ''} ${this.from.city.value ? this.from.city.value + ',' : ''} ${this.from.mahalla.value ? this.from.mahalla.value + ',' : ''} ${this.from.kocha.value ? this.from.kocha.value + ',' : ''} ${this.from.uy.value ? this.from.uy.value + ' ' : ''} ${this.from.xona.value ? this.from.xona.value + ' ' : ''} ${this.from.moljal.value ? this.from.moljal.value : ''}`,
                                },
                                jonatmaTuri: this.jonatmaTuri.value ?? this.jonatmalar[0].code,
                                weight: this.weight.value,
                                w: this.w.value,
                                h: this.h.value,
                                l: this.l.value,
                                price: response.calculator.calc.price,
                                service: response.calculator.calc.service,
                            })
                            redirect = true
                        } else if (response.calc == "tarif not found - 1") {
                            // Og'rilik
                            this.loading = false;
                            this.weight.error = this.$t('validate.limitWeight');
                            redirect = false
                        } else if (response.calc == "town to not found" || response.calc == "subtown not found") {
                            // yuboruvchi va qabul qiluvchi shaxarlar birxil bo'lsa xatolig beradi
                            this.loading = false;
                            this.to.city.error = this.$t('validate.tumanTopilmadi');
                            this.from.city.error = this.$t('validate.tumanTopilmadi');
                            redirect = false
                        }
                        if (redirect) {
                            this.$router.push({ name: 'kuryerChaqirishTolov' })
                        }
                    })


                });
            }
        },
        validateKeyupFrom() {
            // Shaxarni apidagi ma'lumotlarga solishtirish
            if (this.city.from.length == 0) {
                this.from.city.value = null;
                this.from.city.error = this.$t('validate.required');
            } else {
                this.from.city.error = null;
            }
        },
        validateKeyupTo() {
            // Shaxarni apidagi ma'lumotlarga solishtirish
            if (this.city.to.length == 0) {
                this.to.city.value = null;
                this.to.city.error = this.$t('validate.required');
            } else {
                this.to.city.error = null;
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
            checkField(this.from.fullname, this.$t('validate.required'));
            checkField(this.from.phone, this.$t('validate.required'), true);
            checkField(this.from.viloyat, this.$t('validate.required'));
            checkField(this.from.city, this.$t('validate.required'));
            checkField(this.from.uy, this.$t('validate.required'));

            // Validate 'to' fields
            checkField(this.to.fullname, this.$t('validate.required'));
            checkField(this.to.phone, this.$t('validate.required'), true);
            checkField(this.to.viloyat, this.$t('validate.required'));
            checkField(this.to.city, this.$t('validate.required'));
            checkField(this.to.uy, this.$t('validate.required'));
            checkField(this.to.yetkazibBerish, this.$t('validate.required'));

            // Validate package fields
            // checkField(this.jonatmaTuri, this.$t('validate.required'));
            checkField(this.weight, this.$t('validate.required'));

            return error;
        },
        toArray(data) {
            let arr = [];
            data.forEach(element => {
                if (element.name != "UZBEKISTAN") {
                    arr.push({
                        code: element.code,
                        name: element.name
                    })
                }
            });

            return arr
        }
    },
    mounted() {
        // Viloyatlar
        this.getViloyat()

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
    },
    watch: {
        viloyat(newViloyat) {
            this.viloyatFilter = this.toArray(newViloyat.city)
        },
        'from.city.value': function (newVal, oldVal) {
            if (newVal) {
                this.getCitysFrom(this.from.viloyat.value, kirillga(newVal))
            }
        },
        'to.city.value': function (newVal, oldVal) {
            if (newVal) {
                this.getCitysTo(this.to.viloyat.value, kirillga(newVal))
            }
        },
    },
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