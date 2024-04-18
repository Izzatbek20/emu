<template>
    <Card class="bg-white mt-0 p-5">
        <div class="flex flex-col justify-between gap-5">
            <div class="flex-1">
                <router-link :to="{ name: 'yangilik', params: { id: 1 } }">
                    <img src="@/assets/images/news_1.png" alt="image" class="rounded-lg object-cover object-center"
                        srcset="">
                </router-link>
            </div>
            <div class="flex-1">
                <div class="flex gap-2 mb-2">
                    <Calendar />
                    <span class="text-gray text-sm">
                        02.02.2024
                    </span>
                </div>
                <h3 class="h5 mb-1">
                    <router-link :to="{ name: 'yangilik', params: { id: 1 } }">
                        Yangilik nomi
                    </router-link>
                </h3>
                <div class="txt-small text-wrap space line-clamp-3 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sunt
                    vero
                    at
                    id, molestiae omnis laboriosam asperiores ipsam maiores voluptas quae rerum
                    accusantium
                    dignissimos unde maxime similique itaque repudiandae impedit dicta?</div>
            </div>
        </div>
    </Card>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
    components: {
        Card
    }
}
</script>
<style></style>