<template>
    <div class="mb-6 max-md:mb-3">
        <label v-if="label" class="block text-gray mb-2 text-sm" :for="id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <div class="relative group">
            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none text-[#333]">
                +998
            </div>
            <input
                class="appearance-none border rounded-xl w-full py-3 px-3 ps-14 leading-tight focus:outline-none focus:shadow-outline transition-colors"
                :class="[!disabled && !error ? 'focus:border-violet hover:border-violet' : null, (error ? 'border-red' : 'border-icon-gray'), (disabled ? 'border-light-gray' : null)]"
                :id="id" :type="type" @input="updateValue" v-mask="'## ### ## ##'" :disabled="disabled"
                :value="modelValue">
        </div>

        <p class="text-red text-xs italic mt-2" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'InputPhone',
    data() {
        return {
            id: this.id = this.label + (new Date().getTime())
        }
    },
    props: {
        label: String,
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: false,
        error: String,
        modelValue: [String, Number]
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    },
}
</script>
<style scoped></style>