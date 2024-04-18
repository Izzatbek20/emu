<template>
    <div class="mt-20 py-10 px-5 bg-violet text-white">
        <div class="container-rs">
            <div class="flex flex-col">
                <div class="flex flex-row items-start justify-between relative">
                    <ul v-for="(menu, index) in menus" :key="1 + index">
                        <li class="uppercase h7">{{ menu.title }}</li>
                        <li class="mt-6">
                            <ul>
                                <li v-if="menu.sub" v-for="(sub, index) in menu.sub" :key="2 + index"
                                    class="txt-micro hover:underline mt-4">
                                    <a href="#">{{ sub.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <img src="@/assets/images/ias.png" alt="ias" srcset="" class="absolute right-0 bottom-0">
                </div>

                <hr class="opacity-35 my-10">

                <div class="flex flex-row items-start justify-between">
                    <div>
                        <img src="@/assets/images/logo/emulogo_white.png" alt="logo-white" srcset="">
                    </div>
                    <div class="grid grid-cols-2 gap-7">
                        <div class="flex items-start gap-2 w-56">
                            <Clock :classNew="'fill-white'" class="w-5" />
                            <div class="flex flex-col items-start">
                                <div class="h7">Ish vaqti</div>
                                <div class="txt-micro">
                                    24 soat
                                    (Bayram kunlaridan tashqari)
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start gap-2 w-56">
                            <Phone :classNew="'fill-white'" class="w-5" />
                            <div class="flex flex-col items-start">
                                <div class="h7">Telefon</div>
                                <div class="txt-micro">
                                    +998712009669
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start gap-2 w-56">
                            <Marker :fillColor="'fill-white'" :classNew="'w-5'" />
                            <div class="flex flex-col items-start">
                                <div class="h7">Manzil</div>
                                <div class="txt-micro">
                                    O’zbekiston, Toshkent shahri, Shota Rustaveli ko’chasi, 35
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start gap-2 w-56">
                            <Email :fillColor="'fill-white'" class="w-5" />
                            <div class="flex flex-col items-start">
                                <div class="h7">E-mail</div>
                                <div class="txt-micro">
                                    info@emu.uz
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uppercase h7">Ijtimoiy tarmoqlar</div>
                        <div class="mt-6 txt-micro">
                            Bizga a’zo boling va kuzatib boring!
                        </div>
                        <ul class="flex flex-row items-center gap-x-2 mt-4">
                            <li class="cursor-pointer group transition-colors">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <Instagram :fillColor="'fill-white group-hover:fill-orange'" />
                                </a>
                            </li>
                            <li class="cursor-pointer group">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <Telegram :fillColor="'fill-white group-hover:fill-orange'" />
                                </a>
                            </li>
                            <li class="cursor-pointer group">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <Facebook :fillColor="'fill-white group-hover:fill-orange'" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="h7">
                            Savol yoki takliflar bo’yicha
                        </div>
                        <ButtonWhiteViolety title="Biz bilan bog’lanish" titleClass="h7" class="mt-4" />
                    </div>
                </div>
                <div class="flex justify-between items-ceneter mt-10">
                    <span class="txt-micro">2024 EMU</span>
                    <span class="txt-micro">
                        <a href="http://" target="_blank" rel="noopener noreferrer">Crud Group</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            menus: [
                {
                    title: 'Asosiy',
                    link: null,
                    sub: [
                        {
                            title: 'Xizmat narxini xisoblash',
                            link: null
                        },
                        {
                            title: 'Shaxsiy kabinet',
                            link: null
                        },
                        {
                            title: 'Buyurtma statusi',
                            link: null
                        },
                        {
                            title: 'EMU kargo',
                            link: null
                        },
                        {
                            title: 'Ko\'p so\'raladigan savollar',
                            link: null
                        },
                        {
                            title: 'Ofislarimiz',
                            link: null
                        },
                        {
                            title: 'Mijozlarimiz otzivlari',
                            link: null
                        }
                    ]
                },
                {
                    title: 'biz haqimizda',
                    link: null,
                    sub: [
                        {
                            title: 'EMU Express haqida',
                            link: null
                        },
                        {
                            title: 'Komanda faoliyati',
                            link: null
                        },
                        {
                            title: 'Kompaniya oliy maqsadi',
                            link: null
                        },
                        {
                            title: '',
                            link: null
                        },
                    ]
                },
                {
                    title: 'xizmat tu’rlari',
                    link: null,
                    sub: [
                        {
                            title: 'EMU kargo',
                            link: null
                        },
                        {
                            title: 'Kuryer xizmati',
                            link: null
                        },
                        {
                            title: 'Xalqaro yetkazib berish',
                            link: null
                        },
                        {
                            title: 'B2B shartnoma asosida yetkazib berish',
                            link: null
                        },
                        {
                            title: 'Fullfilment xizmati',
                            link: null
                        },
                        {
                            title: 'Individual yuk tashish xizmati',
                            link: null
                        },
                        {
                            title: '',
                            link: null
                        },
                    ]
                },
                {
                    title: 'ofislar',
                    link: null,
                    sub: [
                        {
                            title: 'Barcha ofislarmiz manzillari',
                            link: null
                        },
                        {
                            title: '',
                            link: null
                        },
                    ]
                },
                {
                    title: 'Bo’sh ish o’rinlari',
                    link: null,
                    sub: [
                        {
                            title: 'Barcha ofislarmiz manzillari',
                            link: null
                        },
                    ]
                },
                {
                    title: 'bog’lanish',
                    link: null,
                    sub: [
                        {
                            title: 'Shikoyat va izoh qoldirish',
                            link: null
                        },
                        {
                            title: 'Fikr va taklif qoldirish',
                            link: null
                        },
                        {
                            title: 'Ijtimoiy tarmoqlar',
                            link: null
                        },
                    ]
                },
            ]
        }
    }
}
</script>
<style></style>