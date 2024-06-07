<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Raxbariyat</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10 ">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <RaxbariyatItem v-for="(item, i) in data" :key="i" :user="item" />

                <div v-if="isLoading" class="relative w-full flex items-center justify-center">
                    <div class="absolute ">
                        <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                    </div>
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters, mapState } from 'vuex';

gsap.registerPlugin(ScrollTrigger)

export default {
    components: {
        Navigation, RaxbariyatItem, BarGorizontal, Bar
    },
    data() {
        return {
            data: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN
        }
    },
    computed: {
        ...mapState({
            raxbariyat: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        raxbariyat(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.raxbariyat, newVal)
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            if (newVal.users) {
                newVal.users.forEach(element => {
                    const item = element.langs.find(item => item.lang == locale)
                    if (item) {
                        const formatingData = {
                            id: element.id,
                            image: `${this.origin}/${element.image}`,
                            fullname: item.fullname,
                            lovozim: item.role,
                            email: item.email,
                            work_day: item.work_day
                        }
                        this.data.push(formatingData)
                    }
                });
            }
        }
    },
    mounted() {
        this.$store.dispatch('raxbariyat', 1)

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
    }
}
</script>