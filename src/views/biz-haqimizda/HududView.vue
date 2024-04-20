<template>
    <div>
        <!-- Banner -->
        <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        <!-- Navigation -->
        <Navigation>O’zbekiston bo’yicha filiallarimiz ma’sullari</Navigation>

        <div class="flex flex-col items-start gap-8 mt-10">
            <div class="mb-4 w-full">
                <h3 class="h3 max-xl:h4-2 mb-4">Toshkent viloyati</h3>
                <RaxbariyatItem />
                <RaxbariyatItem />
            </div>
            <div class="mb-4 w-full">
                <h3 class="h3 max-xl:h4-2 mb-4">Andijon viloyati</h3>
                <RaxbariyatItem />
                <RaxbariyatItem />
                <RaxbariyatItem />
            </div>
            <div class="mb-4 w-full">
                <h3 class="h3 max-xl:h4-2 mb-4">Buxoro viloyati</h3>
                <RaxbariyatItem />
                <RaxbariyatItem />
                <RaxbariyatItem />
                <RaxbariyatItem />
            </div>
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