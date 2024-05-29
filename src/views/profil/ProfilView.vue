<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'profil'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Profil</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <UserUpdateForm v-if="user" :user="user" />
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'profil'" />
            </div>
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import UserUpdateForm from '@/components/UserUpdateForm.vue';
import Bar from '@/components/Bar.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters } from 'vuex';
import { gettersTypes } from '@/store/modules/types';

gsap.registerPlugin(ScrollTrigger)

export default {
    components: {
        BarGorizontal, Bar, Navigation, UserUpdateForm
    },
    computed: {
        ...mapGetters({
            user: gettersTypes.currentUser
        })
    },
    mounted() {

        let pin = document.getElementById("pin");
        let notPin = document.getElementById("pin-conatiner");

        ScrollTrigger.create({
            trigger: pin,
            start: "top 20%",
            end: () => `${notPin.offsetHeight - pin.offsetHeight}px 20%`,
            invalidateOnRefresh: true,
            pin: pin,
            pinSpacing: true,

        });
    },
}
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
}
</style>