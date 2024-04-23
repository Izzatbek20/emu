<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'profil'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Treking</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:basis-full max-xl:w-full bg-white rounded-3xl p-7 max-md:p-4">

                <div
                    class="grid w-3/4 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-lg:gap-4 max-md:gap-2">
                    <div class="flex flex-row gap-2">
                        <Barcode :fillColor="'fill-violet'" />
                        <div>
                            <div class="txt-small max-xl:text-base">Buyurtma ID</div>
                            <div class="h4 max-xl:h5">586398741236</div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2">
                        <BoxTime :fillColor="'fill-violet'" />
                        <div>
                            <div class="txt-small max-xl:text-base">Yetib kelish vaqti
                            </div>
                            <div class="h4 max-xl:h5">13.01.2024</div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2">
                        <Weight :fillColor="'fill-violet'" />
                        <div>
                            <div class="txt-small max-xl:text-base">O’girligi</div>
                            <div class="h4 max-xl:h5">2.20kg</div>
                        </div>
                    </div>
                </div>
                <hr class="text-color_active my-7">
                <div class="h5">
                    Yukning treking tarixi
                </div>

                <div class="bg-[#F7F5F7] rounded-3xl p-7 max-md:p-4 mt-7">
                    <div>
                        <div class="flex items-center gap-4">
                            <div
                                class="size-[60px] max-sm:size-[40px] rounded-2xl max-sm:rounded-xl bg-white flex items-center justify-center">
                                <SendRequest :fillColor="'fill-violet'" />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">Xitoy onlayn
                                do’konlaridan sotuvni
                                amalga o’shiring</span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[30px] w-[60px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-[#F7F5F7]">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-4">
                            <div
                                class="size-[60px] max-sm:size-[40px] rounded-2xl max-sm:rounded-xl bg-white flex items-center justify-center">
                                <WhereHouse :fillColor="'fill-violet'" />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">Mahsulotni
                                ro’yxatdan
                                o’tkazing</span>
                        </div>
                        <div class="h-[60px] max-sm:h-[30px] max-sm:w-[30px] w-[60px] flex justify-center">
                            <div
                                class="h-full max-sm:left-1 border-l-[1px] border-r-[1px] max-smborder-l-[0.5px] max-smborder-r-[0.5px] border-gray border-dashed relative flex items-center justify-center">
                                <div class="size-7 max-sm:size-4 border border-gray absolute rounded-full bg-[#F7F5F7]">
                                    <div class="relative">
                                        <div
                                            class="absolute left-[1.5px] top-[3px] max-sm:left-[0.5px] max-sm:top-[1px]">
                                            <ChevorDown :fillColor="'fill-gray '" class="max-sm:size-[15px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center gap-4">
                            <div
                                class="size-[60px] max-sm:size-[40px] rounded-2xl max-sm:rounded-xl bg-white flex items-center justify-center">
                                <BoxTick :fillColor="'fill-violet'" />
                            </div>
                            <span class="txt-big max-md:txt-small max-sm:txt-micro max-sm:w-[230px]">Mahsulotingiz sizga
                                10 -15 kun
                                ichida yetib keladi</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'profil'" />
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
        to(id) {
            alert(id)
        }
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