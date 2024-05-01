<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>{{ current_item.title }}</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1">
                <Card class="bg-white p-5">
                    <div class="flex flex-col justify-between gap-5">
                        <div class="flex-1">
                            <img :src="current_item.image" alt="image"
                                class="rounded-lg object-cover object-center w-full" srcset="">
                        </div>
                        <div class="flex-1">
                            <div class="flex gap-2 mb-4">
                                <Calendar class="size-4" />
                                <span class="text-gray text-sm">
                                    02.02.2024
                                </span>
                            </div>
                            <div class="txt-big max-xl:txt-normal max-md:txt-small max-sm:txt-micro whitespace-pre-line"
                                v-html="current_item.body"></div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class=" basis-1/4 max-xl:hidden">
                <Bar :name="'bizHaqimizda'" />
            </div>
        </div>

        <ButtonOranger @click="$router.go(-1)" :title="'Orqaga qaytish'" class="rounded-[100px] mt-20" />
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Bar from '@/components/Bar.vue';
import Card from '@/components/Card.vue';
import Navigation from '@/components/Navigation.vue';
import YangiliklarItem from '@/components/YangiliklarItem.vue';
import { data } from '@/constants/news';

export default {
    components: {
        Navigation, BarGorizontal, Bar, Card, YangiliklarItem
    },
    data() {
        return {
            data: data,
            current_item: []
        }
    },
    mounted() {
        const current_item = this.data['uz'].find((item) => item.id == this.$route.params.id)
        if (this.$route.params.id && current_item) {
            this.current_item = current_item
        }
    }
}
</script>