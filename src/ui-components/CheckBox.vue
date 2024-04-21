<template>
    <div class="mb-6 max-md:mb-3">
        <div class="flex items-center">
            <div
                class="bg-white rounded w-6 h-6 flex flex-shrink-0 justify-center border border-icon-gray checked:border-violet items-center relative">
                <input aria-labelledby="{{ label1 }}"
                    class="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-violet focus:outline-none border rounded border-gray absolute cursor-pointer w-full h-full checked:border-2 checked:border-violet checked:bg-violet"
                    :id="id" :class="error ? 'border-red' : null" :checked="modelValue" type="checkbox"
                    @change="updateValue" />
                <div @click="updateValue"
                    class="check-icon cursor-pointer flex items-center justify-center rounded w-full h-full z-20">
                    <span class="text-white peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                            fill="currentColor" stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <label v-if="label" class="ml-2 text-black txt-normal cursor-pointer" :for="id">
                {{ label }}
                <span v-if="required" class="text-red">*</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckBox',
    data() {
        return {
            id: this.id = this.label + (new Date().getTime()),
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
        modelValue: [Boolean]
    },
    methods: {
        updateValue(e) {
            const modelValue = !this.modelValue
            this.$emit('update:modelValue', modelValue)
        }
    },
}
</script>
<style scoped></style>