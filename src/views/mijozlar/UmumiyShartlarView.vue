<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Shartnoma va umumiy shartlar') }}</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <div class="h4 mb-10">
                    {{ $t('questionText') }}
                </div>

                <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                    <div class="flex items-center gap-2">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">Sertifikat.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2"
                                    @click="$router.push({ name: 'umumiyShartlarKorish' })">{{ $t('Ko\'rish') }}</span>
                                <span class="txt-micro text-gray">1.2 {{ $t('olchovBirligi.mb') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                    <div class="flex items-center gap-2">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">EMU umumiy oferta shartlari.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2"
                                    @click="downloadPdf(omaviy_oferta_shartlari, 'OMMAVIY OFERTA SHARTNOMASI EMU.pdf')">
                                    {{ $t('Yuklab olish') }}
                                </span>
                                <span class="txt-micro text-gray">1.2 {{ $t('olchovBirligi.mb') }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                    <div class="flex items-center gap-2">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">EMU umumiy shartlar.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2"
                                    @click="downloadPdf(jismoni_shaxslar, 'Жисмоний_шахслар_томонидан_почта_ва_курьерлик_жўнатмалари_орқали.pdf')">
                                    {{ $t('Yuklab olish') }}
                                </span>
                                <span class="txt-micro text-gray">1.2 {{ $t('olchovBirligi.mb') }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'mijoz'" />
            </div>
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import OMMAVIY_OFERTA_SHARTNOMASI_UZ from '@/assets/files/OMMAVIY OFERTA SHARTNOMASI EMU.pdf';
import OMMAVIY_OFERTA_SHARTNOMASI_RU from '@/assets/files/Публичная оферта компании EMU.pdf';
import JISMONISHAXSLAR from '@/assets/files/jsmoniyshaxslar.pdf';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

export default {
    data() {
        return {
            omaviy_oferta_shartlari: OMMAVIY_OFERTA_SHARTNOMASI_UZ,
            jismoni_shaxslar: JISMONISHAXSLAR,

            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('sub.umumiyShartlar')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('questionText'),
            pageKeyword: `umumiy shartlar, oferta shartlari, oferta, shartlari, sertifikat`,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/mijoz/shartnoma-va-umumiy-shartlar`,
            alternateUz: `${window.location.origin}/uz/mijoz/shartnoma-va-umumiy-shartlar`,
            alternateRu: `${window.location.origin}/ru/mijoz/shartnoma-va-umumiy-shartlar`,
            alternateEn: `${window.location.origin}/en/mijoz/shartnoma-va-umumiy-shartlar`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
        async downloadPdf(fileUrl, filename) {
            try {
                // Faylni yuklash uchun link yaratish
                const link = document.createElement('a');
                link.href = fileUrl;
                link.setAttribute('download', filename); // Faylni yuklash uchun fayl nomini belgilash

                // Linkni simulyatsiya qilish
                document.body.appendChild(link);
                link.click();

                // Linkni olib tashlash
                document.body.removeChild(link);
            } catch (error) {
                console.error('PDF faylini yuklashda xatolik yuz berdi:', error);
            }
        },
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