<template>
    <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

        <div v-for="(item, i) in data" :key="i"
            class="p-5 bg-violet flex items-center gap-4 rounded-2xl h-48 max-sm:h-40 max-lg:h-40 relative overflow-hidden cursor-pointer"
            @click="$router.push({ name: item.link })">
            <div class="h5 max-xl:h5 max-sm:h7 max-lg:h6 max-lg:font-extralight text-white w-1/2 max-xl:w-2/3 z-20">{{
                item.title }}</div>
            <img v-bind:src="item.image" alt="" srcset="" class="absolute right-0 bottom-0 max-md:w-32 max-lg:w-36">
        </div>

    </div>
</template>
<script>
import kargo from '@/assets/images/kargo.png'
import { mapState } from 'vuex';

export default {
    data() {
        return {
            data: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal) {
                const data = [];
                newVal.forEach(element => {
                    const item = element.langs.find(langItem => langItem.lang === locale);
                    if (item) {
                        data.push({
                            image: `${this.origin}/${element.image.replaceAll(/\\/g, '/')}`,
                            title: item.title,
                            link: this.linkDetect(element.id)
                        });
                    }
                });
                data.push({
                    title: this.$t('sub.kargo'),
                    image: kargo,
                    link: "kargo"
                });
                this.data = data;
            }
        },
        linkDetect(id) {

            switch (id) {
                case 1:
                    return "kuryerXizmati"
                    break;
                case 2:
                    return "xalqaroKuryerlikXizmati"
                    break;
                case 3:
                    return "ustamaTolovli"
                    break;
                case 4:
                    return "fullfilmentView"
                    break;
                case 5:
                    return "individual"
                    break;

                default:
                    break;
            }
            return
        },
    },
    watch: {
        serviceAll(newVal) {
            this.fetchData(newVal, this.$i18n.locale);
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.serviceAll, newVal);
        },
    },
    computed: {
        ...mapState({
            serviceAll: state => state.emuAdmin.serviceAll,
        })
    },
    mounted() {
        this.$store.dispatch('serviceAll')
    }
}
</script>
<style></style>