<template>
    <div class="min-h-screen flex items-start justify-center w-full rounded-3xl">
        <UserLoginAndPasswordChangeForm v-if="user" :user="user" />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import UserLoginAndPasswordChangeForm from '@/components/UserLoginAndPasswordChangeForm.vue';
import { gettersTypes } from '@/store/modules/types';
import { mapGetters } from 'vuex';

export default {
    components: {
        Navigation, UserLoginAndPasswordChangeForm
    },
    computed: {
        ...mapGetters({
            user: gettersTypes.currentUser
        }),
    },
}
</script>