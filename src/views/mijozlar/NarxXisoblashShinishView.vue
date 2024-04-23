<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Mijozlarimizning biz haqimizda fikrlari</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="flex flex-row max-md:flex-col gap-7 mt-5">
                    <div class="flex-1">
                        <h2 class="h4 mb-8">Jo’natuvchi</h2>

                        <InputPreview label="Viloyat" value="Farg'ona" class="mb-6" />
                        <InputPreview label="Tuman" value="Tioshloqa tumani" class="mb-6" />
                        <InputPreview label="Kuryer chaqirish" value="Yo'q" class="mb-6" />
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
                        <InputPreview label="Viloyat" value="Farg'ona" class="mb-6" />
                        <InputPreview label="Tuman" value="Tioshloqa tumani" class="mb-6" />
                        <InputPreview label="Kuryer chaqirish" value="Yo'q" class="mb-6" />
                    </div>
                </div>
                <div class="flex flex-col">
                    <InputPreview label="Korobka" value="Kenglik 10sm, Uzunlik 15 sm, Balandlik 20sm"
                        class="mt-10 mb-6" />
                    <InputPreview label="Og’irlik" value="1 kg" class="mb-8" />
                </div>
                <hr class="text-color_active">

                <div class="h5 mt-8">
                    Natija:
                </div>
                <div class="h3-2 text-violet">
                    17 000 so’m
                </div>
                <div class="flex items-center gap-6 mt-10">
                    <ButtonOranger title="Qayta xisoblash" />
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'mijoz'" />
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