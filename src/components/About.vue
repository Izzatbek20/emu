<template>
    <div class="flex flex-row justify-between max-md:flex-col gap-4">
        <div class="flex-1">
            <h2 class="h1 max-xl:h2 max-lg:h3 mb-6">
                {{ infoData.title }}
            </h2>
            <h2 class="h2 max-xl:h3 max-lg:h4 mb-6">
                {{ infoData.subTitle }}
            </h2>
            <div class="txt-big max-xl:txt-normal max-lg:txt-small" v-html="infoData.text">
            </div>
        </div>
        <div class="flex-1">
            <Corusel3 v-if="infoData.images" :data="infoData.images" />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Corusel3 from './Corusel3.vue';
import image7 from '@/assets/images/slide/7.png';
import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

export default {
    components: {
        Corusel3
    },
    data() {
        return {
            corusel: [
                {
                    title: '',
                    image: image7
                },
                {
                    title: '',
                    image: image7
                },
                {
                    title: '',
                    image: image7
                },
            ],
            infoData: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('Kompaniya haqida')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.pageTitle,
            pageKeyword: this.pageTitle,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/kompaniya/biz-haqimizda`,
            alternateUz: `${window.location.origin}/uz/kompaniya/biz-haqimizda`,
            alternateRu: `${window.location.origin}/ru/kompaniya/biz-haqimizda`,
            alternateEn: `${window.location.origin}/en/kompaniya/biz-haqimizda`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    computed: {
        // ...mapGetters({
        //     isLoading: 'isLoading'
        // }),
        ...mapState({
            info: state => state.emuAdmin.info,
        })
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal) {
                const item = newVal.langs.find(item => item.lang == locale)

                const images = []
                if (newVal.images) {
                    newVal.images.forEach(element => {
                        images.push(`${this.origin}/${element.image.replaceAll(/\\/g, '/')}`)
                    });
                }
                this.infoData = {
                    images: images,
                    title: item.title,
                    subTitle: item.subTitle,
                    text: item.text,
                }
                this.pageDescription = item.text.substring(0, 290)
                this.pageKeyword = `${this.$t('Kompaniya haqida')}, ${item.text.substring(0, 160).replaceAll(' ', ', ')}`

                useHead({
                    title: this.pageTitle,
                    meta: [
                        { name: 'title', content: this.pageTitle },
                        { name: 'description', content: this.pageDescription },
                        { name: 'keywords', content: this.pageKeyword },

                        { property: 'og:title', content: this.pageTitle },
                        { property: 'og:description', content: this.pageDescription },
                        { property: 'og:image', content: images.length > 0 ? images[0] : this.emuLogoImage },
                        { property: 'og:url', content: this.canonical },
                        { property: 'og:type', content: 'article' },

                        { property: 'twitter:card', content: 'summary_large_image' },
                        { property: 'twitter:title', content: this.pageTitle },
                        { property: 'twitter:description', content: this.pageDescription },
                        { property: 'twitter:image', content: images.length > 0 ? images[0] : this.emuLogoImage },
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
                        "image": [${images.length > 0 ? images : this.emuLogoImage}],
                        "datePublished": "2024-06-14T08:00:00+00:00",
                        "dateModified": "2024-06-14T08:00:00+00:00",
                        "author": {
                            "@type": "Person",
                            "name": "${this.domain}"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "${this.domain}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": ${images.length > 0 ? images[0] : this.emuLogoImage}
                            }
                        },
                        "description": ${this.pageDescription}}`
                        }
                    ]
                });
            }
        }
    },
    watch: {
        info(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.info, newVal)
        }
    },
    mounted() {
        this.$store.dispatch('info')
        
        useHead({
            title: this.pageTitle,
            meta: [
                { name: 'title', content: this.pageTitle },
                { name: 'description', content: this.pageDescription },
                { name: 'keywords', content: this.pageTitle },

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
                            "name": "${this.canonical}"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "${this.canonical}",
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
<style></style>