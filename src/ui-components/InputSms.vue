<template>
    <input :ref="`ref${id}`" v-mask="'#'"
        class="mb-6 max-md:mb-3 appearance-none text-center border rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors"
        :class="[!disabled && !error ? 'focus:border-violet hover:border-violet' : null, (error ? 'border-red' : 'border-icon-gray'), classInput, (disabled ? 'border-light-gray' : null)]"
        :id="id" :type="type" @input="updateValue" :disabled="disabled" @keyup="handleKeydown" :value="modelValue">
</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'InputSms',
    data() {
        return {
            deletePressDouble: false, // o'chirishni ikki marta bosilyotganida oldingi inputga o'tkazish
        }
    },
    props: {
        id: [String, Number],
        focus: [String, Number],
        classInput: String,
        disabled: false,
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false
        },
        error: String,
        modelValue: [String, Number]
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value)
        },
        focusInput() {
            this.$refs[`ref${this.id}`].focus();
        },
        handleKeydown(event) {
            const key = event.key;
            // Only handle alphabetic characters and digits
            const isCharacter = key.length === 1 && /[a-zA-Z0-9]/.test(key);
            const isBackspaceOrDelete = key === 'Backspace' || key === 'Delete';

            if (isCharacter) {
                this.$emit('next-focus', this.id);
            } else if (isBackspaceOrDelete) {
                if (this.deletePressDouble) {
                    this.deletePressDouble = false;
                    this.$emit('prevent-focus', this.id);
                } else {
                    this.deletePressDouble = true;
                }
            }
        }
    },
    watch: {
        focus(newVal) {
            if (newVal == this.id) {
                this.focusInput();
            }
        },
    },
    mounted() {
        if (this.id == this.focus) {
            this.focusInput()
        }
    },
}
</script>
<style scoped></style>