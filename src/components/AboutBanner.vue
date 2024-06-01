<template>
    <div class="h-full w-full">
        <div v-if="!video" class="h-full w-full">
            <div class="p-7 flex h-full relative">
                <div class="w-3/5 max-lg:w-4/5 h2 z-20 text-white">
                    <span class="text-orange-light">EMU express</span>
                    Biz bilan masofa yaqin!
                </div>
                <Play v-if="!video" @click="playVideo(v)"
                    class="absolute left-7 bottom-7 w-24 h-24 z-20 cursor-pointer" />
            </div>
            <img src="@/assets/images/slide/6.png" alt="image" class="absolute bottom-0 right-0 max-md:bottom-32 w-4/5"
                srcset="">
        </div>
        <div :id="id" class="object-cover object-center w-full h-full">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: "emu_video" + (new Date().getTime()),
            video: false,
            player: null,
            v: "zrvMu3j0b8E"
        }
    },
    methods: {
        playVideo() {
            this.video = true;
            this.initYoutubeVideo();
        },
        initYoutubeVideo() {
            this.$emit('playing', true)
            this.player = new YT.Player(this.id, {
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
                this.$emit('playing', false)
            }
        },
        stopVideo() {
            this.player.stopVideo();
            this.player.destroy();
        },
    }
}

</script>