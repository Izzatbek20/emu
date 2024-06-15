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
                            {{ data ? data.title : null }}
                        </div>
                        <img :src="data ? data.image : null" class="absolute bottom-0 right-0 w-96" srcset="">
                    </div>
                </div>

                <p class="txt-big max-md:txt-normal max-sm:txt-small mt-7 xizmat-content " v-html="data ? data.content : null"></p>

                <div v-if="isLoading" class="relative w-full flex items-center justify-center">
                    <div class="absolute ">
                        <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                    </div>
                </div>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet @click="openModal" :title="$t('xizmatdanFoydalanish')" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'xizmlatlar'" />
            </div>
        </div>
        <!-- Modal -->
        <XizmatModal :title="$t('xizmatdanFoydalanish')" :isOpen="isOpen" @close="closeModal" />
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters, mapState } from 'vuex';
import { defineAsyncComponent } from 'vue';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

// Asinxron komponentni import qilish
const XizmatModal = defineAsyncComponent(() =>
    import('@/ui-components/XizmatModal.vue')
);

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            data: null,
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            isOpen: false,
            pageTitle: `${this.$t('sub.fullfilmentView')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('sub.fullfilmentView'),
            pageKeyword: this.$t('sub.fullfilmentView').replaceAll(' ', ', '),
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/xizmatlar/fullfilment-xizmat`,
            alternateUz: `${window.location.origin}/uz/xizmatlar/fullfilment-xizmat`,
            alternateRu: `${window.location.origin}/ru/xizmatlar/fullfilment-xizmat`,
            alternateEn: `${window.location.origin}/en/xizmatlar/fullfilment-xizmat`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, XizmatModal
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal.langs) {
                const item = newVal.langs.find(item => item.lang == locale)
                if (item) {
                    this.data = {
                        id: newVal.id,
                        image: `${this.origin}/${newVal.image}`,
                        title: item.title,
                        content: item.content,
                    }

                    this.pageDescription = `${item.title} ${item.content.substring(0, 160).replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')} `
                    this.pageKeyword = `${item.title.replaceAll(' ', ', ')} ${item.content.substring(0, 100).replaceAll(' ', ', ').replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')} `
                    this.emuLogoImage = `${this.origin}/${newVal.image}`
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
        },
        openModal() {
            this.isOpen = true
        },
        closeModal() {
            this.isOpen = false
        }
    },
    computed: {
        ...mapState({
            service: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        service(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.service, newVal)
        }
    },
    mounted() {
        this.$store.dispatch('service', 4)

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

iframe {
    height: 619px !important;
}
</style>