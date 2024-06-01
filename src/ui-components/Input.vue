<template>
    <div class="mb-6 max-md:mb-3">
        <label v-if="label" class="block text-gray mb-2 text-sm" :for="id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <div class="relative group">
            <input :ref="autoFocus"
                class="appearance-none border rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors"
                :class="[!disabled && !error ? 'focus:border-violet hover:border-violet' : null, (error ? 'border-red' : 'border-icon-gray'), classInput, (disabled ? 'border-light-gray' : null), { 'pe-14': editIcon }]"
                :id="id" :type="type" :placeholder="placeholder ?? label" @input="updateValue" :disabled="disabled"
                :value="modelValue">
            <div v-if="editIcon"
                class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none text-[#333]">
                <Edit :fillColor="'fill-icon-gray group-hover:fill-violet'" />
            </div>
        </div>
        <p class="text-red text-xs italic mt-2" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            id: this.id = this.label + (new Date().getTime())
        }
    },
    props: {
        label: String,
        placeholder: String,
        classInput: String,
        disabled: false,
        autoFocus: String,
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false
        },
        editIcon: {
            type: Boolean,
            default: false
        },
        error: String,
        modelValue: [String, Number]
    },
    mounted() {
        if (this.autoFocus) {
            this.$refs[this.autoFocus].focus()
        }
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    },
}
</script>
<style scoped></style>