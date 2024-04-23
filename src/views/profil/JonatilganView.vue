<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'profil'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Jo'natilgan pochtalar</Navigation>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:basis-full max-xl:w-full bg-white rounded-3xl p-7 max-md:p-4">

                <!-- component -->
                <div class="w-full mb-8 overflow-hidden border border-line-gray rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-md font-semibold tracking-wide text-left text-white bg-violet">
                                    <th class="px-4 py-3">Vaqti va sanasi</th>
                                    <th class="px-4 py-3">Status</th>
                                    <th class="px-4 py-3">Filial</th>
                                    <th class="px-4 py-3">Qoshimcha</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr @click="to(1)"
                                    class="border border-line-gray  cursor-pointer group transition-colors duration-500 hover:bg-orange hover:text-white">
                                    <td class="px-4 py-3">
                                        <div class="flex items-center ">
                                            <div>
                                                <p class="txt-small max-md:txt-macro">25.02.2024</p>
                                                <p
                                                    class="txt-micro max-md:txt-macro-2 text-gray transition-colors duration-500 group-hover:text-white">
                                                    13:04
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">Kuryer skladqa qaytardi</td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">
                                        Buxoro filiali
                                    </td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">Mijozga o’tkazildi</td>
                                </tr>
                                <tr @click="to(1)"
                                    class="border border-line-gray  cursor-pointer group transition-colors duration-500 hover:bg-orange hover:text-white">
                                    <td class="px-4 py-3">
                                        <div class="flex items-center ">
                                            <div>
                                                <p class="txt-small max-md:txt-macro">25.02.2024</p>
                                                <p
                                                    class="txt-micro max-md:txt-macro-2 text-gray transition-colors duration-500 group-hover:text-white">
                                                    13:04
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">Kuryer skladqa qaytardi</td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">
                                        Buxoro filiali
                                    </td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">Mijozga o’tkazildi</td>
                                </tr>
                                <tr @click="to(1)"
                                    class="border border-line-gray  cursor-pointer group transition-colors duration-500 hover:bg-orange hover:text-white">
                                    <td class="px-4 py-3">
                                        <div class="flex items-center ">
                                            <div>
                                                <p class="txt-small max-md:txt-macro">25.02.2024</p>
                                                <p
                                                    class="txt-micro max-md:txt-macro-2 text-gray transition-colors duration-500 group-hover:text-white">
                                                    13:04
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">Kuryer skladqa qaytardi</td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">
                                        Buxoro filiali
                                    </td>
                                    <td class="px-4 py-3 txt-small max-md:txt-macro">Mijozga o’tkazildi</td>
                                </tr>
                            </tbody>
                        </table>
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
            this.$router.push({ name: 'traking', params: { id: id } })
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