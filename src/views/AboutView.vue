<template>
    <div>

        <InfoBanner :type="2" :bg-color="'bg-violet'"
            :title="'Telegram BOT orqali jo’natmalaringizni oson jo’nating va qabul qiling'"
            :bg-title="'Telegram Bot'" />


    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Corusel from '@/components/Corusel.vue'
import Info from '@/components/Info.vue'
import InfoBanner from '@/components/InfoBanner.vue';
import Xizmatlar from '@/components/Xizmatlar.vue';
import Ofislar from '@/components/Ofislar.vue';
import BizniMijozlar from '@/components/BizniMijozlar.vue';
import Mijoz from '@/components/Mijoz.vue';
import Yangiliklar from '@/components/Yangiliklar.vue';

export default {
    components: {
        Corusel, Info, InfoBanner, Xizmatlar, Ofislar, BizniMijozlar, Mijoz, Yangiliklar
    }
}
</script>