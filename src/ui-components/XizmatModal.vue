<template>
    <div>
        <Modal :title="title" :isOpen="isOpen && !responseModal" @close="closeModal">

            <form ref="formXizmat" @submit.prevent="send">
                <div class="h5 my-10 text-center">{{ $t('xizmatdanFoydalanishUchunMa’lumotlaringizniQoldiring') }}</div>

                <Input :label="$t('Sizning ismingiz')" :placeholder="$t('Ism')" :required="true" v-model="name.value"
                    :error="name.error" :disabled="loading" />
                <InputPhone :label="$t('Telefon raqamingiz')" :required="true" v-model="phone.value"
                    :error="phone.error" :disabled="loading" />

                <p class="txt-small text-center">{{ $t('Menedjerlarimiz siz bilan tez orada bog’lanishadi') }}</p>

                <div class="mt-2 p-3 text-center space-x-4 md:block">
                    <ButtonVioletLogin :disabled="loading" :title="$t('Jo’natish')" class="w-full" />
                </div>
            </form>
        </Modal>

        <!-- Javob modal -->
        <Modal :title="$t(alert.title)" :isOpen="responseModal" @close="closeModal">

            <div class="h5 my-10 text-center">{{ $t(alert.message) }}</div>

            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModal" :title="$t('Saqlash')" class="w-full" />
            </div>
        </Modal>
    </div>
</template>

<script>
export default {
    name: 'XizmatModal',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        title: String
    },
    data() {
        return {
            name: {
                value: null,
                error: null
            },
            phone: {
                value: null,
                error: null
            },
            alert: {
                title: 'alertSuccess.title',
                message: 'alertSuccess.message'
            },
            responseModal: false,
            loading: false // Loading flag
        }
    },
    methods: {
        async send() {
            let error = this.validate()

            if (error) {
                return;
            }

            if (!error) {
                this.loading = true;

                this.$recaptcha('login').then((token) => {
                    this.$store.dispatch('createLeads', {
                        "recaptcha": token,
                        "name": "Xizmatdan foydalanish",
                        "created_by": 0,
                        "custom_fields_values": [
                            {
                                "field_id": 2008581,
                                "values": [
                                    {
                                        "value": this.name.value
                                    }
                                ]
                            },
                            {
                                "field_id": 2008583,
                                "values": [
                                    {
                                        "value": "+998" + this.phone.value
                                    }
                                ]
                            },
                        ],
                        "tags_to_add": [
                            {
                                "name": "Xizmat"
                            }
                        ]
                    }).then(response => {

                        if (response && response.data['_embedded']) {
                            this.responseModal = true
                            this.loading = false;

                            // Fo'rmani tozalash
                            this.$refs.formXizmat.reset();
                            this.name.value = null
                            this.phone.value = null
                        } else {
                            this.responseModal = true
                            this.loading = false;
                            this.alert = {
                                title: 'alertError.title',
                                message: 'alertError.message'
                            }
                        }
                    }).catch(err => {
                        if (err.status == 419) {
                            this.alert = {
                                title: 'alertError.title',
                                message: 'alertError.message'
                            }
                            this.responseModal = true
                        }
                    }).finally(as => {
                        this.loading = false;
                    })
                });
            }
        },
        validate() {
            let error = false;
            if (!this.name.value) {
                this.name.error = this.$t('validate.required');
                error = true
            } else {
                this.name.error = null;
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
            this.responseModal = false;
            this.$emit('close');
        },
    },
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}

iframe {
    height: 619px !important;
}
</style>