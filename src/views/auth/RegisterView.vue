<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <form @submit.prevent="submit" class="bg-white dark:bg-gray-900 shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">Ro'yxatdan o'tish</h3>
            <div class="mt-8 mb-4 txt-normal max-md:txt-small text-center">
                Men avvalroq ro‘yxatdan o‘tganman.
                <router-link :to="{ name: 'login' }"
                    class="text-violet nav-menu nav-menu-animation">Kirish</router-link>
            </div>
            <Input label="Ism" v-model="form.ism.value" :error="form.ism.error" :disabled="loading" class="mt-4"
                :autoFocus="'ism'" />
            <Input label="Familiya" v-model="form.familya.value" :error="form.familya.error" :disabled="loading" />
            <InputPhone label="Telefon raqami" v-model="form.telefon.value" :error="form.telefon.error"
                :disabled="loading" />
            <div class="flex max-md:flex-col items-center justify-between gap-2 mt-8 mb-4 txt-normal max-md:txt-small">
                <CheckBox label="Qabul qilaman" :labelClass="'text-gray txt-normal max-md:txt-small'"
                    :inputStyle="'width: 17px; height: 17px;'" v-model="form.foydalanuvchiShartlari.value"
                    :error="form.foydalanuvchiShartlari.error" :disabled="loading" />
                <router-link :to="''"
                    class="text-violet nav-menu nav-menu-animation txt-normal max-md:txt-small mb-0">Foydalanish
                    shartlari</router-link>
            </div>
            <ButtonVioletLogin :disabled="loading" title="Kirish" class="mx-auto mt-10 w-2/3" />
        </form>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { checkInput, checkPhone } from '@/helpers/validate';

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
                foydalanuvchiShartlari: {
                    value: null,
                    error: null,
                },
            },
            loading: false, // Loading flag
        }
    },
    components: {
        Navigation
    },
    methods: {
        async submit() {
            let error = await this.validate();

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;
                this.$store.commit('registerForm', {
                    'ism': this.form.ism.value,
                    'familya': this.form.familya.value,
                    'telefon': this.form.telefon.value,
                    'foydalanuvchiShartlari': this.form.foydalanuvchiShartlari.value
                });
                this.$router.push({ name: 'sms' });
            }
        },
        async validate() {
            const ism = checkInput(this.form.ism, this.$t);
            const familya = checkInput(this.form.familya, this.$t);
            const telefon = checkPhone(this.form.telefon, this.$t);
            const foydalanuvchiShartlari = checkInput(this.form.foydalanuvchiShartlari, this.$t);

            if (ism || familya || telefon || foydalanuvchiShartlari) {
                return true;
            }

            const telefonValid = await this.validateTelefonDB();
            return telefonValid;
        },
        async validateTelefonDB() {
            this.loading = true;
            try {
                await this.$store.dispatch('validateTelefonVaLogin', {
                    'telefon': "998" + this.form.telefon.value.replaceAll(' ', '')
                });
                this.form.telefon.error = null;
                this.loading = false;
                return false;
            } catch (err) {
                this.form.telefon.error = this.$t('validate.phoneUnique');
                this.loading = false;
                return true;
            }
        }
    }
}
</script>
