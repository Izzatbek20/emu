<template>
    <Card class="bg-white mt-0 p-5">
        <div class="flex flex-col justify-between gap-5">
            <div class="flex-1">
                <div class="relative">
                    <img :src="url" alt="image" class="rounded-lg rounded-bl-[3rem] object-cover object-center"
                        srcset="">
                    <Play class="size-20 absolute cursor-pointer bottom-2 left-2 max-lg:bottom-3 max-lg:left-3 max-lg:size-14"
                        @click="openModal" />
                </div>
            </div>
            <div class="flex-1">
                <h3 class="h5 max-xl:h6 max-md:h7 mb-1 text-violet">
                    Alisher, 32 yosh
                </h3>
                <div class="txt-small max-lg:txt-micro max-sm:txt-micro-2  mb-4">Internet magazin asoschisi</div>
                <div class="h6 max-lg:h7 text-wrap line-clamp-3 whitespace-nowrap">
                    “Ajoyib xizmat! Tez yetkazib berish orqali biznesimda buyurtma hajmini sezilarli darajada oshirdim.
                    Rahmat!”
                </div>
            </div>
        </div>

        <YoutubeModal :isOpen="isOpen" :v="v" @close="closeModal" />
    </Card>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
    components: {
        Card
    },
    props: {
        v: String
    },
    data() {
        return {
            url: null,
            isOpen: false
        }
    },
    beforeMount() {
        this.url = `https://img.youtube.com/vi/${this.v}/mqdefault.jpg`
    },
    methods: {
        closeModal() {
            this.isOpen = false
        },
        openModal() {
            this.isOpen = true
        }
    }
}
</script>
<style></style>