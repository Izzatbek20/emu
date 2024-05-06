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

                <form action="" class="bg-white rounded-3xl p-7 max-md:p-4">
                    <h2 class="h4 mb-8">Ma’lumot jo’natish</h2>
                    <div class="flex flex-row max-lg:flex-col gap-7 mt-5">

                        <Input label="Sizning ismingiz" :required="true" placeholder="Ism" v-model="fullname"
                            class="w-full" />
                        <InputPhone label="Telefon raqamingiz" :required="true" v-model="phone" class="w-full" />
                        <InputSelect label="Vakansiani tanlang" v-model="vakansiya" class="w-full" />
                    </div>

                    <!-- Fayillarni yuklash -->
                    <DropZone v-model="files" />

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet @click="sendFile" title="Yuborish" class="max-md:w-full" />
                    </div>
                </form>

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
import DropZone from '@/ui-components/DropZone.vue';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            chatId: import.meta.env.VITE_BOT_CHAT_ID, // Chat ID ni kiriting
            token: import.meta.env.VITE_BOT_TOKEN, // Bot tokenini kiriting
            fullname: null,
            phone: null,
            vakansiya: null,
            files: null
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, DropZone
    },
    methods: {
        async sendFile() {
            if (this.files) {
                // Fayllarni jo'natish uchun FormData yaratamiz
                const formData = new FormData();
                // Media massivini yaratamiz
                const media = this.files.map((file, index) => {
                    const formName = `document${index}`;
                    formData.append(formName, file);

                    // Media obyektini qaytaramiz
                    const rest = {
                        type: 'document',
                        media: `attach://${formName}`,
                    }

                    if (this.files.length == (index + 1)) {
                        Object.assign(rest, {
                            caption: 'wev'
                        });
                    }

                    return rest
                });

                try {
                    const url = `https://api.telegram.org/bot${this.token}/sendMediaGroup`;

                    // So'rovni formData bilan yuborish
                    const response = await axios.post(url, formData, {
                        params: {
                            chat_id: this.chatId,
                            media: JSON.stringify(media), // Media massivini JSON formatida yuborish
                        },
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    // console.log('Fayllar yuborildi:', response.data);
                } catch (error) {
                    // console.error('Xato:', error);
                }
            }
        },
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