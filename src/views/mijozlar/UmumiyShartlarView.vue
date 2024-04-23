<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Shartnoma va umumiy shartlar</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <div class="h4 mb-10">
                    Ushbu bo'limda siz xizmatlarni ko'rsatish uchun mijozlar shartnomalarini va ularga qo'shimchalarni
                    yuklab olishingiz mumkin
                </div>

                <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                    <div class="flex items-center gap-2">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">Sertifikat.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2"
                                    @click="$router.push({ name: 'umumiyShartlarKorish' })">Ko'rish</span>
                                <span class="txt-micro text-gray">1.2 mb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                    <div class="flex items-center gap-2">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">EMU umumiy oferta shartlari.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2">Yuklab olish</span>
                                <span class="txt-micro text-gray">1.2 mb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                    <div class="flex items-center gap-2">
                        <Pdf class="h-10 w-10" />
                        <div class="grid grid-cols-1">
                            <span class="txt-small">EMU umumiy shartlar.pdf</span>
                            <div>
                                <span class="txt-micro text-violet underline cursor-pointer mr-2">Yuklab olish</span>
                                <span class="txt-micro text-gray">1.2 mb</span>
                            </div>
                        </div>
                    </div>
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