<template>
    <div>
        <!-- Navigation -->
        <Navigation>Raxbariyat</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4">
                <RaxbariyatItem />
                <RaxbariyatItem />
                <RaxbariyatItem />
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