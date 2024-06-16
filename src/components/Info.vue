<template>
    <div>
        <div class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

            <div v-for="data in datas"
                class="p-5 bg-white flex flex-col max-xl:flex-row max-xl:items-start items-center gap-4 rounded-2xl">
                <img :src="data.icon" :alt="data.title" class="max-xl:size-10 icon-img size-14">
                <div class="text-center max-xl:text-start">
                    <div class="h5 max-xl:h6 max-lg:h7 mb-1">{{ data.title }}</div>
                    <div class="txt-small  max-xl:txt-micro max-lg:txt-micro-2" v-html="data.body"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"

export default {
    data() {
        return {
            datas: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
        }
    },
    computed: {
        // ...mapGetters({
        //     isLoading: 'isLoading'
        // }),
        ...mapState({
            afzalliklar: state => state.emuAdmin.afzalliklar,
        })
    },
    methods: {
        async fetchData(newVal, locale) {
            const totalData = [];
            newVal.forEach((element, index) => {
                if (element.langs) {
                    const item = element.langs.find(item => item.lang == locale)
                    if (item) {
                        const formatingData = {
                            title: item.title,
                            body: item.text,
                            icon: `${this.origin}/${element.image.replaceAll(/\\/g, '/')}`,
                        }
                        totalData.push(formatingData)
                    }
                }
            });
            this.datas = totalData
        }
    },
    watch: {
        afzalliklar(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.afzalliklar, newVal)
        }
    },
    mounted() {
        this.$store.dispatch('afzalliklar')
    }
}
</script>