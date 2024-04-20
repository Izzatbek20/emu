<template>
    <div class="p-5 bg-white rounded-2xl flex max-[420px]:flex-col gap-5 mb-3 w-full">
        <div class="">
            <img src="@/assets/images/person.png" class="rounded" alt="person" srcset="">
        </div>
        <div class="flex flex-col gap-5">
            <div>
                <div class="h4 max-xl:h5">Ism familya</div>
                <span class="text-gray text-lg max-xl:text-base font-normal">Lavozimi</span>
            </div>
            <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-lg:gap-4 max-md:gap-2">
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" />
                    <div>
                        <div class="text-gray text-lg max-xl:text-base font-normal leading-none">E-mail:</div>
                        <div class="text-lg max-xl:text-base font-normal leading-none">ismfamiliya@gmail.com</div>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" />
                    <div>
                        <div class="text-gray text-lg max-xl:text-base font-normal leading-none">E-mail:</div>
                        <div class="text-lg max-xl:text-base font-normal leading-none">ismfamiliya@gmail.com</div>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" />
                    <div>
                        <div class="text-gray text-lg max-xl:text-base font-normal leading-none">E-mail:</div>
                        <div class="text-lg max-xl:text-base font-normal leading-none">ismfamiliya@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {

    }
}
</script>
<style></style>