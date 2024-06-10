<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal :name="'bizHaqimizda'" class="max-xl:h-14 my-10" />
        </div>

        <!-- Navigation -->
        <Navigation>Mijozlarimizning biz haqimizda fikrlari</Navigation>

        <div id="pin-conatiner" class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1">

                <div class="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-5">
                    <FikirlarItem v-for="(item, i) in data" :key="i" :v="item.v" :title="item.title" :text="item.text"
                        :content="item.content" />
                </div>

                <div v-if="isLoading" class="relative w-full flex items-center justify-center">
                    <div class="absolute ">
                        <Spinner :fillColor="'fill-violet'" class="ml-2 size-6" />
                    </div>
                </div>
            </div>
            <div class=" basis-1/4 max-xl:hidden">
                <Bar id="pin" :name="'bizHaqimizda'" />
            </div>
        </div>
        <!-- <Pagination class="mt-20" /> -->

        <Title>
            {{ $t('Bizning mijozlarimiz') }}
        </Title>
        <BizniMijozlar :bgItems="'bg-white'" :iconColor="'fill-violet'" />

    </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import Card from '@/components/Card.vue';
import Navigation from '@/components/Navigation.vue';
import Pagination from '@/components/Pagination.vue';
import RaxbariyatItem from '@/components/RaxbariyatItem.vue';
import FikirlarItem from '@/components/FikirlarItem.vue';
import BarGorizontal from '@/components/BarGorizontal.vue';
import Title from '@/components/Title.vue';
import BizniMijozlar from '@/components/BizniMijozlar.vue';
import { data } from '@/constants/youtube';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mapGetters, mapState } from 'vuex';

gsap.registerPlugin(ScrollTrigger)

export default {
    components: {
        Navigation, RaxbariyatItem, Bar, Card, FikirlarItem, Pagination, BarGorizontal, Title, BizniMijozlar
    },
    data() {
        return {
            data: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN
        };
    },
    computed: {
        ...mapState({
            feedback: state => state.emuAdmin.data,
        }),
        ...mapGetters({
            isLoading: 'isLoading'
        })
    },
    watch: {
        feedback(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.feedback, newVal)
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
                            v: element.video,
                            title: item.title,
                            text: item.text,
                            content: item.content,
                        }
                        totalData.push(formatingData)
                    }
                }
            });

            this.data = totalData
        }
    },
    mounted() {
        this.$store.dispatch('feedback')

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