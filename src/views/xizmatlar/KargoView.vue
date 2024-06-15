<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'xizmlatlar'" class="max-xl:h-14 my-10" />
        </div>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4 max-sm:p-2">
                <div
                    class="w-full h-96 flex items-center max-md:items-start bg-violet rounded-3xl relative overflow-hidden">
                    <div class="flex p-10 items-center max-md:items-start max-md:py-8">
                        <div
                            class="w-2/5 max-lg:w-3/5 max-md:w-4/6 max-sm:w-4/5 text-white h1 max-2xl:h2 max-sm:h3 z-20">
                            {{ $t('sub.kargo') }}
                        </div>
                        <img src="@/assets/images/kargo.png" alt="image" class="absolute bottom-0 right-0 w-96"
                            srcset="">
                    </div>
                </div>

                <b class="h3-2 max-md:h6 max-sm:h7 block mt-5">
                    {{ $t('Xitoydan pochta buyurtma qilishning 6ta bosqichi') }}
                </b>

                <div class="flex flex-col mt-8 w-full text-wrap">
                    <div>
                        <div class="flex items-center gap-4 max-sm:gap-1.5">
                            <div class="border border-icon-gray rounded-2xl max-sm:rounded-xl p-4">
                                <Clipboard class="size-[60px] max-sm:size-[40px] " />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">
                                {{ $t('Saytda ro’yxatdan o’ting') }}
                            </span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[60px] w-[92px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-white">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-4 max-sm:gap-1.5">
                            <div class="border border-icon-gray rounded-2xl max-sm:rounded-xl p-4">
                                <ShoppingBag2 class="size-[60px] max-sm:size-[40px] " />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">
                                {{ $t('Xitoy onlayn do’konlaridan sotuvni amalga o’shiring') }}
                            </span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[60px] w-[92px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-white">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-4 max-sm:gap-1.5">
                            <div class="border border-icon-gray rounded-2xl max-sm:rounded-xl p-4">
                                <AddToCart class="size-[60px] max-sm:size-[40px] " />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">
                                {{ $t('Mahsulotni ro’yxatdan o’tkazing') }}
                            </span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[60px] w-[92px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-white">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-4 max-sm:gap-1.5">
                            <div class="border border-icon-gray rounded-2xl max-sm:rounded-xl p-4">
                                <Barcode2 class="size-[60px] max-sm:size-[40px] " />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">
                                {{ $t('Mahsulotingiz statusini aniqlang') }}
                            </span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[60px] w-[92px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-white">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-4 max-sm:gap-1.5">
                            <div class="border border-icon-gray rounded-2xl max-sm:rounded-xl p-4">
                                <DeilverBox class="size-[60px] max-sm:size-[40px] " />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">
                                {{ $t('Mahsulotlaringizni bitta jo’natma qilib jo’nating') }}
                            </span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[60px] w-[92px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-white">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-4 max-sm:gap-1.5">
                            <div class="border border-icon-gray rounded-2xl max-sm:rounded-xl p-4">
                                <DeilverBox2 class="size-[60px] max-sm:size-[40px] " />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">
                                {{ $t('Mahsulotingiz sizga 10 -15 kun ichida yetib keladi') }}
                            </span>
                        </div>
                    </div>

                </div>

                <div class="mt-10 p-7 bg-[#F7F5F7] rounded-2xl">
                    <b class="h3-2 max-md:h6 max-sm:h7 block">
                        {{ $t('Xitoydan pochta buyurtma qilishning 6ta bosqichi') }}
                    </b>

                    <div class="flex items-center gap-2 mt-6">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">Manual.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2"
                                    @click="$router.push({ name: 'umumiyShartlarKorish' })">
                                    {{ $t('Yuklab olish') }}</span>
                                <span class="txt-micro text-gray">1.2 {{ $t('olchovBirligi.mb') }}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet @click="submit" :title="$t('xizmatdanFoydalanish')" />
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
import ChevorDown from '@/ui-components/icons/ChevorDown.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import XizmatModal from '@/ui-components/XizmatModal.vue';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';
import kargo from '@/assets/images/kargo.png';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            isOpen: false,
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('sub.kargo')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.$t('Xitoydan pochta buyurtma qilishning 6ta bosqichi'),
            pageKeyword: `${this.$t('sub.kargo').replaceAll(' ', ', ')}, ${this.$t('Xitoydan pochta buyurtma qilishning 6ta bosqichi').replaceAll(' ', ', ')}`,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/xizmatlar/kargo`,
            alternateUz: `${window.location.origin}/uz/xizmatlar/kargo`,
            alternateRu: `${window.location.origin}/ru/xizmatlar/kargo`,
            alternateEn: `${window.location.origin}/en/xizmatlar/kargo`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, XizmatModal
    },
    methods: {
        submit() {
            this.isOpen = true
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

        this.emuLogoImage = `${this.domain}${kargo}`

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