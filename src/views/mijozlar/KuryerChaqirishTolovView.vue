<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Kuryer chaqirish</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">Kuryer chaqirish</h2>

                        <InputPreview label="Olib ketish joy" value="Toshkent shahri, Yunusobod tumani 14 kavrtal 57 uy"
                            class="mb-6" />
                        <InputPreview label="Jo’natuvchining ism familiyasi:" value="Tuxtaev Shavkat Shuxratovich"
                            class="mb-6" />
                        <InputPreview label="Jo’natuvchining telefon raqami:" value="+998 99 987-65-43" class="mb-6" />
                    </div>
                    <div
                        class="w-[1.5px] max-md:w-auto max-md:h-[1.5px] bg-gradient-to-b from-[#8c3081c7] via-[#EF7F1A] to-[#8c3081c7] relative flex items-center justify-center">
                        <div
                            class="absolute w-10 h-10 rounded-full border bg-white flex items-center justify-center border-[#EF7F1A]">
                            <CheverRight :fillColor="'fill-violet'" class="max-md:rotate-90" />
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="h4 mb-8">Qabul qiluvchi</h2>
                        <InputPreview label="Qabul qilish joyi:"
                            value="Toshkent shahri, Chilonzor tumani 14 kavrtal 57 uy" class="mb-6" />
                        <InputPreview label="Qabul qiluvchining ism familiyasi:" value="Rasulov Ravshan Oybekovich"
                            class="mb-6" />
                        <InputPreview label="Jo’natuvchining telefon raqami:" value="+998 99 987-65-42" class="mb-6" />
                    </div>
                </div>
                <div class="h5 mt-10">
                    Xizmat haqini kim to’laydi?
                </div>
                <div class="flex flex-row gap-6 gap-y-3">
                    <Radio label="Jo’natuvchi" v-model="ino3" />
                    <Radio label="Qabul qiluvchi" v-model="ino3" />
                </div>
                <div class="h5 mt-10">
                    Tarif bo’yicha yukning taxminiy narxi:
                </div>
                <div class="h3-2 text-violet">
                    17 000 so’m
                </div>
                <hr class="text-color_active my-10">

                <div class="h4">
                    Tarif bo’yicha kelishilgan narxga ro’zimisiz?
                </div>
                <div class="flex items-start gap-6 mt-10">
                    <ButtonViolet title="Xa, jo’natish" @click="$router.push({ name: 'kuryerChaqirishFinish' })" />
                    <ButtonOranger title="Yoq, qayta xisoblash" @click="$router.go(-1)" />
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'bizHaqimizda'" />
            </div>
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';

export default {
    data() {
        return {
            ino: '',
            ino2: '',
            ino3: 0,
            ino4: 'off',
            koropka: true
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
    }
}
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>