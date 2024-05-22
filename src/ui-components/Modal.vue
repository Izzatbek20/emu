<template>
    <transition name="fade">
        <div v-if="isModalVisible">

            <div class="fixed h-dvh w-dvw top-0 left-0 inset-0 z-[999999] flex items-center justify-center">
                <div
                    class="absolute z-[90] w-11/12 max-w-sm md:max-w-sm lg:max-w-md p-10 max-sm:p-5 mx-auto my-auto rounded-3xl shadow-lg opacity-1 bg-white">
                    <div>
                        <div class="flex items-center justify-between">
                            <h3 class="h3-2 max-md:h4">{{ title }}</h3>
                            <CloseX @click="closeModal" :fillColor="'fill-orange'" class="cursor-pointer" />
                        </div>
                        <slot />
                    </div>
                </div>
                <div v-if="clickOutside" @click="closeModal"
                    class="fixed h-dvh w-dvw bg-black top-0 left-0 opacity-70 inset-0 flex items-center justify-center">
                </div>
                <div v-else
                    class="fixed h-dvh w-dvw bg-black top-0 left-0 opacity-70 inset-0 flex items-center justify-center">
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        clickOutside: true,
        title: String
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
    methods: {
        confirm() {
            this.$emit('confirm');
        },
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>
<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>