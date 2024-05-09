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

            <Input :required="true" v-model="order_id" />

            <p class="txt-small text-center"><span class="text-red">*</span> Yuk id raqamini shaxsiy kabinetingizda
                jo’natmalar yoki
                qabul qilingan
                yuklar bo’limidan bilib olishimgiz mumkin</p>
            <div class="mt-2 p-3 text-center space-x-4 md:block">
                <ButtonVioletLogin @click="closeModal" title="Saqlash" class="w-full" />
            </div>
        </Modal>

        <!-- Modal hamkor -->
        <Modal title="Hamkorlik bo’yicha" :isOpen="modalHamkor" @close="closeModal">

            <div class="h5 my-10 text-center">Xizmatdan foydalanish uchun ma’lumotlaringizni qoldiring</div>

            <Input label="Sizning ismingiz" placeholder="Ism" :required="true" v-model="order_id" />
            <InputPhone label="Telefon raqamingiz" :required="true" v-model="order_id" />
            <InputSelect label="Biznes faoliyatingiz" :required="true" v-model="order_id" />

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

export default {
    data() {
        return {
            order_id: null,
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
            console.log(val);
        },
        closeModal() {
            this.modalYuk = false
            this.modalHamkor = false
        }
    }
}
</script>

<style scoped></style>