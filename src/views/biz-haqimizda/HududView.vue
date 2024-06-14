<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>
        <!-- Navigation -->
        <Navigation>{{ $t('O’zbekiston bo’yicha filiallarimiz ma’sullari') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">
                <div v-for="(items, i) in data" class="mb-4 w-full">
                    <template v-if="i > 0">
                        <h3 class="h3 max-xl:h4-2 mb-4">{{ items.title }}</h3>
                        <RaxbariyatItem v-if="items.items" v-for="(item, i) in items.items" :key="i" :user="item" />
                    </template>
                </div>

                <div v-if="isLoading" class="relative w-full flex items-center justify-center">
                    <div class="absolute ">
                        <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                    </div>
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" class="mt-12" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import { data } from '@/constants/raxbariyat';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters, mapState } from 'vuex';
import emulogo from '@/assets/images/logo/emulogo.png';
import { useHead } from '@vueuse/head';


gsap.registerPlugin(ScrollTrigger)


export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Bar
    },
    data() {
        return {
            data: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('sub.hududiyMenedjerlar')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('O’zbekiston bo’yicha filiallarimiz ma’sullari'),
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
            users: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        users(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.users, newVal)
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal) {
                const data = []
                newVal.forEach(element => {
                    const user_lang = []
                    if (element.users) {
                        element.users.forEach(elementIn => {
                            const itemIn = elementIn.langs.find(item => item.lang == locale)
                            if (itemIn) {
                                const formatingData = {
                                    id: elementIn.id,
                                    image: `${this.origin}/${elementIn.image}`,
                                    fullname: itemIn.fullname,
                                    lovozim: itemIn.role,
                                    email: itemIn.email,
                                    region: itemIn.region,
                                    phone: itemIn.phone,
                                }
                                user_lang.push(formatingData)
                            }
                        })
                    }

                    const item = element.langs.find(item => item.lang == locale)
                    data.push({
                        title: item.title,
                        items: user_lang
                    })
                });
                this.data = data


                const item = data && data[1].items.length > 0 && data[1].items[0] ? data[1].items[0] : null
                if (data && item) {
                    this.pageKeyword = `${data[1].title}, ${item.fullname}, ${item.lovozim}, ${item.email}, ${item.work_day}`


                    useHead({
                        title: this.pageTitle,
                        meta: [
                            { name: 'title', content: this.pageTitle },
                            { name: 'description', content: this.pageDescription },
                            { name: 'keywords', content: this.pageKeyword },

                            { property: 'og:title', content: this.pageTitle },
                            { property: 'og:description', content: this.pageDescription },
                            { property: 'og:image', content: item ? item.image : this.emuLogoImage },
                            { property: 'og:url', content: this.canonical },
                            { property: 'og:type', content: 'article' },

                            { property: 'twitter:card', content: 'summary_large_image' },
                            { property: 'twitter:title', content: this.pageTitle },
                            { property: 'twitter:description', content: this.pageDescription },
                            { property: 'twitter:image', content: item ? item.image : this.emuLogoImage },
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
                        "image": [${item ? item.image : this.emuLogoImage}],
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
                                "url": ${item ? item.image : this.emuLogoImage}
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
        this.$store.dispatch('raxbariyat')

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