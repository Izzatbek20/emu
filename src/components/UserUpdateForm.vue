<template>
    <form @submit.prevent="submit" class="basis-3/4 max-xl:flex-1 bg-white rounded-3xl p-7 max-md:p-4">

        <div class="relative w-36 h-36 max-lg:mx-auto">
            <div class="overflow-hidden w-36 h-36 max-lg:mx-auto bg-[#F7F5F7] rounded-full flex items-center justify-center"
                :class="{ 'border border-gray border-dashed': user && user.user_photos && !user.user_photos.url }">
                <div v-if="user && user.user_photos && user.user_photos.url">
                    <img :src="origin + '/' + user.user_photos.url" alt="" srcset="">
                </div>
                <User v-else :fillColor="'fill-icon-gray'" class="w-10 h-10" />
            </div>
            <div class="absolute bg-violet right-0 bottom-0 w-12 h-12 rounded-full flex items-center justify-center">
                <Edit :fillColor="'fill-white'" class="cursor-pointer" @dragover.prevent @dragenter.prevent
                    @dragstart.prevent @drop.prevent="handleFileChange($event.dataTransfer)"
                    @click="triggerFileInput" />
                <input type="file" accept="image/*" multiple style="display: none;"
                    @change="handleFileChange($event.target)" ref="rasim" />
            </div>
        </div>

        <div class="grid grid-cols-3 max-lg:grid-cols-1 mt-10 gap-6">
            <Input label="Ism" placeholder="Ism" v-model="form.ism.value" :error="form.ism.error" :disabled="loading"
                :editIcon="true" />
            <Input label="Familiya" placeholder="Familiya" v-model="form.familya.value" :error="form.familya.error"
                :disabled="loading" :editIcon="true" />
            <InputPhone label="Telefon raqamingiz" :required="true" placeholder="Telefon" v-model="form.telefon.value"
                :error="form.telefon.error" :disabled="loading" :editIcon="true" />
            <Textarea class="col-span-2 max-lg:col-span-1" label="Manzil" v-model="form.manzil.value"
                :error="form.manzil.error" :disabled="loading" :editIcon="true" />
        </div>
        <!-- <UserUpdateForm /> -->
        <router-link :to="{ name: 'parolChange' }" class="nav-menu nav-menu-animation">Parol
            o‘zgartirish</router-link>

        <div class="flex items-center gap-6 mt-10">
            <ButtonViolet :disabled="loading" :title="$t('Saqlash')" />
        </div>
    </form>
</template>

<script>
import { checkInput, checkPhone } from '@/helpers/validate';

export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            form: {
                ism: {
                    value: this.user ? this.user.ism : '',
                    error: null,
                },
                familya: {
                    value: this.user ? this.user.familya : '',
                    error: null,
                },
                telefon: {
                    value: this.user ? this.user.telefon.substring(this.user.telefon.length - 9) : '',
                    error: null,
                },
                manzil: {
                    value: this.user ? this.user.manzil : '',
                    error: null,
                },
                rasim: {
                    value: this.user ? this.user.rasim : '',
                    error: null,
                },
            },
            loading: false,
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            formData: new FormData()
        };
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
                const telefon = "998" + this.form.telefon.value.replaceAll(' ', '');
                if (this.user && (telefon !== this.user.telefon)) { // Telefon raqam o'zgartirilsagina serverga tekshiruv so'ro'vi yuboriladi
                    await this.$store.dispatch('validateTelefonVaLogin', {
                        'telefon': telefon
                    });
                    this.form.telefon.error = null;
                    this.loading = false;
                    return false;
                } else {
                    return false;
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
        handleFileChange(event) {
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
    },
};
</script>
