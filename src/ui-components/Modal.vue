<template>
    <transition name="fade">
        <div v-if="isModalVisible">
            <div @click="closeModal"
                class="fixed h-dvh w-dvw bg-black top-0 left-0 opacity-70 inset-0 z-[70] flex items-center justify-center">
            </div>
            <div @click="closeModal"
                class="fixed h-dvh w-dvw top-0 left-0 inset-0 z-[70] flex items-center justify-center">
                <div
                    class="w-11/12 max-w-md md:max-w-lg lg:max-w-xl p-3 relative mx-auto my-auto rounded-xl shadow-lg opacity-1 bg-white">
                    <div>
                        <div class="flex items-center justify-between">
                            <h3 class="h3-2 max-md:h4 max-[360px]:h5">Xizmatdan foydalanish</h3>
                            <CloseX @click="closeModal" :fillColor="'fill-orange'" />
                        </div>

                        <div class="my-10">

                            <slot />

                        </div>

                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <ButtonVioletLogin title="Saqlash" class="w-full" />
                        </div>
                    </div>
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
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
    methods: {
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