<template>
    <div>
        <h2 class="h2 text-center pt-20">
            Nima uchun EMU express?
        </h2>
        <div class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

            <div v-for="data in datas" class="p-5 bg-white flex flex-col items-center gap-4 rounded-2xl">
                <component :is="data.icon">
                </component>
                <div class="h5">{{ data.title }}</div>
                <div class="txt-small text-center">{{ data.body }}</div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            datas: [{
                title: '100% kafolat',
                body: 'Yukingiz yo’qolsa yoki zarar yetsa qoplab beramiz.',
                icon: 'Kafolat'
            },
            {
                title: 'Bepul qaytarish',
                body: 'Mijoz jo’natmani qabul qilmasa BEPUL qaytarib olib kelamiz.',
                icon: 'Qayta'
            },
            {
                title: 'Treking',
                body: 'A nuqtadan B nuqtagacha yukingizni kuzatib tura olasiz',
                icon: 'Treking'
            },
            {
                title: 'BEPUL 3 marta qayta jo’natish',
                body: 'Agar 1chi urinishda qabul qila olmasangiz, 3 marta qayta jo\'natamiz.',
                icon: 'Qaytajonatish'
            },
            {
                title: '24/7 onlayn',
                body: 'Saytimiz orqali xohlagan paytingizda xizmatlarimizdan foydalana olasiz',
                icon: 'Onlayn'
            },
            {
                title: 'API integratsiya',
                body: 'Jarayonni yengillashtirish va tezlashtirish maqsadida tizimlar bir biri bilan bog’langan.',
                icon: 'Api'
            },
            {
                title: 'BEPUL qadoqlash',
                body: 'Yukingizga shikast yetmasligi uchun qadoqlanadi',
                icon: 'Qadoqlash'
            },
            {
                title: 'Bepul saqlash',
                body: 'Yukingizni 10kungacha skladimizda bepul saqlab turamiz',
                icon: 'Saqlash'
            }]
        }
    }
}
</script>
<style></style>