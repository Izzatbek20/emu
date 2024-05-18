<template>
    <div class="p-6 max-xl:p-5 max-md:p-4 h-full bg-white flex flex-col items-start gap-3 max-xl:gap-2 rounded-[2rem]">
        <div class="relative w-full h-[15rem] max-lg:h-[10rem]">
            <img v-if="!video" :src="`https://img.youtube.com/vi/${item.v}/mqdefault.jpg`" alt="image"
                class="w-full h-[15rem] max-lg:h-[10rem] rounded-xl rounded-bl-[3.5rem] object-cover">
            <Play v-if="!video" @click="playVideo(item.v)"
                class="absolute bottom-2 left-2 size-24 max-lg:bottom-3 max-lg:left-3 max-lg:size-14 cursor-pointer" />
            <div :id="id" class="object-cover object-center w-full rounded-xl rounded-bl-[3.5rem] relative h-full">
            </div>
        </div>
        <h2 class="h4 max-xl:h5 max-md:h6 text-violet">{{ item.title }}</h2>
        <span class="text-base max-xl:txt-micro max-md:txt-micro-2 font-normal">{{ item.short }}</span>
        <div class="h6 max-xl:h7 max-md:txt-micro max-md:font-medium space line-clamp-3 whitespace-pre-line">{{
            item.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            id: "youtube_mijoz_" + (new Date().getTime()),
            url: null,
            isOpen: false,
            video: false,
            player: null
        }
    },
    computed: {
        showVideo() {
            return this.video
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        playVideo() {
            this.video = true;
            this.initYoutubeVideo();
        },
        initYoutubeVideo() {
            this.player = new YT.Player(this.id, {
                height: '100%',
                width: '100%',
                videoId: this.item.v,
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
            this.isOpen = false;
        },
        openModal() {
            this.isOpen = true;
        }
    }
}
</script>

<style>
/* Sizning style'larizni bu yerda yozing */
</style>
