<template>
    <h2 class="h2 max-xl:h3 max-sm:h4 text-center" :class="pt ? 'pt-20' : null">
        <slot />
    </h2>
</template>
<script>

export default {
    props: {
        pt: {
            type: Boolean,
            default: true
        }
    }
}
</script>
<style></style>