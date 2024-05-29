<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'profil'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Profil</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <form @submit.prevent="submit" class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

                <div class="relative w-36 h-36 max-lg:mx-auto">
                    <div
                        class="overflow-hidden w-36 h-36 max-lg:mx-auto bg-[#F7F5F7] border border-gray border-dashed rounded-full flex items-center justify-center">
                        <div v-if="user && user.user_photos && user.user_photos.url">
                            <img :src="origin + '/' + user.user_photos.url" alt="" srcset="">
                        </div>
                        <User v-else :fillColor="'fill-icon-gray'" class="w-10 h-10" />
                    </div>
                    <div
                        class="absolute bg-violet right-0 bottom-0 w-12 h-12 rounded-full flex items-center justify-center">
                        <Edit :fillColor="'fill-white'" class="cursor-pointer" @dragover.prevent @dragenter.prevent
                            @dragstart.prevent @drop.prevent="handleFileChange($event.dataTransfer)"
                            @click="triggerFileInput" />
                        <input type="file" accept="image/*" multiple style="display: none;"
                            @change="handleFileChange($event.target)" ref="rasim" />
                    </div>
                </div>

                <div class="grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-6">
                    <Input label="Ism" placeholder="Ism" v-model="form.ism.value" :error="form.ism.error"
                        :disabled="loading" />
                    <Input label="Familiya" placeholder="Familiya" v-model="form.familya.value"
                        :error="form.familya.error" :disabled="loading" />
                    <InputPhone label="Telefon raqamingiz" :required="true" placeholder="Telefon"
                        v-model="form.telefon.value" :error="form.telefon.error" :disabled="loading" />
                    <Textarea class="col-span-2 max-lg:col-span-1" label="Manzil" v-model="form.manzil.value"
                        :error="form.manzil.error" :disabled="loading" />
                </div>

                <router-link :to="{ name: 'parolChange' }" class="nav-menu nav-menu-animation">Parol
                    o‘zgartirish</router-link>

                <div class="flex items-center gap-6 mt-10">
                    <ButtonViolet :disabled="loading" title="Saqlash" />
                </div>
            </form>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'profil'" />
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
import { mapGetters } from 'vuex';
import { gettersTypes } from '@/store/modules/types';
import { checkInput, checkPhone } from '@/helpers/validate';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            form: {
                ism: {
                    value: null,
                    error: null,
                },
                familya: {
                    value: null,
                    error: null,
                },
                telefon: {
                    value: null,
                    error: null,
                },
                manzil: {
                    value: null,
                    error: null
                },
                rasim: {
                    value: null,
                    error: null
                },
            },
            loading: false,
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            formData: new FormData()
        }
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    computed: {
        ...mapGetters({
            user: gettersTypes.currentUser
        })
    },
    watch: {
        user(newUser) {
            if (newUser) {
                this.loadForm();
            }
        }
    },
    methods: {
        async submit() {
            let error = await this.validate();

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;
                this.$store.dispatch('userUpdate', {
                    'ism': this.form.ism.value,
                    'familya': this.form.familya.value,
                    'telefon': "998" + this.form.telefon.value.replaceAll(' ', ''),
                    'manzil': this.form.manzil.value
                }).then(response => {
                    this.loading = false;
                });
            }
        },
        async validate() {
            const ism = checkInput(this.form.ism, this.$t);
            const familya = checkInput(this.form.familya, this.$t);
            const telefon = checkPhone(this.form.telefon, this.$t);
            const manzil = checkInput(this.form.manzil, this.$t);

            if (ism || familya || telefon || manzil) {
                return true;
            }

            const telefonValid = await this.validateTelefonDB();
            return telefonValid;
        },
        async validateTelefonDB() {
            this.loading = true;
            try {
                const telefon = "998" + this.form.telefon.value.replaceAll(' ', '')
                if (this.user && (telefon != this.user.telefon)) { // Telefon raqam o'zgartirilsagina serverga tekshiruv so'ro'vi yuboriladi
                    await this.$store.dispatch('validateTelefonVaLogin', {
                        'telefon': telefon
                    });
                    this.form.telefon.error = null;
                    this.loading = false;
                    return false;
                } else {
                    return false
                }
            } catch (err) {
                this.form.telefon.error = this.$t('validate.phoneUnique');
                this.loading = false;
                return true;
            }
        },
        triggerFileInput() {
            this.$refs.rasim.click();
        },
        handleFileChange: function (event) {
            this.form.rasim.value = event.files[0];
            this.formData.append("file", event.files[0]);

            if (this.user) {
                this.$store.dispatch('userPhoto', {
                    "user_id": this.user.id,
                    "data": this.formData,
                }).then(response => {
                    this.$store.dispatch('me')
                });
            }
        },
        loadForm() {
            if (this.user) {
                this.form.rasim.value = this.user.rasim;
                this.form.ism.value = this.user.ism;
                this.form.familya.value = this.user.familya;
                this.form.telefon.value = this.user.telefon.substring(this.user.telefon.length - 9);
                this.form.manzil.value = this.user.manzil;
            }
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