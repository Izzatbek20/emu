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
    }
}
</script>
<style></style>