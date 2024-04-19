<template>
    <div
        class="flex flex-row-reverse max-xl:flex-col gap-8 mt-10 h-96 max-xl:h-[30rem] max-lg:h-[34rem] max-md:h-[45rem] max-sm:h-[35rem]">
        <Bar :name="'bizHaqimizda'" />
        <div class="basis-3/4 max-xl:basis-full flex flex-row">
            <div v-if="banner == 1" class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden">
                <Corusel :data="corusel" />
            </div>
            <div v-if="banner == 2"
                class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden rounded-bl-[6rem]">
                <Corusel2 />
            </div>
        </div>
    </div>
</template>
<script>
import Corusel2 from '@/components/Corusel2.vue'
import Bar from '@/components/Bar.vue';
import Corusel from './Corusel.vue';

export default {
    components: {
        Corusel, Corusel2, Bar
    },
    props: {
        corusel: Array,
        banner: {
            type: Number,
            default: 1
        }
    },
}
</script>

<style scoped></style>