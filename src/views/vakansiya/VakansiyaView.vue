<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'vakansiya'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Vakansiya') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 ">

                <form @submit.prevent="sendFile" ref="formVakansiya" class="bg-white rounded-3xl p-7 max-md:p-4">
                    <h2 class="h4 mb-8">{{ $t('Ma’lumot jo’natish') }}</h2>
                    <div class="flex flex-row max-lg:flex-col gap-7 mt-5">

                        <Input :label="$t('Sizning ismingiz')" :required="true" placeholder="Ism" :disabled="loading"
                            v-model="fullname.value" :error="fullname.error" class="w-full" />
                        <InputPhone :label="$t('Telefon raqamingiz')" :required="true" :disabled="loading"
                            v-model="phone.value" :error="phone.error" class="w-full" />
                        <InputSelect :label="$t('Vakansiani tanlang')" :optionsData="data" :disabled="loading"
                            v-model="vakansiya.value" :error="vakansiya.error" class="w-full" />
                    </div>

                    <!-- Fayillarni yuklash -->
                    <DropZone v-model="files.value" :disabled="loading" :error="files.error" />

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet :disabled="loading" :title="$t('Yuborish')" class="max-md:w-full" />
                    </div>
                </form>

                <div v-for="item in data" class="bg-white rounded-3xl p-7 max-md:p-4 mt-7">
                    <h2 class="h4 mb-8">{{ item.name }}</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro " v-html="item.text">
                    </p>
                </div>

                <!-- <div v-if="isLoading" class="relative w-full flex items-center justify-center mt-10">
                    <div class="absolute ">
                        <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                    </div>
                </div> -->

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'vakansiya'" />
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
import DropZone from '@/ui-components/DropZone.vue';
import { vakansiya } from '@/constants/bar';
import { mapGetters, mapState } from 'vuex';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            fullname: {
                value: null,
                error: null
            },
            phone: {
                value: null,
                error: null
            },
            vakansiya: {
                value: null,
                error: null
            },
            files: {
                value: null,
                error: null
            },
            alert: {
                title: 'alertSuccess.title',
                message: 'alertSuccess.message'
            },
            data: [],
            isOpen: false,
            loading: false, // Loading flag

            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('Vakansiya')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('Vakansiya'),
            pageKeyword: `${this.$t('Vakansiya').replaceAll(' ', ', ')}`,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/vakansiya/${this.$route.params.id}`,
            alternateUz: `${window.location.origin}/uz/vakansiya/${this.$route.params.id}`,
            alternateRu: `${window.location.origin}/ru/vakansiya/${this.$route.params.id}`,
            alternateEn: `${window.location.origin}/en/vakansiya/${this.$route.params.id}`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, DropZone
    },
    methods: {
        async sendFile() {
            let error = false
            if (!this.fullname.value) {
                this.fullname.error = this.$t('validate.required');
                error = true
            } else {
                this.fullname.error = null;
            }

            if (!this.phone.value) {
                this.phone.error = this.$t('validate.required');
                error = true
            } else {
                if (this.phone.value && this.phone.value.length != 12) {
                    this.phone.error = this.$t('validate.phone');
                    error = true
                } else {
                    this.phone.error = null;
                }
            }


            if (!this.vakansiya.value) {
                this.vakansiya.error = this.$t('validate.required');
                error = true
            } else {
                this.vakansiya.error = null;
            }
            if (!this.files.value) {
                this.files.error = this.$t('validate.required');
                error = true
            } else {
                this.files.error = null;
            }

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;

                const vakansiyaName = vakansiya.find((item) => item.id == this.$route.params.id);

                const formData = new FormData();
                formData.append('fullname', this.fullname.value);
                formData.append('phone', `+998 ${this.phone.value}`);
                formData.append('vakansiya', this.vakansiya.value);
                formData.append('viloyat', vakansiyaName.title);

                for (let i = 0; i < this.files.value.length; i++) {
                    formData.append('files', this.files.value[i]);
                }

                this.$recaptcha('login').then((token) => {
                    formData.append('recaptcha', token);
                    this.$store.dispatch('sendMedia', formData).then(response => {
                        this.isOpen = true

                        // Fo'rmani tozalash
                        this.$refs.formVakansiya.reset();
                        this.fullname.value = null
                        this.phone.value = null
                        this.vakansiya.value = null
                        this.files.value = []
                    }).catch(err => {
                        if (err.response.status == 419) {
                            this.alert = {
                                title: 'alertError.title',
                                message: 'alertError.message'
                            }
                            this.isOpen = true
                        }
                    }).finally(as => {
                        this.loading = false;
                    })
                })
            }
        },
        async fetchData(newVal, locale) {
            const totalData = [];
            newVal.forEach((element, index) => {
                if (element.langs) {
                    const item = element.langs.find(item => item.lang == locale)
                    if (item) {
                        const formatingData = {
                            id: element.id,
                            name: item.title,
                            text: item.text,
                        }
                        totalData.push(formatingData)
                    }
                }
            });

            this.data = totalData

            if (totalData && totalData.length > 0) {
                this.pageDescription = `${totalData[0].name.substring(0, 160).replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')} ${totalData[0].text.substring(0, 160).replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')} `
                this.pageKeyword = `${this.pageTitle.replaceAll('- ', '').replaceAll(' ', ', ')}, ${totalData[0].name.replaceAll(' ', ', ').substring(0, 50).replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')}, ${totalData[0].text.substring(0, 100).replaceAll(' ', ', ').replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')} `
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
        },
        closeModal() {
            this.isOpen = false
        }
    },
    computed: {
        ...mapState({
            vakansiyaData: state => state.emuAdmin.vakansiya,
        })
    },
    watch: {
        vakansiyaData(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.vakansiyaData, newVal)
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.$store.dispatch('vacancy', this.$route.params.id)
        }

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