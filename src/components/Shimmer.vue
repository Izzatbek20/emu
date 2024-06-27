<template>
    <div class="shimmer rounded-3xl">
    </div>
</template>

<script>
export default {
    name: "Shimmer"
}
</script>

<style scoped>
.shimmer {
    width: 100%;
    height: 100%;
    animation: shimmer 1.5s infinite;
    background: linear-gradient(to right, #f6f7f8 0%, #e2e2e2 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-size: 800px 104px;
}

@keyframes shimmer {
    0% {
        background-position: -800px 0;
    }

    100% {
        background-position: 800px 0;
    }
}
</style>
