<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Kompaniya yangiliklari</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div id="pin-conatiner" class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <div class="w-full">
                    <Card class="bg-white p-5 w-full">
                        <div class="flex flex-row max-md:flex-col justify-between gap-5">
                            <div class="basis-1/3 max-md:flex-1">
                                <router-link :to="{ name: 'yangilik', params: { id: topNew.id } }">
                                    <img :src="topNew.image" alt="image" class="rounded-lg object-cover object-center"
                                        srcset="">
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
                                    <router-link :to="{ name: 'yangilik', params: { id: topNew.id } }">
                                        {{ topNew.title }}
                                    </router-link>
                                </h3>
                                <div class="txt-big max-xl:txt-small max-md:txt-micro line-clamp-3 whitespace-pre-line"
                                    v-html="topNew.body"></div>
                            </div>
                        </div>
                    </Card>

                    <div class="grid grid-cols-3 max-md:grid-cols-2 max-[360px]:grid-cols-1 gap-5 mt-5">
                        <YangiliklarItem v-for="(item, i) in data" :key="i" :id="item.id" :image="item.image"
                            :title="item.title" :body="item.body" />
                    </div>
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" />
            </div>
        </div>

        <!-- <Pagination class="mt-20" /> -->
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Card from '@/components/Card.vue';
import Navigation from '@/components/Navigation.vue';
import Pagination from '@/components/Pagination.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import YangiliklarItem from '@/components/YangiliklarItem.vue';
import { data } from '@/constants/news';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Card, YangiliklarItem, Pagination, Bar
    },
    data() {
        return {
            data: data['uz'].filter((item) => item.top == false),
            topNew: data['uz'].find((item) => item.top == true)
        }
    },
    mounted() {
        let pin = document.getElementById("pin");
        let notPin = document.getElementById("pin-conatiner");

        ScrollTrigger.create({
            trigger: pin,
            start: "top 20%",
            end: () => `${notPin.offsetHeight - pin.offsetHeight}px 20%`,
            invalidateOnRefresh: true,
            pin: pin,
            pinSpacing: true,

        });
    }
}
</script>