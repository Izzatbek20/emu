<template>
    <div class="w-full mx-auto mb-4">
        <div class="rounded-3xl overflow-hidden bg-white">
            <h2 @click="toggleCollapse"
                class="flex justify-between items-center p-4 bg-gray-200 cursor-pointer h-20 h5 max-md:h6">
                {{ title }}
                <template v-if="isCollapsed">
                    <Minus :fillColor="'fill-orange'" />
                </template>
                <template v-else>
                    <Plus :fillColor="'fill-violet'" />
                </template>
            </h2>
            <div :class="{ 'max-h-0': !isCollapsed, 'max-h-screen': isCollapsed }"
                class="transition-all duration-500 overflow-hidden txt-small max-md:txt-micro">
                <div class="p-4" v-html="body">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collaps',
    data() {
        return {
            isCollapsed: false
        };
    },
    props: {
        title: String,
        body: String
    },
    methods: {
        toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
</script>

<style scoped></style>
