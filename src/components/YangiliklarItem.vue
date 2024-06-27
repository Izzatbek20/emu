<template>
    <Card class="bg-white mt-0 p-5 max-xl:p-3 max-md:p-2">
        <div class="flex flex-col justify-between gap-5">
            <div class="flex-1 flex items-center justify-center">
                <router-link :to="{ name: 'yangilik', params: { id: id } }">
                    <img v-lazy="image" :alt="title" class="rounded-lg object-cover object-center" srcset="">
                </router-link>
            </div>
            <div class="flex-1">
                <div class="flex gap-2 mb-2">
                    <Calendar class="size-4" />
                    <span class="text-gray text-sm">
                        {{ date }}
                    </span>
                </div>
                <h3 class="h5 mb-1">
                    <router-link :to="{ name: 'yangilik', params: { id: id } }">
                        {{ title }}
                    </router-link>
                </h3>
                <div class="txt-small text-wrap space line-clamp-3 whitespace-pre-line" v-html="body">
                </div>
            </div>
        </div>
    </Card>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
    components: {
        Card
    },
    props: {
        id: Number,
        title: String,
        image: String,
        body: String,
        date: String,
    }
}
</script>
<style></style>