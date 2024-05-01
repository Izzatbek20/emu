<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Eng ko’p beriladigan savollar</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <Collaps v-for="(item, i) in data" :key="i" :title="item.title" :body="item.body" />

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'mijoz'" />
            </div>
        </div>

        <div>
            <!-- Measoft map blokini yaratish -->
            <!-- <div id="measoftMapBlock"></div> -->
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { data } from '@/constants/quetsion';

export default {
    data() {
        return {
            data: data,
            showMapButtonCaption: 'Выбрать пункт самовывоза',
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
    },
    mounted() {
        // measoftMap.config({
        //     'mapBlock': 'measoftMapBlock', // Kartani joylashtirish bloki
        //     'client_id': '8', // Mijoz identifikatori
        //     'client_code': '1513', // Kur'erlik xizmatining mijoz kodi (ixtiyoriy)
        //     'mapSize': {
        //         'width': '650',
        //         'height': '650'
        //     },
        //     'centerCoords': ['55.755814', '37.617635'], // Kartaning markaziy koordinatalari
        //     'lang': 'uz', // Kartaning tili (ru yoki en)
        //     'showMapButton': '1',
        //     'showMapButtonCaption': this.showMapButtonCaption,
        //     'filter': {
        //         'acceptcard': 'YES', // Kartani qabul qilish mumkinligini aniqlash
        //     },
        //     'allowedFilterParams': [
        //         'acceptcash',
        //         'acceptcard',
        //         'acceptfitting',
        //         'store'
        //     ]
        // }).init();
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