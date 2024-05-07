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

                <form @submit.prevent="sendFile" action="" class="bg-white rounded-3xl p-7 max-md:p-4">
                    <h2 class="h4 mb-8">Ma’lumot jo’natish</h2>
                    <div class="flex flex-row max-lg:flex-col gap-7 mt-5">

                        <Input label="Sizning ismingiz" :required="true" placeholder="Ism" :disabled="loading"
                            v-model="fullname.value" :error="fullname.error" class="w-full" />
                        <InputPhone label="Telefon raqamingiz" :required="true" :disabled="loading"
                            v-model="phone.value" :error="phone.error" class="w-full" />
                        <InputSelect label="Vakansiani tanlang" :disabled="loading" v-model="vakansiya.value"
                            :error="vakansiya.error" class="w-full" />
                    </div>

                    <!-- Fayillarni yuklash -->
                    <DropZone v-model="files.value" :disabled="loading" :error="files.error" />

                    <div class="flex items-center gap-6 mt-10">
                        <ButtonViolet :disabled="loading" title="Yuborish" class="max-md:w-full" />
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
import DropZone from '@/ui-components/DropZone.vue';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            chatId: import.meta.env.VITE_BOT_CHAT_ID, // Chat ID ni kiriting
            token: import.meta.env.VITE_BOT_TOKEN, // Bot tokenini kiriting
            fullname: {
                value: null,
                error: null
            },
            phone: {
                value: null,
                error: null
            },
            vakansiya: {
                value: null,
                error: null
            },
            files: {
                value: null,
                error: null
            },
            isOpen: false,
            loading: false // Loading flag
        }
    },
    components: {
        BarGorizontal, Bar, Navigation, DropZone
    },
    methods: {
        async sendFile() {
            let error = false
            if (!this.fullname.value) {
                this.fullname.error = this.$t('validate.required');
                error = true
            } else {
                this.fullname.error = null;
            }

            if (!this.phone.value) {
                this.phone.error = this.$t('validate.required');
                error = true
            } else {
                this.phone.error = null;
            }

            if (this.phone.value.length != 12) {
                this.phone.error = this.$t('validate.phone');
                error = true
            } else {
                this.phone.error = null;
            }
            if (!this.vakansiya.value) {
                this.vakansiya.error = this.$t('validate.required');
                error = true
            } else {
                this.vakansiya.error = null;
            }
            if (!this.files.value) {
                this.files.error = this.$t('validate.required');
                error = true
            } else {
                this.files.error = null;
            }

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;
                // Fayllarni jo'natish uchun FormData yaratamiz
                const formData = new FormData();
                // Media massivini yaratamiz
                const media = this.files.value.map((file, index) => {
                    const formName = `document${index}`;
                    formData.append(formName, file);

                    // Media obyektini qaytaramiz
                    const rest = {
                        type: 'document',
                        media: `attach://${formName}`,
                    }
                    if (this.files.value.length == (index + 1)) {
                        Object.assign(rest, {
                            caption: `<b>Ism:</b> ${this.fullname.value}\n<b>Telefon:</b> +998 ${this.phone.value}\n<b>Vakansiya:</b> ${this.vakansiya.value}`,
                            parse_mode: 'html',
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

                    if (response.data) {
                        this.isOpen = true

                        // Fo'rmani tozalash
                        this.fullname.value = null;
                        this.phone.value = null;
                        this.vakansiya.value = null;
                        this.files.value = null;
                    }
                } catch (error) {
                    console.error('Xato:', error);
                } finally {
                    // Formani yuborish jarayoni tugagandan so'ng loading flagini false ga o'rnating
                    this.loading = false;
                }
            }
        },
        closeModal() {
            this.isOpen = false
        }
    },
    beforeMount() {
        this.$router.push({ name: 'vakansiyaId', params: { id: 1 } })
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