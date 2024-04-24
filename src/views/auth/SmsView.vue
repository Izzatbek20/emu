<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <div class="bg-white dark:bg-gray-900 shadow rounded-3xl px-8 py-6 max-w-md">
            <div class="my-8 txt-normal max-md:txt-small text-center">
                Sizning so'rovingizni tasdiqlash maqsadida telefon raqamingizga SMS orqali kod jo'natildi. Bu kod orqali
                shaxsingizni identifikatsiya qilishingiz mumkin.
            </div>
            <form action="#">
                <h5 class="h5">Iltimos, SMS kodni kiriting</h5>
                <div class="grid grid-cols-6 gap-3 max-sm:gap-1 mt-2">
                    <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                    <Input v-model="login" :classInput="'w-12 h-12 max-xs:w-6 max-xs:h-6'" />
                </div>

                <div
                    class="flex max-[360px]:flex-row items-center justify-between gap-2 mt-8 mb-4 txt-normal max-md:txt-small">
                    <router-link :to="''"
                        class="text-violet nav-menu nav-menu-animation txt-normal max-md:txt-small mb-0">Yana bir marta
                        kod
                        jo’natish</router-link>
                    <div class="text-gray txt-normal max-md:txt-small">59 soniya</div>
                </div>
                <ButtonVioletLogin title="Kirish" @click="submit" class="mx-auto mt-10 w-2/3" />
            </form>
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
            this.$router.push({ name: 'register2' })
        }
    },
}
</script>