<template>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_232_2457)">
            <circle class="item-3" opacity="0.25" cx="50" cy="50" r="50" fill="#EF7F1A" />
            <circle class="item-2" opacity="0.25" cx="50" cy="50" r="40" fill="#EF7F1A" />
            <circle class="item-1" cx="50" cy="50" r="30" fill="#EF7F1A" />
            <path class="item-0"
                d="M63.8407 47.8343C65.5079 48.7968 65.5079 51.2032 63.8407 52.1658L45.0847 62.9946C43.4175 63.9571 41.3335 62.7539 41.3335 60.8288L41.3335 39.1712C41.3335 37.2461 43.4175 36.0429 45.0847 37.0055L63.8407 47.8343Z"
                fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_232_2457">
                <rect width="100" height="100" rx="50" fill="white" />
            </clipPath>
        </defs>
    </svg>
</template>

<script>
export default {
    name: 'Play'
}
</script>
<style scoped>
svg {
    display: block;
    margin: auto;
}

.item-0,
.item-1,
.item-2,
.item-3 {
    transform-origin: center;
}

.item-1 {
    animation: scale1 2s infinite;
    animation-delay: 50ms;
}

.item-2,
.item-0 {
    animation: scale2 2s infinite;
    animation-delay: 200ms;
}

.item-3 {
    animation: scale3 2s infinite;
    animation-delay: 200ms;
}

@keyframes scale1 {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.06);
    }
}

@keyframes scale2 {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.9);
    }
}

@keyframes scale3 {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.8);
    }
}
</style>