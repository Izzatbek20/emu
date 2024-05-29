<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <form @submit.prevent="submit" class="bg-white w-3/4 max-sm:w-full shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">Login va parol</h3>
            <div class="mt-8 mb-4 txt-normal max-md:txt-small text-center">
                Login bilan parol yarating
            </div>
            <Input label="Login" v-model="form.login.value" :error="form.login.error" :disabled="loading"
                class="mt-4" />
            <Input label="Parol" v-model="form.password.value" :error="form.password.error" :disabled="loading"
                :type="'password'" />
            <Input label="Parol tasdiqlang" v-model="form.passwordConfirm.value" :error="form.passwordConfirm.error"
                :disabled="loading" :type="'password'" />

            <ButtonVioletLogin title="Kirish" :disabled="loading" class="mx-auto mt-10 w-2/3" />
        </form>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { checkInput } from '@/helpers/validate';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            form: {
                login: {
                    value: null,
                    error: null,
                },
                password: {
                    value: null,
                    error: null,
                },
                passwordConfirm: {
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
    computed: {
        ...mapState({
            registerForm: state => state.auth.registerForm
        }),
    },
    mounted() {
        if (!this.hasRegisterForm()) {
            this.$router.push({ name: 'home' });
        }
    },
    methods: {
        async submit() {
            let error = await this.validate();

            if (error) {
                return;
            }

            if (!error && this.hasRegisterForm()) {
                this.loading = true;
                this.$store.dispatch('register', {
                    "ism": this.registerForm.ism,
                    "familya": this.registerForm.familya,
                    "telefon": "998" + this.registerForm.telefon.replaceAll(' ', ''),
                    // "manzil": "string",
                    // "rasm": "string",
                    "username": this.form.login.value,
                    "password": this.form.password.value
                }).then(response => {
                    this.$store.dispatch('login', {
                        "username": this.form.login.value,
                        "password": this.form.password.value
                    }).then(response => {
                        this.$router.push({ name: 'profil' })
                    }).catch(error => {
                        this.responseError = "Login yoki parol xato"
                        this.$router.push({ name: 'login' })
                    })
                }).catch(err => {
                    this.loading = false
                });
            }
        },
        async validate() {
            const login = checkInput(this.form.login, this.$t);
            let password = checkInput(this.form.password, this.$t);
            if (!password && this.form.password.value.length < 6) {
                this.form.password.error = this.$t('validate.passwordLength')
                password = true
            }
            const passwordConfirm = checkInput(this.form.passwordConfirm, this.$t);
            const passwordANDpassword = !(this.form.passwordConfirm.value == this.form.password.value);
            if (passwordANDpassword) {
                this.form.passwordConfirm.error = this.$t('validate.parolVaTasdiqiyParol')
            }

            if (login || password || passwordConfirm || passwordANDpassword) {
                return true;
            }

            const loginValid = await this.validateLoginDB();
            return loginValid;
        },
        async validateLoginDB() {
            try {
                await this.$store.dispatch('validateTelefonVaLogin', {
                    'username': this.form.login.value
                });
                this.form.login.error = null;
                return false;
            } catch (err) {
                this.form.login.error = this.$t('validate.loginUnique');
                return true;
            }
        },
        hasRegisterForm() {
            const form = this.registerForm

            if (form.ism && form.familya && form.telefon) {
                return true
            }

            return false
        }
    }
}
</script>