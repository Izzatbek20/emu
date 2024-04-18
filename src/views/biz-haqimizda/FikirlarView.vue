<template>
    <div>
        <!-- Navigation -->
        <Navigation>Mijozlarimizning biz haqimizda fikrlari</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4">

                <div class="grid grid-cols-3 gap-5 mt-5">
                    <FikirlarItem />
                    <FikirlarItem />
                    <FikirlarItem />
                    <FikirlarItem />
                    <FikirlarItem />
                    <FikirlarItem />
                    <FikirlarItem />
                </div>
            </div>
            <div class=" basis-1/4">
                <Bar :name="'bizHaqimizda'" />
            </div>
        </div>

        <Pagination class="mt-20" />
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import Card from '@/components/Card.vue';
import Navigation from '@/components/Navigation.vue';
import Pagination from '@/components/Pagination.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import FikirlarItem from '@/components/FikirlarItem.vue';

export default {
    components: {
        Navigation, RaxbariyatItem, Bar, Card, FikirlarItem, Pagination
    }
}
</script>