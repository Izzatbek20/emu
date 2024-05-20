<template>
    <div class="mb-6 max-md:mb-3">
        <label v-if="label" class="block text-gray mb-2 text-sm" :for="id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <div class="relative group">
            <input
                class="appearance-none border rounded-xl w-full py-3 px-3 pe-14 leading-tight focus:outline-none focus:shadow-outline transition-colors"
                :class="[!disabled && !error ? 'focus:border-violet hover:border-violet' : null, error ? 'border-red' : 'border-icon-gray', (disabled ? 'border-light-gray' : null)]"
                :id="id" :type="type" :value="modelValue" :placeholder="placeholder ?? label" @input="updateValue"
                v-mask="'#########'" :disabled="disabled">
            <div
                class="absolute select-none end-0 top-0 grid grid-cols-1 py-2 place-items-stretch h-full overflow-hidden text-[#333]">
                <span class="cursor-pointer hover:text-violet px-6 flex items-center"
                    style="font-size: x-large;line-height: 0;" @click="plus">+</span>
                <span class="cursor-pointer hover:text-violet px-6 flex items-center"
                    style="font-size: x-large;line-height: 0;" @click="minus">-</span>
            </div>
        </div>

        <p class="text-red text-xs italic mt-2" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'InputConuter',
    data() {
        return {
            id: this.id = this.label + (new Date().getTime())
        }
    },
    props: {
        label: String,
        placeholder: String,
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
        modelValue: [Number, String]
    },
    methods: {
        updateValue(e) {
            const newValue = Number(e.target.value);
            this.$emit('update:modelValue', newValue)
        },
        plus(e) {
            if (!this.disabled) {
                const newValue = Number(this.modelValue) + 1;
                this.$emit('update:modelValue', newValue)
            }
        },
        minus(e) {
            if (!this.disabled) {
                const newValue = Number(this.modelValue) - 1;
                this.$emit('update:modelValue', newValue)
            }
        }
    },
}
</script>
<style scoped></style>