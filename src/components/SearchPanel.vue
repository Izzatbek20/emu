<template>
    <div class="flex justify-center" @click="openSearchContainer" v-click-outside-element="closeSearchContainer">
        <Search class="size-4" :fillColor="'fill-violet'" />
        <div v-if="searchContainer"
            class="border shadow-md border-line-gray w-96 max-md:w-72 top-20 rounded-xl bg-white absolute  overflow-hidden">
            <div class="relative group p-4">
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none text-[#333]">
                    <Search fillColor="fill-violet" />
                </div>
                <input
                    class="appearance-none rounded-xl w-full max-md:py-1 py-3 px-3 ps-14 leading-tight focus:outline-none focus:shadow-outline transition-colors "
                    type="text" @input="updateValue" :disabled="disabled" v-model="modelValue"
                    :placeholder="$t('Qidiruv')">
            </div>
            <hr v-if="modelValue" class="text-icon-gray">
            <div class="result p-4" v-if="modelValue">
                <div class="font-bold text-gray mb-2">{{ $t('Qidiruv natijasi') }}:</div>
                <ul v-if="filteredData.length > 0">
                    <li v-for="item in filteredData" :key="item.title"
                        class="font-medium text-wrap p-1 hover:text-violet">
                        <router-link :to="{ name: item.link }"> <span
                                v-html="highlightMatch(item.title)"></span></router-link>
                    </li>
                    <li></li>
                </ul>
                <div v-else class="text-center text-xs text-gray">{{ $t('Ma\'lumot topilmadi') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/ui-components/icons/Search.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            searchContainer: false,
            disabled: false,
            modelValue: '',
            data: [],
            filteredData: [],
        }
    },
    computed: {
        ...mapState({
            serviceAll: state => state.emuAdmin.serviceAll,
        })
    },
    methods: {
        openSearchContainer() {
            this.searchContainer = true;
        },
        closeSearchContainer() {
            this.searchContainer = false;
        },
        async fetchData(newVal, locale) {
            const data = [];
            if (newVal) {
                newVal.forEach(element => {
                    const item = element.langs.find(langItem => langItem.lang === locale);
                    if (item) {
                        data.push({
                            title: item.title,
                            link: this.linkDetect(element.id)
                        });
                    }
                });
                data.push({
                    title: this.$t('sub.kargo'),
                    link: "kargo"
                });
                data.push({
                    title: this.$t('Xizmat narxini onlayn xisoblang'),
                    link: "xizmatXisoblash"
                });
            }
            this.data = data;
            this.filterData();
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
        updateValue(event) {
            this.modelValue = event.target.value;
            this.filterData();
        },
        filterData() {
            const searchTerm = this.modelValue.toLowerCase();
            this.filteredData = this.data.filter(item =>
                item.title.toLowerCase().includes(searchTerm)
            );
        },
        highlightMatch(text) {
            if (!this.modelValue) return text;
            const searchTerm = this.modelValue.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            return text.replace(regex, '<span class="text-violet font-bold">$1</span>');
        }
    },
    watch: {
        serviceAll(newVal) {
            this.fetchData(newVal, this.$i18n.locale);
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.serviceAll, newVal);
        },
        modelValue() {
            this.filterData();
        }
    },
    mounted() {
        this.$store.dispatch('serviceAll').then(() => {
            this.fetchData(this.serviceAll, this.$i18n.locale);
        });
    }
}
</script>

<style scoped>
/* Add any necessary styles */
</style>
