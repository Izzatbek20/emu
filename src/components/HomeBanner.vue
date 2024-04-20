<template>
    <div
        class="flex flex-row-reverse max-xl:flex-col gap-8 mt-10 h-96 max-xl:h-[30rem] max-lg:h-[34rem] max-md:h-[45rem] max-sm:h-[35rem]">
        <div class="basis-1/4">
            <Bar :name="'bizHaqimizda'" />
        </div>
        <div class="basis-3/4 flex flex-row">
            <div class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden">
                <Corusel :data="corusel" />
            </div>
        </div>
    </div>
</template>
<script>
import Bar from '@/components/Bar.vue';
import Corusel from './Corusel.vue';

export default {
    components: {
        Corusel, Bar
    },
    props: {
        corusel: Array
    },
}
</script>

<style scoped></style>