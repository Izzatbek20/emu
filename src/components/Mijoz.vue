<template>
    <div class="grid grid-cols-3 gap-7 mt-10 flex-wrap">

        <div v-for="(data, index) in datas" :key="index"
            class="p-6 bg-white flex flex-col items-start gap-6 rounded-[2rem]">
            <div class="w-full h-[15rem] rounded-xl rounded-bl-[3.5rem] relative"
                :style="'background-image: url(\'' + data.image + '\')'">
                <Play class="absolute bottom-2 left-2 w-24 h-24" />
            </div>
            <h2 class="h4">{{ data.title }}</h2>
            <span class="text-base font-normal">{{ data.short }}</span>
            <div class="h6">{{ data.body }}</div>
        </div>

    </div>
</template>
<script>
import image1 from '@/assets/images/mijoz/1.jpg';
import image2 from '@/assets/images/mijoz/2.png';
import image3 from '@/assets/images/mijoz/3.png';

export default {
    data() {
        return {
            datas: [
                {
                    'title': 'Alisher, 32 yosh',
                    'short': 'Internet magazin asoschisi',
                    'body': '“Ajoyib xizmat! Tez yetkazib berish orqali biznesimda buyurtma hajmini sezilarli darajada oshirdim. Rahmat!”',
                    'image': image1
                },
                {
                    'title': 'Dilya, 28 yosh',
                    'short': 'Logistika bo’yicha menedjer',
                    'body': '“EMU Ekspress yetkazib berish ishonchimni oqladi. Hamkorlikdan juda mamnunman, hammaga tavsiya qilaman! ”',
                    'image': image2
                },
                {
                    'title': 'Leyla, 35 yosh',
                    'short': 'Kichik biznes egasi',
                    'body': '"Men xalqaro yetkazib berish xizmatlaridan foydalandim - natija kutganimdan a’lo! Hammaga tavsiya qilaman!"',
                    'image': image3
                }
            ]
        }
    }
}
</script>
<style></style>