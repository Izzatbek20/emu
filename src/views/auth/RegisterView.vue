<template>
    <div class="min-h-screen flex items-center justify-center w-full rounded-3xl">
        <div class="bg-white dark:bg-gray-900 shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">Ro'yxatdan o'tish</h3>
            <div class="mt-8 mb-4 txt-normal max-md:txt-small text-center">
                Men avvalroq ro‘yxatdan o‘tganman.
                <router-link :to="{ name: 'login' }"
                    class="text-violet nav-menu nav-menu-animation">Kirish</router-link>
            </div>
            <Input label="Ism" v-model="login" class="mt-4" />
            <Input label="Familiya" v-model="password" />
            <InputPhone label="Telefon raqami" v-model="password" />

            <div class="flex max-[360px]:flex-col items-center justify-between gap-2 mt-8 mb-4 txt-normal max-md:txt-small">
                <CheckBox label="Qabul qilaman" :labelClass="'text-gray txt-normal max-md:txt-small'" class="h-2"
                    v-model="password" />
                <router-link :to="''"
                    class="text-violet nav-menu nav-menu-animation txt-normal max-md:txt-small mb-0">Foydalanish
                    shartlari</router-link>
            </div>
            <ButtonVioletLogin title="Kirish" @click="submit" class="mx-auto mt-10 w-2/3" />
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
    data() {
        return {
            login: null,
            password: null,
        }
    },
    components: {
        Navigation
    },
    mounted() {
        // console.log(this.$route);
    },
    methods: {
        submit() {
            this.$router.push({ name: 'sms' })
        }
    },
}
</script>