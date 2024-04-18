<template>
    <div class="p-5 bg-white rounded-2xl flex gap-5 mb-3">
        <img src="@/assets/images/person.png" class="rounded" alt="person" srcset="">
        <div class="flex flex-col gap-5">
            <div>
                <div class="h4">Ism familya</div>
                <span class="text-gray text-lg font-normal">Lavozimi</span>
            </div>
            <div class="flex gap-10"> 
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" class="mt-1" />
                    <div>
                        <div class="text-gray text-lg font-normal">E-mail:</div>
                        <div class="text-lg font-normal">ismfamiliya@gmail.com</div>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" class="mt-1" />
                    <div>
                        <div class="text-gray text-lg font-normal">E-mail:</div>
                        <div class="text-lg font-normal">ismfamiliya@gmail.com</div>
                    </div>
                </div>
                <div class="flex flex-row gap-2">
                    <Email :fillColor="'fill-violet'" class="mt-1" />
                    <div>
                        <div class="text-gray text-lg font-normal">E-mail:</div>
                        <div class="text-lg font-normal">ismfamiliya@gmail.com</div>
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