<template>
    <div id="a" class="w-full">
        <!-- Bu yerda form mavjud bo'lib, kodning qolgan qismini Vue komponenti ichida ishlatishingiz mumkin -->
    </div>
</template>

<script>
export default {
    name: "AmoForm",
    mounted() {
        // Vue komponenti yuklanganda skriptlarni dinamik tarzda yuklang
        this.loadAmoCrmScripts();
    },
    methods: {
        loadAmoCrmScripts() {
            // `<script>` elementlarini Vue komponentiga dinamik tarzda qo'shish
            const script1 = document.createElement("script");
            script1.innerHTML = `!function (a, m, o, c, r, m) { a[o + c] = a[o + c] || { setMeta: function (p) { this.params = (this.params || []).concat([p]) } }, a[o + r] = a[o + r] || function (f) { a[o + r].f = (a[o + r].f || []).concat([f]) }, a[o + r]({ id: "1336354", hash: "f20a492e99e875650b7d7830ca0e6ebe", locale: "ru" }), a[o + m] = a[o + m] || function (f, k) { a[o + m].f = (a[o + m].f || []).concat([[f, k]]) } }(window, 0, "amo_forms_", "params", "load", "loaded");`;
            document.getElementById('a').appendChild(script1);

            const script2 = document.createElement("script");
            script2.id = "amoforms_script_1336354";
            script2.async = true;
            script2.charset = "utf-8";
            script2.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1714817271";
            document.getElementById('a').appendChild(script2);
        }
    }
};
</script>
<style scoped>
#amofroms_main_wrapper {
    box-shadow: none !important
}
</style>