<template>
    <div class="rounded-3xl mt-20 relative h-64 max-md:h-[30rem] p-10 overflow-hidden" :class="bgColor">
        <div class="w-3/4 max-md:w-full grid grid-row-2 gap-8">
            <h2 class="h2 max-xl:h3 max-lg:h4 text-white z-50 tracking-normal">{{ title }}</h2>
            <component :is="button" :title="bgTitle" class="z-50"></component>
        </div>
        <img :src="image" alt="image-1" srcset="" class="absolute right-0 bottom-0">
    </div>
</template>
<script>
import image1 from '@/assets/images/img_1.png'
import image2 from '@/assets/images/img_2.png'
import image3 from '@/assets/images/img_3.png'

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            required: true,
        },
        bgTitle: {
            type: String,
            required: true,
        },
        type: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            image: image1,
            button: 'ButtonWhiteOrange'
        }
    },
    mounted() {
        switch (this.type) {
            case 1:
                this.image = image1
                this.button = 'ButtonWhiteOrange'
                break;
            case 2:
                this.image = image2
                this.button = 'ButtonWhiteViolety'
                break;
            case 3:
                this.image = image3
                this.button = 'ButtonWhiteViolety'
                break;

            default:
                break;
        }
    },
}
</script>
<style></style>