<template>
    <div>
        <h2 class="h1 text-center text-white">
            {{ title }}
        </h2>
        <div class="grid grid-cols-3 gap-7 mt-10">

            <div v-for="item in items" class="p-7 bg-white flex items-center justify-start gap-6 rounded-2xl">
                <component :is="item.icon"></component>
                <div class="txt-small">{{ item.title }}</div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
<style></style>