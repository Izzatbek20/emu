<template>
    <div class="min-h-screen flex items-center justify-center w-full rounded-3xl">
        <div class="bg-white w-3/4 max-sm:w-full shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">Login va parol</h3>
            <div class="mt-8 mb-4 txt-normal max-md:txt-small text-center">
                Login bilan parol yarating
            </div>
            <Input label="Login" v-model="login" class="mt-4" />
            <Input label="Parol" v-model="password" />
            <Input label="Parol tasdiqlang" v-model="password" />

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
            // this.$router.push({ name: 'sms' })
        }
    },
}
</script>