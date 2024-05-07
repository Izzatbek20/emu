<template>
    <div class="min-h-96 flex flex-grow items-center justify-center">
        <div class="text-center">
            <h1 class="mb-4 text-6xl font-semibold text-violet">404</h1>
            <p class="mb-4 text-lg text-gray-600">{{ $t('notFound.sahifaTopilmadi') }}</p>
            <div class="animate-bounce">
                <svg class="mx-auto h-16 w-16 text-violet " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <p class="mt-4 text-gray-600"><a href="javascript:void(0)" @click="back" class="text-orange">{{
    $t('notFound.ortgaQaytish') }}</a></p>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>