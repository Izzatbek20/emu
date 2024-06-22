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
                    <Corusel :data="coruselData" />
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

            <Input label="Sizning ismingiz" placeholder="Ism" :required="true" v-model="name.value" :error="name.error"
                :disabled="loading" />
            <InputPhone label="Telefon raqamingiz" :required="true" v-model="phone.value" :error="phone.error"
                :disabled="loading" />
            <Input label="Biznes faoliyatingiz" :required="true" v-model="biznes.value" :error="biznes.error"
                :disabled="loading" />

            <p class="txt-small text-center">Menedjerlarimiz siz bilan tez orada bog’lanishadi</p>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="sendAorcrm" :disabled="loading" :title="$t('Jo’natish')" class="w-full" />
            </div>
        </Modal>

        <!-- Javob modal -->
        <Modal :title="$t(alert.title)" :isOpen="responseModal" @close="responseModal = false">

            <div class="h5 my-10 text-center">{{ $t(alert.message) }}</div>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="responseModal = false" :title="$t('Saqlash')" class="w-full" />
            </div>
        </Modal>
    </div>
</template>
<script>
import Bar from '@/components/Bar.vue';
import Corusel from './Corusel.vue';
import BarGorizontal from './BarGorizontal.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            order_id: {
                value: null,
                error: null
            },
            name: {
                value: null,
                error: null
            },
            phone: {
                value: null,
                error: null
            },
            biznes: {
                value: null,
                error: null
            },
            alert: {
                title: 'alertError.title',
                message: 'alertError.message'
            },
            coruselData: [],
            origin: import.meta.env.VITE_EMU_API_ORIGIN,
            loading: false,
            order_not: null,
            modalYuk: false,
            modalHamkor: false,
            responseModal: false,
        }
    },
    components: {
        Corusel, Bar, BarGorizontal
    },
    computed: {
        // ...mapGetters({
        //     isLoading: 'isLoading'
        // }),
        ...mapState({
            orderStatus: state => state.courier.orderStatus,
            bannerData: state => state.emuAdmin.bannerData,
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
        async sendAorcrm() {
            let error = this.validate()

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;

                this.$recaptcha('login').then((token) => {
                    this.$store.dispatch('createLeads', {
                        "recaptcha": token,
                        "name": "Hamkorlik bo’yicha",
                        "created_by": 0,
                        "custom_fields_values": [
                            {
                                "field_id": 261449,
                                "values": [
                                    {
                                        "value": this.name.value
                                    }
                                ]
                            },
                            {
                                "field_id": 261451,
                                "values": [
                                    {
                                        "value": "+998" + this.phone.value
                                    }
                                ]
                            },
                            {
                                "field_id": 261453,
                                "values": [
                                    {
                                        "value": this.biznes.value
                                    }
                                ]
                            },
                        ],
                        "tags_to_add": [
                            {
                                "name": "Hamkorlik"
                            }
                        ]
                    }).then(response => {
                        this.modalHamkor = false
                    }).catch(err => {
                        if (err.status == 419) {
                            this.responseModal = true
                        }
                    }).finally(as => {
                        this.loading = false;
                    })
                });
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
        validate() {
            let error = false;
            if (!this.name.value) {
                this.name.error = this.$t('validate.required');
                error = true
            } else {
                this.name.error = null;
            }

            if (!this.biznes.value) {
                this.biznes.error = this.$t('validate.required');
                error = true
            } else {
                this.biznes.error = null;
            }

            if (!this.phone.value) {
                this.phone.error = this.$t('validate.required');
                error = true
            } else {
                if (this.phone.value && this.phone.value.length != 12) {
                    this.phone.error = this.$t('validate.phone');
                    error = true
                } else {
                    this.phone.error = null;
                }
            }

            return error;
        },
        closeModal() {
            this.modalYuk = false
            this.modalHamkor = false
            this.$store.commit('setOrderStatus', null)
        },
        async fetchData(newVal, locale) {
            if (newVal) {
                const data = []
                newVal.forEach(element => {
                    const item = element.langs.find(item => item.lang == locale)
                    data.push({
                        image: `${this.origin}/${element.image.replaceAll(/\\/g, '/')}`,
                        title: item.text,
                    })
                });
                this.coruselData = data
            }
        }
    },
    watch: {
        bannerData(newVal) {
            this.fetchData(newVal, this.$i18n.locale)
        },
        '$i18n.locale'(newVal) {
            this.fetchData(this.bannerData, newVal)
        }
    },
    mounted() {
        this.$store.dispatch('getBanner')
    }
}
</script>

<style scoped></style>