<template>
    <transition name="fade">
        <div v-if="isModalVisible">

            <div class="fixed h-dvh w-dvw top-0 left-0 inset-0 z-[70] flex items-center justify-center">
                <div class="absolute z-[90] w-9/12 my-auto h-4/6 max-xl:h-2/6 max-sm:h-1/4">
                    <CloseX @click="closeModal" :fillColor="'fill-orange'"
                        class="absolute -top-6 -right-6 cursor-pointer" />
                    <iframe class="w-full h-full" :src="`https://www.youtube.com/embed/${v}`"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div @click="closeModal"
                    class="fixed h-dvh w-dvw bg-black top-0 left-0 opacity-70 inset-0 flex items-center justify-center cursor-pointer">
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'YoutubeModal',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        v: String
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