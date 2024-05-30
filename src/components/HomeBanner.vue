<template>
    <div>
        <!-- Banner -->
        <div class="hidden max-xl:flex justify-center">
            <BarGorizontal @modal="modalOpen" :name="'home'" class="max-xl:h-14 my-10" />
        </div>

        <div class="flex flex-row items-start gap-8 mt-10">
            <div class="basis-3/4 max-xl:flex-1 max-md:p-4  flex flex-row">
                <div
                    class="w-full flex items-center bg-violet rounded-3xl relative overflow-hidden h-96 max-xl:h-[46rem] max-lg:h-[42rem] max-md:h-[38rem] max-sm:h-[35rem]">
                    <Corusel :data="corusel" />
                </div>
            </div>
            <div class="basis-1/4 max-xl:hidden">
                <Bar @modal="modalOpen" :name="'home'" />
            </div>
        </div>

        <!-- Modal yuk -->
        <Modal title="Yukni kuzatish" :isOpen="modalYuk" @close="closeModal">

            <div class="h5 my-10 text-center">Yukingiz qayerda ekanligini bilish uchun yuk ID raqamini kiriting</div>

            <Input :required="true" :error="(order_id.error || order_not)" v-model="order_id.value" />

            <template v-if="orderStatus && orderStatus.order">
                <div>
                    <b>Status</b>: {{ orderStatus.order.status }}
                </div>
            </template>

            <template v-else>
                <p class="txt-small text-center"><span class="text-red">*</span> Yuk id raqamini shaxsiy kabinetingizda
                    jo’natmalar yoki
                    qabul qilingan
                    yuklar bo’limidan bilib olishimgiz mumkin</p>
            </template>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="getOrderStatue" title="Kuzatish" class="w-full" />
            </div>
        </Modal>

        <!-- Modal hamkor -->
        <Modal title="Hamkorlik bo’yicha" :isOpen="modalHamkor" @close="closeModal">

            <div class="h5 my-10 text-center">Xizmatdan foydalanish uchun ma’lumotlaringizni qoldiring</div>

            <Input label="Sizning ismingiz" placeholder="Ism" :required="true" v-model="order_id.value" />
            <InputPhone label="Telefon raqamingiz" :required="true" v-model="order_id.value" />
            <InputSelect label="Biznes faoliyatingiz" :required="true" v-model="order_id.value" />

            <p class="txt-small text-center">Menedjerlarimiz siz bilan tez orada bog’lanishadi</p>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModal" title="Jo’natish" class="w-full" />
            </div>
        </Modal>
    </div>
</template>
<script>
import Bar from '@/components/Bar.vue';
import Corusel from './Corusel.vue';
import BarGorizontal from './BarGorizontal.vue';
import { mapState } from 'vuex';
import { XMLBuilder } from 'fast-xml-parser';
const build = new XMLBuilder({
    attributeNamePrefix: '@', // Atributlarni belgilash
    textNodeName: '#text', // Matn elementlari nomini belgilash
    ignoreAttributes: false // Atributlarni o'xtirmashtirish
});

export default {
    data() {
        return {
            order_id: {
                value: null,
                error: null
            },
            order_not: null,
            modalYuk: false,
            modalHamkor: false,
        }
    },
    components: {
        Corusel, Bar, BarGorizontal
    },
    props: {
        corusel: Array
    },
    computed: {
        ...mapState({
            orderStatus: state => state.courier.orderStatus,
        })
    },
    methods: {
        modalOpen(val) {
            switch (val) {
                case 'modal-yuk':
                    this.modalYuk = true
                    break;
                case 'modal-hamkor':
                    this.modalHamkor = true
                    break;

                default:
                    break;
            }
        },
        async getOrderStatue() {
            if (this.validateOrderId()) {
                return
            }

            this.$store.dispatch("orderStatue", this.order_id.value).then(response => {
                if (!response.tracking) {
                    this.order_not = "ID topilmadi"
                } else {
                    this.order_id = {
                        value: null,
                        error: null
                    }
                    this.order_not = null
                }
            })
        },
        validateOrderId() {
            let error = false;
            if (!this.order_id.value) {
                this.order_id.error = this.$t('validate.required');
                error = true
            } else {
                this.order_id.error = null;
            }

            return error;
        },
        closeModal() {
            this.modalYuk = false
            this.modalHamkor = false
            this.$store.commit('setOrderStatus', null)
        }
    }
}
</script>

<style scoped></style>