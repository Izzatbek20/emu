<template>
    <div>
        <!-- Navigation -->
        <Navigation>O’zbekiston bo’yicha filiallarimiz ma’sullari</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4">
                <div class="mb-4">
                    <h3 class="h3 mb-4">Toshkent viloyati</h3>
                    <RaxbariyatItem />
                    <RaxbariyatItem />
                </div>
                <div class="mb-4">
                    <h3 class="h3 mb-4">Andijon viloyati</h3>
                    <RaxbariyatItem />
                    <RaxbariyatItem />
                    <RaxbariyatItem />
                </div>
                <div class="mb-4">
                    <h3 class="h3 mb-4">Buxoro viloyati</h3>
                    <RaxbariyatItem />
                    <RaxbariyatItem />
                    <RaxbariyatItem />
                    <RaxbariyatItem />
                </div>
            </div>
            <div class="basis-1/4">
                <Bar :name="'bizHaqimizda'" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';

export default {
    components: {
        Navigation, RaxbariyatItem, Bar
    }
}
</script>