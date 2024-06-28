<template>
    <div
        class="grid grid-cols-6 max-2xl::grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 gap-5 max-sm:gap-3 mt-10 flex-wrap">

        <Shimmer v-if="isLoading" v-for="n in 12" :key="n" class="mb-5" style="height: 7.5rem" />
        <div v-else v-for="data in datas"
            class="py-9 px-10  max-sm:py-4 max-sm:px-5  flex flex-row items-center justify-center gap-2 rounded-lg"
            :class="bgItems">
            <img :src="data" class="icon-img" :style="iconColor == 'fill-white' ? svgColorWhite : svgColorViolet">
        </div>

    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex"
import Shimmer from "./Shimmer.vue";

export default {
    data() {
        return {
            svgColorWhite: "filter: brightness(0) invert(1)",
            svgColorViolet: "filter: brightness(0) saturate(100%) invert(24%) sepia(68%) saturate(1493%) hue-rotate(275deg) brightness(87%) contrast(96%)",
            datas: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
        }
    },
    components: {
        Shimmer
    },
    props: {
        bgItems: {
            type: String,
            default: 'bg-orange'
        },
        iconColor: {
            type: String,
            default: 'fill-white'
        }
    },
    computed: {
        ...mapGetters({
            isLoading: 'isLoadingOurClient'
        }),
        ...mapState({
            ourClient: state => state.emuAdmin.ourClient,
        })
    },
    methods: {
        async fetchData(newVal, locale) {
            const totalData = [];
            newVal.forEach((element, index) => {
                totalData.push(`${this.origin}/${element.image.replaceAll(/\\/g, '/')}`)
            });
            this.datas = totalData
        }
    },
    watch: {
        ourClient(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.ourClient, newVal)
        }
    },
    mounted() {
        this.$store.dispatch('ourClient')
    }
}
</script>

<style scoped>
.icon-img {
    width: 116px;
    height: 40px
}
</style>