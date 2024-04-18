<template>
    <div class="h-14">
        <button
            class="group hover-button inline-flex px-8 h-full items-center justify-center relative bg-orange overflow-hidden rounded-[100px] flex-shrink-0">
            <span class="group-hover:text-white transition-color duration-500 text-white z-20"
                :class="titleClass ?? 'text-xl font-semibold leading-normal'">
                {{ title }}
            </span>
            <div class="effect"></div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ButtonOranger',
    props: {
        title: {
            type: String,
            required: true,
        },
        titleClass: {
            type: String,
            default: null
        }
    },
}
</script>
<style scoped>
.hover-button {
    border: 0.5px solid #EF7F1A;
    transition: all 0.5s ease-in-out;
}

.hover-button:hover .effect {
    width: 120%;
}

.hover-button:hover .effect::before {
    right: -2.5rem;
}

.hover-button:hover {
    border: 0.5px solid #fff;
}

.effect {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 0%;
    background-color: #EF7F1A;
    left: -2rem;
    transition: all 0.3s ease-in-out;
}

.effect::before {
    content: '';
    position: absolute;
    right: -1rem;
    width: 4rem;
    height: 4rem;
    background-color: #8F2B83;
    transform: rotate(45deg);
}

.effect::after {
    content: '';
    position: absolute;
    right: 0;
    width: 5rem;
    height: 5rem;
    background-color: #EF7F1A;
    transform: rotate(45deg);
}
</style>