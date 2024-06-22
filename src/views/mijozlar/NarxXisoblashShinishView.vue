<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ $t('Xizmat narxini onlayn xisoblang') }}</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Jo’natuvchi') }}</h2>

                        <InputPreview :label="$t('Viloyat')" :value="calculator.from.viloyat" class="mb-6" />
                        <InputPreview :label="$t('Tuman')" :value="calculator.from.city" class="mb-6" />
                        <InputPreview :label="$t('Ta’rifni tanglang')" :value="kuryerChaqirish" class="mb-6" />
                    </div>
                    <div
                        class="w-[1.5px] max-md:w-auto max-md:h-[1.5px] bg-gradient-to-b from-[#8c3081c7] via-[#EF7F1A] to-[#8c3081c7] relative flex items-center justify-center">
                        <div
                            class="absolute w-10 h-10 rounded-full border bg-white flex items-center justify-center border-[#EF7F1A]">
                            <CheverRight :fillColor="'fill-violet'" class="max-md:rotate-90" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="h4 mb-8">{{ $t('Qabul qiluvchi') }}</h2>
                        <InputPreview :label="$t('Viloyat')" :value="calculator.to.viloyat" class="mb-6" />
                        <InputPreview :label="$t('Tuman')" :value="calculator.to.city" class="mb-6" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <InputPreview v-if="calculator.korobka.w || calculator.korobka.h || calculator.korobka.l"
                        :label="$t('Korobka')"
                        :value="`${$t('Kenglik')} ${calculator.korobka.w} ${$t('olchovBirligi.sm')}, ${$t('Uzunlik')} ${calculator.korobka.l} ${$t('olchovBirligi.sm')}, ${$t('Balandlik')} ${calculator.korobka.h} ${$t('olchovBirligi.sm')}`"
                        class="mt-10 mb-6" />
                    <InputPreview v-if="calculator.weight" :label="$t('Og’irlik')"
                        :value="calculator.weight + ' ' + $t('olchovBirligi.kg')" class="mb-8" />
                </div>
                <hr class="text-color_active">

                <div class="h5 mt-8">
                    {{ $t('Natija') }}:
                </div>
                <div class="h3-2 text-violet">
                    {{ Intl.NumberFormat('uz-UZ').format(calculator.price) }} so’m
                </div>
                <div class="flex items-center gap-6 mt-10">
                    <ButtonOranger @click="$router.go(-1)" :title="$t('Qayta xisoblash')" />
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'mijoz'" />
            </div>
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapState } from 'vuex';

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            pageTitle: `${this.$t('Xizmat narxini onlayn xisoblang')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: this.pageTitle,
            pageKeyword: this.pageTitle,
            domain: `${window.location.origin}`,
            canonical: `${window.location.origin}/mijoz/xizmat-narxini-xisoblang`,
            alternateUz: `${window.location.origin}/uz/mijoz/xizmat-narxini-xisoblang`,
            alternateRu: `${window.location.origin}/ru/mijoz/xizmat-narxini-xisoblang`,
            alternateEn: `${window.location.origin}/en/mijoz/xizmat-narxini-xisoblang`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    computed: {
        ...mapState({
            calculator: state => state.courier.calculator,
            services: state => state.courier.services
        }),
        kuryerChaqirish() {
            if (this.services) {
                return this.services.service.find(item => item.code == this.calculator.from.kuryerChaqirish).name
            }
        }
    },
    methods: {
        checkCalculator() {
            if (!this.calculator.from.viloyat || !this.calculator.from.viloyat) {
                this.$router.go(-1)
            }
        }
    },
    mounted() {
        this.checkCalculator()

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
                { name: 'keywords', content: `${this.pageTitle.substring(0, 290).replaceAll(' ', ', ').replaceAll('-,', '')}, ${this.$t('Hisoblash')}, ${this.$t('Korobka')}, ${this.$t('Qabul qiluvchi')}, ${this.$t('Kuryer chaqirish')}, ${this.$t('Jo’natuvchi')}` },

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
    },
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