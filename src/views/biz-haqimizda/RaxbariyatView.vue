<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Raxbariyat</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <RaxbariyatItem v-for="(item, i) in data" :key="i" :user="item" />
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'bizHaqimizda'" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import { data } from '@/constants/raxbariyat';

export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Bar
    },
    data() {
        return{
            data: data
        }
    }
}
</script>