<template>

    <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-7 mt-10">

        <div v-for="item in items" class="p-7 bg-white flex items-center justify-start gap-6 rounded-2xl">
            <div>
                <component :is="item.icon"></component>
            </div>
            <div class="txt-small">{{ item.title }}</div>
        </div>

    </div>
</template>
<script>
import Sertificat from '@/ui-components/icons/Sertificat.vue';
import GlobalShipping from '@/ui-components/icons/GlobalShipping.vue';
import DeliverUser from '@/ui-components/icons/DeliverUser.vue';
import DeliverHome from '@/ui-components/icons/DeliverHome.vue';
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        Sertificat, GlobalShipping, DeliverUser, DeliverHome
    },
}
</script>
<style></style>