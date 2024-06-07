<template>
    <Card class="bg-white mt-0 p-5">
        <div class="flex flex-col justify-between gap-5">
            <div class="flex-1">
                <div class="relative">
                    <img v-if="!video" :src="url" alt="image"
                        class="rounded-lg rounded-bl-[3rem] object-cover object-center" srcset="">
                    <div :id="id" class="rounded-lg object-cover object-center w-full">
                    </div>
                    <Play v-if="!video"
                        class="size-20 absolute cursor-pointer bottom-2 left-2 max-lg:bottom-3 max-lg:left-3 max-lg:size-14"
                        @click="playVideo(v)" />
                </div>
            </div>
            <div class="flex-1">
                <h3 class="h5 max-xl:h6 max-md:h7 mb-1 text-violet">
                    {{ title }}
                </h3>
                <div class="txt-small max-lg:txt-micro max-sm:txt-micro-2  mb-4">{{ text }}</div>
                <div class="h6 max-lg:h7 text-wrap line-clamp-3 whitespace-nowrap">
                    “{{ content }}”
                </div>
            </div>
        </div>

        <!-- <YoutubeModal :isOpen="isOpen" :v="v" @close="closeModal" /> -->
    </Card>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
    components: {
        Card
    },
    props: {
        v: String,
        title: String,
        text: String,
        content: String,
    },
    data() {
        return {
            id: "youtube_" + (new Date().getTime()),
            url: null,
            isOpen: false,
            video: false,
            player: null
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeMount() {
        this.url = `https://img.youtube.com/vi/${this.v}/mqdefault.jpg`
    },
    methods: {
        playVideo() {
            this.video = true
            this.initYoutubeVideo()
        },
        initYoutubeVideo() {
            const pl = this.player = new YT.Player(this.id, {
                height: '100%',
                width: '100%',
                videoId: this.v,
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                }
            });
        },
        onPlayerReady(event) {
            event.target.playVideo();
        },
        onPlayerStateChange(event) {
            if (event.data === 0 && this.video) {
                this.stopVideo();
                this.video = false;
            }
        },
        stopVideo() {
            this.player.stopVideo();
            this.player.destroy();
        },
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