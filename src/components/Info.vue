<template>
    <div>
        <div class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

            <div v-for="data in datas"
                class="p-5 bg-white flex flex-col max-xl:flex-row max-xl:items-start items-center gap-4 rounded-2xl">
                <component :is="data.icon" class=" max-xl:size-10">
                </component>
                <div class="text-center max-xl:text-start">
                    <div class="h5 max-xl:h6 max-lg:h7 mb-1">{{ $t(data.title) }}</div>
                    <div class="txt-small  max-xl:txt-micro max-lg:txt-micro-2">{{ $t(data.body) }}</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            datas: [{
                title: 'kafolat.title',
                body: 'kafolat.body',
                icon: 'Kafolat'
            },
            {
                title: 'bepulQaytarish.title',
                body: 'bepulQaytarish.body',
                icon: 'Qayta'
            },
            {
                title: 'treking.title',
                body: 'treking.body',
                icon: 'Treking'
            },
            {
                title: 'bepulQaytaJonatish.title',
                body: 'bepulQaytaJonatish.body',
                icon: 'Qaytajonatish'
            },
            {
                title: 'onlayn.title',
                body: 'onlayn.body',
                icon: 'Onlayn'
            },
            {
                title: 'apiIntegratsiya.title',
                body: 'apiIntegratsiya.body',
                icon: 'Api'
            },
            {
                title: 'bepulQadoqlash.title',
                body: 'bepulQadoqlash.body',
                icon: 'Qadoqlash'
            },
            {
                title: 'bepulSaqlash.title',
                body: 'bepulSaqlash.body',
                icon: 'Saqlash'
            },]
        }
    }
}
</script>
<style></style>