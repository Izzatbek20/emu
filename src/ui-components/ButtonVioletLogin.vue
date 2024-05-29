<template>
    <div class="h-14 max-md:h-12 max-sm:h-11">
        <button
            class="group w-full  inline-flex px-8 max-md:p-4 h-full items-center justify-center relative bg-violet overflow-hidden rounded-[100px]"
            :class="disabled ? 'bg-[#be8fb7]' : 'bg-violet hover-button'" :disabled="disabled">
            <span class="group-hover:text-white transition-color duration-500 text-white z-20"
                :class="[(titleClass ?? 'text-xl max-md:text-sm font-semibold leading-normal'), classNew]">
                {{ title }}
            </span>
            <Spinner v-if="disabled && icon" :fillColor="'fill-white'" class="ml-2" />
            <div v-if="!disabled" class="effect"></div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ButtonVioletLogin',
    props: {
        title: {
            type: String,
            required: true,
        },
        titleClass: {
            type: String,
            default: null
        },
        classNew: {
            type: String,
            default: null
        },
        disabled: false,
        icon: {
            type: Boolean,
            default: true
        },
    },
}
</script>
<style scoped>
.hover-button {
    border: 0.5px solid #8F2B83;
    transition: all 0.5s ease-in-out;
}

.hover-button:hover .effect {
    width: 130%;
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
    background-color: #8F2B83;
    left: -2rem;
    transition: all 0.3s ease-in-out;
}

.effect::before {
    content: '';
    position: absolute;
    right: -1rem;
    width: 4rem;
    height: 4rem;
    background-color: #EF7F1A;
    transform: rotate(45deg);
}

.effect::after {
    content: '';
    position: absolute;
    right: 0;
    width: 5rem;
    height: 5rem;
    background-color: #8F2B83;
    transform: rotate(45deg);
}
</style>