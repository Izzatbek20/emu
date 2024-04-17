<template>
    <div>
        <h2 class="h1 text-center pt-20">
            Bizning mijozlarimiz
        </h2>
        <div class="grid grid-cols-6 gap-5 mt-10 flex-wrap">

            <div v-for="data in datas"
                class="py-9 px-10 bg-orange flex flex-row items-center justify-center gap-2 rounded-lg">
                <component :is="data">
                </component>
            </div>

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
    }
}
</script>
<style></style>