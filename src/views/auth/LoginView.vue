<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <form @submit.prevent="submit" class="bg-white shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">Shaxsiy kabinetiga kirish</h3>
            <Input label="Login" v-model="login.value" :error="login.error" class="mt-4" :autoFocus="'login'"
                :disabled="loading" />
            <Input label="Parol" v-model="password.value" :error="password.error ? password.error : responseError"
                :disabled="loading" :type="'password'" />
            <!-- <div class="w-full flex justify-center">
                <router-link :to="{ name: 'register' }" class="nav-menu nav-menu-animation">Roʻyxatdan
                    oʻtish</router-link>
            </div> -->
            <ButtonVioletLogin :disabled="loading" title="Kirish" class="mx-auto mt-10 w-2/3" />
        </form>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import { removeItem } from '@/helpers/rwLocalStorage';
import { checkInput } from '@/helpers/validate.js'

export default {
    data() {
        return {
            login: {
                value: null,
                error: null,
            },
            password: {
                value: null,
                error: null,
            },

            responseError: null,
            loading: false // Loading flag
        }
    },
    components: {
        Navigation
    },
    methods: {
        async submit() {
            let error = this.validate()

            if (error) {
                return
            }
            if (!error) {
                this.loading = true;
                this.$store.dispatch('login', {
                    "username": this.login.value,
                    "password": this.password.value
                }).then(response => {
                    this.$router.push({ name: 'profil' })
                }).catch(error => {
                    this.responseError = "Login yoki parol xato"
                })
            }
            this.loading = false;
        },
        validate() {
            let error = false;

            error = checkInput(this.login, this.$t);
            error = checkInput(this.password, this.$t);

            return error;
        },
    },
    mounted() {
        this.$store.commit('logout')
    }
}
</script>