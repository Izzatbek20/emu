<template>
    <div>
        <!-- Banner -->
        <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        <!-- Navigation -->
        <Navigation>Raxbariyat</Navigation>

        <div class="flex flex-col items-start gap-8 mt-10">
            <RaxbariyatItem />
            <RaxbariyatItem />
            <RaxbariyatItem />
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';

export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal
    }
}
</script>