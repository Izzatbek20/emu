<template>
    <div>
        <!-- Banner -->
        <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />

        <!-- Navigation -->
        <Navigation>Kompaniya yangiliklari</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="w-full">
                <Card class="bg-white p-5 w-full">
                    <div class="flex flex-row max-md:flex-col justify-between gap-5">
                        <div class="basis-1/3 max-md:flex-1">
                            <router-link :to="{ name: 'yangilik', params: { id: 1 } }">
                                <img src="@/assets/images/news_1.png" alt="image"
                                    class="rounded-lg object-cover object-center" srcset="">
                            </router-link>
                        </div>
                        <div class="basis-2/3 max-md:flex-1">
                            <div class="flex gap-2 mb-4">
                                <Calendar class="size-4" />
                                <span class="text-gray text-sm">
                                    02.02.2024
                                </span>
                            </div>
                            <h3 class="h3 max-xl:h3-2 max-md:h4 mb-4">
                                <router-link :to="{ name: 'yangilik', params: { id: 1 } }">
                                    Yangilik nomi
                                </router-link>
                            </h3>
                            <div class="txt-big max-xl:txt-small max-md:txt-micro">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. Sunt vero at
                                id, molestiae omnis laboriosam asperiores ipsam maiores voluptas quae rerum accusantium
                                dignissimos unde maxime similique itaque repudiandae impedit dicta?</div>
                        </div>
                    </div>
                </Card>

                <div class="grid grid-cols-3 max-md:grid-cols-2 max-[360px]:grid-cols-1 gap-5 mt-5">
                    <YangiliklarItem />
                    <YangiliklarItem />
                    <YangiliklarItem />
                    <YangiliklarItem />
                    <YangiliklarItem />
                    <YangiliklarItem />
                    <YangiliklarItem />
                </div>
            </div>
        </div>

        <Pagination class="mt-20" />
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Card from '@/components/Card.vue';
import Navigation from '@/components/Navigation.vue';
import Pagination from '@/components/Pagination.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import YangiliklarItem from '@/components/YangiliklarItem.vue';

export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Card, YangiliklarItem, Pagination
    }
}
</script>