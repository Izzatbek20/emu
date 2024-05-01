<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Sertifikat</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <img :src="sertificat" class="object-cover w-full">

                <div class="flex items-center gap-6 mt-10">
                    <ButtonOranger title="Orqaga qaytish" @click="$router.go(-1)" />
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
import SERTIFICAT from '@/assets/files/GIUZ-1030-QC+2023.svg';


export default {
    data() {
        return {
            sertificat: SERTIFICAT
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
    },
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