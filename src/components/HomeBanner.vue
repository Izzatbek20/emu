<template>

    <!-- Banner -->
    <div class="hidden max-xl:flex justify-center">
        <BarGorizontal :name="'home'" class="max-xl:h-14 my-10" />
    </div>

    <div class="flex flex-row items-start gap-8 mt-10">
        <div class="basis-3/4 max-xl:flex-1 max-md:p-4  flex flex-row">
            <div
                class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden rounded-bl-[6rem] h-96 max-xl:h-[46rem] max-lg:h-[42rem] max-md:h-[38rem] max-sm:h-[35rem]">
                <Corusel :data="corusel" />
            </div>
        </div>
        <div class="basis-1/4 max-xl:hidden">
            <Bar :name="'home'" />
        </div>
    </div>

</template>
<script>
import Bar from '@/components/Bar.vue';
import Corusel from './Corusel.vue';
import BarGorizontal from './BarGorizontal.vue';

export default {
    components: {
        Corusel, Bar, BarGorizontal
    },
    props: {
        corusel: Array
    },
}
</script>

<style scoped></style>