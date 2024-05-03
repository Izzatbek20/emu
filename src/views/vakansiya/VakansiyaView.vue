<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'vakansiya'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Vakansiya</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 ">

                <div class="bg-white rounded-3xl p-7 max-md:p-4">
                    <h2 class="h4 mb-8">Ma’lumot jo’natish</h2>
                    <div class="flex flex-row max-lg:flex-col gap-7 mt-5">

                        <Input label="Sizning ismingiz" :required="true" placeholder="Ism" v-model="ino3"
                            class="w-full" />
                        <InputPhone label="Telefon raqamingiz" :required="true" v-model="ino3" class="w-full" />
                        <InputSelect label="Vakansiani tanlang" v-model="ino3" class="w-full" />
                    </div>

                    <div class="flex flex-row max-md:flex-col gap-7 mb-6">
                        <div class="flex items-center gap-2">
                            <Pdf class="h-10 w-10" />
                            <div class="grid grid-cols-1">
                                <span class="txt-small">Resyume.pdf</span>
                                <div>
                                    <span class="txt-micro text-violet underline cursor-pointer mr-2">O'chirish</span>
                                    <span class="txt-micro text-gray">1.2 mb</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="mt-10 p-7 bg-[#F7F5F7] rounded-2xl cursor-pointer border border-1 border-gray border-dashed flex items-center justify-center h-32">
                        <div class="absolute flex items-center gap-2 max-[320px]:w-[80%] flex-nowrap">
                            <Plus :fillColor="'fill-icon-gray'" />
                            <span class="txt-micro text-gray w-full">Rezyume va boshqa faylni ilova qiling (pdf)</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet title="Yuborish" class="max-md:w-full" />
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-7 max-md:p-4 mt-7">
                    <h2 class="h4 mb-8">Kuryer</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>
                <div class="bg-white rounded-3xl p-7 max-md:p-4 mt-7">
                    <h2 class="h4 mb-8">Kuryer</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>
                <div class="bg-white rounded-3xl p-7 max-md:p-4 mt-7">
                    <h2 class="h4 mb-8">Kuryer</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>

            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'vakansiya'" />
            </div>
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

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
    },
    mounted() {
        let pin = document.getElementById("pin");
        let notPin = document.getElementById("pin-conatiner");

        ScrollTrigger.create({
            trigger: pin,
            start: "top 20%",
            end: () => `${notPin.offsetHeight - pin.offsetHeight}px 20%`,
            invalidateOnRefresh: true,
            pin: pin,
            pinSpacing: true,

        });
    }
}
</script>

<style scoped></style>