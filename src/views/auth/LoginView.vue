<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <form @submit.prevent="submit" class="bg-white shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">{{ $t('Shaxsiy kabinetiga kirish') }}</h3>
            <Input :label="$t('Login')" v-model="login.value" :error="login.error" class="mt-4" :autoFocus="'login'"
                :disabled="loading" />
            <Input :label="$t('Parol')" v-model="password.value"
                :error="password.error ? password.error : responseError" :disabled="loading" :type="'password'" />
            <!-- <div class="w-full flex justify-center">
                <router-link :to="{ name: 'register' }" class="nav-menu nav-menu-animation">Roʻyxatdan
                    oʻtish</router-link>
            </div> -->
            <ButtonVioletLogin :disabled="loading" :title="$t('Kirish')" class="mx-auto mt-10 w-2/3" />
        </form>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { removeItem } from '@/helpers/rwLocalStorage';
import { checkInput } from '@/helpers/validate.js'

import { useHead } from '@vueuse/head';
import emulogo from '@/assets/images/logo/emulogo.png';

export default {
    data() {
        return {
            login: {
                value: null,
                error: null,
            },
            password: {
                value: null,
                error: null,
            },

            responseError: null,
            loading: false, // Loading flag


            pageTitle: `${this.$t('Shaxsiy kabinetiga kirish')} - ${import.meta.env.VITE_EMU_APP_NAME}`,
            pageDescription: `${this.$t('Shaxsiy kabinetiga kirish')}`,
            pageKeyword: `${this.$t('Shaxsiy kabinetiga kirish').replaceAll(' ', ', ')}, ${this.$t('login')}, ${this.$t('parol')}`,
            domain: `${window.location.origin} `,
            canonical: `${window.location.origin} /auth/login`,
            alternateUz: `${window.location.origin}/uz/auth/login`,
            alternateRu: `${window.location.origin}/ru/auth/login`,
            alternateEn: `${window.location.origin}/en/auth/login`,
            emuLogoImage: `${window.location.origin}${emulogo}`
        }
    },
    components: {
        Navigation
    },
    methods: {
        async submit() {
            let error = this.validate()

            if (error) {
                return
            }
            if (!error) {
                this.loading = true;
                this.$store.dispatch('login', {
                    "username": this.login.value,
                    "password": this.password.value
                }).then(response => {
                    this.$router.push({ name: 'profil' })
                }).catch(error => {
                    this.responseError = this.$t("Login yoki parol xato")
                })
            }
            this.loading = false;
        },
        validate() {
            let error = false;

            error = checkInput(this.login, this.$t);
            error = checkInput(this.password, this.$t);

            return error;
        },
    },
    mounted() {
        this.$store.commit('logout')

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