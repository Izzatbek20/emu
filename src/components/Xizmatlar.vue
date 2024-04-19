<template>
    <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

        <div v-for="item in items"
            class="p-5 bg-violet flex items-center gap-4 rounded-2xl h-48 max-sm:h-40 max-lg:h-40 relative overflow-hidden">
            <div class="h5 max-xl:h5 max-sm:h7 max-lg:h6 max-lg:font-extralight text-white w-1/2 max-xl:w-2/3 z-20">{{
                item.title }}</div>
            <img v-bind:src="item.image" alt="" srcset="" class="absolute right-0 bottom-0 max-md:w-32 max-lg:w-36">
        </div>

    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
<style></style>