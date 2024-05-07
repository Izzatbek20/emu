<template>
    <div class="mb-6 max-md:mb-3">
        <div class="flex items-center">
            <div
                class="bg-white rounded-full w-6 h-6 flex flex-shrink-0 justify-center border border-icon-gray checked:border-violet items-center relative">
                <input aria-labelledby="{{ label1 }}"
                    class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-violet focus:outline-none border rounded-full border-gray absolute cursor-pointer w-full h-full checked:border-2 checked:border-white checked:bg-violet"
                    :id="id" :class="error ? 'border-red' : null" type="radio" name="radio" @change="updateValue" />
                <div class="check-icon hidden border-4 border-violet rounded-full w-full h-full z-1"></div>
            </div>
            <label v-if="label" class="ml-2 text-gray text-sm cursor-pointer" :for="id">
                {{ label }}
                <span v-if="required" class="text-red">*</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Radio',
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
        error: String,
        value: String,
        modelValue: [String, Number]
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', this.value)
        }
    },
}
</script>
<style scoped></style>