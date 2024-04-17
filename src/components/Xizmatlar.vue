<template>
    <div>
        <h2 class="h1 text-center pt-20">
            Xizmatlarimiz
        </h2>
        <div class="grid gap-7 mt-10" :class="girdColClass">

            <div v-for="data in datas"
                class="p-5 bg-violet flex items-center gap-4 rounded-2xl h-48 relative overflow-hidden">
                <div class="h5 text-white w-1/2">{{ data.title }}</div>
                <img v-bind:src="data.image" alt="" srcset="" class="absolute right-0 bottom-0">
            </div>

        </div>
    </div>
</template>
<script>
import kuryer_xizmati from '@/assets/images/kuryer-xizmati.png'
import xalqaro_yetkazish from '@/assets/images/xalqaro-yetkazish.png'
import usltaman_tolov from '@/assets/images/usltaman-tolov.png'
import fullfilment from '@/assets/images/fullfilment.png'
import individual from '@/assets/images/individual.png'
import kargo from '@/assets/images/kargo.png'
import { computed } from 'vue'

export default {
    data() {
        return {
            girdColClass: 'grid-cols-3',
            datas: [{
                title: 'Kuryer xizmati',
                image: kuryer_xizmati
            },
            {
                title: 'Xalqaro yetkazib berish',
                image: xalqaro_yetkazish
            },
            {
                title: 'Ustama to’lovli pochta jo’natmalarini yetkazib berish',
                image: usltaman_tolov
            },
            {
                title: 'Fullfilment xizmati',
                image: fullfilment
            },
            {
                title: 'Individual yuk tashish xizmati',
                image: individual
            },
            {
                title: 'EMU kargo',
                image: kargo
            }]
        }
    },
    props: {
        gridCol: {
            type: Number,
            default: 3
        }
    },
    mounted() {
        this.girdColClass = 'grid-cols-' + this.gridCol
    },
}
</script>
<style></style>