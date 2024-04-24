<template>
    <div>
        <HomeBanner :corusel="corusel" />

        <!-- Information -->
        <Title>
            Nima uchun EMU express?
        </Title>
        <Info />

        <InfoBanner :type="1" :bg-color="'bg-orange'" :title="'Har kuni 15 000dan ortiq odam xizmatimizdan foydalanadi'"
            :bg-title="'Xizmatdan foydalanish'" />

        <Title>
            Xizmatlarimiz
        </Title>
        <Xizmatlar :items="xizmatlar" />

        <Ofislar />

        <Title>
            Bizning mijozlarimiz
        </Title>
        <BizniMijozlar />

        <Title>
            Mijozlarimizning biz haqimizda fikrlari
        </Title>
        <Mijoz />

        <InfoBanner :type="2" :bg-color="'bg-violet'"
            :title="'Telegram BOT orqali jo’natmalaringizni oson jo’nating va qabul qiling'"
            :bg-title="'Telegram Bot'" />

        <Title>
            Yangiliklar
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


// Xizmatlar
import kuryer_xizmati from '@/assets/images/kuryer-xizmati.png'
import xalqaro_yetkazish from '@/assets/images/xalqaro-yetkazish.png'
import usltaman_tolov from '@/assets/images/usltaman-tolov.png'
import fullfilment from '@/assets/images/fullfilment.png'
import individual from '@/assets/images/individual.png'
import kargo from '@/assets/images/kargo.png'
import Title from '@/components/Title.vue';


export default {
    components: {
        Corusel, Info, InfoBanner, Xizmatlar, Ofislar, BizniMijozlar, Mijoz, Yangiliklar, HomeBanner, Title
    },
    data() {
        return {
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
            xizmatlar: [
                {
                    title: 'Kuryer xizmati',
                    image: kuryer_xizmati
                },
                {
                    title: 'Xalqaro yetkazib berish',
                    image: xalqaro_yetkazish
                },
                {
                    title: 'Ustama to’lovli pochta jo’natmalarini yetkazib berish',
                    image: usltaman_tolov
                },
                {
                    title: 'Fullfilment xizmati',
                    image: fullfilment
                },
                {
                    title: 'Individual yuk tashish xizmati',
                    image: individual
                },
                {
                    title: 'EMU kargo',
                    image: kargo
                }
            ]
        }
    }
}
</script>