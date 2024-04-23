<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'xizmlatlar'" class="max-xl:h-14 my-10" />
        </div>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">
                <div
                    class="w-full h-96 flex items-center max-md:items-start bg-violet rounded-3xl relative overflow-hidden">
                    <div class="flex p-10 items-center max-md:items-start max-md:py-8">
                        <div
                            class="w-2/5 max-lg:w-3/5 max-md:w-4/6 max-sm:w-4/5 text-white h1 max-2xl:h2 max-sm:h3 z-20">
                            Kuryer xizmati
                        </div>
                        <img src="@/assets/images/kuryer-xizmati.png" alt="image" class="absolute bottom-0 right-0 w-96"
                            srcset="">
                    </div>
                </div>

                <p class="txt-big max-md:txt-normal max-sm:txt-small  mt-7">
                    Ichki kuryerlik xizmati orqali Siz Respublika buylab o‘z jo‘natmalaringizni tez, ishonchli va
                    hamyonbop narxlarda yetkazib berishingiz mumkin. EMU keng qamrovli yetkazib berish geografiyasiga
                    ega bulib, Respublikaning chetki tumanlari, qishloqlari va aholi yashash punktlarini o‘z ichiga
                    olgan. O‘zbekiston buylab jami 37 ta filial,  300 tadan ortiq shtat xodimlari shundan,180 ta dan
                    ortiq kuryerlar faolyat ko‘rsatib kelmoqda.Respublika ichi 4 ta zonaga bo‘lingan bo‘lib, yetkazib
                    berish muddati Toshkent shahridan hisoblanganda to 3 chi zonada joylashgan 10 ta viloyat uchun 24
                    soat, 4 chi zonada joylashgan Qoraqolpog‘iston Respublikasi, Xorazm viloyati va Surxondaryo
                    viloyatlariga 36 soat qilib belgilangan.
                </p>
                <b class="h5 max-md:h6 max-sm:h7 block mt-5">
                    ​Ichki kuryerlik xizmati 2 ta tarifga bo‘lingan:
                </b>
                <ul class="list-disc list-inside ml-3 mt-4 txt-big max-md:txt-normal max-sm:txt-small ">
                    <li>​Universal</li>
                    <li>​Uygacha (eshiginzgizgacha)</li>
                </ul>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet title="Xizmatdan foydalanish" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar :name="'xizmlatlar'" />
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