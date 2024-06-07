<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'mijoz'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Eng ko’p beriladigan savollar</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4">

                <Collaps v-for="(item, i) in data" :key="i" :title="item.title" :body="item.text" />

                <div v-if="isLoading" class="relative w-full flex items-center justify-center">
                    <div class="absolute ">
                        <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                    </div>
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'mijoz'" />
            </div>
        </div>

        <div>
            <!-- Measoft map blokini yaratish -->
            <!-- <div id="measoftMapBlock"></div> -->
        </div>
    </div>
</template>

<script>
import BarGorizontal from '@/components/BarGorizontal.vue';
import Navigation from '@/components/Navigation.vue';
import Bar from '@/components/Bar.vue';
import { data } from '@/constants/quetsion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters, mapState } from 'vuex';

gsap.registerPlugin(ScrollTrigger)

export default {
    data() {
        return {
            data: []
        };
    },
    components: {
        BarGorizontal, Bar, Navigation
    },
    computed: {
        ...mapState({
            question: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        question(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.question, newVal)
        }
    },
    methods: {
        async fetchData(newVal, locale) {
            const totalData = [];
            newVal.forEach((element, index) => {
                if (element.langs) {
                    const item = element.langs.find(item => item.lang == locale)
                    if (item) {
                        const formatingData = {
                            id: element.id,
                            title: item.title,
                            text: item.text,
                        }
                        totalData.push(formatingData)
                    }
                }
            });

            this.data = totalData
        }
    },
    mounted() {
        this.$store.dispatch('question')

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