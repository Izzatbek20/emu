<template>
    <div>
        <!-- Navigation -->
        <Navigation>{{ $t('Biz bilan bog’lanish') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 ">

                <div class="bg-white rounded-3xl p-7 max-md:p-4">
                    <h2 class="h4 mb-8">{{ $t('Bog’lanish ma’lumotlari') }}</h2>
                    <div class="grid grid-cols-4 max-lg:grid-cols-2 gap-7">
                        <div class="flex flex-row gap-2">
                            <Marker :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-violet text-lg max-xl:text-base font-normal leading-none mb-1">{{
                                    $t('Manzil') }}
                                </div>
                                <div class="text-base max-xl:text-sm font-normal leading-none">
                                    {{ $t('O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35') }}
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2">
                            <Clock :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-gray text-lg max-xl:text-base font-normal leading-none">
                                    {{ $t('Ish vaqti') }}
                                </div>
                                <div class="text-lg max-xl:text-base font-normal leading-none">
                                    {{ $t('24 soat (Bayram kunlaridan tashqari)') }}
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2">
                            <Phone :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-gray text-lg max-xl:text-base font-normal leading-none">{{
                                    $t('Telefon') }}</div>
                                <div class="text-lg max-xl:text-base font-normal leading-none">+998712009669
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2">
                            <Email :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-gray text-lg max-xl:text-base font-normal leading-none">{{ $t('E-mail')
                                    }}:</div>
                                <div class="text-lg max-xl:text-base font-normal leading-none">info@emu.uz
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 rounded-md border border-line-gray" style="position:relative;overflow:hidden;"><a
                            href="https://yandex.uz/maps/org/emu/125146085698/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Emu</a><a
                            href="https://yandex.uz/maps/10335/tashkent/category/courier_services/184105430/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Kurer xizmatlari
                            Toshkentda</a><iframe
                            src="https://yandex.uz/map-widget/v1/?ll=69.300596%2C41.243656&mode=search&oid=125146085698&ol=biz&sctx=ZAAAAAgBEAAaKAoSCa6gaYmVVVFAEXcVUn5SpURAEhIJtJQsJ6H01j8RxhaCHJQwwz8iBgABAgMEBSgKOABAn58GSAFqAnV6nQHNzEw9oAEAqAEAvQFDTUemwgEGwvKmmtIDggIKZW11IHBvY2h0YYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.300596%2C41.243656&sspn=0.006048%2C0.002530&text=emu%20pochta&z=17.9"
                            width="100%" height="300" frameborder="0" allowfullscreen="true"
                            style="position:relative;"></iframe>
                    </div>

                </div>

                <form @submit.prevent="xabarSubmit" ref="formXabar" class="bg-white rounded-3xl p-7 max-md:p-4  mt-7">
                    <h2 class="h4 mb-8">{{ $t('Xabaringizni qoldiring') }}</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        {{ $t('Savol va takliflaringizni yozib qoldiring, menedjerlarimiz siz bilan bog’lanishadi') }}
                    </p>
                    <div class="flex max-lg:flex-col gap-5 mt-5">
                        <Input @input="checkToString('xabar.name', xabar.name)" :label="$t('Sizning ismingiz')"
                            :required="true" :placeholder="$t('Ism')" :disabled="loading" v-model="xabar.name.value"
                            :error="xabar.name.error" class="w-full" />
                        <InputPhone :label="$t('Telefon raqamingiz')" :required="true" :disabled="loading"
                            v-model="xabar.phone.value" :error="xabar.phone.error" class="w-full" />
                    </div>
                    <Textarea @input="checkToString('xabar.body', xabar.body)" :label="$t('Xabar matnini kiriting')"
                        :placeholder="$t('Matn')" :disabled="loading" v-model="xabar.body.value"
                        :error="xabar.body.error" class="w-full mt-6" />

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet :disabled="loading" :title="$t('Yuborish')" class="max-md:w-full" />
                    </div>
                </form>

                <form @submit.prevent="shikoyatSubmit" ref="formShikoyat"
                    class="bg-white rounded-3xl p-7 max-md:p-4  mt-7">
                    <h2 class="h4 mb-8">{{ $t('Shikoyat va taklifingizni kiriting') }}</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        {{ $t('Savol va takliflaringizni yozib qoldiring, menedjerlarimiz siz bilan bog’lanishadi') }}
                    </p>
                    <div class="flex max-lg:flex-col gap-5 mt-5">
                        <Input @input="checkToString('shikoyat.name', shikoyat.name)" :label="$t('Sizning ismingiz')"
                            :required="true" :placeholder="$t('Ism')" :disabled="loadingShikoyat"
                            v-model="shikoyat.name.value" :error="shikoyat.name.error" class="w-full" />
                        <InputPhone :label="$t('Telefon raqamingiz')" :required="true" :disabled="loadingShikoyat"
                            v-model="shikoyat.phone.value" class="w-full" :error="shikoyat.phone.error" />
                    </div>
                    <Textarea @input="checkToString('shikoyat.body', shikoyat.body)"
                        :label="$t('Xabar matnini kiriting')" :placeholder="$t('Matn')" :disabled="loadingShikoyat"
                        v-model="shikoyat.body.value" class="w-full mt-6" :error="shikoyat.body.error" />
                    <div class="flex flex-row gap-6 gap-y-3">
                        <Radio :label="$t('Jismoniy shaxsman')" :value="'jismoni'" :disabled="loadingShikoyat"
                            v-model="shikoyat.shaxs.value" :error="shikoyat.shaxs.error" />
                        <Radio :label="$t('Yuridik shaxsman')" :value="'yuridik'" :disabled="loadingShikoyat"
                            v-model="shikoyat.shaxs.value" :error="shikoyat.shaxs.error" />
                    </div>
                    <p class="text-red text-xs italic mt-2" v-if="shikoyat.shaxs.error">{{ shikoyat.shaxs.error }}</p>

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet :disabled="loadingShikoyat" :title="$t('Jo’natish')" class="max-md:w-full" />
                    </div>
                </form>


            </div>
            <div class="basis-1/4 max-xl:hidden">
                <button id="pin"
                    class="group hover-button inline-flex p-4 max-md:p-2 h-full items-center relative bg-violet overflow-hidden rounded-[100px] flex-shrink-0">
                    <span class="group-hover:text-white transition-color duration-500 text-white z-20"
                        :class="'text-xl max-md:text-sm font-semibold leading-normal'">
                        <div class="flex justify-start item flex-row gap-2">
                            <Phone :fillColor="'fill-white'" class="mt-1.5" />
                            <div>
                                <div
                                    class="text-white  text-start text-lg max-xl:text-base font-normal leading-none mb-1">
                                    {{ $t('Qong’iroqga buyurtma') }}
                                </div>
                                <div class="txt-micro text-start max-xl:txt-micro-2 font-normal leading-none">
                                    {{ $t('30 soniyada sizga qong’iroq qilishadi') }}
                                </div>
                            </div>
                        </div>
                    </span>
                    <div class="effect"></div>
                </button>
            </div>
        </div>

        <!-- Modal -->
        <Modal :title="$t(alert.title)" :isOpen="isOpen" @close="closeModal">

            <div class="h5 my-10 text-center">{{ $t(alert.message) }}</div>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModal" :title="$t('Saqlash')" class="w-full" />
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

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            xabar: {
                name: {
                    value: null,
                    error: null
                },
                phone: {
                    value: null,
                    error: null
                },
                body: {
                    value: null,
                    error: null
                },
            },
            shikoyat: {
                name: {
                    value: null,
                    error: null
                },
                phone: {
                    value: null,
                    error: null
                },
                body: {
                    value: null,
                    error: null
                },
                shaxs: {
                    value: null,
                    error: null
                },
            },
            errorInputXabarName: false,
            errorInputXabarBody: false,
            errorInputShikoyatName: false,
            errorInputShikoyatBody: false,
            alert: {
                title: 'alertSuccess.title',
                message: 'alertSuccess.message'
            },
            isOpen: false,
            loading: false, // Loading flag
            loadingShikoyat: false, // Loading flag

            pageTitle: `${this.$t('Biz bilan bog’lanish')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: `${this.$t('Biz bilan bog’lanish')}. ${this.$t('Ish vaqti')}: ${this.$t('24 soat (Bayram kunlaridan tashqari)')}. ${this.$t('Manzil')}: ${this.$t('O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35')}. ${this.$t('Qong’iroqga buyurtma')}: ${this.$t('30 soniyada sizga qong’iroq qilishadi')}. `,
            pageKeyword: `${this.$t('Biz bilan bog’lanish').replaceAll(' ', ', ')}, ${this.$t('Shikoyat va taklifingizni kiriting').replaceAll(' ', ', ')}, ${this.$t('Xabaringizni qoldiring').replaceAll(' ', ', ')} `,
            domain: `${window.location.origin} `,
            canonical: `${window.location.origin} /aloqa`,
            alternateUz: `${window.location.origin}/uz/aloqa`,
            alternateRu: `${window.location.origin}/ru/aloqa`,
            alternateEn: `${window.location.origin}/en/aloqa`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
        success() {
            this.isOpen = true
        },
        checkToString(inputName, e) {
            if (/\d/.test(e.value)) {
                e.error = this.$t("Faqat so'zlardan iborat bo'lishi kerak.");
                if (inputName == "xabar.name") {
                    this.errorInputXabarName = true
                }
                if (inputName == "xabar.body") {
                    this.errorInputXabarBody = true
                }
                if (inputName == "shikoyat.name") {
                    this.errorInputShikoyatName = true
                }
                if (inputName == "shikoyat.body") {
                    this.errorInputShikoyatBody = true
                }

            } else {
                e.error = null
                if (inputName == "xabar.name") {
                    this.errorInputXabarName = false
                }
                if (inputName == "xabar.body") {
                    this.errorInputXabarBody = false
                }
                if (inputName == "shikoyat.name") {
                    this.errorInputShikoyatName = false
                }
                if (inputName == "shikoyat.body") {
                    this.errorInputShikoyatBody = false
                }
            }
        },
        async shikoyatSubmit() {
            let error = this.validateShikoyat()
            if (error) {
                return;
            }

            if (!error && !this.errorInputShikoyatName && !this.errorInputShikoyatBody) {
                this.loadingShikoyat = true;
                this.$recaptcha('login').then((token) => {
                    this.$store.dispatch('aloqa', {
                        "recaptcha": token,
                        "ism": this.shikoyat.name.value,
                        "telefon": `+998 ${this.shikoyat.phone.value}`,
                        "xabar": this.shikoyat.body.value,
                        "shaxs": this.shikoyat.shaxs.value == 'yuridik' ? 'Yuridik shaxs' : 'Jismoniy shaxs'
                    }).then(response => {
                        this.isOpen = true

                        // Fo'rmani tozalash
                        this.$refs.formShikoyat.reset();
                        this.shikoyat.name.value = null
                        this.shikoyat.phone.value = null
                        this.shikoyat.body.value = null
                        this.shikoyat.shaxs.value = null
                    }).catch(err => {
                        if (err.response.status == 419) {
                            this.alert = {
                                title: 'alertError.title',
                                message: 'alertError.message'
                            }
                            this.isOpen = true
                        }
                    }).finally(as => {
                        this.loadingShikoyat = false;
                    })
                })
            }
        },
        async xabarSubmit() {

            let error = this.validateXabar()

            if (error) {
                return;
            }

            if (!error && !this.errorInputXabarName && !this.errorInputXabarBody) {
                this.loading = true;

                this.$recaptcha('login').then((token) => {
                    this.$store.dispatch('createLeads', {
                        "recaptcha": token,
                        "name": "Xabaringizni qoldiring",
                        "created_by": 0,
                        "custom_fields_values": [
                            {
                                "field_id": 2008581,
                                "values": [
                                    {
                                        "value": this.xabar.name.value
                                    }
                                ]
                            },
                            {
                                "field_id": 2008583,
                                "values": [
                                    {
                                        "value": "+998" + this.xabar.phone.value
                                    }
                                ]
                            },
                            {
                                "field_id": 2008585,
                                "values": [
                                    {
                                        "value": this.xabar.body.value
                                    }
                                ]
                            }
                        ],
                        "tags_to_add": [
                            {
                                "name": "Xabar"
                            }
                        ]
                    }).then(response => {
                        this.isOpen = true
                        if (response && response.data['_embedded']) {

                            // Fo'rmani tozalash
                            this.$refs.formXabar.reset();
                            this.xabar.name.value = null
                            this.xabar.phone.value = null
                            this.xabar.body.value = null
                        } else {
                            this.alert = {
                                title: 'alertError.title',
                                message: 'alertError.message'
                            }
                        }
                    }).catch(err => {
                        if (err.status == 419) {
                            this.alert = {
                                title: 'alertError.title',
                                message: 'alertError.message'
                            }
                            this.isOpen = true
                        }
                    }).finally(as => {
                        this.loading = false;
                    })
                });
            }
        },
        validateXabar() {
            let error = false;
            let xabar = this.xabar;
            if (!xabar.name.value) {
                xabar.name.error = this.$t('validate.required');
                error = true
            } else {
                if (!this.errorInputXabarName) {
                    xabar.name.error = null;
                }
            }
            if (!xabar.phone.value) {
                xabar.phone.error = this.$t('validate.required');
                error = true
            } else {
                if (xabar.phone.value && xabar.phone.value.length != 12) {
                    xabar.phone.error = this.$t('validate.phone');
                    error = true
                } else {
                    xabar.phone.error = null;
                }
            }
            if (!xabar.body.value) {
                xabar.body.error = this.$t('validate.required');
                error = true
            } else {
                if (!this.errorInputXabarBody) {
                    xabar.body.error = null;
                }
            }

            return error;
        },
        validateShikoyat() {
            let error = false;
            let shikoyat = this.shikoyat
            if (!shikoyat.name.value) {
                shikoyat.name.error = this.$t('validate.required');
                error = true
            } else {
                if (!this.errorInputShikoyatName) {
                    shikoyat.name.error = null;
                }
            }
            if (!shikoyat.phone.value) {
                shikoyat.phone.error = this.$t('validate.required');
                error = true
            } else {
                if (shikoyat.phone.value && shikoyat.phone.value.length != 12) {
                    shikoyat.phone.error = this.$t('validate.phone');
                    error = true
                } else {
                    shikoyat.phone.error = null;
                }
            }
            if (!shikoyat.body.value) {
                shikoyat.body.error = this.$t('validate.required');
                error = true
            } else {
                if (!this.errorInputShikoyatBody) {
                    shikoyat.body.error = null;
                }
            }
            if (!shikoyat.shaxs.value) {
                shikoyat.shaxs.error = this.$t('validate.required');
                error = true
            } else {

                shikoyat.shaxs.error = null;
            }

            return error;
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

        useHead({
            title: this.pageTitle,
            meta: [
                { name: 'title', content: this.pageTitle },
                { name: 'description', content: this.pageDescription },
                { name: 'keywords', content: this.pageKeyword },

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
                    innerHTML: `{
                    "@context": "https://schema.org",
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
                    "description": ${this.pageDescription}
                } `
                }
            ]
        });
    }
}
</script>

<style scoped></style>