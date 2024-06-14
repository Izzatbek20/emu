<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ current_item.title }}</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1">
                <Card class="bg-white p-5">
                    <div v-if="isLoading" class="relative w-full flex items-center justify-center">
                        <div class="absolute ">
                            <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                        </div>
                    </div>
                    <div v-else class="flex flex-col justify-between gap-5">
                        <div class="flex-1">
                            <img :src="current_item.image" alt="image"
                                class="rounded-lg object-cover object-center w-full" srcset="">
                        </div>
                        <div class="flex-1">
                            <div class="flex gap-2 mb-4">
                                <Calendar class="size-4" />
                                <span class="text-gray text-sm">
                                    {{ current_item.date }}
                                </span>
                            </div>
                            <div class="body-container txt-big max-xl:txt-normal max-md:txt-small max-sm:txt-micro whitespace-pre-line"
                                v-html="current_item.body"></div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class=" basis-1/4 max-xl:hidden">
                <Bar :name="'bizHaqimizda'" />
            </div>
        </div>

        <ButtonOranger @click="$router.go(-1)" :title="$t('Orqaga qaytish')" class="rounded-[100px] mt-20" />
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Bar from '@/components/Bar.vue';
import Card from '@/components/Card.vue';
import Navigation from '@/components/Navigation.vue';
import YangiliklarItem from '@/components/YangiliklarItem.vue';
import { mapGetters, mapState } from 'vuex';
import emulogo from '@/assets/images/logo/emulogo.png';
import { useHead } from '@vueuse/head';

export default {
    components: {
        Navigation, BarGorizontal, Bar, Card, YangiliklarItem
    },
    data() {
        return {
            current_item: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: null,
            pageDescription: this.pageTitle,
            pageKeyword: this.pageTitle,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/kompaniya/yangiliklar`,
            alternateUz: `${window.location.origin}/uz/kompaniya/yangiliklar/${this.$route.params.id}`,
            alternateRu: `${window.location.origin}/ru/kompaniya/yangiliklar/${this.$route.params.id}`,
            alternateEn: `${window.location.origin}/en/kompaniya/yangiliklar/${this.$route.params.id}`,
            emuLogoImage: `${window.location.origin}${emulogo}`

        }
    },
    computed: {
        ...mapState({
            news: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        news(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.news, newVal)
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal.langs) {
                const item = newVal.langs.find(item => item.lang == locale)
                if (item) {
                    const newDate = new Date(newVal.created_at)
                    this.current_item = {
                        id: newVal.id,
                        image: `${this.origin}/${item.photo}`,
                        title: item.title,
                        body: item.content,
                        date: newDate.toLocaleDateString('uz-UZ', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
                    }

                    this.pageTitle = this.current_item.title
                    this.pageDescription = `${this.current_item.body.substring(0, 290).replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '')}`
                    this.pageKeyword = `${this.current_item.body.substring(0, 290).replaceAll(' ', ', ').replaceAll("<p>", '').replaceAll("</p>", '').replaceAll("<br>", '').replaceAll('-,', '') }`

                    useHead({
                        title: this.pageTitle,
                        meta: [
                            { name: 'title', content: this.pageTitle },
                            { name: 'description', content: this.pageDescription },
                            { name: 'keywords', content: this.pageKeyword },

                            { property: 'og:title', content: this.pageTitle },
                            { property: 'og:description', content: this.pageDescription },
                            { property: 'og:image', content: this.current_item.image },
                            { property: 'og:url', content: this.canonical },
                            { property: 'og:type', content: 'article' },

                            { property: 'twitter:card', content: 'summary_large_image' },
                            { property: 'twitter:title', content: this.pageTitle },
                            { property: 'twitter:description', content: this.pageDescription },
                            { property: 'twitter:image', content: this.current_item.image },
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
                                    "image": [${this.current_item.image}],
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
                                            "url": ${this.current_item.image}
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
        this.isLoading = false
        this.$store.dispatch('one', this.$route.params.id).then()
    }
}
</script>