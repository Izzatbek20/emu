<template>
    <div class="mb-6 max-md:mb-3">
        <label v-if="label" class="block text-gray mb-2 text-sm" :for="id">
            {{ label }}
            <span v-if="required" class="text-red">*</span>
        </label>
        <input
            class="appearance-none border rounded-xl w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline transition-colors"
            :class="error ? 'border-red' : 'border-icon-gray focus:border-violet hover:border-violet'" :id="id"
            :type="type" :placeholder="placeholder ?? label" @input="updateValue">
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
        }
    },
}
</script>
<style scoped></style>