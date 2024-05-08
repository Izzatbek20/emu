<template>
    <transition name="fade">
        <div :class="isModalVisible ? 'block' : 'hidden'">

            <div class="fixed h-dvh w-dvw top-0 left-0 inset-0 z-[999999] flex items-center justify-center">
                <div
                    class="absolute z-[90] w-11/12 max-w-sm md:max-w-sm lg:max-w-md p-10 max-sm:p-5 mx-auto my-auto rounded-3xl ">
                    <div class="flex items-center justify-between">
                        <h3 class="h3-2 max-md:h4"></h3>
                        <CloseX @click="closeModal" :fillColor="'fill-orange'" class="cursor-pointer" />
                    </div>
                    <div :id="id" class="w-full">
                    </div>
                </div>
                <div @click="closeModal"
                    class="fixed h-dvh w-dvw bg-black top-0 left-0 opacity-70 inset-0 flex items-center justify-center">
                </div>
            </div>
        </div>
    </transition>
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
            amoFormLoaded: false,
            id: (new Date().getTime())
        };
    },
    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
    mounted() {
        this.loadAmoCrmScripts();
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        loadAmoCrmScripts() {
            // `formAmo` divining mavjudligini tekshiring.
            const formAmoElement = document.getElementById(this.id);
            // console.log(formAmoElement);
            if (!formAmoElement) {
                console.error('formAmo div topilmadi');
                return;
            }

            // Skriptlarni yuklash.
            const script1 = document.createElement("script");
            script1.innerHTML = `!function (a, m, o, c, r, m) { a[o + c] = a[o + c] || { setMeta: function (p) { this.params = (this.params || []).concat([p]) } }, a[o + r] = a[o + r] || function (f) { a[o + r].f = (a[o + r].f || []).concat([f]) }, a[o + r]({ id: "1336434", hash: "dcf887cf441ed42858832287a72c2b06", locale: "ru" }), a[o + m] = a[o + m] || function (f, k) { a[o + m].f = (a[o + m].f || []).concat([[f, k]]) } }(window, 0, "amo_forms_", "params", "load", "loaded");`;
            formAmoElement.appendChild(script1);

            const script2 = document.createElement("script");
            script2.id = "amoforms_script_1336354";
            script2.async = true;
            script2.charset = "utf-8";
            script2.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1714817271";
            formAmoElement.appendChild(script2);

            this.amoFormLoaded = true;
        }
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