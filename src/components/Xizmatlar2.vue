<template>

    <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

        <div v-for="item in items" class="p-7 bg-white flex items-center justify-start gap-6 rounded-2xl">
            <div>
                <component :is="item.icon"></component>
            </div>
            <div class="txt-small">{{ item.title }}</div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
<style></style>