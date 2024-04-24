<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <div class="bg-white shadow rounded-3xl px-8 py-6 max-w-md">
            <h3 class="h3-2 text-center">Shaxsiy kabinetiga kirish</h3>
            <Input label="Login" v-model="login" class="mt-4" />
            <Input label="Parol" v-model="password" />
            <div class="w-full flex justify-center">
                <router-link :to="{ name: 'register' }" class="nav-menu nav-menu-animation">Roʻyxatdan
                    oʻtish</router-link>
            </div>
            <ButtonVioletLogin title="Kirish" class="mx-auto mt-10 w-2/3" />
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
    },
}
</script>