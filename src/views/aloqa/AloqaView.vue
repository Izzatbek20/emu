<template>
    <div>
        <!-- Navigation -->
        <Navigation>Biz bilan bog’lanish</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 ">

                <div class="bg-white rounded-3xl p-7 max-md:p-4">
                    <h2 class="h4 mb-8">Bog’lanish ma’lumotlari</h2>
                    <div class="grid grid-cols-4 max-lg:grid-cols-2 gap-7">
                        <div class="flex flex-row gap-2">
                            <Marker :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-violet text-lg max-xl:text-base font-normal leading-none mb-1">Manzil
                                </div>
                                <div class="text-base max-xl:text-sm font-normal leading-none">O’zbekiston, Toshkent
                                    shahri,
                                    Shota Rustaveli ko’chasi, 35</div>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2">
                            <Clock :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-gray text-lg max-xl:text-base font-normal leading-none">Ish vaqti</div>
                                <div class="text-lg max-xl:text-base font-normal leading-none">24 soat
                                    (Bayram kunlaridan tashqari)
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2">
                            <Phone :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-gray text-lg max-xl:text-base font-normal leading-none">Telefon</div>
                                <div class="text-lg max-xl:text-base font-normal leading-none">+998712009669
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2">
                            <Email :fillColor="'fill-violet'" />
                            <div>
                                <div class="text-gray text-lg max-xl:text-base font-normal leading-none">E-mail:</div>
                                <div class="text-lg max-xl:text-base font-normal leading-none">info@emu.uz
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 rounded-md border border-line-gray" style="position:relative;overflow:hidden;"><a
                            href="https://yandex.uz/maps/org/emu/125146085698/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:0px;">Emu</a><a
                            href="https://yandex.uz/maps/10335/tashkent/category/courier_services/184105430/?utm_medium=mapframe&utm_source=maps"
                            style="color:#eee;font-size:12px;position:absolute;top:14px;">Kurer xizmatlari
                            Toshkentda</a><iframe
                            src="https://yandex.uz/map-widget/v1/?ll=69.300596%2C41.243656&mode=search&oid=125146085698&ol=biz&sctx=ZAAAAAgBEAAaKAoSCa6gaYmVVVFAEXcVUn5SpURAEhIJtJQsJ6H01j8RxhaCHJQwwz8iBgABAgMEBSgKOABAn58GSAFqAnV6nQHNzEw9oAEAqAEAvQFDTUemwgEGwvKmmtIDggIKZW11IHBvY2h0YYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.300596%2C41.243656&sspn=0.006048%2C0.002530&text=emu%20pochta&z=17.9"
                            width="100%" height="300" frameborder="0" allowfullscreen="true"
                            style="position:relative;"></iframe>
                    </div>

                </div>


                <div class="bg-white rounded-3xl p-7 max-md:p-4  mt-7">
                    <h2 class="h4 mb-8">Xabaringizni qoldiring</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        Savol va takliflaringizni yozib qoldiring, menedjerlarimiz siz bilan bog’lanishadi
                    </p>
                    <div class="flex max-lg:flex-col gap-5 mt-5">
                        <Input label="Sizning ismingiz" :required="true" placeholder="Ism" v-model="ino3"
                            class="w-full" />
                        <InputPhone label="Telefon raqamingiz" :required="true" v-model="ino3" class="w-full" />
                    </div>
                    <Textarea label="Xabar matnini kiriting" :placeholder="'Matn'" v-model="ino3" class="w-full mt-6" />

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet @click="xabar" title="Yuborish" class="max-md:w-full" />
                    </div>
                    <!-- <AmoForm class="w-full" /> -->
                </div>
                <div class="bg-white rounded-3xl p-7 max-md:p-4  mt-7">
                    <h2 class="h4 mb-8">Shikoyat va taklifingizni kiriting</h2>
                    <p class="txt-normal max-md:txt-small max-sm:txt-micro ">
                        Savol va takliflaringizni yozib qoldiring, menedjerlarimiz siz bilan bog’lanishadi
                    </p>
                    <div class="flex max-lg:flex-col gap-5 mt-5">
                        <Input label="Sizning ismingiz" :required="true" placeholder="Ism" v-model="ino3"
                            class="w-full" />
                        <InputPhone label="Telefon raqamingiz" :required="true" v-model="ino3" class="w-full" />
                    </div>
                    <Textarea label="Xabar matnini kiriting" :placeholder="'Matn'" v-model="ino3" class="w-full mt-6" />
                    <div class="flex flex-row gap-6 gap-y-3">
                        <Radio label="Jismoniy shaxsman" v-model="ino3" />
                        <Radio label="Yuridik shaxsman" v-model="ino3" />
                    </div>

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet @click="shikoyat" title="Jo’natish" class="max-md:w-full" />
                    </div>
                </div>


            </div>
            <div class="basis-1/4 max-xl:hidden">
                <button id="pin"
                    class="group hover-button inline-flex p-4 max-md:p-2 h-full items-center relative bg-violet overflow-hidden rounded-[100px] flex-shrink-0">
                    <span class="group-hover:text-white transition-color duration-500 text-white z-20"
                        :class="'text-xl max-md:text-sm font-semibold leading-normal'">
                        <div class="flex justify-start item flex-row gap-2">
                            <Phone :fillColor="'fill-white'" class="mt-1.5" />
                            <div>
                                <div
                                    class="text-white  text-start text-lg max-xl:text-base font-normal leading-none mb-1">
                                    Qong’iroqga buyurtma
                                </div>
                                <div class="txt-micro text-start max-xl:txt-micro-2 font-normal leading-none">30
                                    soniyada sizga
                                    qong’iroq qilishadi</div>
                            </div>
                        </div>
                    </span>
                    <div class="effect"></div>
                </button>
            </div>
        </div>

        <!-- Modal -->
        <Modal title="Bog‘lanish" :isOpen="isOpen" @close="closeModal">

            <div class="h5 my-10 text-center">Tez orada sizga javob bilan qaytamiz.</div>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModal" title="Saqlash" class="w-full" />
            </div>
        </Modal>
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
            koropka: true,
            isOpen: false
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    methods: {
        xabar() {
            this.isOpen = true
        },
        shikoyat() {
            this.isOpen = true
        },
        closeModal() {
            this.isOpen = false
        }
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