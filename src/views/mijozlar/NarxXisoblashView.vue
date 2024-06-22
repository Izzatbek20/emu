<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Xizmat narxini onlayn xisoblang') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <form @submit.prevent="calculate" ref="formCal"
                class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Jo’natuvchi') }}</h2>

                        <InputSelect :label="$t('Viloyat')" v-model="from.viloyat.value" :error="from.viloyat.error"
                            :disabled="loading" :optionsData="viloyatFilter" @change="getCitysFrom" />
                        <InputSelectFilter :label="$t('Tuman')" v-model="from.city.value" :error="from.city.error"
                            :optionsData="city.from" :disabled="!loading && from.viloyat.value ? false : true"
                            @change="validateKeyupFrom" />
                        <InputSelect :label="$t('Ta’rifni tanglang')" class="w-[50%]"
                            v-model="from.kuryerChaqirish.value" :error="from.kuryerChaqirish.error" :disabled="loading"
                            :optionsData="kuryerChaqirish" :valueAttr="'code'" />
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
                        <InputSelect :label="$t('Viloyat')" v-model="to.viloyat.value" :error="to.viloyat.error"
                            :disabled="loading" :optionsData="viloyatFilter" @change="getCitysTo" />
                        <InputSelectFilter :label="$t('Tuman')" v-model="to.city.value" :error="to.city.error"
                            :optionsData="city.to" :disabled="!loading && to.viloyat.value ? false : true"
                            @change="validateKeyupTo" />
                    </div>
                </div>
                <div class="flex felx-col mt-8">
                    <div class="basis-2/3 max-sm:basis-full">
                        <div class="gap-6">
                            <CheckBox :label="$t('Korobka')" v-model="koropka" class="mb-2" />
                            <Transition name="slide-fade">
                                <div v-if="koropka"
                                    class="grid grid-cols-3 max-sm:grid-cols-2 max-[360px]:grid-cols-1 gap-4">
                                    <InputConuter :label="$t('Kenglik (sm)')" v-model="w.value" :error="w.error"
                                        :disabled="loading" />
                                    <InputConuter :label="$t('Uzunlik (sm)')" v-model="l.value" :error="l.error"
                                        :disabled="loading" />
                                    <InputConuter :label="$t('Balandlik (sm)')" v-model="h.value" :error="h.error"
                                        :disabled="loading" />
                                </div>
                            </Transition>
                            <div class="grid grid-cols-3 max-sm:grid-cols-2 gap-4">
                                <InputConuter :label="$t('Og’irlik (kg)')" v-model="weight.value" :error="weight.error"
                                    :disabled="loading" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet :disabled="loading" :title="$t('Hisoblash')" />
                    <span class="txt-small">
                        <span class="text-red">*</span>
                        {{ $t('Hisoblash uchun barcha qatorlar to’ldirilishishart') }}
                    </span>
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
import { XMLBuilder } from 'fast-xml-parser';
import { mapState } from 'vuex';
import { kirillga } from 'lotin-kirill-uz';
import { h } from 'vue';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

gsap.registerPlugin(ScrollTrigger)
const build = new XMLBuilder({
    attributeNamePrefix: '@', // Atributlarni belgilash
    textNodeName: '#text', // Matn elementlari nomini belgilash
    ignoreAttributes: false // Atributlarni o'xtirmashtirish
});

export default {
    data() {
        return {
            kuryerChaqirish: [],
            from: {
                viloyat: {
                    value: null,
                    error: null
                },
                city: {
                    value: null,
                    error: null
                },
                kuryerChaqirish: {
                    value: null,
                    error: null
                },
            },
            to: {
                viloyat: {
                    value: null,
                    error: null
                },
                city: {
                    value: null,
                    error: null
                }
            },
            city: {
                from: [],
                to: [],
            },
            viloyatFilter: [], // Viloyat o'zimizga moslashtirish
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
            koropka: false,
            loading: false, // Loading flag

            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('sub.xizmatXisoblash')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('Xizmat narxini onlayn xisoblang'),
            pageKeyword: this.pageDescription,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/mijoz/xizmat-narxini-xisoblang`,
            alternateUz: `${window.location.origin}/uz/mijoz/xizmat-narxini-xisoblang`,
            alternateRu: `${window.location.origin}/ru/mijoz/xizmat-narxini-xisoblang`,
            alternateEn: `${window.location.origin}/en/mijoz/xizmat-narxini-xisoblang`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    computed: {
        ...mapState({
            viloyat: state => state.courier.viloyat,
            services: state => state.courier.services
        })
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
        getViloyat() {
            this.$store.dispatch('getViloyat')
        },
        getService() {
            this.$store.dispatch('getService')
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
                        "service": this.from.kuryerChaqirish.value,
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
                                    viloyat: this.to.viloyat.value,
                                    city: this.to.city.value,
                                },
                                from: {
                                    viloyat: this.from.viloyat.value,
                                    city: this.from.city.value,
                                    kuryerChaqirish: this.from.kuryerChaqirish.value
                                },
                                korobka: {
                                    w: this.w.value,
                                    h: this.h.value,
                                    l: this.l.value
                                },
                                weight: this.weight.value,
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
                            this.$router.push({ name: 'xizmatXisoblashFinish' })
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
            let from = this.from
            let to = this.to
            // Viloyat
            if (!from.viloyat.value) {
                from.viloyat.error = this.$t('validate.required');
                error = true
            } else {
                from.viloyat.error = null;
            }
            if (!to.viloyat.value) {
                to.viloyat.error = this.$t('validate.required');
                error = true
            } else {
                to.viloyat.error = null;
            }

            // Shaxar yoki tuman
            if (!from.city.value) {
                from.city.error = this.$t('validate.required');
                error = true
            } else {
                from.city.error = null;
            }
            if (!to.city.value) {
                to.city.error = this.$t('validate.required');
                error = true
            } else {
                to.city.error = null;
            }

            // Kuryerchaqirish
            if (!from.kuryerChaqirish.value) {
                from.kuryerChaqirish.error = this.$t('validate.required');
                error = true
            } else {
                from.kuryerChaqirish.error = null;
            }
            if (this.koropka) {
                // Kenlik
                if (!this.w.value) {
                    this.w.error = this.$t('validate.required');
                    error = true
                } else {
                    this.w.error = null;
                }
                // Uzunlik
                if (!this.l.value) {
                    this.l.error = this.$t('validate.required');
                    error = true
                } else {
                    this.l.error = null;
                }
                // Balandlik
                if (!this.h.value) {
                    this.h.error = this.$t('validate.required');
                    error = true
                } else {
                    this.h.error = null;
                }
            }
            // Og'rilik
            if (!this.weight.value) {
                this.weight.error = this.$t('validate.required');
                error = true
            } else {
                this.weight.error = null;
            }


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
        'services.service': function (newVal, oldVal) {
            if (newVal) {
                this.kuryerChaqirish = newVal
            }
        },
    },
    mounted() {
        // Viloyatlar
        this.getViloyat()
        this.getService()

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

        useHead({
            title: this.pageTitle,
            meta: [
                { name: 'title', content: this.pageTitle },
                { name: 'description', content: this.pageDescription },
                { name: 'keywords', content: `${this.pageTitle.substring(0, 290).replaceAll(' ', ', ').replaceAll('-,', '')}, ${this.$t('Hisoblash')}, ${this.$t('Korobka')}, ${this.$t('Qabul qiluvchi')}, ${this.$t('Kuryer chaqirish')}, ${this.$t('Jo’natuvchi')}` },

                { property: 'og:title', content: this.pageTitle },
                { property: 'og:description', content: this.pageDescription },
                { property: 'og:image', content: this.emuLogoImage },
                { property: 'og:url', content: this.canonical },
                { property: 'og:type', content: 'article' },

                { property: 'twitter:card', content: 'summary_large_image' },
                { property: 'twitter:title', content: this.pageTitle },
                { property: 'twitter:description', content: this.pageDescription },
                { property: 'twitter:image', content: this.emuLogoImage },
            ],
            link: [
                { rel: 'canonical', href: this.canonical },
                { rel: 'alternate', hreflang: 'uz', href: this.alternateUz },
                { rel: 'alternate', hreflang: 'ru', href: this.alternateRu },
                { rel: 'alternate', hreflang: 'en', href: this.alternateEn },
                { rel: 'alternate', hreflang: 'x-default', href: this.canonical }
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: `{"@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": ${this.pageTitle},
                        "image": [${this.emuLogoImage}],
                        "datePublished": "2024-06-14T08:00:00+00:00",
                        "dateModified": "2024-06-14T08:00:00+00:00",
                        "author": {
                            "@type": "Person",
                            "name": "${window.location.host}"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "${window.location.host}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": ${this.emuLogoImage}
                            }
                        },
                        "description": ${this.pageDescription}}`
                }
            ]
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