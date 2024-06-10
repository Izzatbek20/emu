<template>
    <div>
        <HomeBanner />

        <!-- Information -->
        <Title>
            {{ $t('nimaUchunEMUexpress?') }}
        </Title>
        <Info />

        <InfoBanner :type="1" :bg-color="'bg-orange'" :title="$t('harKuni15000DanOrtiqOdamXizmatimizdanFoydalanadi')"
            :bg-title="$t('xizmatdanFoydalanish')" />

        <Title>
            {{ $t('Xizmatlarimiz') }}
        </Title>
        <Xizmatlar :items="xizmatlar" />

        <Ofislar />

        <Title>
            {{ $t('Bizning mijozlarimiz') }}
        </Title>
        <BizniMijozlar />

        <Title>
            {{ $t('Mijozlarimizning biz haqimizda fikrlari') }}
        </Title>
        <Mijoz />

        <InfoBanner :type="2" :bg-color="'bg-violet'"
            :title="$t('Telegram BOT orqali jo’natmalaringizni oson jo’nating va qabul qiling')"
            :bg-title="$t('Telegram bot')" />

        <Title>
            {{ $t('Yangiliklar') }}
        </Title>
        <Yangiliklar />
    </div>
</template>

<script>
import Corusel from '@/components/Corusel.vue'
import Info from '@/components/Info.vue'
import InfoBanner from '@/components/InfoBanner.vue';
import Xizmatlar from '@/components/Xizmatlar.vue';
import Ofislar from '@/components/Ofislar.vue';
import BizniMijozlar from '@/components/BizniMijozlar.vue';
import Mijoz from '@/components/Mijoz.vue';
import Yangiliklar from '@/components/Yangiliklar.vue';
import HomeBanner from '@/components/HomeBanner.vue';

import image1 from '@/assets/images/slide/1.png';
import image2 from '@/assets/images/slide/2.png';
import image3 from '@/assets/images/slide/3.png';
import image4 from '@/assets/images/slide/4.png';
import image5 from '@/assets/images/slide/5.png';

import Title from '@/components/Title.vue';
import { xizmlatlar } from '@/constants/xizmatlar';
import { mapGetters, mapState } from 'vuex';


export default {
    components: {
        Corusel, Info, InfoBanner, Xizmatlar, Ofislar, BizniMijozlar, Mijoz, Yangiliklar, HomeBanner, Title
    },
    data() {
        return {
            // corusel: [],
            // origin: import.meta.env.VITE_EMU_API_ORIGIN,
            corusel: [
                {
                    title: '<span class="text-orange-light">EMU express</span> Biz bilan masofa yaqin!',
                    image: image1
                },
                {
                    title: '<span class="text-orange-light">EMU bosh ofisimiz</span> yangi manzilga ko\'chdi',
                    image: image2
                },
                {
                    title: '<span class="text-orange-light">Qashqadaryo viloyati,</span> yangi 81chi filialimiz ochildi',
                    image: image3
                },
                {
                    title: '<span class="text-orange-light">Kuryer chaqirish</span> BEPUL',
                    image: image4
                },
                {
                    title: '<span class="text-orange-light">Farg\'ona viloyati,</span> yangi filialimiz ochildi',
                    image: image5
                },
            ],
            xizmatlar: xizmlatlar
        }
    },
}
</script>