<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Raxbariyat') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10 ">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <Shimmer v-for="(item, i) in 3" :key="i" v-if="isLoading" style="height: 8rem;" class="my-3" />

                <RaxbariyatItem v-for="(item, i) in data" :key="i" :user="item" />

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters, mapState } from 'vuex';
import emulogo from '@/assets/images/logo/emulogo.png';
import { useHead } from '@vueuse/head';
import Shimmer from '@/components/Shimmer.vue';


gsap.registerPlugin(ScrollTrigger)

export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Bar, Shimmer
    },
    data() {
        return {
            data: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('Raxbariyat')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.pageTitle,
            pageKeyword: this.pageTitle,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/kompaniya/raxbariyat`,
            alternateUz: `${window.location.origin}/uz/kompaniya/raxbariyat`,
            alternateRu: `${window.location.origin}/ru/kompaniya/raxbariyat`,
            alternateEn: `${window.location.origin}/en/kompaniya/raxbariyat`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    computed: {
        ...mapState({
            raxbariyat: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        raxbariyat(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.raxbariyat, newVal)
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal.users) {
                const data = []
                newVal.users.forEach(element => {
                    const item = element.langs.find(item => item.lang == locale)
                    if (item) {
                        const formatingData = {
                            id: element.id,
                            image: `${this.origin}/${element.image}`,
                            fullname: item.fullname,
                            lovozim: item.role,
                            email: item.email,
                            work_day: item.work_day
                        }
                        data.push(formatingData)
                    }
                });
                this.data = data

                if (data) {

                    this.pageDescription = `${data[0].fullname} ${data[0].role} ${data[0].email} ${data[0].work_day}`
                    this.pageKeyword = `${this.$t('Raxbariyat')}, ${data[0].fullname}, ${data[0].role}, ${data[0].email}, ${data[0].work_day}`


                    useHead({
                        title: this.pageTitle,
                        meta: [
                            { name: 'title', content: this.pageTitle },
                            { name: 'description', content: this.pageDescription },
                            { name: 'keywords', content: this.pageKeyword },

                            { property: 'og:title', content: this.pageTitle },
                            { property: 'og:description', content: this.pageDescription },
                            { property: 'og:image', content: data[0] ? data[0].image : this.emuLogoImage },
                            { property: 'og:url', content: this.canonical },
                            { property: 'og:type', content: 'article' },

                            { property: 'twitter:card', content: 'summary_large_image' },
                            { property: 'twitter:title', content: this.pageTitle },
                            { property: 'twitter:description', content: this.pageDescription },
                            { property: 'twitter:image', content: data[0] ? data[0].image : this.emuLogoImage },
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
                        "image": [${data[0] ? data[0].image : this.emuLogoImage}],
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
                                "url": ${data[0] ? data[0].image : this.emuLogoImage}
                            }
                        },
                        "description": ${this.pageDescription}}`
                            }
                        ]
                    });

                }
            }
        }
    },
    mounted() {
        this.$store.dispatch('raxbariyat', 1)

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