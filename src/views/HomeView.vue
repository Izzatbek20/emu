<template>
    <div>
        <HomeBanner />

        <!-- Information -->
        <Title>
            {{ $t('nimaUchunEMUexpress?') }}
        </Title>
        <Info />

        <InfoBanner :type="1" :bg-color="'bg-orange'" :title="$t('harKuni15000DanOrtiqOdamXizmatimizdanFoydalanadi')"
            :bg-title="$t('xizmatdanFoydalanish')" />

        <Title>
            {{ $t('Xizmatlarimiz') }}
        </Title>
        <Xizmatlar :items="xizmatlar" />

        <Ofislar />

        <Title>
            {{ $t('Bizning mijozlarimiz') }}
        </Title>
        <BizniMijozlar />

        <Title>
            {{ $t('Mijozlarimizning biz haqimizda fikrlari') }}
        </Title>
        <Mijoz />

        <InfoBanner :type="2" :bg-color="'bg-violet'"
            :title="$t('Telegram BOT orqali jo’natmalaringizni oson jo’nating va qabul qiling')"
            :bg-title="$t('Telegram bot')" />

        <Title>
            {{ $t('Yangiliklar') }}
        </Title>
        <Yangiliklar />
    </div>
</template>

<script>
import Corusel from '@/components/Corusel.vue'
import Info from '@/components/Info.vue'
import InfoBanner from '@/components/InfoBanner.vue';
import Xizmatlar from '@/components/Xizmatlar.vue';
import Ofislar from '@/components/Ofislar.vue';
import BizniMijozlar from '@/components/BizniMijozlar.vue';
import Mijoz from '@/components/Mijoz.vue';
import Yangiliklar from '@/components/Yangiliklar.vue';
import HomeBanner from '@/components/HomeBanner.vue';

import emulogo from '@/assets/images/logo/emulogo.png';

import Title from '@/components/Title.vue';
import { xizmlatlar } from '@/constants/xizmatlar';
import { useHead } from '@vueuse/head'

export default {
    components: {
        Corusel, Info, InfoBanner, Xizmatlar, Ofislar, BizniMijozlar, Mijoz, Yangiliklar, HomeBanner, Title
    },
    data() {
        return {
            // corusel: [],
            // origin: import.meta.env.VITE_EMU_API_ORIGIN,

            xizmatlar: xizmlatlar,

            pageTitle: `${this.$t('seo_home_title')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('seo_home_description'),
            pageKeyword: this.$t('seo_home_keywords'),
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}`,
            alternateUz: `${window.location.origin}/uz`,
            alternateRu: `${window.location.origin}/ru`,
            alternateEn: `${window.location.origin}/en`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    mounted() {
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
                    innerHTML: `{"@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": ${this.pageTitle},
                        "image": [${this.emuLogoImage}],
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