<template>
    <div
        class="grid grid-cols-6 max-2xl::grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 gap-5 max-sm:gap-3 mt-10 flex-wrap">

        <div v-for="data in datas"
            class="py-9 px-10  max-sm:py-4 max-sm:px-5  flex flex-row items-center justify-center gap-2 rounded-lg"
            :class="bgItems">
            <component :is="data" :fillColor="iconColor">
            </component>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            datas: [
                'Uzum', 'Impex', 'Gross', 'Nova', 'Nur', 'ArkBuloq', 'Index',
                'Uzum', 'Impex', 'Gross', 'Nova', 'Nur', 'ArkBuloq', 'Index',
                'Uzum', 'Impex', 'Gross', 'Nova'
            ]
        }
    },
    props: {
        bgItems: {
            type: String,
            default: 'bg-orange'
        },
        iconColor: {
            type: String,
            default: 'fill-white'
        }
    }
}
</script>
<style></style>