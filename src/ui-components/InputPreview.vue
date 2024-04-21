<template>
    <div class="mb-6 max-md:mb-34">
        <div class="text-gray mb-2 txt-micro">
            {{ label }}
        </div>
        <div class="txt-small">{{ value }}</div>
    </div>
</template>

<script>
export default {
    name: 'InputPreview',
    props: {
        label: String,
        value: String,
    }
}
</script>
<style scoped></style>