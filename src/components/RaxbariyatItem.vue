<template>
    <div class="p-5 bg-white rounded-2xl flex max-[420px]:flex-col gap-5 mb-3 w-full">
        <div class="">
            <img :src="user.image" class="rounded h-28 w-28 object-cover object-top" alt="person" srcset="">
        </div>
        <div class="flex flex-col gap-5">
            <div>
                <div class="h4 max-xl:h5">{{ user.fullname }}</div>
                <span class="text-gray text-lg max-xl:text-base font-normal">{{ user.lovozim }}</span>
            </div>
            <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-lg:gap-4 max-md:gap-2">
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" />
                    <div>
                        <div class="text-gray text-lg max-xl:text-base font-normal leading-none">E-mail:</div>
                        <div class="text-lg max-xl:text-base font-normal leading-none">{{ user.email }}</div>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <Clock :fillColor="'fill-violet'" />
                    <div>
                        <div class="text-gray text-lg max-xl:text-base font-normal leading-none">Qabul kunlari:</div>
                        <div class="text-lg max-xl:text-base font-normal leading-none">{{ user.work_day }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: Object
    }
}
</script>
<style></style>